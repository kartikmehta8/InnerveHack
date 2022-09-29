<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/193116150-321622a7-8ac3-4b96-97c3-56dfad568a80.png" alt="BANNER" />
</p>

## Why Mottainai?
More than 10 million tonnes of waste are collected each year, and while 40 to 50% of it should be recycled, the reality is different & while governments are trying to improve this, we should not forget that a big part doesn't even get to be collected.
Mottainai is targeting two types of people,
- Who has never stored an unused object for years, not knowing what to do with it?
- Who has never found themselves with a cumbersome broken object and dreamed of the bulky waste collection day or had to pay a fee to get rid of it?

Well, did you know that some communities and citizens are spending hours searching for an object like yours? They scrutinize the street and spend unnecessary gas & some are willing to give a second life to old materials & others want to earn a bit of money by selling the worthy components and materials.

## What it does?
Mottainai connects the regular citizens, dreaming to get rid of their usable but worthless (for them) objects or even broken ones, with those who could seek benefit from it. From a family trying to get more furniture for their household to companies trying to expand their customer target proficiency and reach by proposing their services.

## How to use?
The Mottainai Project serves two types of clients, community members with large materials to be recycled and the recycling companies or government organizations that collect these materials.

- Users who have large materials they intend to recycle, like household furniture, electronics, or metals, can click on the "Create New Post" button at the bottom right-hand corner of the screen. It would bring up a pop-up for them to key in their details and submit a photograph of the item they intend to recycle. 
- Upon submission, this data would be visible on the map, allowing recycling companies and government organizations to know where each individual is located with necessary information.
- View the pickup timeline and ETA of reaching your location.
- And if you are feeling lucky, the ability to give that post some likes and share it with your friends if you think they might be interested in buying some old stuff. Maybe for their secret backyard project?
- Be able to track your pickup Trucks live, get timelines, and show relative timings as to when the pickup would arrive at your location. Mottainai can schedule your pickup timings using the calendar. (prospect)
- If you want a more customizable approach and more information for the trip, head to the driver section and add details to get proper driver instructions & ETAs and rest stops for the journey. All are visualized in a beautiful graph!
- Companies and public organizations have the additional functionality of being able to take advantage of the here-matrix-route technology that
  - Calculates for them the distance from each collectible object in their region.
  - Plan their day, reach out to their potential customer, to take care of their non-interesting waste. 
  - Contact customers on the platform and send messages to discuss the pickup details. (prospect)

## How we built it?
* Mottainai was primarily built with the MERN Stack (MongoDB, ExpressJS, ReactJS, and NodeJS).
* The Maps were integrated with HERE API. As HERE didn't have a React abstraction, we essentially created an ORM for the same. Hence, just using the official minified js files, we created a wrapper for React & its components. (this was the biggest hurdle for us)
* Used various HERE layers - for traffic, satellite view, truck routing, trip ETA, etc.
* HERE Features used,
  * Interactive Maps and Vector Tile
  * Geocoding and Reverse Geocoding Search
  * Matrix Routing
  * Fleet Telematics - Waypoint Sequencing
  * Fleet Telematics - Tour Planning 


```
For the sake of simplicity, the READMEs & description are divided into the concerned folders of the Project Structure.
```
