/**
 * Progressive enhancement for the generated documentation page:
 * theme toggle, scroll spy, search, copy buttons, mobile navigation.
 */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ------------------------------------------------------------- theme -- */

  var themeToggle = document.querySelector(".theme-toggle");

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");

    if (explicit === "light" || explicit === "dark") {
      return explicit;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";

      root.setAttribute("data-theme", next);

      try {
        localStorage.setItem("theme", next);
      } catch (error) {
        /* storage unavailable (private mode) — the toggle still works */
      }
    });
  }

  /* --------------------------------------------------- reading progress -- */

  var progressBar = document.querySelector(".progress__bar");
  var toTop = document.querySelector(".to-top");

  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? window.scrollY / max : 0;

    if (progressBar) {
      progressBar.style.width = `${(ratio * 100).toFixed(2)}%`;
    }

    if (toTop) {
      toTop.hidden = window.scrollY < 600;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* --------------------------------------------------------- scroll spy -- */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav__link, .nav__section-link"));
  var linkByAnchor = {};
  var headings = [];

  navLinks.forEach(function (link) {
    var anchor = decodeURIComponent(link.getAttribute("href").slice(1));
    var heading = document.getElementById(anchor);

    if (heading) {
      linkByAnchor[anchor] = link;
      headings.push(heading);
    }
  });

  var activeLink = null;

  function setActive(anchor) {
    var link = linkByAnchor[anchor];

    if (!link || link === activeLink) {
      return;
    }

    if (activeLink) {
      activeLink.classList.remove("is-current");
    }

    link.classList.add("is-current");
    activeLink = link;

    // Keep the highlighted entry inside the sidebar viewport.
    var sidebar = document.querySelector(".sidebar");

    if (sidebar && sidebar.scrollHeight > sidebar.clientHeight) {
      var linkTop = link.offsetTop;
      var visibleTop = sidebar.scrollTop;
      var visibleBottom = visibleTop + sidebar.clientHeight;

      if (linkTop < visibleTop + 40 || linkTop > visibleBottom - 60) {
        sidebar.scrollTop = linkTop - sidebar.clientHeight / 2;
      }
    }
  }

  function updateSpy() {
    var offset = 140;
    var current = null;

    for (var i = 0; i < headings.length; i += 1) {
      if (headings[i].getBoundingClientRect().top <= offset) {
        current = headings[i];
      } else {
        break;
      }
    }

    // Near the bottom of the page the last section may never reach the offset.
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      current = headings[headings.length - 1] || current;
    }

    if (current) {
      setActive(current.id);
    }
  }

  if (headings.length > 0) {
    var ticking = false;

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(function () {
            updateSpy();
            ticking = false;
          });
        }
      },
      { passive: true },
    );

    updateSpy();
  }

  /* ------------------------------------------------------------ search -- */

  var searchInput = document.querySelector(".search__input");
  var searchResults = document.querySelector(".search__results");
  var navEmpty = document.querySelector(".nav__empty");
  var navSections = document.querySelector(".nav__sections");

  var index = Array.prototype.slice.call(document.querySelectorAll(".nav__link[data-search]")).map(function (link) {
    var section = link.closest(".nav__section");
    var sectionLink = section ? section.querySelector(".nav__section-link") : null;

    return {
      link: link,
      haystack: link.getAttribute("data-search") || "",
      label: link.textContent || "",
      section: sectionLink ? sectionLink.textContent || "" : "",
    };
  });

  var highlighted = -1;

  function closeResults() {
    if (searchResults) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
    }

    highlighted = -1;
  }

  function renderResults(matches) {
    if (!searchResults) {
      return;
    }

    searchResults.innerHTML = "";

    matches.slice(0, 12).forEach(function (entry) {
      var item = document.createElement("li");
      var anchor = document.createElement("a");

      anchor.href = entry.link.getAttribute("href");
      anchor.textContent = entry.label;

      var meta = document.createElement("small");

      meta.textContent = entry.section;
      anchor.appendChild(meta);
      item.appendChild(anchor);
      searchResults.appendChild(item);
    });

    searchResults.hidden = matches.length === 0;
    highlighted = -1;
  }

  function moveHighlight(step) {
    if (!searchResults || searchResults.hidden) {
      return;
    }

    var options = searchResults.querySelectorAll("a");

    if (options.length === 0) {
      return;
    }

    if (highlighted >= 0) {
      options[highlighted].classList.remove("is-active");
    }

    highlighted = (highlighted + step + options.length) % options.length;
    options[highlighted].classList.add("is-active");
    options[highlighted].scrollIntoView({ block: "nearest" });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var query = searchInput.value.trim().toLowerCase();

      if (query === "") {
        index.forEach(function (entry) {
          entry.link.parentElement.hidden = false;
        });

        if (navSections) {
          navSections.hidden = false;
        }

        if (navEmpty) {
          navEmpty.hidden = true;
        }

        closeResults();

        return;
      }

      var matches = index.filter(function (entry) {
        return entry.haystack.indexOf(query) !== -1;
      });

      // Filter the sidebar and show a dropdown of the same matches.
      index.forEach(function (entry) {
        entry.link.parentElement.hidden = matches.indexOf(entry) === -1;
      });

      if (navEmpty) {
        navEmpty.hidden = matches.length !== 0;
      }

      renderResults(matches);
    });

    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveHighlight(1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        moveHighlight(-1);
      } else if (event.key === "Enter") {
        var options = searchResults ? searchResults.querySelectorAll("a") : [];
        var target = highlighted >= 0 ? options[highlighted] : options[0];

        if (target) {
          event.preventDefault();
          target.click();
          searchInput.blur();
        }
      } else if (event.key === "Escape") {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input"));
        searchInput.blur();
      }
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".search")) {
        closeResults();
      }
    });

    // "/" focuses search, the way most documentation sites behave.
    document.addEventListener("keydown", function (event) {
      var typingElsewhere = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);

      if (event.key === "/" && !typingElsewhere) {
        event.preventDefault();
        searchInput.focus();
      }

      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        searchInput.focus();
      }
    });
  }

  if (searchResults) {
    searchResults.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeResults();
      }
    });
  }

  /* -------------------------------------------------------- mobile nav -- */

  var menuButton = document.querySelector(".topbar__menu");
  var sidebar = document.querySelector(".sidebar");
  var scrim = document.querySelector(".sidebar__scrim");

  function setMenu(open) {
    if (!sidebar) {
      return;
    }

    sidebar.classList.toggle("is-open", open);

    if (scrim) {
      scrim.hidden = !open;
    }

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", String(open));
    }
  }

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      setMenu(!sidebar.classList.contains("is-open"));
    });
  }

  if (scrim) {
    scrim.addEventListener("click", function () {
      setMenu(false);
    });
  }

  if (sidebar) {
    sidebar.addEventListener("click", function (event) {
      if (event.target.closest("a") && window.matchMedia("(max-width: 900px)").matches) {
        setMenu(false);
      }
    });
  }

  /* ------------------------------------------------------ copy buttons -- */

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".code-card__copy");

    if (!button) {
      return;
    }

    var card = button.closest(".code-card");
    var code = card ? card.querySelector("code") : null;

    if (!code || !navigator.clipboard) {
      return;
    }

    navigator.clipboard.writeText(code.innerText).then(function () {
      var label = button.querySelector("span");
      var previous = label ? label.textContent : "";

      button.classList.add("is-copied");

      if (label) {
        label.textContent = "Copied";
      }

      window.setTimeout(function () {
        button.classList.remove("is-copied");

        if (label) {
          label.textContent = previous;
        }
      }, 1600);
    });
  });
})();
