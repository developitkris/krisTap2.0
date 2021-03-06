# React Taproom

This website is built using React and JSX.  It will be a recreation of a previous Taproom project built with Angular.

By Kristi Hwang

## Description

This is a website for a beer taproom which displays and monitors taps. It will have the following features:

1. Home page with company name and welcome message
2. List of all brews
3. Collapsable info for a specific brew
3. About page

## Project Specs

* User should be able to load web browser to the homepage and see a welcome message
* User should be able to see and click on routes to navigate to different "pages" of the website
* User should be able to see a list of brews and its associated information including: brew name, brewery, abv, price, description, keg fill

## Component Structure

![alt text](src/assets/images/updatedComponentStructure.png "an initial sketch for planning this project")

## Notes

## Thoughts & Questions
The mindset of starting a project in React versus one in Angular is markedly different because of its functional approach.  Although both contain Components, these structures translate differently in their application.  To start, while React maintains functional components, Angular defines class-based components.  React handles its components more as independent standing entities, while Angular assigns a certain task for them to be non mutually exclusive.  React seems to take a simpler approach to its components, containing everything related to that component in a single file.  Angular creates a set of files for a newly generated component, and each of the files within it need to be maintained separately. So in that way, there is more specificity in Angular but React's approach seems more usable.  There is the main distinction that while Angular is a full framework, React remains a library.  So considering that, Angular has more extensive built-in features that React won't have.  But given React's popularity and flexibility, it seems a good approach to think about how we can add to a project by using React in conjunction to Angular.

What are some technical differences in React that will be incorporated into the project to make it instantaneously dynamic?

How are conditions of data update and change monitored in components?

How important is the use of props in React, given its inability to change?

React v Angular: What are the differences in binding methods?

## Setup & Installation

* Clone this Github repository
* Open up the cloned repository on your local device and navigate into your root folder
* Run "npm install" or "npm i"
* Run "npm run start"
* Load the page on http://localhost:8080/
* Enjoy the site and leave some feedback!

## Bugs

There are no known bugs to date.

## Support & Feedback

Any inquiries, comments, and/or concerns can be directed to Kristi Hwang via Github.

## Technologies Used

* React
* JSX
* Bootstrap4.0
* CSS3
* HTML5

## Licensing

This project is licensed through the MIT open resource agreement.

Copyright(c) 2018 Kristi Hwang
