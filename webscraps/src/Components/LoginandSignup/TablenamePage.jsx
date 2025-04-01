import React from 'react';
import Navbar from '../Common/Navbar'; // Import the Navbar component

const TablenamePage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to the Tablename Page</h1>
        <p>This page will display table-related content.</p>
      </div>
    </div>
  );
};

export default TablenamePage;