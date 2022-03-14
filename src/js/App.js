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
          await navigator.serviceWorker.register('/service.worker.js', { scope: './' });
          console.log('sw registered');
        } catch (e) {
          console.log(e);
        }
      });
    }
  }
}

const app = new App(document);
