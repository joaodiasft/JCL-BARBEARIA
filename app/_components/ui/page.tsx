export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen space-y-2 p-2">{children}</div>;
};

export const PageSectionTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className="text-foreground text-xs font-semibold uppercase">
      {children}
    </h2>
  );
};

export const PageSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2">{children}</div>;
};
