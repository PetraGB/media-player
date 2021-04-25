import axios from 'axios';
import { ISong } from '../interfaces';

const instance = axios.create({
  baseURL: 'https://api-stg.jam-community.com'
});

class api {
  public static async getSongs(): Promise<ISong[]> {
    let songList: ISong[] = [];

    try {
      const { data } = await instance.get('/song/trending');
      songList = data;
    } catch (e) {
      console.log(e);
    }

    return songList;
  }

  public static async likeSong(id: string) {
    const path = '/interact/like';
    const data = { id };
    const params = { apikey: process.env.REACT_APP_API_KEY, id };
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    try {
      const response = await instance.post(path, data, { headers, params });
      console.log("ANSWER", response)
      return 'success';
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export default api;
