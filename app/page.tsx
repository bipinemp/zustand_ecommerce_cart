"use client";

import Cart from "@/components/Cart";
import ChangeQtyButtons from "@/components/ChangeQtyButtons";
import User from "@/components/User";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PRODUCTS_DATA } from "@/lib/mockData";
import { useStore } from "@/store/store";

export default function Home() {
  const addProduct = useStore((state) => state.addProduct);
  const cartProducts = useStore((state) => state.products);

  return (
    <main className="space-y-2 dark bg-background max-w-sm mx-auto mt-5 mb-20">
      <div className="my-5 flex items-center justify-between">
        <User />
        <Cart />
      </div>
      <h1 className="text-2xl">Products:</h1>
      <div className="space-y-2">
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            <CardContent>{product.price}$</CardContent>
            <CardFooter>
              {cartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButtons productId={product.id} />
              ) : (
                <Button onClick={() => addProduct(product)}>Add to Cart</Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
