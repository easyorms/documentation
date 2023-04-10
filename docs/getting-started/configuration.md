---
sidebar_position: 1
---
# Configuration


To use EasyORM in your Maven project, you should add the following dependency to your **`pom.xml`** file:

```xml title="pom.xml"
<dependency>
  <groupId>org.easyorm</groupId>
  <artifactId>EasyOrm</artifactId>
  <version>1.0.0</version>
</dependency>
```

## config file

EasyORM can be configured using a JSON file named **`config.json`**, which should be placed in the resource folder of your Java project. The configuration file specifies the models package, database URL, username, password, database creation strategy, and connection pool size.

Here's an example configuration file:

```json title="src/main/java/ressources/config.json"

{
  "models": "org.easyorm.models",

  "database": {
    "url": "jdbc:mysql://localhost/messagingApp",
    "username": "root",
    "password": "",
    "strategy": "create",
    "dialect" : "mysql"
  },

  "connectionPool": {
    "maxSize": 10
  }
}
```

### **Models Package**

The **`models`** property specifies the package where your model classes are located. All model classes must be in this package or a subpackage.

### **Database Configuration**

The **`database`** property specifies the configuration for the database connection. The properties are as follows:

- **`url`**: The URL of the database.
- **`username`**: The username to use when connecting to the database.
- **`password`**: The password to use when connecting to the database.
- **`strategy`**: The strategy to use when creating the database. This can be **`create`**, **`update`**, or **`create-drop`**. If set to **`create`**, the database tables will be created if they do not exist. If set to **`create-drop`**, the database tables will be dropped and re-created. If set to **`update`** no table will be created or modified you can interact with your tables.
- **`dialect`**: The SQL dialect to use when working with the database. This can be **`mysql`**, **`postgres`** or **`H2`**.

### **Connection Pool Configuration**

The **`connectionPool`** property specifies the configuration for the connection pool. The only property is **`maxSize`**, which specifies the maximum number of connections that can be created in the connection pool.

By configuring these properties in the **`config.json`** file and adding the Maven dependency or importing the jar file, you can easily customize EasyORM to meet the needs of your application.
