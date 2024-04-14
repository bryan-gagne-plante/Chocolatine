import type { FC } from 'react';
import { MenuItem } from '../UI';
import { useLocalize } from '~/hooks';
import { useNavigate } from 'react-router-dom';
import EditIcon from '~/components/svg/EditIcon';
import Button from '~/components/Input/Generations/Button';
import { cn } from '~/utils';

interface AdminButtonProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
}

const AdminButton: FC<AdminButtonProps> = ({ className, id, 'data-testid': dataTestId }) => {
const navigate = useNavigate();
const handleAdminClick = () => {
    navigate('/admin');
};

return (
    <Button
        onClick={handleAdminClick} 
        className={cn(
            'pointer-cursor relative flex flex-col rounded-md border border-gray-100 bg-white text-left focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-700 dark:bg-gray-800 sm:text-sm',
            'hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-gray-700 dark:radix-state-open:bg-gray-700',
            'z-50 flex h-[40px] min-w-4 flex-none items-center justify-center px-3 focus:ring-0 focus:ring-offset-0',
          )}
        data-testid={dataTestId} 
    >Admin
    </Button>
);
};

export default AdminButton;
