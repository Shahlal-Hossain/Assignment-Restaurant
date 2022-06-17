import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';



const Login = () => {
    const [newUser, setNewUser] =useState(false)
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{marginTop:'100px'}} item xs={8}>
                       <Paper>
                        <form>
                        <TextField fullWidth type='email' label="Email" id="fullWidth" />

                        <TextField fullWidth type='password' label="password" id="fullWidth" />

                        <Button  fullWidth type="submit" variant='contained' color='primary'>{newUser ? 'Create New Account'  : 'Log-in'}</Button>

                        <Typography sx={{marginTop:'10px'}}>{newUser? 'AllRedi have your Account? Please' : `Don't have your Account? Please`}  
                        <strong onClick={()=>setNewUser(!newUser)} style={{borderBottom: '1px solid gray',cursor: 'pointer'}}> {newUser? 'Sign-IN' : 'Create new Account '} </strong></Typography>

                         <Button variant='outlined' sx={{backgroundColor: 'rgb(255, 255, 128)' ,marginTop: '20px'}} fullWidth> <GoogleIcon/> {'->'} Sing-up With Google</Button>
                         
                        </form>
                       </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;