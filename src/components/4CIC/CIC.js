import React from 'react'
import './CIC.css'

export default function CIC() {
  return (
    <>
    <div className='main-div-cic'>
        <div className="top-banner-cic">
            <h1>What are the 4 CIC'S ?</h1>
        </div>
      <div className='top-text-cic container'>
    <p>
    In India, there are <spam className='colored-text-top'>four</spam>  prominent Credit Information Companies that generate credit
    scores for individuals and credit ranks for companies or businesses.<br></br>
    These four credit bureaus are <spam className='colored-text-top'>TransUnion CIBIL, Experian, Equifax and CRIF High Mark.</spam>
    </p>
    </div>
    <div className="bottom-text-cic">
      <br/>
      <h2>The Primary Benefits of these CIC’s include:</h2>
      <ul className='ul-cic' style={{listStyle:'none'}}>
        <li><i className='fa-solid fa-circle-check'></i> Credit History Building.</li>
        <li><i className='fa-solid fa-circle-check'></i> Access to Credit.</li>
        <li><i className='fa-solid fa-circle-check'></i> Lower Interest Rates.</li>
        <li><i className='fa-solid fa-circle-check'></i> Risk Mitigation.</li>
        <li><i className='fa-solid fa-circle-check'></i> Financial Discipline.</li>
      </ul>
    </div>
    <div className="top-img-cic">
      <img className='img-cic1' src="./img/hand-phone.png" alt="" />
    </div>
    
    </div>
    </>
  )
}
