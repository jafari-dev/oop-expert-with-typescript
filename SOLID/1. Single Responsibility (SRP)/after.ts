class Settings {
  constructor(
    private theme: "LIGHT" | "DARK",
    private preferredLanguage: string,
    private receiveNotifications: boolean
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

  public toggleNotifications(): void {
    this.receiveNotifications = !this.receiveNotifications;
  }
}

class Profile {
  constructor(
    private email: string,
    private bio: string,
    private settings: Settings
  ) {}

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
