import React, { useEffect, useState } from 'react'
import './Login.css'

function Login({settoken}) {
  const [deviceid, setdeviceid] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState('')

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://devapi.dhakai.com/api/v2/deviceuid',{
      signal: controller.signal
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      const {result} = data
      setdeviceid(result.deviceUuid)
    })
    .catch(err => {
      console.log(err);
      if (err.name === 'AbortError') {
        console.log("Fetch aborted!");
      }
      seterror("Invalid device id!")
      setloading(false)
    })

    return () => controller.abort()
  }, [])
  
  const handleLogin = async () => {
    setloading(true)
    try {
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
    if (!res.ok) {
      throw new Error("Network response was not OK!");
    }
    const content = await res.json()
    const {token} = content.result 
    if(!token){
      throw new Error("Invalid Email/ Password!");
    }
    settoken(token)
    setloading(false)
    } catch (error) {
      setloading(false)
      seterror("Invalid Credentials!")
      console.log(error)
    }
    
  }

  return (
    <div className='login__container'>
        <div className="login">
            {loading && <h4>Loading...</h4>}
            {error && <h4>{error}</h4>}
            <h1>Login</h1> 
            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter email...' />
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} required placeholder='Enter password...' />

            <button onClick={() => handleLogin()}>Sign in</button>
        </div>
    </div>
  )
}

export default Login