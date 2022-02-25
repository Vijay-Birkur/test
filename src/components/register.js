import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'


const Register = () => {
    const paperStyle = { padding: 20, width: 500, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const initialValues = {
        name: '',
        age:'',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        age: Yup.number().typeError("Enter valid age").required('Required'),
        email: Yup.string().email("Enter valid email").required("Required"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} fullWidth name="name" label='Name' placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} fullWidth name="age" label='Age' placeholder="Enter your age" helperText={<ErrorMessage name="age" />} />
                            <Field as={TextField} fullWidth name="email" label='Email' placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                < Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </ Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number' placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField} fullWidth name='password' type="password" label='Password' placeholder="Enter your password" helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password" label='Confirm Password' placeholder="Confirm your password" helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel control={<Field as={Checkbox} name="termsAndConditions" />} label="I accept the terms and conditions."/>
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Button type='submit' variant='contained' disabled={props.isSubmitting} color='primary'>{props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                            
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Register;



























// import React, {useState} from 'react'
// import { useHistory } from 'react-router-dom'



// const Register = (props) => {
//     const [credentials, setCredentials] = useState({email: "", password: ""}) 
//     // let history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/auth/register", {
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
//           <h1 style={{"textAlign":"center"}}>Registration-Form</h1>
//             <form  onSubmit={handleSubmit}>
//                 <div className="mb-3" >
//                     <label htmlFor="age" className="form-label">Enter Your name</label>
//                     <input type="text" className="form-control" onChange={onChange} placeHolder="Enter your name" id="name" name="name" />
//                 </div>
//                 <div className="mb-3" >
//                     <label htmlFor="age" className="form-label">Enter Your Age</label>
//                     <input type="number" className="form-control" onChange={onChange} placeHolder="age" id="age" name="age"  />
//                 </div>
//                 <div className="mb-3" >
//                     <label htmlFor="age" className="form-label">Enter Your Contact details</label>
//                     <input type="number" className="form-control" onChange={onChange} placeHolder="enter phone number" id="contact" name="contact" />
//                 </div>
//                 <div className="mb-3" >
//                     <label htmlFor="gender" className="form-label">Select Your Gender </label><br/>
//                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="male" />
//                     <label class="form-check-label" for="male">Male</label><br/>
//                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="female"/>
//                     <label class="form-check-label" for="female">Female</label>
//                 </div>
//                 <div className="mb-3" >
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" value={credentials.email} onChange={onChange} placeHolder="Enter your email" id="email" name="email" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label"> Set Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} placeHolder="Enter your password" name="password" id="password" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} placeHolder="confirm your password" name="cpassword" id="cpassword" />
//                 </div>
//                 <br/>
//                 <button type="submit" className="btn btn-primary">SignUp</button>
//                 <h4>Already have an account ?<a href="/">Sign-in!!</a>here</h4>
//             </form>
//         </div>
//     )
// }

// export default Register