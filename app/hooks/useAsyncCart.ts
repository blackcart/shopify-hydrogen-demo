import {useEffect, useState} from 'react';
import {useRootLoaderData} from '~/root';
import {CartReturn} from '@shopify/hydrogen';

export function useAsyncCart() {
  let [cart, setCart] = useState<CartReturn>(null);
  let root = useRootLoaderData();
  useEffect(() => {
    if (root) {
      root.cart.then((cart: any) => {
        setCart(cart);
      });
    }
  }, [root]);
  return cart;
}
