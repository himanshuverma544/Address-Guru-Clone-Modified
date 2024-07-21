import { Outlet } from 'react-router-dom';

import Header from '../components/pages/layout/Header';
import Footer from '../components/pages/layout/Footer';


export default function Layout() {

  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}
