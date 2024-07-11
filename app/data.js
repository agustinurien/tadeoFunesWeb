import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

async function uploadFileFunction(file) {
    const storageRef = ref(storage, 'sponsor/' + file.name);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}
async function fetchImages() {
    const listRef = ref(storage, '');
    const res = await listAll(listRef);
    const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
    return urls;
};
async function uploadImages() {
    const fileInput = document.getElementById('imageUpload');
    const files = fileInput.files;

    if (files.length === 0) {
        console.log("No se seleccionaron archivos.");
        return;
    }

    const promises = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const storageRef = ref(storage, '' + file.name);
        const uploadTask = uploadBytes(storageRef, file);
        promises.push(uploadTask);
    }
};

async function uploadEvent(title, date, description) {
    try {
        const docRef = await addDoc(collection(db, "events"), {
            titulo: title,
            fecha: date,
            descripcion: description
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
async function uploadSponsors(link, file) {
    console.log("uploadSponsors", link, file);
    try {
        const url = await uploadFileFunction(file);
        const docRef = await addDoc(collection(db, "sponsors"), {
            link: link,
            url: url
        });
        console.log("Document written with ID: ", docRef.id);
        return url;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export {
    fetchImages,
    uploadEvent,
    uploadImages,
    uploadSponsors

};