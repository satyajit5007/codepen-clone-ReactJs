# CodePen Clone

A feature-rich CodePen clone built using modern web technologies including ReactJS, Firebase, Tailwind CSS, React Redux, Codemirror, and @uiw/react-codemirror.

Throughout this hands-on guide, you'll explore the step-by-step process of constructing a robust web application that mirrors the functionalities of CodePen.io. We'll leverage popular packages like CodeMirror for syntax highlighting and code editing capabilities, SplitPane for effortless code organization, and Tailwind CSS for a modern and responsive design.

By following along with our detailed instructions, you'll master the art of integrating Firebase's real-time database and authentication features to enable collaborative coding experiences. From setting up user accounts and saving code snippets to implementing real-time updates, this tutorial covers every aspect of the development process.

Whether you're a seasoned developer looking to expand your skill set or a beginner eager to grasp the essentials of full-stack development, this tutorial equips you with the knowledge to create your very own CodePen.io-inspired platform. Elevate your coding prowess and gain practical insights into building dynamic applications that seamlessly combine React.js, Firebase, CodeMirror, SplitPane, and Tailwind CSS. Embark on this journey today and unlock the potential of full-stack development!

## Features

- **User Authentication**: Login with Google or GitHub using Firebase Authentication.
- **Code Editor**: Split-view editor for HTML, CSS, and JavaScript powered by Codemirror.
- **Project Management**: Create, save, and manage coding projects seamlessly.

## Tech Stack

- **ReactJS**: For building the user interface.
- **Firebase**: For authentication and data storage.
- **Tailwind CSS**: For styling the application.
- **React Redux**: For state management.
- **Codemirror & @uiw/react-codemirror**: For the code editing environment.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/codepen-clone.git
    ```

2. Navigate to the project directory:
    ```bash
    cd codepen-clone
    ```

3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

1. Create a `.env` file in the root of the project.
2. Add your Firebase configuration to the `.env` file:
    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Login**: Use Google or GitHub to log in.
2. **Create a Project**: Start a new project and code in the HTML, CSS, and JavaScript panes.
3. **Save Projects**: Save your work to revisit and continue later.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [ReactJS](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Redux](https://react-redux.js.org/)
- [Codemirror](https://codemirror.net/)
- [@uiw/react-codemirror](https://www.npmjs.com/package/@uiw/react-codemirror)
