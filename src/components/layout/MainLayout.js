import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header  */}
      <Header />

      {/* main area  */}

      <div className='main '>{children}</div>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default MainLayout;
