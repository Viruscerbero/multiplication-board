# Multiplication Table Fun!

This application is a fun and interactive way for kids to learn their multiplication tables. Inspired by a classic multiplication table toy from my childhood, this program features a 10x10 grid layout where clicking on any cell displays the product of the corresponding row and column numbers.

## The App

In big screens:

<div style="text-align:center;">

![big-screen](https://github.com/user-attachments/assets/9fb66104-b054-4f72-9353-a84ac5d7055b)

</div>

In small screens:

<div style="text-align:center;">

![big-screen-mobile](https://github.com/user-attachments/assets/6a6ced72-1bb9-49fa-b461-ca656ac3e0c6)

</div>

## Features

- Covers multiplication tables from 1 to 10.
- Interactive grid layout: click any cell to see the multiplication result.
- Responsive: It looks good on mobile, tablets, and larger screens.
- This isn't a game; it's a simple, no-frills tool designed to help kids effectively memorize their multiplication tables by instantly verifying their answers. It has no distractions and is best used in small intervals several times a day.

## Why a Web Worker?

This application utilizes a Web Worker for calculating multiplication results (this is for experimentation purposes only). While not strictly necessary for this simple application, it showcases the potential of Web Workers for handling background tasks and improving responsiveness. Web Workers are a powerful feature in Javascript that allows for background processing, potentially improving performance, especially on slower devices. In this application, the Worker performs the multiplication calculation, freeing up the main thread for a smoother user experience. However, the actual performance gain might be negligible here due to the simplicity of the calculations.

## Inspiration

This application is inspired by a classic multiplication table toy that I used as a child to learn the multiplication table. I learned the table real quick this way

I hope this application brings back some fun memories and helps kids learn their multiplication tables!

## How to Use

- Clone this repository.
- cd into the `multiplication-board` directory.
- Run `yarn` and then `yarn dev` (or `npm i` and then `npm run dev`).
- Open the application in your web browser at:
  <br/>
  ➜ Local: http://localhost:5173/
  <br/>
  ➜ Network: http://192.168.0.106:5173/ (the IP address of your device might be different).
  <br/>
- Click on any cell in the grid (or use the `Tab` key to select a cell, and then press the `Space` or the `Enter` key).
- The product of the row and column numbers will be displayed in the cell.
