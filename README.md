# Job Portal

## Overview

The **Job Portal** is a full-stack web application designed to facilitate job search and recruitment processes. Built with **React JS**, **Tailwind CSS**, **Supabase**, **Clerk Authentication**, and **Shadcn UI**, it offers features for both **candidates** and **recruiters** to interact with job postings.

### Key Features:

#### Candidate Features:
- Search for job listings.
- Apply to job openings.
- View and manage applications in "My Applications".
- Save jobs to revisit later in "Saved Jobs".

#### Recruiter Features:
- Post new job listings.
- Manage and track your posted jobs.

#### Authentication:
- User login and registration handled via **Clerk Authentication**.

#### UI Framework:
- **Shadcn UI** for modern, user-friendly components.
- **Tailwind CSS** for fast, responsive styling.

## Technologies Used:

- **React JS**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Supabase**: Backend-as-a-Service for database and authentication.
- **Clerk Authentication**: For user authentication management.
- **Shadcn UI**: A set of pre-designed components to streamline UI development.

## Setup Instructions

To set up this project locally, follow the steps below:

### Prerequisites:

- **Node.js** (v14.x or higher)
- **Yarn** (Optional, npm is also supported)

### Steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aditya1or0/Job-Portal.git
   cd Job-Portal
   ```

2. **Install dependencies**:
   You can use either `npm` or `yarn` to install the necessary dependencies.
   ```bash
   npm install
   ```
   Or if you're using Yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the necessary credentials for **Supabase** and **Clerk**.
   
   Example `.env` file:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   REACT_APP_CLERK_FRONTEND_API=your_clerk_frontend_api
   REACT_APP_CLERK_API_KEY=your_clerk_api_key
   ```

4. **Run the development server**:
   Start the development server using either `npm` or `yarn`:
   ```bash
   npm start
   ```
   Or with Yarn:
   ```bash
   yarn start
   ```
   The app will now be running at `http://localhost:3000`.

## Usage

### For Candidates:

- Browse and search for job listings.
- Apply to jobs you're interested in.
- View your applications in the "My Applications" section.
- Save jobs to revisit them later in the "Saved Jobs" section.

### For Recruiters:

- Post new job listings for candidates to apply.
- Manage and edit your job postings.

## Contributing

We welcome contributions! If you'd like to improve this project, feel free to fork the repository, create a new branch, and submit a pull request.

### Steps to contribute:

1. Fork the repository.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/your-username/Job-Portal.git
   ```
3. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
4. Make your changes, then commit and push them:
   ```bash
   git add .
   git commit -m "Add a descriptive commit message"
   git push origin feature-name
   ```
5. Submit a pull request.


## Acknowledgements

- **React JS**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Supabase**: Open-source backend-as-a-service for databases and authentication.
- **Clerk Authentication**: Simplified user authentication service.
- **Shadcn UI**: A collection of pre-designed UI components for rapid development.

## Contact

If you have any questions or need further assistance, feel free to open an issue on GitHub or contact me directly at [adityapandit264@gmail.com].

