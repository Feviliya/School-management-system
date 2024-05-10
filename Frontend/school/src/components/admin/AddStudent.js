import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';

const AddStudent = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [grade, setGrade] = useState('');
  const [section, setSection] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    //form logic
    setOpen(true);
    setFullName('');
    setDateOfBirth('');
    setGrade('');
    setSection('');
    setFatherName('');
    setPhoneNumber('');
    setAddress('');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div id='add-student'>
      <form className='add-user-box' onSubmit={handleSubmit}>
        <div className='left-user'>
          <TextField
            className='add-user-field'
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            label="Full Name"
            variant="outlined"
            required
          />
          <TextField
            className='add-user-field'
            onChange={(e) => setDateOfBirth(e.target.value)}
            value={dateOfBirth}
            label="Date of Birth"
            variant="outlined"
            type="date"
            required
          />
          <TextField
            className='add-user-field'
            onChange={(e) => setGrade(e.target.value)}
            value={grade}
            label="Grade"
            variant="outlined"
            required
          />
          <TextField
            className='add-user-field'
            onChange={(e) => setSection(e.target.value)}
            value={section}
            label="Section"
            variant="outlined"
            required
          />
          <TextField
            className='add-user-field'
            onChange={(e) => setFatherName(e.target.value)}
            value={fatherName}
            label="Father's Name"
            variant="outlined"
            required
          />
          <TextField
            className='add-user-field'
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            label="Phone Number"
            variant="outlined"
            type="tel"
            required
          />
          <TextField
            className='add-user-field'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            label="Address"
            variant="outlined"
            multiline
            rows={4}
            required
          />
        </div>
        <div className='right-user'>
          <Button variant="outlined" type='submit'>
            Create user
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              User created successfully
            </Alert>
          </Snackbar>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
