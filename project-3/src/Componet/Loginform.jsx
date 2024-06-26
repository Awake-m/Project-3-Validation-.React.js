import React, { useState } from 'react'
import './style.css'


function Loginform() {
    const [signupData, setSignupData] = useState([]);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [validationErrors, setValidationErrors] = useState({ email: '', password: '' });
  
    // Regex for email and password validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  
    // Function to handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginData({ ...loginData, [name]: value });
    };
  
    // Function to handle form submission (login)
    const handleSubmit = (e) => {
      e.preventDefault();
      // Check if email and password match any stored signupData
      const user = signupData.find((user) => user.email === loginData.email && user.password === loginData.password);
      if (user) {
        alert('Login successful!');
        // Clear login fields
        setLoginData({ email: '', password: '' });
      } else {
        alert('Invalid email or password.');
      }
    };
  
    // Function to handle form submission (signup)
    const handleSignup = (e) => {
      e.preventDefault();
      // Validate email and password
      let errors = { email: '', password: '' };
      if (!emailRegex.test(loginData.email)) {
        errors.email = 'Invalid email address';
      }
      if (!passwordRegex.test(loginData.password)) {
        errors.password = 'Password must contain at least 6 characters, including uppercase, lowercase letters, and a number.';
      }
      if (errors.email || errors.password) {
        setValidationErrors(errors);
        return;
      }
  
      // Add user to signupData array
      setSignupData([...signupData, { email: loginData.email, password: loginData.password }]);
      alert('Signup successful!');
      // Clear signup fields
      setLoginData({ email: '', password: '' });
      setValidationErrors({ email: '', password: '' });
    };
  
    // Function to handle onBlur event for validation
    const handleBlur = (e) => {
      const { name, value } = e.target;
      let errors = { ...validationErrors };
  
      switch (name) {
        case 'email':
          errors.email = emailRegex.test(value) ? '' : 'Invalid email address';
          break;
        case 'password':
          errors.password = passwordRegex.test(value) ? '' : 'Password must contain at least 6 characters, including uppercase, lowercase letters, and a number.';
          break;
        default:
          break;
      }
  
      setValidationErrors(errors);
    };
  
    // Function to handle onFocus event
    const handleFocus = (e) => {
      const { name } = e.target;
      let errors = { ...validationErrors };
  
      // Clear the error message when focused
      errors[name] = '';
      setValidationErrors(errors);
    };
  
    return (
    //   <div>
    //     <h2>Login / Signup Form</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div>
    //         <label>Email:</label>
    //         <input type="email" name="email" value={loginData.email} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.email ? 'error' : ''}/><br/><br/>
    //         {validationErrors.email && <span className="error-message">{validationErrors.email}</span>}
    //       </div>
    //       <div>
    //         <label>Password:</label>
    //         <input type="password" name="password" value={loginData.password} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.password ? 'error' : ''}/><br/><br/>
    //         {validationErrors.password && <span className="error-message">{validationErrors.password}</span>}
    //       </div>
          
    //       <button onClick={handleSignup}>Signup</button><br/><br/>
    //       <button type="submit">Login</button>
    //     </form>
    //   </div>
        

    <div class="container">
        <div class="form-box">
            <h2>Login</h2>
            <form>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder='Enter your Email ID' value={loginData.email} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.email ? 'error' : ''} /><br/><br/>
                {validationErrors.email && <span className="error-message">{validationErrors.email}</span>}
                <label for="password">Password</label >
                <input type="password" id="password" name="password" placeholder='Enter Password' value={loginData.password} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.password ? 'error' : ''} /><br/><br/>
                {validationErrors.password && <span className="error-message">{validationErrors.password}</span>}
                <a href="#" class="forgot-password">Forgot password?</a><br/><br/>
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="#" class="signup-link" >Signup</a></p>
                <a href="#" class="help-link">Need help?</a>
            </form>
        </div>
        <div class="form-box">
            <h2>Signup</h2>
            <form>
                <label for="new-username">Username</label>
                <input type="text" id="new-username" name="new-username" placeholder='Enter User Name' /> 
                <label for="email">Email Id</label>
                <input type="email" id="email" name="email" placeholder='Enter your Email' value={loginData.email} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.email ? 'error' : ''} />
                <label for="new-password">Create password</label>
                <input type="password" id="new-password" name="new-password" placeholder='Enter Password' value={loginData.password} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} className={validationErrors.password ? 'error' : ''} />
                <p>By creating an account, I agree to <a href="#">Terms and Conditions</a></p>
                <button type="submit" onClick={handleSignup}>Create Account</button>
                <p>Already have an account? <a href="#" class="login-link">Login</a></p>
                <a href="#" class="help-link">Need help?</a>
            </form>
        </div>
    </div>
   

    );
}

export default Loginform
