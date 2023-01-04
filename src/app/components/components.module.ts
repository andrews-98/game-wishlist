import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { GamelistComponent } from './gamelist/gamelist.component';


@NgModule({
  declarations: [
    HeaderComponent,
    WishlistComponent,
    GamelistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    WishlistComponent,
    GamelistComponent
  ]
})
export class ComponentsModule { }
