import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { UiModule } from '../ui/ui.module';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [HomeComponent, PageComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    UiModule
  ]
})
export class ContentModule { }
