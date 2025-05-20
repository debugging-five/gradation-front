import React from 'react';
import { useForm } from 'react-hook-form';

const DisplayRegistration = () => {

  const { register, handleSubmit, formState : { isSubmitting }} = useForm({mode:"onChange"})
  
  return (
    // <div>
    //   <p>신청양식</p>
    //   DisplayRegistration
    // </div>

    <form encType='multipart/form-data' onSubmit={handleSubmit(async (data) => {
      console.log(data);

      const artId = 1;

      const formData = new FormData();
      Array.from(data.files).forEach((file) => {
        formData.append("files", file)
      })

      formData.append("id", artId);

      await fetch(`http://localhost:10000/files/api/upload/art/${artId}`, {
        method : "POST",
        body : formData
      })
        .then((res) => res.json())
        .then(console.log)
        .catch(console.error)

    })}>

      <label>
        <p>다중 이미지</p>
        <input 
          type="file" 
          accept='image/*'
          multiple
          {...register("files")}
        />
      </label>

      <button disabled={isSubmitting}>전송</button>
      
    </form>
  );
};

export default DisplayRegistration;