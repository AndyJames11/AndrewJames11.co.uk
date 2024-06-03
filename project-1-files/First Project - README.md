# Andrew Harvey's Portfolio Website

[View the live project here.](https://andyjames11.github.io/First-Project/)

This website is for my Milestone 1 project in my Web Development course with CodeInstitute. I decided to create a portfolio site which has a simple landing page, a Cafe style website, and a Gallery of photos from my recent cup final football match. The purpose of the site is purely to demonstrate my different skills and I have tried to showcase a variety of different elements and styles in order to show what I am capable of to any potential recruiters down the line. I have experimented with different techniques e.g. media queries and collapsible menus which only appear when the page is shrunk. In the future I plan to add some more pages to the site for example, one page dedicated to showing off my Discord Bot which I built in JavaScript, and another page with some basic details about me and a link to my CV.

# User Experience (UX)

* ##  User Stories
    * #### First time visitor goals
        * As a first time visitor, I want to be able to clearly see what I am looking at. I want to be able to understand what the website is for and would like the page to be interesting.
        * As a first time visitor, I want to be able to easily navigate through the website and find the pages and information I am looking for without any difficulty.
        * As a first time user, I want to be able to find more information about the developer. I want to see social media links so that I can understand who built the site and what type of person they are.

    * #### Returning visitor goals
        * As a returning visitor, I want to find contact information for the developer so I can get in touch with them if I have any questions.
        * As a returning visitor, I want to see if there are any new images or videos added to the Gallery page.

    * #### Frequent visitor goals
        * As a frequent visitor, I want to see if there are any newly added pages or features.
        * As a frequent visitor, I want to see if the developer is open to work.

* ## Design
    * #### Colour Scheme
        * The main colours used in my portfolio are black and white. I think these colours look very sleek and modern and they tend to be very easy to read.
    
    * #### Typography
        * The fonts used in my portfolio are Lato and Oswald. Lato is the main font used, with some headers and the 'My Projects' logo using Oswald. I like both of these fonts and I think they are eye catching but also very clean and easy to read.

    * #### Imagery
        * I think the main image is very important for a webpage. It needs to grab the attention of the user without being too distracting from the content. For my landing page, I have chosen to use a picture of myself at a football match as I like the colours and makes gives the page feel warm. It also shows what I look like which is useful for recruiters, and it shows me doing a hobby so you get an idea about my personality. For the cafe page, I opted to use a minimalist, slightly blurred, real cafe image as I think it looks very modern and clean. For the booking pages, I opted to use a warm non-distracting image so the booking form elements were clearly visible with a nice to look at image in the background.

    * #### Wireframes
        * Home page wireframe - [View](wireframes/Home%20page.png)
        * Cafe page wireframe - [View](wireframes/Cafe%20Menu%20page.png)
        * Cafe booking page wireframe - [View](wireframes/Booking%20page.png)
        * Booking confirmation page wireframe - [View](wireframes/Booking%20Confirmation%20page%20copy.png)
        * Cup Final Gallery page wireframe - [View](wireframes/Gallery%20Page.png)

# Features
* #### Navbars and footers
* #### Responsive when page is shrunk
* #### Button that links to a booking form page
* #### Booking form with mutliple input types, all required with submit button that links to booking confirmation page
* #### Gallery of photos taken at football match with links to the actual image page on flickr
* #### Embedded YouTube and Veo videos
* #### Links to socials and to other Github projects in footer

# Technologies Used

## Languages Used
* #### [HTML5](https://en.wikipedia.org/wiki/HTML5)
* #### [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

## Frameworks, Libraries & Programs Used
* #### [FontAwesome](https://fontawesome.com/)
    * #### FontAwesome was used to add the icons for my social links in the footer of the pages.
* #### [Google Fonts](https://fonts.google.com/)
    * #### Google Fonts were used to import the 'Lato' and 'Oswald' fonts into the CSS files. The fonts were used throughout the project.
* #### [Git](https://git-scm.com/)
    * #### Git was used for version control by utilizing Gitpod terminal to commit to Git and Push to GitHub.
* #### [GitHub](https://www.github.com/)
    * #### GitHub is used to store the project's code after being pushed from Git. It is also used to store the repo for my Discord Bot which is linked in the website.
* #### [ReplIt](https://replit.com/)
    * #### ReplIt was used to build the early versions of the webpage. The majority of the landing page was built in ReplIt until I switched over to CodeAnywhere as was suggested by CodeInstitute.
* #### [CodeAnywhere](https://codeanywhere.com/)
    * #### CodeAnywhere was used breifly to begin designing the Cafe page, however I ran out of development hours and so it was suggested by a CodeInstitute tutor that I switch to GitPod.
* #### [GitPod](https://www.gitpod.io/)
    * #### GitPod is the program I am using now for all of my coding for this project. It uses VS Code as its IDE and links to GitHub for code commits and pushing code.

# Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Opera and Microsoft Edge.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 15 Pro and iPad Air.
-   Inspect Element's built in device type viewer was used to ensure functionality on different screen sizes.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and colleagues were asked to review the site and point out any bugs. Any bugs found are documented in the Known Bugs section below.

### Functional Testing

-   Tested all features on all pages. All working as expected


    | Action                                                    | Expected Result                                                           | Pass or Fail      |
    |:----------------------------------------------------------|:-------------------------------------------------------------------------:|------------------:|
    | Clicking on 'My Projects' logo                            | Takes me back to the home page                                            | Pass on all pages |
    | Click links in Navbar                                     | Links take me to the correct page                                         | Pass on all pages |
    | Click links in footer                                     | Links take me to the correct page                                         | Pass on all pages |
    | Click 'Book' button on Cafe page                          | Directed to a booking form page                                           | Pass              |
    | Leaving options blank on booking form                     | Prevented from making a booking without all fields filled                 | Pass              |
    | Clicking 'Book!' button on Booking form                   | Redirected to a confirmation page                                         | Pass              |
    | Clicking play on embedded YouTube videos in Gallery page  | Video should begin playing                                                | Pass              |
    | Clicking on images in Gallery page                        | Should direct me to the correct image on the original Flickr page         | Pass              |
    | Resizing the webpages                                     | Content should shrink and grow to be visible on different screen sizes    | Pass on all pages |


### Performance Optimisation

-   Images used have been scaled down in order to reduce load times. Original photos are 25-50% higher resolution than the ones used in the website. Also converted image type to .webp which helps speed up loading time.
-   Deferred loading of AwesomeFont script using **async** which increases loading speed of the website.
-   Preloaded images as a priority to further reduce load times.
-   "Lazy" loading of images on Gallery page to ensure high performance.
-   Use of Chrome's built in Lighthouse feature to check performance of each page ensuring over 95% performance on all pages on Desktop, and over 85% on Mobile (Gallery page is lower performance due to large videos being embedded). 
    - Lightouse Results:
        -   Home page: [Desktop](/lighthouse/home-results.png) - [Mobile](/lighthouse/home-results(mobile).png)
        -   Cafe page: [Desktop](/lighthouse/cafe-results.png) - [Mobile](/lighthouse/cafe-results(mobile).png)
        -   Booking page: [Desktop](/lighthouse/booking-results.png) - [Mobile](/lighthouse/booking-results(mobile).png)
        -   Confirmation page: [Desktop](/lighthouse/confirmation-results.png) - [Mobile](/lighthouse/confirmation-results(mobile).png)
        -   Gallery page: [Desktop](/lighthouse/gallery-results.png) - [Mobile](/lighthouse/gallery-results(mobile).png)


### Code Testing using W3 Validation Service for [HTML](https://validator.w3.org/#validate_by_input) and [CSS](https://jigsaw.w3.org/css-validator/#validate_by_input)

-   #### Home Page: [HTML](/code-validation/index.html.png) - [CSS](/code-validation/style.css.png)
-   #### Cafe Home Page: [HTML](/code-validation/cafe.html.png) - [CSS](/code-validation/cafe-styles.css.png)
-   #### Cafe Booking Page: [HTML](/code-validation/cafe-booking.html.png) - [CSS](/code-validation/booking-styles.css.png)
-   #### Cafe Booking Confirmation Page: [HTML](/code-validation/confirmation.html.png) - [CSS](/code-validation/confirmation-styles.css.png)
-   #### Gallery Page: [HTML](/code-validation/gallery.html.png) - [CSS](/code-validation/gallery-styles.css.png)

### Known Bugs

-   On some mobile devices, the floating text on the landing/home page covers a small part of the top Navbar. **FIXED 12/04/2022**
-   On some mobile devices, scrolling down on the landing/home page can result in being unable to scroll back up the page.
-   Booking form can be difficult to use on very small devices. **FIXED 11/04/2022**
-   Booking form fields allow for use of special characters and do not check if the user has provided a valid phone number or email address. It is also possible to set the date and time to a historic value.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/AndyJames11/First-Project)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" Section.
4. Under "Source", click the dropdown called "Deploy from a branch" and select "main".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://andyjames11.github.io/First-Project/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/AndyJames11/First-Project)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/AndyJames11/First-Project.git
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/AndyJames11/First-Project.git
> Cloning into `First-Project-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   The full-screen hero image and navbar code came from the LoveRunning activity in CodeInstitute

-   [CodeInstitute README.md sample](https://github.com/Code-Institute-Solutions/SampleREADME?tab=readme-ov-file) was very useful when writing this README file as it gave me prompts as to what I should add, and showed a good way of formatting the content. 

-   All content was written by me with some snippets of code coming from [Stack Overflow](https://www.stackoverflow.com) and [W3schools](https://www.w3schools.com). The code used was then edited with parts added/changed. Code that remains unchanged is shown below:

1.
```
* {
  margin:0;
  padding:0;
  border:0;
}
```

2.  [This code](https://www.w3schools.com/howto/howto_css_two_columns.asp). Most of this has been edited, but the code that remains is:
```
.row {
  display: flex;
}

