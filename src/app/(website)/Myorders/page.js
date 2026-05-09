import Historyorder from "../../componets/myorders/Historyorder";
import { getMyOrders } from "../../Context/Ordersever";

export default async function Myorder() {
  const orders = (await getMyOrders()) || [];
  const plainOrders = JSON.parse(JSON.stringify(orders));

  return (
    <div>
      <Historyorder orders={plainOrders} />
    </div>
  );
}
