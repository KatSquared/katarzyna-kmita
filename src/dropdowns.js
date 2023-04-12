const dropdowns = document.querySelectorAll('#dropdown');

dropdowns.forEach(dropdown => {
  const dropdownBtn = dropdown.querySelector('#dropdown-btn');
  const content = dropdown.querySelector('#dropdown-content');

  dropdownBtn.addEventListener('click', () => {
      dropdownBtn.classList.toggle('unrolled');
      content.classList.toggle('visible');
  })
})

document.addEventListener('click', (e) => {
  if (e.target.closest('#dropdown-content')) return;

  dropdowns.forEach(dropdown => {
    const content = dropdown.querySelector('#dropdown-content');
    const dropdownBtn = content.previousElementSibling;

    if (e.target.closest('#dropdown-btn')) {
      if (dropdownBtn != e.target.closest('#dropdown-btn')) {
        content.classList.remove('visible');
        dropdownBtn.classList.remove('unrolled');
      }
      return;
    }
    
    if (content.classList.contains('visible')) {
      content.classList.remove('visible');
      dropdownBtn.classList.remove('unrolled');
    }
  })
})