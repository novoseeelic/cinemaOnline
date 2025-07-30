import { makeAutoObservable } from "mobx";
import { User } from "../api/auth";

class AuthStore {
  user: User | null = null;
  isModalActive: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isAuthorized(): boolean {
    return this.user != null;
  }

  setUser(user: User) {
    this.user = user;
  }

  clear() {
    this.user = null;
  }

  setModalActive(state: boolean) {
    this.isModalActive = state;
  }

  addMovieToFavorites(movieId: string) {
    const favorites = this.user?.favorites;
    if (!favorites || favorites.includes(movieId)) {
      return;
    }
    favorites.push(movieId);
  }

  removeMovieFromFavorites(movieId: string) {
    if (!this.user || !this.user.favorites.includes(movieId)) {
      return;
    }
    this.user.favorites  = this.user.favorites.filter(id => id != movieId);
  }
}

export default AuthStore;