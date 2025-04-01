## Various Data Types

- Primitives
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol (immutable identifier)
  - BigInt
- Reference Types
  - Object
  - Arrays
  - Functions
  - Date
  - RegExp
  - Map
  - Set
  - WeakMap (GC when no reference exists)
  - WeakSet (GC when no reference exists)

## Objects in Javascript

- KV pairs where keys are strings, values are any of the above data types
- Objects allows you to group related data, and functions together.
- **Properties**: The key-value pairs in an object.
- **Methods**: Functions that are properties of an object.
- **Dynamic nature**: Properties and methods can be added, modified, or deleted at runtime.

### Ways of Creating Objects

```tsx
// Object Literal
let car1 = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
};

// Object Constructor
let car2 = new Object();
car2.make = "Honda";
car2.model = "Civic";
car2.year = 2020;

// Constructor Function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let car3 = new Car("Ford", "Mustang", 2019);

// ES6 Class
class CarClass {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
let car4 = new CarClass("Chevrolet", "Malibu", 2018);

// Object.create() Method
let carPrototype = {
  start: function () {
    console.log("Car started");
  },
};
let car5 = Object.create(carPrototype);
car5.make = "Nissan";
car5.model = "Altima";
car5.year = 2017;

// Factory Function
function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
  };
}
let car6 = createCar("BMW", "X5", 2022);
```

## Prototypal Inheritance

- Allows objects to inherit properties and methods from other objects.
- Inheritance is based on objects rather than classes.
- **Prototype**:
  - Every JavaScript object has a prototype.
  - A prototype is also an object, and it serves as a template from which other objects inherit properties and methods.
- **Prototype Chain**:
  - When trying to access a property or method on an object, JavaScript first looks for the property on the object itself.
  - If it doesn't find it, it looks for the property on the object's prototype, and then on the prototype's prototype, and so on, forming a chain of objects known as the prototype chain.
- **Object.create()**:
  - This method allows you to create a new object with a specified prototype, making it easy to implement prototypal inheritance.

```tsx
// Define a prototype object
let animal = {
  eats: true,
  walk: function () {
    console.log("Animal walks");
  },
};

// Create a new object that inherits from the prototype object
let rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (inherited from animal)
console.log(rabbit.jumps); // true (own property)

rabbit.walk(); // Animal walks (inherited method)
```

### Object.Prototype

- `Object.prototype` is a built-in object in JavaScript from which all other objects inherit.
- It is the ultimate prototype from which all other prototypes are derived, forming the root of the prototype chain.
  - All JavaScript objects, either directly or indirectly, inherit from `Object.prototype`.
  - If an object does not have a specified prototype, it implicitly inherits from `Object.prototype`.
- This means that properties and methods defined on `Object.prototype` are available to all objects unless they are shadowed by properties and methods further down the prototype chain.
- `Object.prototype` includes a number of methods and properties that are universally available to all objects. are:
  - `hasOwnProperty(property)`: Checks if an object has a non-inherited property as its own.
  - `isPrototypeOf(object)`: Checks if the object is in the prototype chain of another object.
  - `propertyIsEnumerable(property)`: Checks if a property is enumerable.
  - `toString()`: Returns a string representation of the object.
  - `valueOf()`: Returns the primitive value of the object.

```tsx
let animal = {
  eats: true,
};

let rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (inherited from animal)
console.log(rabbit.hasOwnProperty("eats")); // false (not own property)

console.log(Object.prototype.__proto__); // null; Root proto doesn't have prototypes
console.log(animal.__proto__ === Object.prototype); // true; Animal has a default root prototype
console.log(rabbit.__proto__ === animal); // true; Rabbit has a custom animal prototype.

let obj = { name: "John", age: 30 };

// Checking if 'name' is a property of obj
console.log(obj.hasOwnProperty("name")); // true

// Checking if obj is in the prototype chain of Object
console.log(Object.prototype.isPrototypeOf(obj)); // true

// Getting the string representation of obj
console.log(obj.toString()); // [object Object]

obj.greet(); // Hello! (All objects now have this method)
```

## Scoping

- Scoping refers to the accessibility of variables within different parts of a program.
- In JavaScript, there are two types of scope:

  - **Global Scope**

    - Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.

      ```tsx
      let globalVar = "I am global";

      function showGlobalVar() {
        console.log(globalVar); // Accessible
      }

      showGlobalVar(); // I am global
      ```

  - **Local Scope**

    - Variables declared within a function or block are in the local scope and can only be accessed within that function or block.

      ```tsx
      function showLocalVar() {
        let localVar = "I am local";
        console.log(localVar); // Accessible
      }

      showLocalVar(); // I am local
      console.log(localVar); // Error: localVar is not defined
      ```

![Untitled](Javascript%209da480f2d1cc4818aec4e61c424e0684/Untitled.png)

![Untitled](Javascript%209da480f2d1cc4818aec4e61c424e0684/Untitled%201.png)

## Hoisting

- Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.
- However, only the declarations are hoisted, not the initializations.

## Temporal Dead Zone

- The Temporal Dead Zone is a behavior in JavaScript where variables declared with `let` and `const` are not accessible before their declaration within their scope, even though they are hoisted.
- This zone starts from the beginning of the block until the variable's declaration is encountered.

## Closures

- A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables, even after the outer function has returned.
- Closures allow the inner function to retain access to the outer function's scope chain.

```tsx
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// Output:
// Outer Variable: outside
// Inner Variable: inside
```

### How Closures Retain References

1. **Execution Context**:
   - Whenever a function is invoked, an execution context is created.
   - This context includes information about the function's local variables, the scope chain, and the value of `this`.
   - Each execution context has a reference to its lexical environment.
2. **Lexical Environment**:
   - A lexical environment is a structure that holds identifier-variable mappings (i.e., where the variable names are mapped to the actual variables).
   - It consists of two components: the environment record (which stores local variables, functions, etc.) and a reference to the outer lexical environment (which allows access to variables in outer scopes).

### Closure Mechanism

- When a function is defined, it retains a reference to its lexical environment.
- This is true even if the function is returned from another function.
- Here’s how it works step-by-step:
  1. **Function Creation**:
     - When a function is created, it captures the lexical environment where it was defined.
     - This lexical environment includes all the local variables and any outer lexical environments.
  2. **Function Invocation**:
     - When the outer function is invoked, an execution context is created, which includes its own lexical environment.
     - When the outer function returns, its execution context is destroyed, but the inner function retains a reference to the lexical environment of the outer function.
  3. **Retaining References**:
     - The inner function retains a reference to the lexical environment of the outer function even after the outer function has completed execution and its execution context is destroyed.
     - This retained reference allows the inner function to access and modify the variables that were in the scope of the outer function at the time of the inner function's creation.

## Null vs Undefined

- **Undefined**:
  - Default value for uninitialized variables and parameters.
  - Indicates absence of a value due to lack of initialization.
  - `undefined` does not have a prototype chain since it is a primitive type.
- **Null**:
  - Explicitly assigned to indicate an empty or non-existent value.
  - Represents the intentional absence of any object value.
  - `null` is considered an empty object reference and can be used where an object is expected, although it does not have properties or methods.
