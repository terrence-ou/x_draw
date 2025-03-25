type AvailableLanguagesType = "en" | "zh";
type AvailableThemesType = "light" | "dark";
type LanguageMenuType = { key: AvailableLanguagesType; text: string };

const THEME_KEY = "youtube_draw_theme";
const LANGUAGE_KEY = "youtube_draw_language";

const LANGUAGE_MENU: LanguageMenuType[] = [
  { key: "en", text: "EN" },
  { key: "zh", text: "中文" },
];

export {
  THEME_KEY,
  LANGUAGE_KEY,
  LANGUAGE_MENU,
  type AvailableLanguagesType,
  type AvailableThemesType,
};
