---
sidebar_position: 1
---

# Overview

To map two entities, we do not use specific annotations. Instead, we follow a simple principle: 
the first entity is automatically mapped to the first entity it corresponds to, as 
:::caution
  This convention is very important for the relationship mapping done by EasyORM.
:::

illustrated in this example.

```js 
public class User {
    private Integer id;
    private String nic;

    // relations
    private List<Message> sentMessages;
    private List<Message> receivedMessages;

    // other columns... .	
    // add getters and setters... .
```

```js
public class Message {
    private Long id;
    private String content;

    private User sender;
    private User receiver;

    // other columns... .	
    // add getters and setters... .
}
```
In the database, the message table will have 2 foreign keys on the user table (sender and receiver)

**Note :**  

In the Message class, the first User object will automatically map to the first Message object in the User class, the second one will map to the second one, and so on