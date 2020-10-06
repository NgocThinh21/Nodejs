const fs= require("fs");
const chalk= require("chalk")
const yargs= require("yargs")



const ham = require("./ham");


fileName = "books.json";

  yargs.command({
    command:'add',
    descreption:'add a new note',
    buider:{
    title:{
      descreption:'Note title',
      demandOption: true,
      type: 'string',
    },
    body:{
      descreption:'Note body',
      demandOption: true,
      type: 'string',
  
    }
  },
  handler: function(argv){
    const notes= ham.Loadfile();

    const note={
      title: argv.title,
      body: argv.body,
    }
    try{

      
            
            if(notes.title===note.title){
              console.log("da ton tai")
              }else{
                notes.push(note)
                ham.SaveFile(notes)
              }
           
        
    }catch(err){
    console.log(err)
  }
    console.log(chalk.green.greenBright("da thanh cong"))
  }
  
  }).argv
