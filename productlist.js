//NO NEED TO USE THIS LINK ANYMORE ------->//const url = "http://abrittabroad.dk/wp21c/wp-json/wp/v2/album";
const url = "http://abrittabroad.dk/wp21c/wp-json/wp/v2/album/?per_page=15";

//fetch the data

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    manageProductList(data);
  });

function manageProductList(data) {
  // console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //this will grab the template
  const template = document.querySelector("#albumProductTemplate");
  const container = document.querySelector("#album_container");

  //this will clone the product
  const copy = template.cloneNode(true).content;
  //this will change the content
  copy.querySelector(".albumheading").textContent = `${product.title.rendered}`;
  copy.querySelector(".albumimage").src = `${product.album_image.guid}`;
  //abrittabroad.dk/wp21c/wp-content/uploads/2022/12/TWWLI-for-flyer.bmp.jpg
  copy.querySelector(".album").textContent = `${product.more_info_link}`;

  //this will grab the parent
  // const parent = document.querySelector("main");
  //and finally this bit will append
  container.appendChild(copy);
}

/*fetch(url)
  .then((res) => res.json())
  .then((data) => showProducts(data));
//populate the page


function showProducts(products) {
  console.log(products);
}*/

/*<article class="row">
<div class="column" style="background-color:#527B63;">
  <img class="albumimage"src="./images/LILG cover for flyer.bmp.jpg" alt="">
  <h2>Tom Yates</h2>
  <p>Love Is Losing Ground.</p>
  <button class="addtocheckout">Add To Checkout</button>
</div>
<div class="column" style="background-color:#527B63;">
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
</div>

</article>*/

//THIS SECTION IS FOR THE SLIDESHOW THAT DOESN'T CURRENTLY WORK//////

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}