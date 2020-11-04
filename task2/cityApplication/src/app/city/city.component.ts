import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { City } from '../city';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.less'],
})
export class CityComponent implements OnInit {
  @Input() city: City;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.getCity();
  }

  getCity(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getCity(id).subscribe((city) => (this.city = city));
  }

  back(): void {
    this.location.back();
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.updateCity(id, this.city).subscribe(() => this.back());
  }
}
