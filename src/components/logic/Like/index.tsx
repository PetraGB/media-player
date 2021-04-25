import React, { useState } from 'react';
import Heart from '../../elements/Heart';

interface IProps {
  count: number;
  isActive?: boolean;
  onClick: () => void;
}

function Like(props: IProps) {
  const [count, setCount] = useState<number>(props.count);
  const [isActive, setActive] = useState<boolean>(Boolean(props.isActive));

  const like = () => {
    if (isActive) {
      return null;
    }

    props.onClick();
    setActive(true);
    setCount(count + 1);
  };

  return (
    <div onClick={like}>
      <Heart isActive={isActive} count={count} />
    </div>
  );
}

export default Like;