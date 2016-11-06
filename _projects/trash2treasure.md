---
layout: project
title: Camden Phalen | Trash2Treasure
section: portfolio

project_name: Trash2Treasure
project_categories: Code, Design
year: 2016
blurb: An online checkout system for Northeastern University’s annual Trash2Treasure sale built in Ruby on Rails.
background: true
color1: "#2F2F2F"
color2: "#898989"
color3: "#AB2D3D"
color4: "#B88D68"

images:
  - url: /assets/images/projects/trash2treasure/landing.jpg
    id: landing
    title: Landing page
    offsety: 50%
    offsetx: 0
    classes: "cp-vertical"
    modal_classes: "modal-sm"
  - url: /assets/images/projects/trash2treasure/shop.png
    id: shop
    title: Sale page
    offsety: 88%
    offsetx: 0
    classes: "cp-border cp-vertical"
    modal_classes: "modal-sm"
  - url: /assets/images/projects/trash2treasure/checkout.png
    id: checkout
    title: Customer checkout page
    offsety: 22.5%
    offsetx: 0
    classes: "cp-border cp-vertical"
    modal_classes: "modal-sm"
  - url: /assets/images/projects/trash2treasure/register.png
    id: register
    title: Seller checkout screen
    offsety: 0
    offsetx: 0
    classes: "cp-border cp-horizontal"
    modal_classes: "modal-lg"

technologies:
  list: Ruby, Rails, SQL, Haml, Sass, Coffeescript, Bootstrap, Git, Sketch
  color1: "#B02B2C"
  color2: "#F09E20"

links: 
  - display: Trash2Treasure webapp
    href: https://pacific-ravine-67111.herokuapp.com
    color1: "#AB2D3D"
    color2: "#B88D68"
  - display: Github repository
    href: https://github.com/camden11/trash2treasure
    color1: "#979797"
    color2: "#92DC8D"
  - display: About NU Trash2Treasure
    href: https://nutrash2treasure.wordpress.com/about/
    color1: "#333333"
    color2: "#00AF03"
--- 
At the end of every school year, Northeastern’s Trash2Treasure organization runs a collection of unwanted items from residents of on-campus housing. The following fall, they hold a massive sale of all the donated items, with the proceeds going to Northeastern student groups that volunteer at the sale and collection. The sale has gotten more popular every year, with revenue exceeding $11,000 for the 2016 sale. Unfortunately, this increased popularity has caused its fare share of problems. In recent years, cashiers have been unable to accommodate the massive amount of people that attend the sale, and the checkout line has become a huge bottleneck. <br><br>
I worked with the Trash2Treasure committee to try to solve this problem. My solution was an in-browser online checkout system designed to decrease checkout time by reducing the amount of work cashiers had to do to check someone out. Using my application, shoppers enter items into the app as they pick them up. When finished shopping, they tap a “ready for checkout” button, which generates a shopper number for them. Upon arriving at the register, they give their number to the cashier, who enters it into to a seller-side interface on a laptop. The cashier will be shown everything the shopper has in their cart with the price calculated automatically. This makes it so they only have to confirm the shopper has what they see on screen rather than individually determine the category and price of each item. <br><br>
The application made its debut with a trial run at the fall 2016 Trash2Treasure sale. It was used by only a small portion of shoppers, but the ones that did use it gave positive feedback. NU Trash2Treasure is planning on further integrating it into their next sale. 