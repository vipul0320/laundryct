import { Navigate, RouteProps } from "react-router-dom";

export type AppRouterProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;

export default function AppRouter(props: AppRouterProps) {
  const { authenticationPath = "/", children } = props;

  if (true) {
    return children;
  } else {
    return <Navigate to={authenticationPath} />;
  }
}
