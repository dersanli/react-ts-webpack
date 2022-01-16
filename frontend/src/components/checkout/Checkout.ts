interface Item {
    ID: string,
    Name: string,
    Price: number,
}

export interface BasketLevelRule {
    minSpend: number,
    discountPercent: number
}

export interface ItemLevelRule {
    itemName: string,
    minQuantity: number,
    discountPrice: number
}

export default class Checkout {
  sum: number = 0;
  basketLevelRule: BasketLevelRule;
  itemLevelRule: ItemLevelRule;

  constructor(basketLevelRule = {}, itemLevelRule = {}) {
    this.basketLevelRule = <BasketLevelRule>basketLevelRule;
    this.itemLevelRule = <ItemLevelRule>itemLevelRule;
  }


  total = (): number => {
    return this.sum;
  };

  scan = (items: Item[]): void => {
    let total = 0.00;
    const minQuantityReached = this.itemLevelRule && items.filter(item => item.Name === this.itemLevelRule.itemName).length >= 2;

    items.map(item => {
      let price = item.Price;
      if (item.Name === this.itemLevelRule.itemName && minQuantityReached) {
        price = this.itemLevelRule.discountPrice || 0.00;
      }
      total += price;
    });


    if (this.basketLevelRule) {
      if (total > this.basketLevelRule.minSpend) {
        total = total * (100 - this.basketLevelRule.discountPercent) / 100;
      }
    }

    this.sum = total;
  };
}