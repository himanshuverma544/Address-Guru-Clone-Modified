import { Outlet } from 'react-router-dom';

import Header from '../components/pages/layout/Header';
import Sidebar from '../components/pages/layout/Sidebar';
import Footer from '../components/pages/layout/Footer';


export default function Layout() {

  return (
    <>
      <Header/>
        <div className="flex">
          <main>
            <Outlet/>
          </main>
        </div>
      <Footer/>
    </>
  );
}
