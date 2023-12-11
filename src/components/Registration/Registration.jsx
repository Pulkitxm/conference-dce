import React from 'react'

import './Registration.css'

const Call = () => {
  return (
    <div className='registration' >
      <h1>
        REGISTRATION FEE*
      </h1>
      <table className="table table-striped w-50 m-auto">
        <thead>
          <tr>
            <th scope="col">Participant</th>
            <th scope="col">Reserach Scholar/Students</th>
            <th scope="col">Academicians</th>
            <th scope="col">Industry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">India & SAARC Countries</th>
            <td>₹8,000</td>
            <td>₹10,000</td>
            <td>₹12,000</td>
          </tr>
          <tr>
            <th scope="row">Other Foreign Countries</th>
            <td>$96</td>
            <td>$120</td>
            <td>$144</td>
          </tr>
          <tr>
            <td colSpan={4}>
              *18% GST is included in the Registration fee.
              * If authors are submitting more than one paper and one author is the presenter for all papers, then Author has to pay a 100 % Registration fee for the first paper and 50% of the registration fees of other papers.
              * If authors are submitting more than one paper and presenter for all papers are different among the authors, then each presenter has to pay 100% Registration fee.
            </td>
          </tr>
        </tbody>
      </table>
      <h1>
        MODE OF PAYMENT
      </h1>
      <p>
        All payments should be made through online electronic transfer in the account of conference with following details:
        In the online transaction remark, please ensure to mention unique ID: 08/ICAE/MED/2023-24/SNFCE
      </p>
      <table className="table table-striped m-auto" style={{width:'40%'}} >
        <thead>
          <tr>
            <th scope="col">Beneficiary Name</th>
            <th scope="col">NON FORMAL CONTINUING OF EDU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Account No</th>
            <td>10424975574</td>
          </tr>
          <tr>
            <th scope="row">Account No</th>
            <td>10424975574</td>
          </tr>
          <tr>
            <th scope="row">Account No</th>
            <td>10424975574</td>
          </tr>
          <tr>
            <th scope="row">Account No</th>
            <td>10424975574</td>
          </tr>
          <tr>
            <td colSpan={2} >Online Link: Click for Payment</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Call