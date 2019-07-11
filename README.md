# late-night-eats
Edmonton restaurants open late at night

# User Story
It is 10:30 pm in Edmonton and people are hungry.\
A user would like to know what restaurant to go eat at.\
The restaurant must be open for the next few hours and be relatively close driving distance.
 
## Use Case 1 - suggested restaurants
1. User opens the app
2. App gets the user's location and current time
3. App searches for 3 closest restaurants that are still open
4. App displays the 3 resaturants.
5. User selects one restaurant
6. App opens a detailed view of the restaurant with map, name, and open until time.
7. User clicks the map and the user is navigated to Google maps directions (app?)


## Another  (Use Case 2)
With a group of friends...\
The app displays only a single restaurant.\
Each user can then decide to swipe right (vote) or left (pass).\
When a restaurant with enough votes is selected, a notification pops ups.

# Technical
* Gather Edmonton Restaurant data (name, open hours, address)
* Store data to MongoDb 
* /api/Restaurants?latitude=123&longitude=123
* Angular component: Restaurants
* Angular component: Restaurant
