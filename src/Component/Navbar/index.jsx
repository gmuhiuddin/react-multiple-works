import React from 'react';
import {useDispatch} from 'react-redux';
import {updataTxt} from '../../store/theme'

function Navbar() {
const dispatch = useDispatch();

  return (
    <div>
      Navbar
      <button onClick={() => dispatch(updataTxt('Navabr txt'))}>Click ME</button>
    </div>
  )
}

export default Navbar;
