# Rugged Frontend for QA Engineer Testing

3 Page Application, but the URL will not change at any time.

## First Page

Full screen icon, need to scroll down to see the button to push to get to the form.

## Form Input

3 Text Inputs, 1 checkbox, and 1 button.

Fill in all 3 text boxes, check the checkbox, then push the button. If your framework lets you submit a form directly, that will work also, but the button isn't a `submit` button so `enter` in a text input will not submit the form.

When the button is pushed, there is processing we need to do, then it will show success or failure.

### Success Case

The data to input is:

- Text 1: `text 1 test data`
- Text 2: `text 2 success data`
- Text 3: `text 3 test data`
- Checkbox must be set to `checked`

When submited/button pushed, it will show the text `The Form was submitted successfully. Thank you for your input!`.

### Failure Case

The data for the failure case is:

- Text 1: `text 1 test data`
- Text 2: `text 2 failure data`
- Text 3: `text 3 test data`
- Checkbox must be set to `checked`

When submitted/button pushed, it will show the text `There was a failure in the form, please try again.`.

### Other Case

When the data doesn't match either of the above, you will get an alert with the text `Form input not what it should be`. If a test can be made for this, that would be a bonus.
