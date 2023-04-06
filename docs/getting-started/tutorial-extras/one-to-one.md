---
sidebar_position: 2
---

# One To One

A one-to-one relationship between two classes means that each instance of one class is associated with exactly one instance of the other class. In Java, this relationship is usually implemented using an instance variable of the target class as an attribute of the source class.

```js
  public class Person {
    private String nic;
    // other attributes ...
    private Passport passport;
  }
```

```js
  public class Passport {
    private Integer id;

    private Person owner;
    // other attributes ...
    // add getters and setters... .
  }
```