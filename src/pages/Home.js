import React, { useEffect, useState } from "react";
import HomePage from '../Components/HomePage';
import { db, storage, auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [email, setEmail] = useState('')
    const [warning, setWarning] = useState(false)
    const navigate = useNavigate()

    const getUserDetails = async () => {
        const userDetaildata = await db.collection('Users').doc(auth?.currentUser?.uid).get();
        const userData = userDetaildata?.data()?.userInfo;
        setEmail(userData.email)
    }

    useEffect(() => {
        getUserDetails()
        if (!auth?.currentUser?.uid) {
            navigate('/login')
        }
    }, [])

    const handleChoose = async (val) => {
        const userDetaildata = await db.collection('Users').doc(auth?.currentUser?.uid).get();
        const userData = userDetaildata?.data()?.userInfo;
        navigate(`/${val}`)
        // if (!userData.role) {
        //     await db.collection("Users").doc(auth?.currentUser?.uid).update({ "userInfo.role": val }).then(() => {
        //         console.log("Document successfully updated!");
        //     }).catch((error) => {
        //         console.error("Error updating document: ", error);
        //     });
        //     if (val == 'simple') {
        //         navigate('/simpleUserDetails')
        //     } else {
        //         navigate('/adminUserDetails')
        //     }
        //     setWarning(false)
        // } else if (userData.role && userData.role === val) {
        //     navigate(`/${val}`)
        //     setWarning(false)
        // } else {
        //     setWarning(!warning)
        // }
    }

    return (
        <HomePage warning={warning} userEmail={email} handleChoose={handleChoose} />
    )
}
export default Home