import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { N1, Product } from 'src/app/models/products';
import { GameListService } from 'src/app/shared/services/game-list.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {


  @Input() productList!: Product[]

  constructor(private service: GameListService) { }

  ngOnInit(): void {
  
  }

  addToWishlist(game: N1) {
    this.service.addToGameList(game)
  }

}
