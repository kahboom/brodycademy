# Day 2: Web Dev (Frontend)

Web development, or web dev for short, refers to the tasks involved in designing, building, and maintaining of websites and web applications. This ranges anywhere from mobile (e.g. Android, iOS) to desktop apps.

# Frontend Development


# Project

Today you'll be working on your first frontend project. By the end of it, you will have learned how to build your first website, how to build your first web app, and what the difference is between the two.


## Website

All you need to make a website is an HTML file.

In your IDE, create a new empty project without any template, and create an `index.html` file in the root of it. It should look something like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

</body>
</html>

```

My suggestion is that you become familiar with HTML syntax, and then see how you can style the page and use tags to create your website.

Here is a really fun tutorial on how to create a 90s-style Under Construction page by one of my favorite digital artists, Jackie Liu:  [Build an Under Construction Page](https://www.zinesbyjackie.com/activities/build-an-under-construction-page)

If you're looking for inspiration for a frontend project, one popular idea is to recreate an app you like and visit often. Twitter is a popular one, but other ideas can include sites like YouTube, Reddit, etc. Here is an example for YouTube, using just HTML and CSS: [HTML and CSS Project – How to Build A YouTube Clone Step by Step](https://www.freecodecamp.org/news/how-to-build-a-website-with-html-and-css-step-by-step/)


## Web App

Time-permitting, next up we'll build a web application. To save time, usually developers use **libraries**, or sometimes **frameworks** (more opinionated on things like project structure, etc), which takes care of a lot of the repetitive tasks they have to do on each project setup.

These are a few of the most popular frontend libraries out there at the moment:

- [React](https://react.dev/) - React
- [Vue.js](https://vuejs.org/) - Vue
- [HTMX](https://htmx.org) - No framework

Because React is the one I have to use at work (lucky you, it's the most popular frontend library in the world right now!), that's the one we'll be using.

Here's how you do it:

1. In your terminal, navigate to your projects directory
2. From the projects directory, run the following:

```shell
npx create-next-app@latest
```

Follow the instructions in the terminal to finish creating your first React application.

## Project
Now it's time to turn your web app into your very own.  Here are some tutorials you might find helpful:

- [Build your own YouTube clone application in Reactjs](https://www.youtube.com/watch?v=FHTbsZEJspU)


# Bonus

If you're interested, you can learn a bit more about web development [here](../../dev-notes/web-dev), where you'll find some additional resources.


:::info[Hint]
Nowadays, the difference between a website and a web application can be blurry, but traditionally, a websites are static with information that doesn't change often. Web applications, or web apps, are _dynamic_ and interactive, accepting or storing input from users to be used dynamically at a future point (i.e. login). In other words, they are richer with more features.
:::

## Closing Remarks

In the 90s, the world of frontend development didn't exist because the technology had not yet reached a point of maturity to warrant such complex needs for the user interface. Websites were mainly just blurbs of text, gifs, and videos thrown together. There wasn't really such a thing as logging in through your browser.

As JavaScript and browser technology evolved, so too did the complexity. This eventually led to the creation of frontend web apps, or applications that deal only with interactivity in the user interface (UI). This allowed for a much cleaner separation of concerns between what the user sees and experiences, and the logic that powers the business behind the scenes. Ultimately, the goal was to provide richer experiences for the user and allowing developers to focus on a specific area.

