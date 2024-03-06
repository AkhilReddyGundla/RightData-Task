
# Project Title Task

A simple frontend project to showcase my skills



# Getting Started
To get a local copy up and running, please follow these simple steps.

## Prerequisites
Here is what you need to be able to run project  
+ Node.js
## Development 
### Setup
1. Clone the repo into a public GitHub repository (or fork https://github.com/AkhilReddyGundla/RightData-task).

2. Install Packages with npm
``` npm install ```

3. Run (in development mode)
``` npm run dev``` 
## API Reference

#### Get all Users 

```http
  GET https://reqres.in/api/users?page=2
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page=2` | `number` | **Required**. Your API key |

#### Get Single User

```http
  GET /api/users/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of user to fetch |

#### User Registration

```http
  POST /api/register
```

#### User Login

```http
    POST /api/login
```

