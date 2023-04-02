import React from 'react';
import s from './Header.module.css';
import ColorThemeSwitcher from './ColorThemeSwitcher/ColorThemeSwitcher';
import classNames from 'classnames';

const Header = () => {
  return (
    <div className={classNames(s.root, 'content-wrapper')}>
      <h1 className={s.heading}>
        Header
      </h1>
      <ColorThemeSwitcher />
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
