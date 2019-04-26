import { Component } from '@angular/core';
import { actors } from '../../data/actors';
import { ActorsService } from '../../actors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public actorsService: ActorsService) {}
  actors = actors;
}
