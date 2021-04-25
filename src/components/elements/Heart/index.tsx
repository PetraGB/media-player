import React from 'react';
import classnames from 'classnames';
import css from './style.module.css';

interface IProps {
  isActive: boolean;
  count: number;
}

function Heart(props: IProps) {
  const { isActive, count } = props;
  const classes = classnames(css.container, { [css.active]: isActive });

  return (
    <div className={classes}>
      <p>{count} x the love</p>
    </div>
  );
}

export default Heart;