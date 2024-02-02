function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    }else{
      entry.target.classList.remove("show")
    }
  })
})

hiddenElements.forEach((el) => observer.observe(el));