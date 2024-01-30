const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}

const benderList = [
  {
    id: 1,
    name: "Aang",
    benderType: "Airbender",
    imageUrl: "insertLater",
    amonGot: false
  },
  {
    id: 2,
    name: "Katara",
    benderType: "Waterbender",
    imageUrl: "insertLater",
    amonGot: true
  },
  {
    id: 3,
    name: "Zuko",
    benderType: "Firebender",
    imageUrl: "insertLater",
    amonGot: false
  },
  {
    id: 4,
    name: "Toph",
    benderType: "Earthbender",
    imageUrl: "insertLater",
    amonGot: false
  },
  {
    id: 5,
    name: "Sokka",
    benderType: "Non-bender",
    imageUrl: "insertLater",
    amonGot: false
  },
  {
    id: 6,
    name: "Korra",
    benderType: "Waterbender",
    imageUrl: "insertLater",
    amonGot: true
  }
]

const theEqualists = []; 

const thePowerWithin = (e) => {
 let domString = ""
  domString += 
  `<div class="welcome-card">
    <div class="card-header">
     <h1>The power to harness the elements lies within you...</h1>
    </div> 
    <div class="card-body">
     <h4>What kind of bender are you?</h4>
     <p></p>
     <h5>Click the button and unlock your true potential!</h5> 
    </div>
   </div>`

   renderToDom('#intro-card', domString);
}
