import React, { useState } from 'react'
import a from '../../Assets/Rectangle 112.png';
import a2 from '../../Assets/Group 73.png';
import b from '../../Assets/devicon_google.png'
import b1 from '../../Assets/ic_round-apple.png'
import b2 from '../../Assets/logos_facebook.png'
import a1 from '../../Assets/Rectangle 113.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Config/firebase';

type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  
  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    navigate('/addHospital')
    } catch (error:any) {
      alert(error.message);
    }
  };
  
const handleGoogleSignIn = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
   
    navigate('/addHospital')
    // You can redirect or perform other actions after successful sign-in.
  } catch (error:any) {
    alert(error.message);
  }
};


const handleFacebookSignIn = async () => {
  try {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider);
    navigate('/addHospital')
  } catch (error:any) {
    alert(error.message);
  }
};


  return (
    <div>
       <section className='grid lg:grid-cols-2 grid-cols-1 '>
        <div className='bg-darkgray relative '>
          <div className='absolute bottom-2 left-0'>
            <img src={a2} alt='vector' />
          </div>

          <div className='bg-lightgray h-5/6 rounded-xl w-4/6  float-right my-10'>
            <div>
            <h1 className='text-center py-3 text-3xl font-bold'>Welcome Back</h1>
            <p className='py-1 text-center font-medium'>Login using correct details!</p>
            
            <div className="  mx-5 my-3">
                <label className="font-medium px-3">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 text-gray-600 bg-darkgray  my-2 font-medium cursor-pointer rounded-xl py-2.5  sm:text-sm"
              />
            </div>
            <div className=" mx-5 my-3 ">
                <label className="font-medium px-3 ">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 text-gray-600 my-2 bg-darkgray  font-medium rounded-xl cursor-pointer py-2.5  sm:text-sm"
              />
            </div>
            <div className='flex  justify-center'>
<button className='w-52 rounded-lg text-center font-semibold text-white text-xl px-4 py-2 bg-textColor' onClick={handleEmailSignIn}>Login</button>
            </div>
            <p className='text-center font-semibold py-3 text-xl'>OR</p>
            <p className='text-center font-semibold pb-2 text-lg'>Login using</p>
            <div className="flex justify-center pb-5 cursor-pointer">
          <img src={b} alt="google-logo" className="mx-2 w-8 h-8" onClick={handleGoogleSignIn}/>
                 <img src={b1} alt="apple-logo" className="mx-2 w-8 h-8" onClick={handleFacebookSignIn}/>
                <img src={b2} alt="facebook-logo" className="mx-2 w-8 h-8"/>
              </div>
              <p className='text-center pb-5 font-medium text-sm'>Don't have an account? <Link to='/sign' className='text-textColor italic'>Signup!</Link></p>
          </div>
          </div>
        </div>

        <div className='relative hidden lg:block'>
  <img src={a} alt='nurse giving injection' className='h-screen w-full' />
  <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
    <div className='text-center flex flex-col justify-center items-center'>
      <h1 className='py-5 font-semibold text-4xl text-center text-textColor'>CareFinder</h1>
      <p className='font-bold leading-8 text-3xl pb-3'>Join Our <br />Community</p>
      <p className='leading-8 text-xl font-medium'>Enjoy seamless access to medical <br/>services.</p>
      <div className='h-1/2 w-full'>
      <img src={a1} alt='doctor giving injection' className='h-96 w-full'/>
    </div>
    </div>
    
  </div>
        
        </div>
      </section>
    </div>
  )
}

export default Login