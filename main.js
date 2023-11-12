const iconMenu = document.querySelector('.logo-menu')
const nav_items = document.querySelector('.nav-link')
const btnClose = document.querySelector('.close')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const slider_img = document.querySelector('.slider_img')
const img = slider_img.querySelectorAll('img')
const widthSlider = slider_img.offsetWidth
const nbr_img = slider_img.children.length

const Img_small = document.querySelectorAll('.img-small  a')
const Img_large = document.querySelector('.img_large')
const btnMoins = document.querySelector('.btn-moins')
const btnPlus = document.querySelector('.btn-plus')
const numbreAchat = document.querySelector('.number')


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
    const src = a.dataset.large
    Img_large.setAttribute('src',src)
    console.log(src)
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




