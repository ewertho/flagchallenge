import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrl: './back.component.scss',
})
export class BackComponent {
  faArrowLeft = faArrowLeft;
  constructor(public router: Router) {}
}
