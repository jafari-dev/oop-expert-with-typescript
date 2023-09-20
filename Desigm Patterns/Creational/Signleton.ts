class Weather {
  private static instance: Weather | null = null

  private citiesData: { city: string; temperature: number }[]

  private constructor() {
    const data = []; // Get data from API
    this.citiesData = data
  }

  public getTemperatureByCity(city: string) {
    return this.citiesData.find((data) => data.city === city)
  }

  public static getInstance() {
    if (this.instance === null) {
      this.instance = new Weather()
    }

    return this.instance
  }
}

const instanceOne = Weather.getInstance();
const instanceTwo = Weather.getInstance();
// instanceOne is equal to instanceTwo (instanceOne === instanceTwo)