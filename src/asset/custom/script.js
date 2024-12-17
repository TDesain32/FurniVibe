AOS.init();
const links = document.querySelectorAll('.nav-item>.nav-link')
const currentPath = window.location.pathname;
links.forEach(link => {
  // console.log(link);
  // Dapatkan path dari setiap link
  const linkPath = new URL(link.href).pathname;
  console.log(link.href);
  if (!String(link.href).includes('#')) {
    // Periksa apakah path link sama dengan URL saat ini
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
    else {
      link.classList.remove('active');
    }
  } else {
    if (new URL(link.href).pathname == 'product.html') {
      link.classList.add('active');
    }
  }
});