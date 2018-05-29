import { Component, OnInit } from '@angular/core';
import { data } from '../fruit-model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IChat } from '../IChat';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg: string;
  snapshot: any;
  editMsg = false;
  clickedId: string;
  chatMessage: Observable<IChat[]>;

  constructor(
    public afs: AngularFirestore,
    public dataService: DataService
  ) {
  }

  ngOnInit() {

    this.chatMessage = this.dataService.chatMessages;

  }

  onSendChatMessage( message: string, user: string) {
    this.editMsg = false;
    this.dataService.saveChatMessage(message, user);
  }

  onDeleteMessage(id: string) {
    this.dataService.deleteMessage(id);
  }

  onEditMessage(id: string, msg: string) {
    this.editMsg = true;
    this.clickedId = id;
    // this.dataService.updateMessage(id, msg);

    console.log(this.editMsg, this.clickedId);
  }
  editMessage(id: string, message: string) {
    this.dataService.chatCollection.doc(id).update(
      {
        message
      }
    ).then(done => this.editMsg = false);
    console.log(this.editMsg);
  }

}
