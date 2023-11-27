import { Navigate, RouteProps } from "react-router-dom";

export type AuthRouteProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;

function AuthRouter(props: AuthRouteProps) {
  const { authenticationPath = "/", children } = props;
  //   const { loggedIn } = useAuthValue();
  const token  = localStorage.getItem("token")
console.log("token", token)
  if (true) {
    return children;
  } else {
    return <Navigate to={authenticationPath} />;
  }
}

export default AuthRouter;
