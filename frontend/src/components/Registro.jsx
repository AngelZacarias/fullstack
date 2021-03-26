import React from 'react'

const Registro = ({user}) => {
    return ( 
        <li class="list-group-item">
            <p>
                {`${user.name} ${user.lastName}`}
                <span className="badge rounded-pill bg-primary text-white float-right">
                    ${user.salary}
                </span>
            </p>
        </li>
     );
}
 
export default Registro;