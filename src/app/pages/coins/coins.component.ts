import {Component, OnInit} from '@angular/core';
import {UserDataService} from '../../services/user-data.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-coins',
    templateUrl: './coins.component.html',
    styleUrls: ['./coins.component.css']
})
export class CoinsComponent {
    coins: number;
    cars: number;
    bags: number;
    stacks: number;
    golds: number;
    silvers: number;

    constructor(
        private userDataService: UserDataService,
        private location: Location
    ) {
        this.coins = userDataService.getCoins();
        this.cars = Math.floor(this.coins / 250);
        this.bags = Math.floor((this.coins % 250) / 50);
        this.stacks = Math.floor((this.coins % 50) / 10);
        this.golds = Math.floor((this.coins % 10) / 2);
        this.silvers = Math.floor(this.coins % 2);
    }

    numberToIterable(num: number) {
        return Array(num).fill('');
    }

    goBack() {
        this.location.back();
    }
}
