# Quiz Application Full Stack Solution

## Description

This is a full-stack solution for an interactive quiz application. The frontend is built with Next.js, providing a seamless user experience with server-side rendering capabilities. The backend is constructed using Node.js and Express.js, offering a robust API for user management and quiz functionality. MongoDB is used for data persistence, with Mongoose as the ODM to facilitate data modeling and validation. The entire application is deployed on Amazon Web Services (AWS) for high availability and scalability.

## Project Structure

The project is divided into two main parts:
- `frontend/`: A Next.js project implementing the UI and client-side logic.
- `backend/`: A Node.js/Express.js server providing RESTful API endpoints.

## Installation

### Backend

1. Navigate to the `backend/` directory.
2. Run `npm install` to install dependencies.
3. Create a `.env` file to store environment variables like database credentials.
4. Run `npm start` to start the server.

### Frontend

1. Navigate to the `frontend/` directory.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the Next.js application.
4. Start the application with `npm start`.

## Usage

### Backend

The backend API supports operations such as:
- User authentication (signup/login).
- Quiz question management (add/remove questions).
- Attempting quizzes and recording scores.

Detailed API documentation is available at `backend/docs/api`.

### Frontend

The frontend provides interfaces for:
- User registration and login.
- Admin interfaces to manage questions.
- User interfaces to attempt quizzes and view scores.

## Testing

Run `npm test` in both `frontend/` and `backend/` directories to execute tests.

## Contributing

Contributions are welcome. Please follow the contribution guidelines outlined in `CONTRIBUTING.md`.

## Deployment

The application is deployed on AWS. Steps for deployment include:
- Setting up an EC2 instance for the backend.
- Configuring S3 and CloudFront for frontend distribution.
- Using MongoDB Atlas for the database.

Detailed deployment instructions can be found in `DEPLOYMENT.md`.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For support or queries, reach out to [neeraj.drmz@gmail.com](neeraj.drmz@gmail.com).
