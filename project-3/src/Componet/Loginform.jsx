// import React, { useState } from 'react'
// import './style.css'


// function Loginform() {
//     const [signupData, setSignupData] = useState([]);
//     const [loginData, setLoginData] = useState({ email: '', password: '' });
//     const [validationErrors, setValidationErrors] = useState({ email: '', password: '' });
  
//     // Regex for email and password validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  
//     // Function to handle form input changes
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setLoginData({ ...loginData, [name]: value });
//     };
  
//     // Function to handle form submission (login)
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Check if email and password match any stored signupData
//       const user = signupData.find((user) => user.email === loginData.email && user.password === loginData.password);
//       if (user) {
//         alert('Login successful!');
//         // Clear login fields
//         setLoginData({ email: '', password: '' });
//       } else {
//         alert('Invalid email or password.');
//       }
//     };
  
//     // Function to handle form submission (signup)
//     const handleSignup = (e) => {
//       e.preventDefault();
//       // Validate email and password
//       let errors = { email: '', password: '' };
//       if (!emailRegex.test(loginData.email)) {
//         errors.email = 'Invalid email address';
//       }
//       if (!passwordRegex.test(loginData.password)) {
//         errors.password = 'Password must contain at least 6 characters, including uppercase, lowercase letters, and a number.';
//       }
//       if (errors.email || errors.password) {
//         setValidationErrors(errors);
//         return;
//       }
  
//       // Add user to signupData array
//       setSignupData([...signupData, { email: loginData.email, password: loginData.password }]);
//       alert('Signup successful!');
//       // Clear signup fields
//       setLoginData({ email: '', password: '' });
//       setValidationErrors({ email: '', password: '' });
//     };
  
//     // Function to handle onBlur event for validation
//     const handleBlur = (e) => {
//       const { name, value } = e.target;
//       let errors = { ...validationErrors };
  
//       switch (name) {
//         case 'email':
//           errors.email = emailRegex.test(value) ? '' : 'Invalid email address';
//           break;
//         case 'password':
//           errors.password = passwordRegex.test(value) ? '' : 'Password must contain at least 6 characters, including uppercase, lowercase letters, and a number.';
//           break;
//         default:
//           break;
//       }
  
//       setValidationErrors(errors);
//     };
  
//     // Function to handle onFocus event
//     const handleFocus = (e) => {
//       const { name } = e.target;
//       let errors = { ...validationErrors };
  
//       // Clear the error message when focused
//       errors[name] = '';
//       setValidationErrors(errors);
//     };
  
//     return (
//     //   <div>
//     //     <h2>Login / Signup Form</h2>
//     //     <form onSubmit={handleSubmit}>
//     //       <div>
//     //         <label>Email:</label>
//     //         <input type="email" name="email" value={loginData.email} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.email ? 'error' : ''}/><br/><br/>
//     //         {validationErrors.email && <span className="error-message">{validationErrors.email}</span>}
//     //       </div>
//     //       <div>
//     //         <label>Password:</label>
//     //         <input type="password" name="password" value={loginData.password} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.password ? 'error' : ''}/><br/><br/>
//     //         {validationErrors.password && <span className="error-message">{validationErrors.password}</span>}
//     //       </div>
          
//     //       <button onClick={handleSignup}>Signup</button><br/><br/>
//     //       <button type="submit">Login</button>
//     //     </form>
//     //   </div>
        

//     <div class="container">
//         <div class="form-box">
//             <h2>Login</h2>
//             <form>
//                 <label for="username">Username</label>
//                 <input type="text" id="username" name="username" placeholder='Enter your Email ID' value={loginData.email} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.email ? 'error' : ''} /><br/><br/>
//                 {validationErrors.email && <span className="error-message">{validationErrors.email}</span>}
//                 <label for="password">Password</label >
//                 <input type="password" id="password" name="password" placeholder='Enter Password' value={loginData.password} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.password ? 'error' : ''} /><br/><br/>
//                 {validationErrors.password && <span className="error-message">{validationErrors.password}</span>}
//                 <a href="#" class="forgot-password">Forgot password?</a><br/><br/>
//                 <button type="submit">Login</button>
//                 <p>Don't have an account? <a href="#" class="signup-link" >Signup</a></p>
//                 <a href="#" class="help-link">Need help?</a>
//             </form>
//         </div>
//         <div class="form-box">
//             <h2>Signup</h2>
//             <form>
//                 <label for="new-username">Username</label>
//                 <input type="text" id="new-username" name="new-username" placeholder='Enter User Name' /> 
//                 <label for="email">Email Id</label>
//                 <input type="email" id="email" name="email" placeholder='Enter your Email' value={loginData.email} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.email ? 'error' : ''} />
//                 <label for="new-password">Create password</label>
//                 <input type="password" id="new-password" name="new-password" placeholder='Enter Password' value={loginData.password} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.password ? 'error' : ''} />
//                 <p>By creating an account, I agree to <a href="#">Terms and Conditions</a></p>
//                 <button type="submit" onClick={handleSignup}>Create Account</button>
//                 <p>Already have an account? <a href="#" class="login-link">Login</a></p>
//                 <a href="#" class="help-link">Need help?</a>
//             </form>
//         </div>
//     </div>
   

