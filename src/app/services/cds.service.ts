import { Injectable } from '@angular/core';
import { CD } from '../Models/cd.model';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getCds(): CD[] {
    return [
      {
        id: 1,
        title: '100K',
        author: 'Gazo',
        price: 10,
        thumbnail: 'data:image/jpeg;base64,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',
        dateDeSortie: new Date(2024, 1, 1),
        quantite: 30,
        onsale: false

      },
      {
        id: 2,
        title: 'Bon deja',
        author: 'Niska',
        price: 15,
        thumbnail: 'https://www.gentsu.fr/wp-content/uploads/2019/11/niska-offre-l-inedit-bon-deja-pour-colors-video-628x400.jpg',
        dateDeSortie: new Date(2024, 1, 2),
        quantite: 20,
        onsale: true
      },
      {
        id: 3,
        title: 'Special',
        author: 'Tiakola',
        price: 15,
        thumbnail: 'https://i.scdn.co/image/ab67616d0000b273b01b53b7eb58308e633434f0',
        dateDeSortie: new Date(2024, 1, 2),
        quantite: 1,

      }
    ];
  }

  getCDById(id: number): CD {
    const cd = this.getCds().find(cd => cd.id === id);
    if (cd) {
      return cd;
    }
    else {
      throw new Error('CD not found');
    }
  }
}