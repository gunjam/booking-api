'use strict';

module.exports = function(Booking) {
  Booking.validateAsync('doubleBooking', checkBookings, {
    message: 'Can\'t book this, it would be a double booking'
  });

  function checkBookings(err, done) {
    const {start, end, roomId, id} = this;

    Booking.find({
      where: {
        and: [
          {roomId},
          id ? {id: {neq: id}} : {},
          {or: [
            {and: [{start: {lte: start}}, {end: {gt: start}}]},
            {and: [{start: {lt: end}}, {end: {gte: end}}]},
            {and: [{start: start, end: end}]}
          ]}
        ]
      }
    })
    .then(bookings => {
      if (bookings.length > 0) {
        err();
      }
      done();
    })
    .catch(err);
  }
};
