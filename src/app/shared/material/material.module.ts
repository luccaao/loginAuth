import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  exports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatToolbarModule]
})
export class MaterialModule { }
