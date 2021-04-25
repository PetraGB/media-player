import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import css from './style.module.css';

interface IProps {
  children: React.ReactNode;
}

function PageGrid(props: IProps) {
  return (
    <div className={css.container}>
      <Header />

      <div className={css.content}>
        {props.children}
      </div>

      <Footer />
    </div>
  );
}

export default PageGrid;
