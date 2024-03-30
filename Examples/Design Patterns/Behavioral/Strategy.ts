interface RenderStrategy {
  renderShape(shape: Shape): void;
}

class RasterRender implements RenderStrategy {
  renderShape(shape: Shape) {
    console.log(`Raster rendering the ${shape.getName()}`);
  }
}

class VectorRender implements RenderStrategy {
  renderShape(shape: Shape) {
    console.log(`Vector rendering the ${shape.getName()}`);
  }
}

class Shape {
  private name: string;
  private renderStrategy: RenderStrategy;

  constructor(name: string, strategy: RenderStrategy) {
    this.name = name;
    this.renderStrategy = strategy;
  }

  setRenderStrategy(strategy: RenderStrategy) {
    this.renderStrategy = strategy;
  }

  render() {
    this.renderStrategy.renderShape(this);
  }

  getName(): string {
    return this.name;
  }
}

// Usage
const rasterRender = new RasterRender();
const vectorRender = new VectorRender();

const circle = new Shape("Circle", rasterRender);
circle.render();

circle.setRenderStrategy(vectorRender);
circle.render();
