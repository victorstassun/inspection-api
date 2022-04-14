# inspection-api
This is an API created for a inspection software. In this API you can transform .xlms archives to .json files,
and trhow it to a web-server to consume it where you want. 

To test it, you´ll need to have some .xlsx files in your computer. 

Step 1. First you´ll need to initialize your front and backend application. To initialize back-end:

1. On your terminal after install all dependencies (npm install) do:
 
  >nodemon listData.js         // This command will initialize your server in localhost:3000/

  
Step 2. After that in your homepage it will have an upload option, so, you just 
upload the .xlsx file you want and send;

Step 3. Go back to your api code and execute the follow command:

  >node converter.js          // This will make your .xmls turn into a .json file 

Step 4. After that, open the ./uploads directory and you´ll note that a new file has been
created. Now you just need to copy the file name and insert it in the line 6 of converter.js:

  >const wb = xlsx.readFile('./uploads/{yourFileName}', {cellDates:true}) 
  // In {yourFileName} you should enter the converted .xmls file name that will be in ./uploads
  
Step 5. So now your api is ready with the .xlsx data turned into a .json file that you could do
requisitions and other things in your application.

OBS: This application will have updates, when it occurs I´ll always update this documentation ;)
