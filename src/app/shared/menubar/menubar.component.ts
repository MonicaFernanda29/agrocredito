import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, AvatarModule, BadgeModule, InputTextModule],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: '🌱 AgroCrédito',
        routerLink: '/'
      },
      {
        label: 'Productos',
        icon: 'pi pi-shopping-bag',
        items: [
          { label: 'Abonos', routerLink: '/productos/abonos' },
          { label: 'Fertilizantes', routerLink: '/productos/fertilizantes' },
          { label: 'Sustratos', routerLink: '/productos/sustratos' },
        ],
      },
    ];
  }
}
