import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebaseConfig";
import AdminUserDetail from '../Components/AdminUserDetails';
import UserDetailsBox from '../Components/AdminUserDetails/userDetailsBox';
import { useSelector, useDispatch } from "react-redux";
import { getAllUserDetailsRequest, getSingleUserDetailsRequest } from "../redux/action";

const AdminUserDetails = () => {
    const [userDetailList, setUserDetailList] = useState([])
    const [selectedUser, setSelectedUser] = useState({})
    const [updateButtonStatus, setUpdateButtonStatus] = useState(false)
    const [extraFeildName, setExtraFeildName] = useState('')
    const [extraFeildValue, setExtraFeildValue] = useState('')
    const dispatch = useDispatch();
    const getAllUserDetailStatus = useSelector(state => state.getAllUserDetail);
    const getSingleUserDetailStatus = useSelector(state => state.getSingleUserDetail);
      console.log(selectedUser,'selectedUserselectedUser');
    useEffect(() => {
        if (getAllUserDetailStatus.data.filterSimplerUser) {
            setUserDetailList(getAllUserDetailStatus.data.filterSimplerUser)
        }
    }, [getAllUserDetailStatus])

    useEffect(() => {
        if (getSingleUserDetailStatus.data.currentUser) {
            setSelectedUser(getSingleUserDetailStatus.data.currentUser)
        }

    }, [getSingleUserDetailStatus])

    const getUserList = async () => {
        const userList = []
        const loginedUserData = await db.collection('Users').doc(auth?.currentUser?.uid).get();
        const loginedUser = loginedUserData?.data()?.userInfo;
        console.log(loginedUser,'loginedUser');
        const userDataList = await db.collection('Users');
        userDataList.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                userList.push(doc.data().userInfo)
            });
            const filterSimplerUser = userList.filter((val) => val.email !== loginedUser.email )
            if (filterSimplerUser) {
                dispatch(getAllUserDetailsRequest({ filterSimplerUser }));
            }
        });
    }


    useEffect(() => {
        getUserList()
       
    }, [])

    const getSelectedUserDetails = async (id) => {
        const userDetaildata = await db.collection('Users').doc(id).get();
        const userData = userDetaildata?.data()?.userInfo;
        if (userData) {
            dispatch(getSingleUserDetailsRequest({ userData }));
        }
        setSelectedUser(userData)
    }

    const handleSelectUser = (id) => {
        getSelectedUserDetails(id)
    }

    const handleAddFeild = () => {
        setUpdateButtonStatus(true)
    }
    const handleCancel = () => {
        setUpdateButtonStatus(false)
    }
    const handleFeildName = (e) => {
        setExtraFeildName(e.target.value)
    }
    const handleFeildValue = (e) => {
        setExtraFeildValue(e.target.value)
    }
    const handleSubmit = () => {
        const currentUserData = { ...selectedUser }
        currentUserData[extraFeildName] = extraFeildValue
        db.collection("Users")
            .doc(selectedUser.uid)
            .update({
                userInfo: currentUserData,
            })
            .then(() => {
                console.log("updated organization successfully !");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        if (currentUserData) {
            dispatch(getSingleUserDetailsRequest({ currentUserData }));
        }

        setSelectedUser(currentUserData)
        setUpdateButtonStatus(false)
    }

    return (
        <>
            <AdminUserDetail userDetailList={userDetailList} handleSelectUser={handleSelectUser} />
            {selectedUser.name && <UserDetailsBox
                selectedUser={selectedUser}
                handleAddFeild={handleAddFeild}
                updateButtonStatus={updateButtonStatus}
                extraFeildName={extraFeildName}
                extraFeildValue={extraFeildValue}
                handleFeildName={handleFeildName}
                handleFeildValue={handleFeildValue}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
            />}
        </>
    )
}

export default AdminUserDetails