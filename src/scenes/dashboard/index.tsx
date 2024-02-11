import DashboardBox from "@/components/DashboardBox";
import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

// const gridTemplateLargeScreens = `"a b c"
// "a b c"
// "a b c"
// "a b f"
// "d e f"
// "d e f"
// "d h i"
// "g h i"
// "g h j"
// "g h j"

// `;
const gridTemplateLargeScreens = `"a b c"
"a b c"
"a b c"
"a b c"
"d b f"
"d e f"
"d e f"
"j j j"
"j j j"

`;

const gridTemplateSmallScreens=`"a"
"a"
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"c"
"c"
"d"
"d"
"d"
"d"
"d"
"d"
"e"
"e"
"e"
"e"
"f"
"f"
"f"
"f"
"j"
"j"
"j"
"j"`
const Dashboard = (props: Props) => {
    const isAboveMediumScreens=useMediaQuery("(min-width:1200px")
  
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={isAboveMediumScreens?{
        gridTemplateColumns: "repeat(3,minmax(370px,1fr))",
        gridTemplateRows: "repeat(10,minmax(60px,1fr))",
        gridTemplateAreas: gridTemplateLargeScreens,
      }:{
      gridTemplateAreas: gridTemplateSmallScreens,
      autoTemplateColumns:"1fr",
      autoTemplateRows:"80px"
      }
    }
    >
        

        
       <Row1/>
       <Row2/>
       <Row3/>

    </Box>
  );
};

export default Dashboard;
