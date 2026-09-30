const fs = require("fs");
const fileName="sample.txt";
const data=`Employee Name:Tamil, 
Employee ID: 101`;

fs.writeFile(fileName,data,function(err)
{
    if(err)
    {
        console.log(err);
    }
   else
   {
    console.log("File created successfully");
   }

fs.readFile(fileName,function(err,)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
     console.log(data);
  }
});
 console.log(data);