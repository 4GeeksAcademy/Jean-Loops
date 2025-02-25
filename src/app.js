import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// factored
// updates variable names
// updates for loops
// moved functionality  into function then called in window.onload
// add comments to better describe my code
// add more items to myb array to increase varity
window.onload = function () {
  //write your code here
  // create the "parts" of the band names
  let pronouns = ['the', 'our', 'his', 'hers'];
  let adjs = ['great', 'big', 'little', 'small'];
  let nouns = ['jogger', 'racoon', 'democrat', 'republican'];
  let domains = ['.com', '.net', '.gov', '.org'];
// loop through  parts to create band name
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
        console.log(pronoun+adj+noun+domain)
          }
        }
      }
    }
    console.log("Hello Rigo from the console!");
  };
