(function(){
  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links){
    toggle.addEventListener('click', ()=>{
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Active link highlighting
  const page = document.documentElement.getAttribute('lang') === 'en' 
    ? document.documentElement.dataset.page 
    : document.body.dataset.page;
  const current = document.querySelector(`.nav-links a[data-link="${page}"]`);
  if(current) current.classList.add('active');

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple toaster
  const toast = (msg)=>{
    const t = document.getElementById('toaster');
    if(!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(()=> t.classList.remove('show'), 2200);
  };

  // Demo forms (prevent real submit)
  const booking = document.getElementById('bookingForm');
  if (booking) booking.addEventListener('submit', (e)=>{
    e.preventDefault();
    toast('Booth available • Proceed to payment (demo)');
  });

  const contact = document.getElementById('contactForm');
  if (contact) contact.addEventListener('submit', (e)=>{
    e.preventDefault();
    toast('Thanks! We will reach out shortly.');
    contact.reset();
  });

  const corp = document.getElementById('corpForm');
  if (corp) corp.addEventListener('submit', (e)=>{
    e.preventDefault();
    toast('Request received • Our team will call you soon.');
    corp.reset();
  });
})();