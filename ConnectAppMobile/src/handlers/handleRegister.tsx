import { RegisterRouteProps } from "../types/RegisterRouteProps"
export const handleRegister=async (userData:RegisterRouteProps)=>{
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
    console.log(response.status);
  }
  catch(error){
    console.log(error)
  }
  return true
}