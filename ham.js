const fs=require("fs")




  
  const SaveFile= (notes) => {
      const SaveFileOjb = JSON.stringify(notes);
      fs.writeFileSync(fileName,SaveFileOjb);
  }
  
  
  
  const Loadfile= function(notes){
    try{
  
      const notes= fs.readFileSync(fileName,{encoding: 'utf-8'})
      const notebook= JSON.parse(notes)
      return notebook
    }catch(err){
      return [];
    }
  
  
  
  }


function check(dirName){
    if(!fs.existsSync(dirName))
    fs.mkdirSync(dirName)

}
function deleteFile(filePath){
    if (fs.existsSync(filePath)){
        fs.unlinkSync(filePath);
         console.log(`deleted file "${filePath}"`)
        
    }else{
        console.log(` file "${filePath}" is not exist`)
    }
    const dirPath= filePath.replace(/\/.*?$/, "");
    if(fs.readdirSync(dirPath).length===0){
        fs.rmdirSync(dirPath);
        console.log(` file "${filePath}" is deleted`)

    }
    

}

module.exports={
    Loadfile,
    SaveFile,
    check,
    deleteFile,
}