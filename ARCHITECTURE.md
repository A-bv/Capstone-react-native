# Architecture

Little Lemon is a small React Native (Expo) restaurant app. It is almost
entirely a **Presentation** layer with a thin slice of **Logic** and
**Data** — there is no backend, no global state, and no custom native code.
On launch, `app/index.jsx` reads the saved account from the device and either
shows the Welcome screen or jumps to the main tabs. Signing up validates the
form, saves the account (never the password) to AsyncStorage, and routes to
Home; signing in verifies the typed email against that saved account.

See [`docs/architecture.svg`](docs/architecture.svg) for the layer diagram and
[`docs/architecture.html`](https://a-bv.github.io/Capstone-react-native/docs/architecture.html)
for the interactive flow walk-throughs.

| Element | Layer | What it is | What it does | File path |
|---|---|---|---|---|
| App root | Presentation (entry) | Expo Router root stack | Loads fonts, holds splash, registers the stacks | `little-lemon-react-native-app/app/_layout.jsx` |
| Entry | Presentation (entry) | Index route | Reads the saved account, redirects to Home or Welcome | `little-lemon-react-native-app/app/index.jsx` |
| Welcome | Presentation | Onboarding screen | Start sign-in, or continue as guest | `little-lemon-react-native-app/app/welcomeScreen.jsx` |
| Sign in / Sign up | Presentation | `(auth)` stack | Log in (verify email) or create an account | `little-lemon-react-native-app/app/(auth)/` |
| Home / About Us / Profile | Presentation | `(tabs)` tab bar | Menu, restaurant info, and the user profile + logout | `little-lemon-react-native-app/app/(tabs)/` |
| Shared components | Presentation | Reusable UI | Header, FormField, CustomButton, AboutUsImages | `little-lemon-react-native-app/components/` |
| Styling | Presentation | NativeWind + Tailwind theme | Brand colours and fonts, defined once | `little-lemon-react-native-app/tailwind.config.js` |
| Local state | Logic | React `useState` | Holds form input and loading flags in memory | (within each screen) |
| Validation | Logic | Our own function | Checks the sign-up form before saving | `little-lemon-react-native-app/utils/validation.js` |
| Persistence | Data | AsyncStorage wrapper | Saves / reads / removes the account (`user` key) | `little-lemon-react-native-app/utils/storage.js` |
| Networking | Data | — | None — the app has no backend | — |
| Platform | Platform | Expo-managed | Fonts, splash, assets; no custom native, no permissions | `little-lemon-react-native-app/app.json` |
| Tests / CI | Delivery | Jest + GitHub Actions | Unit tests run on every push and pull request | `.github/workflows/ci.yml` |
