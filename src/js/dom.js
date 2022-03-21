export default class Dom {
  static showPopup() {
    const news = document.querySelector('.news');

    const popup = Dom.setEl('div', 'popup');
    news.append(popup);

    const popupText = Dom.setEl('span', 'popup__text');
    popupText.textContent = 'Не удалось загрузить данные. Проверьте подключение и обновите страницу';
    popup.append(popupText);
  }

  static setEl(type, ...selector) {
    const el = document.createElement(type);
    el.classList.add(...selector);
    return el;
  }

  static showNews(news) {
    const newsTickets = document.getElementsByClassName('tape__ticket');
    for (let i = 0; i < newsTickets.length; i++) {
      const dateOfTicket = newsTickets[i].querySelector('.ticket__date');
      const textOfTicket = newsTickets[i].querySelector('.ticket__text');
      const date = Dom.getDate(news[i].date);
      dateOfTicket.textContent = `${date.day}.${date.month}.${date.year} ${date.hour}:${date.minute}`;
      textOfTicket.textContent = news[i].text;
      dateOfTicket.classList.remove('download');
      textOfTicket.classList.remove('download');
    }
  }

  static getDate(sec) {
    const date = new Date(sec);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    let hour = String(date.getHours()).padStart(2, '0');
    if (hour === 24) {
      hour = 0;
    }
    const minute = String(date.getMinutes()).padStart(2, '0');
    const year = +date.getFullYear().toString().slice(2);
    return {
      month,
      day,
      hour,
      minute,
      year,
    };
  }
}
