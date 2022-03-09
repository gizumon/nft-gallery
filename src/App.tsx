import React, { Suspense, useRef, VFC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Top from './pages/Top';
import RoomList from './pages/RoomList';
import Room from './pages/Room';

if (process.env.NODE_ENV === 'production') {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/room' >
          <Route index element={<RoomList />} />
          <Route path=':roomId' element={<Room />} />
        </Route>
        <Route path='*' element={<h1>404 ERROR</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
