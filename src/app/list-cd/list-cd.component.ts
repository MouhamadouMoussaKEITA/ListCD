import { Component, OnInit } from '@angular/core';
import { CdsService } from '../services/cds.service';
import { CD } from '../Models/cd.model';

@Component({
  selector: 'app-list-cd',
  standalone: false,
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss' // Corrected property name from 'styleUrl' to 'styleUrls'
})


export class ListCDComponent implements OnInit {
  listcd!: CD[];
constructor(private myCDsService: CdsService) { }
  ngOnInit(): void {
    this.listcd = this.myCDsService.getCds();
  }
}
