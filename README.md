# Assignment_4
1:  Our team project is a website that user can log into and propose a tweet and after the tweet has been evaluated by the members , the tweet can then be tweeted out to the whole wide web. 

2:  Some of the APIs we found were mostly related to social media since our project is based around social media.  So, we thought that a Facebook API would be a good option, the Twitter API , Reddit API, Google Calendar, and Twittercounter API.

3:  We think that we could use the Facebook API to log in to create a new account and the Facebook API feed to see what's going on for the team event or if somebody posted anything on Facebook.  The Reddit API to show a small news feed from the front page of Reddit since it is Reddit it is the front page of the web. The team might get useful information from Reddit to tweet.  The Google Calendar API so see what is in the "group club" calendar.  The Twitter API feed to see the recent tweets of the group.  And the Twittercounter API to show the user Twitter stat.

5: We initially chose to use GET Users/search for our API, because it seems like something we could implement effectively in our group project.  With this API, we can make a page that will display the group Twitter account’s tweets and all tweets that reference it. But we switched to using Twittercounter instead since this API can show the user statistics of followers and tweets without going through the Twitter 0auth.
http://twittercounter.com/pages/api

6: One issue that we have run into is acquiring the authentication for using the API to begin with.  More issues may take place if Twitter updates their API or their code, in which case our use of the API may become obsolete, rendering it completely useless.

7: The experience was a difficult one, getting the twitter authentication up and running was something that took us a while to accomplish.  Then we ran into problems trying to use JSON to create the proper format to output from Twittercounter.  However, when we have it working in the future, I believe that this API could prove very useful for displaying the information that users will need to create and manage a community Twitter account.

8: Later on, we will be able to add functionality that will submit a tweet that has been voted on by users as well as displaying tweets to and from the group.
