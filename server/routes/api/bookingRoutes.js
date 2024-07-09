const router = require('express').Router();
const Booking = require('../../models/Booking');
const ServiceType = require('../../models/serviceType');
const nodemailer = require('nodemailer');
const { format } = require('date-fns');

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'eliseo101801@gmail.com', 
    pass: 'sjhg hewm dgfj ihmv', //created app specific password in google
  },
});


// my route to post new booking
// my route to post new booking
// my route to post new booking

router.post('/book', async (req, res) => {
  const { serviceName, vehicleType, customerName, customerEmail, bookingDate } = req.body;




//   finding service by name
  try {
    const service = await ServiceType.findOne({
      where: { name: serviceName },
    });

    if (!service) {
      return res.status(404).json({ error: 'Service type not found' });
    }


    // new booking payload
    const newBooking = await Booking.create({
      serviceTypeId: service.id,
      vehicleType,
      customerName,
      customerEmail,
      bookingDate,
    });



 // Formats the booking date
 const formattedDate = format(new Date(bookingDate), 'MMMM do, yyyy h:mm a');

    // Sends email notification using Nodemailer
    const mailOptions = {
      from: 'eliseo101801@gmail.com',
      to: customerEmail,
      subject: 'Booking Confirmation',
        html: `<div style="background-color: #f2f2f2; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);">
        <h1 style="color: #e91e63; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 2.5rem; text-align: center; margin-bottom: 20px;">Booking Confirmation</h1>
        <p style="color: #333333; font-size: 1.2rem; text-align: center; margin-bottom: 20px;">Thank you for booking with us. Below are the details of your booking:</p>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px auto;">
        <div style="margin-bottom: 20px;">
          <h3 style="color: #333333; font-size: 1.2rem; margin-bottom: 10px;">Service Type</h3>
          <p style="color: #666666; font-size: 1rem; margin: 0;">${serviceName}</p>
        </div>
        <div style="margin-bottom: 20px;">
          <h3 style="color: #333333; font-size: 1.2rem; margin-bottom: 10px;">Vehicle Type</h3>
          <p style="color: #666666; font-size: 1rem; margin: 0;">${vehicleType}</p>
        </div>
        <div style="text-align: center; margin-bottom: 20px;">
          <h3 style="color: #333333; font-size: 1.2rem; margin-bottom: 10px;">Booking Date</h3>
          <p style="color: #e91e63; font-size: 1.5rem; font-weight: bold; margin: 0;">${formattedDate}</p>
        </div>
      </div>
    </div>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email notification' });
      }
      console.log('Email sent:', info.response);
      res.status(201).json({ message: 'Booking created successfully!', newBooking });
    });

  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

module.exports = router;
