import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import {  Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Navigation/Navigation";
import FormInput from "../components/FormInput"

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <Box
     display='flex'
    
      sx={{
        width:"100%",
        height:"100vh",
        backgroundColor: " rgba(79, 70 ,229 ,0.4)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
   
      <Paper
        elevation={3}
        sx={{
          width: "25rem",
          p: 4,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
        }}
      >
        <Typography fontSize={24} fontWeight={600} sx={{color:"rgb(79, 70 ,229 )"}}>
          LogIn
        </Typography>

        {/* Form */}

        <FormInput
          type="email"
          label="Email"
          required
          value={formData?.email}
          onChange={(event) =>
            setFormData({
              ...formData,
              email: event?.target?.value,
            })
          }
          // LeftIcon={() => <Email color="primary" />}
        />

        <FormInput
          type={showPass ? "text" : "password"}
          label="Password"
          required
          value={formData?.password}
          onChange={(event) =>
            setFormData({
              ...formData,
              password: event?.target?.value,
            })
          }
          // LeftIcon={() => <Lock sx={{color:"rgb(79, 70 ,229 )"}} />}
          RightIcon={() => (
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPass(!showPass)}
              edge="end"
            >
              {showPass ? (
                <VisibilityOff sx={{color:"rgb(79, 70 ,229 )"}}/>
              ) : (
                <Visibility sx={{color:"rgb(79, 70 ,229 )"}} />
              )}
            </IconButton>
          )}
        />

        {/* Submit btn */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          sx={{
            marginTop: 1,
            borderRadius: 5,
            backgroundColor:"rgb(79, 70 ,229 )"
          }}
          onClick={() => {
      
            console.log({ formData });
            navigate(ROUTES.HOME);
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}
