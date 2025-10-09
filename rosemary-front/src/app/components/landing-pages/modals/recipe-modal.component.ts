import { Component, signal, EventEmitter, Output, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  templateUrl: './recipe-modal.component.html',
  styleUrl: './recipe-modal.component.scss',
  selector: 'recipe-modal',
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class RecipeModal {
  constructor() {}
  @Output() modalIsOpen = new EventEmitter<void>();
  closeModal() {
    this.modalIsOpen.emit();
    this.setIngredientsTable('');
  }
  measurements: String[] = [
    'Count (No.)',
    'Teaspoon (tsp)',
    'Tablespoon (tbsp)',
    'Cup (c)',
    'Fluid ounce (fl oz)',
    'Milliliter (mL)',
    'Liter (L)',
    'Ounce (oz)',
    'Pound (lb)',
    'Gram (g)',
    'Kilogram (kg)',
    'Pinch',
    'Dash',
    'Handful',
  ];
  ingredients = signal<string[]>([]);
  setIngredientsTable(lastIngredient: any) {
    this.ingredients.set([...this.ingredients(),lastIngredient]);
  }
  ingredient = '';
  quantity = '';
  measurement = '';
  addIngredient = ()=>{
    if(this.quantity != '' && this.measurement != '' && this.ingredient != '') {
      const ingredient = `${this.quantity} ${this.measurement} ${this.ingredient}`;
      this.setIngredientsTable(ingredient);
      this.quantity = '';
      this.measurement = '';
      this.ingredient = '';
    }
    return;
  } 
  selectedStep = signal(1);
  selectStep(step:any) {
    this.selectedStep.set(step);
  }
}
