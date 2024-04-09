import React from "react";
import { useState } from "react";

//

// function updateCertification() {
//   setCurrentTitle(certification.title);
//   setCurrentCompany(certification.company);
//   setCurrentIssue(certification.issue);
// }

const EditCertificationPage = ({
  certsArray,
  certification,
  setCertsArray,
  showEdit,
  setShowEdit,
}) => {
  const [currentTitle, setCurrentTitle] = useState();
  const [currentCompany, setCurrentCompany] = useState();
  const [currentIssue, setCurrentIssue] = useState();

  console.log(showEdit);

  //three functions that grab the object element and update it with whatever the user puts in
  function updateTitle(event) {
    setCurrentTitle(event.target.value);
    console.log(currentTitle);
  }
  function updateCompany(event) {
    setCurrentCompany(event.target.value);
    console.log(currentCompany);
  }
  function updateIssue(event) {
    setCurrentIssue(event.target.value);
    console.log(currentIssue);
  }

  //copies the certs array, grabs the id and sets the id as an index position to the new cert
  function changeCert() {
    const copy = [...certsArray];
    const newCert = {
      id: certification.id,
      title: currentTitle,
      company: currentCompany,
      issue: currentIssue,
    };
    copy[certification.id] = newCert;

    setCertsArray(copy);
  }

  return (
    <div
      style={{ display: showEdit ? "block" : "none" }}
      id="edit-certification-page-container"
    >
      <div id="edit-certification-header">Edit Certification</div>
      <form>
        <label>Title </label>
        <input
          onChange={updateTitle}
          placeholder={certification.title}
          type="text"
        />
        <label>Company</label>
        <input
          onChange={updateCompany}
          placeholder={certification.company}
          type="text"
        />
        <label>Date Issued:</label>
        <input
          onChange={updateIssue}
          placeholder={certification.issue}
          type="text"
        />
      </form>
      {/* this trigers the change cert function on submit */}
      <button onClick={changeCert}>Submit</button>
    </div>
  );
};

export default EditCertificationPage;
