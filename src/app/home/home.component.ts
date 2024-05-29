import { Component } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housinglocation";

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.css"],
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styles: ``,
})
export class HomeComponent {
  readonly baseUrl = "https://angular.dev/assets/tutorials/common";
  housingLocation: HousingLocation = {
    id: 9999,
    name: "Test Home",
    city: "Test city",
    state: "ST",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
