// $(document).ready(function () {
//   const items = document.querySelectorAll('.toolbar-three-column-toggles');
//   const allHandles = document.querySelectorAll('.toolbar-three-column-toggles a');
//   items.forEach((item) => {
//     const handles = item.querySelectorAll('a');
//     handles.forEach((handle) => {
//       handle.addEventListener('click', (e) => {
//         const activeIndex = [...handles].indexOf(handle);
//         allHandles.forEach(handle => handle.classList.remove('toolbar-three-column-toggles__toggle--active'));
//         items.forEach((item) => {
//           const handles = item.querySelectorAll('a');
//           handles[activeIndex].classList.add('toolbar-three-column-toggles__toggle--active')
//         })
//       })
//     })
//   });
// });