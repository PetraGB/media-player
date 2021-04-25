import React from 'react';
import css from './style.module.css';

interface IProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
}

function ListItem(props: IProps) {
  const { title, imageUrl, children } = props;

  return (
    <div className={css.container}>
      <h5>{title}</h5>

      <img src={imageUrl} />

      <div className={css.children}>
        {children}
      </div>
    </div>
  );
}

export default ListItem;