import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from './formField';
import { Avatar, Button } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles"
import { red } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3,0,3,0),
    },
    avater:{
        margin:'0 auto'
    },
    title:{
        padding: theme.spacing(5,0,3,0),
    },
    submit:{
        margin: theme.spacing(5,0,0,0),
        
    }
  }));
FormAddAccount.propTypes = {
    
};

function FormAddAccount(props) {
    const classes=useStyles();

    const form=useForm({
        defaultValues:{
            tennguoidung:'',
            email:'',
            sodienthoai:'',
            diachi:'',
        }
    })
    const handlerSubmit=(values)=>{
        console.log("Todo ",values)
    }
    return (
        <div className={classes.root}>
            <Avatar >
                <PersonAddTwoToneIcon/>
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Thêm người dùng 
            </Typography>
            <form onSubmit={form.handleSubmit(handlerSubmit)}>
                <InputField  name="tennguoidung" label="Tên người dùng" form={form}/><br/>
                <InputField  name="email" label="Email" form={form}/><br/>
                <InputField  name="sodienthoai" label="Số điện thoại" form={form}/><br/>
                <InputField  name="diachi" label="Địa chỉ" form={form}/><br/>
                <Button className={classes.submit} variant="contained" type="submit" fullWidth color="primary" >
                    Add
                </Button>
            </form>
        </div>
    );
}

export default FormAddAccount;