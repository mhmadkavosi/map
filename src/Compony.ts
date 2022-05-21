import faker from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Compony implements Mappable {
  componyName: string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.componyName = faker.company.companyName();
    this.catchPharse = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }

  markerContent(): string {
    return `Compony Name is : ${this.componyName} // Catch Pharse : ${this.catchPharse}`;
  }
}
