// src/context/UserContext.jsx
import { createContext, useState, useContext } from 'react';

// Sample user data
const defaultUser = {
  id: 1,
  name: 'Sara Wilson',
  email: 'sara@example.com',
  avatar: null, // Could be a URL to an avatar image
  preferences: {
    reminderEnabled: true,
    emailNotifications: false
  }
};

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(defaultUser);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to true for demo purposes
  
  // This would typically include authentication methods
  const login = (credentials) => {
    // In a real app, this would make an API call
    console.log('Login attempt with:', credentials);
    setIsAuthenticated(true);
    setUser(defaultUser);
    return Promise.resolve(true);
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    return Promise.resolve(true);
  };
  
  const updateUserProfile = (updates) => {
    setUser(prev => ({
      ...prev,
      ...updates
    }));
    return Promise.resolve(true);
  };
  
  const updatePreferences = (preferences) => {
    setUser(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        ...preferences
      }
    }));
    return Promise.resolve(true);
  };
  
  return (
    <UserContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      logout, 
      updateUserProfile,
      updatePreferences
    }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);