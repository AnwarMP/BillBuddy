# BillBuddy
BillBuddy is a powerful tool designed to simplify health insurance by using advanced AI technology to analyze and break down complex insurance policies into clear, understandable insights. Users can upload their insurance policy documents and receive instant, accurate answers to any questions about their coverage, deductibles, premiums, and more. BillBuddy aims to empower individuals to make confident healthcare decisions by providing clarity and peace of mind.

## Why BillBuddy is Needed
According to the Center for Health Care Strategies, nearly 9 out of 10 adults in the United States struggle with health literacy. This lack of understanding can lead to confusion and anxiety when dealing with health insurance policies. BillBuddy addresses this critical need by transforming dense, jargon-filled documents into accessible and actionable information, helping users navigate their health insurance with ease.

# Getting Started
Follow these steps to set up and run BillBuddy on your local machine.

1. Clone the Repository
Clone the BillBuddy repository from GitHub to your local machine.

```bash
git clone https://github.com/anwarmp/billbuddy.git
cd billbuddy
```

2. Create a .env File
Create a .env file in the root directory of the project and add the following environment variables:

```plaintext
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Database
DATABASE_URL=

# AWS S3
NEXT_PUBLIC_S3_ACCESS_KEY_ID=
NEXT_PUBLIC_S3_SECRET_ACCESS_KEY=
NEXT_PUBLIC_S3_BUCKET_NAME=

# Pinecone
PINECONE_ENVIRONMENT=
PINECONE_API_KEY=

# OpenAI
OPENAI_API_KEY=

NEXT_BASE_URL=http://localhost:3000
```
Make sure to replace the placeholders with your actual credentials and keys.

3. Install Dependencies
Install the necessary dependencies using npm.


```bash
npm install
```

4. Run the Development Server
Start the development server.

```bash
npm run dev
```

Your application should now be running on http://localhost:3000.

### Technologies Used
* Next.js: React framework for building the frontend.
* React.js: Library for building user interfaces.
* Tailwind CSS: Utility-first CSS framework for styling.
* Clerk: Authentication service for handling user authentication.
* Pinecone: Vector database for efficient document search and retrieval.
* PostgreSQL: Relational database for storing user data.
* Amazon S3: Storage service for storing user-uploaded files.
* OpenAI: AI models for generating document embeddings and processing user queries.
* Langchain: Pipeline creation tool for processing user queries.


### Contributions
Contributions are welcome! If you have any ideas or suggestions to improve BillBuddy, feel free to create an issue or submit a pull request.
