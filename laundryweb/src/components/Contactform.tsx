import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface data {
  name: string;
  mobile: string;
  address: string;
  clothes: string;
}
const Contactform = () => {
  const { register, handleSubmit } = useForm<data>();

   const BOT_TOKEN = "6843833141:AAHrIJyFBEM3bqHVEfdVE-C0xIGd0eh0SZQ"
   const CHAT_ID = 1022948326
  const onsubmit: SubmitHandler<data> = async (detail: any) => {
    const { address , name , mobile, clothes} = detail
    const message = `
      Name : ${name}\n,
      Contact : ${mobile}\n,
      No of Clothes :${clothes}\n,
      Address : ${address}
    `

    try {
      const response = await axios.get(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`,
       
      );
      const res = await axios.post(
        "https://api.apispreadsheets.com/data/FWFTdYkpMG0N1nPO/",
        detail
       
      );
  
      console.log(response.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }


    console.log("userdetails = ",detail);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-auto h-[70vh] flex flex-col ml-2 overflow-hidden "
        encType="multipart/form-data"
      >
        {/* <div className="flex flex-col"> */}{" "}
        <label className=" overflow-hidden capitalize ml-1 text-gray-600">
          {" "}
          name
        </label>
        <input
          type="text"
          className="w-full p-3  border-gray-200 border-[1px]  rounded-[15px] focus:outline-none"
          {...register("name")}
          placeholder="Enter Your Name"
        />
        {/* </div> */}
        <label className=" overflow-hidden capitalize ml-1 text-gray-600">
          {" "}
          mobile no
        </label>
        <input
          type="text"
          className="w-full p-3  border-gray-200 border-[1px]  rounded-[15px] focus:outline-none  "
          {...register("mobile")}
          placeholder="Enter Your Mobile"
        />
        <label className=" overflow-hidden capitalize ml-1 text-gray-600">
          {" "}
          Number of Clothes
        </label>
        <input
          type="text"
          className="w-full p-3  border-gray-200 border-[1px]  rounded-[15px] focus:outline-none  "
          {...register("clothes")}
          placeholder="Enter No Of Clothes "
        />
        <label className=" overflow-hidden capitalize ml-1 text-gray-600">
          {" "}
          address
        </label>
        <textarea
          className="w-full p-3  border-gray-200 border-[1px]  rounded-[15px] focus:outline-none"
          {...register("address")}
          placeholder="Enter Your Address"
        />
        <input
          type="submit"
          className="w-full p-3 bg-indigo-600 border-gray-200 border-[1px]  rounded-[15px] focus:outline-none mt-3 font-semibold text-white cursor-pointer"
          value="Schedule pickup"
        />
      </form>
    </>
  );
};

export default Contactform;
