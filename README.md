# React-Basics
Just Basic stuff related to React!

To print HEllo in just React :
  import React from "react";
  import ReactDOM from "react-dom";

      function Hello () {
            return <div> Hello </div>
                        }
      ReactDOM.render(<Hello />, document.querySelector('#root'));


now further :'

-Change the text "Hello World!" to say "Hello <your name>!"
-Bold your name by wrapping it in a <strong> tag. It works just like HTML.
-Inside the <div>, and under your name, add some other HTML elements. Headings, ordered and unordered lists, etc. Get a feel for how it works. How does it handle whitespace? What happens if you forget to close a tag?
-I mentioned that you can put real JS code inside the JSX. Try that out: inside the div, insert a JS expression surrounded with single braces, like {5 + 10}.
-Want to style it with CSS? Instead of using the "class" property like you would in HTML, use "className". Then create a file src/index.css with the styles, and add the line "import './index.css'" to the top of index.js. Yep, you can import CSS into JS. Sorta. That's Webpack working its magic behind the scenes

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
1-Write a new component called `MediaCard` that accepts 3 props: title, body, and imageUrl. Inside the component, render the title in an <h2> tag, the body in a <p> tag, and pass the imageUrl into an img tag like <img src={imageUrl}/>. Can you return all 3 of these things at once? Or do you need to wrap them in another element?
Render the MediaCard with the ReactDOM.render call, and pass in the necessary props. Can you pass a JSX element as a prop value? (hint: wrap it in single braces). Try bolding some parts of the body text without changing the implementation of MediaCard.


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

