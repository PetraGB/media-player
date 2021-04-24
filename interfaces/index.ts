interface IGenre {
  id: number;
  name: string;
}

export interface ISong {
  id: string;
  name: string;
  name_seo: string;
  artist: {
    id: string;
    name: string;
    artist_name: string;
    muted: boolean;
    place?: string;
    country?: string;
    followers: number;
    follows: number;
    liked: number;
    releases: number;
    favorites: number;
    description?: string;
    profile_image_path: string;
    cover_image_path: string;
    favorite_genres: string[];
    created: Date;
    location?: string;
    social_accounts: string[];
    video_shout_out_count: number;
    external_songs_count?: number;
    external_videos_count: number;
    crews: string[];
  };
  artist_name: string;
  duration: number;
  bpm: number;
  likes: number;
  faves: number;
  plays: number;
  reposts: number;
  comments: number;
  description?: string;
  tags?: string;
  source_info?: string;
  cover_image_path: string;
  cover_image_aspect_ratio: string;
  music_file_path: string;
  music_file_mimetype: string;
  song_genres: Array<IGenre>;
  song_release: Date;
  mix_packs: string[];
  linked_crews: string[];
}
