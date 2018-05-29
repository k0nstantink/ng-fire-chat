import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IChat } from './IChat';
import * as firebase from 'firebase';

@Injectable()
export class DataService {

  chatCollection: AngularFirestoreCollection<IChat>;
  chatMessages: Observable<IChat[]>;
  chatDocument: AngularFirestoreDocument<any>;
  timestamp = new Date();

  constructor(
    public afs: AngularFirestore
  ) {


    this.chatCollection = this.afs.collection('ng-chat', ref => ref.orderBy('timestamp', 'desc'));
    this.chatMessages = this.chatCollection.snapshotChanges().map(
      arr => arr.map(snap => {
        const data = snap.payload.doc.data() as IChat;
        data.id = snap.payload.doc.id;
        return data;
      })
    );
  }

  showChatMessage(): Observable<IChat[]> {
   return this.chatCollection.valueChanges();
  }

  saveChatMessage(message: string, user: string) {
    this.chatCollection.add({
      message,
      user,
      timestamp: Date.now()
    });
  }

  deleteMessage(id: string) {
    this.chatDocument = this.chatCollection.doc(id);
    this.chatDocument.delete().then(() => console.log('done', id)).catch(err => console.log(err));
  }

  updateMessage(id: string, message: string) {
    this.chatDocument = this.chatCollection.doc(id);
    this.chatDocument.update({
      message
    });
  }

}
