# Typescript

Tags: Programming Language
Created time: June 11, 2024 4:14 AM
Last edited time: July 9, 2024 8:04 AM

# Installing Typescript

```tsx
pnpm i -D typescript ts-node @types/node
```

# Typescript Config (TSConfig)

```tsx
{
    "compilerOptions": {
        "target": "ES2022",
        "esModuleInterop": true,
        "skipLibCheck": true,
        "allowJs": true,
        "resolveJsonModule": true,
        "moduleDetection": "force",
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noUncheckedIndexedAccess": true,
        "moduleResolution": "NodeNext",
        "module": "NodeNext",
        "outDir": "dist",
        "sourceMap": true,
        "lib": ["ES2022", "DOM"]
    },
    "include": ["src/**/*"]
}
```

# Primitive Types

```tsx
const fullName: string = "John Cena";
const age: number = 56;
const isAdult: boolean = true;
```

# Arrays

```tsx
let allies: string[] = ["RVD", "Daniel Bryan", "Cody Rhodes"];
let worldTitleYears: number[] = [4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 17];
```

# Function

```tsx
function addTwo(a: number, b: number): number {
  return a + b;
}
```

# Union Types

```tsx
const emailAddress: string | null = "john@cenation.com";

// Returns union of number or undefined
function search(arr: number[], value: number): number | undefined {
  arr.find((val: number, i) => {
    if (val === value) return i;
  });

  return undefined;
}
```

# Type Guards

```tsx
let name: string | undefined;

// Check if the type of name is a string
if (typeof name === "string") console.log(name.length);
```

# Custom Types

```tsx
type CounterActions = "increment" | "decrement" | "reset";
let counter: CounterActions = "reset"
```

# Enum Types

```tsx
enum JobRoles {
  "Administrator",
  "Developer",
  "Architect",
  "Engineer",
}

enum StatusCode {
  "Continue" = 100,
  "Okay" = 200,
  "Redirect" = 300,
  "ClientError" = 400,
  "ServerError" = 500,
}

const userRole: JobRoles = JobRoles.Developer;
const status: StatusCode = StatusCode.Redirect;
```

# Custom Object Types (Schema)

```tsx
type Post = {
  id: number;
  title: string;
  description: string;
  published: Date;
  author: {
    name: {
      first: string;
      last: string;
    }
    email: string;
  }
  body: {
    main: string,
    summary: string
  }
};
```

# Interfaces

```tsx
interface Post {
  id: number;
  title: string;
  published: Date;
  description: string;
  author: {
    name: {
      firstName: string;
      lastName: string;
      email: string;
    }
  }
  body: {
    main: String,
    summary: String
  }
};
```

# Extending Interfaces

```tsx
interface InstagramPost extends Post {
  comments: {
    user: {
      username: string;
      likes: number;
      comment: string;
      reactions: {
        type: string;
        count: number;
      }
    }
  }
}
```

# Implementing Interfaces

```tsx
class Instagram implements InstagramPost {
  comments!: {
    user: {
      username: string;
      likes: number;
      comment: string;
      reactions: { type: string; count: number };
    };
  };
  id!: number;
  title!: string;
  published!: Date;
  description!: string;
  author!: { name: { firstName: string; lastName: string; email: string } };
  body!: { main: String; summary: String };
}
```

# Generics

```tsx
interface Node<T> {
  data: T;
  next: Node<T>;
}
```

# Type Casting

```tsx
interface Student {
  organization: "School Name";
}

interface Employee {
  organization: string;
}

const foo: Student = {
  organization: "School Name",
};

const bar: Employee = foo;
```

# Declaration Merging

```tsx
// Declaring Fruit as an interface
interface Fruit {
  name: string;
  mass: number;
  color: string;
}

// Using Fruit as a Type
const banana: Fruit = {
  name: "banana",
  mass: 100,
  color: "yellow",
};

// Declaring a function Fruit
function Fruit(kind: string) {
  switch (kind) {
    case "banana": {
      return banana;
    }
    default: {
      throw new Error("This kind of fruit is not supported.");
    }
  }
}

// Declaring a Namespace Fruit.
namespace Fruit {
  export function createBanana(): Fruit {
    return banana;
  }
}

// Fruit is a Type
const something: Fruit = {
  name: "",
  mass: 0,
  color: "",
};

// Fruit is a Function
const bananaFruit = Fruit("banana");

// Fruit is a namespace
const kevinFav = Fruit.createBanana();

// Declaration for Fruit as a function/class, interface, and namespace merged.
export { Fruit };
```

# Top Types

