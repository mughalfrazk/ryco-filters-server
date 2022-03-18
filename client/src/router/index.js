import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../layouts/Main';
import Home from '../pages/Home';
import InputScreen from '../pages/InputScreen';
import ScanBarcode from '../pages/ScanBarcode';
import Staging from '../pages/Staging';
import ThankYou from '../pages/ThankYou';
import Welcome from '../pages/Welcome';
import WinScreen from '../pages/WinScreen';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/scan" element={<ScanBarcode />} />
          <Route path="/type" element={<InputScreen />} />
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <Welcome />
              </PrivateRoute>
            }
          />
          <Route
            path="/staging"
            element={
              <PrivateRoute>
                <Staging />
              </PrivateRoute>
            }
          />
          <Route
            path="/win"
            element={
              <PrivateRoute>
                <WinScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/thank-you"
            element={
              <PrivateRoute>
                <ThankYou />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
