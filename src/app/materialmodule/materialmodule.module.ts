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
    MatCardModule
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
    MatCardModule
  ],
  declarations: []
})
export class MaterialmoduleModule { }
