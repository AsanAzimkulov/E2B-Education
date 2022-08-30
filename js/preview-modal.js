function onOpenModalPreview(e) {
  e.preventDefault();
  $('html').addClass('no-scroll-y');
  document.body.classList.add('modal-preview-show');
  document.body.classList.add('no-scroll-y');
}

function onCloseModalPreview() {
  $('html').removeClass('no-scroll-y');
  // Убираем предыдущий скролл
  document.querySelector('.modal-preview').scrollTo(0, 0);
  document.body.classList.remove('modal-preview-show');
  document.body.classList.remove('no-scroll-y');
}

document.querySelector('.modal-preview__close').addEventListener('click', onCloseModalPreview);
document.querySelector('.modal-preview').addEventListener('click', function (e) {
  if (e.target === this) {
    onCloseModalPreview();
  }
});

const topServicesInfoLinks = document.querySelectorAll('.top-services--modificated-ypay .top-services__item__down-bar__button--link');
const offerFormsButtons = document.querySelectorAll('.offer-forms__item__down-bar__button');
const educationLinks = document.querySelectorAll('.top-services__item__down-bar__button--link-brd');

topServicesInfoLinks.forEach(link => link.addEventListener('click', onOpenModalPreview));
offerFormsButtons.forEach(link => link.addEventListener('click', onOpenModalPreview));
educationLinks.forEach(link => link.addEventListener('click', onOpenModalPreview));


