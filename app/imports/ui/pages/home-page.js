import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { ImageData, ImageDataSchema } from '../../api/imagedata/imagedata.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Home_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ImageDataSchema.namedContext('Home_Page');
  this.subscribe('ImageData');
});

Template.Home_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
  images() {
    return ImageData.find();
  },
});


Template.Home_Page.events({
  'submit'(event, instance) {
    event.preventDefault();
    // Get field values.
    const name = event.target.name.value;
    const url = event.target.cloudinaryUrl.value;
    const thumbnail = event.target.cloudinaryThumbnail.value;
    const newImageData = { name, url, thumbnail };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ImageDataSchema.clean(newImageData);
    // Determine validity.
    instance.context.validate(newImageData);
    if (instance.context.isValid()) {
      ImageData.insert(newImageData);
      instance.messageFlags.set(displayErrorMessages, false);
      instance.find('form').reset();
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

