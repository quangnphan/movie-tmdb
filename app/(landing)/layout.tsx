import { ReactNode } from "react";

const LandingLayout = (props: {
  children: ReactNode;
}) => {
  return (
    <div className="bg-container min-h-screen">
      <main className="max-w-5xl mx-auto">
        {props.children}
      </main>
    </div>
  )
}

export default LandingLayout;
