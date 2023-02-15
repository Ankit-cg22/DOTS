<h1>DOTS</h1>
A camping blog app made using MERN tech stack. This platform helps wanderers share and know about camping sites . One can share about their camping location and upload its location along with the blog. Others can locate that site with one click .

<h2> Features </h2>

- Create a post
- Edit a post
- Like a post
- Delete a post
- User account functionality
- JWT authentication
- Pagination
- Search by tag
- Comments
- In built location picker with google maps and opencage api 
- Seach locations and locate current location  
- Backend caching using redis 

<h2>Tech/Frameworks/Packages used </h2>

<h3> Frontend </h3>

- React : JS framework.
- React router : To route to different pages.
- Redux : State management tool.
- Redux-thunk : Redux middleware to handle asynchronous actions.
- Axios : To make api requests .
- Material-ui : To render various components.
- Moment : To work with date and time.
- react-file-base64 : To convert files to base64.

<h3>Backend</h3>

- ExpressJS : NodeJS framework for handling backend requests .
- Mongoose : For designing schemas and models for the database.
- MongoDB : Used as database.
- jsonwebtoken : For JWT authentication
- cors : cross origin resource sharing
- redis : for caching recent database fetches 

<h2> Work flow of operations </h2>

![Work Flow](https://user-images.githubusercontent.com/77494560/132367450-86cd5772-dca4-4ec5-b142-fba4c2b10a56.png)


<h2> How to run locally </h2>

```
 $ git clone https://github.com/Ankit-cg22/MERN-Blog-App
  
 $ cd MERN-Blog-App
  
```

- Create a .env file .
```
 CONNECTION_URL= <set Mongo DB url>
 
```
- Run app on following url

```
 http://localhost:3000/
```

<h2>Author</h2>

[@Ankit Das](https://github.com/Ankit-cg22)


