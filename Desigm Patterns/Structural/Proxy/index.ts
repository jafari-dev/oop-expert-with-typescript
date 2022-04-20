interface IYouTube {
  getPlaylistVideos: (playlistId: string) => unknown[];
  downloadVideo: (videoId: string) => unknown;
}

class YouTube {
  getPlaylistVideos(playlistId: string): unknown[] {
    // Send a request to YouTube API and return the result
    return [];
  }
  
  downloadVideo(videoId: string): File {
    // Send a request to YouTube API and return the video file
    return new File([], "");
  }
}

class YouTubeProxy implements IYouTube {
  private youtube: YouTube;
  private connectionType: ConnectionType;
  private cache: Record<string, unknown[]>;

  constructor() {
    this.youtube = new YouTube();
    this.cache = {};
    this.connectionType = window.navigator.connection.type;
  }

  getPlaylistVideos(playlistId: string): unknown[] {
    if (this.cache[playlistId]) {
      return this.cache[playlistId];
    } else {
      const videos = this.youtube.getPlaylistVideos(playlistId);
      this.cache[playlistId] = videos;
      return videos;
    }
  }

  downloadVideo(videoId: string) {
    if (this.connectionType !== "wifi") {
      console.log("Only Wifi connection allowed to download videos!");
    } else {
      this.youtube.downloadVideo(videoId);
    }
  }
}
