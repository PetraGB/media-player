import React from 'react';
import Heart from '../../elements/Heart';

interface IProps {
  count: number;
  isActive?: boolean;
  onClick: () => void;
}

function Like(props: IProps) {
  return (
    <div onClick={() => props.onClick()}>
      <Heart />
    </div>
  );
}

export default Like;