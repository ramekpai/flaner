import React, { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames';
import s from './ColorThemeSwitcher.module.css';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useLocalStorage from '../../../hooks/useLocalStorage';

const DARK_COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

const setDataColorTheme = value => {
  return document.getElementsByTagName("HTML")[0].setAttribute("data-color-theme", value);
};

const ColorThemeSwitcher = () => {
  const [localTheme, setLocalTheme] = useLocalStorage('color-theme', null);
  const [currentTheme, setCurrentTheme] = useState(null);
  const isPrefersDarkTheme = useMediaQuery(DARK_COLOR_SCHEME_QUERY);
  const systemTheme = isPrefersDarkTheme ? 'dark' : 'light';

  useEffect(() => {
    setDataColorTheme(localTheme || systemTheme);
    setCurrentTheme(localTheme || 'auto');
  }, []);

  useEffect(() => {
    if (currentTheme === 'auto') {
      setDataColorTheme(systemTheme);
    }
  }, [systemTheme]);

  const onClickHandler = e => {
    const value = e.currentTarget.value;
    setCurrentTheme(value);
    setLocalTheme(value === 'auto' ? null : value);
    setDataColorTheme(value === 'auto' ? systemTheme : value);
  };

  return (
    <section className={s.root} aria-label="Переключатель цветовой темы сайта">
      <button
        className={classNames(s.button, s.light)}
        onClick={onClickHandler}
        value="light"
        aria-pressed={currentTheme === 'light'}
      >
        Светлая
      </button>
      <button
        className={classNames(s.button, s.system)}
        onClick={onClickHandler}
        value="auto"
        aria-pressed={currentTheme === 'auto'}
      >
        Авто
      </button>
      <button
        className={classNames(s.button, s.dark)}
        onClick={onClickHandler}
        value="dark"
        aria-pressed={currentTheme === 'dark'}
      >
        Тёмная
      </button>
      <div className={s.status} />
    </section>
  );
};

ColorThemeSwitcher.displayName = 'ColorThemeSwitcher';

export default ColorThemeSwitcher;
