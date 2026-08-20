// Implementation hierarchy: the low-level, platform-specific details.
interface Platform {
  renderPlayback(mediaType: string): string;
  renderStop(mediaType: string): string;
}

class Desktop implements Platform {
  renderPlayback(mediaType: string): string {
    return `${mediaType} is playing on desktop`;
  }

  renderStop(mediaType: string): string {
    return `${mediaType} is stopped on desktop`;
  }
}

class Mobile implements Platform {
  renderPlayback(mediaType: string): string {
    return `${mediaType} is playing on mobile`;
  }

  renderStop(mediaType: string): string {
    return `${mediaType} is stopped on mobile`;
  }
}

// Abstraction hierarchy: it holds a reference to the implementation (the bridge)
// instead of inheriting from it, so both sides can grow independently.
abstract class Player {
  constructor(protected platform: Platform) {}

  abstract play(): string;
  abstract stop(): string;
}

class AudioPlayer extends Player {
  play(): string {
    return this.platform.renderPlayback("Audio");
  }

  stop(): string {
    return this.platform.renderStop("Audio");
  }
}

class VideoPlayer extends Player {
  play(): string {
    return this.platform.renderPlayback("Video");
  }

  stop(): string {
    return this.platform.renderStop("Video");
  }
}

// Usage
const desktop = new Desktop();
const mobile = new Mobile();

// Two players x two platforms, without writing four combined classes.
console.log(new AudioPlayer(desktop).play()); // Output: Audio is playing on desktop
console.log(new VideoPlayer(desktop).play()); // Output: Video is playing on desktop
console.log(new AudioPlayer(mobile).play()); // Output: Audio is playing on mobile
console.log(new VideoPlayer(mobile).stop()); // Output: Video is stopped on mobile