- Using `==` (loose equality), `undefined` and `null` are considered equal because they both represent the absence of a value.
- Using `===` (strict equality), they are not equal because they are different types.

## Loose vs Strict Equality

### Loose Equality (`==`)

- **Type Conversion**: Loose equality performs type conversion (also known as type coercion) before making the comparison.
- This means that if the values being compared are of different types, JavaScript will attempt to convert one or both values to a common type before making the comparison.
- **Comparison**: After type conversion, the values are compared.

### Examples

```jsx
console.log(5 == "5"); // true (number 5 is coerced to string '5')
console.log(0 == false); // true (number 0 is coerced to boolean false)
console.log(null == undefined); // true (special case: null and undefined are considered equal)
console.log("" == false); // true (empty string is coerced to boolean false)
console.log("" == 0); // true (empty string is coerced to number 0)
```

### Strict Equality (`===`)

- **No Type Conversion**: Strict equality does not perform type conversion.
- It directly compares both the value and the type of the two values.
- **Comparison**: If the values are of different types, the comparison immediately returns `false`.

### Examples

```jsx
console.log(5 === "5"); // false (different types: number and string)
console.log(0 === false); // false (different types: number and boolean)
console.log(null === undefined); // false (different types)
console.log("" === false); // false (different types: string and boolean)
console.log("" === 0); // false (different types: string and number)
console.log(5 === 5); // true (same type and value)
console.log("hello" === "hello"); // true (same type and value)
```

### Key Differences

1. **Type Coercion**:
   - `==`: Performs type coercion to compare values.
   - `===`: Does not perform type coercion; values must be of the same type to be considered equal.
2. **Special Cases**:
   - `==`: Treats `null` and `undefined` as equal.
   - `===`: Considers `null` and `undefined` as different types and therefore not equal.
3. **Performance**:
   - `===` is generally faster because it does not involve type conversion, but the difference is usually negligible in most applications.

### When to Use Which

- **Strict Equality (`===`)**: Use strict equality whenever possible to avoid unexpected type coercion and to ensure that both the type and value are exactly what you expect.
- **Loose Equality (`==`)**: Use loose equality if you specifically want to allow type conversion, but be cautious and aware of how JavaScript handles type coercion to avoid bugs.

### Practical Examples

### Using Strict Equality

```jsx
javascriptCopy code
let userInput = '5';
if (userInput === 5) {
  console.log('This will not log because types are different.');
} else {
  console.log('This will log because "5" (string) is not strictly equal to 5 (number).');
}
```

### Using Loose Equality

```jsx
javascriptCopy code
let userInput = '5';
if (userInput == 5) {
  console.log('This will log because "5" (string) is loosely equal to 5 (number).');
}
```

### Summary

- **Loose Equality (`==`)**: Compares values with type conversion if necessary.
- **Strict Equality (`===`)**: Compares values without type conversion, requiring both value and type to be the same.
- Using strict equality (`===`) is generally recommended to avoid the pitfalls of type coercion, leading to more predictable and maintainable code.

## ES6 Features

- Arrow Functions
- Classes
- Object Destructuring
- Spread and Rest Operators
- Promises and Async Await
- Modules (ESM)
- Shorthand Object Property Assignment
- Default Params in Functions
- Template Literals
- Let and Const

## Call, Bind and Apply

- In JavaScript, `call`, `bind`, and `apply` are methods used to manipulate how a function is executed and how it accesses its `this` context and arguments.
- Call

  - The `call` method is used to call a function with a specified `this` value and arguments provided individually.

    ```jsx
    function.call(thisArg, arg1, arg2, ...);
    ```

    - `function`: The function to be called.
    - `thisArg`: The value of `this` to be used inside the function when it is executed.
    - `arg1, arg2, ...`: Arguments to be passed to the function individually.

    ```jsx
    const person = {
      fullName: function (city, country) {
        return (
          this.firstName + " " + this.lastName + ", " + city + ", " + country
        );
      },
    };

    const person1 = {
      firstName: "John",
      lastName: "Doe",
    };

    const person2 = {
      firstName: "Jane",
      lastName: "Smith",
    };

    // Using call to invoke the function with person1 and pass arguments
    console.log(person.fullName.call(person1, "New York", "USA")); // John Doe, New York, USA

    // Using call to invoke the function with person2 and pass arguments
    console.log(person.fullName.call(person2, "London", "UK")); // Jane Smith, London, UK
    ```

- Apply

  - The `apply` method is similar to `call`, but it accepts arguments as an array or an array-like object.

    ```jsx
    function.apply(thisArg, [argsArray]);
    ```

    - `function`: The function to be called.
    - `thisArg`: The value of `this` to be used inside the function when it is executed.
    - `argsArray`: An array or array-like object containing arguments to be passed to the function.

    ```jsx
    javascriptCopy code
    const numbers = [5, 10, 15];

    // Using apply to find the maximum value in the numbers array
    const max = Math.max.apply(null, numbers);
    console.log(max); // 15

    // Using apply to concatenate an array of strings
    const parts = ['Hello', ' ', 'World'];
    console.log(Array.prototype.concat.apply([], parts)); // ['Hello', ' ', 'World']

    ```

- Bind

  - The `bind` method creates a new function that, when called, has its `this` keyword set to a specified value, with a given sequence of arguments preceding any provided when the new function is called.
    ```jsx
    function.bind(thisArg, arg1, arg2, ...);
    ```
  - `function`: The function to be bound.
  - `thisArg`: The value of `this` to be used when the function is executed.
  - `arg1, arg2, ...`: Arguments to prepend to arguments provided to the bound function when it is invoked.

    ```jsx
    const module = {
      x: 42,
      getX: function () {
        return this.x;
      },
    };

    const unboundGetX = module.getX;
    console.log(unboundGetX()); // undefined, because the function is invoked without the proper this context

    const boundGetX = module.getX.bind(module);
    console.log(boundGetX()); // 42, bind ensures the proper this context is maintained
    ```

### Key Differences

- **`call`**: Invokes the function immediately with a specified `this` context and individual arguments.
- **`apply`**: Invokes the function immediately with a specified `this` context and arguments provided as an array or array-like object.
- **`bind`**: Returns a new function with the specified `this` context and initial arguments, without invoking the function immediately. The new function can be called later with additional arguments if needed.

### Common Use Cases

- **`call`**: Use when you know the exact arguments to pass to the function and want to invoke it immediately.
- **`apply`**: Use when you have an array of arguments or want to pass arguments as an array-like object.
- **`bind`**: Use when you want to create a function with a specific `this` context and possibly some initial arguments, to be invoked later.

## Arrow Functions

- Arrow functions in JavaScript are a syntactically compact way to write anonymous functions.
- They have several differences compared to regular functions (function declarations or function expressions).

```jsx
// Regular Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => a + b;
```

### `this` Binding

- **Regular Function:**
  - `this` is dynamically scoped, depending on how the function is called.
  - Inside regular functions, `this` is determined by the caller of the function.
- **Arrow Function:**
  - `this` is lexically scoped, based on the surrounding context where the arrow function is defined (lexical scoping).
  - Arrow functions do not have their own `this`; they inherit `this` from the parent scope.

### Arguments Object

