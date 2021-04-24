import axios from 'axios';
import querystring from 'querystring';
import { ISong } from '../interfaces';

const hostName = "https://api-stg.jam-community.com";

class api {
  public static async getSongs(): Promise<ISong[]> {
    let songList: ISong[] = [];

    try {
      const { data } = await axios.get(hostName + '/song/trending');
      songList = data;
    } catch (e) {
      console.log(e);
    }

    return songList;
  }

  public static async likeSong(id: string) {
    const path = hostName + '/interact/like';
    const query = querystring.stringify({ apikey: process.env.API_KEY });
    const params = { id };
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    try {
      await axios.post(path, query, { params, headers });
      return 'success';
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export default api;
