import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Homepage(props) {
    const nav = useNavigate()
    const [number, setNumber] = useState('')
    const checkNumber = () => {
        if (number != 12345) {
            alert('error')
        }
        else {
            props.setFlag(true)
            nav('/controlpanel')
        }
    }
    return (
        <div id='homeDiv'>
            <div id='miniHomeDiv'>
                <h1 >Hello pilot, for enter the system, please type 12345</h1>
                <input style={{ width: '200px', height: '30px', textAlign: 'center', borderRadius: '25px' }} onChange={(e) => { setNumber(e.target.value) }} type='text' placeholder='numberFly' /> <br />
                <button style={{ width: '100px', height: '35px', marginTop: '15px', borderRadius: '27px', backgroundColor: 'transparent', fontSize: '20px' }} onClick={() => { checkNumber() }}>Enter</button>
            </div>
        </div>
    )
}
