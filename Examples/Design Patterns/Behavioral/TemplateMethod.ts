abstract class SocialMediaPostAnalyzer {
  private readonly HARMFUL_WORDS = [
    "dumb",
    "stupid",
    "idiot",
    "loser",
    "ugly",
    "fat",
    "skinny",
    "weird",
    "hate",
    "rude",
    "nasty",
  ];

  preprocessData(data: string): string[] {
    return data.split(" ").map((word) => word.replace(/[^a-zA-Z ]/g, "").toLowerCase());
  }

  analyze(data: string[]): string[] {
    return data.filter((word) => this.HARMFUL_WORDS.includes(word));
  }

  displayResults(data: string[]): void {
    console.log(`The number of harmful words in this post is ${data.length}, including ${data.join(", ")}.`);
  }

  async analyzePosts(): Promise<void> {
    const data = await this.fetchData();
    const preprocessedData = this.preprocessData(data);
    const analyticsResult = this.analyze(preprocessedData);

    this.displayResults(analyticsResult);
  }

  abstract fetchData(): Promise<string>;
}

class TwitterPostAnalyzer extends SocialMediaPostAnalyzer {
  // Fetches data from Twitter API and returns its data
  async fetchData() {
    return ""; // Dummy data
  }
}

class InstagramPostAnalyzer extends SocialMediaPostAnalyzer {
  // Fetches data from Instagram API and returns its data
  async fetchData() {
    return ""; // Dummy data
  }
}

// Usage
const twitterAnalysis = new TwitterPostAnalyzer();

twitterAnalysis.analyzePosts();

const instagramAnalysis = new InstagramPostAnalyzer();

instagramAnalysis.analyzePosts();
