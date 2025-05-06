import React from 'react';
import { useParams } from 'react-router-dom';

const ContactArtistWrite = () => {
  // 이메일을 들고와서 적어준다
  const {email} = useParams()
  return (
    <div>
      <p>TO. {email}</p>
      작가와 연락 페이지
    </div>
  );
};

export default ContactArtistWrite;