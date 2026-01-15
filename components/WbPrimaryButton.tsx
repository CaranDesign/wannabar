import { Button } from "./ui/button";

// extends Button shadcn type to my component for inherit all props directly whitout declaring it
interface WbPrimaryButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export default function WbPrimaryButton({ children, ...props }: WbPrimaryButtonProps) {
  return (
     <Button
      //passing all the props to component
      {...props}
      className="bg-yellow-500 shadow-lg shadow-yellow-500/50 cursor-pointer"
    >
      {children}
    </Button>
  );
}
