# React.js

Tags: Interviewing
Created time: July 5, 2024 6:45 PM
Last edited time: April 1, 2025 1:31 AM

# Component Life Cycle

- Every component in React goes through a lifecycle of events.
    - **Mounting —** Birth of your component. This is the stage where the *Component is inserted into the DOM*.
    - **Update** — Growth of your component. This is the stage in which the *Component’s state and props can change*, leading to the process of re-rendering the Component with the updated state/props
    - **Unmount** — Death of your component. This is the final stage of the Component’s life, in which it is *removed from the DOM*.
- Each component has several “lifecycle methods” that you can override to run code at particular times in the process.
- You can use this lifecycle diagram as a cheat sheet.
- In the diagram below, commonly used Class Component lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.

![Untitled](React%20js%204b2c583c047349a39bd1a2bf3e243132/Untitled.png)

This is the diagram for functional component lifecycle

![Untitled](React%20js%204b2c583c047349a39bd1a2bf3e243132/Untitled%201.png)

# Higher Order Components

- Higher-order components (HOCs) are a pattern in React that allows you to **reuse component logic** by wrapping components with other components.
    - **Code Reusability:** Extract common logic and reuse it across multiple components.
    - **Props Manipulation:** Modify or pass additional props to the wrapped component.
    - **Rendering Control:** Conditionally render the wrapped component based on specific conditions. (Render hijacking)
    - **Performance Optimization:** Optimize rendering by implementing memorization or caching techniques.
    - **Context Manipulation:** Provide or consume context to share data or behavior between components. **State** abstraction and manipulation.
    - Wrap and enhance functionality from third-party libraries.
    
    ```tsx
    functionwithLogger(WrappedComponent) {
      return function WithLogger(props) {
        console.log('Component rendered:', WrappedComponent.name);
        return <WrappedComponent {...props} />;
      };
    }
    
    function MyComponent(props) {
      // Component implementation
    }
    
    const EnhancedComponent = withLogger(MyComponent); //HOC
    ```
    

# Virtual DOM

- Virtual DOM provides an abstraction of the actual HTML DOM.
- It is a lightweight copy or representation of the real DOM, maintained by React, which allows for efficient updates and rendering of components.
- This is how it works:
    - React update the state changes in Virtual DOM first and then it syncs with Real DOM.
    - Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.
        - React creates a lightweight **copy** of the actual HTML DOM called the Virtual DOM.
        - When a component is **rendered**, React creates a corresponding Virtual DOM representation in memory.
        - When state or props **change**, React creates a new Virtual DOM representation.
        - React compares the new Virtual DOM with the previous one to **determine the differences** or updates that need to be made.
        - By identifying the minimal set of changes, React optimizes performance by **minimizing** unnecessary updates to the actual DOM.
        - React updates the real DOM with the minimal modifications required to **reflect** the new Virtual DOM.
        
        ![Untitled](React%20js%204b2c583c047349a39bd1a2bf3e243132/Untitled%202.png)
        
- React’s VDOM improves performance using the following:
    - React **batches multiple updates** together before applying them to the real DOM, reducing unnecessary re-renders.
    - It only updates the specific components or elements that have changed, **minimizing DOM manipulations**.
    - React’s efficient  identifies the minimal set of changes needed between the previous and new Virtual DOM representations.
        
        **diffing algorithm**
        
    - React’s **reconciliation process optimizes** updates by reusing existing DOM elements when possible.

# Controlled vs Uncontrolled Inputs

- Controlled (via props), and which information should be uncontrolled (via state).
- **Controlled Components:**
    - State is ***managed by React through props***.
    - Values and changes are handled through props and event handlers.
    - Provides a single source of truth.
    - **Examples**: input fields, checkboxes, select drop-downs.
- **Uncontrolled Components:**
    - State is ***managed internally by the DOM***.
    - Values and changes are accessed directly from the DOM using techniques like *`**ref**`*.
    - Offers more flexibility and direct access to the DOM.
    - **Examples**: file inputs, certain form fields.

# Pure Components

- Pure components in React are components that only re-render when their props or state change.
    - **It minds its own business.** It should not change any objects or variables that existed before rendering.
    - **Same inputs, same output.** Given the same inputs, a component should always return the same JSX.
- Pure function components are regular function components that only re-render when their props change.
- You can use the **`*React.memo` function to memorize a function component and optimize its rendering***.
- **`React.memo`** performs a shallow comparison of the component’s props to determine if a re-render is necessary.

