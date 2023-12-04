// firebase/toggleButton.js
import { getDatabase, ref, update,get, set } from "firebase/database";
import { database } from "./service";

const toggleButton = async () => {
    console.log('Button');

    try {
        const fanRef = ref(database, 'FAN/digital');
        const fanSnapshot = await get(fanRef);
        const currentFanState = fanSnapshot.val();

        if (currentFanState !== null) {
            const updatedFanState = !currentFanState;
            await set(ref(database, 'FAN'), { digital: updatedFanState });
            //console.log('Success');
            return updatedFanState;
        } else {
            console.log('Fan state is null');
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

export default toggleButton;
