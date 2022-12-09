const navButton=document.querySelector(".btn-mobile-nav");
const header=document.querySelector(".header");

navButton.addEventListener("click",()=>{
  header.classList.toggle("nav-open");
})

const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function(entries){
const ent =entries[0];
if(!ent.isIntersecting){
  document.body.classList.add("sticky");
}

if(ent.isIntersecting){
  document.body.classList.remove("sticky");
}
},
{
root: null,
threshold:0,
rootMargin:"-80px",
}
);
obs.observe(sectionHero);