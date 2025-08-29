# JavaScript Assignment Questions and Answers

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- `getElementById` find only one element by its unique id.  
- `getElementsByClassName` return all elements that have same class name.  
- `querySelector` select only the first element that match CSS selector.  
- `querySelectorAll` select all elements that match the CSS selector.  

## 2. How to create and insert a new element into the DOM

- We use `document.createElement()` to make new element. Then we can add text inside using `innerText` or `innerHTML`. Also we can use `setAttribute()` or change style. Finally we insert it by `appendChild()` or `append()` into parent element.  

## 3. Event Bubbling

- Event bubbling means when a event happen on child element, it start going up step by step to parent elements, until reach the document.  

## 4. Event Delegation and its usefulness

- Event delegation is when we put one event listener on parent, and use it to handle events of all child elements. It is used because code is shorter and also works for new child elements created later.  

## 5. Difference between preventDefault() and stopPropagation()

- `preventDefault()` stop the default action of element, like form submit refreshing the page.  
- `stopPropagation()` stop the event from bubbling up to parent elements.  
