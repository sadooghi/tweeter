## Check live Tweeter app here :  https://serene-brushlands-88093.herokuapp.com/ 
# Project Description
Tweeter is a web app similar to Twitter which is a SPA (single page application) and lets users send their tweets to all other users.
## Functional Specifications
*	Single page app architecture.
*	Uses ajax to communicate with backend server
*	Tweets are persisted to MongoDB and survive server restart
### Page Contains:
*	Navbar
  *	fixed to top
  *	contains Compose button, which:
    *	Toggles display of inline compose box
    *	Auto-focuses the text area in the compose box
*	Tweet compose box
  *	Contains form to submit tweet, above the tweets
  *	Counts the number of characters and turns red when there is more than 140 characters
  *	Does not submit a tweet if it is empty or contain more than 140 characters
  *	Automatically refreshes tweet list when successfully submitted
*	List of tweets
  *	Order by post time descending (reverse chronological)
  *	Each tweet contains:
    *	user avatar
    *	user name
    *	user handle
    *	tweet text

## Stack Specifications
*	ES6 (Simple, client side JS)
*	jQuery (Ajax)
*	CSS3
*	Semantic HTML5 tags
*	git for version control
*	mongodb for persistence

![picture alt](https://raw.github.com/sadooghi/tweeter/master/images/tweeter_page_on_mobile.png "tweeter_page")
