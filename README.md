# React-Basics
Just Basic stuff related to React!

To print HEllo in just React :
  import React from "react";
  import ReactDOM from "react-dom";

      function Hello () {
            return <div> Hello </div>
                        }
      ReactDOM.render(<Hello />, document.querySelector('#root'));




Change the text "Hello World!" to say "Hello <your name>!"
Bold your name by wrapping it in a <strong> tag. It works just like HTML.
Inside the <div>, and under your name, add some other HTML elements. Headings, ordered and unordered lists, etc. Get a feel for how it works. How does it handle whitespace? What happens if you forget to close a tag?
I mentioned that you can put real JS code inside the JSX. Try that out: inside the div, insert a JS expression surrounded with single braces, like {5 + 10}.
Want to style it with CSS? Instead of using the "class" property like you would in HTML, use "className". Then create a file src/index.css with the styles, and add the line "import './index.css'" to the top of index.js. Yep, you can import CSS into JS. Sorta. That's Webpack working its magic behind the scenes

Solution :

          import React from "react";
          import ReactDOM from "react-dom";


          function Hello () {

              return (
                <div> Hello <strong>Syed Ali Mehdi</strong> ! 
                <h1 > its Heading 1</h1>
                <h2> its Heading 2</h2>
                <ul>
                  <li > item 1</li>
                  <li > item 2</li>
                  <li > item 3</li>
                </ul>

                { 5+5 }   
                <br></br>
                { 10*8 }
                </div>
                );
                }

            ReactDOM.render(<Hello />, document.querySelector('#root'));


now moving towards props :
A simple function works easily from this syntax in JS 
            
            function Hi() {
                 return <div>Hello World!</div>;
                        }
                    
But for React Component Props, we use  this syntax :

          function Hi(props) {
                 return <div>Hello {props.name}!</div>;
                        }
           reactDOM.render(<Hi name="Ali Mehdi" />, document.querySelector('#root'));
           
Here's a cool thing about props: you can pass whatever you want into them. You're not restricted to strings, or trying to guess what it will do with your string (*cough* Angular) :

          <CustomButton
             green={true}
             width={64}
             options=
             onClick={doStuffFunc}
            />
 
 You can pass booleans, numbers, strings (as we saw), functions, and even objects. The object syntax looks a little weird ("what?? why are there double braces??"), but think of it as single braces surrounding an object literal, and you'll be alright.

Inside a component that receives multiple props, each one will be a separate property on the "props" object that's passed in. For example if we had a component called "HiFullName" that took two props, like this:

    <HiFullName firstName="Dave" lastName="Ceddia" />

Then the internals of that component might look something like this:

     function HiFullName(props) {
       return (
         <div>Hi {props.firstName} {props.lastName}!</div>
       );
     }
All of that syntax, by the way, is React (specifically, JSX). It's not ES6 JavaScript

Exercises of Props :

1-Write a new component called `MediaCard` that accepts 3 props: title, body, and imageUrl. Inside the component, render the title in an h2 tag, the body in a p tag, and pass the imageUrl into an img tag . Can you return all 3 of these things at once? Or do you need to wrap them in another element?
Render the MediaCard with the ReactDOM.render call, and pass in the necessary props. Can you pass a JSX element as a prop value? (hint: wrap it in single braces). Try bolding some parts of the body text without changing the implementation of MediaCard.

Solution:

                import React from "react";
                 import ReactDOM from "react-dom";

                    class MediaCard extends React.Component {
                  render() {
                    return(
                       <div>
                         <h2> {this.props.title}  ! </h2>
                         <p> {this.props.body} </p>
                         <img src={this.props.imgUrl}></img>
                       </div>
                       );
                    }
                }

                  ReactDOM.render(
                    <MediaCard title="Hey, its Title" 
                     body={ <b>"I'm Body"</b> }
                    imgUrl="http://www.gstatic.com/tv/thumb/persons/983712/983712_v9_ba.jpg" />,
                   document.querySelector('#root'));

