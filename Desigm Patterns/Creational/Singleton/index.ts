class Config {
  private static instance: Config | null = null;
  
  private volumn: number;
  private theme: string;

  private constructor() {
    this.volumn = 50;
    this.theme = "WHITE";
  }

  public static getInstance() {
    if (this.instance === null) {
      this.instance = new Config();
    }

    return this.instance;
  }

  public setVolumn(newVolumn: number): void {
    if (newVolumn < 0) {
      this.volumn = 0;
    } else if (newVolumn > 100) {
      this.volumn = 100;
    } else {
      this.volumn = newVolumn;
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
    return this.volumn;
  }

  public getTheme(): string {
    return this.theme;
  }
}

// configOne === configTwo
const configOne = Config.getInstance();
const configTwo = Config.getInstance();
