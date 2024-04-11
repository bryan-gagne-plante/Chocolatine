import { memo } from "react"
import { Button, Label, TextareaAutosize } from "../ui";
import { useNavigate } from "react-router-dom";
import { cn } from "~/utils";
import { useUserRole } from "~/hooks";


const AdminView = () => {
    const navigate = useNavigate();
    const returnToChat = () => {
        navigate('/c/new');
    }

    return (
        <div>
            <h1>Admin View</h1>
            <div>
                <Button
                onClick={returnToChat}>
                <Label>Retourne au Chat</Label>
            </Button>
            </div>
            
        </div>
    )
}

export default memo(AdminView);