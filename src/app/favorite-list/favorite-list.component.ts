import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  constructor(public actorsService: ActorsService) {}

  ngOnInit() {}
  confirm(actor) {
    const confirmed = window.confirm('Voulez-vous supprimer ce favorit?');
    this.actorsService.toggleFavorite(actor);
  }
}
