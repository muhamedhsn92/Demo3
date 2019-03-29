import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  newMemberX: string;
  newMember: string;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  // newItem = '';
  editMsg: boolean = false;
  editId: number;
  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list("messages");
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
  ngOnInit() {}

  addMember(newMember: any) {
    console.log(newMember);
    this.itemsRef.push({ text: newMember });
    this.newMemberX = "";
      console.log("clicked");
  }

  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
    this.editMsg = false;
  }

  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }

}
