import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  constructor() {}
  favorites = [];
  favTaille;
  trouve;
  toggleFavorites(actor) {
    if (this.favorites.length !== 0) {
      this.favorites.forEach(favorit => {
        if (actor.id === favorit.id) {
          this.favorites.splice(favorit);
        } else {
          this.favorites.push(actor);
        }
      });
    } else {
      this.favorites.push(actor);
    }
    console.log(this.favorites);
  }

  isFavorite(id) {
    this.favorites.forEach(element => {
      if (element.id === id) {
        this.trouve = true;
      } else {
        this.trouve = false;
      }
    });
    if (this.trouve === true) {
      return true;
    } else {
      return false;
    }
  }
}
