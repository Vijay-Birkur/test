import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const Login=()=>{

    const paperStyle={padding :20,height:'50vh',width:500, margin:"200px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'10px 0'}
    const initialValues = {
        email: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return(
        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                <Form>
                    <Field as={TextField} label='Email' name="email" placeholder='Enter Your Email' fullWidth required helperText={<ErrorMessage name="email" />}/>
                    <Field as={TextField} fullWidth name='password' type="password" label='Password' placeholder="Enter your password" helperText={<ErrorMessage name="password" />} />
                    <Field as={FormControlLabel} name='remember'
                        control={
                            <Checkbox color="primary"/>
                                }
                                label="Remember me"
                            /><br /><br />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} disabled={props.isSubmitting}>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
                </Form>
                )}
                </Formik>
                <Typography >
                    <Link href="#" >Forgot password ?</Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >Sign Up </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login


















// import React, {useState} from 'react'
// import { useHistory } from 'react-router-dom'



// const Login = (props) => {
//     const [credentials, setCredentials] = useState({email: "", password: ""}) 
//     // let history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/auth/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({email: credentials.email, password: credentials.password})
//         });
//         const json = await response.json()
//         console.log(json);
//         if (json.success){
//             // Save the auth token and redirect
//             localStorage.setItem('token', json.authtoken); 
//             // history.push("/");

//         }
//         else{
//             alert("Invalid credentials");
//         }
//     }

//     const onChange = (e)=>{
//         setCredentials({...credentials, [e.target.name]: e.target.value})
//     }

//     return (
//         <div className="container" style={{"borderRadius": "6%","border": "3px solid black","padding": "10%","background-color": "burlywood"}}>
//           <h1 style={{"textAlign":"center","paddingBottom":"50px"}}>Login-Form</h1>
//             <form  onSubmit={handleSubmit}>
      
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" value={credentials.email} onChange={onChange} placeHolder="Enter your email" id="email" name="email" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} placeHolder="Enter your password" name="password" id="password" />
//                 </div>
//                 <br/>
//                 <button type="submit" className="btn btn-primary">SignIn</button>
//                 <h4>Don't have an account ? <a href="/">Sign-up!!</a>here</h4>
//                 <h3><a href="/">Forgot Password ?</a></h3>
//             </form>
//         </div>
//     )
// }

// export default Login