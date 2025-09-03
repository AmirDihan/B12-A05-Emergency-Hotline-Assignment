1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: There are several ways to select elements from the DOM. getElementById is used to select a single element by its unique ID. getElementsByClassName selects all elements with a specific class name and returns a live HTMLCollection,it automatically updates when the DOM changes. querySelector allows to select the first matching element using any valid CSS selector (like #id, .class, or div > span). querySelectorAll select all matching elements and returns a static NodeList that doesn't update automatically.

2. How do you **create and insert a new element into the DOM**?
Ans: To create and insert a new element into the DOM using JavaScript, i first use document.createElement() to create the element. Then, i add classes, styles, or attributes to it using properties like .classList, or .setAttribute(). Finally, i insert the element into the DOM using methods such as appendChild() to add it at the end of a parent, prepend() to add it at the beginning, or insertBefore() to place it before a specific element.

3. What is **Event Bubbling** and how does it work?
Ans: Event bubbling is the process by which events in the DOM propagate from the target element up through its parent elements. When an event like click occurs on a nested element, it first triggers on that element, then "bubbles" upward to its ancestors unless explicitly stopped using event.stopPropagation(). This allows parent elements to respond to events triggered on their children, which is useful for event delegation and managing behavior efficiently in complex interfaces.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event delegation is a JavaScript pattern that involves attaching a single event listener to a parent element to manage events from its child elements. It uses the benefiit of event bubbling, allowing you to detect and respond to events on children by inspecting the event.target. This approach reduces the number of event listeners, improves performance, and simplifies handling of dynamically added elements — making it especially useful in modern, interactive web applications.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: preventDefault() and stopPropagation() are both used in event handling but serve different purposes. preventDefault() is used to stop the browser's default behavior for a specific event for example, preventing a form from submitting or stopping a link from navigating. On the other hand, stopPropagation() is used to prevent the event from bubbling up to parent elements, which is useful when you want to handle an event only on a specific element without triggering handlers on its ancestors. While preventDefault() affects how the browser reacts, stopPropagation() controls how the event flows through the DOM.