.column {
  flex: 50%;
}
``` 
and
```
<div class="row">
  <div class="column"></div>
  <div class="column"></div>
</div>
```

3.  I used code on [this page](https://codeburst.io/how-to-make-a-collapsible-menu-using-only-css-a1cd805b1390) to understand how to create a collapsible menu in my website's top navbar. I used the code as a base to understand how it works, and then re-wrote it to fit my needs. Some small pieces of code remains the same, for example: 
``` 
.collapsible-menu ul {
    list-style-type: none;
    padding: 0;
} 
```
however, all code from the page has been re-written to fit better with my website and the theming of it.  

### Media

-   The image used in the landing/home page is of me from a charity football match. Photo was taken by a friend. [Link to full size image.](https://live.staticflickr.com/65535/53616615688_5a3a394b10_k.jpg)

-   The image used in the Cafe page was taken by Petr Sevcovic and was downloaded from Unsplash [here.](https://unsplash.com/photos/people-inside-cafe-qE1jxYXiwOA)

-   The image used in the Booking and Confirmation pages was uploaded as free-to-use to Pixabay. Link to the original picture is [here.](https://www.pexels.com/photo/black-rules-note-beside-white-coffee-cup-459458/)

-   The images used in the Gallery page were taking from our cup final on the 5th April 2024. [This is the cameraman's twitter post](https://twitter.com/localbusdriver/status/1776556651157377437?s=46&t=JTqdeutd6qOx9ci-LK-KuQ) and [this is the link to the original photos.](https://www.flickr.com/photos/localbusdriver/albums/72177720316042414)

-   The full match video footage on the Gallery page is embedded from the VEO website. [Game 1](https://app.veo.co/matches/20240405-af895f17-aebe-4e5d-898d-0fb17c9c1cb5-31a51dff/?highlight=3b361495-e901-4eca-85bb-c021f1021588&scroll=MT) and [Game 2](https://app.veo.co/matches/20240414-a45af17c-4934-4907-b91f-179b44239aab-c5115a37/)

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   [W3schools.com](W3schools.com) and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) as I used both countless times to gain a better understanding of things such as background-position, floats, flexboxes etc.

-   Google was incredibly helpful for very specific things that I got stuck on during the project. I had to use Google many times to figure out why my code was not working or to figure out how to perform an action in CSS.

-   Tutor support at Code Institute for their support.#   A n d r e w J a m e s 1 1 . c o . u k  
 