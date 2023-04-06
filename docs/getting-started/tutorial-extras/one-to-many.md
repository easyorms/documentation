---
sidebar_position: 3
---

# One To Many

A one-to-many relationship between two classes means that each instance of one class is associated with zero or more instances of the other class. In Java, this relationship is usually implemented using a collection (e.g. List) of the target class as an attribute of the source class.

```js
public class User {
    private Integer id;
    private String nic;

    private List<Message> sentMessages;

    // other attributes...
    // add getters and setters...
}
```

```js
public class Message {
    private Long id;
    private String content;

    private User sender;
    // other attributes...
    // add getters and setters... .
}
```