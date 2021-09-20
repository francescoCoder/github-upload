import calcio from "./calcio.json";
//-------------------------------------------------------------

let localStorage = window.localStorage;

if (!localStorage.teams) {
    localStorage.setItem("teams", JSON.stringify(calcio.teams))}

export default localStorage;
