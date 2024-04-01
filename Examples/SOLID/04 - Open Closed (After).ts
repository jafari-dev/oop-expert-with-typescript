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

// Usage
const mysqlQueryGenerator = new MySql();
const redisQueryGenerator = new Redis();
const neo4jQueryGenerator = new Neo4j();

const mysqlReadingQuery = mysqlQueryGenerator.readData();
const mysqlWritingQuery = mysqlQueryGenerator.writeData("PRINCIPLE = OCP");
const redisReadingQuery = redisQueryGenerator.readData();
const redisWritingQuery = redisQueryGenerator.writeData("PRINCIPLE = OCP");
const neo4jReadingQuery = neo4jQueryGenerator.readData();
const neo4jWritingQuery = neo4jQueryGenerator.writeData("PRINCIPLE = OCP");

console.log({
  mysqlReadingQuery, // SELECT * FROM MySQL
  mysqlWritingQuery, // INSERT INTO MySQL VALUES (PRINCIPLE = OCP)
  redisReadingQuery, // SCAN 0
  redisWritingQuery, // SET PRINCIPLE = OCP
  neo4jReadingQuery, // MATCH (n) RETURN n
  neo4jWritingQuery, // CREATE (PRINCIPLE = OCP)
});
