type Movie = unknown; // You can use your own type
type AudioTrack = unknown; // You can use your own type

interface MovieApi {
  searchByName: (name: string) => Movie[];
  searchByActors: (actors: string[]) => Movie[];
  searchByAwards: (awards: string[]) => Movie[];
  searchByDirector: (director: string) => Movie[];
  searchByReleaseDate: (releaseDate: Date) => Movie[];
}

interface AudioApi {
  searchByName: (name: string) => AudioTrack[];
  searchByArtist: (artist: string) => AudioTrack[];
  searchByMood: (mood: string) => AudioTrack[];
  searchByGenre: (genre: string) => AudioTrack[];
  searchByLyric: (anyPartOfLyric: string) => AudioTrack[];
}

class NormalMovieApiProvider implements MovieApi { /* Implementation */ }

class NormalAudioApiProvider implements AudioApi { /* Implementation */ }

class PremiumMovieApiProvider implements MovieApi { /* Implementation */ }

class PremiumAudioApiProvider implements AudioApi { /* Implementation */ }

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
