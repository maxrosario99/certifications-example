import React, { useState } from "react";
import Cert from "./Cert";
import EditCertificationPage from "./EditCertificationPage";

const Layout = () => {
  const [certsArray, setCertsArray] = useState([
    {
      title: "Exam 762",
      company: "Microsoft",
      issue: "May 2020",
      id: 0,
    },
    {
      title: "Exam 600",
      company: "Google",
      issue: "May 2020",
      id: 1,
    },
    {
      title: "Exam 895",
      company: "Apple",
      issue: "June 2020",
      id: 2,
    },
  ]);
  //Using this to track which cert the user clicks to show it on the edit page

  const [currentCert, setCurrentCert] = useState({
    title: "Exam 762",
    company: "Microsoft",
    issue: "May 2020",
    id: 1,
  });
  //This takes the cert array and converts it into HTML so that it can be viewed in the page

  function createCertsHTML(cert, index) {
    return <Cert certification={cert} />;
  }
  //sets the default state for editpage as false so it only shows up when we need it to

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
              currentCert={currentCert}
              setCurrentCert={setCurrentCert}
            />
          );
        })}
      </div>
      <EditCertificationPage
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        certification={currentCert}
        setCertsArray={setCertsArray}
        certsArray={certsArray}
      />
    </div>
  );
};

export default Layout;
