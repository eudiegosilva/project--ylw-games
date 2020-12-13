import ProfileTemplate from 'templates/Profile';

import { mock as ordersItemsMock } from 'components/OrdersList/mock';
import OrdersList, { OrdersListProps } from 'components/OrdersList';

export default function OrdersPage({ items }: OrdersListProps) {
  return (
    <ProfileTemplate>
      <OrdersList items={items} />
    </ProfileTemplate>
  );
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersItemsMock
    }
  };
}
