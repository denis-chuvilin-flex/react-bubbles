import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const hitApi = () => {
    axiosWithAuth()
      .get('/api/colors')
      .then((response) => {
        setColorList(response.data);
      })
      .catch(console.error());
  };

  useEffect(() => {
    hitApi();
  }, []);

  return (
    <>
      <ColorList colorList={colorList} setColorList={setColorList} hitApi={hitApi}/>
      <Bubbles colorList={colorList} />
    </>
  );
};

export default BubblePage;
