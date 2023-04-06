---
sidebar_position: 3
---

# Map Models

As we show before we are using the [JavaBeans](https://en.wikipedia.org/wiki/JavaBeans) convention, so it’s very very simple and easy to  set the structure of your tables based on something you already use and familiar with, so there is no need to use [JPA](https://en.wikipedia.org/wiki/Jakarta_Persistence) to declare tables and columns and map relations between tables, but if you want to customize your tables and columns you have a minimum of useful [annotations](https://en.wikipedia.org/wiki/Java_annotation) 

## Primary Key

By default the first attribute of the model is the primary key of the table

```js
public class User {
    private Integer id;
    // other columns... .	
    // add getters and setters... .
}
```

you can customize the primary key by adding the @Id annotation

```js
public class User {
    private String name;
    @Id(name = "userId", autoIncrement = true)
    private Integer id;
    // other columns... .	
    // add getters and setters... .
}
```

now the order doesn't matter because the id is specified with the @Id annotation, 

you can also change the name of this column, set it as auto incremented value, control it length if **~~it’s a String primary key~~** 

## Other column
And it’s also possible to customize other attributes by using @Column annotation

```js
public class User {
    @Id(name = "userId", autoIncrement = true)
    private Integer id;

    @Column(name = "national_card", unique = true)
    private String nic;

    @Column(name = "first_name", nullable = false, length = 255)
    private String firstName;

    // other columns... .	
    // add getters and setters... .
}
```

You can change the column name, set it value to be unique, set it as non nullable value and control it length if it is a String attribute

You can also ignore an attribute if you don’t want it to be part of the created table using @Ignore annotation

```js
public class User {
    @Id(name = "userId", autoIncrement = true)
    private Integer id;

    @Column(name = "national_card", unique = true)
    private String nic;

    @Column(name = "first_name", nullable = false, length = 255)
    private String firstName;
    
    @Ignore
    private Integer age;
    // other columns... .	
    // add getters and setters... .
}
```

The age attribute will not be part of the user table in the database

**That’s all → with EasyORM it’s so easy to map java classes to relational database tables.**
