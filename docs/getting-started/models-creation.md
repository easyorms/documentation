---
sidebar_position: 2
---
# Models creation

:::caution

The only requirement is to respect the convention of [JavaBeans](https://en.wikipedia.org/wiki/JavaBeans)

:::

The class must have a default constructor with no params.

Private attributes of the class (instance variables) must be accessed publicly through accessor methods built with "get" or "set" followed by the capitalized name of the attribute. The pair of accessors is called a property.

The class must not be declared final.

The class must be "Serializable" to be able to save and restore the state of instances of this class.

**With EasyORM your can keep your models just like this :**

```js
public class User {
    private Integer id;
    private String nic;
    private String firstName;
    private String lastName;
    private Date birthDay;

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(Date birthDay) {
        this.birthDay = birthDay;
    }
}
```

Or you customize you fields with specific annotaions

```js
public class User {
    @Id(name = "userId", autoIncrement = true)
    private Integer id;
    @Column(name = "national_card", unique = true)
    private String nic;
    @Column(name = "firstname", nullable = false)
    private String firstName;
    private String lastName;
    private Date birthDay;

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(Date birthDay) {
        this.birthDay = birthDay;
    }
}
```