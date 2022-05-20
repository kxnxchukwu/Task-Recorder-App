let eventsObj = {
  "events": [
    {
      "title": "Click Me to Edit",
      "dateStart": "2022-04-14T22:00:28.652Z",
      "dateEnd": "2022-04-14T22:10:28.652Z",
      "id": 1
    },
    {
      "title": "Learning TypeScript",
      "dateStart": "2022-04-14T19:00:28.652Z",
      "dateEnd": "2022-04-14T22:00:28.652Z",
      "id": 2
    },
    {
      "title": "Crush My Tasks at Work",
      "dateStart": "2022-04-13T09:12:14.814Z",
      "dateEnd": "2022-04-13T17:30:18.333Z",
      "id": 3
    },
    {
      "title": "Gym Time",
      "dateStart": "2022-04-10T20:00:49.761Z",
      "dateEnd": "2022-04-10T21:30:52.223Z",
      "id": 4
    },
    {
      "title": "Listen to the Front End Happy Hour Podcast",
      "dateStart": "2022-04-08T16:00:33.077Z",
      "dateEnd": "2022-04-08T17:30:37.016Z",
      "id": 5
    },
    {
      "title": "Listening to My Daily Drive on Spotify",
      "dateStart": "2022-04-14T18:50:45.473Z",
      "dateEnd": "2022-04-14T19:30:46.016Z",
      "id": 6
    },
    {
      "title": "Learning Netlify Serverless Functions.",
      "dateStart": "2022-05-20T20:10:37.830Z",
      "dateEnd": "2022-05-20T23:20:40.367Z",
      "id": 7
    }
  ]
}

exports.handler =  async function(event, context) {

  if (event.httpMethod === "POST") {
    let body = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  }

  if (event.httpMethod === "PUT") {
    let body = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(eventsObj.events)
  }
};