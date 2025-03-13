import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sistema2x2',
  templateUrl: './sistema2x2.page.html',
  styleUrls: ['./sistema2x2.page.scss'],
  standalone: false,
})
export class Sistema2x2Page {

  constructor(private navCtrl: NavController) { }

  goToHome() {
    console.log("Navigating to home");
    this.navCtrl.navigateBack("/home")
  }

  goTosistema3x3() {
    console.log("Ir a sistema 3x3");
    this.navCtrl.navigateBack("/sistema3x3")
  }

  // Elementos de las ecuaciones
  a11: number = 2;   a12: number = 2; b1: number = 5; // Ecuación 1
  a21: number = 3;   a22: number = 5; b2: number = 3; // Ecuación 2
  
  // Valores iniciales de las incógnitas
  x0: number = 0; 
  y0: number = 0; 


  interations: number = 25;
  tolerance: number = 0.00001;

  results: any[] = []; // Para almacenar resultados
  
  resolverSistema() {
    let x = this.x0;  
    let y = this.y0;  
    let xtotal = 0;
    let ytotal = 0;
    this.results = []; 
  
    for (let i = 0; i < this.interations; i++) {
      let x_new = (this.b1 - this.a12 * y) / this.a11; // Ecuación para x
      let y_new = (this.b2 - this.a21 * x_new) / this.a22; // Ecuación para y
      
      // Calculamos la diferencia con respecto al valor anterior
      xtotal = Math.abs(x_new - x);
      ytotal = Math.abs(y_new - y);
  
      let sol = {
        iter: i + 1,
        x: x_new.toFixed(3),
        y: y_new.toFixed(3),
        xtotal: xtotal.toFixed(3),
        ytotal: ytotal.toFixed(3)
      };
  
      this.results.push(sol);
  
      // Verificar si se alcanzó la tolerancia
      if (xtotal < this.tolerance && ytotal < this.tolerance) {
        console.log("Condición de tolerancia alcanzada en la iteración: ", i + 1);
        break;
      }

      // Actualizamos x y y para la siguiente iteración
      x = x_new;
      y = y_new;
    }
  }
}
