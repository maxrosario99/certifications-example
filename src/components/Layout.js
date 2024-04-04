import React, { useState } from 'react'
import Cert from './Cert'


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
  return (
    <div>Layout

        <div id="cert-container">
            {certsArray.map(function(cert, index){
                return <Cert 
                certification={cert}
                />
            })}
            
        </div>
    </div>
  )
}

export default Layout