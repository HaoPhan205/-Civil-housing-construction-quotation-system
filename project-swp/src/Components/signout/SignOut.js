/** @format */
import { useUsers } from "../../Services/Hooks/useUsers";
import "./SignOut.css";
import { Button } from "antd";

export const SignOut = () => {
  const { onLogOut } = useUsers();
  return (
    <div className="signOut">
      <Button
        onClick={onLogOut}
        className="signOut_button signOut"
        variant="contained"
      >
        <div style={{ color: "white" }}>Đăng xuất</div>
      </Button>
    </div>
  );
};
