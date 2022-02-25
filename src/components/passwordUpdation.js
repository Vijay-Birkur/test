import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const PasswordUpdate=()=>{

    const paperStyle={padding :20,height:'50vh',width:500, margin:"200px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'10px 0'}
    const initialValues = {
        passkey: '',
        password: '',
        confirmPassword:''
    }
    const validationSchema = Yup.object().shape({
        passkey: Yup.string().min(5, "It's too short").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required")
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
                    <h2>Password Updation</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                <Form>
                    <Field as={TextField} label='Passkey' name="passkey" placeholder='Enter Your passkey' fullWidth required helperText={<ErrorMessage name="passkey" />}/>
                    <Field as={TextField} fullWidth name='password' type="password" label='New Password' placeholder="Enter your password" helperText={<ErrorMessage name="password" />} />
                    <Field as={TextField} fullWidth name="confirmPassword" type="password" label='Confirm Password' placeholder="Confirm your password" helperText={<ErrorMessage name="confirmPassword" />} />
                    <Field as={FormControlLabel} name='remember'
                        control={
                            <Checkbox color="primary"/>
                                }
                                label="Remember me"
                            /><br /><br />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} disabled={props.isSubmitting}>{props.isSubmitting ? "Loading" : "Update Password"}</Button>
                </Form>
                )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default PasswordUpdate





























// import React, {useState} from 'react'
// import { useHistory } from 'react-router-dom'



// const PasswordUpdate = (props) => {
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
//           <h1 style={{"textAlign":"center","paddingBottom":"50px"}}>Update Your Passord</h1>
//             <form  onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Enter your passkey</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} placeHolder="Enter your passkey" name="passkey" id="passkey" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Enter new Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} placeHolder="Enter your new password" name="newpassword" id="newpassword" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label"> Confirm new Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} placeHolder="confirm password" name="cpassword" id="cpassword" />
//                 </div>
//                 <br/>
//                 <button type="submit" className="btn btn-primary">Set Password</button>
//             </form>
//         </div>
//     )
// }

// export default PasswordUpdate