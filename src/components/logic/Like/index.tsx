import React, { useState } from 'react';
import Heart from '../../elements/Heart';

interface IProps {
  count: number;
  isActive?: boolean;
  onClick: (arg: boolean) => void;
}

function Like(props: IProps) {
  const [count, setCount] = useState<number>(props.count);
  const [isActive, setActive] = useState<boolean>(Boolean(props.isActive));

  useEffect(() => {
    props.onClick(!isActive);
    setCount(!isActive ? count - 1 : count + 1);
  }, [isActive])

  return (
    <Heart isActive={isActive} count={count} onClick={() => setActive(!isActive)} />
  );
}

export default Like;
