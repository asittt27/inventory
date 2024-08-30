import React from 'react';

const TableRow = ({ children }) => {
  return (
    <tr className="w-full text-sm text-left text-gray-500 uppercase transition duration-300 ease-in-out transform border-b text-l border-gray-20 gray-700 text- hover:bg-gray-100 hover:scale-105 dark:text-gray-400 ">
      {children}
    </tr>
  );
};

export default TableRow;