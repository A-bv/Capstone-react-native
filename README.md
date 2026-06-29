# Capstone-react-native - Little Lemon Restaurant App

Welcome to the Little Lemon Restaurant App! This React Native app is developed with Expo and styled using Tailwind CSS through NativeWind. 

[![Watch Video](https://a-bv.github.io/Capstone-react-native/video/video-thumbnail.png)](https://a-bv.github.io/Capstone-react-native/video/VideoLittleLemonReactNative.mp4)

The app has the following sections:
- **Home**: Lists meals, including descriptions, pictures and prices.
- **About Us**: Presents the restaurant with its contact information.
- **Profile**: Displays the user profile.

It also includes: 
- **An onboarding process**: Provides a way to sign up or login, or continue as a guest.
- **Field validation**: Notifies the user for any invalid inputs.

## Getting Started

### Prerequisites

Recommended IDE: Visual Studio Code (VS Code).


Ensure you have the following installed:

- Node.js (v18 or later)
- The Expo CLI is run via `npx expo` (no global install needed)

### Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/A-bv/Capstone-react-native.git
    cd Capstone-react-native/little-lemon-react-native-app
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run the app**

    ```bash
    npx expo start -c
    ```

    Then, choose to run the app on an iOS or Android emulator.

## Usage

Once the app is running, you can:

- **Create an Account:** Register a new account, or continue as a guest.
- **Browse the Menu:** Explore the restaurant's menu items.

## Project Structure

The application code lives in the `little-lemon-react-native-app/` subdirectory:

```
little-lemon-react-native-app/
├── app/            # Screens and navigation (expo-router file-based routing)
│   ├── (auth)/     # Sign in / sign up flow
│   └── (tabs)/     # Home, About Us and Profile tabs
├── components/     # Reusable UI components (Header, FormField, CustomButton...)
├── constants/      # Icon and image references
└── utils/          # Storage helpers and form validation
```

## Running Tests

Unit tests are written with [Jest](https://jestjs.io/). From the
`little-lemon-react-native-app/` directory:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for creating custom designs.
- [NativeWind](https://github.com/vadimdemedes/nativewind) - A Tailwind CSS integration for React Native.

## Additional Resources

- **Design files**: The wireframes and UX prototype were created in Figma. They are kept out of the
  repository to keep it lightweight; ask the maintainer for access to the Figma files.
