import React from "react";
import {useNavigate} from "react-router-dom";

const Employee = ({employee, deleteEmployee}) => {

const navigate = useNavigate();

const editEmployee = (e, id) => {
  e.preventDefault();
  navigate(`/editEmployee/${id}`);
}

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.email}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a 
         onClick={(e, id) => editEmployee(e, employee.id)}
         className="px-4 hover:cursor-pointer">
          Edit
        </a>
        <a onClick={(e, id) => deleteEmployee(e, employee.id)} className="hover:cursor-pointer">Delete</a>
      </td>
    </tr>
  );
};

export default Employee;
