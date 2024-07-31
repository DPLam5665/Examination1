import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AddChemical from '../AddChemical/AddChemical'
export default function ChemicalItem() {
    // const ChemicalList = [
    //         {id: 1, name: 'Hydrocloric Acid', formula: 'HCl'},
    //         {id: 2, name: 'Sodium Cloride', formula: 'NaCl'},
    //         {id: 3, name: 'Sulfuric Acid', formula: 'H2SO4'},
    //         {id: 4, name: 'Ammonia', formula: 'NH3'},
    //         {id: 5, name: 'Ethanol', formula: 'C2H5OH'}
    // ]
    const dispatch = useDispatch()
    const chemicals = useSelector(state=>state.chemicals.chemicals) 
    
  return (
    <div>
        <h1>Chemical app</h1>
        {/* <h1>Chemical name: {chemical.name}</h1>
        <p>Chemical formula: {chemical.formula}</p> */}
        {
            chemicals.map((item,index)=>{
                <div key= {index}>
                    {item.name}
                    {item.formula}
                </div>
            })
        }
    </div>
  )
}
