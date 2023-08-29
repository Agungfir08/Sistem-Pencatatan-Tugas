import { Task } from "../model/task.model.js"

export const getAllTask = async (req, res) => {
  try{
    await Task.findAll().then((result)=>{
      if(result.length > 0){
        return res
        .status(200)
        .json({
          data: result

        })
      }else{
        return res
        .status(404)
        .json({
          message: 'Data not found',
          statusCode: 404,
        })
      }
    })
  }catch(err){
    res
    .status(500)
    .json({
      message:err.message,
      statusCode: 500
    })
  }
}

export const createTask = async (req, res)=>{
  try{
    await Task.create({
      user_id: req.body.user_id,
      judul: req.body.judul,
      deskripsi: req.body.deskripsi,
      deadline: req.body.deadline //yyyy-mm-dd string
    })
    res
    .status(201)
    .json({message: 'task created'})
  }
  catch(err){
    res
    .status(500)
    .json({
      message: err.message,
      statusCode: 500
    })
  }
}