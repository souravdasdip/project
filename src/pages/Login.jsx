import React, { useEffect, useState } from 'react'
import './Login.css'

function Login({settoken}) {
  const [deviceid, setdeviceid] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  
  useEffect(() => {
    fetch('https://devapi.dhakai.com/api/v2/deviceuid')
    .then(res => {
      return res.json()
    })
    .then(data => {
      const {result} = data
      setdeviceid(result.deviceUuid)
    })
  }, [])
  
  const handleLogin = async () => {
    const res = await fetch('https://devapi.dhakai.com/api/v2/login-buyer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "auth": {
          "email": email,
          "deviceUuid": deviceid
      },
      "password": password  
      })
    })
    .catch(error => console.log(error))

    const content = await res.json()
    settoken(content)
    console.log(content);
  }

  return (
    <div className='login__container'>
        <div className="login">
            <h1>Login</h1> 
            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter email...' />
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} required placeholder='Enter password...' />

            <button onClick={() => handleLogin()}>Sign in</button>
        </div>
    </div>
  )
}

export default Login