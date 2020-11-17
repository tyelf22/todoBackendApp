# Todo App Backend

This is an API for Creating, Reading, Updating, and Deleting
todos using mongoDB and nodejs.


## Install

    npm install

## Run the app

    npm start


# Products Endpoints

The Endpoints for CRUD is described below.

## Return all products

### Request
    GET /todos

#### Response

```json
[
    {
        "todo": "Finish Homework",
        "category": "School",
        "complete": false
    },

    {
        "todo": "Buy Bread",
        "category": "Grocery",
        "complete": false
    }
]
```

## Return specific Todo

### Request
    GET /todos/:id

#### Response

```json
{
    "id": "4312b117-2a4d-4059-b341-70b0ada893bb",
    "todo": "Buy Bread",
    "category": "Grocery",
    "complete": false
}
```

## Create new todo

### Request
    Post /todos

```json
{
    "todo": "Study",
    "category": "School",
    "complete": false
}
```
    
#### Response

```json
{
    "todo":"Study",
    "category":"School",
    "complete": false
}
```

## Delete Todo

### Request
    Delete /todos/:id

    
#### Response

[Item that was deleted]


