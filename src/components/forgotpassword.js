import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const ForgotPassword=()=>{

    const paperStyle={padding :20,height:'50vh',width:500, margin:"200px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'10px 0'}
    const initialValues = {
        email: ''
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required")
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
                    <h2>Forgot Password</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                <Form>
                    <Field as={TextField} label='Email' name="email" placeholder='Enter Your Email' fullWidth required helperText={<ErrorMessage name="email" />}/>
                    <br /><br />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} disabled={props.isSubmitting}>{props.isSubmitting ? "Loading" : "Get passkey"}</Button>
                </Form>
                )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default ForgotPassword

































// import React, {useState} from 'react'
// import { useHistory } from 'react-router-dom'



// const ForgotPassword = (props) => {
//     const [credentials, setCredentials] = useState({email: "", password: ""}) 
//     // let history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/auth/forgotpassword", {
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
//           <h1 style={{"textAlign":"center","paddingBottom":"50px"}}>Forgot Password</h1>
//             <form  onSubmit={handleSubmit}>
      
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" value={credentials.email} onChange={onChange} placeHolder="Enter your email" id="email" name="email" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <br/>
//                 <button type="submit" className="btn btn-primary">Get Pass Key</button>
//             </form>
//         </div>
//     )
// }

// export default ForgotPassword