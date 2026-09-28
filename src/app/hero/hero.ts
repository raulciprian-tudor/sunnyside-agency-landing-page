import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  imports: [Navbar],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {}
