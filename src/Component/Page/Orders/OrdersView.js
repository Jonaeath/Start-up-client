import React, { useEffect, useState } from 'react';

const OrdersView = ({order,handleDelete}) => {

    const {_id,customer,serviceName,price,phone,email,message,service} = order;
    const [orderService, setOrderservice] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/newStartUp/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderservice(data))
    },[service])

    

    return (  
      <tr>
        <th>
                <label>
                    <button onClick = {()=> handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              { 
                orderService?.img &&
                <img src={orderService?.img} 
                alt="Avatar Tailwind CSS Component" />
                }
            </div>
          </div>
        </div>
      </td>
      <td>
        {customer}
      </td>
      <td>
        {phone} 
      <br/>
        {email}
      </td>
      <td>
        {serviceName} 
      <br/>
        ${price}
      </td>
      <td>{message}</td>
    </tr>
    );
};

export default OrdersView;