- **Regular Function:**
  - Has access to the `arguments` object, which is an array-like object holding all arguments passed to the function.
- **Arrow Function:**
  - Does not have its own `arguments` object. Use rest parameters (`...args`) instead.

### Constructor Function

- **Regular Function:**
  - Can be used as constructor functions with `new`, creating new objects.
- **Arrow Function:**
  - Cannot be used as constructors. Arrow functions do not have their own `this`, so they cannot be called with `new`.

### `super` keyword

- **Regular Function:**
  - Can use `super` to access and call functions on an object's parent.
- **Arrow Function:**
  - Does not have its own `super` binding. It uses `super` from its enclosing lexical context.

### Usage of `arguments`, `super`, and `new.target`

- **Regular Function:**
  - Can use `arguments`, `super`, and `new.target` keywords.
- **Arrow Function:**
  - Does not have its own bindings for `arguments`, `super`, `new.target`. They all inherit from the enclosing lexical context.

### `prototype` property

- **Regular Function:**
  - Has a `prototype` property.
- **Arrow Function:**
  - Does not have a `prototype` property. Cannot be used as constructors to create objects.

### Implicit return

- **Arrow Function:**
  - If the arrow function body consists of a single expression, it is implicitly returned without needing a `return` statement.
  ```jsx
  const square = (x) => x * x; // Implicit return
  ```
- **Regular Function:**
  - Requires an explicit `return` statement to return a value.
  ```jsx
  function square(x) {
    return x * x;
  }
  ```

### Use Cases

- **Arrow Function:**
  - Ideal for non-method functions.
  - Useful for shorter, concise function expressions.
  - When `this` needs to be lexically scoped (e.g., in callbacks or event handlers).
- **Regular Function:**
  - Better suited for object methods or constructor functions.
  - When `this` behavior should depend on how a function is called.
  - Functions that require `arguments` object or `super` keyword.

### Summary

- Arrow functions offer a concise syntax and lexically scoped `this`, making them suitable for many functional programming paradigms and scenarios where `this` needs to be consistent with the enclosing context.
- Regular functions, on the other hand, provide more flexibility with `this`, `arguments`, and constructor functionality, making them appropriate for object-oriented programming and more complex function structures.
- Understanding these differences helps in choosing the appropriate function syntax for different programming needs in JavaScript.

## Shallow vs Deep Copying

- **Mutability**
  - Shallow copying retains references to nested objects or arrays, so changes to these nested references affect both the original and the shallow copy.
  - Deep copying creates new instances of nested objects or arrays, ensuring changes do not affect the original.
- **Complexity**
  - Deep copying is more complex and requires recursive traversal of nested structures to ensure all levels are copied.
  - Shallow copying is simpler and faster but may lead to unexpected behavior if nested structures are modified.
- **Performance**
  - Shallow copying is generally faster and less memory-intensive, especially for large data structures, because it does not duplicate nested elements.

## Array Methods

| Method      | Description                                                             | Example                                  |
| ----------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| `push()`    | Adds elements to the end of an array                                    | `arr.push('apple', 'orange')`            |
| `pop()`     | Removes the last element from an array                                  | `arr.pop()`                              |
| `shift()`   | Removes the first element from an array                                 | `arr.shift()`                            |
| `unshift()` | Adds elements to the beginning of an array                              | `arr.unshift('apple', 'orange')`         |
| `concat()`  | Returns a new array combining arrays or values                          | `arr1.concat(arr2)`                      |
| `slice()`   | Returns a shallow copy of a portion of an array                         | `arr.slice(1, 3)`                        |
| `splice()`  | Changes the contents of an array by removing or replacing elements      | `arr.splice(1, 2, 'apple', 'orange')`    |
| `forEach()` | Executes a function for each array element                              | `arr.forEach(item => console.log(item))` |
| `map()`     | Creates a new array with results of calling a function on every element | `arr.map(item => item * 2)`              |
| `filter()`  | Creates a new array with elements passing a test                        | `arr.filter(item => item > 5)`           |

## String Methods

| Method          | Description                                             | Example                            |
| --------------- | ------------------------------------------------------- | ---------------------------------- |
| `charAt()`      | Returns the character at a specified index              | `str.charAt(0)`                    |
| `charCodeAt()`  | Returns the Unicode of a character at a specified index | `str.charCodeAt(0)`                |
| `indexOf()`     | Returns the index of first occurrence of a value        | `str.indexOf('o')`                 |
| `lastIndexOf()` | Returns the index of last occurrence of a value         | `str.lastIndexOf('o')`             |
| `slice()`       | Extracts a section of a string and returns it           | `str.slice(0, 5)`                  |
| `substring()`   | Returns substring between indices                       | `str.substring(0, 5)`              |
| `substr()`      | Returns substring starting from index with given length | `str.substr(6, 5)`                 |
| `replace()`     | Replaces a value with new value                         | `str.replace('world', 'universe')` |
| `toUpperCase()` | Converts string to uppercase                            | `str.toUpperCase()`                |
| `toLowerCase()` | Converts string to lowercase                            | `str.toLowerCase()`                |

## Things passed by Value and Reference

### Value

- When a primitive data type (like `number`, `string`, `boolean`, `null`, `undefined`, `symbol`) is passed to a function, it is passed by value.
- This means that a copy of the actual value is passed into the function.
- Any changes made to the parameter inside the function do not affect the original value outside the function.

**Pass by Value**:

- Only a copy of the value is passed to the function.
- Changes inside the function do not affect the original variable.
- Applies to primitive data types.

### Reference

- When an object (including arrays and functions) is passed to a function, it is passed by reference.
- This means that the function receives a reference to the original object.
- Changes made to the object's properties (or array elements) inside the function will affect the original object outside the function.

**Pass by Reference**:

- A reference to the original value is passed to the function.
- Changes inside the function affect the original variable.
- Applies to objects, including arrays and functions.

## InstanceOf vs typeOf

### `typeof` Operator

- The `typeof` operator in JavaScript is used to check the data type (primitive type) of a variable or an expression.
- It returns a string indicating the type of the operand.
- **Syntax:**
  ```jsx
  typeof operand;
  ```
- **Examples:**
  ```jsx
  typeof 42; // "number"
  typeof "hello"; // "string"
  typeof true; // "boolean"
  typeof undefined; // "undefined"
  typeof null; // "object" (this is a historical quirk, not a real type)
  typeof {}; // "object"
  typeof []; // "object"
  typeof function () {}; // "function"
  ```
- **Key Points:**
  - Returns a string indicating the type of the operand.
  - Does not distinguish between different types of objects (except for functions).
  - Can be used to quickly check for primitive types (`number`, `string`, `boolean`, `undefined`) and detect if a variable is a function.

### `instanceof` Operator

- The `instanceof` operator in JavaScript is used to check whether an object belongs to a specific class or constructor function.
- It checks the prototype chain to determine if the prototype property of a constructor appears anywhere in the prototype chain of an object.
- **Syntax:**
  ```jsx
  object instanceof constructor;
  ```
- **Examples:**

  ```jsx
  class Animal {}
  class Dog extends Animal {}

  const dog = new Dog();

  console.log(dog instanceof Dog); // true
  console.log(dog instanceof Animal); // true (because Dog extends Animal)
  console.log(dog instanceof Object); // true (because everything's an object)
  console.log(dog instanceof Array); // false (dog's not an instance of Array)
  ```

