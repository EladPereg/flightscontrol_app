import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Homepage from './components/Homepage';
import Controlpanel from './components/Controlpanel';
import Add from './components/Add';
import Sort from './components/Sort';
import Delete from './components/Delete';
import Menu from './components/Menu';

function App() {
  const [flysArr, setFlysArr] = useState([
    { numberFly: 33, company: 'eladddd', visits: 400 },
    { numberFly: 11, company: 'el al', visits: 200 },
    { numberFly: 22, company: 'elad', visits: 300 },
  ])
  const addFly = (numberFly, company, visits) => {
    setFlysArr([...flysArr, { numberFly, company, visits }])
  }
  console.log(flysArr.length)
  const showMessage = () => {
    if (flysArr.length == 0) {
      return <h1>Currently there is no flights in the air</h1>
    }
  }

  let colorsArr = ['red', 'green', 'lime', 'gray', 'pink', 'aqua', 'crimson', 'fuchsia', 'darkred']
  let rand = Math.floor(Math.random() * colorsArr.length)
  let color = colorsArr[rand]
  let color2 = colorsArr[rand - 1]
  let color3 = colorsArr[rand + 1]
  if (colorsArr.indexOf(color2) == -1 || colorsArr.indexOf(color3) == -1) {
    color2 = 'red'
    color3 = 'lime'
  }


  const [flagShow, setFlagShow] = useState(true)
  const showFlys = () => {
    if (flagShow === true) {
      return flysArr.map((val) => {
        return <div id='allFLyTv'>

          <div id='miniallFLyTv' >
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <h3 style={{ color: color }}>numberFly: {val.numberFly}</h3>
              <h2 style={{ color: color2 }}>company: {val.company}</h2>
              <h2 style={{ color: color3 }}>visits: {val.visits}</h2>
            </div>
          </div>

        </div>
      })
    }
  }


  const [flag, setFlag] = useState(false)
  const showMenu = () => {
    if (flag === true) {
      return <Menu flysArr={flysArr} setFlagShow={setFlagShow} />
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        {showMenu()}
        <Routes>
          <Route path='*' element={<Homepage setFlag={setFlag} />} />
          <Route path='/controlpanel' element={<Controlpanel showFlys={showFlys} showMessage={showMessage} />} />
          <Route path='/controlpanel/sort' element={<Sort flysArr={flysArr} showMessage={showMessage}/>}/>
          <Route path='/controlpanel/add' element={<Add flysArr={flysArr} addFly={addFly} setFlagShow={setFlagShow} />} />
          <Route path='controlpanel/delete' element={<Delete flysArr={flysArr} setFlysArr={setFlysArr}/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
