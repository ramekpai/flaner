import React from 'react';
import classNames from 'classnames';
import s from './Header.module.css';
import ColorThemeSwitcher from './ColorThemeSwitcher/ColorThemeSwitcher';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <div className={classNames(s.root, 'content-wrapper')}>
      <div className={s.content}>
        <Logo />
      </div>
      <ColorThemeSwitcher />
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
