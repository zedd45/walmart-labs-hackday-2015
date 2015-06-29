HackDay 2015
============

# Purpose

Walmart Labs sponsors a weekend of hacking on an idea you have.

Our idea was to create a service that allows speech input to search for Sam's Clubs locations or products.


# Installation

Install [Node JS](http://nodejs.org/), which currently includes `npm`.


# Running the app

```
npm i && npm run serve
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


The club locator will ask for your location, but the service is based on JSON fixtures, of which there is presently only one...
