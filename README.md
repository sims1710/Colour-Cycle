# Colour-Cycle
**Description:**

The provided code is a React.js application for a color-cycling tool. It allows users to pick a starting color using a color picker, initiate or stop an automatic color-cycling process, and adjust the increment value to control the rate of color change. The application features a clean and responsive user interface, including a header, color picker, start/stop button, and an input field for adjusting the increment value.

**Usage:**

1. **Color Picker:** Use the color picker to select the initial color. The chosen color will be the starting point for the color-cycling process.

2. **Start/Stop Button:** Click the "Start" button to initiate automatic color cycling. Click the "Stop" button to pause the color-changing process.

3. **Increment Value:** Adjust the increment value using the input field. This value determines how much the RGB components of the color change in each step of the cycle.

**Libraries:**

The application utilizes the following libraries:

- **React.js:** A JavaScript library for building user interfaces. To install React.js, use the following command:

  ```bash
  npm install react react-dom
  ```

- **react-bootstrap:** A Bootstrap framework specifically designed for React.js applications. Install it using:

  ```bash
  npm install react-bootstrap bootstrap
  ```

- **Bootstrap (via CDN):** The Bootstrap CSS is included via a CDN link. If you prefer to use a local copy, you can manually download it from the [Bootstrap website](https://getbootstrap.com/docs/5.3/getting-started/download/) and include it in your project. For the CDN version, add the following link in the `<head>` section of your HTML file:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
  />
  ```

Ensure that these libraries are installed and properly configured in your React.js project before running the application.

**Note:**
To create a new React app, you can use `create-react-app`, a command-line tool that sets up a new React project with a sensible default configuration. Follow these steps to create a React app:

1. **Install Node.js and npm:**
   Ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from [https://nodejs.org/](https://nodejs.org/).

2. **Install Create React App:**
   Open a terminal or command prompt and run the following command to install `create-react-app` globally:

   ```bash
   npm install -g create-react-app
   ```

3. **Create a New React App:**
   Once `create-react-app` is installed, use it to create a new React app:

   ```bash
   npx create-react-app my-react-app
   ```

   Replace `my-react-app` with the desired name for your project.

4. **Navigate to the Project Folder:**
   Change into the newly created project directory:

   ```bash
   cd my-react-app
   ```

5. **Replace Default Files:**
   Replace the default `src/App.js`, `src/App.css`, and other files with the corresponding files from the "Colour Cycle" application.

6. **Install Dependencies:**
   Install the dependencies used in the "Colour Cycle" application. Run the following command within your project folder:

   ```bash
   npm install react-bootstrap bootstrap
   ```

7. **Run the React App:**
   Start the development server and run your React app:

   ```bash
   npm start
   ```

   This will open a new browser window with your React app running. You can access it at `http://localhost:3000/`.

With these steps, you should have successfully created a new React app and configured it with the necessary dependencies. The "Colour Cycle" application code can be integrated into this newly created React app.

**How to Install:**

1. Clone the repository containing the code.

2. Install the necessary dependencies. Note: `node_modules` is not included, so you'll need to add the required files manually.

3. Copy the following folders and files into your project:

   - `react-bootstrap` folder from `node_modules` (for React Bootstrap components).
   - `bootstrap.min.css` from `node_modules/bootstrap/dist/css` (for Bootstrap styling).
   - `App.js`, `App.css`, and other React components.

4. Include the necessary imports in your project.

5. Ensure that the Bootstrap CSS is linked in your HTML file. The provided link in the code can be added to the `<head>` section of your HTML file.

6. Run your React application.

With these steps, you should have the "Colour Cycle" application up and running in your React.js environment.

**Roadmap:**

The page was developed for React.js practice, so there's a lot of room for improvement! Feel free to play around!

**Project Status:**

Currently, the project is completed.
