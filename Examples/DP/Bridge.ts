interface Player {
  play(): string;
  stop(): string;
}

class AudioPlayer implements Player {
  play(): string {
    return "Audio is playing";
  }

  stop(): string {
    return "Audio is stopped";
  }
}

class VideoPlayer implements Player {
  play(): string {
    return "Video is playing";
  }

  stop(): string {
    return "Video is stopped";
  }
}

interface Platform {
  play(): string;
  stop(): string;
}

class Desktop implements Platform {
  private player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  play(): string {
    return `${this.player.play()} on desktop`;
  }

  stop(): string {
    return `${this.player.stop()} on desktop`;
  }
}

class Mobile implements Platform {
  private player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  play(): string {
    return `${this.player.play()} on mobile`;
  }

  stop(): string {
    return `${this.player.stop()} on mobile`;
  }
}

// Usage
const audioPlayer = new AudioPlayer();
const videoPlayer = new VideoPlayer();

const desktopVideoPlayer = new Desktop(videoPlayer);
const desktopAudioPlayer = new Desktop(audioPlayer);
const mobileVideoPlayer = new Mobile(videoPlayer);
const mobileAudioPlayer = new Mobile(audioPlayer);
