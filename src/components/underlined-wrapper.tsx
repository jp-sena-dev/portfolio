interface UnderlinedWrapperProps {
  children: string;
}

export function UnderlinedWrapper({ children }: UnderlinedWrapperProps) {
  return (
    <span className="text-action underline font-bold">{children}</span>
  );
}
