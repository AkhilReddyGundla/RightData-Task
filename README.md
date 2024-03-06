
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

