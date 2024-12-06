import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

type OrderStatus = 'Đang lấy hàng' | 'Đang vận chuyển' | 'Đã giao hàng';

export const OrderStatus: React.FC = () => {
  const location = useLocation();
  const { cart, totalPrice } = location.state as { cart: any[], totalPrice: number };
  const [status, setStatus] = useState<OrderStatus>('Đang lấy hàng');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'Đang lấy hàng') {
        setStatus('Đang vận chuyển');
        setProgress(50);
      } else if (status === 'Đang vận chuyển') {
        setStatus('Đã giao hàng');
        setProgress(100);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trạng thái đơn hàng</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Trạng thái: {status}</h3>
          <Progress value={progress} className="w-full" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sản phẩm</TableHead>
              <TableHead>Số lượng</TableHead>
              <TableHead>Giá</TableHead>
              <TableHead>Tổng</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>${item.price * item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 text-right text-2xl font-bold">
          Tổng cộng: ${totalPrice}
        </div>
      </CardContent>
    </Card>
  );
};

