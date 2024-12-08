const buttons = document.querySelectorAll(".category-btn");
const searchInput = document.querySelector(".search-bar input");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => {
      btn.style.backgroundColor = "#eee";
      btn.style.color = "black";
    });
    
    button.style.backgroundColor = "red";
    button.style.color = "white";
  });
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const cardTitle = card.querySelector("h3").textContent.toLowerCase();

    if (cardTitle.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


//for favourites

let trigger = 0;
let fvrtbtn = document.querySelectorAll(".fav-btn");

fvrtbtn.forEach((buttons) => {
  buttons.addEventListener("click", ()=>{
    if(trigger == 0){
      buttons.style.color = "red";
      trigger = 1;
    }
    else{
      buttons.style.color = "black";
      trigger = 0;
    }
});
});


