1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
There are a few differences between querySelector and getElementsByClassname :
getElementsByClassName returns a collection of elements while query selector returns only one element. I can access the element I want inside the collection by using bracket notation. In other words:
let myElem = document.querySelector(".myClass");
is equivalent to
let myElem = document.getElementsByClassName("myClass")[0];
Note that if more than one element matches the selector in querySelector, only the first one will get returned. If I want to return a collection, I will use querySelectorAll.
From a syntax point of view, if I look at the previous examples, I'll notice that to select a class in querySelector, I did put a "." in front of myClass. this should not be done in getElementsByClassName.
querySelector and querySelectorAll return elements that are non-live while other selectors (getElementById, getElementsByClassName...) return live elements. So, elements of a collection returned by getElementsByClassName will be modified if they are modified in the DOM. Elements returned by querySelector will not.

2.How do you create and insert a new element into the DOM?
Answer:
To add a new element to the HTML DOM, I must create the element (element node) first, and then append it to an existing element.

3.What is Event Bubbling and how does it work?
Answer: Event bubbling is the default process where a browser's event, triggered on a specific HTML element, propagates up through its parent elements to the document root. For example, clicking a button inside a div also triggers the event for the div, and then its parent, and so on, allowing events to be handled at different levels of the DOM hierarchy.

4.What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than adding separate event listeners to each child. This works by leveraging event bubbling, where an event triggered on a child element "bubbles up" to its parent elements in the DOM tree. The single listener on the parent then checks event.target to determine which specific child initiated the event and handles it accordingly. It is useful because it helps in performance and memory efficiency, simplifying code and maintainability, handles dynamic content etc.

5.What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() is used to prevent the default action that belongs to the event, such as preventing a form from submitting. event.stopPropagation() is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.
