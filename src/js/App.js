import Dom from './dom';

export default class App {
  constructor(element) {
    this.element = element;
    this.url = new URL('http://localhost:7000/'); // 'https://zicio-polling.herokuapp.com/'

    App.start();
    this.getRequest();
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

  async getRequest() {
    try {
      const response = await fetch(`${this.url}news`);
      if (response.ok) {
        // OK return data
        const news = await response.json();
        Dom.showNews(news);
        return;
      }
    } catch (err) {
      console.log(err);
      Dom.showPopup();
    }
  }
}

const app = new App(document);
