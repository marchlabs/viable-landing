document.getElementById('menu-icon').addEventListener('click', function() {
  console.log("clicked")
  document.getElementById('menu-container').classList.toggle('show');
});

document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', function() {
    document.getElementById('menu-container').classList.remove('show');
    
  });
});

document.querySelector('.menu-close').addEventListener('click', function() {
  document.getElementById('menu-container').classList.remove('show');
});
