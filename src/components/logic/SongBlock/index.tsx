import React, { useEffect, useState } from 'react';
import { ISong } from '../../../interfaces';
import api from '../../../api';
import ListItem from '../../elements/ListItem';
import Audio from '../../logic/Audio';
import Like from '../Like';

function SongBlock(props: { song: ISong }) {
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const { song } = props;

  const likeSong = () => {
    api.likeSong(song.id);
  };

  return (
    <ListItem
      title={song.name}
      imageUrl={song.cover_image_path}
      imageAlt={song.name_seo}
      isActive={isPlaying}
    >
      <Audio source={song.music_file_path} onPlay={(playing) => setPlaying(playing)} />

      <Like count={song.likes} onClick={likeSong} />
    </ListItem>
  );
}

export default SongBlock;