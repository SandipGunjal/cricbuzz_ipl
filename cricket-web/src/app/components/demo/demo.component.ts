import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Option {
  label: string;
  value: number;
}

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  selectedValue: string = '';

  options: Option[] = [
    { label: 'Adult', value: 0 },
    { label: 'Children', value: 0 },
    { label: 'Option 3', value: 0 }
  ];

  selectOption(option: Option) {
    this.selectedValue = `${option.label} (${option.value})`;
  }

  increment(option: Option) {
    option.value++;
  }

  decrement(option: Option) {
    if (option.value > 0) {
      option.value--;
    }
  }

  // value : number = 0

  // increment(){
  //   this.value++
  // }
  // decrement(){
  //   this.value--
  // }


}
