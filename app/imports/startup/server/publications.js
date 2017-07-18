import { ImageData } from '../../api/imagedata/imagedata.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('ImageData', function publishImageData() {
  return ImageData.find();
});
