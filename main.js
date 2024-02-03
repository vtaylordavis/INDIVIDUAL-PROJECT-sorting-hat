// This function will render my HTML to the DOM
const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
};

// Here's my array of existing benders
const benders = [
  {
    id: 1,
    name: "Aang",
    benderType: "Airbender",
    imageUrl:
      "https://static01.nyt.com/images/2020/06/19/arts/18AIRBENDER-CARTOON2/18AIRBENDER-CARTOON2-videoSixteenByNineJumbo1600.jpg",
    amonGot: false,
  },
  {
    id: 2,
    name: "Katara",
    benderType: "Waterbender",
    imageUrl:
      "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Katara.Avatar-The-Last-Airbender.webp",
    amonGot: false,
  },
  {
    id: 3,
    name: "Zuko",
    benderType: "Firebender",
    imageUrl: "https://i.ytimg.com/vi/GzaAfU7AFhE/maxresdefault.jpg",
    amonGot: false,
  },
  {
    id: 4,
    name: "Toph",
    benderType: "Earthbender",
    imageUrl:
      "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/t/toph_avatar_la_leyenda_de_aang_2.jpg",
    amonGot: false,
  },
  {
    id: 6,
    name: "Korra",
    benderType: "Waterbender",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0cfde762-7ce3-414e-803c-ce984f48af0b/d6g0elo-9d5b3dff-0da8-43a7-9730-14ba6baba073.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBjZmRlNzYyLTdjZTMtNDE0ZS04MDNjLWNlOTg0ZjQ4YWYwYlwvZDZnMGVsby05ZDViM2RmZi0wZGE4LTQzYTctOTczMC0xNGJhNmJhYmEwNzMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SYGHM8BLI5Eri8hdKXELwHYr4ITBLd6BQJXqre1jewk",
    amonGot: true,
  },
];

//This is the "dark side" array for them to get pushed into later
const equalists = [];

//Welcome card render
// function welcome() {
//   let welcomeText = `

//   `;
// }

//Click to begin journey, input form, and assign bender type

function beginProgram() {
  const beginBtn = document.querySelector("#begin-btn");
  beginBtn.addEventListener("click", (e) => {
    let nameForm = `
      <form>
        <input class="form-control form-control-lg" type="text" placeholder="What's your name?">
      </form>
    `;
    renderToDom("#input-form", nameForm);
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      console.log("formsubmit");
      e.preventDefault();
      const types = ["Firebender", "Airbender", "Waterbender", "Earthbender"];
      let type = types[getRandomInt(types.length)];
      console.log(type);
      let name = document.querySelector("input").value;
      benders.push({
        name: name,
        benderType: type,
        imageUrl:
          "https://freehoroscope.info/media/illustration/articles/97363d5364f6f677.jpg",
      });
      let resultCard = `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://freehoroscope.info/media/illustration/articles/97363d5364f6f677.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${type}</p>
          <button class="btn btn-danger" id="${name}">Amon Attacks!</button>
        </div>
      </div>`;
      renderToDom("#bender-cards", resultCard);
      let buttonBar = `
        <div class="bar btn-bar">
         <button id="airbtn">Airbender</button>
         <button id="waterbtn">Waterbender</button>
         <button id="earthbtn">Earthbender</button>
         <button id="firebtn">Firebender</button>
         <button id="allbtn">Show All</button>
        </div>`;
      renderToDom("#filter-bar", buttonBar);
      const airButton = document.querySelector("#airbtn");
      const waterButton = document.querySelector("#waterbtn");
      const earthButton = document.querySelector("#earthbtn");
      const fireButton = document.querySelector("#firebtn");
      const showAllButton = document.querySelector("#allbtn");
      const amonButton = document.querySelector(`#${name}`);
      airButton.addEventListener("click", (e) => {
        filter("Airbender");
      });

      waterButton.addEventListener("click", (e) => {
        filter("Waterbender");
      });

      earthButton.addEventListener("click", (e) => {
        filter("Earthbender");
      });

      fireButton.addEventListener("click", (e) => {
        filter("Firebender");
      });

      showAllButton.addEventListener("click", (e) => {
        cardsOnDom(benders);
      });

      amonButton.addEventListener("click", (e) => {
        console.log(e.target.id);
        const found = benders.find((b) => {
          if (b.name === e.target.id) {
            return true;
          }
          return false;
        });

        // equalists.push({ name: name, benderType: type });
        // let ohNoCard = `
        // <div class="card" style="width: 18rem;">
        //   <div class="card-body">
        //     <h5 class="card-title">${name}</h5>
        //     <p class="card-text">  <div id="#bad-end">Amon has stolen ${name}'s bending powers!</div></p>
        //   </div>
        // </div>`;
        // renderToDom("#amon-got-em", ohNoCard);
        //hide button
        //render message to card
      });
    });
  });
}
beginProgram();

const cardsOnDom = (benders) => {
  let bendersDomString = "";
  benders.forEach((item) => {
    bendersDomString += `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.benderType}</p>
      <button class="btn btn-danger" id="delete--${item.id}">Amon Attacks!</button>
    </div>
  </div>`;
  });
  renderToDom("#bender-cards", bendersDomString);
};

//randomizer function

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//filter function

const filter = (typeString) => {
  const typeArray = [];
  benders.forEach((item) => {
    if (item.benderType === typeString) {
      typeArray.push(item);
    }
  });
  cardsOnDom(typeArray);
};

//Event listeners

//destructuring delete function
// if (e.target.id.includes("delete")) {
//   const [, id] = e.target.id.split("--");
//   const index = benders.findIndex((e) => e.id === Number(id));
//   const bender = benders.find((b) => b.id === Number(id));
//   console.log(bender);
//   benders.splice(index, 1);
// }
// item.push(equalists);
