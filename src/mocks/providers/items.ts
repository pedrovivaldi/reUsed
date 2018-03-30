import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
        "name": "Skate",
        "image": "assets/img/skate.jpg",
        "about": "Skate usado",
  };


  constructor() {
    let items = [
      {
        "name": "Skate",
        "image": "assets/img/skate.jpg",
        "about": "Skate usado",
      },
      {
        "name": "Mochila",
        "image": "assets/img/mochila.jpg",
        "about": "Charlie is a Cheetah.",
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
