const pages = document.querySelectorAll('.page');

const observer = new IntersectionObserver(actualPage => {
   actualPage.forEach(entry => {
      if (entry.isIntersecting) {
         var id = entry.target.id;
         const inactive = document.querySelector(".links .active");
         const active = document.querySelector(`.links [data-ref =${id}]`);
         if (active) {
            active.classList.add("active");
         }
         if (inactive) {
            inactive.classList.remove("active");
         }

      }
   })
}, {
   rootMargin: "0px",
   threshold: .7
});

pages.forEach((actualPage) => {
   observer.observe(actualPage)
});



const navbarbackground = document.querySelector('#navbar');

window.addEventListener("scroll", function () {
   window.scrollY > 100 ? (navbarbackground.classList.add("backcolour")) :
      (navbarbackground.classList.remove("backcolour"));
});



// const menuButton = document.getElementById('menubutton').addEventListener('click',()=>{
//    var menu = document.querySelector('.links').classList.add('openmenu');
//    var navbarlinks = document.querySelectorAll('.navbarlink').forEach( link =>{ link.addEventListener('click',()=>{
//       menu.classList.remove('openmenu');
//    })})
// })

const menuButton = document.getElementById('menubutton');
const navbarlinks = document.querySelectorAll('.navbarlink');
const links = document.querySelector('.links')

menuButton.addEventListener('click', () => {
   links.classList.toggle('openmenu');
});

navbarlinks.forEach((link) => {
   link.addEventListener && links.addEventListener('click', () => {
      links.classList.remove('openmenu');
   })
});

// links.addEventListener('click',()=>{
//    links.classList.remove('openmenu');
// })

// navbarlinks.forEach ((links)=>{links.addEventListener('click',()=>{
//    document.querySelector('.links').classList.toggle('openmenu');
// })})

const container = document.querySelector('main');

let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

container.addEventListener('mousedown', e => mouseIsDown(e));
container.addEventListener('mouseup', e => mouseUp(e))
container.addEventListener('mouseleave', e => mouseLeave(e));
container.addEventListener('mousemove', e => mouseMove(e));

function mouseIsDown(e) {
   isDown = true;
   startY = e.pageY - container.offsetTop;
   startX = e.pageX - container.offsetLeft;
   scrollLeft = container.scrollLeft;
   scrollTop = container.scrollTop;
   
}
function mouseUp(e) {
   isDown = false;
}
function mouseLeave(e) {
   isDown = false;
}
function mouseMove(e) {
   if (isDown) {
      e.preventDefault();
      //Move vertcally
      const y = e.pageY - container.offsetTop;
      const walkY = y - startY;
      container.scrollTop = scrollTop - walkY;

      //Move Horizontally
      const x = e.pageX - container.offsetLeft;
      const walkX = x - startX;
      container.scrollLeft = scrollLeft - walkX;

   }
}