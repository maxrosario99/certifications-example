import React from "react";

const EditCertificationPage = ({
  certification,
  setCertsArray,
  showEdit,
  setShowEdit,
}) => {
  console.log(showEdit);
  return (
    <div
      style={{ display: showEdit ? "block" : "none" }}
      id="edit-certification-page-container"
    >
      <div id="edit-certification-header">Edit Certification</div>
      <form>
        <label>Title </label>
        <input placeholder={certification.title} type="text" />
        <label>Company</label>
        <input placeholder={certification.title} type="text" />
        <label>Date Issued:</label>
        <input placeholder={certification.title} type="text" />
      </form>
    </div>
  );
};

export default EditCertificationPage;
