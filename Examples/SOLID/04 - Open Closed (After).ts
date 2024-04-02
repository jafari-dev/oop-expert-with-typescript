interface QueryGenerator {
  getReadingQuery: () => string;
  getWritingQuery: (data: string) => string;
}

class MySql implements QueryGenerator {
  getReadingQuery() {
    return "SELECT * FROM MySQL";
  }

  getWritingQuery(data: string) {
    return `INSERT INTO MySQL VALUES (${data})`;
  }
}

class Redis implements QueryGenerator {
  getReadingQuery() {
    return "SCAN 0";
  }

  getWritingQuery(data: string) {
    return `SET ${data}`;
  }
}

class Neo4j implements QueryGenerator {
  getReadingQuery() {
    return "MATCH (n) RETURN n";
  }

  getWritingQuery(data: string) {
    return `CREATE (${data})`;
  }
}
