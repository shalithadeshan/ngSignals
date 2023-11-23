import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  quantity = signal(1)
  quantities = signal([1, 2, 3, 4, 5])
  selectedVehicle = signal<Vehicle>({id: 1, name: 'Totyota', price: 1000})
  vehicles = signal<Vehicle[]>([
    {id: 1, name: 'Totyota', price: 1000},
    {id: 2, name: 'BMW', price: 2000},
    {id: 3, name: 'Mercedes', price: 3000},
    {id: 4, name: 'Audi', price: 4000},
    {id: 5, name: 'Porsche', price: 5000},
  ])

  exPrice = computed(() => this.selectedVehicle().price * this.quantity())

  constructor(){
    console.log(this.quantity())
    // run side effect when quantity changes
    effect(() => console.log(this.quantity()))

  

  }

  onQuantitySelected($event: number) {
    // set quantity
    this.quantity.set($event)
  }

}

export interface Vehicle {
  id: number
  name: string
  price: number
}
