// module1.page.ts
import { Component } from '@angular/core';
import { ModuleStateService } from '@app/module-state.service';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.page.html',
  styleUrls: ['./module1.page.scss'],
})
export class Module1Page {
  constructor(private moduleStateService: ModuleStateService) { }

  unlockNextModule() {
    this.moduleStateService.unlockNextModule();
  }
}
