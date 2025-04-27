import { Outlet } from 'react-router-dom';
import Footer from '../Components/Common/Footer/Footer';
import Navbar from '../Components/Common/Navbar/Navbar';

const Root = () => {
  return (
    <div className="bg-gradient-to-r from-white to-white dark:bg-gradient-to-r dark:from-dark-lite dark:to-dark-deep dark:text-white-deep">
      <Navbar />
      <div className="min-h-[calc(100vh-178px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
