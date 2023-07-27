# Contact-App

### Key Features:
1. Create Contacts: Users can easily add new contacts to the system, capturing all essential details effortlessly.

2. Update Contacts: Need to modify contact information? No problem! Our app allows users to update contact details with ease, ensuring data remains up-to-date.

3. Delete Contacts: If a contact becomes obsolete or is no longer needed, users can effortlessly remove it from their list of contacts.

4. Robust Backend: The backend of this project is built on MongoDB, a reliable NoSQL database, providing a strong foundation for data handling while ensuring the privacy of your contacts.

5. Access Token Security: For enhanced security, we utilize the ACCESS_TOKEN_SECRET stored in the environment file to sign access tokens used during the login process. This ensures that only authorized users can access and manipulate their contacts.

6. Configurable Port: The project is designed to listen on the port specified in the PORT variable within the environment file. This allows you to easily configure the listening port as per your deployment needs.

### How to Get Started:
1. Clone the repository to your local machine.
```
git clone https://github.com/your-username/contact-app-backend.git
```

2. Install the required dependencies.
```
cd contact-app-backend
npm install
```

3. Configure MongoDB:
   - Set up a MongoDB instance either locally or using a cloud-based service.
   - Update the CONNECTION_STRING variable in the environment file with your MongoDB connection string.

4. Configure Access Token Secret:
   - Update the ACCESS_TOKEN_SECRET variable in the environment file with a secure random string used for token signing.

5. Configure Listening Port:
   - Set the PORT variable in the environment file to specify the desired port for the backend to listen on.

6. Run the Application:
```
npm start
```
