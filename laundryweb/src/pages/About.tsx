import Navbar from "../components/Navbar";
import { Box, Paper,  Typography } from "@mui/material";
import { dailyPrices, ethenicPrices, householdPrices, woolenPrices } from "../assets/constant";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Box   height={"100%"}>
        <Box
          mt={10}
          width={"100%"}
         height={"100%"}
          display={"flex"}
          justifyContent="space-evenly"
          flexDirection={"row"}
        >
          <Box sx={{ width: "22%" , hieght:"100%" }}>
            <Paper sx={{ bgcolor: "rgb(79 70 229)" }}>
             <Typography
                fontWeight={400}
                fontSize={20}
                color={"white"}
                textAlign={"left"}
                py={1}  px = {2}
              >
                Daily
              </Typography>
              <Box width={"100%"} height={"1px"} sx={{ bgcolor: "white" }} />
          {  dailyPrices?.map((item:any)=>  <Box
                width={"100%"}
                display={"flex"}
                justifyContent="space-between"
                flexDirection={"row"}
              >
                <Typography
                  py={1}
                  px={2}
                  color={"white"}
                  fontSize={15}
                  fontWeight={500}
                >
                {item?.cloth}
                </Typography>
                <Typography
                  py={1}
                  px={2}
                  color={"white"}
                  fontSize={15}
                  fontWeight={500}
                >
                  {item?.price}
                  
                </Typography>
              </Box>)}
            </Paper>
          </Box>
          <Box sx={{ width: "22%" , hieght:"100%" }}>
            <Paper sx={{ bgcolor: "rgb(79 70 229)" }}>
             <Typography
                fontWeight={400}
                fontSize={20}
                color={"white"}
                textAlign={"left"}
                py={1}  px = {2}
              >
                Ethenic
              </Typography>
              <Box width={"100%"} height={"1px"} sx={{ bgcolor: "white" }} />
             {ethenicPrices?.map((item)=> <Box
                width={"100%"}
                display={"flex"}
                justifyContent="space-between"
                flexDirection={"row"}
              >
                <Typography
                  p={1}
                  color={"white"}
                  fontSize={15}
                  fontWeight={500}
                >
                  {item?.cloth}
                </Typography>
                <Typography
                  p={1}
                  color={"white"}
                  fontSize={15}
                  fontWeight={500}
                >
                 {item?.price}
                </Typography>
              </Box>)}
            </Paper>
          </Box>
          <Box sx={{ width: "22%" , hieght:"100%" }}>
            <Paper sx={{ bgcolor: "rgb(79 70 229)" }}>
             <Typography
                fontWeight={400}
                fontSize={20}
                color={"white"}
                textAlign={"left"}
                py={1}  px = {2}
              >
                Woolen Price
              </Typography>
              <Box width={"100%"} height={"1px"} sx={{ bgcolor: "white" }} />
              {woolenPrices?.map((item)=> <Box
                width={"100%"}
                display={"flex"}
                justifyContent="space-between"
                flexDirection={"row"}
              >
                <Typography
                  p={1}
                  color={"white"}
                  fontSize={15}
                  fontWeight={500}
                >
                  {item?.cloth}
                </Typography>
                <Typography
                  p={1}
                  color={"white"}
                  fontSize={15}
                  fontWeight={500}
                >
                 {item?.price}
                </Typography>
              </Box>)}
            </Paper>
          </Box>

          <Box sx={{ width: "22%" , hieght:"100%" }}>
            <Paper sx={{ bgcolor: "rgb(79 70 229)" }}>
             <Typography
                fontWeight={400}
                fontSize={20}
                color={"white"}
                textAlign={"left"}
                py={1}  px = {2}
              >
                HouseHold
              </Typography>
              <Box width={"100%"} height={"1px"} sx={{ bgcolor: "white" }} />
              {householdPrices?.map((item)=> <Box
                width={"100%"}
                display={"flex"}
                justifyContent="space-between"
                flexDirection={"row"}
              >
                <Typography
                  p={1}
                  color={"white"}
                  fontSize={15}
                  fontWeight={500}
                >
                  {item?.cloth}
                </Typography>
                <Typography
                  p={1}
                  color={"white"}
                  fontSize={15}
                  fontWeight={500}
                >
                 {item?.price}
                </Typography>
              </Box>)}
            </Paper>
          </Box>
          
        </Box>
        
        <Box p={2} mt={4}>
        <Typography variant='h5' color={'Black'} fontWeight={500} > Lorem ipsum, dolor sit amet consectetur adipisicing elit</Typography>
        <Typography   fontWeight={400} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores veniam exercitationem ex dolor nihil ut natus eligendi, id, voluptatem modi sapiente labore voluptate illum debitis culpa numquam eum tempore! Est culpa reprehenderit rerum. Commodi nihil dolor enim numquam fuga voluptatem distinctio error aperiam. Ea corporis veritatis quia omnis? Fugiat, asperiores. Minus harum doloremque ipsum in voluptates amet nisi ratione nesciunt dolor, suscipit doloribus facilis et officia quo nihil perferendis provident cumque? Repudiandae laudantium alias voluptate iste, eligendi delectus perspiciatis adipisci magni aliquam beatae aspernatur accusamus maiores? Dolorum pariatur atque cumque tempora sed quisquam. Cupiditate consectetur itaque, maiores quod nisi voluptates, sequi delectus pariatur officiis minima eligendi. Sequi, aut? Dolorum explicabo quasi temporibus quam animi, laborum voluptates ad nam neque accusamus dolorem porro eaque. Tenetur laudantium iure autem voluptatem dolore! Voluptatum id neque animi nemo sit recusandae maxime provident non odio, deserunt aliquid et ad, eius sunt perferendis vitae autem laudantium delectus. Vitae consectetur nulla deserunt quo officia recusandae iusto ex mollitia, voluptatibus corporis optio? Repellat, vero error? Ipsam harum blanditiis vel nam fugiat aspernatur fugit! Ullam, omnis pariatur exercitationem fugit sequi enim illum laudantium necessitatibus illo eum ipsum inventore doloribus corporis ut ipsa blanditiis error iusto fugiat placeat dolor nobis quae. Nostrum, consequatur laboriosam sed voluptates, similique quisquam libero itaque sint ipsa pariatur dolorem nulla ab atque, error dolorum cumque. Cum at, omnis architecto neque quo laboriosam, consequuntur reiciendis voluptates eos, incidunt accusantium porro est error dolore laborum quae dicta autem. Ipsam tempora esse voluptates placeat ipsum voluptatum accusamus.</Typography>
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default About;
