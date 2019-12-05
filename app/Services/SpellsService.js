import Store from "../store.js";
import Spell from "../Models/Spell.js";


let _sandboxApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/geraxsotelo/spells"
})

let _spellsApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/spells"
})
class SpellsService {
  async searchNewSpellsAsync() {
    try {
      let res = await _spellsApi.get()
      let results = res.data.map(s => new Spell(s))
      Store.commit("spells", results)
    } catch (err) {
      console.log(err);
    }
  }

  async selectSpellAsync(id) {
    try {

    }
  }
}

const service = new SpellsService();
export default service;
