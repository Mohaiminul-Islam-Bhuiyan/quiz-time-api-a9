import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <div>
                <h1 className = "font-bold">What is the purpose of react router ?</h1>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <br />
            <div>
                <h1 className = "font-bold">How does context API works</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <br />
            <div>
                <h1 className = "font-bold">A brief discussion on useRef</h1>
                <p>The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blog;