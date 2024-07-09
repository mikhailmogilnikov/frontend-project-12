export const Typo = ({
  children,
  tag = 'p',
  className = 'md:text-lg font-medium',
  opacity = 1,
  size,
  weight = 500,
}) => {
  const Tag = tag;

  return (
    <Tag
      className={className}
      style={{ opacity, fontSize: size, fontWeight: weight }}
    >
      {children}
    </Tag>
  );
};
