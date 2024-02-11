// import React,{useMemo} from 'react'
// import DashboardBox from '@/components/DashboardBox'
// import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/Api'
// import { DataGrid, GridCellParams } from '@mui/x-data-grid'
// import BoxHeader from '@/components/BoxHeader'
// import FlexBetween from "@/components/FlexBetween";
// import { Box, Typography, useTheme } from "@mui/material";
// import { Cell, Pie, PieChart } from "recharts";
// type Props = {}

// const Row3=> {
//   const { palette } = useTheme();
//   const { data: kpiData } = useGetKpisQuery();
//   const { data: productData } = useGetProductsQuery();
//   //   if (productData) {
//   //   productData.forEach((item, index) => {
//   //     item.id = item._id; // Assign a unique ID for each row
//   //   });
//   // }

//   // // Add unique id to each row in transactionData array
//   // if (transactionData) {
//   //   transactionData.forEach((item, index) => {
//   //     item.id = index + 1; // Assign a unique ID for each row
//   //   });
//   // }
  
//   const pieChartData = useMemo(() => {
//     if (kpiData) {
//       const totalExpenses = kpiData[0].totalExpenses;
//       return Object.entries(kpiData[0].expensesByCategory).map(
//         ([key, value]) => {
//           return [
//             {
//               name: key,
//               value: value,
//             },
//             {
//               name: `${key} of Total`,
//               value: totalExpenses - value,
//             },
//           ];
//         }
//       );
//     }
//   }, [kpiData]);
//   const productColumns = [
//     {
//       field: "_id",
//       headerName: "id",
//       flex: 1,

//     },
//     {
//       field: "_expense",
//       headerName: "expense",
//       flex: 0.5,
//       renderCell: (params: GridCellParams) => `$${params.value}`,

//     },
//     {
//       field: "price",
//       headerName: "Price",
//       flex: 0.5,
//       renderCell: (params: GridCellParams) => `$${params.value}`,

//     }
//   ]
//   const { data: transactionData } = useGetTransactionsQuery();
//   const transactionColumns = [
//     {
//       field: "_id",
//       headerName: "id",
//       flex: 1,
//     },
//     {
//       field: "buyer",
//       headerName: "Buyer",
//       flex: 0.67,
//     },
//     {
//       field: "amount",
//       headerName: "Amount",
//       flex: 0.35,
//       renderCell: (params: GridCellParams) => `$${params.value}`,
//     },
//     {
//       field: "productIds",
//       headerName: "Count",
//       flex: 0.1,
//       renderCell: (params: GridCellParams) =>
//         (params.value as Array<string>).length,
//     },
//   ];


//   return (
//     <>
// //       <DashboardBox gridArea="g">
// //         <BoxHeader title='List of Products' sideText={`${productData?.length}products`} />
// //         <Box mt="0.5rem" p="0 0.5rem" height="75%" sx={{
// //           "& .MuiDataGrid-root": {
// //             color: palette.grey[300], border: "none"
// //           },
// //           "&.MuiDataGrid-cell": {
// //             borderBottom:`1px solid ${palette.grey[800]} !important`
          

// //           },
// //            "&.MuiDataGrid-columnHeaders": {
// //             borderBottom:`1px solid ${palette.grey[800]} !important`
          

// //           },
// //           //  "&.MuiDataGrid-columnSeparator": {
// //           //   visibility:"hidden",
          

// //           // },

// //         }} >
// //           <DataGrid columnHeaderHeight={25}
// //             rowHeight={35}
// //             hideFooter={true}
            
// //             rows={productData || []}
// //             columns={productColumns} />
// //         </Box>
// //       </DashboardBox>
       

// //       <DashboardBox gridArea="h">
// //             <BoxHeader title='List of Products' sideText={`${productData?.length}products`} />
// //         <Box mt="0.5rem" p="0 0.5rem" height="75%" sx={{
// //           "& .MuiDataGrid-root": {
// //             color: palette.grey[300], border: "none"
// //           },
// //           "&.MuiDataGrid-cell": {
// //             borderBottom:`1px solid ${palette.grey[800]} !important`
          

// //           },
// //            "&.MuiDataGrid-columnHeaders": {
// //             borderBottom:`1px solid ${palette.grey[800]} !important`
          

// //           },
// //            "&.MuiDataGrid-columnSeparator": {
// //             visibility:"hidden",
          

// //           },

// //         }} >
// //           <DataGrid columnHeaderHeight={25}
// //             rowHeight={35}
// //             hideFooter={true}
// //             rows={productData || []}
// //             columns={productColumns} />
// //         </Box>
// //       </DashboardBox>
      
// //       <DashboardBox gridArea="i">
// //         <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
// //         <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
// //           {pieChartData?.map((data, i) => (
// //             <Box key={`${data[0].name}-${i}`}>
// //               <PieChart width={110} height={100}>
// //                 <Pie
// //                   stroke="none"
// //                   data={data}
// //                   innerRadius={18}
// //                   outerRadius={35}
// //                   paddingAngle={2}
// //                   dataKey="value"
// //                 >
// //                   {data.map((entry, index) => (
// //                     <Cell key={`cell-${index}`} fill={pieColors[index]} />
// //                   ))}
// //                 </Pie>
// //               </PieChart>
// //               <Typography variant="h5">{data[0].name}</Typography>
// //             </Box>
// //           ))}
// //         </FlexBetween>
//     //   </DashboardBox>
//             <DashboardBox gridArea="j">
//         <BoxHeader
//           title="Overall Summary and Explanation Data"
//           sideText="+15%"
//         />
//         <Box
//           height="15px"
//           margin="1.25rem 1rem 0.4rem 1rem"
//           bgcolor={palette.primary[800]}
//           borderRadius="1rem"
//         >
//           <Box
//             height="15px"
//             bgcolor={palette.primary[600]}
//             borderRadius="1rem"
//             width="40%"
//           ></Box>
//         </Box>
//         <Typography margin="0 1rem" variant="h6">
//           Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
//           ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas
//           molestie volutpat et. Malesuada quis pretium aliquet lacinia ornare
//           sed. In volutpat nullam at est id cum pulvinar nunc.
//         </Typography>
//       </DashboardBox>
//     </>
  
//   )
// }

// export default Row3
import React, { useMemo } from 'react';
import DashboardBox from '@/components/DashboardBox';
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/Api';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import BoxHeader from '@/components/BoxHeader';
import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";

const Row3 = () => {
  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();



  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "_expense",
      headerName: "expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    }
  ];

  const { data: transactionData } = useGetTransactionsQuery();
  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];

  return (
    <>
      <DashboardBox gridArea="j">
        <BoxHeader
          title="Overall Summary and Explanation Data"
          sideText="+15%"
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
          Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
          ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas
          molestie volutpat et. Malesuada quis pretium aliquet lacinia ornare
          sed. In volutpat nullam at est id cum pulvinar nunc.
        </Typography>
      </DashboardBox>
    </>
  );
}

export default Row3;
