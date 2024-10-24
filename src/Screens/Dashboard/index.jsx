import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updataTxt } from '../../store/theme';
import { changeColor } from '../../store//colorSlice';

function Dashboard() {
  const { colorSlice : {color} , txtSlice : {txt} } = useSelector(res => res);
const inputRef = useRef(null);

const dispatch = useDispatch();

useEffect(() => {
  inputRef.current.focus()
  console.log(inputRef.current);
}, [])

  // console.log(colorSlice, txtSlice);
  return (
    <div>
      <h1>
      {txt}
      </h1>
      DashBoard
      <button onClick={() => dispatch(updataTxt('Dashboard txt'))}>Click me</button>
<br />
      {color}
      <br />

      <button onClick={() => dispatch(changeColor(color == 'red' ? 'green': 'red'))}>Click me to change color</button>
<input ref={inputRef} />
    </div>
  )
}

export default Dashboard;
