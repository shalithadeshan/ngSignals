import {Component, computed, effect, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface User {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngSignals';
 x = signal(5)
  users = signal<User[]>([
    { id: 1, name: 'John', role: 'admin' },
    { id: 2, name: 'Jane', role: 'user' },
    { id: 3, name: 'Jack', role: 'qa' },
  ])

  user = this.users()[2]

  constructor() {
    // this is an effect that depends on x signal
    effect(() => console.log((this.x())))
  }

  ngOnInit() {
    let y = signal(10)
    // this is a computed signal that depends on x and y signals (creates a new signal)
    let z = computed(() => this.x() + y())
    console.log(z());
  
    this.x.set(10)
   
    this.x.set(20)
    console.log(z())
  }
}
