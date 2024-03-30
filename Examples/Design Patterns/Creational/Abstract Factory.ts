interface Movie {
  title: string;
  artists: string[];
  director: string;
  releaseYear: number;
  awards: string[];
  duration: number;
}

interface AudioTrack {
  title: string;
  artist: string;
  genre: string;
  mood: string;
  lyric: string;
  duration: number;
}

interface MovieApi {
  searchByTitle: (name: string) => Movie[];
  searchByActors: (actors: string[]) => Movie[];
  searchByAwards: (awards: string[]) => Movie[];
  searchByDirector: (director: string) => Movie[];
  releaseYear: (releaseYear: Date) => Movie[];
}

interface AudioApi {
  searchByTitle: (name: string) => AudioTrack[];
  searchByArtist: (artist: string) => AudioTrack[];
  searchByMood: (mood: string) => AudioTrack[];
  searchByGenre: (genre: string) => AudioTrack[];
  searchByLyric: (text: string) => AudioTrack[];
}

class NormalMovieApiProvider implements MovieApi {
  // Implementation
}

class NormalAudioApiProvider implements AudioApi {
  // Implementation
}

class PremiumMovieApiProvider implements MovieApi {
  // Implementation
}

class PremiumAudioApiProvider implements AudioApi {
  // Implementation
}

interface ApiProviderFactory {
  createMovieApiProvider: () => MovieApi;
  createAudioApiProvider: () => AudioApi;
}

class NormalApiProviderFactory implements ApiProviderFactory {
  createMovieApiProvider() {
    return new NormalMovieApiProvider();
  }

  createAudioApiProvider() {
    return new NormalAudioApiProvider();
  }
}

class PremiumApiProviderFactory implements ApiProviderFactory {
  createMovieApiProvider() {
    return new PremiumMovieApiProvider();
  }

  createAudioApiProvider() {
    return new PremiumAudioApiProvider();
  }
}
