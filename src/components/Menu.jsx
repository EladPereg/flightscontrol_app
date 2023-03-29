import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function Menu(props) {
  return (
    <div >
    <div id='MenuDiv'>
        <Link to='controlpanel/delete'><button className='btn' onClick={() => { props.setFlagShow(false) }}>Delet  flight</button></Link> <br />
        <Link to='controlpanel/sort'><button className='btn' onClick={() => { props.setFlagShow(false) }}>Sort flight</button></Link>  <br />
        <Link to='controlpanel/add'><button className='btn' onClick={() => { props.setFlagShow(false) }}>Add flight</button ></Link> <br />
        <Link to='/controlpanel'><button className='btn' onClick={() => { props.setFlagShow(true) }}>All flights</button></Link>  <br />
    </div>
</div>
  )
}
