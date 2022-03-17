export default class Dom {
  static showPopup() {
    const news = document.querySelector('.news');

    const popup = Dom.setEl('div', 'popup');
    news.append(popup);

    const popupText = Dom.setEl('span', 'popup__text');
    popupText.textConent = 'Не удалось загрузить данные<br>Проверьте подключение<br>и обновите страницу';
    popup.append(popupText);
  }

  static setEl(type, ...selector) {
    const el = document.createElement(type);
    el.classList.add(...selector);
    return el;
  }
}
