import React from 'react';

class BookingPage extends React.Component {
  
  handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission process
    const date = event.target.elements.appointmentDate.value;
    alert(`Booking Successful for the date: ${date}`);
  }

  render() {
    return(
      <div>
        <div className="container">
          <h1 className="text-dark">Hello </h1>
          <h1>Book your vaccination appointment</h1>

          <form id="bookingForm" onSubmit={this.handleSubmit}>
            <label htmlFor="appointmentDate">Choose your appointment date:</label>
            <input type="date" id="appointmentDate" name="appointmentDate" required />
            <input type="submit" value="Book Appointment" />
          </form>
        </div>
      </div>
    );
  }
}

export default BookingPage;