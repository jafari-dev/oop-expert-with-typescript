### Singleton

> Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

<img src="https://user-images.githubusercontent.com/37804060/165857698-b1cbb582-4e8c-4cb7-af89-b11edc687626.png"/>

```typescript
class Weather {
  private static instance: Weather | null = null;

  private statusOfCities: {
    city: string;
    status: "SUNNY" | "CLOUDY" | "RAINY" | "SNOWY";
  }[];

  private constructor() {
    const data = []; // Get data from API
    this.statusOfCities = data;
  }

  public getTemperatureByCity(city: string) {
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
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)
