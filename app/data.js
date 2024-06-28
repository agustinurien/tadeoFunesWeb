import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./firebase";


async function fetchImages() {
    const listRef = ref(storage, '');
    const res = await listAll(listRef);
    const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
    return urls;
};

export default fetchImages;