import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { ISong } from '../../../interfaces';
import SongBlock from '../SongBlock';

function SongList() {
  const [songList, setSongList] = useState<ISong[]|undefined>();

  const getSongs = async () => {
    const songs = await api.getSongs();
    setSongList(songs);
  }

  useEffect(() => {
    getSongs();
  });

  return (
    <div>
      {songList && songList.map(song => (
        <SongBlock song={song} />
      ))}
    </div>
  );
}

export default SongList;