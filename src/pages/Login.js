import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import GoogleSignButton from '../Components/GoogleButton';
import { LoginComponents, LoginHeader } from '../Components/styleComponents';

const Login = () => {
    const navigate = useNavigate()
    const [userDetail, setUserDetail] = useState({
        email: '',
        name: '',
        uid: '',
        role: ''
    })

    useEffect(() => {
        if (userDetail.email && userDetail.name && userDetail.uid) {
            db.collection('Users').doc(`${userDetail.uid}`).set({ userInfo: userDetail });
            navigate('/')
        }
    }, [userDetail.uid])



    const handleSocialLogin = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            if (result) {
                localStorage.setItem('currentUser', JSON.stringify(result.user.uid));

                setUserDetail({
                    ...userDetail,
                    email: result?.additionalUserInfo?.profile?.email,
                    name: `${result?.additionalUserInfo?.profile?.given_name} ${result?.additionalUserInfo?.profile?.family_name}`,
                    uid: result?.user?.uid
                })
            }
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
            });
    }
    return (
        <LoginComponents>
            <LoginHeader>Please Login to firebase firestore  : </LoginHeader>
            <GoogleSignButton handleSocialLogin={handleSocialLogin} />
        </LoginComponents>
    )
}
export default Login