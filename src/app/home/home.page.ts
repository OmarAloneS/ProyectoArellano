import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  goTosistema2x2(){
    console.log("Ir a sistema 2x2");
    this.navCtrl.navigateBack("/sistema2x2")
  }
  goTosistema3x3(){
    console.log("Ir a sistema 3x3");
    this.navCtrl.navigateBack("/sistema3x3")
  }
 
}
