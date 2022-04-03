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
          <button className="px-4 py-1 text-sm text-whitebg-green-500 rounded">
            <i className="far fa-edit"></i>
          </button>
        </td>
        <td className="px-6 py-4">
          <button className="px-4 py-1 text-sm text-white bg-red-400 rounded">
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default DataTable;

