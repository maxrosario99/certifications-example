import React, { useState } from "react";
import Cert from "./Cert";
import EditCertificationPage from "./EditCertificationPage";

const Layout = () => {
  const [certsArray, setCertsArray] = useState([
    {
      title: "Exam 762",
      company: "Microsoft",
      issue: "May 2020",
    },
    {
      title: "Exam 762",
      company: "Microsoft",
      issue: "May 2020",
    },
    {
      title: "Exam 762",
      company: "Microsoft",
      issue: "May 2020",
    },
  ]);

  function createCertsHTML(cert, index) {
    return <Cert certification={cert} />;
  }

  const [showEdit, setShowEdit] = useState(false);
  const myCertsArray = certsArray.map(createCertsHTML);
  return (
    <div>
      Layout
      <div id="cert-container">
        {certsArray.map(function (cert, index) {
          return (
            <Cert
              setShowEdit={setShowEdit}
              showEdit={showEdit}
              certification={cert}
            />
          );
        })}
      </div>
      <EditCertificationPage
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        certification={certsArray[0]}
        setCertsArray={setCertsArray}
      />
    </div>
  );
};

export default Layout;
