import { Component, signal, EventEmitter, Output, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  templateUrl: './recipe-modal.component.html',
  styleUrl: './recipe-modal.component.scss',
  selector: 'recipe-modal',
  standalone: true,
  imports: [FormsModule],
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
    const ingredient = `${this.quantity} ${this.measurement} ${this.ingredient}`;
    this.setIngredientsTable(ingredient);
  } 
}
