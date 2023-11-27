import Navbar from '../components/Navbar'
import Contactform from '../components/Contactform'
import { Typography } from '@mui/material'
import Footer from '../components/Footer'


const Contact = () => {
  return (<>
 <Navbar/>
 
    <div className='w-[100%] flex justify-center items-center flex-col mt-7'>
      

        <Typography variant='h4'fontWeight={600} textAlign={"center"} mt={10} mb={2} > Contact Form</Typography>
      <div className='w-[40%] '>
      <Contactform/>


      </div>

      
    </div>

<Footer/>
  </>

  )
}

export default Contact