import { Component } from '@angular/core';
interface DiccionaryInt {
  item: number;
  state: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  diccionary: DiccionaryInt[] = [
    {
      item: 1,
      state: false,
    },
    {
      item: 2,
      state: false,
    },
    {
      item: 3,
      state: false,
    },
    {
      item: 4,
      state: false,
    },
    {
      item: 5,
      state: false,
    },
  ];

  onOver(num: number): void {
    for (let index = 0; index <= num; index++) {
      this.printElement(index);
    }
  }
  onLeave(num: number): void {
    for (let index = 0; index <= num; index++) {
      this.cleanElement(index);
    }
  }
  onClick(item: number) {
    window.alert(`La puntuacion es ${item} estrellas. =)`);
  }

  printElement(num: number): void {
    this.diccionary.find((elemento) => {
      if (elemento.item == num) elemento.state = true;
    });
  }
  cleanElement(num: number): void {
    this.diccionary.find((elemento) => {
      if (elemento.item == num) elemento.state = false;
    });
  }
}
