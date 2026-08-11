---
title: Building a Volunteer Task Board (Part 2)
description: Setting up Google service account credentials so a serverless backend can securely access Sheets and Drive.
pubDate: 2026-08-11
category: build-in-public
tags:
  - build-in-public
  - web-development
  - product-management
  - open-source
featured: true
coverImage: /images/volunteer-task-board-updated-architecture.png
coverAlt: Updated architecture for the Women Devs SG volunteer task board
---
Thank you for checking out part 1! In part 2, we are going to figure out how to build the web app without the Apps Script.

Now that we are going to remove the Apps Script but still use Google Sheets as a database. We wanted our frontend web app to talk to a **lightweight serverless backend** (like a Node.js function hosted for free on Vercel or Netlify), which communicates directly with the **Google Sheets API** and **Google Drive API**.

This is the updated architecture:

![Updated system architecture for the volunteer task board](/images/volunteer-task-board-updated-architecture.png)

### Step 1: Set Up Google Service Account Credentials

Instead of Apps Script using your personal Google account automatically, we use a **Google Service Account** (a bot account with permissions) for our Node.js backend.

1\. Go to the [Google Cloud Console](https://console.cloud.google.com/).

2\. Create a new project (e.g., `WDS-Ops-Portal`). Then head over to API Services > Enabled APIs and services

![Google Cloud API services page](/images/api-services.png)

3\. Enable two APIs in the API Library:

*   Google Sheets API
    
*   Google Drive API

![Creating a Google Cloud service account](/images/create-service-account.png)

4\. Go to IAM & Admin > Service Accounts and click Create Service Account.

![Creating a private key for the service account](/images/create-private-key.png)

5\. Create a Key (JSON format) and download it. This contains your `client_email` and `private_key`.

6\. Next, open your Google Sheet database and click **Share**. Share it with the `client_email` address as an **Editor**. Share your Google Drive template folder with the `client_email` address as an **Editor**.

**🔧 Enjoyed the read?**

Next up, I'll walk through Step 2 - building the Node.js backend API.

If this gave you a new way to think through the problem, follow along. I write about full-stack builds, system design, and geospatial engineering: from career platforms to ride-sharing architecture, as I ship them.

Let’s connect:

*   [LinkedIn](https://www.linkedin.com/in/aishwarya-elango/)
    
*   [GitHub](https://github.com/grymoon5)
    
*   [WomenDevsSG](https://linktr.ee/womendevssg)
    

~ Aishwarya