```tsx
// Typescript accepts any possible value.
let flex: any = 5;
flex.this.does.not.exist.but.ts.is.happy;

// Typescript won't let you access the value without a type guard
let accessNotAllowed: unknown;
accessNotAllowed.property; // accessNotAllowed is of type unknown

// Typescript accepts any value other than primitives
let nonPrimitive: object = {};
nonPrimitive = 30; // Not allowed.
nonPrimitive = null // Allowed.
nonPrimitive = {}; // Allowed.

// Typescript accepts any value other than null or undefined
let somethingDefined = {};
```

# Bottom Types

```tsx
// Define shapes of various vehicles.
class Car {
  drive() {
    console.log("vroom")
  }
}
class Truck {
  tow() {
    console.log("dragging something")
  }
}
class Boat {
  isFloating() {
    return true
  }
}

// Unreachable Branch Getting Triggered at Runtime
class UnreachableError extends Error {
  constructor(_nvr: never, message: string) {
    super(message)
  }
}

// Union Type for Vehicles
type Vehicle = Truck | Car | Boat
 
// Assume that this randomly returns one of the vehicles
let myVehicle: Vehicle = obtainRandomVehicle()
 
// We handle all possible vehicle types
if (myVehicle instanceof Truck) {
  myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive() // Car
} else if (myVehicle instanceof Boat) {
  myVehicle.drive() // Boat
} else {
  // We accidently have a type of vehicle that shouldn't exist.
  const neverValue: never = myVehicle;
  throw new UnreachableError(myVehicle, "Unexpected Vehicle Type");
}
```

# Not-Null Assertion

```tsx
type GroceryCart = {
  fruits?: { name: string; qty: number }[]
  vegetables?: { name: string; qty: number }[]
}
 
const cart: GroceryCart = {}
 
cart.fruits.push({ name: "Apple", qty: 1 }); // cart.fruits possibly undefined
cart.fruits!.push({ name: "Apple", qty: 1 }); // Allowed.
```

# Definite Assignment

```tsx
class Instagram implements InstagramPost {
	// These fields will be initialized with non-null values sometimes later.
  id!: number;
  title!: string;
  published!: Date;
  description!: string;
  author!: { name: { firstName: string; lastName: string; email: string } };
  body!: { main: String; summary: String };
}
```

# Optional Chaining

```tsx
type Payment = {
  id: string;
  amount: number;
  createdAt: Date;
};

type Invoice = {
  id: string;
  due: number;
  payments: Payment[];
  lastPayment?: Payment;
  createdAt: Date;
};

type Customer = {
  id: string;
  lastInvoice?: Invoice;
  invoices: Invoice[];
};

type ResponseData = {
  customers?: Customer[];
  customer?: Customer;
};

function getLastPayment(data: ResponseData): number | undefined {
	// If any step of the chain is undefined, whole expression is undefined.
  return data.customer?.lastInvoice?.lastPayment?.amount;
}
```

# Nullish Coalescing

```tsx
// Define volume steps for music player
type PlayerConfig = {
  volume?: 0 | 25 | 50 | 75 | 100
}

// If vol is undefined, make it 50.
function initializePlayer(config: PlayerConfig): void {
  const vol = typeof config.volume === 'undefined' ? 50 : config.volume;
  setVolume(vol);
}

// Conditionally apply values
const vol = typeof config.volume === 'undefined' ? 50 : config.volume;

// Performing Logical OR makes volume level 0 disappear since both are falsy
const vol = config.volume || 50;

// Apply Default Value if the value is either null or undefined.
const vol = config.volume ?? 50;
```

# ESM Imports/Exports

```tsx
// Modern JS Code
import { Blueberry, Raspberry } from './berries' // Named imports
import Kiwi from './kiwi' // Default import
export function makeFruitSalad() {} // Named export
export default class FruitBasket {} // Default export
export { lemon, lime } from './citrus' // Named Re-export
export * as berries from './berries' // Namespace Re-export

// Typescript additions
import * as allBerries from "./berries" // Namespace import
allBerries.Strawberry // Using the namespace
export * from "./berries" // Namespace re-export
```

# Type only Import/Exports

```tsx
import type { Strawberry } from './berries/strawberry'
export type Blueberry;
```

# CommonJS Interoperability

```tsx
// Typescript may not be able to check for types using this syntax
const Something = require("../cjs/module.cjs");

// Typescript may not be able to check for types using this syntax
const { Something } = require("../cjs/module.cjs");

// Import as a namespace
import Something from "../cjs/module.cjs"

// Import from within a namespace
import { Something } from "../cjs/module.cjs";

// Typescript's way of importing a module using this should not be problematic
import NameSpace = require("../cjs/module.cjs");
```

# Generic Scopes and Constraints

```tsx

```

# Conditional Types

# Inference with Conditional Types

# Mapped Types

# Type Registry

# Variance Over Type Params