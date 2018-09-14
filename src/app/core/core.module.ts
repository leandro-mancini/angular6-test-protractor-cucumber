import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class CoreModule { }
