/** @format */
import { useUsers } from "../../Services/Hooks/useUsers";
import "./SignOut.css";
import { Button } from "antd";

export const SignOut = () => {
  const { onLogOut } = useUsers();
  return (
    <div className="signUp">
      <Button
        onClick={onLogOut}
        className="signInUp_button signUp"
        variant="contained"
      >
        <div style={{ color: "white" }}>Đăng xuất</div>
      </Button>
    </div>
  );
};
