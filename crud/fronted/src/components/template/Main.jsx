import "./Main.css"
import React from 'react'
import Header from './Header'

export default props =>
  // Utilitado para colocar dois elementos, ao invés de colocar ambos me uma div
   <React.Fragment>
     <Header {...props} />
     <main className="content container-fluid">
       <div className="p-3 mt-3">
         {props.children}
       </div>
     </main>
   </React.Fragment>