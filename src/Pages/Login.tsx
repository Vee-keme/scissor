import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="z-300000000000 text-3xl">
      <h1>Login page</h1>
      <button onClick={() => navigate("/")}>home</button>
      <Link to="/" className="hover:text-red-800">
        Home
      </Link>
    </div>
  );
};

export default Login;
