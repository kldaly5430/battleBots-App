import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, updateDoc } from '@firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Robot } from './robot';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  constructor(private fs: Firestore) { }

  addRobot(robot: Robot) {
    robot.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'Robots'),robot);
  }

  async getRobot(id: any) {
    const robotRef = doc(this.fs, `Robots/${id}`);
    const docSnap = await getDoc(robotRef).catch((error) => {
      console.error("Error getting robot document:", error);
      return undefined;
    });
    if (docSnap?.exists()) {
      return docSnap;
    } else {
      console.warn(`Robot with ID ${id} does not exist`);
      return undefined;
    }
  }

  getRobots():Observable<Robot[]> {
    let robotRef = collection(this.fs, 'Robots');
    return collectionData(robotRef,{idField:'id'}) as Observable<Robot[]>;
  }

  deleteRobot(id: string) {
    let docRef = doc(this.fs, `Robots/${id}`);
    return  deleteDoc(docRef);
  }

  updateRobot(robot: Robot, robots: any) {
    let docRef = doc(this.fs, `Robots/${robot.id}`);
    return updateDoc(docRef, robots);
  }

}