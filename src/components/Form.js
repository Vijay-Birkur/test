import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components';
import { Formik} from 'formik'
import * as Yup from 'yup'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to left, #bdc3c7, #2c3e50);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: black;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const FormData=()=> {

  


    return (
        <>
            <GlobalStyle />
            <Formik
                initialValues ={ {
                    name: '',
                    dob:'',
                    bloodgroup: '',
                    gender: '',
                    address: ''
                }}
            
                validationSchema ={ Yup.object({
                    name: Yup.string().min(3, "Your Name is too short").required("Required"),
                    dob: Yup.date().max(new Date(),"Invalid Age").required('Age Required'),
                    bloodgroup: Yup.string().required("Blood Group Required"),
                    gender: Yup.boolean().oneOf(["male", "female"], "Required"),
                    address:Yup.string().min(30,"Enter detailed address").required("please fill your address")
                })}
                onSubmit={(values, { setSubmitting })=> {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  },400);
                }}
            >
                {formik => (
                <form onSubmit={formik.handleSubmit}>
                        <StyledFormWrapper>
                        <StyledForm>
                            <center><h2>Data Form</h2></center>
                            <label htmlFor="name">Name</label>
                          <StyledInput type="text" name="name" {...formik.getFieldProps('name')} onchange={onchange} />
                          <StyledError>
                          {formik.touched.name && formik.errors.name ? (
                            <div>{formik.errors.name}</div>
                          ) : null}
                          </StyledError>
                          <label htmlFor="dob">Date Of Birth</label>
                          <StyledInput type="date" name="dob" {...formik.getFieldProps('dob')} />
                          <StyledError>
                          {formik.touched.dob && formik.errors.dob ? (
                            <div>{formik.errors.dob}</div>
                          ) : null}
                          </StyledError>
                          <label htmlFor="bloodgroup">Blood Group</label>
                          <StyledInput type="text" name="bloodgroup"  {...formik.getFieldProps('bloodgroup')} />
                          <StyledError>
                          {formik.touched.bloodgroup && formik.errors.bloodgroup ? (
                            <div>{formik.errors.bloodgroup}</div>
                          ) : null}
                          </StyledError>
                          <StyledFieldset>
                            <legend>Gender</legend>
                            <label>
                                <input type="radio" value="female" checked={true} name="gender"  {...formik.getFieldProps('gender')} />
                                Female
                            </label>
                            <label>
                                <input type="radio" value="male" name="gender" {...formik.getFieldProps('gender')} />
                                Male
                            </label>
                          </StyledFieldset>
                          <StyledError>
                          {formik.touched.gender && formik.errors.gender ? (
                            <div>{formik.errors.gender}</div>
                          ) : null}
                          </StyledError>
                          <label htmlFor="address">Address</label>
                          <StyledTextArea name="address"  {...formik.getFieldProps('address')} />
                          <StyledError>
                          {formik.touched.address && formik.errors.address ? (
                            <div>{formik.errors.address}</div>
                          ) : null}
                          </StyledError>
                          <StyledButton type="submit" >Add to Table</StyledButton>
                        </StyledForm>
                      </StyledFormWrapper>
                </form>
                )}
            </Formik>
        </>
    );
};

export default FormData
