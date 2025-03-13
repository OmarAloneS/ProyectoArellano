import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sistema3x3',
  templateUrl: './sistema3x3.page.html',
  styleUrls: ['./sistema3x3.page.scss'],
  standalone: false,
})
export class Sistema3x3Page {

  
  isModalOpen = false;

    openModal() {
      this.isModalOpen = true;
    }

    closeModal() {
      this.isModalOpen = false;
    }
  // Valores del sistema 3x3 reorganizados según el profesor
  b11: number = 5; b12: number = 2; b13: number = -1; c1: number = 7;
  b21: number = -1; b22: number = 3; b23: number = 4; c2: number = 2;
  b31: number = 3; b32: number = 2; b33: number = -5; c3: number = 4;

  // Valores iniciales de las incógnitas
  x0: number = 0; y0: number = 0; z0: number = 0;

  interations: number = 25; // Número máximo de iteraciones
  tolerance: number = 0.00001; // Tolerancia para el cambio entre iteraciones

  // Resultados para mostrar
  results: any[] = [];

  constructor(private navCtrl: NavController) { }


  // Navegar a la página de inicio
  goToHome() {
    console.log("Navigating to home");
    this.navCtrl.navigateBack("/home");
  }

  // Navegar a la página de sistema 2x2
  goTosistema2x2() {
    console.log("Ir a sistema 2x2");
    this.navCtrl.navigateBack("/sistema2x2");
  }

  // Método para resolver el sistema 3x3 con Gauss-Seidel
  resolverSistema3por3() {
    console.log("Resolviendo sistema 3x3");

    let x = this.x0;
    let y = this.y0;
    let z = this.z0;
    let xtotal = 0; // Inicializamos xtotal
    let ytotal = 0; // Inicializamos ytotal
    let ztotal = 0;
    this.results = [];

    for (let i = 0; i < this.interations; i++) {
      // Calculamos los nuevos valores de x, y, z en el orden adecuado
      let x_new = (this.c1 - (this.b12 * y + this.b13 * z)) / this.b11;
      let y_new = (this.c2 - (this.b21 * x_new + this.b23 * z)) / this.b22;
      let z_new = (this.c3 - (this.b31 * x_new + this.b32 * y_new)) / this.b33;

      xtotal = Math.abs(x_new - x); // Calculamos xtotal
      ytotal = Math.abs(y_new - y); // Calculamos ytotal
      ztotal = Math.abs(z_new - z);


      let sol = {
        iter: i + 1,
        x: x_new.toFixed(4),
        y: y_new.toFixed(4),
        z: z_new.toFixed(4),
        xtotal: Math.abs(x_new-x).toFixed(4),
        ytotal: Math.abs(y_new-y).toFixed(4),
        ztotal: Math.abs(z_new-z).toFixed(4),
      };
  

      // Log para ver los valores de la iteración
      console.log(`Iteración ${i + 1}: x=${x_new.toFixed(4)}, y=${y_new.toFixed(4)}, z=${z_new.toFixed(4)}`);

      // Guardar los resultados para mostrar
      this.results.push(`Iteración ${i + 1}: x=${x_new.toFixed(4)}, y=${y_new.toFixed(4)}, z=${z_new.toFixed(4)}`);

      this.results.push(sol);
  
      // Comprobamos si hemos alcanzado la tolerancia
      const toleranceReached =
        Math.abs(x_new - x) < this.tolerance * Math.abs(x_new) &&
        Math.abs(y_new - y) < this.tolerance * Math.abs(y_new) &&
        Math.abs(z_new - z) < this.tolerance * Math.abs(z_new);

      console.log(`Condición de tolerancia alcanzada: ${toleranceReached}`);

      if (toleranceReached) {
        console.log("Condición de tolerancia alcanzada");
        break;  // Si la tolerancia es alcanzada, salimos del ciclo
      }
      
      // Actualizamos los valores para la siguiente iteración
      x = x_new;
      y = y_new;
      z = z_new;
    }

    // Si el ciclo llega a las iteraciones máximas sin cumplir la tolerancia
    if (this.results.length === this.interations) {
      console.log("Se alcanzaron el número máximo de iteraciones");
    }
  }
}
