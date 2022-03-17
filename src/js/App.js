import Dom from './dom';

export default class App {
  constructor(element) {
    this.element = element;
    this.url = new URL('http://localhost:7000/'); // 'https://zicio-polling.herokuapp.com/'

    App.start();
    this.listenerOfUpdate();
  }

  static start() {
    if (navigator.serviceWorker) {
      window.addEventListener('load', async () => {
        try {
          const reg = await navigator.serviceWorker.register('/service-worker.js');
          console.log('sw registered', reg);
        } catch (e) {
          console.log('sw register fail', e);
        }
      });
    }
  }

  listenerOfUpdate() {
    document.addEventListener('click', (e) => this.getRequest(e));
  }

  async getRequest(e) {
    if (e.target.classList.contains('.news__update')) {
      const response = await fetch(`${this.url}news`);
      if (response.ok) {
        // OK return data
        return response.json();
      }
      Dom.showPopup();
    }
  }
}

const app = new App(document);
