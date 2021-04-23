import React from 'react';
import css from './style.module.css';

interface IProps {
  source: string;
}

function Audio(props: IProps) {
  const { source } = props;

  return (
    <div className={css.container}>
      <audio
        controls
        src={source}>
      </audio>
    </div>
  );
}

export default Audio;