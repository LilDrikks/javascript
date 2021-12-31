
function initTabNav(){

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo')
function activeTab(index){
    tabContent.forEach((section)=>{
        section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')
}
tabMenu.forEach((item, index) => {
    item.addEventListener('click', ()=> {activeTab(index)})
})
}
const siteColor = document.querySelector('.siteColor')
const body = document.querySelector('body')
siteColor.addEventListener('click', () => {
    body.classList.toggle('black')
})

}

initTabNav()

function initMenuAccordeon() {

const accordionList = document.querySelectorAll('.js-accordion dt')
const activeClass = 'ativo'
if(accordionList.length){
    accordionList[0].nextElementSibling.classList.add(activeClass)
accordionList[0].classList.add(activeClass)
accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})
function activeAccordion() {
    this.nextElementSibling.classList.toggle(activeClass)
    this.classList.toggle(activeClass)
}
}

}

initMenuAccordeon()

function initScrollSuave(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
function screenToSection(event){
    event.preventDefault()
    const href = event.target.getAttribute('href')
    if(href !== null && href.length){
        const section = document.querySelector(href)
         //DUAS FORMAS DE USAR SCROLL SUAVE PARA CHROME E FIREFOX
        section.scrollIntoView({
            behavior:'smooth',
            block: 'start'
        }) 
        // const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior:'smooth'
        // })
    }
}
linksInternos.forEach(()=>{
    this.addEventListener('click', screenToSection)
})

}

initScrollSuave()

function scrollAnimation(){
const sections = document.querySelectorAll('.scroll')
const windowMetade = window.innerHeight * 0.5
function animaScroll(){
    sections.forEach((section) => {
    if(sections.length){

        section.classList.add('js-scroll')
        const sectionTop = section.getBoundingClientRect().top - windowMetade
        if(sectionTop< 0){
            section.classList.add('ativo')
        }
    }

    else{
        section.classList.add('.js-scroll1')
    }
})
}
animaScroll()

window.addEventListener('scroll', animaScroll)
}

scrollAnimation()