import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";

const Formulario = () => {

// crear un state
const [arregloTareas, setArregloTareas] = useState([]);
const [tarea, setTarea] = useState('');

const handleSubmit  = (e) => {
 e.preventDefault();
 console.log('prueba de submit');
 //actualizar lista de tareas
 setArregloTareas([...arregloTareas,tarea]);
 setTarea('');
}
//funcion para borrar tarea
const borrarTarea = (nombre) =>{
 let arregloModificado = arregloTareas.filter((valor)=>{return valor !== nombre})
 // actualizar el state
 setArregloTareas(arregloModificado);
}
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control 
          type="text" 
          placeholder="Ingrese una tarea" 
          onChange={ (e)=>  setTarea(e.target.value.trimStart()) }
          value={tarea}
          />
          
          <Button variant="primary" type="submit">
           Enviar
          </Button>
        </Form.Group>
      </Form>
      {/* aqui invoco al componente ListaTareas */}
      <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTareas>
    </div>
   
  );
};

export default Formulario;
