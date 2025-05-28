import React from "react";
import { useParams } from "react-router-dom";
import FormDisplayDetail from "./FormDisplayDetail"
import FormExhibitionDetail from "./FormExhibitionDetail";
import FormUpcyclingDetail from "./FormUpcyclingDetail";
import FormUniversityDetail from "./FormUniversityDetail";

const FormManagementDetailContainer = () => {
  const { category, id } = useParams ();
    switch (category) {
        case "display":
        return <FormDisplayDetail id={id} />;
      case "exhibition":
        return <FormExhibitionDetail id={id} />;
      case "university":
        return <FormUniversityDetail id={id} />;
      case "upcycling":
        return <FormUpcyclingDetail id={id} />;
      default:
        return <div>잘못된 접근입니다.</div>;
  }
};

export default FormManagementDetailContainer;
