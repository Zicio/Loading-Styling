export default class App {
  constructor(element) {
    this.element = element;
    this.url = new URL('http://localhost:7000/'); // 'https://zicio-polling.herokuapp.com/'

    App.start();
  }

  static start() {
    if (navigator.serviceWorker) {
      window.addEventListener('load', async () => {
        try {
          const reg = await navigator.serviceWorker.register('/sw.js');
          console.log('sw registered', reg);
        } catch (e) {
          console.log('sw register fail', e);
        }
      });
    }
  }
}

const app = new App(document);
