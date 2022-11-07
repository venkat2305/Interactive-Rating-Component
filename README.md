## TO DO

1. when clicked , there's a square while the element is clicked
2. what's the use of

## Learnings

1.  [Slack Discussion](https://frontendmentor.slack.com/archives/CCYHFT85B/p1667034423797659)
2.  [Radio button and input styling](https://moderncss.dev/pure-css-custom-styled-radio-buttons/)
3.  [Create Accessible CSS Toggle Buttons](https://www.youtube.com/watch?v=N8BZvfRD_eU)
4.  How to hide elements accessibly:

    - https://kittygiraudel.com/snippets/sr-only-class/
    - [Accessible hiding and aria-hidden example](<https://a11y-guidelines.orange.com/en/web/components-examples/accessible-hiding/#:~:text=The%20conventional%20way%20is%20to,by%20Assistive%20technologies%20(AT)>)

5.  The `:checked` naming convention may be a little confusing here, but it is a CSS selector that is available for both radio buttons and checkboxes.
6.  [CSS Combinators](https://www.w3schools.com/css/css_combinators.asp)
7.  `input:checked + label { /checked label styles */}` it means that , when the input is checked the label will be styled. If the input is not checked these styles won't be applied, as there is no `input:checked` in the first place
8.  How to get the form data into javascript
    - [How to get value of selected radio button using JavaScript?](https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/)
    - [How to check a radio button using JavaScript?](<https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript#:~:text=Get%20the%20value%20of%20selected%20radio%20button%3A%20querySelector()&text=Remember%20you%20need%20to%20specify,the%20group%20of%20radio%20buttons.>)
    - `form.addEventListener("submit", function (e) { e.preventDefault(); … }` to prevent the form from refreshing after submitting the form
9.  Manipulate CSS in javascript with [HTML DOM Element classList](https://www.w3schools.com/jsref/prop_element_classlist.asp)
    - [How TO - Add a Class](https://www.w3schools.com/howto/howto_js_add_class.asp)
    - [How TO - Remove a Class](https://www.w3schools.com/howto/howto_js_remove_class.asp)
    - [How TO - Toggle Class](https://www.w3schools.com/howto/howto_js_toggle_class.asp)
10.      
        .rating-card > * + * {
        margin-top: 1rem;
        }
        

    It’s a quick way to add margin top to all the direct children of the card except the first one.This would be the same:


        .rating-card > *:not(:first-child)
    Mainly because it was quicker to write than adding margin on each of your elements individually in browser.

    It would be lower CSS specificity if you just added margin top/bottom where you need
