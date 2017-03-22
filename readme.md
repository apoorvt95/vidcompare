Video Compare

##Objectives
1) To develop MEAN Stack application deployed on AWS cloud.
2) Store response from facebook in Mongo database.
3) Stream two videos simultaneuosly and compare them.
4) Display name and square picture of user logged in.

##Tasks Completed
1) Basic Front-end with bootstrap.
2) Facebook O-auth login
3) Streaming of videos based upon the ID of videos.

##ISSUES
1) Issue configuring MongoDB on EC2 instance.
2) Have not implemented session functionality in the webapp.

AWS URL:http://ec2-54-255-148-110.ap-southeast-1.compute.amazonaws.com:3000/

SCHEMA FOR MONGO DB

users {
  fbid: xxxx,
  name : "xxxxx",
  ...
  is_app_user : true
}