```tsx
import React from 'react';
const MyComponent = React.memo((props) => {
  // Component rendering logic here
}); 
export default MyComponent;
```

- Pure functions **only perform a calculation** and nothing more.
- It makes your code easier to understand, debug, and allows React to automatically optimize your components and hooks correctly.

# Prop Drilling

- Prop drilling is a term used in React to describe the process of passing data from a part of a component tree to another part by going through other components that do not necessarily need the data, but only pass it down the tree.
- To avoid prop drilling, you can use React’s Context API or state management libraries like Redux which allow you to access the state from anywhere in your component tree without having to pass it down through every level.

# Synthetic Events

- SyntheticEvent is a wrapper based on the browser’s native events.
- It provides an unified API, prevents browser inconsistencies, and ensures that the event works across multiple platforms.

## **JavaScript events**

- JavaScript events essentially allow a user to interact with a web application and implement operations, like registering click, focus, mouseover, and keypress actions when they are fired inside the browser.
- Each JavaScript event has an event handler that works with an event listener.
- The event listener listens for the particular event that should occur, while the event handler is a function that contains code blocks that will be executed once the event is either registered or fired.

## **Synthetic Events**

- React Synthetic Events are very similar to Native Events, however, with Synthetic Events, the same API interface is implemented across multiple browsers.
    
    ![Untitled](React%20js%204b2c583c047349a39bd1a2bf3e243132/Untitled%203.png)
    
- Here is a log from Chrome Dev Tools Console where you can see it in action.
    
    ![Untitled](React%20js%204b2c583c047349a39bd1a2bf3e243132/Untitled%204.png)
    
- Both Synthetic Events and Native Events can implement the  `preventDefault`  and  `stopPropagation` methods.
- However, synthetic events and native events are not exactly the same thing.
- For example, `SyntheticEvent` will point to `mouseout` for `onMouseLeave` Event.
- You can always access native events with the `nativeEvent` attribute if you need direct access.
- Other `SyntheticEvent` attributes include `DOMEventTarget`, `currentTarget`, `boolean defaultPrevented`, and `string type`, to name a few.

## **Why it’s useful**

- **Cross-browser:** It wraps the browser’s native event through `nativeEvent` attribute and provides a uniform api and consistent behavior on top level
- **Better performance:** Events are [delegated](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation) to document through [bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling).

## **Key points**

- Listen on `document` if you want to receive events **after all React handlers**.
- Listen anywhere else in order to receive **before React handlers**
- React event handlers will always execute after native capture handlers

# Keys in Mapped Components

- In React, the key attribute is a special property that you need to include when creating lists of elements.
    - **Identification**
        - Keys uniquely identify elements in a list, allowing React to keep track of which items need to be re-rendered when the list changes.
        - This is crucial for performance and avoiding unnecessary re-renders.
    - **Performance Optimization**
        - By using keys, React can minimize the number of DOM operations.
        - When the list changes, React can quickly determine which items were modified and only update those parts of the DOM.
    - **Predictable Component Behavior**
        - Keys help in maintaining the component's state correctly across re-renders.
        - Without keys, React might mix up states between components.
- If the list is reordered or items are added/removed, using the index as a key might cause React to incorrectly update the items, leading to bugs and inconsistencies.

# Refs in React

- In React, refs (short for references) provide a way to directly access and interact with DOM elements or React components created in the render method.
- They can be used to manage focus, trigger animations, or integrate with third-party libraries that require direct DOM manipulation.

### How Refs Work

- Refs can be created using `React.createRef()` and attached to React elements via the `ref` attribute.
- Once a ref is attached, React will update the `current` property of the ref object with the corresponding DOM node or React component instance.

### Creating and Using a Ref

Here’s a step-by-step guide on how to create and use a ref in a functional component:

1. **Create a Ref**: Use the `useRef` hook to create a ref.
2. **Attach the Ref**: Attach the ref to a DOM element using the `ref` attribute.
3. **Access the Ref**: Access the DOM node or component instance via the ref's `current` property.

# Class vs Functional Components

