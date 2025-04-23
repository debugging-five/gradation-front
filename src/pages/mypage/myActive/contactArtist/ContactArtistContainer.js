import React from 'react';
import { Outlet } from 'react-router-dom';

const ContactArtistContainer = () => {
  return (
    <div>
      내활동 / 작가와 연락
      <Outlet />
    </div>
  );
};

export default ContactArtistContainer;