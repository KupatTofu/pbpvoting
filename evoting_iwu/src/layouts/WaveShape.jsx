import React from 'react';

const WaveShape = () => {
  return (
    <div
      className="absolute bottom-0 left-0 w-full h-[150px]"
      style={{
        background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"%23ffffff\" d=\"M0,224C160,160,320,160,480,192C640,224,800,288,960,288C1120,288,1280,224,1440,192L1440,320L0,320Z\"/></svg>') no-repeat bottom center",
        backgroundSize: 'cover'
      }}
    />
  );
};

export default WaveShape;