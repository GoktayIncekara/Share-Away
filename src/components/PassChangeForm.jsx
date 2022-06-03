import React from 'react';
import styled from 'styled-components';
import { useState} from "react";
import { Button, makeStyles } from '@material-ui/core';
import BackspaceIcon from '@mui/icons-material/Backspace';

import PositiveNotification from './PositiveNotification';
import NegativeNotification from './NegativeNotification';


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#072227",
        border: '2px solid #4FBDBA',
        color: "white",
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        margin: "20px 0",
        width: "250px",
        '&:hover': {
            backgroundColor: "#4FBDBA",
            border: '2px solid #AEFEFF',
        },
        [theme.breakpoints.down("sm")]: {
            height: "40px",
            width: "auto"
        }
    }

}));

const Container =styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:999;
    margin-top: 60px;

`
const PassContainer = styled.div`
    position: relative;
    padding: 40px 0 20px 0;
    width: 100%;
    max-width: 640px;
    background-color: white;
    text-align: center;
    border-radius: 16px;
    margin-bottom: 30px;
`
const Back =styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`
const Form =styled.form`
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;

`
const InputTitle =styled.label`
    font-size: 20px;
    font-weight: 500;
    color: #35858B;
`
const InputBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0 10px 0;

`
const Input = styled.input`
    flex: 1;
    width: 100%;
    padding: 5px;
    padding: 10px;
    border: 2px solid  #35858B;
    border-radius: 10px;
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #072227;
`
const Error = styled.span`
    font-size: 15px;
    margin: 15px 0 0 0;
    font-weight: 600;
    display: "flex";
    color: red;
    justify-content: "center;
    ` 

function PassChangeForm(props) {
    const classes = useStyles();

    const [added, setAdded] = useState(false);
    const [notAdded, setNotAdded] = useState(false);

    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newPassAgain, setNewPassAgain] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleClose = () => {
        handleSubmit()
        props.setTrigger(false)
    }

    async function handleSubmit (event)  {
        
        event.preventDefault()
        if (newPass !== newPassAgain) {
            alert("Passwords do not match!")
            resetForm()
        }
        else if (newPass == oldPass) {
            alert("New password can not be same as the old password!")
            resetForm()
        }
        else if(newPass.length<6){
            alert("Password should be minimum 6 characters long!")
            resetForm()
        }

        else{
            const response = await fetch('http://localhost:5000/user/changePassword', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': localStorage.getItem('token'),
                    },
                    body: JSON.stringify({
                        oldPass,
                        newPass,
                    }),
        })

            const data = await response.json()

            if (data.status === 'error') {
                setErrorMessage("user not found \n")
            }
            if (data.status === 'errorPassword') {
                setErrorMessage("Old password is wrong!")
                resetForm();
            }
            if (data.status === 'ok') {
                resetForm();
                window.location.href = '/login';        
        }}
        
    }

    const resetForm = () => {
        setOldPass('');
        setNewPass('');
        setNewPassAgain('');
    }

    return (props.trigger) ? (
        <Container>
                <PassContainer>
                    <Back>
                        <BackspaceIcon onClick={() => props.setTrigger(false)}></BackspaceIcon>
                        <h6>Go Back</h6>
                    </Back>

                    <Title>Change Password</Title>

                    <Form onSubmit={handleClose}>
                        <InputBox>
                        <InputTitle>Old Password</InputTitle>
                        <Input  required type="password" value={oldPass} onChange={(e) => setOldPass(e.target.value)} />
                        </InputBox>


                        <InputBox>
                        <InputTitle>New Password</InputTitle>
                        <Input required type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
                        </InputBox>

                        <InputBox>
                        <InputTitle>New Password Again</InputTitle>
                        <Input  required type="password" value={newPassAgain} onChange={(e) => setNewPassAgain(e.target.value)} />
                        </InputBox>
                        
                        <Error> {errorMessage} </Error> 

                        <Button type="submit" className={classes.button} sx={{ width: 'auto' }} onClick={handleSubmit}>Change Password</Button>

                        <PositiveNotification trigger={added} setTrigger={setAdded} message="hey"></PositiveNotification>
                        <NegativeNotification trigger={notAdded} setTrigger={setNotAdded} message="nbr"></NegativeNotification>
                    </Form>


                </PassContainer>
        </Container >
    ) : "";
}


export default PassChangeForm

