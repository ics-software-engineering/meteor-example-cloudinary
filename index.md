![](https://raw.githubusercontent.com/ics-software-engineering/meteor-example-cloudinary/master/doc/home-page.png)

Meteor-example-cloudinary is a sample Meteor application that illustrates the use of [Cloudinary](http://cloudinary.com) for image uploading and display. The current example is quite simple and shows the use of Cloudinary's [unsigned uploading](http://cloudinary.com/blog/direct_upload_made_easy_from_browser_or_mobile_app_to_the_cloud) capability.
 
The structure of this application is based on:

  * [meteor-application-template](http://ics-software-engineering.github.io/meteor-application-template/)
  * [meteor-example-form](https://ics-software-engineering.github.io/meteor-example-form/)
  
Please refer to these applications for more details on the overall structure of this application.  The following documentation explains on ly the cloudinary-specific aspects.

## Installation

### Set up your Cloudinary account

To use this application, you must first [sign up for a free Cloudinary account](https://cloudinary.com/users/register/free).

Next, you must create an "upload preset" to allow unsigned uploading. You create an upload preset in the [Settings | Upload](https://cloudinary.com/console/settings/upload) area of your Cloudinary management dashboard. 


### Install the application

First, [install Meteor](https://www.meteor.com/install).

Second, [create a new GitHub repository](https://help.github.com/articles/create-a-repo/), and clone it into your local workspace.

Third, [download a zip file containing a snapshot of meteor-example-cloudinary](https://github.com/ics-software-engineering/meteor-example-cloudinary/archive/master.zip).

Fourth, uncompress the zip file, and copy the following files and directories into your repo:

  * app/  
  * config/
  * .gitignore
  
You don't need to copy the README.md or index.md files (you should write your own), and you don't need to copy the doc/ directory (it contains only screenshots displayed in this page of documentation.)

Now your local repo should contain the template. To test that everything is OK so far, cd into the app directory install the required libraries with:

```
$ meteor npm install
```

## Create config/settings.production.json

Make a copy of config/settings.development.json, and call it settings.production.json. (This file is git-ignored, so you can put your Cloudinary cloud name and upload preset information in it and it will not be committed to GitHub.)

Edit this file to contain your account's cloud name and upload preset. For example:

```
{
  "cloudinary": {"cloud_name": "ddv7bqrzx", "upload_preset": "i24rt6wv"}
}
```

## Run the example program

Now you can run the application by invoking the ["start" script in the package.json file](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/package.json#L5):

```
$ meteor npm run start
```


**Note regarding bcrypt warning.** You will get the following message when you run this application:

```
Note: you are using a pure-JavaScript implementation of bcrypt.
While this implementation will work correctly, it is known to be
approximately three times slower than the native implementation.
In order to use the native implementation instead, run

  meteor npm install --save bcrypt

in the root directory of your application.
```

On some operating systems (particularly Windows), installing bcrypt is much more difficult than implied by the above message. Bcrypt is only used in Meteor for password checking, so the performance implications are negligible until your site has very high traffic. You can safely ignore this warning without any problems.

If all goes well, the template application will appear at [http://localhost:3000](http://localhost:3000).  



## Walkthrough

The following sections describe the major features of this template.


## Screencast

Click the image below to watch a 27 minute walkthrough of this system. This screencast was generated for a previous version of meteor-application-template, so there may be small differences in the code base. 

[<img src="https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template/master/doc/meteor-application-template-youtube.png" width="600">](https://www.youtube.com/watch?v=kEJN3kjyugs)

