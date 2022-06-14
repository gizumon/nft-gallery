import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from './pages/Top';
import RoomList from './pages/RoomList';
import Room from './pages/Room';
import { FirebaseProvider } from './hooks/useFirebase';
import { AuthProvider } from './hooks/useAuth';
import Header from './components/Header';

export default function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Top />} />
            <Route path='/rooms' >
              <Route index element={<RoomList />} />
              <Route path=':roomId' element={<Room />} />
            </Route>
            <Route path='*' element={<h1>404 ERROR</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </FirebaseProvider>
  );
}
