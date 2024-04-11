import { memo } from 'react';
import { Button, Label, ThemeSelector } from '../ui';
import { useNavigate } from 'react-router-dom';
import { TokenUsage } from '~/components/Admin/Tools';
import {cn} from "~/utils";
import colors from "tailwindcss/colors";

const AdminView = () => {
  const navigate = useNavigate();
  const returnToChat = () => {
    navigate('/c/new');
  };

  return (
    <>
      <h1>Admin View</h1>
      <div>
        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded" onClick={returnToChat}>
          <span>Retourne au Chat</span>
        </Button>
      </div>
      <TokenUsage/>
      <ThemeSelector />
    </>
  );
};

export default memo(AdminView);