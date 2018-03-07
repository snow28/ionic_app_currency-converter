import { Component } from '@angular/core';
import { AlertController , IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  topic=' ';
  news=' ';

  constructor( public db: AngularFireDatabase , private alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams) {

  }

  alert(message : string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  addAndQuite(){
    if(this.topic.length > 5 && this.news.length > 10 ){
      this.db.list('/news').push({
        topic : this.topic,
        news : this.news
      });
    }else{
      this.alert("Length of topic should be >5 and length of news should be > 10.");
    }
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
