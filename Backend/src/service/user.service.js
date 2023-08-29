import user from "../model/user.model"

const getAllUser = async(req, res) => {
  try{
    await user.findAll().then((result)=>{
      if(result.length > 0){
        res.status(200).json({
          data: result
        })
      }else{
        res.status(404).json({
          message: 'Data not found',
          statusCode: 404,
        })
      }
    })
  }catch(err){
    res.status()
  }
}