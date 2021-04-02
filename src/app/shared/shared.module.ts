import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'

import { HeaderComponent } from './../shared/components/header/header.component';
import { FooterComponent } from './../shared/components/footer/footer.component';

import { ExponentialPipe } from './../shared/pipes/exponential/exponential.pipe';
import { HighlightDirective } from './../shared/directives/highlight/highlight.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { GroupPipe } from './pipes/group/group.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    GroupPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    GroupPipe
  ]
})
export class SharedModule { }
