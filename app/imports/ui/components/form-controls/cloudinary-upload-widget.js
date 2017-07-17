import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

/* global cloudinary */

Template.Cloudinary_Upload_Widget.events({
  'click #cloudinary-upload-widget': function click(event) {
    event.preventDefault();
    cloudinary.openUploadWidget({ cloud_name: Meteor.settings.cloudinary.cloud_name,
          upload_preset: Meteor.settings.cloudinary.upload_preset },
        function (error, result) {
          console.log(error, result)
        });
  },
});