**Key Points:**

- Checks if an object is an instance of a specific constructor function or its prototype chain.
- Useful for checking inheritance relationships between objects and classes.
- Cannot reliably identify primitive types or distinguish between different types of objects (e.g., arrays, regular objects, functions).

### Differences

1. **Purpose**:
   - `typeof` is primarily used to identify primitive types and functions.
   - `instanceof` is used to check object relationships and inheritance.
2. **Output**:
   - `typeof` returns a string indicating the primitive type or `"object"` for objects (excluding `null`) and functions.
   - `instanceof` returns a boolean indicating whether an object is an instance of a specific constructor function or its prototype chain.
3. **Usage**:
   - Use `typeof` for quick checks of primitive types and functions.
   - Use `instanceof` for checking object inheritance and class relationships.

### Summary

- In summary, `typeof` and `instanceof` are both operators used for type checking in JavaScript, but they serve different purposes.
- `typeof` checks the primitive type or function status of a value, while `instanceof` checks if an object is an instance of a specific constructor function or its prototype chain.
- Understanding their differences helps in effectively determining and handling data types and object relationships in JavaScript programming.

## Constructor Function

- In JavaScript, a constructor function is a function that is used to create and initialize objects.
- It serves as a blueprint or template for creating multiple instances of objects that share similar properties and methods.

### Characteristics of Constructor Functions:

1. **Usage**: Constructor functions are typically used with the `new` keyword to create new instances of objects.
2. **Properties and Methods**: They define properties and methods that will be shared by all instances created using that constructor.
3. **Initialization**: Constructor functions initialize object properties when new instances are created.

```jsx
// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;

  // Method defined within the constructor function
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

// Creating instances using the Person constructor function
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Accessing properties and calling methods on instances
console.log(person1.name); // "Alice"
console.log(person2.age); // 25
person1.sayHello(); // "Hello, my name is Alice and I am 30 years old."
person2.sayHello(); // "Hello, my name is Bob and I am 25 years old."
```

## Cookies

- **Cookies** are small pieces of data stored on the client's browser.
- They are primarily used to store user-specific information or settings that persist across different sessions or pages.
- Cookies are commonly used for tasks like session management, user authentication, storing shopping cart items, and tracking user behavior.

### Characteristics of Cookies:

1. **Storage Location**
   - Cookies are stored on the client-side, typically within the user's browser.
   - Each cookie is associated with a specific domain and path.
2. **Size Limit**
   - Each cookie has a size limit of approximately 4KB (4096 bytes)
   - This limit includes both the cookie name and its value.
3. **Expiry**
   - Cookies can have expiry dates set.
   - Persistent cookies remain on the user's device until they expire or are deleted, while session cookies are deleted when the browser session ends.

### Accessing Cookies in JavaScript:

- JavaScript provides the `document.cookie` API to read and write cookies.
- Here’s how you can access and manipulate cookies using JavaScript:

### Reading Cookies:

- To read cookies, you access the `document.cookie` property.
- It returns a semicolon-separated string of all cookies associated with the current document.

```tsx
const cookies = document.cookie;
console.log(cookies); // Outputs all cookies as a string

// Writing Cookie
document.cookie =
  "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// Deleting Cookie (To delete a cookie, set its expiry date to a past date)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

### Explanation of Parameters:

1. **`name = value`**
   - Specifies the name and value of the cookie.
   - This is required.
2. **`expires = date`**
   - Optional. Sets the expiration date of the cookie.
   - If not set, the cookie is treated as a session cookie and will be deleted when the browser session ends.
   - The date format should be in UTC/GMT format, such as `Thu, 18 Dec 2025 12:00:00 UTC`.
3. **`path = path`**
   - Optional. Specifies the path within the domain for which the cookie is valid.
   - Defaults to the current path of the current document location.
4. **`domain = domain`**
   - Optional. Specifies the domain and its subdomains for which the cookie is valid.
   - Defaults to the domain of the current document location.
5. **`secure`**
   - Optional. If present, the cookie will only be transmitted over secure (HTTPS) connections.

## Cookie Data Storage Limit

### Cookie Storage Limitations:

- **Size Limit**
  - The total size of all cookies for a domain is limited to approximately 4KB.
- **Number Limit**
  - Browsers impose a limit on the number of cookies per domain
  - (typically around 50 cookies per domain).
- **Security Restrictions**
  - Cookies are subject to security policies, such as the SameSite attribute to prevent cross-site request forgery (CSRF) attacks, and HTTPOnly to prevent JavaScript access for security reasons.

### Best Practices:

- **Sensitive Data**: Avoid storing sensitive information (like passwords) in cookies due to potential security risks.
- **Expiration**: Set reasonable expiry dates for cookies to manage storage effectively and enhance user privacy.
- **Compliance**: Ensure compliance with privacy regulations (e.g., GDPR, CCPA) when using cookies, especially for tracking and advertising purposes.

## Local storage

- Local Storage is used to store key-value pairs persistently across browser sessions.
- Typically, it allows storage of up to 5MB of data per domain.
- Data stored in Local Storage remains available even after the browser is closed and reopened.
- Accessed via the `localStorage` object in JavaScript.
- Suitable for storing user preferences, settings, and small amounts of data that need to persist between visits.

## IndexedDB

- Indexed DB is a more advanced DB-like storage mechanism for storing large amounts of structured data, providing indexed access to that data.
- Supports larger data sets compared to Local Storage or Browser Storage
  - (typically in the order of several MBs).
- Allows complex queries, transactions, and indexes, making it suitable for applications needing robust data storage and retrieval capabilities.
- Accessed via the Indexed Database API (`indexedDB`) in JavaScript.
- Suitable for applications requiring offline capabilities, complex data querying, and efficient management of large datasets.

## Cache Storage

- Cache Storage is used to store network requests and their responses, providing a way to manage temporary storage of web resources (e.g., HTML, CSS, JavaScript files, images) for quick access and retrieval.
- Generally, Cache Storage capacity is higher than other storage mechanisms, but it depends on the browser and device limitations.
- Accessed via the Cache API in JavaScript (`caches`).
- Used for improving web performance by caching resources that are frequently accessed or needed for offline use, such as in progressive web applications (PWAs).

## Storage Options Cheatsheet

```tsx
// ###### Local Storage ######

localStorage.setItem("key", "value");
const value = localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();

// ###### Session Storage ######

sessionStorage.setItem("key", "value");
const value = sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();

// ###### IndexedDB ######

// 1. Open
const request = indexedDB.open("database_name", version_number);
request.onerror = function (event) {
  console.error("Error opening database");
};
request.onsuccess = function (event) {
  const db = event.target.result;
  // Use db object for further operations
};

// 2. Add
const transaction = db.transaction(["object_store_name"], "readwrite");
const objectStore = transaction.objectStore("object_store_name");
objectStore.add({ id: 1, data: "value" });
objectStore.put({ id: 1, data: "new_value" });

