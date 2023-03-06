import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { UiModule } from '../ui/ui.module';
import { ContentGridComponent } from './components/content-grid/content-grid.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    SiteHeaderComponent,
    ContentGridComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    PageHeaderComponent,
    SiteHeaderComponent
  ]
})
export class LayoutModule { }
