import styled from "styled-components"

export const AdminUser = styled.div``;

export const DocumentBox =styled.div`
border : 2px solid #000;
margin : 20px;
display : flex;
justify-content : center;
align-items: center;
flex-direction:column;
height : 300px;
button {
    margin : 20px 5px 10px 5px;
    border : none;
    padding : 10px 20px;
    border-radius : 4px;
    cursor : pointer;
}
`;

export const UserNameHeader = styled.div`
  font-size : 22px;
  font-weight : 14px;
  color : #000;

`;

export const UserEmailList = styled.div`
 display : flex;
 justify-content : center;
 flex-wrap : wrap;
 margin: 0px 30px;
`;

export const SelectUser = styled.div`
 
`;


export const AddExtraFeild = styled.div`
.addFeild_buttom {
    margin : 20px 5px 10px 5px;
    border : none;
    padding : 10px 20px;
    border-radius : 4px;
    cursor : pointer;
}
`;

export const FormSection = styled.div`
display : flex;
align-items : baseline;
input {
    border : 2px solid #000;
    border-radius : 5px;
    margin : 0 10px 40px 10px;
    padding : 10px 20px; 
}
cancel_button{
    margin-bottom : 20px;
}
`;
