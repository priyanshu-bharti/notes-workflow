## Basics of Object Oriented Programming

### Class

- User defined type acting as the blueprint for its objects.
- It can contain data members (variables) and methods (functions).
- We can access some property by either:
  - Creating the instance of the class (an object)
  - Or access the static properties of the class using the class' name.
- Example: Logger is a reusable blueprint. I can use it to log messages. The static field tracks total logs — shared across all instances.

```java
class Logger {
    static int logCount = 0;

    void log(String message) {
        logCount++;
        System.out.println("LOG: " + message);
    }
}
```

### Objects

- Basic unit of OOP which represents a real world entity.
- It is an instance of the class.
- When a class is defined, no memory is allocated until the object is created.
- Object has an identity (name), a state (its variables) and behavior (methods).
- Example: Here, appLogger is an object — it holds the state and behavior defined in the class. The object’s state changes as we use it.

```java
Logger appLogger = new Logger();
appLogger.log("App started");
```

### Data Abstraction

- Providing only essential information about the data to the outside world.
- Goal is to hide the complexity behind the implementation of something.
- Used for making easy to understand and accessible APIs behind some complex logic.
- Example: You don't see how the balance is updated internally. Abstraction gives you just enough to interact with the object safely.

```java
class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public double getBalance() {
        return balance;
    }
}

// Usage
BankAccount b = new BankAccount();
b.deposit(1000);
b.getBalance();
```

### Encapsulation

- Wrapping of data into a single unit while ensuring that only parts that need the data can access it.
- Binds the code and data it manipulates.
- Methods and data are hidden from other classes and can be accessed through the methods of that class.
- Example: The password field is private. No one can access it directly — they must use methods. This encapsulates and protects data.

```java
class User {
    private String password;

    public void setPassword(String pwd) {
        if (pwd.length() >= 6) password = pwd;
    }

    public boolean checkPassword(String input) {
        return password.equals(input);
    }
}
```

### Inheritance

- Derive properties and characteristics from another class.
- When we inherit from a parent class, we don't need to write the data members and methods again, instead it is bundled into the child class.
- This allows us to make the code more reusable and express IS-A relationships.
- Admin 'is a' User but with extra capabilities. Inheritance avoids repeating code for things both User and Admin share.

```java
class User {
    String name;
    void login() {}
}

class Admin extends User {
    void deleteUser(User u) {}
}
```

### Polymorphism

- It means that a method (usually) can have different implementation forms.
- The different implementation can mean a lot of things such as different function signature including the return types.
- Example: Same send() method behaves differently depending on the object type. That’s polymorphism — one interface, many forms.

```java
class Notification {
    void send() { System.out.println("Sending generic notification"); }
}

class Email extends Notification {
    void send() { System.out.println("Sending email"); }
}

class SMS extends Notification {
    void send() { System.out.println("Sending SMS"); }
}
```

### Dynamic Binding

- The code which is going to be executed by the Compiler or the interpreter is resolved during runtime.
- This can be useful in situations where the Base class B hasn't hidden any data/methods or parent class P.
  - Now the class B can be substituted with class P wherever required.
  - This is called **subtype polymorphism**.
- Example: Even though n is of type Notification, at runtime Java calls Email's send() — that's dynamic binding or late binding.

```java
Notification n = new Email();
n.send();  // Output: Sending email
```

### Message Passing

- Object communicate with each other by passing information between objects.
- A message can be request to invoke a method with some payload (data.)
- This is especially useful in concurrent systems where we need to send some data between producers and consumers.
- It can also be used to trigger some action based on some events.
- Example: The process() method call is message passing. We send a command to an object and it reacts accordingly. This scales well in multi-threaded systems.

```java
class Service {
    void process(String msg) {
        System.out.println("Processing: " + msg);
    }
}

Service s = new Service();
s.process("start job");

```
