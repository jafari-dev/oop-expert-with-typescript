interface Expression {
  interpret(): number;
}

class NumberExpression implements Expression {
  constructor(private value: number) {}

  interpret(): number {
    return this.value;
  }
}

class PlusExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

class MinusExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

class MultiplyExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  interpret(): number {
    return this.left.interpret() * this.right.interpret();
  }
}

class DivideExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  interpret(): number {
    return this.left.interpret() / this.right.interpret();
  }
}

class Interpreter {
  interpret(expression: string): number {
    const stack: Expression[] = [];

    const tokens = expression.split(" ");

    for (const token of tokens) {
      if (this.isOperator(token)) {
        const right = stack.pop()!;
        const left = stack.pop()!;
        const operator = this.createExpression(token, left, right);

        stack.push(operator);
      } else {
        stack.push(new NumberExpression(parseFloat(token)));
      }
    }

    return stack.pop()!.interpret();
  }

  private isOperator(token: string): boolean {
    return token === "+" || token === "-" || token === "*" || token === "/";
  }

  private createExpression(operator: string, left: Expression, right: Expression): Expression {
    switch (operator) {
      case "+":
        return new PlusExpression(left, right);
      case "-":
        return new MinusExpression(left, right);
      case "*":
        return new MultiplyExpression(left, right);
      case "/":
        return new DivideExpression(left, right);
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
  }
}

// Usage
const interpreter = new Interpreter();

console.log(interpreter.interpret("3 4 +")); // Output: 7
console.log(interpreter.interpret("5 2 * 3 +")); // Output: 13
console.log(interpreter.interpret("10 2 /")); // Output: 5
