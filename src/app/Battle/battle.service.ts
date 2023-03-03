import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Battle } from './battles';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor(private fs: Firestore) { }

  addBattle(battle: Battle) {
    battle.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'Battles'),battle);
  }

  getBattles(): Observable<Battle[]> {
    let battleRef = collection(this.fs, 'Battles');
    return collectionData(battleRef,{idField:'id'}) as Observable<Battle[]>;
  }
}
