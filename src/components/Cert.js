import React from 'react'

const Cert = ({certification}) => {
  return (
    <div>Cert

        

        <h1>{certification.title}</h1>
        <h2>{certification.company}</h2>
        <h3> {certification.issue}</h3>
        <button>Edit Certification</button>
    </div>
  )
}

export default Cert