// 3. Read
const transaction = db.transaction(["object_store_name"], "readonly");
const objectStore = transaction.objectStore("object_store_name");
const request = objectStore.get(1);
request.onsuccess = function (event) {
  const data = event.target.result;
  console.log(data);
};

// 4. Delete
const transaction = db.transaction(["object_store_name"], "readwrite");
const objectStore = transaction.objectStore("object_store_name");
objectStore.delete(1);

// 5. Clear
const transaction = db.transaction(["object_store_name"], "readwrite");
const objectStore = transaction.objectStore("object_store_name");
objectStore.clear();

// ###### Cache Storage ######

// 1. Opening a cache
caches
  .open("cache_name")
  .then(function (cache) {
    // Perform Operations here...
  })
  .catch(function (error) {
    console.error("Error opening cache");
  });

// 2. Add something to cache
caches.open("cache_name").then(function (cache) {
  cache.add("/path/to/resource");
  cache.addAll(["/path/to/resource1", "/path/to/resource2"]);
});

// 3. Read from Cache
caches.match("/path/to/resource").then(function (response) {
  if (response) {
    console.log(response);
  } else {
    console.log("Resource not found");
  }
});

// 4. Delete from Cache
caches.open("cache_name").then(function (cache) {
  cache.delete("/path/to/resource");
});

// 5 . Clear all Cache
caches.keys().then(function (cacheNames) {
  cacheNames.forEach(function (cacheName) {
    caches.delete(cacheName);
  });
});
```

## JSON Stringify vs Parse

- **Local Storage**: Simple, persistent storage for key-value pairs across browser sessions (up to 5MB per domain).
- **Browser Storage**: Includes both Local Storage (persistent) and Session Storage (cleared at the end of the session), accessed via `localStorage` and `sessionStorage`.
- **Indexed DB**: Advanced storage for structured data with indexed access, suitable for large datasets and complex queries (accessed via `indexedDB`).
- **Cache Storage**: Temporary storage for web resources like files and network requests, used for improving performance by caching frequently accessed data (accessed via `caches`).

## Promises

- **Promises** are a fundamental feature in JavaScript for handling asynchronous operations.
- They represent a value that may be available now, in the future, or never.
- Promises provide a cleaner alternative to callback-based approaches, helping to avoid callback hell and manage asynchronous code more effectively.

### How Promises Work:

1. **States**:
   - **Pending**: Initial state, neither fulfilled nor rejected.
   - **Fulfilled**: Operation completed successfully, with a resolved value.
   - **Rejected**: Operation failed, with a reason (error).
2. **Creating a Promise**:

   ```jsx
   const promise = new Promise((resolve, reject) => {
     // Async operation (e.g., fetching data)

     if (/* operation successful */) {
       resolve('Success'); // Resolve with a value
     } else {
       reject('Error'); // Reject with a reason
     }
   });
   ```

3. **Handling Promises**:

   - **`.then()`**: Handles resolved promises.
   - **`.catch()`**: Handles rejected promises.
   - **`.finally()`**: Executes code regardless of the promise's outcome.

   ```jsx
   promise
     .then((result) => {
       console.log("Resolved:", result);
     })
     .catch((error) => {
       console.error("Rejected:", error);
     })
     .finally(() => {
       console.log("Done");
     });
   ```

### Handling Multiple Promises:

1. **Promise.all()**: Resolves when all promises in the iterable have resolved, or rejects with the reason of the first promise that rejects.

   ```jsx
   const promises = [promise1, promise2, promise3];
   Promise.all(promises)
     .then((results) => {
       console.log("All resolved:", results);
     })
     .catch((error) => {
       console.error("One rejected:", error);
     });
   ```

2. **Promise.race()**: Resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

   ```jsx
   const promises = [promise1, promise2, promise3];
   Promise.race(promises)
     .then((result) => {
       console.log("First resolved:", result);
     })
     .catch((error) => {
       console.error("First rejected:", error);
     });
   ```

## Async Await

- **Async functions** are a modern syntax for handling asynchronous code in a more synchronous-looking way.
- They are built on top of promises and provide a cleaner syntax for consuming promises.
- **Async Function**:

  ```jsx
  async function fetchData() {
    try {
      const result = await fetch("https://api.example.com/data");
      const data = await result.json();
      return data;
    } catch (error) {
      console.error("Fetch failed:", error);
      throw error;
    }
  }

  // Using async function
  fetchData()
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  ```

### Error Handling in Promises and Async Await:

1. **Promises**:

   - Use `.catch()` to handle errors after chaining `.then()`.

   ```jsx
   promise
     .then((result) => {
       console.log("Resolved:", result);
     })
     .catch((error) => {
       console.error("Rejected:", error);
     });
   ```

2. **Async Await**:

   - Use `try { ... } catch { ... }` blocks to handle errors synchronously.

   ```jsx
   async function fetchData() {
     try {
       const result = await fetch("https://api.example.com/data");
       const data = await result.json();
       return data;
     } catch (error) {
       console.error("Fetch failed:", error);
       throw error;
     }
   }
   ```

### Proper Error Handling Tips:

- **Handle Rejections**
  - Always include `.catch()` or `try-catch` blocks to catch and handle errors, ensuring robust error management.
- **Throwing Errors**
  - Throw errors in promises or async functions to propagate them for centralized error handling.
- **Logging**
  - Log errors with descriptive messages and stack traces for easier debugging.
- **Graceful Degradation**
  - Implement fallbacks or default values when handling errors to ensure application resilience.

## Transpiler vs Compiler

### Compiler:

1. **Definition**
   - A compiler is a program that translates code written in a high-level programming language into machine code (binary code) that a computer's processor can execute directly.
2. **Functionality**
   - **Translation**: Converts entire source code files or modules into executable machine code.
   - **Optimization**: May perform optimizations such as code optimization and memory management to improve performance.
   - **Output**: Typically produces output that is directly executable by the target platform's hardware or virtual machine.
3. **Examples**
   - **C/C++ Compiler**: Converts C or C++ code into machine code.
   - **Java Compiler**: Converts Java code into bytecode (for JVM) or directly into native machine code (via JIT compilation).

### Transpiler (Source-to-Source Compiler):

1. **Definition**: A transpiler (short for "source-to-source compiler") is a type of compiler that translates code from one programming language to another at the same abstraction level, typically from a high-level language to another high-level language.
2. **Functionality**:
   - **Translation**: Converts source code from one programming language to another while maintaining the same level of abstraction.
   - **Target**: Often used to translate newer code (using modern syntax or features) into older versions of the same language for compatibility or to convert code between different languages that share similar constructs.
   - **Output**: Produces source code in a different language or a version of the same language.
3. **Examples**:
   - **Babel**: Transpiles modern JavaScript (ES6+) to older versions of JavaScript (ES5) for compatibility with older browsers.
   - **TypeScript Compiler**: Transpiles TypeScript code into JavaScript code that can run in any JavaScript environment.

### Key Differences:

- **Abstraction Level**: Compilers typically translate high-level code to low-level (machine) code, while transpilers translate code at the same high-level abstraction level.
- **Output**: Compilers produce executable machine code or bytecode, whereas transpilers produce source code in another language.
- **Purpose**:
  - Compilers are essential for creating executable programs, optimizing performance, and managing system resources.
  - Transpilers are used for language compatibility, modernizing code, or adapting code to different environments.

## Timers

- In JavaScript, timers such as `setTimeout`, `setInterval`, and `setImmediate` are used to execute code after a specified delay or repeatedly at set intervals.

### setTimeout

- **Purpose**: Executes a function or evaluates an expression after a specified delay (in milliseconds).
- **Syntax**:
  ```jsx
  const timeoutId = setTimeout(callback, delay, arg1, arg2, ...);
  ```
- **Parameters**:
  - `callback`: Function to be executed after the delay.
  - `delay`: Time in milliseconds after which the `callback` function should be executed.
  - `arg1, arg2, ...`: Optional arguments passed to the `callback` function.
- **Example**:
  ```jsx
  const timeoutId = setTimeout(() => {
    console.log("Delayed function executed");
  }, 1000); // Executes after 1 second
  ```
- **Clearing Timeout**:
  ```jsx
  clearTimeout(timeoutId);
  ```

### setInterval

- **Purpose**: Executes a function or evaluates an expression repeatedly at specified intervals.
- **Syntax**:
  ```jsx
  const intervalId = setInterval(callback, interval, arg1, arg2, ...);
  ```
- **Parameters**:
  - `callback`: Function to be executed at each interval.
  - `interval`: Time in milliseconds between each execution of the `callback`.
  - `arg1, arg2, ...`: Optional arguments passed to the `callback` function.
- **Example**:
  ```jsx
  const intervalId = setInterval(() => {
    console.log("Interval function executed");
  }, 2000); // Executes every 2 seconds
  ```
- **Clearing Interval**:
  ```jsx
  clearInterval(intervalId);
  ```

### setImmediate

- **Purpose**: Executes a function asynchronously as soon as the current event loop cycle completes.
- **Syntax**:
  ```jsx
  const immediateId = setImmediate(callback, arg1, arg2, ...);
  ```
- **Parameters**:
  - `callback`: Function to be executed immediately after the current event loop cycle.
  - `arg1, arg2, ...`: Optional arguments passed to the `callback` function.
- **Example**:
  ```jsx
  const immediateId = setImmediate(() => {
    console.log("Immediate function executed");
  });
  ```
- **Clearing Immediate**:
  There is no built-in function to clear `setImmediate` like `clearTimeout` or `clearInterval`. However, you can use `clearTimeout` to cancel the immediate execution if a timeout of 0 is used.

### Best Practices for Using Timers in JavaScript:

1. **Use setTimeout for Delayed Execution**:
   - Ensure to clear timeouts when no longer needed to avoid memory leaks.
2. **Use setInterval for Repeated Execution**:
   - Clear intervals when the execution is no longer required to conserve resources.
3. **Avoid Nested Timers (Callback Hell)**:
   - Nesting timers can lead to callback hell. Consider using `async/await` or Promise-based approaches for cleaner asynchronous code.
4. **Optimize Performance**:
   - Minimize the use of timers where possible to optimize performance, especially for functions that execute frequently.
5. **Error Handling**:
   - Wrap timer callbacks in try-catch blocks to handle exceptions gracefully and prevent unexpected termination of the timer.
6. **Understand Event Loop and Timing**:
   - Be aware of how timers interact with the event loop to avoid unexpected behavior, especially in asynchronous operations.

## JWT based Authentication

1. User submits their credentials through a login form
2. API handles the login request and verifies the user against a database
3. Backend verifies if the user is a valid one
   1. If the user is a valid user, JWT is generated and sent.
      1. JWT is generated using Server’s Secret Key and Signing Algorithm
      2. JWT describes algorithm (HMAC, SHA256, RSA), Payload (ID, usernames, roles) and Signature to verify if token was tampered.
   2. If the user is invalid 400 status code and error is sent as response.
4. Frontend gets the JWT usually as a secure HTTPonly cookie which can’t be accessed by JS
   1. Sometimes JWT is stored in local/session storage
5. User logs in, and Application ensures subsequent request contains the Authorization header as the JWT.
6. JWTs have expiration timestamp for enhancing security.
   1. When the token expires client either re-authenticates
   2. Or uses a refresh token to obtain new JWT from the backend.
7. JWTs usually have very short expiration time (couple of hours), but refresh token have several days before expiration.

![Untitled](Javascript%209da480f2d1cc4818aec4e61c424e0684/Untitled%202.png)

## Pagination

```tsx
const PAGE_SIZE = 10;
const totalItems = res.length;
let pageNumber = 0;

