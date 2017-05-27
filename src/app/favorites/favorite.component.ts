import { Component, Input } from '@angular/core';

@Component({
    selector: 'bs-favorite',
    templateUrl: './favorite.component.html'
})
export class FavoriteComponent {
    @Input() reviews: number;
}