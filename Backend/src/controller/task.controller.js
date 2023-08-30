import { Task } from "../model/task.model.js"
import user from "../model/user.model.js"

export const getAllTask = async (req, res) => {
  try{
    if(!req.body.user_id){
      return res
        .status(401)
        .json({message: 'user id not included!'})
    }

    await Task.findAll({
      where:{
        user_id: req.body.user_id
      },
      attributes:['id', 'judul', 'deskripsi', 'deadline']
    })
      .then((result)=>{
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
    return res
      .status(500)
      .json({
        message:err.message,
        statusCode: 500
    })
  }
}

export const createTask = async (req, res)=>{
  const {user_id, judul, deskripsi, deadline} = req.body
  try{
    await Task.create({
      user_id: req.body.user_id,
      judul: req.body.judul,
      deskripsi: req.body.deskripsi,
      deadline: req.body.deadline //yyyy-mm-dd
    })
    return res
      .status(201)
      .json({message: 'task created'})
  }
  catch(err){
    res
      .status(400)
      .json({
        message: err.message,
        statusCode: 400
      })
  }
}

export const updateTask = async (req, res)=>{
  if(!req.params.id){
    return res
      .status(400)
      .json({
        message: "task id has to be included"
      })
  }
  try{
    await Task.update({
      user_id: req.body.user_id,
      judul: req.body.judul,
      deskripsi: req.body.deskripsi,
      deadline: req.body.deadline //yyyy-mm-dd
    },
    {
      where:{
        id: req.params.id
      }
    })
    res
      .status(200)
      .json({message:"Task updated successfully"})
  }catch(err){
    return res
      .status(400)
      .message({message: err.message})
  }
}

export const deleteTask = async (req, res) =>{
  if(!req.params.id){
    return res
      .status(400)
      .json({
        message: "task id has to be included"
      })
  }
  try{
    await Task.destroy({
      trucante:true,
      where:{
        id: req.params.id
      }
    })
    return res
      .status(200)
      .json({message: "Task deleted successfully"})
  }catch(err){
    return res
      .status(500)
      .json({message: err.message})
  }
}

// export const getTaskById