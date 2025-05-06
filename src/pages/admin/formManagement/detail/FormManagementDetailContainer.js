import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FormDisplayDetail from './FormDisplayDetail';
import FormExhibitionDetail from './FormExhibitionDetail';
import FormUniversityDetail from './FormUniversityDetail';
import FormUpcyclingDetail from './FormUpcyclingDetail';

const FormManagementDetailContainer = () => {
  
  // "display", "exhibition", "university", "upcycling"
  const {type, id} = useParams();

  console.log(type)
  console.log(id)

  const [formData, setFormData] = useState({}) 

  // useEffect(() => {
  //   const getDatas = async () => {
  //     const response = await fetch(`/${type}s/api/${type}/${id}`)
  //     const datas = await response.json()
  //     return datas
  //   }

  //   getDatas().then(setFormData).catch(console.error)
  // }, [])

  return (
    <div>
      컨테이너
      <div>
        이름 : 연락처 뭐시기 스타일
      </div>
      <div>
        {type === "display" && <FormDisplayDetail formData={formData} />}
        {type === "exhibition" && <FormExhibitionDetail formData={formData} />}
        {type === "university" && <FormUniversityDetail formData={formData} />}
        {type === "upcycling" && <FormUpcyclingDetail formData={formData} />}
      </div>
    </div>
  );
};

export default FormManagementDetailContainer;