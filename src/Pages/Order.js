import { useNavigate } from "react-router-dom";
export const Order = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p>Hello Setemi. I am just messing with you!</p>
        <button onClick={() => navigate(-1)}>Now GERROUT!!!</button>
      </div>
    </>
  );
};
