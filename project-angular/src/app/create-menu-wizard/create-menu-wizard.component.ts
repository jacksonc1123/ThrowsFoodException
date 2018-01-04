import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Wizard } from 'clarity-angular';
import { Menu } from '../beans/menu';

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

  constructor() { }

  ngOnInit() {
  }

  unShow() {
    this.menuWizardEmitter.emit(false);
  }

  createMenu() {
    
  }

}
