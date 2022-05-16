import { IAllLights } from "../model/all-lights.model";
import { ILight } from "../model/light.model";
import { db } from "../utils/firestore";



function getAllLights() {
  return new Promise((res, rej) => {
    return db
      .collection("bulbs")
      .get()
      .then((querySnapshot) => {
        const lights: ILight[] = [];
        querySnapshot.forEach((doc) => {
          lights.push(doc.data() as ILight);
        });
        return res(lights);
      });
  });
}

function getInitialAllLightsState(){
  return new Promise((res, rej) => {
    return db
      .collection("all-lights")
      .doc('1')
      .get().then((doc) => {
        return res(doc.data() as IAllLights);
      });   
  });
}

function toggleAllLightsOn(allLightsState: IAllLights, toggleAction: 'on' | 'off')
{
  return new Promise((res, rej) => {
    return db
      .collection("all-lights")
      .doc('1')
      .update({
        on:toggleAction === 'on' ? true : false,
      })
      .then(() => {
        return res(allLightsState);
      });
  });
}

function togglePattern(allLightsState: IAllLights, pattern: number) {
  return new Promise((res, rej) => {
    return db
      .collection("all-lights")
      .doc('1')
      .update({
        pattern: pattern,
      })
      .then(() => {
        return res(allLightsState);
      });
  });
}

function addLight(light: ILight) {
  
  return new Promise((res, rej) => {
    const id = db.collection("bulbs").doc().id;
    const lightToAdd = { ...light, id: id };
    return db
      .collection("bulbs")
      .doc(id)
      .set(lightToAdd)
      .then((val) => {
     
        return res(lightToAdd);
      });
  });
}

function switchOnLight(light: ILight) {
  return new Promise((res, rej) => {
    return db
      .collection("bulbs")
      .doc(light.id)
      .update({
        on: true,
      })
      .then(() => {
        return res(light);
      });
  });
}

function switchOffLight(light: ILight) {
  return new Promise((res, rej) => {
    return db
      .collection("bulbs")
      .doc(light.id)
      .update({
        on: false,
      })
      .then(() => {
        return res(light);
      });
  });
}

function toggleLight(light: ILight, toggleAction: "on" | "off") {
  switch (toggleAction) {
    case "on":
      return switchOnLight(light);
    case "off":
      return switchOffLight(light);     
    default:
      throw new Error("Invalid toggle action");
  }
}

export const LightsService = {
  getAllLights,
  addLight,
  switchOnLight,
  switchOffLight,
  toggleLight,
  getInitialAllLightsState,
  toggleAllLightsOn,
  togglePattern
};