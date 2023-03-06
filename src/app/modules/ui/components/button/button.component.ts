import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() href!: string;
  @Input() routerLink!: string;
  @Input() target = 'blank';

  public get isExternal(): boolean {
    return Boolean(this.href && !this.routerLink);
  }

  public get isRouter(): boolean {
    return Boolean(this.routerLink);
  }

  ngOnInit(): void {
    console.log('init', this.isExternal, this.isRouter, this.href, this.routerLink);
  }

}
