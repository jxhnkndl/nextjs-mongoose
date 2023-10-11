import mongoose, { Schema } from 'mongoose';

const concertSchema = new Schema({
  date: { type: String, required: true },
  venue: { type: String, required: true },
  city: { type: String, required: true },
  doors: { type: String, required: true },
  show: { type: String, required: true },
});

// Check to see if Concert model has already been built before rebuilding it
const Concert = mongoose.models.Concert || mongoose.model('Concert', concertSchema);

export default Concert;