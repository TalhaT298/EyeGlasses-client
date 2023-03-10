import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/Untitled design (40).png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

  const {login}=useContext(AuthContext);

    const handleLogin =event =>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
    })
    .then(error => console.log(error))
  }
    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid gap-24 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      
     <img className= ''src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
      <from onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl text-center font-bold text-orange-200">Login now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-200">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-orange-200">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-orange-200" >Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className='btn btn-primary' type="submit" value="Login" />
        </div>
      </from>
      <p className='text-center text-orange-200'>New to EyeGlass <Link className='text-orange-800 font-bold' to='/signup'>Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;