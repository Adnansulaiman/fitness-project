// import React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     password: "",
//     email: "",
//   });

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const signup = async () => {
//     try {
//       const response = await fetch("http://localhost:4000/signup", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const responseData = await response.json();
//       console.log(responseData);
  
//       if (responseData.success) {
//         localStorage.setItem("auth-token", responseData.token);
//         alert("Successfully Signup");
//         navigate("/");
//       } else {
//         alert(responseData.errors);
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       // Handle error here, such as displaying an error message to the user
//     }
//   };
  

//   return (
//     <>
//       <div className="login d-flex justify-content-between row">
//         <div className="col-6 side-image-signup d-flex justify-content-center align-items-center">
//           <h1>
//             Build <br /> Your Body <br />
//             With Us!
//           </h1>
//         </div>
//         <div className="col-6 login-form d-flex flex-column justify-content-center align-items-center gap-4">
//           <div className="login-title">
//             <h1>Sign Up</h1>
//             <p>Welcome! Please create your account </p>
//           </div>
//           <form action="" onSubmit={signup}>
//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="floatingInput"
//                 placeholder="name@example.com"
//                 name="name"
//                 value={formData.name}
//                 onChange={changeHandler}
               
//               />
//               <label htmlFor="floatingInput"> Name</label>
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 id="floatingInput"
//                 placeholder="name@example.com"
//                 value={formData.email}
//                 onChange={changeHandler}
//                 name="email"
//               />
//               <label htmlFor="floatingInput">Email address</label>
//             </div>
//             <div className="form-floating">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="floatingPassword"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={changeHandler}
//               />
//               <label htmlFor="floatingPassword">Password</label>
//             </div>

//             <button type="submit" className="log-btn">
//               SignUp
//             </button>
//             <p>
//               Already have a account?{" "}
//               <Link to="/login" className="sign-nav">
//                 Login
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        alert("Successfully signed up");
        navigate("/"); // Navigate to home page after successful signup
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };
  

  return (
    <div className="login d-flex justify-content-between row">
      <div className="col-6 side-image-signup d-flex justify-content-center align-items-center">
        <h1>
          Build <br /> Your Body <br />
          With Us!
        </h1>
      </div>
      <div className="col-6 login-form d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="login-title">
          <h1>Sign Up</h1>
          <p>Welcome! Please create your account </p>
        </div>
        <form onSubmit={signup}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
            />
            <label htmlFor="nameInput">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
            <label htmlFor="emailInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
            <label htmlFor="passwordInput">Password</label>
          </div>

          <button type="submit" className="log-btn">
            SignUp
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="sign-nav">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