// Return data for the current page based on pageNumber and pageSize
function getPageItems(pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return storedData.slice(startIndex, endIndex);
}

// Calculate pagination information (totalPages, currentPage, etc.)
function getPaginationInfo(pageNumber, pageSize, totalItems) {
  const totalPages = Math.ceil(totalItems / pageSize);
  return {
    totalPages: totalPages,
    currentPage: pageNumber,
    totalItems: totalItems,
  };
}

// Event handler for pagination controls
function handlePagination(pageNumber, pageSize) {
  const pageData = getPageItems(pageNumber, pageSize);
  setDisplayItems(pageData);
  const info = getPaginationInfo(pageNumber, pageSize, storedData.length);
  setControls(info);
}
```

## Event Loop and Queues

- The event loop is a mechanism in JavaScript that allows it to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.
- It manages the execution of various types of tasks in an efficient manner without blocking the main execution thread.

### Task Queues

- JavaScript maintains several task queues where different types of tasks are placed for execution.

### 1. Microtask Queue (Job Queue)

- **Purpose**: Tasks that should execute as soon as possible, such as Promises (resolved or rejected), `queueMicrotask`, and `process.nextTick` callbacks.
- **Priority**: Higher priority than macro tasks.
- **Execution**: Microtasks are processed entirely before the event loop moves on to the next macro task.

### 2. Macro Task Queue (Callback Queue)

- **Purpose**: Tasks scheduled by web APIs like `setTimeout`, `setInterval`, DOM events, and I/O operations (e.g., `fetch`, `XMLHttpRequest`).
- **Execution**: Processes one macro task at a time, in FIFO (First-In-First-Out) order, after the microtask queue is empty.

### Other Task Queues

In addition to micro and macro task queues, JavaScript environments typically manage several other queues to handle different types of operations:

### 1. Timer Queues

- **Purpose**: Holds callbacks scheduled by `setTimeout` and `setInterval`.
- **Execution**: Executes callbacks after the specified delay, pushing them to the macro task queue when ready.

### 2. I/O Queues

- **Purpose**: Handles I/O operations like file system operations, network requests (`fetch`, `XMLHttpRequest`), and other asynchronous tasks.
- **Execution**: When an operation completes, its callback is placed in the macro task queue for execution.

### 3. Check Queues

- **Purpose**: Used by some Node.js APIs (e.g., `setImmediate`) to execute callbacks after the current operation phase completes.
- **Execution**: Executes callbacks after the current event loop cycle's main phases (timers, I/O, etc.).

### 4. Close Queues

- **Purpose**: Executes callbacks for resources that need to be closed or cleaned up (e.g., closing database connections, file handles).
- **Execution**: Ensures resources are properly released when no longer needed.

### Event Loop Execution Flow

1. **Execute Synchronous Tasks**: Executes all synchronous tasks in the call stack.
2. **Process Microtask Queue**: Executes all microtasks (job queue) currently in the queue, iterating until the microtask queue is empty.
3. **Process Macro Task Queue**: Picks the oldest task from the macro task queue and executes it. This includes processing timers, I/O callbacks, and other scheduled tasks.
4. **Repeat**: Steps 2 and 3 continue iteratively, ensuring tasks are processed in a timely manner without blocking the main thread.

### Visualized Event Loop

- When we invoke a function, it gets added to something called the call stack.
- The call stack is part of the JS engine, this isn’t browser specific.
- It’s a stack, meaning that it’s first in, last out (think of a pile of pancakes).
- When a function returns a value, it gets popped off the stack.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--Kn5tSJEm--/c_limit,f_auto,fl_progressive,q_66,w_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gid1.6.gif)

- The `respond` function returns a `setTimeout` function.
- The `setTimeout` is provided to us by the Web API:
  - It lets us delay tasks without blocking the main thread.
  - The callback function that we passed to the `setTimeout` function, the arrow function  gets added to the Web API.
  - In the meantime, the `setTimeout` function and the respond function get popped off the stack, they both returned their values.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--fqt0UJmH--/c_limit,f_auto,fl_progressive,q_66,w_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif2.1.gif)

- In the Web API, a timer runs for as long as the second argument we passed to it, 1000ms.
- The callback doesn’t immediately get added to the call stack, instead it’s passed to something called the queue.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--qxI9YF9R--/c_limit,f_auto,fl_progressive,q_66,w_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif3.1.gif)

- This can be a confusing part: it doesn't mean that the callback function gets added to the callstack(thus returns a value) after 1000ms! It simply gets added to the *queue* after 1000ms.
- But it’s a queue, the function has got to wait for its turn!
- Now this is the part we’ve all been waiting for… Time for the event loop to do its only task: **connecting the queue with the call stack**!
- If the call stack is **empty**, so if all previously invoked functions have returned their values and have been popped off the stack, the *first item* in the queue gets added to the call stack.
- In this case, no other functions were invoked, meaning that the call stack was empty by the time the callback function was the first item in the queue.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--OIG-_8dF--/c_limit,f_auto,fl_progressive,q_66,w_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif4.gif)

The callback is added to the call stack, gets invoked and returns a value and then gets popped off the stack.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--uJB5zTD7--/c_limit,f_auto,fl_progressive,q_66,w_800/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif5.gif)

## Object Freeze vs Seal

- **Mutability**:
  - `Object.freeze` makes an object completely immutable (properties cannot be added, modified, or removed).
  - `Object.seal` allows modification of existing property values but prevents adding and deleting properties.
- **Nested Objects**:
  - `Object.freeze` recursively applies immutability to nested objects.
  - `Object.seal` does not affect the mutability of nested objects; they remain mutable.

```tsx
const obj = {
  prop1: 42,
  prop2: "hello",
};

