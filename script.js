const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
if(menu){ menu.addEventListener("click",()=>links.classList.toggle("open")); }
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const progress = document.querySelector(".progress");
window.addEventListener("scroll",()=>{
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (window.scrollY / h * 100) + "%";
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add("show"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
