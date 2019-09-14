# React-Basics
Just Basic stuff related to React!

To print HEllo in just React :
  import React from "react";
  import ReactDOM from "react-dom";

      function Hello () {
            return <div> Hello </div>
                        }
      ReactDOM.render(<Hello />, document.querySelector('#root'));


now further : 
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
