import { memo } from 'react';
import { Button, Label, ThemeSelector } from '../ui';
import { useNavigate } from 'react-router-dom';
import { TokenUsage } from '~/components/Admin/Tools';
import FeedBackTable from '~/components/Admin/FeedBackTable';


const AdminView = () => {
  const navigate = useNavigate();
  const returnToChat = () => {
    navigate('/c/new');
  };


  return (
    <>
      <h1><Label>Admin View</Label></h1>
      <div>
        <Button  onClick={returnToChat}>
          Retourne au Chat
        </Button>
      </div>
      <TokenUsage/>
      
      <FeedBackTable />
    </>
  );
};

export default memo(AdminView);