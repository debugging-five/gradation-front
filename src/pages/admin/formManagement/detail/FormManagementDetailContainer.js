import React from "react";
import { useParams } from "react-router-dom";
import FormDisplayDetail from "./FormDisplayDetail"
import FormExhibitionDetail from "./FormExhibitionDetail";
import FormUpcyclingDetail from "./FormUpcyclingDetail";
import FormUniversityDetail from "./FormUniversityDetail";
console.log("FormDisplayDetail import:", FormDisplayDetail);
const FormManagementDetailContainer = () => {
  const { type, id } = useParams();

  switch (type) {
    case "display":
      return <FormDisplayDetail id={id} />;
    case "exhibition":
      return <FormExhibitionDetail id={id} />;
    case "upcycling":
      return <FormUpcyclingDetail id={id} />;
    case "university":
      return <FormUniversityDetail id={id} />;
    default:
      return <div>지원하지 않는 카테고리입니다.</div>;
  }
};

export default FormManagementDetailContainer;
