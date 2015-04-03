# hapi-handlebars
A simple node hapi server for practice with handlebars template engine, default layout, partial templates, and helpers.

## Items learned, practiced...
* trying a new directory structure and entry point
    - using bin/www pattern (as used by Codeschool and reportedly, Node personnel)
    - trying a wwwd entry point for debug (node-debug)
        + MAY ABANDON THIS APPROACH/EXPIREMENT, IF NO BENEFITS FOUND
* Handlebars, Partials and Helpers

## Notes
* I found the documentation for handlebars (at npmjs.org and handlebars.js) to be bit confusing
    - I think mostly because they are both geared toward using handlebars directly/explicitly as client side javascript
    - hapi takes care of the majority of that for you, when configuring handlebars as the template engine
* To get a better understanding of handlebars, I also read mustache docs 
    - and the hapi api docs for views (and their tutorial)

## Tutorial / Resources Feedback
* http://futurestud.io/blog/how-to-create-a-dynamic-handlebars-layout-template-in-hapijs/
    * An appreciated example, but a bit light on where to go from here, or how to achieve a slightly more complex example
        * an example with multiple pages would have been helpful (mostly to demonstrate best practices [structure] for multiple templates)
        * also, would like to see an example using partials
    
