import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, LineChart, Line, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './All.css';

function Home() {

  const data = [
    {
      name: 'Produce',
      local: 4000,
      global: 2400,
      amt: 2400,
    },
    {
      name: 'Bakery',
      local: 3000,
      global: 1398,
      amt: 2210,
    },
    {
      name: 'Meat',
      local: 2000,
      global: 9800,
      amt: 2290,
    },
    {
      name: 'Fr.Food',
      local: 2780,
      global: 3908,
      amt: 2000,
    },
    {
      name: 'Dairy',
      local: 1890,
      global: 4800,
      amt: 2181,
    },
    {
      name: 'Beverages',
      local: 2390,
      global: 3800,
      amt: 2500,
    },
    {
      name: 'Other',
      local: 3490,
      global: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'> 
      <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCT</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>

      </div>

      <div className='charts'>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="local" fill="#8884d8" activeBar={<Rectangle fill="blue" stroke="blue" />} />
          <Bar dataKey="global" fill="#82ca9d" activeBar={<Rectangle fill="green" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="local" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="global" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      </div>
    </main>
  )
}

export default Home