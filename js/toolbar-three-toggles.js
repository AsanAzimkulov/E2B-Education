const scrollIntoViewWithOffset = (selector, offset) => {
  window.scrollTo({
    behavior: 'smooth',
    top:
      document.querySelector(selector).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  })
}

$(document).ready(function () {
  const items = document.querySelectorAll('.toolbar-three-column-toggles');

  items.forEach((item) => {
    const handles = item.querySelectorAll('a');

    const InitActiveHandle = [...handles].find(handle => handle.classList.contains('toolbar-three-column-toggles__toggle--active'));

    handles.forEach((handle) => {

      handle.addEventListener('click', function (e) {
        e.preventDefault();

        scrollIntoViewWithOffset(this.getAttribute('href'), 60)

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