Object.seal(obj);

obj.prop1 = 100; // Allowed
obj.prop3 = "new"; // Error in strict mode, silently fails in non-strict mode
delete obj.prop2; // Error in strict mode, silently fails in non-strict mode

console.log(obj); // { prop1: 100, prop2: 'hello' }
```

## Proxy

- The `Proxy` object in JavaScript allows you to create a proxy (an intermediary) for another object, enabling custom behavior for fundamental operations like property lookup, assignment, enumeration, function invocation, etc.
- This is powerful for meta-programming and interception of operations on objects.

```tsx
// Example target object
let target = {
  message: "Hello, world!",
  value: 42,
};

// Creating a Proxy for the target object
let handler = {
  // Intercepting property access
  get: function (target, prop, receiver) {
    if (prop === "value") {
      return target[prop] * 2; // Modify behavior for specific property
    }
    return target[prop]; // Default behavior for other properties
  },

  // Intercepting property assignment
  set: function (target, prop, value, receiver) {
    if (prop === "message") {
      throw new Error("Cannot change the 'message' property."); // Restricting property modification
    }
    target[prop] = value; // Default behavior for other properties
    return true; // Indicate success
  },
};

let proxy = new Proxy(target, handler);

console.log(proxy.message); // "Hello, world!"
console.log(proxy.value); // 84 (due to custom get handler)

proxy.value = 50; // Sets the 'value' property on the target object

console.log(proxy.value); // 100 (due to custom get handler)
console.log(target.value); // 50 (original target object modified)

proxy.message = "Changed message"; // Throws an error (custom set handler)
```

- We create a `Proxy` for the `target` object with custom handlers (`get` and `set`).
- The `get` handler modifies the behavior for the `value` property.
- The `set` handler restricts modifications to the `message` property.
- Any operations on the `proxy` object are intercepted and handled according to the defined handlers.

## AbortController

- The `AbortController` interface allows you to abort (cancel) asynchronous operations such as fetching resources or any other operation that supports cancellation via the `AbortSignal` object.

```jsx
// Example using AbortController with fetch API
const abortController = new AbortController();
const signal = abortController.signal;

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch operation aborted:", error.name);
  }
};

// Start fetching data
fetchData();

// Abort the fetch operation after 3 seconds
setTimeout(() => {
  abortController.abort();
  console.log("Fetch operation aborted");
}, 3000);
```

- We create an `AbortController` instance and obtain its `signal`.
- The `signal` is passed as an option to the `fetch` request, enabling it to be aborted if needed.
- We initiate a fetch operation asynchronously and set a timeout to abort it after 3 seconds.
- When the timeout triggers, the `abort()` method is called on the `AbortController`, canceling the fetch operation.

## Currying

- **Currying** is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
- This allows for more modular and reusable code.

  ```tsx
  // Regular function
  function add(a, b) {
    return a + b;
  }

  // Curried version
  function curriedAdd(a) {
    return function (b) {
      return a + b;
    };
  }

  // Usage
  const add5 = curriedAdd(5); // Partially applying with 5
  console.log(add5(3)); // 8
  console.log(add5(10)); // 15

  console.log(curriedAdd(2)(3)); // 5 (Direct usage)
  ```

### Use Cases for Currying:

1. **Function Reusability**: Currying allows creating specialized versions of a function by fixing some arguments.
2. **Function Composition**: Curried functions are easier to compose, leading to more readable and maintainable code.
3. **Partial Application**: Enables partial application of functions, where you can create new functions with preset arguments.
4. **Higher-Order Functions**: Useful in higher-order functions where functions are passed as arguments or returned.

## Partial Application

- **Partial Application** is a technique where a function is called with a few arguments, returning a new function that takes the remaining arguments.
- It is similar to currying but more flexible in the number of arguments fixed.

  ```tsx
  function multiply(a, b, c) {
    return a * b * c;
  }

  function partialMultiply(a) {
    return function (b, c) {
      return multiply(a, b, c);
    };
  }

  // Usage
  const multiplyBy2 = partialMultiply(2);
  console.log(multiplyBy2(3, 4)); // 24
  console.log(multiplyBy2(5, 6)); // 60

  const multiplyBy2And3 = partialMultiply(2)(3);
  console.log(multiplyBy2And3(4)); // 24
  ```

### Use Cases for Partial Application:

1. **Preset Arguments**: Simplifies functions by presetting some arguments, reducing repetition.
2. **Reusable Code**: Creates specialized functions from more generic ones, enhancing code reuse.
3. **Configuration Functions**: Useful in creating configuration-based functions where some parameters are fixed.
4. **Event Handlers**: Can be used to create event handlers with specific context or data.

```tsx
function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

