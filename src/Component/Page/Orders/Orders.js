import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../Context/AuthContext/AuthProvide';
import OrdersView from './OrdersView';

const Orders = () => {

    const { user } = useContext(authContext);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?..You want to cancel this Order')
        if(proceed){
          fetch(`http://localhost:5000/orders/${id}`,{
            method:'DELETE'
          })
          .then(res =>res.json())
          .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = orders.filter(odr => odr._id !== id);
                setOrders(remaining);
            }
          })
        }
      }


    return (
        <div>
            <h2 className="text-5xl text-center font-bold pb-3  text-orange-600">You have {orders?.length} Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead className='font-bold text-2xl text-blue-600'>
                        <tr>
                            <th>RS</th>
                            <th>Image</th>
                            <th>Customar Name</th>
                            <th>Contract</th>
                            <th>Details</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.length > 0 &&

                               orders?.map(order => <OrdersView
                                key={order._id}
                                order={order}
                                handleDelete = {handleDelete}
                            ></OrdersView>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;