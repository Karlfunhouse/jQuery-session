# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?

  You can select a single element by putting the id of that element in the selector area.  We don't have to use a querySelector to access the element.

2. What does the jQuery function return? How is it similar or different from a DOM Element object?


  It returns a jQuery Object.  The jQuery Object: The Wrapped Set: Selectors return a jQuery object known as the "wrapped set," which is an array-like structure that contains all the selected DOM elements. You can iterate over the wrapped set like an array or access individual elements via the indexer ($(sel)[0] for example). More importantly, you can also apply jQuery functions against all the selected elements.

3. How can you select multiple elements with jQuery?

  By chaining the elements together inside the element selector () separated by commas, all contained within a single set of quotes.

4. How can you select multiple elements with different IDs and classes in one selector expression?

  The same way as in question 3, separate them by commas within the same quotes.

5. What are the different ways of chaining selectors?

  Chaining different IDs in the selector expression then using .find() with the class name inside.

6. How do you select elements based on different attributes?

    You can select elements that start with a certain string by using $("[name^='value']") or elements that don't contain the value using "[name!='value']".

    Also there's "[name*="value"]" which is an attribute contains selector.  



7. How do you select a checkbox based on its state?

if ( elem.checked )
if ( $( elem ).prop( "checked" ) )
if ( $( elem ).is( ":checked" ) )


## Exercises:
Open up the `selectors.html` file in your browser.
In the `selectors.js` file, use jQuery to:
1. Select all the labels and give them a class of "green"
2. Select all of the `phone` inputs and give them a class of "yellow"
3. Select the label for the email input and give it a class of "blue"
4. On page load, log the id of the checked check box (hint: look into the `.attr()` jQuery method)
5. Give all labels inside of a p tag a class of "purple"
6. Give the Clear button a class of red
7. Commit your changes!

Once you're done, head on to [part-2-content](../part-2-content/README.md)
