import React, { useState } from "react";
import {SelectUser,DocumentBox,AddExtraFeild,FormSection} from './styleComponents';


const UserDetailsBox = ({selectedUser,handleAddFeild,handleFeildName,handleFeildValue,updateButtonStatus,handleSubmit,handleCancel}) =>{
     let userDataKey = Object.keys(selectedUser)
    return(
        <SelectUser>
        <DocumentBox>
            {userDataKey.map((val,i) =>(
                <div>{val} : {selectedUser[val]}</div>
            ))}
           
        <AddExtraFeild>
            <button className='addFeild_buttom' onClick={() =>handleAddFeild()}>Add extra feild</button>
            {updateButtonStatus &&<FormSection>
                <input placeholder='FeildName' type='text' onChange={(e) =>handleFeildName(e)}/>
                <input placeholder='FeildValue' type='text' onChange={(e) =>handleFeildValue(e)}/>
                <button className='cancel_button' onClick={() =>handleSubmit()}>Submit</button>
                <button className='cancel_button' onClick={() =>handleCancel()}>Cancel</button>
            </FormSection>}
        </AddExtraFeild>
        </DocumentBox>
    </SelectUser>
    )
}

export default UserDetailsBox;