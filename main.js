const iconMenu = document.querySelector('.logo-menu')
const nav_items = document.querySelector('.nav-link')
const btnClose = document.querySelector('.close')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const slider_img = document.querySelector('.slider_img')
const img = slider_img.querySelectorAll('img')
const widthSlider = slider_img.offsetWidth
const nbr_img = slider_img.children.length
const Img_smallContainer = document.querySelector('.img-small')
const Img_small = document.querySelectorAll('.img-small  a')
const Img_large = document.querySelector('.img_large')
const btnMoins = document.querySelector('.btn-moins')
const btnPlus = document.querySelector('.btn-plus')
const numbreAchat = document.querySelector('.number')
const btnCart = document.querySelector('.cart-pseudo .btn-cart')
const TemplateCartShopping = document.querySelector('#template-cart-menu')
const AddToCart = document.querySelector('.add-btn-cart')
const BtnDelete = document.querySelector('.btn-delete')


//for show the menu
iconMenu.addEventListener('click', (e)=>{
    e.currentTarget.classList.add('active')
    nav_items.classList.add('active')
    document.querySelector('.n').classList.add('active')
})
//for close the menu
btnClose.addEventListener('click', (e)=>{
    iconMenu.classList.remove('active')
    nav_items.classList.remove('active')
    document.querySelector('.n').classList.remove('active')

})
//for the slider next 
btnNext.addEventListener('click', (e) =>{
slider_img.scrollLeft += widthSlider
const sliderleft = slider_img.scrollLeft
console.log(sliderleft)
if(sliderleft == widthSlider * (nbr_img -1)){
    e.currentTarget.style.display="none"
}
else(
    btnPrev.style.display="block"
)
})
btnPrev.addEventListener('click', (e) =>{
    slider_img.scrollLeft -= widthSlider
    const sliderleft = slider_img.scrollLeft
    console.log(sliderleft)
    if(sliderleft == 0){
        e.currentTarget.style.display="none"
    }
    else(
        btnNext.style.display="block"
    )
})
//For change the main Image 
Img_small.forEach((el)=>{
    el.addEventListener('click', (e)=> OnClickChangeImage(e))
})
function OnClickChangeImage(e){
    e.preventDefault()
    const a = e.currentTarget
    Img_smallContainer.querySelector('.active').classList.remove('active')
    a.classList.add('active')
    const src = a.dataset.large
    Img_large.setAttribute('src',src)
}
//for Add the number of shoes
btnPlus.addEventListener('click' ,(e)=>{
    e.preventDefault()
    numbreAchat.innerHTML ++
})
btnMoins.addEventListener('click' ,(e)=>{
    e.preventDefault()
    if(numbreAchat.innerHTML >0){
        numbreAchat.innerHTML --
    }
})

btnCart.addEventListener('click',(e)=>{
    e.preventDefault()
    document.querySelector('.cart-menu').classList.toggle('active')
})

AddToCart.addEventListener('click', (e)=>{
    e.preventDefault()
    const newAdd = TemplateCartShopping.content.cloneNode(true)
    const sum = `$125.00 x ${numbreAchat.innerHTML} = $${ 125*numbreAchat.innerHTML}.00`
    newAdd.querySelector('.cart-menu-desc p').innerHTML = sum
    const supp = TemplateCartShopping.content.cloneNode(true).querySelector('button')
    supp.addEventListener('click', (e)=>DeleteElement(e) )
    document.querySelector('.cart-menu-body ul').append(newAdd)
})

// .addEventListener('click', (e)=> DeleteElement(e))
function DeleteElement(e){
    console.log(e.target)
}

