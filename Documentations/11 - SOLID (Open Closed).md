### 2. Open/Closed (OCP)

#### Original Definition

> Software entities should be open for extension, but closed for modification.

#### Simple Definition

> The Open/Closed Principle means that once you write a piece of code, you should be able to add new functionality to it without changing the existing code. It promotes extending the behavior of software rather than altering it, ensuring that changes don't break existing functionality.

<img src="https://user-images.githubusercontent.com/37804060/153056325-679b94dc-ea4f-4315-a682-93057845f9d5.jpg"/>

#### Example

Before OCP implementation, the `QueryGenerator` class directly handles different types of databases, such as _MySQL_, _Redis_, and _Neo4j_, within its methods. This violates the Open/Closed Principle because if you want to add support for a new database, you would need to modify the `QueryGenerator` class by adding a new case to each switch statement. This could lead to the class becoming bloated and tightly coupled to specific database implementations, making it harder to maintain and extend.

After implementing OCP, the code is refactored to use interfaces and separate classes for each database type. Now, the QueryGenerator interface defines common methods `readData` and `writeData`, while individual database classes (`MySql`, `Redis`, and `Neo4j`) implement these methods according to their specific behavior.

This approach adheres to the Open/Closed Principle because the `QueryGenerator` interface is open for extension, allowing you to add support for new databases by creating new classes that implement the interface, without modifying existing code. Additionally, it's closed for modification because changes to existing database classes won't affect the `QueryGenerator` interface or other database implementations. This results in a more flexible, maintainable, and scalable design.

:x: Before following OCP:

```typescript
class QueryGenerator {
  readData(database: string): string {
    switch (database) {
      case "MySQL":
        return "SELECT * FROM MySQL";
      case "Redis":
        return "SCAN 0";
      case "Neo4j":
        return "MATCH (n) RETURN n";
      default:
        return "Unknown";
    }
  }

  writeData(database: string, data: string): string {
    switch (database) {
      case "MySQL":
        return `INSERT INTO MySQL VALUES (${data})`;
      case "Redis":
        return `SET ${data}`;
      case "Neo4j":
        return `CREATE (${data})`;
      default:
        return "Unknown";
    }
  }
}
```

:heavy_check_mark: After following OCP:

```typescript
interface QueryGenerator {
  readData: () => string;
  writeData: (data: string) => string;
}

class MySql implements QueryGenerator {
  readData() {
    return "SELECT * FROM MySQL";
  }

  writeData(data: string) {
    return `INSERT INTO MySQL VALUES (${data})`;
  }
}

class Redis implements QueryGenerator {
  readData() {
    return "SCAN 0";
  }

  writeData(data: string) {
    return `SET ${data}`;
  }
}

class Neo4j implements QueryGenerator {
  readData() {
    return "MATCH (n) RETURN n";
  }

  writeData(data: string) {
    return `CREATE (${data})`;
  }
}
```
