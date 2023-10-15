import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './components/coffee/Coffee';

const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl text-center text-purple-400 font-semibold'>Coffee shop</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-20'>
        {
          coffees.map((coffee, idx) => ((
            <Coffee key={idx} coffee={coffee} coffees={coffees} setCoffees={setCoffees} ></Coffee>
          )))
        }
      </div>
    </div>
  );
};

export default App;