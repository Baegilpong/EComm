import React from "react";
import './Reservation.css'

function Reservation() {


  return (
    <>
      <div className="Reservation-page">

        <div className="reservation-container">
          <h1>Get an experience of your life!</h1>
          <h2>Reserve your seat!</h2>
          <form action="https://api.web3forms.com/submit" method="POST" className="reservation-section">
              <input type="hidden" name="access_key" value="a2efa853-d079-44a2-bdf6-bd4cdd803d0c"/>

              <label htmlFor="Name">Name</label>
              <input type="text" name="Name" placeholder="Your Name" className="reservation-input" required/>

              <label htmlFor="Email">Email</label>
              <input type="email" name="Email" placeholder="Your Email" className="reservation-input" required/>

              <label htmlFor="Date">Reservation Date</label>
              <input type="datetime-local" name="Date" className="date-input"  required/><br/>
              <button className="sub-button" type="submit">Submit</button>
          </form>

        </div><br/>

       
      </div>
    </>
  )
}

export default Reservation;