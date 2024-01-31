import { CartItem } from "@/lib/features/cart/cartSlice";

interface CartItemProps {
  item: CartItem
}

export default function CartItem({item}: CartItemProps) {
  return (
    <div>{item.dsc}</div>
  )
}
