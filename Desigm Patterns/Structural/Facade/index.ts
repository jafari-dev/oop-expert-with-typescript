class Sound {
  constructor(soundLocation: string) {
    // Load sound
  }

  play() {
    // Play sound
  }
}

class SoundAnalyzer {
  constructor(soundAnalyzerBitrate: number) {
    // Load sound analyzer
  }

  analyze(sound: Sound) {
    // Analyze sound
  }

  getSoundData(): unknown[] {
    // Return analyzed sound data
    return [];
  }
}

class Graph {
  constructor(graphType: "2D" | "3D") {
    // Load graph
  }

  fillGraph(data: unknown[]) {
    // Draw sound data
  }
}

class DrawSoundSpectrum {
  public static drawSpectrum(
    soundLocation: string,
    soundAnalyzerBitrate: number,
    graphType: "2D" | "3D"
  ) {
    const sound = new Sound(soundLocation);
    const soundAnalyzer = new SoundAnalyzer(soundAnalyzerBitrate);
    const graph = new Graph(graphType);

    sound.play();
    soundAnalyzer.analyze(sound);
    const soundData = soundAnalyzer.getSoundData();
    graph.fillGraph(soundData);
  }
}
