import { ILight } from "../model/light.model";
import { db } from "../utils/firestore";

function getAllLights() {
  return new Promise((res, rej) => {
    return db.collection("bulbs")
      .get()
      .then((querySnapshot)=>{
        let lights: ILight[] = [];
        querySnapshot.forEach((doc) => {
          lights.push(doc.data() as ILight);
        })
        return res(lights) 
      })
  });
}

function addLight(light: ILight) {
  return new Promise((res, rej) => {
    return db.collection("bulbs")
      .add(light)
      .then((docRef) => {
        return res(docRef.id);
      })
  });
}

export const LightsService = { getAllLights, addLight };
