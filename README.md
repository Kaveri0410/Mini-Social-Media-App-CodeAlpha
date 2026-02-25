# Mini Social Media App – CodeAlpha Internship Task 2

## Project Description
This project is developed as part of **CodeAlpha Internship – Task 2**.  
It is a **Mini Social Media App** where users can create profiles, share posts, comment on posts, like posts, and follow other users.  
The project demonstrates **full-stack development** with frontend, backend, and database integration, along with **RESTful API testing** using Postman.

## Features
- **User Profiles** – Users can register and update their profile information.  
- **Posts & Comments** – Users can create posts and comment on other posts.  
- **Like/Follow System** – Users can like posts and follow other users.  
- **MongoDB Atlas Database Integration** – Stores all users, posts, comments, and follower data.  
- **RESTful APIs** – Backend APIs tested and verified using Postman.  

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js + Express.js (Django can also be used)  
- **Database:** MongoDB Atlas  
- **API Testing:** Postman  

## API Endpoints

**Authentication APIs**  
- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – Login an existing user  

**Post APIs**  
- `POST /api/posts/create` – Create a new post  
- `GET /api/posts` – Retrieve all posts  

**Like & Comment APIs**  
- `POST /api/posts/like` – Like a post  
- `POST /api/posts/comment` – Comment on a post  

**Follow API**  
- `POST /api/follow/follow` – Follow another user  

## How to Run the Project

1. Clone the repository:  
   ```bash
   git clone <your-repo-url>
