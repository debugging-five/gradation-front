import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AdminFaqDetail = () => {
  const {id} = useParams()
  return (
    <div>
      AdminFaqDetail
      
      <div>
        <Link to={`/mypage/admin/faq/modify/${id}`}>수정하기</Link>
      </div>
    </div>
  );
};

export default AdminFaqDetail;