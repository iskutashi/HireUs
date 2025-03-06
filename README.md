# Project Setup Guide

## Backend (NestJS)

### Setup Instructions
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run start
   ```

The server will start running on `http://localhost:3000` by default.

---

## Frontend (HTML + JavaScript)

### Setup Instructions
1. Ensure the **backend is running** before testing the frontend.
2. Open the `index.html` file in a browser.

### Example Code (Fetching Data from Backend)
Create an `index.html` file in your frontend directory with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Listings</title>
</head>
<body>
    <h1>Job Listings</h1>
    <ul id="job-list"></ul>

    <script>
        fetch('http://localhost:3000/job')
            .then(response => response.json())
            .then(jobs => {
                const jobList = document.getElementById('job-list');
                jobs.forEach(job => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${job.title}</strong> - ${job.location} - ${job.salary}`;
                    jobList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching jobs:', error));
    </script>
</body>
</html>
```

### How to Test
1. **Start the backend** (`npm run start` inside `backend/`).
2. **Open `index.html`** in a browser.
3. You should see a list of job postings fetched from the backend.

---

### Notes
- Ensure the backend is running on `http://localhost:3000`.
- If you encounter CORS issues, you may need to configure CORS in the NestJS backend.
- For deployment, consider using a frontend framework like React or Vue.
