import React from 'react'
import{ Routes, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Hospital from '../Home/Hospital'
import Account from '../Account/Account'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Library from '../Library/Library'
import Booked from '../Appointment/Booked'
import Appointment from '../Appointment/Appointment'
import HospitalForm from '../Home/Addhospital'
import Apps from '../Apps'
function Index() {
  return (
    <>
    <Routes>
<Route path='/' element={<Home />}/>
<Route path='/hospital' element={<Hospital />} />
<Route path='/account' element={<Account />} />
<Route path='/sign' element={<Signup />} />
<Route path='/login' element={<Login />} />
<Route path='/library' element={<Library />} />
<Route path='/book' element={<Booked />} />
<Route path='/appointment' element={<Appointment />} />
<Route path='/addHospital' element={<HospitalForm />} />
<Route path='/apps' element={<Apps />} />
    </Routes>
    </>
  )
}

export default Index