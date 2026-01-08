# Portfolio Website

This is a static portfolio website converted from a Java Spring Boot application.

## Hosting on GitHub Pages

To host this on GitHub Pages:

1.  Push this code to a GitHub repository.
2.  Go to the repository **Settings** -> **Pages**.
3.  Under **Build and deployment**, select **Source** as `Deploy from a branch`.
4.  Select the `main` (or `master`) branch and `/` (root) folder.
5.  Click **Save**.

Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Local Development

You can view the site locally by simply opening `index.html` in your web browser.

Alternatively, if you have Node.js installed, you can run a local server:

```bash
npx serve .
```

## Project Structure

-   `index.html`: The main entry point.
-   `data/projects.json`: Contains the list of projects displayed on the site.
-   `css/`, `js/`, `images/`: Static assets.

## Database Setup (Optional)

This project uses **Firebase Firestore** for saving data.

1.  Create a project at [Firebase Console](https://console.firebase.google.com/).
2.  Create a **Firestore Database** in test mode.
3.  Copy your web app configuration keys.
4.  Open `js/firebase-config.js` and paste your keys.

### Demo Mode
If you don't set up Firebase, the site runs in **Demo Mode**.
-   Projects you create are saved to your **browser's local storage**.
-   They will persist on your device but won't be visible to others.
-   To share data with others, you must set up Firebase.
