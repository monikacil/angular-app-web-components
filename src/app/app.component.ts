import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  showModal = false;
  message = 'Przykładowy komponent okna dialogowego w aplikacji Angular.';

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  handleClick () {
    alert('Zdarzenie po kliknięciu przycisku Confirm')
  }
}
