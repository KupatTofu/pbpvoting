import React, { useEffect, useState } from 'react';

const Client = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('...');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Client;
