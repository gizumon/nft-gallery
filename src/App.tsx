import React, { Suspense, useRef, VFC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Top from './pages/Top';
import RoomList from './pages/RoomList';
import Room from './pages/Room';
import { FirebaseProvider } from './hooks/useFirebase';

export default function App() {    
  return (
    <FirebaseProvider>
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
    </FirebaseProvider>
  );
}
