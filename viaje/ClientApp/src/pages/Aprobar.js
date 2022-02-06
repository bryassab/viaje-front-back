import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'



export default function Aprobar() {
    

    const [estadodb, setEstadodb] = useState({
        responsable:'',
        estado:''
       
    })
    

    const [data, setData] = useState([])

    const peticionGet = async () => {
        await axios.get(`/api/gestor`)
            .then(aprobarn => {
                setData(aprobarn.data)
            })
    }
        useEffect(() => {
            peticionGet();
        }, [])

    const update = async (id,obj) => {
        await axios.put(`/api/gestor/${id}`,obj)
            .then(resp => {
                peticionGet();
            })
    }
   


    

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setEstadodb({
            ...estadodb,
            [event.target.name]: event.target.value,
        })
        console.log(estadodb)

    }
    const report = async (event, id) => {
        event.preventDefault();


        var obj = {
            responsable: estadodb.responsable,
            estado: event.target.value
        }
        
        update(id,obj);
    }
    

    return (
        <div className="aprobar">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Documento</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Presupuesto Solicitado</TableCell>
                            <TableCell>Division</TableCell>
                            <TableCell>Telefono</TableCell>                           
                            <TableCell>Correo</TableCell>
                            <TableCell>Responsable</TableCell>
                            <TableCell>Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((Celda, index) => (
                            <TableRow key={Celda.id}>
                                <TableCell>{Celda.documento}</TableCell>
                                <TableCell>{Celda.nombre}</TableCell>
                                <TableCell>{new Date(Celda.fecha).toLocaleDateString("en-US")}</TableCell>
                                <TableCell>{Celda.presupuesto_Solicitado}</TableCell>
                                <TableCell>{Celda.division}</TableCell>
                                <TableCell>{Celda.telefono}</TableCell>                
                                <TableCell>{Celda.correo}</TableCell>
                                <TableCell>{Celda.responsable}
                                    <Form.Select aria-label="Default select example" style={{ width: '11.2rem' }} name="responsable" onChange={handleInputChange}>
                                        <option value=" " ></option>
                                    <option value="Agencia">Agencia</option>
                                    <option value="Cliente">Cliente</option>
                                    
                                </Form.Select></TableCell>
                                <TableCell>{Celda.estado}
                                    <Button variant="primary" type="submit" value="Aprobado" name="estado" className=" mx-auto" onClick={(e) => report(e, Celda.id)}>Aprobar</Button>{' '}
                                    <Button variant="danger" type="submit" value="Negado" name="estado" className=" mx-auto" onClick={(e) => report(e, Celda.id)}>Negar</Button>
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




        </div>
    )
}
