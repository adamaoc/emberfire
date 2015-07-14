> This app was built as a playground for messing with `ember` and `emberfire` (`firebase`) - Many things are not working... Don't take this app as the way that Ember apps or Firebase should be written...

# App

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4222](http://localhost:4222).
* changed server port to not conflict with other ember apps I run...

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Things to play with

This is a list of things that I'm trying to learn and play with as I spend time on this app.

The purpose of the application is to be a catalog like site for online retail. This ember app serves as both the consumer facing portion and the admin portion where uploading and updating items can be done. I've chose to use Firebase (and emberfire) as the backend for this app as another thing to play with but this could be done with Ember-data and any restful API. I'm not going to spend a lot of time on design in the beginning as I'm more interested in the development aspects of this project.

#### Ember

* Components - I am striving for a component driven front-end
* Ember-next - I'm looking to keep up to date on newer versions of Ember and Ember-cli
* Pods - I really like the idea of Pods vs the conventional Ember structure.
* Testing - I would like to write some basic tests to get familiar and comfortable with test driven Ember development.

#### Firebase

* Authentication - a user needs to be able to sign in and only signed in users have access to the admin area.
