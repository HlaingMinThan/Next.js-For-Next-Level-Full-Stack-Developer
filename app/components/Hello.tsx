"use client";
import { useState } from "react"

function Hello() {
    const [count,setCount] = useState(0);
    console.log("what is this hello component ?")
  return (
    <div>Hello {count}</div>
  )
}

export default Hello