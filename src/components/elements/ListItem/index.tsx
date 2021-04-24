import React from 'react';
import css from './style.module.css';

interface IProps {
  title: string;
  image: string;
  children: React.ReactNode;
}

function ListItem(props: IProps) {
  const { title, children } = props;

  return (
    <div className={css.container}>
      <h5>{title}</h5>
      {children}
    </div>
  );
}

export default ListItem;