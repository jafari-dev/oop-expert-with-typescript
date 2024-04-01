type DB = "MySQL" | "Redis" | "Neo4j";

class QueryGenerator {
  readData(database: DB): string {
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

  writeData(database: DB, data: string): string {
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

// Usage
const queryGenerator = new QueryGenerator();

const mysqlReadingQuery = queryGenerator.readData("MySQL");
const mysqlWritingQuery = queryGenerator.writeData("MySQL", "PRINCIPLE = OCP");
const redisReadingQuery = queryGenerator.readData("Redis");
const redisWritingQuery = queryGenerator.writeData("Redis", "PRINCIPLE = OCP");
const neo4jReadingQuery = queryGenerator.readData("Neo4j");
const neo4jWritingQuery = queryGenerator.writeData("Neo4j", "PRINCIPLE = OCP");

console.log({
  mysqlReadingQuery, // SELECT * FROM MySQL
  mysqlWritingQuery, // INSERT INTO MySQL VALUES (PRINCIPLE = OCP)
  redisReadingQuery, // SCAN 0
  redisWritingQuery, // SET PRINCIPLE = OCP
  neo4jReadingQuery, // MATCH (n) RETURN n
  neo4jWritingQuery, // CREATE (PRINCIPLE = OCP)
});
