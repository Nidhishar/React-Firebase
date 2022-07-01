import React from "react";
import {SimpleUser,DocumentBox,UserNameHeader} from './styleComponents';

const SimpleUserDetail = ({handleDetailsBox} ) =>{
    return(
        <SimpleUser>
            <DocumentBox>
                <UserNameHeader>Hello Simple user: </UserNameHeader>
                <button onClick={() =>handleDetailsBox()}>See Your Document : </button>
            </DocumentBox>

        </SimpleUser>
    )
}

export default SimpleUserDetail;