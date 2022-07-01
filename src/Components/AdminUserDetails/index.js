import React from "react";
import { AdminUser, DocumentBox, UserNameHeader, UserEmailList } from './styleComponents';

const AdminUserDetail = ({ userDetailList,handleSelectUser }) => {

    return (
        <AdminUser>
            <DocumentBox>
                <UserNameHeader>Hello Admin user: </UserNameHeader>
                <UserEmailList>
                    {userDetailList.map((val, index) => (
                        <button className="userList_button"
                            onClick={() => handleSelectUser(val.uid)}
                        >{val.email}</button>
                    ))
                    }
                </UserEmailList>
            </DocumentBox>
        </AdminUser>
    )
}
export default AdminUserDetail;