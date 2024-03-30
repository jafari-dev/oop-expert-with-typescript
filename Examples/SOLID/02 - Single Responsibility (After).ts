class Settings {
  theme: "LIGHT" | "DARK";
  preferredLanguage: string;
  receiveNotifications: boolean;

  constructor(
    theme: "LIGHT" | "DARK",
    preferredLanguage: string,
    receiveNotifications: boolean
  ) {
    this.theme = theme;
    this.preferredLanguage = preferredLanguage;
    this.receiveNotifications = receiveNotifications;
  }

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public updatePreferredLanguage(language: string): void {
    this.preferredLanguage = language;
  }

  public toggleNotifications(): void {
    this.receiveNotifications = !this.receiveNotifications;
  }
}

class Profile {
  email: string;
  bio: string;
  settings: Settings;

  constructor(email: string, bio: string, settings: Settings) {
    this.email = email;
    this.bio = bio;
    this.settings = settings;
  }

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public getSettings(): Settings {
    return this.settings;
  }
}
