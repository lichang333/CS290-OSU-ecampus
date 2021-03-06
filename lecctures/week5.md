> http://eecs.oregonstate.edu/ecampus-video/CS290/core-content/js-html/js-html.html



### 1. HW Assignment: DOM and Events

For this assignment you should submit a single zip file that contains the following two files:

index.html
script.js
index.html should be a skeleton HTML page. So it should have the following tags:

doctype
html
head
meta
title
body
script
If you were to open index.html without including the associated JavaScript it should be entirely blank.

You should then use JavaScript to create all of the content of this page and append it to the body of the page. That content should include:

A 4x4 table
The top row should be a header row with header cells
The 4 header cells, from left to right should say "Header 1", "Header 2" ... "Header 4
The non header cells should contain their position. The upper left cell should contain the text "1, 1", the cell to its right "2, 1", the cell below it "1, 2" and so on.
4 directional buttons (up, down, left right)
A button labeled "Mark Cell"
When the page is loaded the upper left, non-header cell of the table should be 'selected'. This is denoted by it having a thicker border than the other cells. If you push the directional buttons other cells should be selected instead. So if you press the right button, cell 1,1 should no longer be selected and 2,1 should be selected instead.

If you are already on the top row and hit 'up' nothing should happen (you should not be able to move into the header cells). Likewise if you are all the way right and hit right or all the way at the bottom and hit down.

Hitting the "Mark Cell" button should permanently change the background of the selected cell to yellow. This should persist even after other cells are selected or marked.

Suggestion: If you are having a lot of trouble getting the page populated the way you want using JavaScript, just manually make the HTML so that you can continue to work on the rest of the assignment involving selecting and marking cells.

Note: When generating content for the page you will not get credit for simply using the innerHTML property of the body element to parse a string of HTML content. The purpose is to use the process of creating and appending element nodes to the document.

Previous Next


### 2.How-To Guide

Overview
For this assignment you should do two things.

The first is to research and learn about a web API or library. You should understand, what it does, how to use it to accomplish that task and have a basic idea about what kinds of problems you can run into and how to solve those problems. What this looks like for different APIs is going to be very different. However, do expect to put a fair amount of work into this stage even though it makes up a small portion of the description here. 

After you have done the research and picked up the API you want to work on, you need to submit a pdf file of your proposal (no longer than one page) on Canvas before the end of week 6. Briefly describe what topic you want to work on in your proposal.  It will take 20% of the total points of how-to project and the grading is just based on whether you submit it or not.  This is to make sure you pick up a topic before that time. 

The second thing you need to do is to construct a website which is a how-to guide on your particular API or library. Again, this is going to vary quite a bit based on library or API.

Note, the final website is not due until Mar 2nd, which is middle of the week.

 

Selecting An API
Historically students have had a more difficult time picking an API than they had actually writing the guide, and got into the trouble when a week had gone by and they still haven't picked an API.

Technical enough API:

You need to pick an API or library which will allow you to write a significant amount of sample code in your how-to. If you are not writing a lot of code to demonstrate things, then it is probably not technical enough.
For example, a color scheme generator (Links to an external site.) is a web related tool and is actually often quite useful in web development but it is NOT technical enough for the how-to guide. You can show a couple code samples about how to include the generated files in your site but that is about it.
In contrast, the Steam Web API (Links to an external site.) allows you to get information about current video games and users using the service via HTTP calls. Students have used this to produce excellent how-to guides in the past. Note that most pages include a code sample and spend most of the page detailing that code sample.
See Appendix for a long list of Approved APIs and examples from previous terms. Also for a list of APIs that are not allowed or technical enough, and some more suggestions!
NOTE: If you are not certain if the API you picked is technical enough, make sure to contact TAs by posting a question on Piazza API FAQ/Approval thread so that they could verify it and give appropriate feedback.

 

Alternative HOW-TO Topics

Emulating classes with private and public members with getters and setters using closures in JavaScript.
Using the Sass (Links to an external site.) or Less (Links to an external site.) CSS extensions.
Visualizations using D3.js (Links to an external site.)
 

Content of the How-to
The how-to should focus on areas which are lacking in the official documentation. For example, if the documentation has a great getting started guide but lacks a reference for the more common functions or calls, you could write the reference documentation. Likewise, if it has a great reference but no getting started guide, you could write a getting started guide. If the documentation is amazing, then you should be able to get up to speed quickly and maybe combine the API and write about the process of, for example, writing a JavaScript library that leverages the API.

It should consist of roughly 1/4 code examples and 3/4 text explaining those examples or explaining general concepts. If you are working with a library that deals with the UI then obviously pictures will be a given and will substantially extend the length of the how to. If it were converted to a well formatted document it would usually take at least 5 pages to offer a reasonably thorough guide in a particular area. 

It should start with a link to the official page where one can find the software and view the existing documentation.

You are welcome to use any thrid-party libraries (like Bootstrap for CSS or jQuery for UI interactions) or tools to make the site. We are not grading the how-to on its HTML. We are grading it based on the content. However, if the styling makes it very difficult to tell what is code and what is plain text, that will be difficult to read and could result in lost points. Likewise, if you don't clearly list things which are in lists or use tables when displaying tabular data, those are issues that can also affect the readability of the how-to.

