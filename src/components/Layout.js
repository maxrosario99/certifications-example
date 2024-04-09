import React, { useState } from 'react'
import Cert from './Cert'
import EditCertificationPage from './EditCertificationPage';


const Layout = () => {
    const [certsArray, setCertsArray] = useState([

        {
            title: "Exam 762",
            company: "Microsoft",
            issue: "May 2020"
        },
        {
            title: "Exam 762",
            company: "Microsoft",
            issue: "May 2020"
        },
        {
            title: "Exam 762",
            company: "Microsoft",
            issue: "May 2020"
        }

    ])
    const [showEdit, setShowEdit] = useState(false);
  return (
    <div>Layout

        <div id="cert-container">
            {certsArray.map(function(cert, index){
                return (<Cert 
                certification={cert}
                />
                ,
                <EditCertificationPage
                
                showEdit = {showEdit}
                setShowEdit = {setShowEdit}
                certification = {cert}
                setCertsArray = {setCertsArray}
                />
                )
            })}
            
        </div>
    </div>
  )
}

export default Layout