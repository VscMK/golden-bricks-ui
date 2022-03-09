import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; 

function LoginForm() {

   const formik = useFormik({
       initialValues: {
           email: "",
           username: "",
           password: ""
       },
       validationSchema: Yup.object({
        firstName: Yup.string().max(40, 'Must be 40 characters or less.')
        .required("Required"),

       }),
       onSubmit: (values) => {
        console.log('VALUES: ', values);
       }
   });

   console.log('ERR:: ', formik.errors);

  return (
    <>
        <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <label>Email: </label>
                <input 
                id="email"
                type="text"
                name="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                value={formik.values.email} />
                
            </div>
            <div className="input-container">
                <label>Username: </label>
                <input 
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                onChange={formik.handleChange}
                value={formik.values.username} />
            </div>
            <div className="input-container">
                <label>Password: </label>
                <input 
                id="password"
                type="text"
                name="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password} />
            </div>
            <button type="submit">Submit</button>
        </form>
        {/* <h1>Your Data</h1>
    <Formik
      initialValues={{ userName: "", email: "", password: "", acceptedTerms: false }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }

        if (!values.acceptedTerms) {
          errors.acceptedTerms =
            "You must accept the terms and conditions before you proceed.";
        }

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // post data to server
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, dirty, handleReset }) => (
        <Form>
          <div>
            <label>
              Username
              <Field type="text" name="name" />
            </label>
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
              <label>

              </label>
          </div>
          <div>
            <label>Accept terms</label>
            <Field type="checkbox" name="acceptedTerms" />
            <ErrorMessage name="acceptedTerms" component="span" />
          </div>
          <button
            type="button"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik> */}
  </>
);
}

export default LoginForm;