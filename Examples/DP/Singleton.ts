type CityStatus = {
  city: string;
  status: "SUNNY" | "CLOUDY" | "RAINY" | "SNOWY";
};

class Weather {
  private static instance: Weather | null = null;

  private statusOfCities: Array<CityStatus>;

  private constructor() {
    const data: Array<CityStatus> = []; // Get data from API

    this.statusOfCities = data;
  }

  public getStatusByCity(city: string): CityStatus | undefined {
    return this.statusOfCities.find((data) => data.city === city);
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new Weather();
    }

    return this.instance;
  }
}

const instanceOne = Weather.getInstance();
const instanceTwo = Weather.getInstance();
// instanceOne is equal to instanceTwo (instanceOne === instanceTwo)
