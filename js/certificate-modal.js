function onOpenCertificateModal(e) {
  const src = e.currentTarget.querySelector('img').getAttribute('src');
  document.querySelector('.certificate-modal__image').setAttribute('src', src);
  $('html').addClass('no-scroll-y');
  document.body.classList.add('modal-certificate-show');
  document.body.classList.add('no-scroll-y');
}

function onCloseCertificateModal() {
  $('html').removeClass('no-scroll-y');
  // Убираем предыдущий скролл
  document.querySelector('.certificate-modal').scrollTo(0, 0);
  document.body.classList.remove('modal-certificate-show');
  document.body.classList.remove('no-scroll-y');
}

document.querySelectorAll('.block-with-certificates__item').forEach(image => image.addEventListener('click', onOpenCertificateModal));

document.querySelector('.certificate-modal__close').addEventListener('click', onCloseCertificateModal);

document.querySelector('.certificate-modal').addEventListener('click', function (e) {
  if (e.target === this) {
    onCloseCertificateModal();
  }
});
