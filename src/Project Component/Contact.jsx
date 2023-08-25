import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../Project CSS/contact.css'


const ContactPage = () => {
  const navigate = useNavigate();
  let initialValues = {
    fName: '',
    lName: '',
    email: '',
    companyWebsite:'',
    description: '',
  };



  let onSubmit = async (info) => {
    try {
      let result = await axios({
        url: `http://localhost:8000/users`,
        method: 'post',
        data: info,
      });

      // console.log('created successfully');
      navigate('/registration-success');
    } catch (error) {
      console.log('unable to create');
    }
  };

  let validationSchema = yup.object({
    fName: yup.string().required('First Name is required. '),
    lName: yup.string().required('Last Name is required. '),
    email: yup.string().required('Email is required. '),
    description: yup.string().required('Description is required. '),
  });
  
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <h2>Get in touch via the contact form below and <br></br>I'll come back to you as soon as possible.</h2>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
              <div className="form-row">
                <div className="form-element-spacing">
                  <input
                    type="text"
                    id="fName"
                    placeholder="First Name*"
                    {...formik.getFieldProps('fName')}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-element-spacing">
                  <input
                    type="text"
                    id="lName"
                    placeholder="Last Name*"
                    {...formik.getFieldProps('lName')}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-element-spacing">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email*"
                    {...formik.getFieldProps('email')}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-element-spacing">
                  <input
                    type="text"
                    id="companyWebsite"
                    placeholder="Company Name"
                    {...formik.getFieldProps('companyWebsite')}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div className="form-element-spacing">
                <textarea
                  type="text"
                  id="description"
                  placeholder="Description*"
                  {...formik.getFieldProps('description')}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-element-spacing" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="form-button">
                  Submit
                </button>
              </div>
            </Form>
            
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default ContactPage;

