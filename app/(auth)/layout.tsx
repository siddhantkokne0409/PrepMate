import { ReactNode, Suspense } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={"auth-layout"}>{children}</div>
    </Suspense>
  );
};
export default AuthLayout;
