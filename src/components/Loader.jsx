import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => (
  <div style={loaderStyle}>
    <ClipLoader size={80} color={"#153D8A"} loading={true} />
  </div>
);

const loaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(255, 255, 255, 1)',
  zIndex: 999999
};

export default Loader;