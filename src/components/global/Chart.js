import { Grid } from '@material-ui/core';
import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';


export const Chart = ({confirmed, recovered, deaths}) => {

const data = [
    { name: 'Confirmed', value: confirmed },
    { name: 'Recovered', value: recovered },
    { name: 'Deaths', value: deaths },
  ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
      <PieChart width={800} height={400} style={{justifyContent: 'center'}}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }

