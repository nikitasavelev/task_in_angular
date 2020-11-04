import { Component, OnInit } from '@angular/core';
import { citiesObject } from 'src/assets/cities';
import { usersObject } from 'src/assets/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  citiesObject = citiesObject;
  usersObject = usersObject;

  ngOnInit() {
    localStorage.setItem('cities', JSON.stringify(this.citiesObject));
    localStorage.setItem('users', JSON.stringify(this.usersObject));
  }
  title = 'cityApplication';
}
