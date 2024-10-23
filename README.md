__Mernstack MusicApp__

This is a full-stack music streaming application developed using the MERN stack (MongoDB, Express.js, React, and Node.js) with Firebase integration for database and user authentication. The application supports two user roles: Admin and Simple User. Admins can create artists, albums, and songs, manage users by changing their roles, or delete users. Simple users can play songs, adjust the volume, and filter tracks based on different criteria.

__Features__

__Admin Features__:
-Create artists, albums, and songs.
-Delete any user.
-Change user roles (from user to admin and vice versa).

__Simple User Features__:
-Play songs.
-Change the volume.
-Apply filters to search for songs, albums, or artists.

__Other Functionalities__:
-Firebase for user authentication and database connection.
-Role-based access control (admin and user).
-Music streaming with play, pause, and volume control features.

__Technologies Used__

__Backend__: Node.js, Express.js, MongoDB (with Mongoose), Firebase (for user authentication)
__Frontend__: React (with JSX), HTML, CSS
__Other Libraries__:
Firebase Authentication and Firestore
Axios (for API requests)
React Music Player (for handling audio playback)

__Installation__

__Clone the Repository__
git clone <repository-url>
cd music-app

__Backend Setup__
cd server
npm install

__Set up Firebase__:
Create a Firebase project.
Add the firebaseConfig in the backend Firebase configuration file.
Enable Authentication and Firestore in the Firebase console.

Start the backend server: npm start

__Frontend Setup__
cd client
npm install

Add Firebase configuration for authentication in src/firebaseConfig.js.

Run the frontend app: npm start



