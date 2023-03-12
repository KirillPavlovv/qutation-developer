import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-product-modal',
  templateUrl: './new-product-modal.component.html',
  styleUrls: ['./new-product-modal.component.css']
})
export class NewProductModalComponent {
  constructor(public dialogRef: MatDialogRef<NewProductModalComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }
}
