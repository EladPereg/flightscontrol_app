import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
export default function Add(props) {
    const nav = useNavigate()
    const [numberFly, setNumberFly] = useState('')
    const [company, setCompany] = useState('')
    const [visits, setVisits] = useState('')

    let x = props.flysArr.find((val) => { return val.numberFly == numberFly })

    const validts = () => {
        let num = Number(numberFly)
        if (x) {
            alert('כבר קיים מספר טיסה כזה')
        }
        else {
            if (numberFly != num) {
                alert('number must contain onlu digits')
            }
            else if (company.length == 0) {
                alert('enter company name')
            }
            else if (visits ==0 || visits > 700) {
                alert('An airplane can accommodate up to 700 passengers')
            }
            else {
                props.addFly(numberFly, company, visits)
                nav('/controlpanel')
                props.setFlagShow(true)
            }
        }
    }
  return (
    <div id='addFltDiv'>
    <div id='addFltMiniDiv'>
        <h2>here you cad add a new fly</h2>
        <input className='addFleInps' onChange={(e) => { setNumberFly(e.target.value) }} type='text' placeholder='number fly' /> <br />
        <input className='addFleInps' onChange={(e) => { setCompany(e.target.value) }} type='text' placeholder='company' /> <br />
        <input className='addFleInps' onChange={(e) => { setVisits(e.target.value) }} type='text' placeholder='visits' /> <br />
        <button style={{ width: '80px', height: '30px', borderRadius: '25px' }} onClick={() => { validts() }}>ADD</button>
    </div>
</div>
  )
}
