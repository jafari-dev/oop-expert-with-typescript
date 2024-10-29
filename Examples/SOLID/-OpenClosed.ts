type DB = "MySQL" | "Redis" | "Neo4j";

class QueryGenerator {
  getReadingQuery(database: DB): string {
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

  getWritingQuery(database: DB, data: string): string {
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
