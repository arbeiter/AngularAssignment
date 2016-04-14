# AngularAssignment

**1. Running Instructions:**
  
 **i.** clone the solution to a folder with name like FolderName
 
 **ii.** Run the following commands:
 *   npm install http-server -g
 *   http-server FolderName

**2. Public URL hosted on AWS: http://mybucket-sidster.s3-website-us-east-1.amazonaws.com/**

For this point,  **Given a user filling out the form, when they attempt to submit a form that is not completely filled out they shall be notified by appropriate validation error messages:

I interpreted it as : Validation messages under the labels like in the angular material style guidelines as opposed to alerts and I disable the submit button so the user cannot submit the form unless all the fields are valid. Essentially I think preventing the user from submitting a form pre-emptively is better than notifying them after. 

Future improvements:

1. Use interceptor to handle responses and redirects.
2. Load index.html asynchronously.
