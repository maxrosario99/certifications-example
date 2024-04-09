import React from "react";

const Cert = ({
  certification,
  showEdit,
  setShowEdit,
  currentCert,
  setCurrentCert,
}) => {
  // this function takes the certification the user clicked on and displays it in the edit page
  function appendCert() {
    setCurrentCert(certification);
    setShowEdit(!showEdit);
  }

  return (
    <div>
      Cert
      <h1>{certification.title}</h1>
      <h2>{certification.company}</h2>
      <h3> {certification.issue}</h3>
      {/* // this triggers the function when the button is clicked */}
      <button onClick={appendCert}>Edit Certification</button>
    </div>
  );
};

export default Cert;
