import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { Content } from 'ionic-angular/navigation/nav-interfaces';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];
  showSearchbar: boolean = false;
  @ViewChild('content') content: Content;

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Marcus Brocaneli'
        },
        name: 'Sofá Usado',
        date: 'November 5, 1955',
        image: 'assets/img/sofa.jpg',
        about: 'Sofá usado em perfeito estado de conservação. Tempo de Uso: 3 meses',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Julia Beltrame'
        },
        name: 'Bicicleta',
        date: 'May 12, 1984',
        image: 'assets/img/bicicleta.jpg',
        about: 'Bicicleta usada, em bom estado de conservação. É apenas necessário um ajuste nos freios'
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Marília Rocha'
        },
        name: 'Computador Gamer',
        date: 'June 28, 1990',
        image: 'assets/img/computador.jpg',
        about: 'Computador usado. Montado em 2014, com 4 GB de RAM e HD de 500 GB'
      }
    ];

  }

  cardClicked($event, item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  settings() {
    this.navCtrl.push(SettingsPage)
  }

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
    this.content.resize();
  }
}
