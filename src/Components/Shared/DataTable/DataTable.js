import React from "react";

const DataTable = (props) => {
  const { email, phone, date, firstname, lastname, cycleName } = props.order;
  return (
    <>
      <tr className="whitespace-nowrap">
        <td className="px-6 py-4 text-sm text-gray-500">{phone}</td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">
            {firstname} {lastname}
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-500">{email}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-500">{cycleName}</div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-500">{date}</td>
        <td className="px-6 py-4">
          <button className="px-4 py-1 text-sm text-white bg-green-500 rounded">
            <i class="far fa-edit"></i>
          </button>
        </td>
        <td className="px-6 py-4">
          <button className="px-4 py-1 text-sm text-white bg-red-400 rounded">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default DataTable;

/* 

 <tr className="whitespace-nowrap">
                  <td className="px-6 py-4 text-sm text-gray-500">1</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">Jon doe</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      jhondoe@example.com
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-sm text-white bg-blue-400 rounded">
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-sm text-white bg-red-400 rounded">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="whitespace-nowrap">
                  <td className="px-6 py-4 text-sm text-gray-500">1</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">Jon doe</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      jhondoe@example.com
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-sm text-white bg-blue-400 rounded">
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-sm text-white bg-red-400 rounded">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="whitespace-nowrap">
                  <td className="px-6 py-4 text-sm text-gray-500">1</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">Jon doe</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      jhondoe@example.com
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-sm text-white bg-blue-400 rounded">
                      Edit
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 text-sm text-white bg-red-400 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
*/
