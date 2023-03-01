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
    coins = localStorage.getItem('coins') - prix1;
    multi1++;
    prix1 = prix1 * 2;
    spanScore.innerHTML = parseInt(localStorage.getItem('coins'));
    paraMoney.innerHTML = "";
  } else {
    paraMoney.innerHTML = messageMoney;
  }
  localStorage.setItem("prix1", prix1);
  localStorage.setItem("multi1", multi1);
  multiplicateurItems1.innerHTML = parseInt(localStorage.getItem("multi1"));
  prixItem1.innerHTML = parseInt(localStorage.getItem("prix1"));
}
/*************************ITEMS 2 *********** */

let prix2;
let multi2;
let secSet;
let bonus;

if (localStorage.getItem("prix2") === null) {
  prix2 = 100;
} else {
  prix2 = localStorage.getItem("prix2");
}

if (localStorage.getItem("multi2") === null) {
  multi2 = 1;
} else {
  multi2 = localStorage.getItem("multi2");
}

if (localStorage.getItem("secItem") === null) {
  secSet = 1500;
} else {
  secSet = localStorage.getItem("secItem");
}

if (localStorage.getItem("messBonus") === null) {
  bonus = "Autoloading";
} else {
  bonus = localStorage.getItem("messBonus");
}

multiplicateurItems2.innerHTML = multi2 + "/s";
prixItem2.innerHTML = prix2;
messBonus.innerHTML = "";

function coinsExpo() {
 
  let storageCoins=parseInt(localStorage.getItem('coins'));
  storageCoins++;
  localStorage.setItem('coins',storageCoins);
  spanScore.innerHTML = storageCoins;
}

async function itemsTwo() {

  localStorage.setItem("prix2", prix2);
  localStorage.setItem("multi2", multi2);
  localStorage.setItem("secItem", secSet);
  localStorage.setItem("messBonus", bonus);

  if (coins >= prix2) {
    storageItems1 = parseInt(localStorage.getItem('coins')) - prix2;
    multi2++;
    prix2 = prix2 * 2;
    paraMoney.innerHTML = "";
    spanScore.innerHTML = parseInt(localStorage.getItem('coins'));
    messBonus.innerHTML = localStorage.getItem("messBonus");
    localStorage.setItem("secItem", secSet);
    setInterval(coinsExpo, secSet / multi2);
  } else {
    paraMoney.innerHTML = messageMoney;
  }

  


  prixItem2.innerHTML = parseInt(localStorage.getItem("prix2"));
  multiplicateurItems2.innerHTML =parseInt(localStorage.getItem("multi2")) + " /s ";
 
}

if(localStorage.getItem('multi2')>=1){
  setInterval(coinsExpo, secSet / multi2);
}

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

/********************ITEMS 2 ************/
