import { IAllLights } from "../model/all-lights.model";
import { ILight, ILightPattern, IToggleAction } from "../model/light.model";
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

function toggleAllLights(allLightsState: IAllLights, toggleAction: IToggleAction)
{
  return new Promise((res, rej) => {
    return db
      .collection("all-lights")
      .doc('1')
      .update({
        on:toggleAction === IToggleAction.on ? true : false,
      })
      .then(() => {
        return res(true);
      });
  });
}

function toggleColorChange(lightToChange: ILight, color:string){
  return new Promise((res, rej) => {
    return db
      .collection("bulbs")
      .doc(lightToChange.id)
      .update({
        color: color,
      })
      .then(() => {
        return res(true);
      });
  });
}

function togglePattern(allLightsState: IAllLights, pattern: ILightPattern) {
  return new Promise((res, rej) => {
    return db
      .collection("all-lights")
      .doc('1')
      .update({
        pattern: pattern,
      })
      .then(() => {
        return res(true);
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

function toggleLight(light: ILight, toggleAction: IToggleAction) {
  switch (toggleAction) {
    case IToggleAction.on:
      return switchOnLight(light);
    case IToggleAction.off:
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
  toggleAllLights,
  togglePattern,
  toggleColorChange
};
