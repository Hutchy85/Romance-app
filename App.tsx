import React from 'react';
import { AppProvider } from './src/context/AppContext';
import Navigation from './src/navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';

// Set default timeout for axios requests
axios.defaults.timeout = 10000;

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar style="auto" />
        <Navigation />
      </AppProvider>
    </SafeAreaProvider>
  );
}
