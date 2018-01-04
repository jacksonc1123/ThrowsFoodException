import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Wizard } from 'clarity-angular';
import { Menu } from '../beans/menu';
import { MenuApiService } from '../services/menu-api.service';
import { User } from '../beans/user';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-create-menu-wizard',
  templateUrl: './create-menu-wizard.component.html',
  styleUrls: ['./create-menu-wizard.component.css']
})
export class CreateMenuWizardComponent implements OnInit {

  @ViewChild("wizardlg") wizardLarge: Wizard;

  @Input()
  createMenuWizard: boolean;

  @Output()
  menuWizardEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  menuInfo: Menu = new Menu();
  adminUser: User;

  constructor(
    private menuApiService: MenuApiService,
    private menuService: MenuService
  ) { }

  ngOnInit() {

  }

  unShow() {
    this.menuWizardEmitter.emit(false);
  }

  createMenu() {
    console.log("here");
    this.adminUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.adminUser.role == 2) {
      this.menuInfo.admin = this.adminUser;
      this.menuApiService.addMenu(this.menuInfo).subscribe((menu) => {
        localStorage.setItem('menu', JSON.stringify(menu));
        this.menuService.changeMenu(menu);
      });
    }
  }

}
