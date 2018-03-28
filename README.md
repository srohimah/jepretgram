# jepretgram

## REST API

List of user routes:

| Route         | HTTP | Description       |
|---------------|------|-------------------|
|users/signup   | POST | Create a user     |
|users/signin   | POST | user signin       |

List of photo routes:

| Route         | HTTP   | Description                         |
|---------------|--------|-------------------------------------|
|/photo/        | POST   | Share photo with caption            |
|/photo/        | GET    | Display all photo                   |
|/photo/:id     | DELETE | Delete photo                        |
|/photo/:id     | PUT    | Edit Caption                        |


## Usage
With only npm:
```
npm install
npm start
npm run dev
```
