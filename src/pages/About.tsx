import Navbar from "../components/Navbar";
import { Box, Paper,  Typography } from "@mui/material";
import { dailyPrices, ethenicPrices, householdPrices, woolenPrices } from "../assets/constant";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="h-[20vh] w-full bg-indigo-600 mt-20 flex justify-center items-center" ><Typography variant='h3' color={'white'} fontWeight={600} >Prices</Typography></div>
      
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
          <Box sx={{ width: "22%" , height:"100%" }}>
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
                Packages
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
          
        </Box><br /><br />
        
        <Box p={2} mt={1}>
        <Typography variant='h5' color={'Black'} fontWeight={500} > How it Works!!</Typography><br />
        <Typography   fontWeight={400} > Select the most suitable premium laundry package as per your preference.

Choose from our wide range of prices and packages that are Pocket Friendly as well as Premium.

Whether you have a laundry basket full of casuals and daily wear clothes or just a special piece of clothing that's meant for special occasions- we'll have it laundered for you.

Schedule a convenient Pick-Up and Drop. You don't have to keep following up, making calls, or taking time off your busy schedule to pick up the laundry. Schedule a pick-up and drop-off with us.
 While we take care of your clothes and fabrics, you can sit back and relax.</Typography>
        </Box><hr />
        <Box p={2} mt={1}>
        <Typography variant='h5' color={'Black'} fontWeight={500} > Laundry with DhobiLite vs. Laundry at Home</Typography><br />
        <Typography   fontWeight={400} > What makes DhobiLite unique? We use the best-in-class machinery and sophisticated equipment to stream press your clothes and fabrics. While ironing your clothes at home doesn't guarantee you wrinkle-free and crease-free clothes, DhobiLite guarantees perfect laundry, steam press, and folding services. We ensure that only skin-friendly and fabric-friendly detergents are used and that the original and smooth texture of your clothes is retained. Additionally, we take care of the brightness and crispness of your fabrics.

Hence, choose what's best for your clothes. Be it regular casuals, formals, or special occasion dresses, let us do the laundry on your behalf. DhobiLite is the best solution for perfect, professional, and convenient laundry services.</Typography>
        </Box><hr />
        <Box p={2} mt={1}>
        <Typography variant='h5' color={'Black'} fontWeight={500} > Doing Your Laundry at Home Vs. Obtaining the Services of A Dry Cleaning Service</Typography><br />
        <Typography   fontWeight={400} > Traditionally, people used to do their laundry at home, and that too, by hand as sophisticated cleaning equipment like washing machines and dryers was not heard of at that time. Be it doing the laundry by hand or using washing equipment like a washing machine, doing your laundry at home is easier said than done. It is not just about washing your clothes and keeping them clean. There is a long process that entails. Doing your laundry at home would include washing, drying, ironing, and folding your clothes- sounds like a long and tiring process, right?

On the other hand, instead of doing your laundry at home, you have the option of obtaining the service of a dry-cleaning service that would do your laundry and even go the additional step of dry cleaning your clothes. Of course, getting a dry-cleaning service to do your laundry is much easier, convenient, and requires minimal time and effort from your end. But the positives don't just end there. During dry-cleaning, a stringent cleaning process is followed, which eliminates even the stubbornest of stains and odor from your clothes and keeps it as fresh as a daisy. Dry-cleaning is also a great way to keep your clothes clean and tidy while retaining the original texture of the fabric, preventing shrinkage or damage to your clothes, and reviving the brightens and appearance of your outfits.

So what do you think is best- Doing your laundry at home or getting a dry-cleaning service to do it on your behalf? Of course, obtaining the services of a dry-cleaning service is undoubtedly the best and easiest way to go about things.</Typography>
        </Box>
      </Box><br />
      <Footer/>
    </>
  );
};

export default About;
