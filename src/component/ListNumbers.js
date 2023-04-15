import React from 'react'

export default function listNumbers({list,title}) {
  return (
    <>
    <h2>{title}</h2>
    <div>{list.map((data,key)=><div  key={key} style={{display:"flex",flexDirection:"column"}}>{data}</div>)} </div>
    </>
  )
}