//     );
// }

// export default Loginform







import { useState } from "react"
import Swal from "sweetalert2";
import "./style.css"

let initial = {
    fname : "",
    lname : "",
    email : "",
    pw : ""
}

const Sign_Up_Form = ()=>{

    const [main,setMain] = useState(true);

    const [state,setState] = useState(initial);
    const [arr,setArr] = useState([]);

    
    const [lnamefield,setLnamefield] = useState(true)
    const [emailerror,setEmailerror] = useState("");
    const [passwordError,setPasswordError] = useState("");

    const get_Value_By_Input = (val)=>{
        let {name,value} = val.target;

        setState({...state,[name]:value});
    }
    
    const form_Submit = (val)=>{
        val.preventDefault()
        if(!emailerror && !passwordError)
        {
            setArr([...arr,state]);
            setState(initial);

            Swal.fire({
                title: 'You Added!',
                text: 'Your data has been successfully submitted.',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            setMain(false);
        }
    }
    const loginFormSubmit = ()=>{

    
            // const loginUser = arr.find(loginUser => loginUser.email === state.email && loginUser.pw === state.pw)

            const user = arr.find((user)=>{
                if(user.email === state.email && user.pw === state.pw)
                    {
                      Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                      });
                    }
                    else{
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                    }
            })
           
    }
    
    console.log(arr);

    const handleFocus = (e)=>{
        const {name} = e.target;

        console.log(name);

        if(name === "lname")
        {
            setLnamefield(true)
        }
        if(name === "email")
        {
            setEmailerror("")
        }
        if(name === "pw")
        {
            setPasswordError("")
        }
        
    }

    const lname_Blur = ()=>{
        if(state.lname === state.fname)
        {
            setLnamefield(false)
        }
        else{
            setLnamefield(true)
        }
    }

    const email_Blur = () =>{
        const emailRejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRejex.test(state.email))
        {
            setEmailerror("*Invalid Email Address...")
        }
        else{
            setEmailerror("");
        }
    }
    const password_Blur = ()=>{
        const passwordRejex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

        if(!passwordRejex.test(state.pw))
        {
            setPasswordError("*Password Must Be 6 Character and At least 1 Letter And 1 Number")
        }
        else{
            setPasswordError("");
        }
    }
  


    return(
        <>
        <div className="Container">
            {
                main ? 
                <form id="sub" onSubmit={form_Submit}>
                <div>
                    <h1>Sign Form</h1>
                </div>
                <div>
                    <label htmlFor="">User Name</label><br/><br/>
                    <input type="text" id="username" name="username" placeholder='Enter your Name' onChange={get_Value_By_Input} onFocus={handleFocus}/><br/><br/>
                </div>
                {/* <div>
                    <label htmlFor="">Enter Your Last Name</label>
                    <input type="email" id="email" name="email" placeholder='Enter your Email' value={state.lname} className={`form-control ${lnamefield ? '' : 'error-border'}`} onChange={get_Value_By_Input} onBlur={lname_Blur} onFocus={handleFocus}/>
                    {!lnamefield && (
                        <p id="err">*Lastname and firstname is same (*not valid)</p>
                    )}
                </div> */}
                <div>
                    <label htmlFor="">Enter Your Email Address</label><br/><br/>
                    <input type="email" required name="email" placeholder="Enter Your Email" value={state.email} className={`form-control ${emailerror ? 'error-border' : ''}`} onChange={get_Value_By_Input} onFocus={handleFocus} onBlur={email_Blur}/><br/><br/>
                    {emailerror && (
                        <p id="err">{emailerror}</p>
                    )
                    }
                </div>
                <div>
                    <label htmlFor="">Set Password</label><br/><br/>
                    <input type="password" placeholder="Enter Password" required name="pw" value={state.pw} className={`form-control ${passwordError ? 'error-border' : ''}`} onChange={get_Value_By_Input} onFocus={handleFocus} onBlur={password_Blur}/><br/>
                    {passwordError && (
                        <p id="err">{passwordError}</p>
                    )
                    }
                </div><br/><br/>
                <div><button className="btn">Sign - Up</button></div>
            </form> 
            
            : 

            <form id="sub">
                <div>
                    <h1>Login Form</h1>
                </div>
                <div>
                    <label htmlFor="">Enter Your Register Email</label>
                    <input type="email" required name="email" value={state.email} className={`form-control ${emailerror ? 'error-border' : ''}`} onChange={get_Value_By_Input} onFocus={handleFocus} onBlur={email_Blur}/>
                    {emailerror && (
                        <p id="err">{emailerror}</p>
                    )
                    }
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" required name="pw" value={state.pw} className={`form-control ${passwordError ? 'error-border' : ''}`} onChange={get_Value_By_Input} onFocus={handleFocus} onBlur={password_Blur}/>
                    {passwordError && (
                        <p id="err">{passwordError}</p>
                    )

                    }
                </div>
                <div><button className="btn" onClick={loginFormSubmit}>Login</button></div>
            </form>
            }

        </div>
        </>
    )
}

export default Sign_Up_Form