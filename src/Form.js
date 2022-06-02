import { useState } from 'react';
import './form.css'
import FormInput from './FormInput';
const Form = () => {
    const [values,setValues] = useState(
        {
            name : "",
            email: "",
            date : "",
            password: "",
            cpassword : ""
        }
    )

    const inputType = [
        {
            type: "text",
            placeholder : "نام",
            label : "نام",
            name : "name",
            required : true,
            error: "نام را وارد کنید",
            pattern: "[a-z]{1,15}"

        },
        {
            type: "email",
            placeholder : "ایمیل",
            label : "ایمیل",
            name : "email",
            required : true,
            error: "ایمیل را وارد کنید",
            pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
        },
        {
            type: "date",
            placeholder : "تولد",
            label : "تولد",
            name : "date"
        },
        {
            type: "password",
            placeholder : "رمز عبور",
            label : "رمز عبور",
            name : "password",
            required : true,
            error: "پسوورد را وارد کنید"
        },
        {
            type: "password",
            placeholder : "تایید رمز عبور",
            label : "تایید رمزعبور",
            name : "cpassword",
            required : true,
            error: "پسوورد یکسان نمیباشد",
            pattern: values.password
        },
    ]
    return ( 
        <div className="form">
               <form>



                   {
                     inputType.map((input,index)=>{
                         return(
                         <FormInput key={index} {...input} values={values} setValues={setValues} />
                         ) })  
                   }

                   <button>ثبت نام کنید</button>
         







               </form>
        </div>
     );
}
 
export default Form;