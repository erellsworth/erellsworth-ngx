import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ButtonComponent } from './button/button.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageHeaderComponent,
    ButtonComponent,
    SiteHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageHeaderComponent,
    ButtonComponent,
    SiteHeaderComponent
  ]
})
export class UiModule { }
