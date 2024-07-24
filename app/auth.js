import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


async function verifyUser(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user
};



export {
    verifyUser,

};