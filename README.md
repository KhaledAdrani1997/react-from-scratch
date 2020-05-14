This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In this project we are going to learn step by step the infamous Frontend Library React Js.

If you want to start a project from scratch then proceeds, after all, I want you to be able to do everything on your own.

This tutorial is recommanded for those who already know about React but are still struggling to grasp its fundamentals like myself!
Hopefully this repository will be updated regularly.

I'll make it as short as possible without forgetting the most important things! Less Time more Value!
# Pre requisites
HTML, CSS, Javascript ES6, DOM

# My way of learning

1) Watch a crash course, try to absorb as much as I can
2) chunking the topic and learning step by step each chunk
3) Once the fundamentals are grasped, nothing can stop me actually

# Get started
First download create-react-app using npm

### `npm i create-react-app`

Move to the folder of your project and type

### `create-react-app .`

or you can define a folder

### `create-react-app my-app`

To run the app in the development mode.<br />

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Open VS CODE and let's start coding!

### `CTRL + K + S`

Allows you to save all files in your project directory.

We recommand that you delete the content of APP.css, index.css, logo.svg etc. 
So you start from scratch like what I did!

# Component and Props

React Components are simply Javascript functions that take `props` as their input and returns a JSX element.
Let's say JSX is simply HTML written and understood by Javascript:

`let element = <h1>Something</h1>`

Let's create our first component. Create a folder called component in src folder. 
[INSERT ADVICE ABOUT A VERY GOOD EXTENSION IN VS CODE THAT ADDS REACT SNIPPETS]

## Rendering in React

1) We call App.js render(), our main interface of the application with the component <Something name="Khaled"/>

2) React calls the component Something with {name:"Khaled"} as the props.

3) Our component Something returns `<h1> Hello, Khaled </h1>`

4) React updates the DOM to match the change made to Something.

**Notes

Don't be afraid to modularize your components, use props!

## `CTRL + H` 

Find and replace all in VS CODE

TypeError: Cannot read property 'props' of undefined. 
Be careful while using props. Pass props to the argument of a React functional component or the constructor of a React class component.

A single strict rule of React:
All React components must act like pure functions with respect to their props. 
It means props are read-only. Pure functions do not attempt to change their input.

# State and Lifecycle

## Adding local state (we need a React class component rcc)

1) replace `this.props` with `this.state`.
2) `constructor(props) { super(props); this.state={ assign props to state here};}`

## Lifecycle methods
Mounting and Unmounting

componentDidMount(): run after the component has been rendered by the DOM.

### Handling state correctly:
- Do not modify state directly, use setState

- State Updates may be asynchronous, so using both this.props and this.state may fail to update,
use setState((state,props)=>{})

- The Data flows down: neither parent nor child components can know if a certain component is stateful or stateless and they shouldn't care. 
=> state is encapsulated.

TOP-DOWN, unidirectional data flow, Waterfall

# Handling Events

Similar to the classic way

`function handleClick(e){
  e.preventDefault();
  console.log('it works');
`

You need to bind your event handlers so that they work in the callback.

The meaning of `this` in JSX is very important. In JS, class methods are not bound by default. 
If you forget to bind, `this` will be undefined when the function is actually called.

Without ES arrow expression => you should bind like this: this.handleClick = this.handleClick.bind(this)

class field syntax => handleClick = (e) => {}

These two methods are the most recommanded ways to avoid any extra re-rendering.

### passing parameters:
 Best way to pass parameters to event handlers
 
 `<Button onClick = {this.onClick.bind(this,arg)}> </Button>`


# To be continued
This document is not finished yet! Need more additions and refactoring!
