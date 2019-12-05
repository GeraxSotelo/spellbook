import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _drawSpells() {
  let template = ''
  let spells = store.State.spells;
  // for (let i = 0; i < 10; i++) {
  //   template += `<li class="list-group-item">${spells[i].name}</li>`
  // }

  spells.forEach(s => template += `<li class="list-group-item" onclick="app.spellsController.selectSpellAsync('${s.id}')">${s.name}</li>`)
  document.querySelector("#spells").innerHTML = template
}

//Public
export default class SpellsController {
  constructor() {
    store.subscribe("spells", _drawSpells);
    SpellsService.searchNewSpellsAsync()
  }

  async selectSpellAsync(id) {
    try {
      await SpellsService.selectSpellAsync(id)
    } catch (err) {
      console.log(err);
    }
  }

}
