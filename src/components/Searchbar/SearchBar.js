import React, { useState } from 'react'
import { InputGroup,Button,Container, Table, Input, Row} from 'reactstrap'
import { addChemical, deleteChemical } from '../../redux/chemicalSlice'
import { useSelector } from 'react-redux'
import './Searchbar.css'
export default function SearchBar() {
    const [text,setText] = useState('')
    const chemicals = useSelector(state=>state.chemicals.chemicals) 
  return (
    <div className='contain align-content-center'>
        <Container className='mx-auto w-90'>
                {/* <button onclick={addNewStudent}>Add new student</button>
                {
                    message && <p>{message}</p>
                } */}
                <h1>Chemical App</h1>
                <Row className='searchbar mx-auto'>
                <Input type='text' placeholder='Search your chemical' value={text} onChange={(event)=>setText(event.target.value)} onKeyDown={(e)=>{
                    if(e.key=='Enter'){
                        searchChemical(text)
                        setText('')
                    }
                }}
                />
                  <button className='btn btn-success w-25'  onClick={() => deleteChemical(text)}>Search Chemical</button>
                </Row>
                <Row className='tableRow mx-auto'>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Chemical's name
                            </th>
                            <th>
                                Chemistry formula
                            </th>
                            <th>
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            chemicals.map((item, index) => (
                                <tr>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.formula}
                                    </td>
                                    <td>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteChemical(item.id)}>Delete</button>
                                       
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </Table>
                </Row>
                
               
                <Row className='AddRow mx-auto  '>
                <Input className='NewChemical' placeholder='Add a new chemical name'/>
                <Input className='NewFormula'placeholder='Add formula'/>
                
                
                <button className='btn btn-primary w-25'>
                Add chemical
                </button>
                </Row>
            </Container>
    </div>
  )
}
