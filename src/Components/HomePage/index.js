import React from "react";
import { HomePageComponent, UserMessage, ButtonList,WarningMessage } from './styleComponent';
import UserTypeButton from './UserTypeButton';

const buttonList = [
    {name : 'Simple User', value : 'simple'},
    {name : 'Admin User', value : 'admin'}
]

const HomePage = ({userEmail,handleChoose,warning}) => {
   

    return (
        <HomePageComponent>
            <UserMessage>Hello {userEmail} , this is main screen</UserMessage>
            <UserMessage>To Continue, please choose your account type : </UserMessage>
           {warning && <WarningMessage>Please Select correct user type</WarningMessage>}
            <ButtonList>
                {buttonList.map((val, index) => (
                    <UserTypeButton val={val} index={index} handleChoose={handleChoose} />
                ))}
            </ButtonList>
        </HomePageComponent>
    )
}

export default HomePage;