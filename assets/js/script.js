const spanScore = document.querySelector("#score-count-number");
const paraMoney = document.querySelector("#no-money");
const btnClick = document.querySelector("#btn-incremation");
const btnReset = document.querySelector("#remove-storage");
const containerArticle1 = document.querySelector(".article-item");
const constainerArticle2 = document.querySelector(".article-item-2");
const prixItem1 = document.querySelector("#prix-item1");
const btnItems1 = document.querySelector("#btn-items-1");
const multiplicateurItems1 = document.querySelector("#multi-item-1");
const prixItem2 = document.querySelector("#prix-item2");
const btnItems2 = document.querySelector("#btn-items-2");
const multiplicateurItems2 = document.querySelector("#multi-item-2");
const messBonus = document.querySelector("#count_bonus");
const prixItems3 = document.querySelector('#prix-item3');
const btnItem3 = document.querySelector('#btn-items-3');
const multiplicateurItems3 = document.querySelector('#multi-item-3');


/*********GLOBAL ITEMS */
let messageMoney = " You Don't have enough coins man !! ";
let coins;
/********ITEMS1**********/
if (localStorage.getItem("coins") === null) {
  coins = 0;
} else {
  coins = parseInt(localStorage.getItem("coins"));
}

spanScore.innerHTML = coins;

/**********ITEMS 1*********/
let prix1;
let multi1;
if (localStorage.getItem("prix1") === null) {
  prix1 = 10;
} else {
  prix1 = parseInt(localStorage.getItem("prix1"));
}

if (localStorage.getItem("multi1") === null) {
  multi1 = 1;
} else {
  multi1 = parseInt(localStorage.getItem("multi1"));
}

multiplicateurItems1.innerHTML = multi1;
prixItem1.innerHTML = prix1;

function removeStorageReset() {
  localStorage.removeItem("coins");
  localStorage.removeItem("messBonus");
  localStorage.removeItem("multi1");
  localStorage.removeItem("prix1");
  localStorage.removeItem("prix2");
  localStorage.removeItem("multi2");
  localStorage.removeItem("secItem");
  window.location.reload();
}

function itemsOne() {
  if (coins >= prix1) {
    coins = parseInt(localStorage.getItem('coins')) - prix1;
    multi1++;
    prix1 = prix1 * 2;
    spanScore.innerHTML = coins;
    paraMoney.innerHTML = "";
    localStorage.setItem("prix1", prix1);
    localStorage.setItem("multi1", multi1);
    multiplicateurItems1.innerHTML = parseInt(localStorage.getItem("multi1"));
    prixItem1.innerHTML = parseInt(localStorage.getItem("prix1"));
  } else {
    paraMoney.innerHTML = messageMoney;
  }
}
/*************************ITEMS 2 *********** */

let prix2;
let multi2;
let secSet;
let bonus;

if (localStorage.getItem("prix2") === null) {
  prix2 = 100;
 
} else {
  prix2 = parseInt(localStorage.getItem("prix2"));
}

if (localStorage.getItem("multi2") === null) {
  multi2 = 1;
 
} else {
  multi2 = parseInt(localStorage.getItem("multi2"));
}

if (localStorage.getItem("secItem") === null) {
  secSet = 2000;
  // localStorage.setItem("secItem", secSet);

} else {
  secSet = parseInt(localStorage.getItem("secItem"));
}

if (localStorage.getItem("messBonus") === null) {
  bonus = "Autoloading";
  // localStorage.setItem("messBonus", bonus); // Ajoute le bonus dans le localstorage si il n'existe pas
} else {
  bonus = localStorage.getItem("messBonus");
}

if (localStorage.getItem("messBonus") === "Autoloading") {
  messBonus.textContent = "Autoloading";
} 


multiplicateurItems2.innerHTML = multi2 + "/s";
prixItem2.innerHTML = prix2;


function coinsExpo() {
coins++
localStorage.setItem("coins", coins);
spanScore.textContent=coins;
}

async function itemsTwo() {

  if (coins >= prix2) {

    coins = parseInt(localStorage.getItem('coins')) - prix2;
    multi2++;
    prix2 = prix2 * 2;
    paraMoney.innerHTML = "";
    spanScore.innerHTML = coins
    localStorage.setItem('messBonus',bonus);
    
    messBonus.textContent = bonus;
    localStorage.setItem("secItem", secSet);
    setInterval(coinsExpo, secSet / multi2);
    localStorage.setItem("prix2", prix2);
    localStorage.setItem("multi2", multi2);
    prixItem2.innerHTML = parseInt(localStorage.getItem('prix2'));
    multiplicateurItems2.innerHTML = parseInt(localStorage.getItem("multi2")) + " /s ";
    messBonus.textContent=localStorage.getItem('messBonus');
  
  } else {
    paraMoney.innerHTML = messageMoney;
  }


}

if(localStorage.getItem('prix2')>=200){
  setInterval(coinsExpo,secSet / multi2);
}

/**************ITEMS 3 **********/

let prix3;
let multi3;


function itemsThree(){
  
}


/************BTN-EVENT************/
btnClick.addEventListener("click", () => {
  coins = coins + multi1;
  localStorage.setItem("coins", coins);

  spanScore.innerHTML = parseInt(localStorage.getItem("coins"));
  console.log(coins);


});


btnReset.addEventListener("click", () => {
  removeStorageReset();
  console.log("test");
});

btnItems1.addEventListener("click", () => {
  console.log("test");
  itemsOne();
});

btnItems2.addEventListener("click", async () => {
  itemsTwo();
  console.log("tests");
});

btnItem3.addEventListener('click',(ev)=>{
  console.log('test3');
})

/********************ITEMS 2 ************/
