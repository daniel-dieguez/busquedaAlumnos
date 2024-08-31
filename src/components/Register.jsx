import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Style from '../css/inicio.module.css'

export default function Register() {


    const [carnet, setCarnet] = useState ('');
    const [datosA,setDatosA ] = useState(null);


const urlumg = 'http://localhost:9000/task/'

    useEffect(() => {
      axios.get(urlumg).then(response => {
        console.log(response.data)
      })
    
    }, [])
    

    const hanleInput = (e) =>{
        e.preventDefault();
        setCarnet(e.target.value)
        console.log(carnet);
    }

    const searchAlumno = () =>{

            axios.get(`${urlumg}${carnet}`)
                .then(response => {
                    console.log(response.data);
                    setDatosA(response.data); // Guarda los datos del estudiante encontrado
                })
                .catch(error => {
                    console.error('Error al buscar el carnet:', error);
                    setDatosA(null); // Si hay un error, limpia los datos
                });
        }

        

  return (
    <div>
    <Form.Group className="mb-3">
        <Form.Label>Carnet</Form.Label>

        <Form.Control value={carnet} onChange={hanleInput} type="text" placeholder="carnet de alumno" />
    </Form.Group>
    {datosA ? (
                <div>
                    <h1>Nombre de Alumno</h1>
                    <h5>{datosA.nombre}</h5>
                    <h1>Correo Electronico</h1>
                    <h5>{datosA.correo}</h5>
                    <h1>Seccion</h1>
                    <h5>{datosA.seccion}</h5>
                </div>
            ) : (
                <p>No se ha realizado ninguna búsqueda o no se encontraron resultados.</p>
            )}

        <Button variant='primary' className='me-2' onChange={searchAlumno}>Buscar</Button>
        <Button variant='primary' className='me-2' onClick={() => setCarnet('')}>Limpar</Button>
        <Button variant='primary' className='me-2'>Cancelar</Button>


    
      
    </div>
  )
}
