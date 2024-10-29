## 1.  How to install

``` npx create-react-app . (for installation in root )

or  npx create-react-app (dir_name);
```

<!-- npx is used as a temp installer but npm is used for permanent -->


## 2. warn is beacuse several problems could occur due to deprication and many more

## 3. difference between component state and props

states=>  what are the details containing inside it
props=> i can send some assets and change the situation of that state.

## 4. instead of class we use className in react as class is reserved

## we also use <> </> to wrap multiple html tags in one jsx


## 5. How WEbsite Works??

in Multi page application every time the request is made and every time browser will provide html ,css and js

but in single page when the request is made then all he bundle of html and css and js is send and then using the api's and javascript it is populated afterwards.


## ReactRouterDom ?

> npm install react-router-dom

## What to change in React Router DOM

> you should try to change  a and href  ---->  link and to

> Note that switch is always used inside the Router

> try to give exact path insted of path 
//      /users---------> rendering component1
//      /users/home------> rendering component2
//  if will use only path it will confuse and render /users only but if you will use the exact path it will take you to that exact path.


## clf (cummlative layout shift)

// try to give specific layout to every section to fix the height


## note (OnCLick)

// onclick needs the function not the function call