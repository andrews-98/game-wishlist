import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { N1 } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  gameList: N1[] = []
  gameList$ = new BehaviorSubject<N1[] | null>(this.gameList)
  gameListSum$ = new BehaviorSubject<number>(0)


  constructor() { }

  addToGameList(game: N1) {
    if (!this.gameList.includes(game)) {
      this.gameList.push(game)
    }
    game.checked = true
    this.gameListSum$.next(this.gameList.length)

  
  }

  removeFromWishList(game: N1){
    const idx  = this.gameList.indexOf(game )
    this.gameList.splice(idx, 1)
    game.checked = false
    this.gameListSum$.next(this.gameList.length)
  }
 
  clearWishList(){
    this.gameList = []
    this.gameList$.subscribe( data => {
      data?.forEach( el => el.checked = false)
    })
    this.gameList$.next(null)
    this.gameListSum$.next(this.gameList.length)

   
  }

}
