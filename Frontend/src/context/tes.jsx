import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Tes = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get("https://tasks-three-mauve.vercel.app/task/3")
      .then((res) => {
        setData([...res.data.data])
      })
      .catch((error) => {
      })
  }, [])

  console.log(data)

  return (
    <>
      <div>
        <ul>
         
          { data !== null && data.map((res) => {
            return (
              <>
                <li>  {res.id} </li>
                <li>  {res.judul} </li>
              </>
            )
          })}

        </ul>
      </div>
    </>
  )

}

export default Tes