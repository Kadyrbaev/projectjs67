import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterType } from '../store'

const Calcualator = () => {
  const b = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  console.log(b);

  const add=()=>{
    dispatch({type: counterType.PLUS})
  }

  return (
    <div>
      <h1>COUNTER</h1>
      <button onClick={add}>ADD</button>
      <h1>{b.num}</h1>
    </div>
  )
}

export default Calcualator

