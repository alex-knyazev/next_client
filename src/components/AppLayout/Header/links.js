class NavLink {
  constructor(to, text) {
    this.text = text;
    this.to = to;
    this.pathname = `/${to}`;
  }
}

const COLLECTIONS = new NavLink('collections', 'Коллекции');
const ARTICLES = new NavLink('articles', 'Статьи');
const CLUBS = new NavLink('clubs', 'Чайные клубы');
const STATISTICS = new NavLink('statistics', 'Статистика');
const SETTINGS = new NavLink('settings', 'Настройки');
const SIGN_IN = new NavLink('signin', 'Выйти');

export const ALL_NAV_LINKS = [
  COLLECTIONS,
  ARTICLES,
  CLUBS,
  STATISTICS,
  SETTINGS,
  SIGN_IN,
];

export const MAIN_LINKS = [COLLECTIONS, ARTICLES, CLUBS];

export const PROFILE_NAV_LINKS = [STATISTICS, SETTINGS, SIGN_IN];
