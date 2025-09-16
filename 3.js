// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
toggle?.addEventListener('click', ()=> links.classList.toggle('open'));

// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Smooth internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){
      e.preventDefault();
      window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 70, behavior:'smooth'});
      links?.classList.remove('open');
    }
  });
});

// Back-to-top
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', ()=>{
  (window.scrollY > 400) ? toTop.classList.add('show') : toTop.classList.remove('show');
});
toTop?.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// Lightweight form handler
document.querySelector('.form')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  if(!data.name || !data.email || !data.org){
    alert('Please complete Name, Email and Institution.');
    return;
  }
  alert('Thanks! We’ll get back to you shortly.');
  e.target.reset();
});