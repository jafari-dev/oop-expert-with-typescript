### Bridge

> Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

<img src="https://user-images.githubusercontent.com/37804060/165858360-9b8ab73c-9b08-41d1-b7b9-84a2e5ef5028.png"/>

```typescript
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
    return this.player.play() + " on desktop";
  }

  stop(): string {
    return this.player.stop() + " on desktop";
  }
}

class Mobile implements Platform {
  private player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  play(): string {
    return this.player.play() + " on mobile";
  }

  stop(): string {
    return this.player.stop() + " on mobile";
  }
}

// Usage
const audioPlayer = new AudioPlayer();
const videoPlayer = new VideoPlayer();

const desktopVideoPlayer = new Desktop(videoPlayer);
const desktopAudioPlayer = new Desktop(audioPlayer);
const mobileVideoPlayer = new Mobile(videoPlayer);
const mobileAudioPlayer = new Mobile(audioPlayer);
```
