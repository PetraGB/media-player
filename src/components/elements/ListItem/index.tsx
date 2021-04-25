import React from 'react';
import classnames from 'classnames';
import css from './style.module.css';

interface IProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  isActive?: boolean;
  children: React.ReactNode;
}

function ListItem(props: IProps) {
  const { title, imageUrl, imageAlt, isActive, children } = props;
  const classes = classnames(css.container, { [css.active]: isActive });

  return (
    <div className={classes}>
      <h3>{title}</h3>

      <img src={imageUrl} alt={imageAlt} />

      <div className={css.children}>
        {children}
      </div>
    </div>
  );
}

export default ListItem;