import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mapsLinks: {
    google: {
      type: String,
      required: false,
      default: null
    },
    yandex: {
      type: String,
      required: false,
      default: null
    },
    twoGis: {
      type: String,
      required: false,
      default: null
    }
  },
  googleMapsIframe: {
    type: String,
    required: true
  },
  lemonSqueezyLink: {
    type: String,
    required: false,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Check if model already exists to prevent OverwriteModelError
const Place = mongoose.models.Place || mongoose.model('Place', placeSchema);

export default Place; 