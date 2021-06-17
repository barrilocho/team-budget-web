import { bool, node, number, string } from 'prop-types';

const Row = ({
  isMobile = true,
  gap = 0,
  children,
  isMultiline = false,
  breakOnGap = '',
  className = '',
}) => {
  const mobile = `is-${isMobile ? 'mobile' : 'desktop'}`;
  const hasGap = `is-${gap === 0 ? 'gapless' : gap}`;
  const breakGap = `${breakOnGap}`;
  const multiline = `${isMultiline ? 'is-multiline' : ''}`;
  const classes = `${mobile} ${hasGap} ${breakGap} ${multiline} ${className}`.trim();

  return <div className={`columns ${classes}`}>{children}</div>;
};

Row.propTypes = {
  children: node,
  isMobile: bool,
  gap: number,
  breakOnGap: string,
  className: string,
  isMultiline: bool,
};

export default Row;
