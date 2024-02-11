import React, { useMemo } from "react";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/Api";
import { ResponsiveContainer, Legend,AreaChart, XAxis, BarChart,Bar,YAxis, Tooltip, Area, Line, CartesianGrid, LineChart } from "recharts";
import { useTheme } from "@emotion/react";
import BoxHeader from "@/components/BoxHeader";

const Row1 = () => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();

  const revenueExpenses = useMemo(() => {
    if (data && data[0]?.monthlyData) {
      return data[0].monthlyData.map(({ month, revenue, expenses }) => ({
        name: month.substring(0, 3),
        revenue:revenue,
        expenses:expenses,
      }));
    }
    return [];
  }, [data]);
  const revenueProfit = useMemo(() => {
    if (data && data[0]?.monthlyData) {
      return data[0].monthlyData.map(({ month, revenue, expenses }) => ({
        name: month.substring(0, 3),
        revenue:revenue,
        profit:(revenue-expenses).toFixed(2),
      }));
    }
    return [];
  }, [data]);
    const revenue = useMemo(() => {
    if (data && data[0]?.monthlyData) {
      return data[0].monthlyData.map(({ month, revenue }) => ({
        name: month.substring(0, 3),
        revenue:revenue,
        
      }));
    }
    return [];
  }, [data]);
  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Revenue and Expenses"
          subtitle="Top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={revenueExpenses}
            margin={{ top: 15, right: 25, left: -10, bottom: 60 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
            <YAxis tickLine={false} axisLine={{ strokeWidth: "0" }} style={{ fontSize: "10px" }} domain={[8000, 23000]} />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
            <Area type="monotone" dataKey="expenses" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b">
               <BoxHeader
          title="Revenue and Profit"
          subtitle="Top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
          width={500}
          height={300}
          
            data={revenueProfit}
            margin={{ top: 20, right: 0, left: -10, bottom: 55 }}
          ><CartesianGrid vertical={false} stroke={palette.grey[800]}/>
          
            <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} />
            <YAxis yAxisId="left" tickLine={false} axisLine={false} style={{ fontSize: "10px" }}  />
            <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} style={{ fontSize: "10px" }}  />
            <Tooltip />
            <Legend height={20} wrapperStyle={{margin: '0 0 10px 0'}}/>
            <Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]} />
             <Line yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
            
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="c">
              <ResponsiveContainer width="100%" height="100%">
                   <BoxHeader
          title="Revenue Month By Month"
          subtitle="Graph representing the revenue month by month"
          sideText="+4%"
        />
        <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 17,
            right: 15,
            left: -5,
            bottom: 58,
          }}
        >
          <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
              </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} style={{fontSize:"10px"}} />
          <YAxis axisLine={false} tickLine={false} style={{fontSize:"10px"}} />
          <Tooltip />
          
          <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          
        </BarChart>
      </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
