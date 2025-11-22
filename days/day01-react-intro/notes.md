# Day 01 – React Intro

## 📚 What I Learned Today

- How to create a new React project using Vite
- What React is and why we use it
- Difference between a library and a framework
- What components are and why they matter
- How JSX works (JavaScript + HTML syntax)
- The basic mental model: React is a function → state in → UI out
- How React updates the UI automatically when state changes

## 💡 Concepts in My Own Words

**React:**  
A JavaScript library that helps build interactive user interfaces using reusable components.

**Why we need React:**  
Before React, developers manually updated the DOM. React automates UI updates based on state changes, making building apps easier, cleaner, and faster.

**Component:**  
A small, reusable block of UI — like LEGO pieces that combine to build an app.

**JSX:**  
A syntax that lets me write HTML-like code inside JavaScript. React turns this into real DOM elements.

**React Rendering Model:**  
React takes state → runs the component function → returns JSX → React updates only the parts of the DOM that changed.

## 🧪 Code I Wrote Today

```jsx
function App() {
  return <h1>Hello React!</h1>;
}

// Example of state
const [count, setCount] = useState(0);
setCount(count + 1);
```