So while we are not grading on aesthetics, if they get in the way of understanding the content then that is a problem. 

You should NOT simply paraphrase existing documentation. There is already good documentation for installing, just link to that from your documentation, do not copy or paraphrase it.

You should fill in gaps or discuss problems that one might run into which are not addressed in the official documentation.

If you want to write about a very large framework or tool, try to focus on a small part of it so you can still have enough complex technical material to write about. If you focus on the big picture it is very easy to end up not needing to actually get into any meaningful implementation.

We want to see that you actually got the API or library up and running and did some coding with it.

You are encouraged to share these with each other as there are a lot of neat things out there and this will hopefully be a way for you all to discover and learn how to use some exciting new tools.

 

Appendix

API Whitelist (these do not require any approval)

Reddit API (Links to an external site.)
Pinterest API (Links to an external site.)
Facebook APIs (Links to an external site.)
BLS Public Data API (Links to an external site.)
World Bank Indicators API (Links to an external site.) 
Socrate Govt. Data API (Links to an external site.)
BreweryDB (Links to an external site.)
Google Fit API (Links to an external site.)
Dropbox API (Links to an external site.)
XTM Translation Management System API (Links to an external site.)
Olark Chatbot API (Links to an external site.)
(...more listed at the end of this page...)
Examples from previous terms (also approved)

Twitch API (Links to an external site.)
Wikipedia API (Links to an external site.)
IBM’s Watson API: Emotion Analysis (Links to an external site.)
BreweryDB (Links to an external site.)
Star Wars API (Links to an external site.)
Twitter Bot Tutorial (Links to an external site.)
API Blacklist (these are not allowed for the HOW-TO project)

Google Maps API
Netflix Roulette API (Links to an external site.)
Twilio API: https://www.twilio.com/docs/api/rest (Links to an external site.) 
Stripe API: https://stripe.com/docs/api, (Links to an external site.) 
BusinessUSA: https://business.usa.gov/developer (Links to an external site.) 
Zillow: http://www.zillow.com/howto/api/APIOverview.htm (Links to an external site.) 
Hubspot: http://developers.hubspot.com/docs/overview (Links to an external site.) 
Look here for other API Ideas (likely to need approval):

ProgrammableWeb.com API Directory (Links to an external site.)
Top 10 Machine Learning APIs (Links to an external site.)
Quora: What are some cool/fun APIs? (Links to an external site.)
Collected list of Public APIs on Github (Links to an external site.)
Quora: What are some easy APIs? (Links to an external site.)
 

Off-OSU Hosting: Typically you will host your webpages on the engineering server.  Some people have used Github Pages (Links to an external site.) in the past to host their HOW-TO guides. Since these are public, it also helps them build a "public portfolio" of their work that they can share with future employers. For grading, all we care is that you do your own work and the URL you submit is accessible when we try to access it. 

More pre-approved APIs

Yelp API: https://www.yelp.com/developers/v2 (Links to an external site.) 
Spotify API: https://developer.spotify.com/web-api/  (Links to an external site.) 
Goodreads https://www.goodreads.com/api (Links to an external site.) 
Soundcloud API: https://developers.soundcloud.com/docs/api/guide (Links to an external site.) (Warning: used to have a 2-week approval period)
MSFT Cognitive Services: https://www.microsoft.com/cognitive-services/en-us/computer-vision-api (Links to an external site.) 
USPTO: https://developer.uspto.gov/api-catalog (Links to an external site.) 
Microstrat: https://macrostrat.org/#api (Links to an external site.) 
Mozscape: https://moz.com/products/api (Links to an external site.) 
Artsy: https://developers.artsy.net (Links to an external site.) 
Riot Games: https://developer.riotgames.com/api/methods (Links to an external site.) 
Etsy API: https://www.etsy.com/developers/ (Links to an external site.) 
Petfinder: https://www.petfinder.com/developers/api-docs/ (Links to an external site.) 
NASA API: https://api.nasa.gov/index.html (Links to an external site.) 
Mozilla A-Frame: https://aframe.io/ (Links to an external site.) 
Dronekit: http://python.dronekit.io/automodule.html  (Links to an external site.) 
Deck of Cards: http://deckofcardsapi.com/ (Links to an external site.) 
USDA Food Composition Database NDB: https://ndb.nal.usda.gov/ndb/api/doc (Links to an external site.) 
Marvel Comics API: https://developer.marvel.com (Links to an external site.) 
RocketLeague: http://documentation.rocketleaguestats.com/ (Links to an external site.) 
GuildWars: https://wiki.guildwars2.com/wiki/API:Main (Links to an external site.) 
Slack: https://api.slack.com/rtm  (Links to an external site.) 
Google Prediction API: https://cloud.google.com/prediction/ (Links to an external site.) 
World Bank Climate API: https://datahelpdesk.worldbank.org/knowledgebase/articles/902061-climate-data-api (Links to an external site.) 
Mycroft AI: https://adapt.mycroft.ai/ (Links to an external site.)


### 3.How-To proposal

Please upload your proposal on Canvas.  Note that if you choose topics from the "white list", you do not need to get approval from TA on Piazza.  Otherwise, you are suggested to get approval of your topic before you submit the proposal.
