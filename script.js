/*<div class="column" style="background-color:#527B63;">
      <img class="goldenstream"src="./images/Golden Stream Packshot.jpg" alt="">
      <h2>Harry Boardman</h2>
      <p>Golden Stream</p>
      <button class="addtocheckout">Add To Checkout</button>
    </div>
    <div class="column" style="background-color:#527B63">
      <img class="corvus"src="./images/GOTSOAF for flyer.bmp.jpg" alt="">
      <h2>Corvus</h2>
      <p>gloves from the skin of a fish</p>
      <button class="addtocheckout">Add To Checkout</button>
    </div>
    <div class="column" style="background-color:#527B63;">
      <img class="albumimage"src="./images/IMBOLC packshot.jpg" alt="">
      <h2>Mike Billington</h2>
      <p>IMBOLC</p>
      <button class="addtocheckout">Add To Checkout</button>
    </div>*/

window.addEventListener("load", setup);

function setup() {
  setupBurgerNav();
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
  //this toggled the accordian (not really an accordian)
  // const h2s = document.querySelectorAll(".bordernav");
  // if (h2s) {
  //   h2s.forEach((h2) => {
  //     h2.addEventListener("click", (e) => {
  //       h2.nextElementSibling.classList.toggle("open");
  //       h2.classList.toggle("open");
  //     });
  //   });
  // }
}

function setupBurgerNav() {
  const burger = document.querySelector(".fa.fa-bars");
  const nav = document.querySelector("#menu");
  burger.addEventListener("click", (e) => {
    console.log("test");
    burger.classList.toggle("open");
    nav.classList.toggle("open");
  });
}
