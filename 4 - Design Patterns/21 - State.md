### State

> State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/d77e7972-083f-4fee-b2a7-640f017144f5"/>

```typescript
interface PipelineState {
  start(pipeline: Pipeline): void;
  fail(pipeline: Pipeline): void;
  complete(pipeline: Pipeline): void;
}

class IdleState implements PipelineState {
  start(pipeline: Pipeline) {
    console.log("Pipeline started. Building...");
    pipeline.setState(new BuildingState());
  }

  fail(pipeline: Pipeline) {
    console.log("Pipeline is idle. Nothing to fail.");
  }

  complete(pipeline: Pipeline) {
    console.log("Pipeline is idle. Nothing to complete.");
  }
}

class BuildingState implements PipelineState {
  start(pipeline: Pipeline) {
    console.log("Pipeline is already building.");
  }

  fail(pipeline: Pipeline) {
    console.log("Build failed.");
    pipeline.setState(new FailedState());
  }

  complete(pipeline: Pipeline) {
    console.log("Build complete. Testing...");
    pipeline.setState(new TestingState());
  }
}

class TestingState implements PipelineState {
  start(pipeline: Pipeline) {
    console.log("Pipeline is already in progress.");
  }

  fail(pipeline: Pipeline) {
    console.log("Testing failed.");
    pipeline.setState(new FailedState());
  }

  complete(pipeline: Pipeline) {
    console.log("Testing complete. Deploying...");
    pipeline.setState(new DeployingState());
  }
}

class DeployingState implements PipelineState {
  start(pipeline: Pipeline) {
    console.log("Pipeline is already deploying.");
  }

  fail(pipeline: Pipeline) {
    console.log("Deployment failed.");
    pipeline.setState(new FailedState());
  }

  complete(pipeline: Pipeline) {
    console.log("Deployment successful!");
    pipeline.setState(new IdleState());
  }
}

class FailedState implements PipelineState {
  start(pipeline: Pipeline) {
    console.log("Fix the issues and start the pipeline again.");
  }

  fail(pipeline: Pipeline) {
    console.log("Pipeline already in failed state.");
  }

  complete(pipeline: Pipeline) {
    console.log("Cannot complete. The pipeline has failed.");
  }
}

// 3. Context
class Pipeline {
  private state: PipelineState;

  constructor() {
    // Initial state
    this.state = new IdleState();
  }

  setState(state: PipelineState) {
    this.state = state;
  }

  start() {
    this.state.start(this);
  }

  fail() {
    this.state.fail(this);
  }

  complete() {
    this.state.complete(this);
  }
}

// Client Code
const pipeline = new Pipeline();
pipeline.start(); // Output: Pipeline started. Building...
pipeline.complete(); // Output: Build complete. Testing...
pipeline.fail(); // Output: Testing failed.

pipeline.setState(new BuildingState());
pipeline.start(); // Output: Pipeline is already building.
pipeline.complete(); // Output: Testing complete. Deploying...
pipeline.complete(); // Output: Deployment successful!

pipeline.setState(new TestingState());
pipeline.start(); // Output: Pipeline is already in progress.
pipeline.fail(); // Output: Testing failed.
pipeline.complete(); // Output: Deployment successful!

pipeline.setState(new DeployingState());
pipeline.start(); // Output: Pipeline is already deploying.
pipeline.fail(); // Output: Deployment failed.
pipeline.complete(); // Output: Deployment successful!

pipeline.setState(new FailedState());
pipeline.start(); // Output: Fix the issues and start the pipeline again.
pipeline.fail(); // Output: Pipeline already in failed state.
pipeline.complete(); // Output: Cannot complete. The pipeline has failed.
```
