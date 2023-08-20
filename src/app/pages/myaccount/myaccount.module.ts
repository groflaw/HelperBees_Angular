import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyaccountRoutingModule } from './myaccount-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MyaccountComponent } from './myaccount.component';

@NgModule({
  declarations: [MyaccountComponent],
  imports: [CommonModule, MyaccountRoutingModule, SharedModule],
})
export class MyaccountModule {}
