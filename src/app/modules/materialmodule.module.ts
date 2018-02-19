import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, 
         MatIconModule,
         MatRippleModule, 
         MatToolbarModule,  
         MatListModule, 
         MatMenuModule, 
         MatButtonModule,
         MatCardModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatSidenavModule, 
    MatIconModule,
    MatRippleModule, 
    MatToolbarModule,  
    MatListModule, 
    MatMenuModule, 
    MatButtonModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    NoopAnimationsModule,
    MatSidenavModule, 
    MatIconModule,
    MatRippleModule, 
    MatToolbarModule,  
    MatListModule, 
    MatMenuModule, 
    MatButtonModule,
    MatCardModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialmoduleModule { }
