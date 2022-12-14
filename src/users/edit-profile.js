import React, { useEffect } from "react";

const EditProfile = ({changeToFalse}) => {


  return (
    <div>
        <div onClick={() => changeToFalse()}>Go Back</div>
      <input value="First Name" />
      <input value="Last Name" />
      <button>Submit</button>
    </div>
  );
};
export default EditProfile;
