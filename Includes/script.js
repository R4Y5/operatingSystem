fetch('/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Runs after header is loaded
    document.querySelectorAll('.nav-items > li').forEach(item => {
      const link = item.querySelector('a');
      link.addEventListener('click', (e) => {
        const hasDropdown = item.querySelector('ul');
        if (!hasDropdown) return;
        e.preventDefault();
        e.stopPropagation();
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.nav-items > li').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  });

document.addEventListener('click', () => {
  document.querySelectorAll('.nav-items > li').forEach(i => i.classList.remove('open'));
});