// Usage
const multiplyBy2 = curriedMultiply(2);
const multiplyBy2And3 = multiplyBy2(3);
console.log(multiplyBy2And3(4)); // 24

// Partial Application with Currying
const partialMultiplyBy2 = curriedMultiply(2);
const multiplyBy6 = partialMultiplyBy2(3);
console.log(multiplyBy6(4)); // 24
```

## Generators

## Iterators

## Service vs Web Workers

- **Service Workers** and **Web Workers** are both part of the Web Workers API, which allows for background processing in web applications.
- However, they serve different purposes and have different capabilities.

### Web Workers

- **Web Workers** allow you to run scripts in background threads, separate from the main execution thread of a web application.
- This helps in performing heavy computations or operations without blocking the user interface.

### Key Characteristics of Web Workers:

1. **Background Processing**: Run scripts in the background.
2. **Concurrency**: Offload intensive tasks to avoid UI blocking.
3. **Communication**: Communicate with the main thread using the `postMessage` and `onmessage` methods.
4. **No DOM Access**: Cannot directly access the DOM.
5. **Dedicated and Shared Workers**: There are two types of Web Workers:
   - **Dedicated Workers**: Each worker is linked to a single script.
   - **Shared Workers**: Can be shared across multiple scripts.

```tsx
// Main.js
// Creating a new Worker
const worker = new Worker("worker.js");

// Sending data to the worker
worker.postMessage({ type: "start", data: 10 });

// Receiving messages from the worker
worker.onmessage = function (event) {
  console.log("Result from worker:", event.data);
};

// Worker.js
// Receiving messages from the main thread
onmessage = function (event) {
  const data = event.data;
  if (data.type === "start") {
    const result = data.data * 2; // Perform some computation
    // Sending result back to the main thread
    postMessage(result);
  }
};
```

### Service Workers

- **Service Workers** act as a proxy between the web application and the network (or cache), enabling features like offline support, background sync, and push notifications.
- They can intercept network requests and cache resources for offline use.

### Key Characteristics of Service Workers:

1. **Background Proxy**: Act as a proxy between the web app and the network.
2. **Offline Support**: Enable offline capabilities by caching resources.
3. **Lifecycle**: Have a lifecycle that includes installation, activation, and fetch events.
4. **No DOM Access**: Cannot directly access the DOM.
5. **Persistent**: Can run even when the web application is not open.

### Example of a Service Worker:

**service-worker.js:**

```jsx
javascriptCopy code
const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

// Installing the service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activating the service worker
self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetching resources
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response; // Return cached response
        }
        return fetch(event.request); // Fetch from network
      })
  );
});

```

**Registering the Service Worker (main.js):**

```jsx
javascriptCopy code
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(error) {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

```

### Summary

- **Web Workers**:
  - Purpose: Run scripts in background threads for heavy computations without blocking the UI.
  - Key Features: Background processing, communication via `postMessage`, no direct DOM access.
  - Use Cases: Perform intensive tasks, parallel processing.
- **Service Workers**:
  - Purpose: Act as a proxy between the web app and network, enabling offline support and other background tasks.
  - Key Features: Offline caching, background sync, push notifications, lifecycle management, no direct DOM access.
  - Use Cases: Offline capabilities, caching strategies, background sync, push notifications.

## Event Propagation

- Event propagation in JavaScript refers to the order in which event handlers are executed when an event occurs on an element within the DOM.
- There are three phases in event propagation:
  1. **Capturing Phase (Event Capturing)**: The event starts from the root element and propagates down to the target element.
  2. **Target Phase**: The event reaches the target element where it originated.
  3. **Bubbling Phase (Event Bubbling)**: The event propagates back up from the target element to the root element.

### Capturing Phase

- During the capturing phase, the event moves from the root element down through the DOM tree until it reaches the target element.
- Event handlers registered for this phase are executed in the order from the outermost element to the target element.

### Bubbling Phase

- During the bubbling phase, the event moves from the target element back up through the DOM tree to the root element.
- Event handlers registered for this phase are executed in the order from the target element back to the outermost element.

### Adding Event Listeners for Different Phases

- To add event listeners for either the capturing or bubbling phase, you can use the `addEventListener` method.
- By default, event listeners are added for the bubbling phase unless specified otherwise.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Propagation Example</title>
  </head>
  <body>
    <div id="outer" style="padding: 20px; background-color: lightblue;">
      Outer
      <div id="inner" style="padding: 20px; background-color: lightgreen;">
        Inner
        <button id="button">Click Me</button>
      </div>
    </div>

    <script>
      // Bubbling phase (default, third argument is false or omitted)
      document.getElementById("outer").addEventListener("click", function () {
        console.log("Outer DIV (bubbling)");
      });

      document.getElementById("inner").addEventListener("click", function () {
        console.log("Inner DIV (bubbling)");
      });

      document.getElementById("button").addEventListener("click", function () {
        console.log("Button (bubbling)");
      });

      // Capturing phase (third argument set to true)
      document.getElementById("outer").addEventListener(
        "click",
        function () {
          console.log("Outer DIV (capturing)");
        },
        true
      );

      document.getElementById("inner").addEventListener(
        "click",
        function () {
          console.log("Inner DIV (capturing)");
        },
        true
      );

      document.getElementById("button").addEventListener(
        "click",
        function () {
          console.log("Button (capturing)");
        },
        true
      );
    </script>
  </body>
</html>
```

### Event Propagation in Action

In the example above, clicking the button will produce the following console output:

```tsx
1. Outer DIV (capturing)
2. Inner DIV (capturing)
3. BUTTON (capturing)
4. BUTTON (bubbling)
5. Inner DIV (bubbling)
6. Outer DIV (bubbling)
```

### Stopping Event Propagation

You can stop event propagation at any point using two methods:

1. **stopPropagation()**: Prevents further propagation of the event in both the capturing and bubbling phases.
2. **stopImmediatePropagation()**: Stops the event from propagating and prevents any other listeners of the same event from being called.

### Example:

```jsx
document.getElementById("inner").addEventListener("click", function (event) {
  console.log("Inner DIV");
  event.stopPropagation(); // Stops further propagation
});

document.getElementById("outer").addEventListener("click", function () {
  console.log("Outer DIV");
});
```

In this example, clicking the inner div will only log "Inner DIV" to the console. The event does not propagate to the outer div due to the `stopPropagation()` call.

### Summary

- **Event Propagation**: The process by which an event moves through the DOM in three phases: capturing, target, and bubbling.
- **Capturing Phase**: Event moves from the root element down to the target element.
- **Bubbling Phase**: Event moves from the target element back up to the root element.
- **Event Listeners**: Can be added for either phase using `addEventListener`.
- **Stopping Propagation**: Use `stopPropagation()` to halt event propagation and `stopImmediatePropagation()` to also prevent other listeners from executing.
