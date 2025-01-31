import React from "react"

function layout({children} : {children : React.ReactNode}) {
  return (
    <div>
        <nav className="text-3xl">Navbar</nav>
        {children}
    </div>
  )
}

export default layout