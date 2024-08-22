export const Flex = ({
  children,
  className = '',
  tag = 'div',
  direction = 'row',
  gap = 4,
  width = '100%',
  editable = false,
  wrap = false,
  col = false,
  center = false,
}) => {
  const Tag = tag;

  return (
    <Tag
      className={`flex text-foreground ${className} ${wrap && 'flex-wrap'} ${
        center && 'items-center'
      }`}
      style={
        !editable
          ? { flexDirection: col ? 'column' : direction, gap: gap * 4, width }
          : undefined
      }
    >
      {children}
    </Tag>
  );
};
