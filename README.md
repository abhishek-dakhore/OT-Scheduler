OT-Scheduler/
│
├── index.html # Landing page
├── user/
│ ├── login.html # Patient login
│ ├── register.html # Patient registration
│ └── userdashboard.html # Patient dashboard
├── admin/
│ ├── adminLogin.html # Admin login
│ └── admindashboard.html # Admin dashboard
├── assets/
│ ├── css/
│ │ ├── style.css # Global styles
│ │ ├── user.css # User-specific styles
│ │ └── admin.css # Admin-specific styles
│ └── js/
│ ├── firebase-config.js # Firebase config (or inline if embedded)
│ ├── user/
│ │ ├── login.js # (optional) Separate JS for login
│ │ └── register.js # (optional) Separate JS for registration
│ └── admin/
│ └── admin-login.js # (optional) Admin login logic


---

## 🔧 Features

### 👨‍⚕️ Admin Module
- Login & Dashboard
- Add, view, and remove doctors
- Schedule OT with full details
- View all patients and surgeries
- Real-time analytics of OT operations
- Logout functionality

### 👤 User Module
- User registration & login
- Submit surgery requests
- View assigned surgery details
- View medical history
- View list of doctors
- Logout functionality

---

## 🔐 Firebase Services Used

- **Authentication**: Email & password-based sign-up/login
- **Cloud Firestore**: Store user data, doctors, OT schedules, history, and requests
- **Hosting (optional)**: Can be used to deploy the site

---

## 🔥 Firebase Setup Instructions

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Enable **Authentication** (Email/Password).
3. Create Firestore Database in **Test Mode** or set appropriate **rules** (see below).
4. Copy your Firebase config and replace in `firebase-config.js` or embed inline.
5. Deploy if needed using Firebase Hosting.

---

## 🔐 Firestore Rules Example

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Allow read/write for logged-in users to their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Admins can access certain collections
    match /doctors/{docId} {
      allow read, write: if request.auth != null;
    }

    match /schedules/{scheduleId} {
      allow read, write: if request.auth != null;
    }

    match /requests/{requestId} {
      allow read, write: if request.auth != null;
    }

    match /medicalHistory/{recordId} {
      allow read, write: if request.auth != null;
    }
  }
}
