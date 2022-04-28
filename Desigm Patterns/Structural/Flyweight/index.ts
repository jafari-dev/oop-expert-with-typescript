enum Weapon {
  Uzi = "UZI",
  M4 = "M4",
  Shotgun = "SHOTGUN",
}

enum UniformColor {
  Green = "GREEN",
  Red = "RED",
  Black = "BLACK",
}

class SoldierFlyweight {
  private weapon: Weapon;
  private uniformColor: UniformColor;

  constructor(weapon: Weapon, uniformColor: UniformColor) {
    this.weapon = weapon;
    this.uniformColor = uniformColor;
  }

  public shootTo(enemyCoordinates: { x: number; y: number }) {
    if (this.weapon === Weapon.Uzi) {
      console.log("Uzi shoot to", enemyCoordinates);
    } else if (this.weapon === Weapon.M4) {
      console.log("M4 shoot to", enemyCoordinates);
    } else {
      console.log("Shotgun shoot to", enemyCoordinates);
    }
  }

  public getHurt(currentDamage: number) {
    if (this.uniformColor === UniformColor.Green) {
      return currentDamage - 50;
    } else if (this.uniformColor === UniformColor.Red) {
      return currentDamage - 35;
    } else {
      return currentDamage - 20;
    }
  }
}

abstract class SoldierFactory {
  private static soldierTypes: Record<string, SoldierFlyweight> = {};

  private static getKey(weapon: Weapon, uniformColor: UniformColor): string {
    return weapon + "-" + uniformColor;
  }

  public static getSoldierFlyweight(
    weapon: Weapon,
    uniformColor: UniformColor
  ) {
    const key = SoldierFactory.getKey(weapon, uniformColor);

    if (Object.keys(this.soldierTypes).includes(key) == null) {
      this.soldierTypes[key] = new SoldierFlyweight(weapon, uniformColor);
    }

    return this.soldierTypes[key];
  }
}

class Soldier {
  private damage: number;
  private coordinates: { x: number; y: number };
  private flyweight: SoldierFlyweight;

  constructor(damage: number, coordinates: { x: number; y: number }) {
    this.damage = damage;
    this.coordinates = coordinates;
  }

  public shootTo(enemyCoordinates: { x: number; y: number }) {
    const horizontalAxisDistance = this.coordinates.x - enemyCoordinates.x;
    const verticalAxisDistance = this.coordinates.y - enemyCoordinates.y;

    if (
      Math.sqrt(horizontalAxisDistance ** 2 + verticalAxisDistance ** 2) <= 100
    ) {
      this.flyweight.shootTo(enemyCoordinates);
    }
  }

  public getHurt() {
    const newDamage = this.flyweight.getHurt(this.damage);
    this.damage = newDamage;
    console.log(`Soldier new damage: ${newDamage}`);
  }
}
