import React from "react"

function layout({children} : {children : React.ReactNode}) {
  return (
    <div>
        <aside className="text-3xl">Dashboard sidebar</aside>
        {children}
    </div>
  )
}

export default layout