import React, { useEffect, useRef } from 'react';
import css from './style.module.css';

interface IProps {
  source: string;
  setRef: any;
}

function AudioControl(props: IProps) {
  const { source, setRef } = props;

  return (
    <audio
      controls
      src={source}
      ref={element => setRef(element)}
    />
  );
}

export default AudioControl;