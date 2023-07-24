document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevents the form from submitting normally
  
    var appointmentDate = document.getElementById('appointmentDate').value;
  
    alert('You have selected ' + appointmentDate + ' as your appointment date.');
  });
  