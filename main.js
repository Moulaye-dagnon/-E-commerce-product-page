const iconMenu = document.querySelector(".logo-menu");
const nav_items = document.querySelector(".nav-link");
const btnClose = document.querySelector(".close");
const btnPrev = document.querySelectorAll(".btn-prev");
const btnNext = document.querySelectorAll(".btn-next");
const slider_img = document.querySelector(".slider_img");
const img = slider_img.querySelectorAll("img");
const widthSlider = slider_img.offsetWidth;
const nbr_img = slider_img.children.length;
const Img_smallContainer = document.querySelector(".img-small");
const Img_small = document.querySelectorAll(".img-small  a");
const Img_large = document.querySelector(".img_large");
const btnMoins = document.querySelector(".btn-moins");
const btnPlus = document.querySelector(".btn-plus");
const numbreAchat = document.querySelector(".number");
const btnCart = document.querySelector(".cart-pseudo .btn-cart");
const TemplateCartShopping = document.querySelector("#template-cart-menu");
const AddToCart = document.querySelector(".add-btn-cart");
const BtnDelete = document.querySelector(".btn-delete");
const MainContainer = document.querySelector("container");
const TemplateContainerImg = document.querySelector("#Template-container-img");


//for show the menu
iconMenu.addEventListener("click", (e) => {
	e.currentTarget.classList.add("active");
	nav_items.classList.add("active");
	document.querySelector(".n").classList.add("active");
});

//for close the menu
btnClose.addEventListener("click", (e) => {
  iconMenu.classList.remove("active");
  nav_items.classList.remove("active");
  document.querySelector(".n").classList.remove("active");
});


//for the slider next
	slider_count = 0;
	slider_img.children[slider_count].classList.add("active");
btnNext.forEach((el) => {
	el.addEventListener("click", (e) => {
		slider_count++ 
		const i =  slider_count 
		if(slider_count > slider_img.children.length - 1 ){
			slider_count = 0
		}
		 const a = i < 4 ? i  : 0
		slider_img.querySelector('.active').classList.remove('active')
		slider_img.children[a].classList.add("active");
	})
});

//for the slider prev
btnPrev.forEach((el)=>{
	el.addEventListener("click", (e) => {
		slider_count--
		const i =  slider_count 
		if(slider_count < 0 ){
			slider_count = slider_img.children.length - 1
		}
		 const a = i < 0 ? slider_img.children.length - 1  : i
		slider_img.querySelector('.active').classList.remove('active')
		slider_img.children[a].classList.add("active");
})
});

//For change the main Image
Img_small.forEach((el) => {
  el.addEventListener("click", (e) => OnClickChangeImage(e));
});
function OnClickChangeImage(e) {
  e.preventDefault();
  const a = e.currentTarget;
  Img_smallContainer.querySelector(".active").classList.remove("active");
  a.classList.add("active");
  const src = e.currentTarget.dataset.large;
  document.querySelector('.img_large').setAttribute('src', src) ;
 
}

// Incremeng the number of shoes sell
btnPlus.addEventListener("click", (e) => {
  e.preventDefault();
  numbreAchat.innerHTML++;
});

//decrement the number of shoes sell
btnMoins.addEventListener("click", (e) => {
  e.preventDefault();
  if (numbreAchat.innerHTML > 0) {
    numbreAchat.innerHTML--;
  }
});

//each click Toggle the cart
btnCart.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".cart-menu").classList.toggle("active");
});

//Event on the Add To cart
AddToCart.addEventListener("click", (e) => {
  e.preventDefault();
  //Add the new element in the cart
  if (numbreAchat.innerHTML > 0) {
    document.querySelector(".cart-menu-body ul").append(cardItem());
	document.querySelector(".cart-menu-body ul p.empty").style.display = "none";

  }
//   if(document.querySelector(".cart-menu-body ul").children.length > 1 ){
// 	document.querySelector(".cart-menu-body ul p.empty").style.display = "none";
// 	document.querySelector(".cart-menu-body .btn-checkout").style.display = "block";
//   }else {
// 	document.querySelector(".cart-menu-body ul p.empty").style.display = "block";
// 	document.querySelector(".cart-menu-body .btn-checkout").style.display = "none";
//   }

  // for delete the cart
  document.querySelectorAll(".cart-menu-body ul li").forEach((li) => {
    li.querySelector("button").addEventListener("click", (e) => {
      li.remove();
    });
  });
});
function cardItem() {
  const id = Math.floor(Math.random() * 100000);
  // Create li element
  const li = document.createElement("li");
  li.setAttribute("data-id", id);

  // Create div for image
  const imgDiv = document.createElement("div");
  imgDiv.className = "cart-menu-img";
  const imgElement = document.createElement("img");
  imgElement.src = "./images/image-product-1-thumbnail.jpg";
  imgElement.alt = "";
  imgDiv.appendChild(imgElement);

  // Create div for description
  const descDiv = document.createElement("div");
  descDiv.className = "cart-menu-desc";
  const h4 = document.createElement("h4");
  h4.textContent = "Fall Limited Edition Sneakers";
  const p = document.createElement("p");
  p.textContent = `$125.00 x ${numbreAchat.innerHTML} = $${
    125 * numbreAchat.innerHTML
  }.00`;
  descDiv.appendChild(h4);
  descDiv.appendChild(p);

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn-delete";
  const deleteImg = document.createElement("img");
  deleteImg.src = "./images/icon-delete.svg";
  deleteImg.alt = "";
  deleteBtn.appendChild(deleteImg);

  // Append elements to li
  li.appendChild(imgDiv);
  li.appendChild(descDiv);
  li.appendChild(deleteBtn);

  // Return the li element
  return li;
}


//show  the lightbox 
const lightbox = document.querySelector('.lightbox')
document.querySelector('.show-img').addEventListener('click', (e)=>{
	 document.querySelector(".n").classList.add("active");
	 lightbox.classList.add('active')
})
//Change main Image of the lightbox 
document.querySelectorAll('.light-box-img-small a').forEach((el) => {
	el.addEventListener("click", (e) => { 
		e.preventDefault()
		const a = e.currentTarget;
		document.querySelector('.light-box-img-small').querySelector(".active").classList.remove("active");
		a.classList.add("active");
		const src = e.currentTarget.dataset.large;
		document.querySelector('.lightbox-img_large').setAttribute('src', src) ;
  	});
});
 //close the lightbox
document.querySelector('.btn-close-lightbox').addEventListener("click", (e) => {
	document.querySelector(".n").classList.remove("active");
	lightbox.classList.remove('active')
});
