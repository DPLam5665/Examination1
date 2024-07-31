import React from 'react'
import { addChemical } from '../../redux/chemicalSlice'

export default function AddChemical() {
  return (
    <div>
        <button onClick={()=>dispatch(addChemical(chemicals.id))}></button>
    </div>
  )
}
