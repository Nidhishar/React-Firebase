import React from "react";
import {ChooseUserType} from './styleComponent';

const UserTypeButton = ({val,index, handleChoose}) =>{
    return (
       <ChooseUserType onClick={() =>handleChoose(val.value)} key={index}>{val.name}</ChooseUserType>
    )
}

export default UserTypeButton;