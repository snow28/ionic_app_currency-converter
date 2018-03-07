import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CurrencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html',
})
export class CurrencyPage {
  currency:any;
  fromCurrency="USD";
  toCurrency="PLN";
  amount:number;
  result:number;
  rates:any;

  constructor(public navCtrl: NavController, public navParams: NavParams , private http: HttpClient) {
  }

  //public user: YourUserInterface = <any>{};
  convert(){
    let url = this.fromCurrency + "," + this.toCurrency;
    this.http.get("https://api.fixer.io/latest?symbols=" + url + "'").subscribe(data=>{
      this.rates = data;
      let from = this.rates.rates[this.fromCurrency];
      let to = this.rates.rates[this.toCurrency];
      console.log(from);
      console.log(to);
      this.result = (this.amount * to)/from;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencyPage');
  }

}
