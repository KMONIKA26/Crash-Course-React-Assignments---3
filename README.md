# Crash-Course-React-Assignments---3

# React Assignments
This repository contains assignments focused on various React concepts, including useEffect, component unmount phase, useRef, Context API, and Routing.

# Table of Contents

1. Assignment on useEffect and Component Unmount Phase
2. Assignment on useRef
3. Assignment on Context API
4. Assignment on Routing

# Description
This assignment demonstrates how to use the useEffect hook to perform side effects and clean up when a component unmounts.

- Example Code
```bash
jsx
import React, { useEffect } from 'react';

const TimerComponent = () => {
  useEffect(() => {
    const timer = setInterval(() => console.log('Tick'), 1000);
    return () => clearInterval(timer); // Cleanup function
  }, []);

  return <div>Check the console for timer logs.</div>;
};

export default TimerComponent;
# Assignment on useRef
  *Description
  This assignment shows how to use the useRef hook to persist values across renders and directly access DOM elements.
```

- Example Code
  
```bash
jsx
import React, { useRef } from 'react';

const InputFocus = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
```
# Assignment on Context API
  * Description
  This assignment illustrates how to use the Context API to pass data through the component tree without prop drilling.

- Example Code

```bash
jsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div>The current theme is {theme}</div>;
};

const App = () => (
  <ThemeContext.Provider value="dark">
    <ThemedComponent />
  </ThemeContext.Provider>
);

export default App;
```

# Assignment on Routing
* Description
  This assignment covers the basics of React Router for navigating between different components or pages in a React application.

- Example Code

```bash
jsx
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default App;
```
# Getting Started
  1.Prerequisites
    * Node.js and npm installed
    * Basic knowledge of React
    
# Installation
Clone the repository:
```bash
git clone https://github.com/your-username/react-assignments.git
```
* Navigate to the project directory:
```bash
cd react-assignments
Install dependencies:
```

```bash
npm install
Running the Assignments
Start the development server:
```

```bash
npm start
Open your browser and navigate to http://localhost:3000 to view the assignments.
```

# Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.

# License
This project is licensed under the MIT License.

