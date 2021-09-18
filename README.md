# NWN App - News Wire Network Week 3 Weekend Challenge

Team: Max Anderson and Johnny See

## The Code

This is a News Wire Network App that fetch external API with Axios, the fetching data is News Around The World. The code is written in JavaScript with library React using React Hooks, which allows us to use state and other features without writing a class.

### User Story

```
As a User
In order to get an overview of news
I would like to see "Top Headlines"
```

```
As a User
In order to read interesting news
I would like to be able to search for news
```

```
As an Owner
In order to get people's attention
I would like to display "Top Headlines"
```

## Dependencies

React, Cypress and start-server-and test for testing, Axios for API Calls, Semantic-UI for styling.

## Setup

1. Clone the Git Repo URL.

2. Install dependencies using yarn.

3. Get your personal API-keys from newsapi.org and put in a .env file in the root folder like this:

```REACT_APP_WEATHER_API_KEY = API-key REACT_APP_LOCATION_API_KEY = API-key```

## Instructions

1. Run `yarn cypress` in terminal to check tests

2. Run `yarn start` in terminal to test manually

3. Check results on the browser.

## Acknowledgements

We had some struggles implementing the search functionality.

Since, we haven't gone through Redux + useSelector and useDispatch we disregarded that for a bonus thing if we got some extra time.

## Updates / Improvements

Implement the whole search functioncality.

Test React Components using Jest.

Adding more styling with Semantic-UI.

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
