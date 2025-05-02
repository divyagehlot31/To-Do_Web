import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from '../../components/To-Do/ToDo';

function DashBoard({currentUser}) {
  return (
    <div>
       
        <ToDo currentUser={currentUser} />
    
    </div>
  )
}

export default DashBoard
