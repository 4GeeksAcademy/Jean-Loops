import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our', 'his', 'hers'];
  let adj = ['great', 'big', 'little', 'small'];
  let noun = ['jogger', 'racoon', 'democrat', 'republican' ];
  let domain = ['.com', '.net', '.gov', '.org'];

  for(let i = 0; i < pronoun.length; i++) {
    for(let a = 0; a < adj.length; a++) {
      for(let b = 0; b <noun.length; b++) {
        for(let c = 0; c <domain.length; c++) {
       console.log(pronoun[i] + adj[a] + noun[b] + domain[c]) }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
