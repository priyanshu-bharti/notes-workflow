## Abstract Keyword

- Non-access modifier which applies to classes and methods but not variables.
- Allows us to achieve abstraction.

### Characteristics

1. Abstract Classes can't be Instantiated due to partial implementations (Can be extended though).
2. Abstract Methods don't have an implementation body. (Ends with a semicolon).
3. Abstract Classes can have abstract and non-abstract methods.
4. Abstract Classes can have constructors (Used in concrete base classes for initializing state variables.)
5. Abstract Classes can contain instance variables (Data Members)
6. Abstract Classes can Implement Interfaces.
7. Any class that contains at least 1 abstract method must be declared `abstract`.

```java
// Define an abstract class
abstract class Shape {
    // Define an abstract method
    public abstract double getArea();
}

// Define a concrete subclass of Shape
class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
      this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

// Define another concrete subclass of Shape
class Rectangle extends Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() {
      return width * height;
    }
}

// Use the Shape class and its subclasses
public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle(5);
        Rectangle rectangle = new Rectangle(10, 20);

        System.out.println("Circle area: " + circle.getArea());
        System.out.println("Rectangle area: " + rectangle.getArea());
    }
}
```
