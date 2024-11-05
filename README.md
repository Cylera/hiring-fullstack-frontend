# Cylera Front-end Take-home Programming Assignment

The goal of this project is to create an interactive visulization of the checkoutbot you already submitted. We created design for this application, and your job is to implement it. This repo is a starting point with some of the scaffolding and a components modulein place to get you started. You're expected, at a minimum, to use the following technologies in your solution:

- React with TypeScript
- TailwindCSS

If you choose use additional technologies, be prepared to discuss how and why that decision was made.

## The Design

https://www.figma.com/design/AThtBsMj4nFTTxnT1HunXU/Hiring-full-stack-front-end-design?node-id=0-1&node-type=canvas&m=dev

_Notes:_

- The designs are not exhaustive of all functionality. It will be up to you to follow the designs' precedent and use your best judgement when implementing features that are described bellow but not represented in the designs.
- If you do not have access to the designs, please contact us as soon as possible.

## Components Module

The components module contains a few components to help build the application. You are not expected to add to or update this module since this module should contain all the components you need to complete the assignment. If you do find that you need to add to or update this module, please be prepared to discuss why.

The documented components can be viewed in the `components` directory and imported from `@components`. For example, to import the `Button` component, you would use the line `import { Button } from '@components';`. Multiple components can be imported at once by using the line `import { Button, Text } from '@components';`.

## Features

### Visualize register distribution

Your submission should include a bar chart visualization of the checkoutbot's registers. The visualization should show the number of items at each register. The visualization should be updated as customers and items are added and removed from the checkoutbot. This visualization is depicted in the design.

### Visualize customers and their item counts

Your submission should include a list of customers and the number of items they have. The list should be updated as customers and items are added and removed from the checkoutbot. This visualization is depicted in the design.

### Add customer

Your submission should include a button to add a customer to the checkoutbot. Clicking the button should add one customer to the checkoutbot. This feature is depicted in the design as the "Add Customer" button.

### Add item

Your submission should include a button for each customer to add an item to their cart. Clicking the button should add one item to the customer's cart. This feature is depicted in the design as the "Add Item" button and is visible when hovering or focusing on a customer's row.

### Checkout customer

Your submission should include a button for each customer to checkout. Clicking the button should remove the customer from the checkoutbot. This feature is depicted in the design as the "Checkout" button and is visible when hovering or focusing on a customer's row.

## Deadline & Submission

You have a week to complete this assignment. It shouldn't take that long, but we're giving you enough time to get familiar with the project.

To begin your work, you should download this repository as a ZIP and create a new public repository. When you're ready to submit, share the repo with us and provide instructions to run your assignment.

_Note:_ **Do not fork this project**.

## Scoring Rubric

We'll be assessing the final product on the following criteria:

1. Accuracy of the UI compared to the design.
2. Functionality of the component.
3. Code quality.

## Getting Started

This is a [React.js](https://reactjs.org) project bootstrapped with [`create-react-app --template typescript`](https://create-react-app.dev/docs/adding-typescript/) and modified to provide a starting point for this assignment. You are free to update the starting point as you see fit. To get started simply:

1. Install dependancies: `npm install`
2. Run your checkoutbot
3. Run the development server: `npm run start`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.
5. Make changes in `src/` and elsewhere as needed to implement your solution.
