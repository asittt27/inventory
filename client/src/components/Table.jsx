import React from 'react';

const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        {children}
      </table>
    </div>
  );
};

export default Table;