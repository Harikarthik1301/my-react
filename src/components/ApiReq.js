const ApiReq = async (url = '' , modeobj = null , errMsg = null) =>{
    try{
  const response =await fetch(url,modeobj)
  if(! response.ok) throw Error ("Please Reload The App")
    }
     catch(err){
        errMsg = err. messsage
     }
    
      finally{
 return errMsg
      }
}

 export default ApiReq