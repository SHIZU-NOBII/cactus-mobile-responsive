const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')

if (navToggle) {
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}


if (navClose) {
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>n.addEventListener('click', linkAction))

const blurHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
                     
}

window.addEventListener('scroll', blurHeader)



 const showScroll = () =>{
  const ScrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? ScrollUp.classList.add('show-scroll')
                      : ScrollUp.classList.remove('show-scroll')
 }

 window.addEventListener('scroll', showScroll)


 const sections = document.querySelectorAll('section[id]')

 const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58, 
          sectionId =  current.getAttribute('id'),
          sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
          }else{
            sectionClass.classList.remove('active-link')
          }        

    })
 }


 window.addEventListener('scroll', scrollActive)

