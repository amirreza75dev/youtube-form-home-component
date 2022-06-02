import { useState } from "react";

const FormInput = ({error,type,placeholder,label,values,setValues,name,...input}) => {
    const changeHandler = (e)=>{
        setValues({...values, [e.target.name] : e.target.value})
        
    }

    const [focused,setFocused] = useState("false")
    console.log(values);
    return ( 
        <div className="Form-input">
            <label>{label}</label>
            <input {...input} name={name}  type={type} placeholder={placeholder} onChange={(e)=> changeHandler(e)} onFocus={()=> name ="cpassword" && setFocused("true")} onBlur={()=> setFocused("true")} change= {focused}/>
            <span>{error}</span>


        </div>

     );
}
 
export default FormInput;