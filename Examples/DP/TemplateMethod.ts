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

  protected preprocessData(data: string): Array<string> {
    return data.split(" ").map((word) => word.replace(/[^a-zA-Z ]/g, "").toLowerCase());
  }

  protected analyze(data: Array<string>): Array<string> {
    return data.filter((word) => this.HARMFUL_WORDS.includes(word));
  }

  protected displayResults(data: Array<string>): void {
    console.log(`The number of harmful words in this post is ${data.length}, including ${data.join(", ")}.`);
  }

  // The template method: it fixes the skeleton of the algorithm, and subclasses
  // only fill in `fetchData`.
  async analyzePosts(): Promise<void> {
    const data = await this.fetchData();
    const preprocessedData = this.preprocessData(data);
    const analyticsResult = this.analyze(preprocessedData);

    this.displayResults(analyticsResult);
  }

  protected abstract fetchData(): Promise<string>;
}

class TwitterPostAnalyzer extends SocialMediaPostAnalyzer {
  // Fetches data from Twitter API and returns its data
  protected override async fetchData() {
    return ""; // Dummy data
  }
}

class InstagramPostAnalyzer extends SocialMediaPostAnalyzer {
  // Fetches data from Instagram API and returns its data
  protected override async fetchData() {
    return ""; // Dummy data
  }
}

// Usage
const twitterAnalysis = new TwitterPostAnalyzer();

twitterAnalysis.analyzePosts();

const instagramAnalysis = new InstagramPostAnalyzer();

instagramAnalysis.analyzePosts();
