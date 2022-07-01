import React from 'react';
import {SimpleUser,DocumentBox} from './styleComponents';


const UserDetails = ({userData}) => {
    return (
        <SimpleUser>
            <DocumentBox>
               <div>Name : {userData.name}</div> 
               <div>Email : {userData.email}</div> 
               <div>Role : {`${userData.role} user`}</div> 
            </DocumentBox>
        </SimpleUser>
    )
}

export default UserDetails;