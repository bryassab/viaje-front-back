import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FloatingLabel, Form } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';



export default function Solicitudes() {
   
    const [filtronombre, setFiltronombre] = useState("")
    const [filtrofecha, setFiltrofecha] = useState("")
    const [filtrodocumento, setFiltrodocumento] = useState({
        documento:''
    })
    const [select, setSelect] = useState("")
    const handleInputChange = (event) => {
        setFiltronombre(event.target.value)
        console.log(filtronombre)
    };
    const handle = (event) => {
        setSelect(event.target.value)
        console.log(select)
    };
    const handleInput = (event) => {
        setFiltrofecha(event.target.value)
        console.log(filtrofecha)
    };
    const handleInputChang = (event) => {
        
        
        setFiltrodocumento({
            ...filtrodocumento,
            [event.target.name]: event.target.value
        })
        console.log(filtrodocumento)
    };

    const [data, setData] = useState([]);
    const SolictudesGet = async () => {
        await axios.get(`/api/solicitudes`)
            .then(solicitudget => {
                setData(solicitudget.data)
                
            })
       
    }
    useEffect(() => {
        SolictudesGet();
    }, [])


    
  return (
      <div className='solicitudes'>
          <Form.Select aria-label="Default select example" style={{ width: '18rem' }} onChange={handle} >
              <option>Filtrar por...</option>
              <option value="nombre">Nombre</option>
              <option value="fecha">Fecha</option>
              <option value="documento">Documento</option>
          </Form.Select>
          <FloatingLabel controlId="floatingTextarea" label="buscar"  style={select === "nombre" ? { display: "block", width: '18rem' } : { display: "none", width: '18rem' } }>
              <Form.Control placeholder="buscar" name="buscar" onChange={handleInputChange}  />
          </FloatingLabel>
          <TextField
              id="date"
              label="Fecha"
              type="date"
              name="fecha"
              onChange={handleInput}
              InputLabelProps={{
                  shrink: true,
              }}
              style={select === "fecha" ? { display: "block", width: '18rem' } : { display: "none", width: '18rem' }}
          />
          <FloatingLabel controlId="floatingTextarea" label="Documento" style={select === "documento" ? { display: "block", width: '18rem' } : { display: "none", width: '18rem' }} >
              <Form.Control placeholder="Documento" type="number" name="documento"  onChange={handleInputChang} />
          </FloatingLabel>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Documento</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Presupuesto Solicitado</TableCell>
              <TableCell>Responsable</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
                  <TableBody>
                      {data.filter((celda) => {
                          console.log(celda);
                          console.log(filtrofecha);
                          console.log(select);
                          if (select === "nombre" && (filtronombre === "" || celda.nombre.toLowerCase().includes(filtronombre.toLowerCase()))) {
                              return celda
                          } else if (select === "fecha" && (filtrofecha === "" || celda.fecha.slice(0,-9) === filtrofecha)) {
                              return celda
                          } else if (select === "documento" && (filtrodocumento.documento === "" || celda.documento.includes(filtrodocumento.documento))) {
                              return celda
                          }
                         else if (select === "") {
                              return celda
                         }
                          
                      })
                          .map((Celda, index) => (
                              
              <TableRow key={Celda.id}>
                <TableCell>{Celda.documento}</TableCell>
                <TableCell>{Celda.fecha.slice(0,-9)}</TableCell>
                <TableCell>{Celda.nombre}</TableCell>
                <TableCell>{Celda.presupuesto_Solicitado}</TableCell>
                <TableCell>{Celda.responsable}</TableCell>
                <TableCell>{Celda.estado}</TableCell>
              </TableRow>
                      
            ))}
          </TableBody>
        </Table>
      </TableContainer>
         



    </div>
  )
}
