import { useLocalize, useUserRole } from '~/hooks';
import { FC } from 'react';
import { cn } from '~/utils';
import { AdminButton } from './Admin';

const AdminMenu: FC = () => {
  const role = useUserRole();
  return (
    <>
      {role === 'ADMIN' && <AdminButton />}
    </>
  );
};

export default AdminMenu;