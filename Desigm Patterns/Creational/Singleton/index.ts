class Config {
  private static instance: Config | null = null;
  
  private volume: number;
  private theme: string;

  private constructor() {
    this.volume = 50;
    this.theme = "WHITE";
  }

  public static getInstance() {
    if (this.instance === null) {
      this.instance = new Config();
    }

    return this.instance;
  }

  public setVolume(newVolume: number): void {
    if (newVolume < 0) {
      this.volume = 0;
    } else if (newVolume > 100) {
      this.volume = 100;
    } else {
      this.volume = newVolume;
    }
  }

  public setTheme(newTheme: string) {
    const VALID_THEMES = ["WHITE", "YELLOW", "BLUE", "ORANGE", "CYAN", "BLACK"];

    if (VALID_THEMES.includes(newTheme.toUpperCase())) {
      this.theme = newTheme.toUpperCase();
    } else {
      this.theme = "WHITE";
    }
  }

  public getVolumn(): number {
    return this.volume;
  }

  public getTheme(): string {
    return this.theme;
  }
}

// configOne === configTwo
const configOne = Config.getInstance();
const configTwo = Config.getInstance();
