import React, { useEffect, useState } from 'react';
import WelcomeScreen from './welcomeScreen';
import Home from './(tabs)/home';
import { getUser } from '../utils/storage';


export default function App() {
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getUser();
        setUserExists(!!user); // Convert user to boolean
      } catch (error) {
        console.error('Failed to check user:', error);
      } finally {
        setIsUserLoaded(true);
      }
    };

    checkUser();
  }, []);

  if (!isUserLoaded) {
    // Render a loading indicator while checking user
    return null; // You can replace this with an actual loading component if desired
  }

  return userExists ? <Home /> : <WelcomeScreen />;
}