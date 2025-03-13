import {ReactNode} from "react";

const Policies = ({children}:{children:ReactNode}) => {
  return (
    <div className={"policies"}>
      {children}
    </div>
  );
};

export default Policies;
