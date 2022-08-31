$(document).ready(function () {
  const items = document.querySelectorAll('.toolbar-three-column-toggles');

  const createTabs = (element) => {
    const handles = element.querySelectorAll('a');
    const tabs = [...handles].map((handle) => document.getElementById(handle.getAttribute('href').slice(1)));

    const activeHandle = element.querySelector('.toolbar-three-column-toggles__toggle--active');
    showActiveTab(activeHandle);

    handles.forEach(handle => handle.addEventListener('click', toggleTab))

    function toggleTab(e) {
      var position = $(document).scrollTop();
      setTimeout(function () {
        window.scrollTo(0, position);
      }, 0);

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