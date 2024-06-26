### 1. Single Responsibility (SRP)

#### Original Definition

> There should never be more than one reason for a class to change. Every class should have only one responsibility.

#### Simple Definition

> SRP means that each class should only be responsible for one thing. It keeps classes focused and makes code easier to understand and maintain.

<img src="https://user-images.githubusercontent.com/37804060/153056645-8760ddfa-01f3-4c21-9279-ab6ba669a0fc.jpg"/>

#### Example

Before following the Single Responsibility Principle (SRP), the `Profile` class was handling both user profile data (like email, bio, etc.) and user settings (theme and preferredLanguage). This violated SRP because a class should have only one reason to change, but here the Profile class had multiple reasons to change - if either the profile data structure or the settings structure changed.

After following SRP, the code was refactored to separate concerns. The Profile class now only deals with profile-related information such as email and bio. The settings-related functionality has been moved to a new Settings class. This change improves maintainability and makes the codebase more flexible. Now, if there's a need to update how settings are handled, it only affects the Settings class, keeping the Profile class untouched. Additionally, it enhances code readability and makes it easier to understand the purpose of each class.

:x: Before following SRP:

```typescript
class Profile {
  private email: string;
  private bio: string;
  private theme: "LIGHT" | "DARK";
  private preferredLanguage: string;

  constructor(params: { email: string; bio: string; theme: "LIGHT" | "DARK"; preferredLanguage: string }) {
    const { email, bio, theme, preferredLanguage } = params;

    this.email = email;
    this.bio = bio;
    this.theme = theme;
    this.preferredLanguage = preferredLanguage;
  }

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
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

  public getProfile() {
    return {
      email: this.email,
      bio: this.bio,
      theme: this.theme,
      preferredLanguage: this.preferredLanguage,
    };
  }
}
```

:heavy_check_mark: After following SRP:

```typescript
class Settings {
  constructor(
    protected theme: "LIGHT" | "DARK",
    protected preferredLanguage: string,
  ) {}

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

  public getSettings() {
    return { theme: this.theme, preferredLanguage: this.preferredLanguage };
  }
}

class Profile {
  constructor(
    protected email: string,
    protected bio: string,
    protected settings: Settings,
  ) {}

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public getProfile() {
    return { email: this.email, bio: this.bio, settings: this.settings.getSettings() };
  }
}
```
