import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule
  ]
})
export class ProductModule { }
