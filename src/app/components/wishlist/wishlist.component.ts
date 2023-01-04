import { Component, Input, OnInit } from '@angular/core';
import { N1 } from 'src/app/models/products';
import { GameListService } from 'src/app/shared/services/game-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  gameList: N1[] | null = []
  addedSum: number = 0

  constructor(private service: GameListService) { }

  ngOnInit(): void {
    this.service.gameList$.subscribe(data => {
      this.gameList = data
    })
    this.sumOfWishGames()
  }

  sumOfWishGames() {
    this.service.gameListSum$.subscribe(sum => this.addedSum = sum)
  }

  removeFromWishList(game: N1){
    this.service.removeFromWishList(game)
  }

  clearWishList(){
   this.service.clearWishList()
  }
}
