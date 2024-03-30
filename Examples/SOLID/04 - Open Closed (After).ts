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
