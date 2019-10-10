import { Controller } from 'stimulus';

export default class ApplicationController extends Controller {
  protected async postJSON(path, json) {
    await this.railsFetch(path, 'POST', JSON.stringify(json));
  }

  protected async getJSON(path) {
    const response = await this.railsFetch(path, 'GET');
    return response.json();
  }

  protected railsFetch(path, method: string, body: string | null = null) {
    return fetch(path, {
      body,
      method,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.csrfToken || ''
      }
    });
  }

  protected get csrfToken() {
    const csrfElement = document.querySelector<HTMLMetaElement>(
      'meta[name=csrf-token]'
    );
    if (csrfElement) {
      return csrfElement.content;
    }
  }
}
