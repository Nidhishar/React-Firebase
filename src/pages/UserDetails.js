import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleUserDetails from '../Components/SimpleUserDetails';
import { db, auth } from "../firebaseConfig";
import UserDetails from '../Components/SimpleUserDetails/userDetails';
import { useSelector, useDispatch } from "react-redux";
import { getSingleUserDetailsRequest } from "../redux/action";

const SimpleUserDetail = () => {
    const [userData, setUserData] = useState({})
    const [detailsBox, setDetailsBox] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const getSingleUserDetailStatus = useSelector(state => state.getSingleUserDetail);


    useEffect(() => {
        if (getSingleUserDetailStatus.data.userDataValues) {
            setUserData(getSingleUserDetailStatus.data.userDataValues)
        }
    }, [getSingleUserDetailStatus])

    const getUserDetails = async () => {
        const userDetaildata = await db.collection('Users').doc(auth?.currentUser?.uid).get();
        const userDataValues = userDetaildata?.data()?.userInfo;
        if (userDataValues) {
            dispatch(getSingleUserDetailsRequest({ userDataValues }));
        }
    }

    useEffect(() => {
        getUserDetails()
       
    }, [])

    const handleDetailsBox = () => {
        setDetailsBox(!detailsBox)
    }

    return (
        <>
            <SimpleUserDetails handleDetailsBox={handleDetailsBox} />
            {detailsBox && <UserDetails userData={userData} />}
        </>
    )
}
export default SimpleUserDetail;