import { RegisterRouteProps } from "../types/RegisterRouteProps"
export const handleRegister=async (userData:RegisterRouteProps, navigation: any)=>{
  console.log(userData);
  try{
    const response= await fetch("http://10.0.2.2:8080/auth/register",{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(userData)
  }).then((res)=>{
    return res
  })
  if (response.status === 201) {
    navigation.navigate('Home')
    alert("User registered successfully!");
  }
  else if (response.status === 401) {
    alert("User already existed!");
  }
  else {
    alert("Something went wrong");
  }
}
catch (error) {
  console.error("Error registering user:", error);
  alert("Failed to register user. Please try again later.");
}
return true
}