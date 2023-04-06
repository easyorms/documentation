---
sidebar_position: 4
---

# Many To Many

A many-to-many relationship between two classes means that each instance of one class is associated with zero or more instances of the other class, and vice versa. In Java, this relationship is usually implemented using a collection (e.g. List) of the target class as an attribute of both classes.

```js
  public class Customer {
    private Integer id;

    private List<Order> orders;
    // other attributes ...
    // add getters and setters... .
  }
```

```js
  public class Order {
    private Integer id;

    private List<Customer> customers;
    // other attributes ...
    // add getters and setters... .
  }
```