import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/custom-input/CustomInput';
import { postUser } from '../../helpers/axiosHelper';
import { toast } from 'react-toastify';

import MainLayout from '../../components/layout/MainLayout';

const initialState = {
  fName: '',
  lName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const Signup = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert('Password do not match!');
    }

    const pending = postUser(rest);

    toast.promise(pending, {
      pending: 'Please wait',

      // success: "request success",
      // error: "error in request",
    });

    const { status, message } = await pending;
    toast[status](message, {
      // position: "bottom-right",
    }); // totast.success() toast.error()
  };

  const inputs = [
    {
      label: 'First Name',
      name: 'fName',
      placeholder: 'sam',
      type: 'text',
      required: true,
    },
    {
      label: 'Last Name',
      name: 'lName',
      placeholder: 'Smith',
      type: 'text',
      required: true,
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'sam@email.com',
      type: 'email',
      required: true,
    },
    {
      label: 'Phone',
      name: 'phone',
      placeholder: '0411111111',
      type: 'number',
    },
    {
      label: 'Password',
      name: 'password',
      placeholder: '******',
      type: 'password',
      required: true,
    },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      placeholder: '******',
      type: 'password',
      required: true,
    },
  ];

  return (
    <MainLayout className='p-3'>
      <Form
        onSubmit={handleOnSubmit}
        className='form-center border shadow-lg p-4 rounded mt-5'
      >
        <h2>Join Our Library Community </h2>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className='d-grid mt-2'>
          <Button variant='primary' type='submit'>
            Sign Up
          </Button>
        </div>

        <div className='text-end mt-4'>
          Already an user? <a href='/login'>Login Now</a>
        </div>
      </Form>
    </MainLayout>
  );
};

export default Signup;
