import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CD } from '../Models/cd.model';

@Component({
  selector: 'app-new-cd',
  standalone: false,
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent {


  formulaire!: FormGroup;
  currentCD!: CD;
  thumbRegex!: RegExp;

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(): void {
    alert('CD ajouté avec succès !');
    console.log('CD ajouté avec succès :', this.formulaire.value)
  }

  ngOnInit(): void {

    this.thumbRegex = new RegExp('');

    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      author: [null, [Validators.required, Validators.minLength(3)]],
      thumbnail: [null, [Validators.required, Validators.pattern(this.thumbRegex)]],
      dateDeSortie: [null, [Validators.required, Validators.minLength(0)]],
      quantite: [null, [Validators.required, Validators.minLength(0)]],
      price: [null, [Validators.required, Validators.minLength(0)]],
    },
      { updqateOn: 'blur' }
    );

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD = {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite,
        price: formValue.price,
        onsale: false
      };

    });
  }
}
