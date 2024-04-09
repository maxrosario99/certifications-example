import React from 'react'

const EditCertificationPage = (certification, setCertsArray, showEdit, setShowEdit) => {
  return (
    <div id= "edit-certification-page-container" style={{ display: showEdit ? "block" : "none" }}>
        <div id="edit-certification-header">
            Edit Certification
        </div>
        <form>
            <label>Title</label>
            <input
                placeholder = {certification.title}
                type = "text"


            />
        </form>
    </div>
  )
}

export default EditCertificationPage