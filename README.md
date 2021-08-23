# bearer-auth
# LAB - 07
---
### Deployment Test

###### Author: Ibrahem Alomari

* ##### [Actions](https://github.com/ibrahemomari/bearer-auth/actions)
* ##### [Pull Request](https://github.com/ibrahemomari/bearer-auth/pull/1)
* ##### [Heroku](https://ibrahem-basic-api-server.herokuapp.com/)

---
###### Setup


### `.env`
 > PORT: 8000
NODE_ENV=test
DATABASE_URL=postgres://localhost:5432/lab7

---

###### Running the app:

* ####  `npm start` , `nodemon`

* #### Endpoint: */signin*
    * **Returns Object**
`
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpaGFtIGtoYWxvb2YiLCJpYXQiOjE2Mjk3Mzg5NTJ9.koLzMdlNHr_HBru78azrm6Wj4U47qqqdReJ-zY7vuAM",
    "id": 1,
    "username": "siham khaloof",
    "password": "$2b$10$Bpqii3WHPlMJnhHpXhE7eejMuaYEERcDOWjt4Z43rdT7bdhNPx1mG",
    "createdAt": "2021-08-23T17:14:22.725Z",
    "updatedAt": "2021-08-23T17:14:22.725Z"
}

`


* #### Endpoint: */signup*
* **Returns Object**
`
{
    "user": {
        "_id": 1,
        "username": "siham khaloof"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpaGFtIGtoYWxvb2YiLCJpYXQiOjE2Mjk3Mzg4NjJ9.d9aHKgr7vkhzTU_7KsbVxv_LauSk-wLj-dynQUapuhQ"
}
`

* #### Endpoint: */users*

`
[
    "siham khaloof",
    "ali",
    "ahmad"
]

`
* #### Endpoint: */secret*

`
Welcome to the secret area!
`
---

#### Tests
Unit Tests: `npm run test`


---

#### UML

![](bearer.jpg)