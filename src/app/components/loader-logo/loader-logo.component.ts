import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-loader-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader-logo.component.html',
  styleUrl: './loader-logo.component.scss',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('600ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoaderLogoComponent implements OnInit {
  showLoader = true;

  ngOnInit() {
    setTimeout(() => {
      this.showLoader = false;
    }, 2500);
  }
}