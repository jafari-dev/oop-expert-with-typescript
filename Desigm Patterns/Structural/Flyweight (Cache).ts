class TreeType {
  private name: string;
  private color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  display(x: number, y: number): void {
    console.log(
      `Render a ${this.color} ${this.name} tree at position (${x}, ${y})`
    );
  }
}

class Tree {
  private x: number;
  private y: number;
  private type: TreeType;

  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  display() {
    this.type.display(this.x, this.y);
  }
}

class Forest {
  private treeTypes: Map<string, TreeType>;
  private trees: Tree[];

  constructor() {
    this.treeTypes = new Map();
    this.trees = [];
  }

  private getTreeType(name: string, color: string): TreeType {
    const key = `${name}_${color}`;

    if (!this.treeTypes.has(key)) {
      this.treeTypes.set(key, new TreeType(name, color));
    }

    return this.treeTypes.get(key) as TreeType;
  }

  public plantTree(x: number, y: number, name: string, color: string): void {
    const type = this.getTreeType(name, color);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  public display(): void {
    this.trees.forEach((tree) => tree.display());
  }
}

// Use case
const forest = new Forest();
forest.plantTree(1, 1, "Pine", "Green");
forest.plantTree(3, 4, "Oak", "DarkGreen");
