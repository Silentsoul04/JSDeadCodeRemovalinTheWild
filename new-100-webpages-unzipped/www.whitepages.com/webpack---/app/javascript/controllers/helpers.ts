export function selectFirstFormInput(input) {
  const desktop_input = input.querySelector('li:first-child input');
  if (desktop_input != null) {
    (desktop_input as HTMLInputElement).focus();
    (desktop_input as HTMLInputElement).select();
  }

  const mobile_input = input.querySelector('.input-wrapper input');
  const seo_form_page = document.body.classList.contains('form-page-seo');

  if (!seo_form_page && mobile_input != null) {
    (mobile_input as HTMLInputElement).focus();
    (mobile_input as HTMLInputElement).select();
  }
}

export function fadeIn(element, value = 0, duration = 300) {
  element.style.opacity = String(value);
  if (element.style.opacity !== '1') {
    setTimeout(() => {
      fadeIn(element, value + 0.1);
    }, duration / 10);
  }
}

export function valueOrEmptyString(jsonResponse) {
  return jsonResponse === null ? '' : jsonResponse;
}
