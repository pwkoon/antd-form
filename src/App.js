import React from 'react';
import './App.css';
// import { About } from './components/About';
import FormAntd from './components/Form';
import Pagination from './components/Pagination';
import Search from './components/Search';
import SpinAntd from './components/Spin';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { Routes, Route } from 'react-router-dom'
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import UserDetails from './components/UserDetails';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/Auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route
          path='about'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
          />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Products />}>
                      <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />} />
          <Route path='users/:userId' element={<UserDetails />} />
          <Route
            path='profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>}
            />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </AuthProvider>
        {/* <FormAntd /> */}
        {/* <Search /> */}
        {/* <Pagination /> */}
        {/* <SpinAntd /> */}

    </div>
  );
}

export default App;
