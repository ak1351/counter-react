import React from 'react'

export default function CalculateCount({numArr,title}) {
  return (
    <>
    <h2>{title}</h2>
    <div>{numArr.map((data)=><li> {data}</li>)} </div>
    </>
  )
}
