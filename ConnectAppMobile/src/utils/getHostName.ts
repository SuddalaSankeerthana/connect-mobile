import { Platform } from "react-native"

export const getHostName=():string=>{
    if(Platform.OS==='android')
    return("10.0.2.2")
    return("localhost")
}