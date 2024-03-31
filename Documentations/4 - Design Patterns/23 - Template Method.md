### Template Method

> Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/7065675a-ad94-488b-a9b7-96fcb2aa7867"/>

```typescript
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
    return data
      .split(" ")
      .map((word) => word.replace(/[^a-zA-Z ]/g, "").toLowerCase());
  }

  analyze(data: string[]): string[] {
    return data.filter((word) => this.HARMFUL_WORDS.includes(word));
  }

  displayResults(data: string[]): void {
    console.log(
      `The number of harmful words in this post is ${
        data.length
      }, including ${data.join(", ")}.`
    );
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
```
