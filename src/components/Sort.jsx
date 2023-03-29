import React, { useState } from 'react'

export default function Sort(props) {
    const [company, setCompany] = useState('')
    const [select, setSelect] = useState('choose')

    const showCompany = () => {
        let newArr = props.flysArr.filter((val) => {
            return val.company.indexOf(company) === 0
        })

        if (company != '' && select == 'choose') {
            return newArr.map((val) => {
                return <div className='newSortDiv' >
                    <h3>{`numberFly: ${val.numberFly} -|- company: ${val.company} -|- visits: ${val.visits}`}</h3>
                </div>
            })
        }
        if (company != '' && select === 'hige') {
            let higeArr = newArr.sort((a, b) => b.visits - a.visits)
            return higeArr.map((val) => {
                return <div className='newSortDiv' >
                    <h3>{`numberFly: ${val.numberFly} -|- company: ${val.company} -|- visits: ${val.visits}`}</h3>
                </div>
            })
        }
        if (company != '' && select === 'low') {
            let lowArr = newArr.sort((a, b) => a.visits - b.visits)
            return lowArr.map((val) => {
                return <div className='newSortDiv' >
                    <h3>{`numberFly: ${val.numberFly} -|- company: ${val.company} -|- visits: ${val.visits}`}</h3>
                </div>
            })
        }


    }
    return (
        <div id='sortDiv'>
            <div id='miniSortDiv'>
                <h3 style={{ color: 'white' }}>Type the name of the company, even one letter is enough</h3>
                <input style={{ height: '20px', borderRadius: '20px', textAlign: 'center' }} onChange={(e) => { setCompany(e.target.value) }} type='text' placeholder='company' /> <br />
                {showCompany()}
                <h3 style={{ color: 'white' }} id='h3Sort'>Here you can sort the flights {<br />}
                    according to the number of passengers{`=>`}</h3>
                <br /> <select style={{ width: '100px', height: '20px', borderRadius: '20px', textAlign: 'center' }} onChange={(e) => { setSelect(e.target.value) }}>
                    <option value={'choose'}>Regular</option>
                    <option value={'low'}>low</option>
                    <option value={'hige'}>hige</option>
                </select>
                {props.showMessage()}
            </div>
        </div>
    )
}
