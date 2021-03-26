import React from 'react';
import Registro from './Registro';

const Registros = ({users}) => {
    return ( 
        <ul class="list-group">
            <li class="list-group-item active ">
                <div className="d-flex w-100 justify-content-between">
                    <h5 class="mb-1" >Nombre y Apellidos</h5>
                    <h5 className="float-right">Salario</h5>
                </div>
                
                
            </li>
            {users.map(user=>(
                <Registro
                    key={user._id}
                    user={user}
                />
            ))}
        </ul>
     );
}
 
export default Registros;