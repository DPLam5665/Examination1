import { createSlice } from "@reduxjs/toolkit";
import AddChemical from "../components/AddChemical/AddChemical";
const initialState = {
    chemicals: [
        {id: 1, name: 'Hydrocloric Acid', formula: 'HCl'},
        {id: 2, name: 'Sodium Cloride', formula: 'NaCl'},
        {id: 3, name: 'Sulfuric Acid', formula: 'H2SO4'},
        {id: 4, name: 'Ammonia', formula: 'NH3'},
        {id: 5, name: 'Ethanol', formula: 'C2H5OH'}
    ]
}

const chemicalSlice = createSlice ({
    name: 'chemicals',
    initialState,
    reducers:{
        addChemical: (state, action) =>{
            state.chemicals.push(action.payload)
        },
        deleteChemical: (state, action) =>{
            state.chemicals = state.chemicals.filter(chemical=>chemicals.id !==action.payload)
        },
        // editChemical: (state, action) =>{
        //     state.chemical.push(action.payload)
        // },
        // AddChemical: (state, action) =>{
        //     state.chemical.push(action.payload)
        // }
    }
})
export const {addChemical, deleteChemical} = chemicalSlice.actions 
export default chemicalSlice.reducer