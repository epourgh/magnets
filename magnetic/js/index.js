const element = document.querySelector('#element')
const element2 = document.querySelector('#element2')
const element3 = document.querySelector('#element3')

let topPos;
  
const ely = element.getBoundingClientRect().y;
const el2y = element2.getBoundingClientRect().y;
const el3y = element3.getBoundingClientRect().y;
const sectionSnip = (el2y - ely)/3;

console.log(sectionSnip)

window.addEventListener('scroll', function(evt) {
  
  let scrollY = this.scrollY;
  
  if (scrollY > ely - sectionSnip   && scrollY < el2y - sectionSnip) {
      topPos = ely;
  } else if (scrollY > el2y - sectionSnip  && scrollY < el3y - sectionSnip) {
      topPos = el2y;
  } else if (scrollY > el3y - sectionSnip) {
      topPos = el3y;
  }

  // console.log(window.scrollY)
  setTimeout(div_show, 3000)
  
  function div_show() {

    window.scroll({
      top: topPos,
      behavior: 'smooth'
    });
  }
  
});


