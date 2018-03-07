import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

import {AddPage} from '../add/add';

/**
 * Generated class for the WallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html',
})
export class WallPage {
  newsAll:any;
  subscription;

  constructor(public db: AngularFireDatabase , public navCtrl: NavController, public navParams: NavParams) {
    this.subscription = this.db.list('/news').valueChanges().subscribe( data => {
      this.newsAll = data;
      console.log(data);
    });
  }

  pushTo_addnews(){
    this.navCtrl.push(AddPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WallPage');
  }

}
