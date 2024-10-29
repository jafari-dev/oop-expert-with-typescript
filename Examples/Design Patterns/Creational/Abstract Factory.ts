interface Movie {
  title: string;
  artists: Array<string>;
  director: string;
  releaseYear: number;
  awards: Array<string>;
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
  searchByTitle: (name: string) => Array<Movie>;
  searchByActors: (actors: Array<string>) => Array<Movie>;
  searchByAwards: (awards: Array<string>) => Array<Movie>;
  searchByDirector: (director: string) => Array<Movie>;
  releaseYear: (releaseYear: Date) => Array<Movie>;
}

interface AudioApi {
  searchByTitle: (name: string) => Array<AudioTrack>;
  searchByArtist: (artist: string) => Array<AudioTrack>;
  searchByMood: (mood: string) => Array<AudioTrack>;
  searchByGenre: (genre: string) => Array<AudioTrack>;
  searchByLyric: (text: string) => Array<AudioTrack>;
}

class NormalMovieApiProvider implements MovieApi {
  searchByTitle(name: string) {
    return [];
  }
  searchByActors(actors: Array<string>) {
    return [];
  }
  searchByAwards(awards: Array<string>) {
    return [];
  }
  searchByDirector(director: string) {
    return [];
  }
  releaseYear(releaseYear: Date) {
    return [];
  }
}

class NormalAudioApiProvider implements AudioApi {
  searchByTitle(name: string) {
    return [];
  }
  searchByArtist(artist: string) {
    return [];
  }
  searchByMood(mood: string) {
    return [];
  }
  searchByGenre(genre: string) {
    return [];
  }
  searchByLyric(text: string) {
    return [];
  }
}

class PremiumMovieApiProvider implements MovieApi {
  searchByTitle(name: string) {
    return [];
  }
  searchByActors(actors: Array<string>) {
    return [];
  }
  searchByAwards(awards: Array<string>) {
    return [];
  }
  searchByDirector(director: string) {
    return [];
  }
  releaseYear(releaseYear: Date) {
    return [];
  }
}

class PremiumAudioApiProvider implements AudioApi {
  searchByTitle(name: string) {
    return [];
  }
  searchByArtist(artist: string) {
    return [];
  }
  searchByMood(mood: string) {
    return [];
  }
  searchByGenre(genre: string) {
    return [];
  }
  searchByLyric(text: string) {
    return [];
  }
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
