// This function will render my HTML to the DOM
const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}

// Here's my array of existing benders
const benders = [
  {
    id: 1,
    name: "Aang",
    benderType: "air",
    imageUrl: "insertLater",
    amonGot: false
  },
  {
    id: 2,
    name: "Katara",
    benderType: "water",
    imageUrl: "insertLater",
    amonGot: false
  },
  {
    id: 3,
    name: "Zuko",
    benderType: "fire",
    imageUrl: "insertLater",
    amonGot: false
  },
  {
    id: 4,
    name: "Toph",
    benderType: "earth",
    imageUrl: "insertLater",
    amonGot: false
  },
  {
    id: 6,
    name: "Korra",
    benderType: "water",
    imageUrl: "insertLater",
    amonGot: true
  }
]

//This is the "dark side" array for them to get pushed into later
const equalists = []; 

//Cards on DOM function
const cardsOnDom = (benders) => {
  let bendersDomString = "";
  benders.forEach(bender => {
    bendersDomString += `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${bender.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${bender.name}</h5>
      <p class="card-text">${bender.benderType}</p>
      <button class="btn" id="delete--${bender.id}">Amon Attacks!</button>
    </div>
  </div>`;
  })
  renderToDom("#bender-cards", bendersDomString);
};

//Click to begin journey

function beginProgram() {
  const beginBtn = document.querySelector("#begin-btn");
  beginBtn.addEventListener("click", (e) => { 
    let nameForm = `
      <form>
        <input class="form-control form-control-lg" type="text" placeholder="What's your name?">
      </form>
    `;
    renderToDom("#input-form", nameForm)
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => { 
      e.preventDefault();
      const types = ['fire', 'air', 'water', 'earth']
      let type = types[getRandomInt(types.length)]
      console.log(type);
      let name = document.querySelector('input').value;
     let resultCard = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${type}</p>
        </div>
      </div>`;
      renderToDom("#bender-cards", resultCard);
     })
  
  });
  
}

beginProgram(); 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
  }



//Buttons & button links

/*  <button id="airbtn">Airbender</button>
     <button id="waterbtn">Waterbender</button>
     <button id="earthbtn">Earthbender</button>
     <button id="firebtn">Firebender</button>
     <button id="allbtn">Show All</button> */

const airButton = document.querySelector("#airbtn");
const waterButton = document.querySelector("#waterbtn");
const earthButton = document.querySelector("earthbtn");
const fireButton = document.querySelector("firebtn"); 
const showAllButton = document.querySelector("#allbtn");

//Event listeners 
airButton.addEventListener("click", (e) => {
  filter("air");
});

waterButton.addEventListener("click", (e) => {
  filter("water");
});

earthButton.addEventListener("click", (e) => {
  filter("earth");
});

fireButton.addEventListener("click", (e) => {
  filter("fire");
});

showAllButton.addEventListener("click", (e) => {
  cardsOnDom(benders);
});
