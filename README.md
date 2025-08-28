# Emergency-Service-Directory-Website

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- `getElementById('id')` returns a single element with the given id. It is the fastest and most direct way to select an element by its unique id.
- `getElementsByClassName('class')` returns a live HTMLCollection of all elements with the given class name. You need to loop through it to access individual elements.
- `querySelector('selector')` returns the first element that matches a CSS selector (id, class, tag, etc.).
- `querySelectorAll('selector')` returns a static NodeList of all elements matching the CSS selector. You can use forEach on it.

## 2. How do you create and insert a new element into the DOM?

- Use `document.createElement('tag')` to create a new element.
- Set its properties or content (e.g., `el.textContent = 'Hello'`).
- Insert it into the DOM using methods like `appendChild`, `insertBefore`, or `append` on a parent element.

Example:

```js
const div = document.createElement("div");
div.textContent = "New Div";
document.body.appendChild(div);
```

## 3. What is Event Bubbling and how does it work?

Event bubbling is the process where an event starts from the target element and bubbles up to its ancestors in the DOM tree. For example, if you click a button inside a div, the click event first runs on the button, then on the div, then on the body, and so on, unless stopped.

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where you add a single event listener to a parent element instead of multiple listeners to individual child elements. The parent checks the event target to handle events for its children. This is useful for performance and for handling dynamically added elements.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

- `preventDefault()` stops the default action of an event (like following a link or submitting a form).
- `stopPropagation()` stops the event from bubbling up to parent elements, so only the current element handles it.
