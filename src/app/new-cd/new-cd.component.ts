import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CD } from '../Models/cd.model';
import { CdsService } from '../services/cds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cd',
  standalone: false,
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss'] // Correction de styleUrl -> styleUrls
})
export class NewCDComponent implements OnInit {

  formulaire!: FormGroup;
  currentCD!: CD;
  thumbRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private cdservices: CdsService, // Injection du service CdsService
    private router: Router // Injection du service Router
  ) { }

  ngOnInit(): void {
    // Initialisation de l'expression régulière pour le champ thumbnail
    this.thumbRegex = new RegExp('https?://.+\\.(jpg|jpeg|png|gif)$');

    // Création du formulaire avec les validations
    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      author: [null, [Validators.required, Validators.minLength(3)]],
      thumbnail: [null, [Validators.required, Validators.pattern(this.thumbRegex)]],
      dateDeSortie: [null, [Validators.required]],
      quantite: [null, [Validators.required, Validators.min(0)]],
      price: [null, [Validators.required, Validators.min(0)]],
    }, { updateOn: 'blur' });

    // Mise à jour de l'objet currentCD à chaque changement de valeur du formulaire
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

  onSubmit(): void {
    // Création d'un nouvel objet CD à partir des valeurs du formulaire
    let newCD: CD = {
      id: 0,
      title: this.formulaire.get('title')?.value,
      author: this.formulaire.get('author')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value,
      price: this.formulaire.get('price')?.value,
      onsale: false
    };


    this.cdservices.addCD(newCD).subscribe({
      next: () => {
        this.router.navigateByUrl('/catalog'); // Redirection après succès
      },
      error: err => {
        console.error('Erreur lors de l\'ajout du CD :' + err);
        alert('Une erreur est survenue lors de l\'ajout du CD. Veuillez réessayer.');
      }
    });
  }
}
