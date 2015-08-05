HackDay 2015
============

# Purpose

Walmart Labs sponsors a weekend of hacking on an idea you have.

Our idea was to create a service that allows speech input to search for Sam's Clubs locations or products.

# Underling Technology

Walmart sent us to Angular U, and there was a workshop where we leanred to use Angular 1.4 + ES6 using Webpack and Babel.  We adapted this approach for this exercise. 

# Installation

Install [Node JS](http://nodejs.org/), which currently includes `npm`.


# Running the app

```
npm i && bower i && npm run serve
```

## Speech Commands

After pressing the listen button, the following commands are available:


        // find products
        show [product]
        display [product]
        search for [product]

        // find clubs
        find a club
        locate a club


## Caveats

1. Product search currently only supports three items: `Ramen [noodles]`, `Gatorade`, and `speakers`.  Ramen or Ramen noodles will work.
2. The club locator will ask for your location, but the service is based on JSON fixtures, of which there is presently only one...
