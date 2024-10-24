# **DAY-1** : React Setup & First Component - "Hello React"

## Goal:
- Set up your React environment, understand the basic of components, JSX, and props.

## Concept Covered:
- 1. **Create React App:** Setting up a react project.
- 2. **JSX:** How React uses JSX to render
- 3. **Components:** Functional components in React.
- 4. **Props:** Passing data to components via props.

## Step by Step Guide:
### 1. Set Up Your React Environment
We will use create react app to quickly get started with a react project.

Open a terminal or command prompt, and run the following command:

 ```bash
    npx create-react-app hello-react
    cd hello-react
    npm start
```
This will create a React project and start the development server. Your browser will automatically open a blank page showing "Edit src/App.js and save to reload."

### 2. Understand the Structure
Let's break down the folder structure a bit:

- **public**/: Contains the public assets and index.html which will act as the root of the application.

- **src**/: The place where all the React components will be written, with App.js being the main component to start with.

### 3. Create Your First Component
Now, let's build our first React component inside src/App.js.

Open src/App.js and replace the existing code with:

```jsx
    import React from 'react';

    function HelloReact(props){
        return (
            <div>
              <h1>Hello, {props.name}!</h1>
              <p>Welcome to our first react component!</p>
            </div>
        );
    }

    function App() {
        return (
            <div>
              <HelloReact name ="Tahir" />
            </div>
        );
    }

    export default App;

```
#### Explanation:
- 1. **JSX**: React uses  JSX (JavaScript XML) to describe the UI. In the HelloReact component, JSX is used to render an h1 tag and a p tag.
- 2. **Component**: The HelloReact Component is a functional component. Components are the building blocks in React.
- 3. **Props**: In React, you pass data to components using props. In this case, we pass name = "Tahir" to HelloReact, and it renders that value.

### 4. Running the App
After editing App.js, go back to your browser and refresh it (if it's not refreshed automatically). you should see:

```code
Hello, Tahir!
Welcome to your first React Component!
```

## Concepts to Focus On:
- JSX
- Functional Components
- Props

## Common Interview Q&A on Today's Concepts:

### 1. What is JSX ?
- JSX stand for JavaScript XML. It allows you to write HTML-like code inside JavaScript files. React uses it to describe what the UI should look like.

### 2. What is a Component in React ?
- A component is a reusable piece of UI that can have its own state and logic. In React, Components are the building block of any application.

### 3. What are props in React ?
- Props are the inputs to a React component. They are passed from the parent component and are immutable (you cannot change them inside the component).
