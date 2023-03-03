import { useEffect } from "react"

function Alert({msg,type,setAlert,list}) {

  
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert({show:false,msg:'',type:''})
        },1500) 
        return() => clearTimeout(timeout)
        // eslint-disable-next-line
    },[list])
    
  return (
    <p className={`alert ${type}`}>{msg}</p>
  )
}

export default Alert