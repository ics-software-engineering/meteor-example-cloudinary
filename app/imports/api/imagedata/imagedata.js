import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/* eslint-disable object-shorthand */

export const ImageData = new Mongo.Collection('ImageData');

/**
 * Create the schema for ImageData
 */
export const ImageDataSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
  },
  url: {
    label: 'URL',
    type: String,
  },
  thumbnail: {
    label: 'Thumbnail',
    type: String,
  },
}, { tracker: Tracker });

ImageData.attachSchema(ImageDataSchema);
