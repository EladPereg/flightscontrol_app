import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function Delete(props) {
    const [numberfly, setNumberFly] = useState('')
    const [message, setMessage] = useState(false)
    const [numFlyOnAir, setNumFlyOnAir] = useState('')
    const [numVisitsOnAir, setNumVisitsOnAir] = useState('')
    let y = props.flysArr.find((val) => { return val.numberFly == numberfly })
    let sum = 0
    const check = () => {
        if (y == null) {
            alert('No such flight exists')
        }
        else {
            return props.flysArr.find((val, index) => {
                if (val.numberFly == numberfly) {
                    let temp = [...props.flysArr]
                    temp.splice(index, 1)
                    props.setFlysArr(temp)
                    for (let i = 0; i < props.flysArr.length; i++) {
                        sum += Number(props.flysArr[i].visits)
                    }
                    setNumFlyOnAir(props.flysArr.length - 1)
                    setNumVisitsOnAir(sum - val.visits)
                    setMessage(true)
                }
            })
        }
    }
    const showMessage = () => {
        if (message === true) {
            return <div>
                <h2 style={{ color: 'red' }}>  The flight has been deleted !</h2>
                <h3 style={{ color: 'blue' }}>  The amount of flights that currently left in the air is- {numFlyOnAir} </h3>
                <h3 style={{ color: 'blue' }}>  The amount of passenger sthat currently left in the air is- {numVisitsOnAir}</h3>
            </div>
        }
    }

    let colorsArr = ['red', 'blue', 'green', 'lime', 'gray', 'pink', 'aqua', 'blueviolet', 'cadetblue', 'crimson', 'fuchsia', 'darkred']
    let rand = Math.floor(Math.random() * colorsArr.length)
    let color = colorsArr[rand]

    const showArry = () => {
        return props.flysArr.map((val) => {
            return <div style={{ border: '2px black solid', width: '500px', marginLeft: '33%' }}>
                <h3 style={{ backgroundColor: color }}>{`fly Number- ${val.numberFly} | company- ${val.company} | visits- ${val.visits} `}</h3>
            </div>
        })
    }

    const deletInp = () => {
        const elemnt = document.getElementById('inp')
        elemnt.value = ''
    }
  return (
    <div id='deleteDiv'>
    <div id='miniDeleteDiv'>
        <h3>Type the flight number you want to delete</h3>
        <input id='inp' style={{ height: '20px', borderRadius: '20px', textAlign: 'center' }} onChange={(e) => { setNumberFly(e.target.value) }} type="number" placeholder='number fly' /><br />
        <button style={{ width: '80px', height: '30px', borderRadius: '25px', marginTop: '10px' }} onClick={() => { check();deletInp() }}>Delet flight</button> <br />
        {showMessage()}
        <br />
        {showArry()}
    </div>
</div>
  )
}
