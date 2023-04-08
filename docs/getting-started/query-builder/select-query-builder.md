---
sidebar_position: 2
---
# Select using Query Builder
## Config file
In EasyORM we are supporting a Json file as a configuration file, this file is used to specify the application models path, database infos and extra informations, you can use this example and personalise it with your own config :

```json  title="src/main/java/ressources/config.json"
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

This file should be named config.json and it should be put in the resources directory in a java project.

### models
  This attribute specifies the package name where the application models are located.
### database 
This attribute contains details about the the database to be used such as :
  - The URL to connect to the database,
  - The username and password for authentication
  - The strategy to use it can be
    - “create” : create tables for the first time in the database
    - “create-drop” : drops all database tables and re-create them
    - “update” : this strategy keeps all tables as they are in the database, and give the user the ability to interact with those tables
    - “drop” : this strategy drops the database tables

### connectionPool 
  This attribute sets the maximum size of the connection pool that will be used to manage connections to the database. The connection pool is a mechanism used to improve performance by reusing existing database connections rather than creating a new connection for each database request.

**As simple as this your config is done, and no more complex steps are needed**

## Annotation
**But you have the option to configure the attributes or the class using four annotations: @Table, @Column, @Id, @Ignore.**

### @Table 
Defines the table. It is useful if you want to change the name of the table in the database, otherwise it will be the name of the class.
 ```js
  @Table(name = "newNameOfTable")
 ```

### @Id
 Defines the primary key of the table. It is useful if you want to change it, change its name, or change its size if it is a string. Otherwise, the default primary key of the table is the first attribute of the class.
 ```js
  @Id(name = "newNameOfPrimaeyKey", autoIncrement = true)
 ```
### @Column
 Defines a column of the table. It is useful if you want to change it, change its name, change its size if it is a string, or set it as a null or unique value.
 ```js
    @Column(name = "newNameOfColumn", nullable = false, length = 255)
 ```
### @Ignore
 It is useful if you want to ignore an attribute of the class, even though it is not a member of the table in the database.
  ```js
    @Ignore()
 ```