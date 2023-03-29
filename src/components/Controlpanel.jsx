import React from 'react'

export default function Controlpanel(props) {
  return (
    <div id='controlpanelDiv'>
    {props.showFlys()}
    <br />
    <br />
    <br />
    <br />
    {props.showMessage()}
</div>
  )
}
