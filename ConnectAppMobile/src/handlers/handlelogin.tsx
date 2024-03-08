import { LoginRouteProps } from "../types/LoginRouteProps";
export const handleLogin=async (userData:LoginRouteProps)=>{
  try{
    const response= await fetch("http://10.0.2.2:8080/auth/login",{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(userData)
  }).then((res)=>{
    return res
  })
  if(!response.ok){
    alert('Incorrect details')
  }else{
    alert('Login successful')
  }
  }
  catch(error){
    alert('Failed to login')
  }
  return true
}