2-Make a component called Gate that accepts 1 prop called "isOpen". When isOpen is true, make the component render "open", and when isOpen is false, make it render "closed". Hint: you can do conditional logic inside JSX with the ternary (question mark, ?) operator, inside single braces, like this: {speed > 80 ? "danger!" : "probably fine"} (which evaluates to "danger!" if speed is over 80, and "probably fine" otherwise)

Solution a :

          import React, { Component } from "react";
           import ReactDOM from "react-dom";

           const Gate = (props) => {

             const gate = props.isOpen;
    
             return(
                <div> { gate ? 'Open' : 'Close' } </div> 
    
                  );
               }


           ReactDOM.render(
             <Gate isOpen={false} />,
            document.querySelector('#root'));        //use in every solution
            
Solution b :
  
          import React, { Component } from "react";
          import ReactDOM from "react-dom";

          function Gate(props) {

            const gate = props.isOpen;
    
            return(
               <div> { gate ? 'Open' : 'Close' } </div> 
               );
              }
          
        
Solutin c:

              import React, { Component } from "react";
              import ReactDOM from "react-dom";

               class Gate extends React.Component {
                constructor(props) {
                  super(props);
                }

                render() {
                  return(
                    <div> { this.props.isOpen ? 'Open' : 'Close' } </div> 
                  );
                }
              }
              
              
 Solution d :
 
              class Gate extends React.Component {
              constructor(props) {
                super(props);
              }

              render() {
                const isOpen = this.props.isOpen;

                return (
                  <div>
                    <p>{isOpen === true ? "Open!" : "closed!"}</p>
                  </div>
                );
              }
              }


Conveniently React has a thing called state which allows components to keep track of values that can change – a perfect place to store the state
          import React from 'react';
          import ReactDOM from 'react-dom';
          function Room() {
            return (
              <div className="room">the room is lit</div>
            );
          }
          ReactDOM.render(<Room />, document.getElementById('root'));

In React, function components are stateless. Replace the whole function with this class instead.
Example:          
          class Room extends React.Component {
                state = {
                  isLit: true
                }
                render() {
                  return (
                    <div className="room">the room is lit</div>
                  );
                }
              }


Render according to state:

Right now, the component works the same as before, because we haven’t changed anything in render. Let’s have it render differently based on the state of the light. Change the <div> to this:

            <div className="room">
              the room is {this.state.isLit ? 'lit' : 'dark'}
            </div>

As you can see, the light is still on. Now change isLit: true to false. The app will re-render saying “the room is dark.” 




Change the state when you click the button:

Let’s add a button and kick this thing into high gear. Change the div to look like this

              <div className="room">
                the room is {this.state.isLit ? "lit" : "dark"}
                <br />
                <button onClick={this.flipLight}>flip</button>
              </div>

So we’ve got a plain old line break with the <br/>, and then a button that says “flip”. When you click the button, it will call the this.flipLight function in the component. And if you’ve been paying attention, we don’t have a flipLight function… so let’s add that now.

Above the render() function, and under the state initialization, add this code:

                flipLight = () => {
                  this.setState({
                    isLit: !this.state.isLit
                  });
                };

Remember how we talked about arrow functions yesterday? This is one of those. Except it’s inside a class, which makes it a member function.

Click the “flip” button now. Does it work? Hooray! We’ll fix the stark white background in a sec, but let’s talk about this setState thing.


How setState works

In the flipLight function, we’re toggling the isLit state true/false depending on what it’s currently set to. You might wonder why we don’t just say this.state.isLit = !this.state.isLit. It’s because the setState function actually has 2 jobs:

    a-first it changes the state
    b-then it re-renders the component

If you just change this.state directly, React has no way of knowing that it changed, and it won’t re-render. There are more reasons why changing state directly is a bad idea, but for now, just remember to always use this.setState, and don’t modify this.state.anything directly. 


