// import { Component } from '@angular/core';
// import { NavController } from '@ionic/angular';

// @Component({
//   selector: 'app-sistema2x2',
//   templateUrl: './sistema2x2.page.html',
//   styleUrls: ['./sistema2x2.page.scss'],
//   standalone: false,
// })
// export class Sistema2x2Page{

//   constructor(private navCtrl: NavController) { }

//   goToHome(){
//     console.log("Navigating to home");
//     this.navCtrl.navigateBack("/home")
//   }
//   goTosistema3x3(){
//     console.log("Ir a sistema 3x3");
//     this.navCtrl.navigateBack("/sistema3x3")
//   }

//   a11: number = 2;   a12: number = 2; b1: number = 5; //elementos de la ecuacion 1
//   a21: number = 3;   a22: number = 5; b2: number = 3; //elementos de la ecuacion 2
//   x0: number = 0; y0: number = 0; z0: number = 0; //valores iniciales de las incognitas

//   interations: number = 25;
//   tolerance: number = 0.00001;
//   // tolerancia: number = 0.00001;

//   // results: any[]=[];
//   results: any[]=[];
//   nombre:string=``;

//   // Ajustar el número de iteraciones en función de la tolerancia
//   ajustarIteraciones() {
//     // A menor tolerancia (más precisa), mayor número de iteraciones
//     if (this.tolerance < 0.0001) {
//       this.interations = Math.floor(1000 / this.tolerance); // Formula simple para obtener iteraciones mayores
//     } else if (this.tolerance < 0.001) {
//       this.interations = Math.floor(500 / this.tolerance);
//     } else {
//       this.interations = Math.floor(100 / this.tolerance); // Menos iteraciones para tolerancias mayores
//     }

//     // Aseguramos que el número de iteraciones no sea demasiado pequeño
//     if (this.interations < 10) {
//       this.interations = 10; // Establecer un mínimo de 10 iteraciones
//     }
//   }
  
//   resolverSistema(){
//     // Ajustamos el número de iteraciones según la tolerancia
//     this.ajustarIteraciones();

//     let x= this.x0;
//     let y=this.y0;
//     let xtotal = 0; // Inicializamos xtotal
//     let ytotal = 0; // Inicializamos ytotal
//     this.results=[];

//     for (let i=0; i<this.interations;i++){
//       let x_new = (this.b1-this.a12*y)/this.a11;
//       let y_new = (this.b2-this.a21*x_new)/this.a22;
//       xtotal = Math.abs(x_new - x); // Calculamos xtotal
//       ytotal = Math.abs(y_new - y); // Calculamos ytotal


//       let sol={iter:i+1,x:x_new.toFixed(4),y:y_new.toFixed(4), xTol:Math.abs(x_new-x).toFixed(8), yTol:Math.abs(y_new-y).toFixed(8)}
//       console.log(`Iterations= ${i+1}: x=${x_new.toFixed(8)}, y=${y_new.toFixed(8)} ${Math.abs(x_new-x).toFixed(8)} ${Math.abs(y_new-y).toFixed(8)}`);
//       this.results.push(`Iterations ${i+1}: x=${x_new.toFixed(4)}, y=${y_new.toFixed(4)}`);

//       if (Math.abs(x_new-x)<this.tolerance && Math.abs(y_new-y)<this.tolerance){
//         console.log("Tolerance condition reached");
//         break;
//       }
//       x=x_new;
//       y=y_new;
//     }
//     console.log(`this.a11 * x+ this.a12=`)
//     // console.log(ec1 -> ${this.a11*x+this.a12*y}=${this.b1});
//     // console.log(ec2 -> ${this.a21*x+this.a22*y}=${this.b2});

//   }


// }
import { Component, OnInit } from '@angular/core';
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

  // Ajustar el número de iteraciones en función de la tolerancia
  ajustarIteraciones() {
    if (this.tolerance < 0.0001) {
      this.interations = Math.floor(1000 / this.tolerance); 
    } else if (this.tolerance < 0.001) {
      this.interations = Math.floor(500 / this.tolerance);
    } else {
      this.interations = Math.floor(100 / this.tolerance); 
    }

    if (this.interations < 10) {
      this.interations = 10; 
    }
  }

  resolverSistema() {
    // Ajustamos el número de iteraciones según la tolerancia
    this.ajustarIteraciones();
  
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
