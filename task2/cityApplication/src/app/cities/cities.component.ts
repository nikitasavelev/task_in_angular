import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.less'],
})
export class CitiesComponent implements OnInit {
  cities: any[];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.httpService
      .getAllCities()
      .subscribe((cities) => (this.cities = cities));
  }
}
