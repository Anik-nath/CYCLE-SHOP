import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import DataTable from "../../Shared/DataTable/DataTable";

const OrderList = () => {
  const [allOrder, setAllOrder] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/orders/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, [user.email]);

  return (
    <div className="text-center pt-24">
      <h2 className="text-2xl font-semibold pt-8 mb-4 text-green-500 uppercase">My Orders</h2>

      <div className="flex justify-center mx-16">
        <div className="flex flex-col container overflow-x-auto">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">Phone</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Email</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Cycle</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Placed</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {allOrder.map((order) => (
                    <DataTable key={order._id} order={order}></DataTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
