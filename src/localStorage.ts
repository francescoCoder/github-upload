import calcio from "./calciotwo.json";
//-------------------------------------------------------------

let localStorage = window.localStorage;

if (!localStorage.teams) {
  localStorage.setItem("teams", JSON.stringify(calcio.teams));
  localStorage.setItem("players", JSON.stringify(calcio.players));
}

export default localStorage;
