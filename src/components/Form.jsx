import React from 'react'
import { useSelector } from 'react-redux'

const Form = () => {
  const {name} = useSelector((state)=>state.name)
  console.log(name);
  return (
    <div>
      <h1>CHANGE NAME</h1>
      <button>change text</button>
      <h1>{name}</h1>
    </div>
  )
}

export default Form
