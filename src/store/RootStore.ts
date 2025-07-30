import SearchStore from "./SearchStore";
import AuthStore from "./AuthStore";

class RootStore {
  search: SearchStore;
  auth: AuthStore;
  
  constructor() {
    this.search = new SearchStore();
    this.auth = new AuthStore();
  }
}

export default new RootStore();