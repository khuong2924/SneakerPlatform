import React from 'react';
import { shoes } from '../data/shoes';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shoes.map((shoe) => (
        <Card key={shoe.id} className="overflow-hidden">
          <CardHeader>
            <CardTitle>{shoe.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={shoe.image} alt={shoe.name} className="w-full h-48 object-cover mb-4" />
            <p className="text-2xl font-bold">${shoe.price}</p>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => addToCart({ id: shoe.id, name: shoe.name, price: shoe.price, quantity: 1 })}
              className="w-full"
            >
              Thêm vào giỏ hàng
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

