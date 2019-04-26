import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  constructor() {}
  favorites = [];
  favTaille;
  trouve;

  toggleFavorite(actor) {
    const index = this.favorites.findIndex(favorit => favorit.id === actor.id);
    if (index === -1) {
      this.favorites.push(actor);
    } else {
      this.favorites.splice(index, 1);
    }

    console.log(this.favorites);
  }

  isFavorite(id) {
    return this.favorites.find(favorit => favorit.id === id);
  }
}
