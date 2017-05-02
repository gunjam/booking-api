# Booking API

The Booking API uses a Mongo database. If you are running the application locally, you will need to have a MongoDB running and will have to run the application in production mode.

If you don't run the application in production mode, the API will use memory storage instead of your MongoDB, and your data will be erased on any restart to the server.

### Step 1
Install and run [MongoDB](https://docs.mongodb.com/manual/installation/).

### Step 2
Fork the Booking API repo, clone it to your machine and run npm install.
```
npm install
```

### Step 3
Start the application.
```
NODE_ENV=production npm start
```

### Step 4
Navigate to the API explorer where you can post some data.

```
http://localhost:3000/explorer/
```

### Step 5
- Click on a resource, eg: Location.
- Click post.
- Enter some data in the same format as the example, and hit the 'try it out' button. ID's are automatically generated.

```
{
  "name": "Discovery One"
}
```
See below to see the relationships of the models.

## Model relationships
> Booking `belongs_to` Room

> Feature `belongs_to` Room

> Location `has_many` Rooms

> Room `belongs_to` Location  
> Room `has_many` Bookings  
> Room `has_many` Features

## Environment Variables
`MONGODB_URI` - URI for your production database.  
`PORT` - Determines port, defaults to 3000.

