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
  searchByTitle(name: string) {
    return [];
  }
  searchByActors(actors: string[]) {
    return [];
  }
  searchByAwards(awards: string[]) {
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
  searchByActors(actors: string[]) {
    return [];
  }
  searchByAwards(awards: string[]) {
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
