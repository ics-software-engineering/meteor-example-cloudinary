import { Meteor } from 'meteor/meteor';
import { ImageData } from '../../api/imagedata/imagedata.js';

Meteor.publish('ImageData', function publishImageData() {
  return ImageData.find();
});
