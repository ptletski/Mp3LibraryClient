import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnInit {
  title = 'Mp3LibraryClient';

  ngOnInit() {
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('nav-bar');
    const exit = document.getElementById('exit');

    menu.addEventListener('click', (event) => {
      navbar.classList.toggle('hide-mobile');
      event.preventDefault();
    });

    exit.addEventListener('click', (event) => {
      navbar.classList.add('hide-mobile');
      event.preventDefault();
    });
  }
}