| **Feature** | **Class Components** | **Function Components** |
| --- | --- | --- |
| **Syntax** | Defined using ES6 class syntax, extend from `React.Component` | Defined using JavaScript functions |
| **State Management** | Managed with `this.state`, updated with `this.setState` | Managed with the `useState` hook |
| **Lifecycle Methods** | Use built-in lifecycle methods (e.g., `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) | Use the `useEffect` hook to handle side effects |
| **`this` Keyword** | Require binding of `this` in event handlers | Do not use `this`, eliminating the need for binding |
| **Performance** | Historically more resource-intensive, but improvements have minimized differences | Lightweight, especially with hooks; modern React optimizes both |
| **Readability** | Can be more verbose and complex due to `this` binding | More concise and easier to read, especially for simpler components |
| **Best Use Cases** | Useful for complex components requiring lifecycle methods | Preferred for most components, especially with the power of hooks |

```tsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component did mount');
    // Component will unmount
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

# Code Splitting, Lazy Loading, and Suspense

- Code splitting is a technique that allows you to split your code into smaller bundles that can be loaded on demand.
- This helps improve the performance of your React application by loading only the necessary code for the current user interaction, rather than loading the entire application at once.
- Lazy loading is a design pattern that defers the loading of non-critical resources at the initial page load time.
- Instead, these resources are loaded only when they are needed.
- In React, lazy loading is often used to load components only when they are rendered.

## Lazy Loading and Suspense

```tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
```

## Dynamic Import

```tsx
// Other.ts
export const hello = (name: string) => {
  const timer = setTimeout(() => {
    console.log("Hello, " + name + "!");
    clearTimeout(timer);
  }, 3000);
};

// App.tsx
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    (async () => {
      const hello = await import("./Other");
      hello.hello("Priyanshu");
    })();
  });

  return <div>App</div>;
};

export default App;
```

# Error Boundary

- The `react-error-boundary` library provides a reusable error boundary component for handling errors in React components.
- It helps to catch JavaScript errors anywhere in the component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

```tsx
// First install this package
pnpm i react-error-boundary

// Then create your component where error might occur

// Other.tsx
const Other = () => {
  if (Math.random() > 0.5) throw new Error("Something went wrong...");
  return <div>Other</div>;
};

export default Other;

// Create your fallback component which will be shown when error is thrown

// Fallback.tsx
import { FallbackProps } from "react-error-boundary";

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Error</h1>
      <p>{JSON.stringify(error.message)}</p>
      <button onClick={resetErrorBoundary}>Reset Error</button>
    </div>
  );
};

export default Fallback;

// Surround your problematic component with the error boundary

// App.tsx
import { ErrorBoundary } from "react-error-boundary";

import Other from "./Other";
import Fallback from "./Fallback";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div>
        This is being rendered...
        <Other />
      </div>
    </ErrorBoundary>
  );
};

export default App;
```

# Tree Shaking

- Tree-shaking is a technique used to eliminate dead code (code that is not used or not needed) from a JavaScript bundle.
- This optimization reduces the size of the final bundle, improving load times and overall performance of the application.
- In a React application, tree-shaking is typically enabled through the use of modern JavaScript module bundlers like Webpack, Rollup, or Parcel.

# Side-effects

- In React, "side effects" refer to any operations that affect something outside the scope of a function component.
- These include tasks like data fetching, subscriptions, manual DOM manipulations, timers, logging, etc.
- Side effects can potentially impact the application state or external systems.

### Examples of Side Effects

1. **Data Fetching:** Fetching data from an API and updating the state with the fetched data.
2. **Subscriptions:** Setting up a subscription to an external data source and cleaning it up when the component unmounts.
3. **DOM Manipulation:** Directly interacting with the DOM (though this is less common in React due to its virtual DOM).
4. **Timers:** Setting up intervals or timeouts.
5. **Logging:** Logging information to the console or an external service.

# useReducer

- To use useReducer Hook, we need the following things:
    - Type for State
    - Type for Action
    - Actual initialState Object
    - Reducer Function
- After we’ve declared all this, we can start using it in our react application.

```tsx
// reducer.ts
export interface State {
  count: number;
  error: null | string;
}

export interface Action {
  type: "INCREMENT" | "DECREMENT";
  payload?: number;
}

export const initialState: State = {
  count: 0,
  error: null,
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT": {
      const updatedCount = state.count + (action.payload || 1);
      const hasError = state.count >= 5;

      return {
        ...state,
        count: hasError ? state.count : updatedCount,
        error: hasError ? "Maximum Reached" : null,
      };
    }
    case "DECREMENT": {
      const updatedCount = state.count - (action.payload || 1);
      const hasError = state.count <= 0;

      return {
        ...state,
        count: hasError ? state.count : updatedCount,
        error: hasError ? "Minimum Reached" : null,
      };
    }
  }
}

// App.tsx
import React from "react";
import { initialState, reducer } from "./reducer";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="text-4xl font-black">{state.count}</h1>
      <button
        className="border p-4"
        onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}
      >
        -
      </button>
      <button
        className="border p-4"
        onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}
      >
        +
      </button>
      {state.error}
    </div>
  );
};

export default App;

```

# useContext (Theme Context Demo)

- To create a context first ensure that you have following files:
    - main.tsx
    - Component.tsx
    - ThemeProvider.tsx
    - ThemeContext.ts (NOT tsx)
- Then open ThemeContext.ts file and create the following
    - Type for ThemeContext
    - CreateContext Object
    - useTheme Hook
- Now, open the ThemeProvider.tsx file and create a provider component.
    - Create state to be shared
    - Pass the value to the provider
- Now, Surround your Component with the ThemeProvider
- Lastly, use the useTheme hook in your Component.

```tsx
// ThemeContext.ts
import React, { SetStateAction } from "react";

export interface ThemeContext {
  darkModeEnabled: boolean;
  setDarkModeEnabled: React.Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = React.createContext<ThemeContext | null>(null);

export const useTheme = (): ThemeContext => {
  const context: ThemeContext | null = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

// ThemeProvider.tsx
import React from "react";

import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkModeEnabled, setDarkModeEnabled] = React.useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider

// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeProvider from "./ ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// App.tsx (Component)
import { useTheme } from "./ThemeContext";

const App = () => {
  const theme = useTheme();

  return (
    <div className="">
      <h1 className="">Theme : {theme.darkModeEnabled ? "Dark" : "Light"}</h1>
      <button
        className="border p-5"
        onClick={() => theme.setDarkModeEnabled((prev) => !prev)}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
```

# useCallback, useMemo and React.memo

### 1. `useCallback`

- `useCallback` is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.
- It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
    
    **Syntax:**
    
    ```jsx
    const memoizedCallback = useCallback(() => {
      doSomething(a, b);
    }, [a, b]);
    ```
    
    **Example:**
    
    ```jsx
    import React, { useState, useCallback } from 'react';
    
    const ChildComponent = React.memo(({ onClick }) => {
      return <button onClick={onClick}>Click me</button>;
    });
    
    const ParentComponent = () => {
      const [count, setCount] = useState(0);
    
    	// The callback function doesn't change between renders
      const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
      }, []);
    
      return (
        <div>
          <p>Count: {count}</p>
          <ChildComponent onClick={increment} />
        </div>
      );
    };
    
    export default ParentComponent;
    ```
    

### 2. `useMemo`

- `useMemo` is a hook that returns a memoized value.
- It only recomputes the memoized value when one of the dependencies has changed.
- This can be useful to optimize performance for expensive calculations that shouldn't be re-executed on every render.
    
    **Syntax:**
    
    ```jsx
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```
    
    **Example:**
    
    ```jsx
    import React, { useState, useMemo } from 'react';
    
    const ParentComponent = () => {
      const [count, setCount] = useState(0);
      const [text, setText] = useState('');
    
    	// Only recalculates when `count` changes
      const expensiveCalculation = useMemo(() => {
        return count * 2;
      }, [count]);
    
      return (
        <div>
          <p>Count: {count}</p>
          <p>Expensive Calculation: {expensiveCalculation}</p>
          <button onClick={() => setCount(count + 1)}>Increment Count</button>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type something..."
          />
        </div>
      );
    };
    
    export default ParentComponent;
    ```
    

### 3. `React.memo`

- `React.memo` is a higher-order component that memoizes a component.
- It prevents the component from re-rendering if its props haven't changed, optimizing performance for functional components.
    
    **Syntax:**
    
    ```jsx
    const MemoizedComponent = React.memo(Component);
    ```
    
    **Example:**
    
    ```jsx
    import React, { useState } from 'react';
    
    const ChildComponent = React.memo(({ count }) => {
      console.log('ChildComponent rendered');
      return <p>Count: {count}</p>;
    });
    
    const ParentComponent = () => {
      const [count, setCount] = useState(0);
      const [text, setText] = useState('');
    
      return (
        <div>
          <ChildComponent count={count} />
          <button onClick={() => setCount(count + 1)}>Increment Count</button>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type something..."
          />
        </div>
      );
    };
    
    export default ParentComponent;
    ```
    
- In this example, `ChildComponent` will only re-render when its `count` prop changes, not when `text` in the parent changes, because `React.memo` prevents unnecessary re-renders based on props equality.

### Summary

- **`useCallback`**: Memoizes a function to prevent unnecessary re-creations, optimizing performance when passing callbacks to child components.
- **`useMemo`**: Memoizes a value to prevent expensive calculations from being re-executed on every render.
- **`React.memo`**: Memoizes a functional component to prevent re-renders if its props haven't changed, optimizing rendering performance.

# Redux Toolkit

- Redux is a state management library that allows you to have global state in your applications.
- This means, your state can be accessed by any component no matter where they are in the component hierarchy tree.

## Store

- It represents the global state.
- Redux toolkit allows you to set this up and connect it to your application in whatever way you like.
- Store is made up of multiple slices. Each slice will be responsible for a certain domain in the application.
    - For instance, if we created a counterSlice, that would hold data related to the counter.

```tsx
interface CounterState {
	value: number;
}

interface UserState {
	username: string;
	isSignedIn: boolean;
}
```

## Action

- Tells redux what operations are allowed to be performed on the state.

```tsx
const incrementCounter = { type: "INCREMENT", payload: 1 }
const decrementCounter = { type: "DECREMENT", payload: 1 }
```

## Reducers

- Functions which, depending on the action, will make updates to our state in the store.
- We’re not allowed to directly mutate the state.

## Adding redux to react app

```tsx
pnpm i react-redux @reduxjs/tooklit
```

- We first need to create a new file under `state/store.ts` in the src directory. This contains
    - A store object created using configureStore
    - A type for Root State
    - A type for Dispatch function

```tsx
import { configureStore } from "@reduxjs/toolkit";

// Create a store
export const store = configureStore({
  reducer: {},
});

// Helper types for LSP Suggestions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

- We have created our store, but our app is not connected to redux just yet.
- Now, we’ll goto `main.tsx` or whatever file which renders the root, and we’ll surround the entire app with something called provider from `"react-redux"` package.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";
import "./index.css";
import { store } from "./state/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

- This code will now connect React with Redux
- Now that we have our provider setup, we could go ahead and create our slices of state.
- Let’s create a new file under `state/counter/counterSlice.ts` for putting things needed for the counter state.
- All the actions, reducers and state pertaining to the counter, will go here.

```tsx
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// 1. Define the state types
export interface CounterState {
  value: number;
}

// 2. Create an initialState object
const initialState: CounterState = {
  value: 0,
};

// 3. Create a slice of state
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 4. Export the actions
export const { ...actions } = counterSlice.actions;

// 5. Export the slice's reducer.
export default counterSlice.reducer;

```

- `createSlice` gives us some benefits over standard redux library such as a reducer function being automatically available for exporting.
- Now, we’ll go back to `store.ts` and instead of having an empty object for reducers, we can now import the counterSlice reducer that we just exported.

```tsx
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

- Now we have everything in place,  we can use useSelector and useDispatch hook in our counter component and call our actions.

```tsx
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { actions } from "./state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1 className="font-bold text-4xl">{count}</h1>
      <button onClick={() => dispatch(actions.increment(1))}> + </button>
      <button onClick={() => dispatch(actions.decrement(1))}> - </button>
    </div>
  );
};

export default Counter;
```

- If we want to add async actions, we can do so using createAsyncThunk.
    - createAsyncThunk as the name suggests, creates an async thunk which is just a fancy way of saying that its a middleware for handling async operations such as API calls, DB Queries etc…
    - createAsyncThunk requires 2 things:
        - Name of the action in “slice/action” format
        - Async Function which gets the input for payload (optionally) and returns some data or a promise.
            - This returned data is going to become the payload for our actions
    - Now that we have our async thunk, we need to connect it to our slice.
    - To do that, we need to define a function extraReducers which takes a builder as argument.
    - Builder allows us to add different thunks for different cases or states such as fulfilled, pending or rejected.
    - We can add and chain cases using `builder.addCase()`  which takes 2 arguments:
        - `asyncThunk.fulfilled|pending|rejected`
        - `callback` function with state and action as argument.
            - This callback is just an action which is performed when some specific thunk’s case is triggered.

```tsx
import {
  AsyncThunk,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

// 1. Define the state types
export interface CounterState {
  value: number;
}

// 2. Create an initialState object
const initialState: CounterState = {
  value: 0,
};

// 3. Create a slice of state
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          console.log("incrementAsync.Fulfilled");
          state.value += action.payload;
        }
      )
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.Pending");
      })
      .addCase(incrementAsync.rejected, () => {
        console.log("incrementAsync.Rejected");
      });
  },
});

type counter = AsyncThunk<number, number, object>

// Define an async thunk
const incrementAsync:  =
  createAsyncThunk("counter/incrementAsync", async (amount: number) => {
    // throw new Error("Something went wrong...")
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  });

// 4. Export the actions
export const { ...actions } = counterSlice.actions;
export { incrementAsync };

// 5. Export the slice's reducer.
export default counterSlice.reducer;
```

# Performance Optimization

- To optimize a ReactJS application, we can follow several best practices and techniques.
    1. **Code Splitting:** Split your code into smaller chunks using tools like Webpack or React.lazy() to **load only what is necessary** for each page or component.
    2. **Bundle Size Reduction:** Minify and compress JavaScript and CSS to reduce the overall bundle size. Webpack or Babel can help achieve this.
    3. **Lazy Loading:** Load components and resources only when they are needed, **improving initial load time and reducing data transferred.**
    4. **Image Optimization:** Compress and optimize images to reduce their file size. Tools like ImageOptim or Webpack plugins can assist with this.
    5. **Memoization:** Use React’s ***`memo` or `PureComponent*`** to memoize components and prevent unnecessary re-renders when props or state haven’t changed.
    6. **Virtualization:** For long lists, use libraries like `react-virtualized` or `react-window` to render only the visible items, improving performance.
    7. **Avoid Unnecessary Renders:** Implement `React.memo` to prevent unnecessary re-renders of components when props haven’t changed.
    8. **Code Profiling:** Use tools like React DevTools or Chrome DevTools to identify performance bottlenecks, analyze component render times, and identify slow components.
    9. **Server-Side Rendering (SSR):** Implement SSR to pre-render React components on the server, reducing initial load time and improving SEO.
    10. **Caching:** Utilize caching mechanisms like HTTP caching or memoization to avoid redundant network requests or calculations.
    11. **Optimize Network Requests:** Minimize HTTP requests by combining and compressing resources, using techniques like HTTP/2 or lazy loading.
    12. **Code Optimization:** Optimize your code by removing unused dependencies, reducing unnecessary calculations, and avoiding unnecessary DOM manipulations.
    13. **Performance Monitoring:** Continuously monitor your app’s performance using tools like Lighthouse, WebPageTest, or New Relic to identify areas for improvement.

# Application Security

1. **HTTPS**: Ensure your application is served over HTTPS to encrypt data transmitted between the client and server, preventing attackers from intercepting sensitive information.
2. **Avoid Storing Sensitive Data:** Avoid storing sensitive information such as passwords, API keys, and tokens directly in your code or client-side storage. Instead, use environment variables or server-side storage solutions.
3. **Implement Authentication:** Implement secure authentication mechanisms such as JWT (JSON Web Tokens), OAuth, or session-based authentication to verify the identity of users accessing your application.
4. **Authorization:** Enforce proper authorization checks on both the client and server to ensure that users only have access to resources they are authorized to access.
5. **Sanitize Inputs:** Protect against XSS attacks by sanitizing and validating user inputs to prevent malicious scripts from being executed in the browser.
6. **Avoid Inline Scripts:** Avoid using inline scripts or dynamically generating JavaScript code from user input, as it can introduce security vulnerabilities.
7. **Content Security Policy (CSP):** Implement a Content Security Policy to mitigate XSS attacks by specifying which resources can be loaded and executed by your application.
8. **HTTP Headers:** Set appropriate HTTP security headers such as X-Content-Type-Options, X-Frame-Options, and X-XSS-Protection to enhance security and prevent common attacks.
9. **Use Libraries Carefully:** Only use well-maintained and secure third-party libraries and dependencies in your application. Keep them updated to mitigate known vulnerabilities.
10. **Protect Against CSRF Attacks:** Implement CSRF tokens and enforce CSRF protection on endpoints that modify data or perform sensitive actions.
11. **Secure APIs:** Ensure that your backend APIs are secure by implementing proper authentication, authorization, input validation, and rate limiting.
12. **Monitor and Logging:** Implement logging and monitoring mechanisms to detect and respond to security incidents, such as unusual activity or unauthorized access attempts.
13. **Keep Dependencies Updated:** Regularly update dependencies to patch known security vulnerabilities and ensure your application is using the latest secure versions of libraries and frameworks.