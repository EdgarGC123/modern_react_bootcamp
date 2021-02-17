/* The Modern React Bootcamp (Hooks, Context, NextJS, Router) */
// to start the server:
//python3 -m http.server OR python -m simpleHTTPserver




//HIGHLIGHTS
/* video #:
#3
#6
#8
#16
#22
#28

*/

/*
#68 talks about keyboard events all found on react site.
ie
onKeyUp - releasing a key after being pressed
onKeyDown - when a key is pressed down
onCopy - when ctrl c or right click copy is executed.
onMouseEnter - when a mouse hovers over
onMouseLeave - when a mouse hovers over then leaves.

more can be found here:
https://reactjs.org/docs/events.html#supported-events

*/

/*
Sever Side Routing: when you click on a new link on a page, it pings the server to take load a completely new page with different content loaded from the server. 

Client Side Routing: it replicates the server side routing without actually loading anything new as it was already loaded but still changes the url link. also, browser allows back and forth button.

=================

        <Switch>
          <Route exact path='/' component={About} />component will create a new component every time but has no performance hit if you are not passing props. 
          <Route exact path='/dog' render={() => <Dog name="Amadeus" />} /> render will simply run the component as a render and allows you to use props. using component in this instance will create a new component every time. 
        </Switch>
*/