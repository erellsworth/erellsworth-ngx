import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { UiModule } from '../ui/ui.module';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [HomeComponent, PageComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    LayoutModule,
    UiModule
  ]
})
export class ContentModule { }
