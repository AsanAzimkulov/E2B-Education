$(document).ready(function () {
  const items = document.querySelectorAll('.toolbar-three-column-toggles');

  items.forEach((item) => {
    const handles = item.querySelectorAll('a');

    const InitActiveHandle = [...handles].find(handle => handle.classList.contains('toolbar-three-column-toggles__toggle--active'));

    handles.forEach((handle) => {

      handle.addEventListener('click', (e) => {

        handles.forEach(handle => handle.classList.remove('toolbar-three-column-toggles__toggle--active'));       
        handle.classList.add('toolbar-three-column-toggles__toggle--active');
        setTimeout(() => {
          handle.classList.remove('toolbar-three-column-toggles__toggle--active');
          InitActiveHandle.classList.add('toolbar-three-column-toggles__toggle--active');
        }, 1100);
      })
    })
  });
});