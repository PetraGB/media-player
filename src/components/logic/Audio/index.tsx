import React, { useEffect, useState } from 'react';
import AudioControl from '../../elements/AudioControl';

interface IProps {
  source: string;
  onPlay: (playing: boolean) => void;
}

function Audio(props: IProps) {
  const { source, onPlay } = props;
  const [player, setPlayer] = useState<HTMLAudioElement|null>(null);
  // let player:  = null;

  const togglePlay = (e: Event) => {
    if (e.type === 'play') {
      onPlay(true);
    }
    if (e.type === 'pause') {
      onPlay(false);
    }
  };

  const setListeners = () => {
    if (player) {
      player.addEventListener("play", togglePlay);
      player.addEventListener("pause", togglePlay);
      return () => {
        player!.removeEventListener("play", togglePlay);
        player!.removeEventListener("pause", togglePlay);
      };
    }
  }

  useEffect(() => {
    setListeners();
  });

  return (
    <AudioControl
      source={source}
      setRef={(element: any) => setPlayer(element)}
    />
  );
}

export default Audio;