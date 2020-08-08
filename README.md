# Frontend

## Installation
Use the pakage manager [npm](https://www.npmjs.com/) to install the frontend React app.
Make sure you are at the frontend project directory `sense-and-art-frontend`
```
npm install
npm start
```

## Where the HTTP request is made
At `sense-and-art-frontend/src/App.js`

```
componentDidMount() {
    axios.get('localhost:5000/images')
        .then(response => {
            console.log(response);
        });
}
```

### Expected Result
Open the react app in a chrome browser, right-click and choose 'Inspect', go to the 'Console' tab.
You should see a response object with data fetched from the backend inside.