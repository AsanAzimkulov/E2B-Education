$(document).ready(function () {
  if (window.matchMedia('(max-width: 767.5px)').matches) return;
  const items = document.querySelectorAll('.toolbar-three-column-toggles');

  const createTabs = (element) => {
    const handles = element.querySelectorAll('a');
    const tabs = [...handles].map((handle) => document.getElementById(handle.getAttribute('href').slice(1)));

    const activeHandle = element.querySelector('.toolbar-three-column-toggles__toggle--active');
    showActiveTab(activeHandle);

    handles.forEach(handle => handle.addEventListener('click', toggleTab))

    function toggleTab(e) {
      e.preventDefault();
      handles.forEach(tab => tab.classList.remove('toolbar-three-column-toggles__toggle--active'));
      e.target.classList.add('toolbar-three-column-toggles__toggle--active');
      showActiveTab(e.target);
    }
    function showActiveTab(handle) {
      tabs.forEach(tab => tab.style.display = 'none');
      const index = [...handles].indexOf(handle);
      [...tabs][index].style.display = 'block';
    }
  }

  items.forEach(createTabs);
});