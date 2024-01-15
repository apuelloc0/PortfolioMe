import React, { useState, useRef } from 'react'
import "./Certificates.css";

import SwiperCer from "./SwiperCer";


const Certificates = () => {

  const [show, setShow] = useState(false)
  const [reff, setReff] = useState("")

  const { imgRef } = useRef(null)

  const handleShowItem = () => {
    setShow(true)

    if (imgRef === null) {
      return
    } else {
      setReff(imgRef.current)
    }
    // console.log(imgRef.current)
    console.log(reff)
  }



  return (
    <div className="Certificates">
      <h2 className="Certificates-title">Certificados</h2>
      <div className="Certificates-container">
        <SwiperCer />
      </div>
    </div>
  )
}

export default Certificates
