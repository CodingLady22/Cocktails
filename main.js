//* Manually scrolling through the carousel
let currentIndex = 0;
let drinks = [];

function getDrinks() {
  let drinkSelection = document.querySelector("input").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSelection}`)
    .then((res) => res.json())
    .then((data) => {
      drinks = data.drinks;
      console.log(data.drinks);
      renderSlide(0);
    })
    .catch((err) => {
      console.log(`error &{err}`);
    });
}

function renderSlide(index) {
  let carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.innerHTML = `
    <h2>Name: ${drinks[index].strDrink}</h2>
    <img src="${drinks[index].strDrinkThumb}" alt="drink-thumbnail">
    `;

    let instruct = document.querySelector(".instruct");
    instruct.innerHTML = `
    <h3>${drinks[index].strInstructions}</h3>
    <h4> ${drinks[index].strInstructionsIT}</h4>
    `
    // <h5>${drinks[index].strIngredient1}</h5>


  for (let i = 1; i < 16; i++) {
    console.log();

    if(drinks[index][`strIngredient${i}`] == null) {
      break
    }

    let ingredients = document.createElement('h6');
    ingredients.innerHTML = drinks[index][`strIngredient${i}`] + ' : ' + drinks[index][`strMeasure${i}`];

    carouselContainer.appendChild(ingredients)
  }

  // for (let i = 1; i < 16; i++) {
  //   console.log();

  //   let measurements = document.createElement('h5');
  //   measurements.innerHTML = drinks[index][`strMeasure${i}`];

  //   carouselContainer.appendChild(measurements)
  // }

  // code for the ingredients
  // 13:35 Coding Artist
  /*
  let count = 1;
  let ingredients = [];
  for(let i in drinks) {
    let ingredients = drink[i];
    let measure = "";
    if(i.startsWith("strIngredient") && drink[i]) {
      ingredients = drink[i];
      if(drink[`strMeasure` + count]) {
        measure = drink[`strMeasure` + count]
      } else {
        measure = "";
      }
      count += 1;
      ingredients.push(`${measure} ${ingredient}`)
    }
  }
  console.log(ingredients);
  */
}

document.querySelector("#prev").addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = drinks.length - 1;
  }
  renderSlide(currentIndex);
});

document.querySelector("#next").addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= drinks.length) {
    currentIndex = 0;
  }
  renderSlide(currentIndex);
});



/*
//* Using set interval to flip through the carousel
function getDrinks() {
    let drinkSelection = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSelection}`)
    .then(res => res.json())
    .then(data => {
        let cocktails = data.drinks;
        let carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.innerHTML = "";

        for (let i = 0; i < cocktails.length; i++) {
            let slide = document.createElement("div");
            slide.classList.add("slide");

            let drinkName = document.createElement("h2");
            drinkName.innerText = cocktails[i].strDrink;
            slide.appendChild(drinkName);

            let drinkImage = document.createElement("img");
            drinkImage.src = cocktails[i].strDrinkThumb;
            slide.appendChild(drinkImage);

            let drinkInstructions = document.createElement("h3");
            drinkInstructions.innerText = cocktails[i].strInstructions;
            slide.appendChild(drinkInstructions);

            carouselContainer.appendChild(slide);
        }

        let slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        function changeSlide() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.display = "block";
        }

        let interval = setInterval(changeSlide, 3000);
    })
    .catch(err => {
        console.log(`error &{err}`);
    });
}
*/




/*
document.querySelector('.carousel-item').classList.add('active');

for(let i = 0; i < cocktail.length; i++) {
  const item = document.createElement('div');
  item.classList.add('carousel-item');

  const h2 = document.createElement('h2');
  h2.innerText = data.drinks[[i]].strDrink;
  item.appendChild(h2);

  const img = document.createElement('img');
  img.src = data.drinks[[i]].strDrinkThumb;
  item.appendChild(img);

  const h3 = document.createElement('h3');
  h3.innerText = data.drinks[[i]].strInstructions;
  item.appendChild(h3);

  const h4 = document.createElement('h4');
  h4.innerText = data.drinks[[i]].strInstructionsIT;
  item.appendChild(h4);

  document.querySelector('.carousel').appendChild(item);
}

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

prevBtn.addEventListener('click', function() {
  const active = document.querySelector('.carousel-item.active');
  const prev = active.previousElementSibling;
  if (prev) {
    active.classList.remove('active');
    prev.classList.add('active');
  }
});

nextBtn.addEventListener('click', function() {
  const active = document.querySelector('.carousel-item.active');
  const next = active.nextElementSibling;
  if (next) {
    active.classList.remove('active');
    next.classList.add('active');
  }
});
*/