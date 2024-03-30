class Profile {
  email: string;
  bio: string;
  theme: "LIGHT" | "DARK";
  preferredLanguage: string;
  receiveNotifications: boolean;

  constructor(
    email: string,
    bio: string,
    theme: "LIGHT" | "DARK",
    preferredLanguage: string,
    receiveNotifications: boolean
  ) {
    this.email = email;
    this.bio = bio;
    this.theme = theme;
    this.preferredLanguage = preferredLanguage;
    this.receiveNotifications = receiveNotifications;
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

  public toggleNotifications(): void {
    this.receiveNotifications = !this.receiveNotifications;
  }
}
