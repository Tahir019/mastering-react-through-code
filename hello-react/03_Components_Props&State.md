## Component 
### What are Components ?
- Components are independent, reusable piece of code that return React elements.
- Two main types: **Functional Components** (using functions) and **Class Components** (using classes, though less common now).
### Creating Components:
- Review creating components with function syntax:
  ```javascript
  function Greeting() {
    return <h1>Hello, Welcome to React!</h1>;
  }
  export default Greeting;
  ```
---
## Working with Props (Properties):
### What are Props ?
- Props are arguments passed into React components and are used to pass data from one component to another.

### Using Props:
- Create a Welcome component that takes a name prop and displays a personalized message.
    ```javascript
    function Welcome(props) {
      return <h1>Hello, {props.name}!</h1>;
    }
    ```
### Rendering with Props:
- Use your Welcome component and pass different names to it.
    ```javascript
    function App() {
      return (
        <div>
          <Welcome name = "Tahir" />
          <Welcome name = "React Learner" />
        </div>
      );
    }
    ```
---
## Introducing State:
### What is State ?
- State is a built-in object used to store data that changes over time in a component.
### Using the useState Hook:
- useState is a React hook for managing state in functional components.
- Example: A button that updates a counter each time it's clicked.
  ```javascript
  import React, { useState } from 'react';

  function Counter() {
  const [count, setCount] = useState(0);

    retrun (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count+1)}>Click me!</button>
      </div>
      );
  }
  export default Counter;
  ```
---
## Handling Events in React:
### Basic Event Handling:
- In React, you can attach event handlers like onClick, onChange, etc., directly to elements.
  ```javascript
  function Button() {
    function handleClick() {
      alert('Button clicked!');
    }
    return <button onclick={handleClick}>Click Me</button>;
  }
  ```
---
## Practical Task: Build a Simple App with State and Props
- Create a **Mood Tracker** app that:
  - Has a button to change your mood from **Happy** to **Sad** and vice versa.
  - Display the mood on the screen
Example:
  ```javascript
  import React, {useState} from 'react';

  function MoodTracker() {
    const[mood, setMood] = useState("Happy");

    const toggleMood = () => {
      setMood(mood === "Happy" ? "Sad" : "Happy");
    };

    return (
      <div>
        <h1>Current Mood: {mood}</h1>
        <button onclick={toggleMood}>Change Mood</button>
      </div>
    );
  }
  export default MoodTracker;
  ```
---
#### for more reading:
- visit https://react.dev/learn


  
