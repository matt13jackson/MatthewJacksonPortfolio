const year=document.getElementById("year");year.textContent=new Date().getFullYear();
const menu=document.querySelector(".menu-button"), links=document.querySelector(".nav-links");
menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const navItems=[...document.querySelectorAll(".nav-links a")];
window.addEventListener("scroll",()=>{let current="home";document.querySelectorAll("main section[id], #skills, #contact").forEach(s=>{if(window.scrollY>=s.offsetTop-140)current=s.id});navItems.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));});