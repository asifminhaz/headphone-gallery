import React from 'react';

const Bonus = () => {
    return (
        <div>
            <h1>
                1:How react works?
            </h1>
            <p>answer: React is a javascript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code.You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.React uses Virtual DOM , thereby creating web applications faster.Virtual DOM compares the components previous states and updates.Only the items in the Real DOM that were changed,instead of updating all of the components again , as conventional web applications do.React has 4 types of component , similar in look different in data, container component,no patern but breakdown for working purpose , stand -alone component.
            </p>
            <h1>2.difference between props vs state</h1>
            <p>answer:1:Props are read only, state changes can be asynchronous.</p>
            <p>2.Props are immutable,state is ,mutable.</p>
            <p>3.Props allow you to pass data from one component to other components as an argument, state holds information about the components.</p>
            <p>4. Props can be accessed by the child component, state cannot be accessed by child components. </p>
            <p>5.Props make components reusable, state cannot make components reusable </p>
            <p>6. props are external and controlled by whatever renders the component, the state is internal and controlled by react component itself. </p>
        </div>
    );
};

export default Bonus;