<br />
<p align="center">
  <h1 align="center">Project Catwalk</h1>

  <p align="center">
    A new retail website for a fictitious clothing company, J.CAD.
    <br />
    <h3 align="center">
     <strong>Contributers »</strong>
    <br />
    <br />
    <a href="https://github.com/ChrisRPeterson">Christian Peterson</a>
    ·
    <a href="https://github.com/acdavitt">Amanda Davitt</a>
    ·
    <a href="https://github.com/dylanreid7">Dylan Reid</a>
    ·
    <a href="https://github.com/julia-thea">Julia Thea Boyadjan</a>
     </h3>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#stack">Built With</a></li>
      </ul>
    </li>
    <li><a href="#product-overview---christian-peterson">Overview</a></li>
    <li><a href="#related-products-and-outfit-lists---amanda-davitt">Related Products and Outfit Lists</a></li>
    <li><a href="#questions-and-answers---dylan-reid">Questions and Answers</a></li>
    <li><a href="#ratings-and-reviews---julia-thea-boyadjan">Ratings and Reviews</a></li>
    <li>
     <a href="#workflow">Workflow</a>
     <ul>
      <li><a href="#trello">Trello</a></li>
      <li><a href="#version-control">Version Control</a></li>
     </ul>
    </li>
    <li>
     <a href="#development">Development</a>
     <ul>
      <li><a href="#repo">Repo</a></li>
      <li><a href="#install">Install</a></li>
      <li><a href="#start-scripts">Start Scripts</a></li>
      <li><a href="#github-api-token">Github API token</a></li>
     </ul>
    </li>
  </ol>
</details>

# About
The objective of Project Catwalk was to build a new retail website for a fictitious clothing company, J.CAD. Our team of four software engineers was given a time frame of three weeks to complete the request. We adhered to the specifications laid out in a business requirements document.  The website is comprised of four main widgets.  Further details about each widget can be found below.

![](https://media.giphy.com/media/ybgGMjoo5WwTPMZSlk/giphy.gif)

## Product Overview --[Christian Peterson](https://github.com/ChrisRPeterson)
**Features:**

  * *Product Information*: renders information such as product rating, category, title and price dynamically
  * *Style Selector*: presents the user with all styles and has the ability to toggle between them
  * *Add to Cart*: includes a size selector, capable of handling an out of stock size, button will add the currently selected item to the cart
  * *Image Gallery*: displays photos specific to the currently selected style, user can toggle main image, and zoom

![](https://media.giphy.com/media/tg85cRTz6IdTyoHp4f/giphy.gif)

## Related Products and Outfit Lists --[Amanda Davitt](https://github.com/acdavitt)
**Related Products List Features:**

  * *Product Card*: clicking on the card itself changes the current product
  * *Comparison Modal*: pops up upon clicking the star icon

**Custom Outfit List Features:**

  * *Add to Outfit Card*: adds the current product to the user's outfit list
  * *'X' icon*: removes the product from the list
  * *Outfit List*: persists upon page refresh

  ![](https://media.giphy.com/media/nKCnmYJrDrUJUtl6f2/giphy.gif)


## Questions and Answers --[Dylan Reid](https://github.com/dylanreid7)
**Features:**

  * *Search Bar*: allows a user to search for questions
  * *Questions and Answers List*: displays the questions and answers, sorted by helpfulness
  * *Helpfulness*: clicking 'Yes' adds one to the helpfulness of a question or answer
  * *More Answered Questions Button*: displays more questions and answers
  * *Add Question/Add Answer*: pops up a dialog box that allows the user to add a question or answer

 ![](https://media.giphy.com/media/k9T9wChKTqWYTXlyXm/giphy.gif)

## Ratings and Reviews --[Julia Thea Boyadjan](https://github.com/julia-thea)
**Ratings Features:**

  * *Ratings Summary*: displays current average rating, as well as the rating breakdown by number of stars
  * *Product Breakdown*: displays user-provided feedback on product characteristics

**Reviews Features:**

  * *Reviews List*: clicking 'More Reviews' button displays two additional reviews
  * *Add a Review*: upon clicking, a form pops up to submit a new review

 ![](https://media.giphy.com/media/L7s85SAx6IrjB1ZgTj/giphy.gif)


# Stack

<table>
  <tbody>
    <tr>
      <th>Frontend Languages</th>
      <td>
        <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
         <img alt="HTML" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
         <img alt="CSS" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
      </td>
    </tr>
    <tr>
      <th>Frameworks & Libraries</th>
      <td>
        <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
        <img alt="Material-UI" src="https://img.shields.io/badge/-Material--UI-%230081CB?&style=for-the-badge&logo=material-ui&logoColor=white" />
        <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
        <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/>
      </td>
    </tr>
    <tr>
      <th>Utilities</th>
      <td>
        <img alt="Webpack" src="https://img.shields.io/badge/webpack%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=%2361DAFB" />
        <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
        <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
        <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />
        <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
      </td>
    </tr>
     <tr>
      <th>Workflow</th>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
        <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/>
        <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
        <img alt="Zoom" src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <th>Deployment</th>
      <td>
        <img alt="AWS" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" />
      </td>
    </tr>
  </tbody>
</table>

# Workflow
Our team used Agile workflow for this sprint.

## Trello
A Trello board was used to create and track tickets.  We held daily scrum meetings to discuss accomplishments, challenges, and upcoming tickets.  To effectively collaborate remotely while allowing for quick communication if needed, we utilized Discord, Slack, and Zoom.

## Version Control
We implemented Git Feature Branch Workflow.  All pull requests in Github were reviewed by another team member before being merged into the main branch.

# Development

## Repo
`git clone https://github.com/Team-Tempo/project-catwalk.git`

## Install
`npm install`

## Start Scripts
```
npm run build:watch
npm start
```

## Github API Token

To use the API, you must create a GitHub API Token and attach it in every request as an "Authorization" header.

To create a API token:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token"
3. Given the Token a Description
4. Under Select Scopes, select the following:
    * read:org
    * user
    * read:user
    * user:email
    * user:follow
5. Generate Token

Note that this token is only viewable once, at generation time. Make sure to copy it to a secure place and never check it into your git history.

Create a config.js file following the format in example.config.js.
