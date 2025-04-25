import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FormManagementApprovedList = () => {

  const { type } = useParams()
  console.log(type)
  // const [list, setList] = useState([]) 

  // useEffect(() => {
  //   const getDatas = async () => {
  //     const response = await fetch(`/${type}s/api/list`)
  //     const datas = await response.json()
  //     return datas
  //   }

  //   getDatas().then(setList).catch(console.error)
  // }, [])

  return (
    <div>
      {/* <Link to={`/mypage/admin/form-management/detail/${type}/${id}`}>해당글 1</Link> */}
      <Link to={`/mypage/admin/form-management/detail/${type}/1`}>해당글 1</Link>
      <Link to={`/mypage/admin/form-management/detail/${type}/2`}>해당글 2</Link>
      <Link to={`/mypage/admin/form-management/detail/${type}/3`}>해당글 3</Link>
    </div>
  );
};

export default FormManagementApprovedList;