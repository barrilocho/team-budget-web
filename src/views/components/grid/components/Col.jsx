import { bool, number, oneOfType, shape, string } from 'prop-types';

const Col = ({
  size,
  narrow = '',
  offset,
  mobile,
  tablet,
  desktop,
  widescreen,
  fullhd,
  className = '',
}) => {
  let classes = '';
  const DEVICE_SIZES = ['mobile', 'tablet', 'desktop', 'widescreen', 'fullhd'];

  const finalSize = `${size > 0 ? `is-${size}` : ''}`;
  const offsetSize = `${offset > 0 ? `is-offset-${offset}` : ''}`;
  const narrowSize = `${narrow !== '' ? `is-narrow-${narrow}` : ''}`;
  let responsiveSize;
  if (typeof mobile === 'number') {
    responsiveSize = `${mobile > 0 ? `is-mobile-${mobile}` : ''} `;
    responsiveSize += `${tablet > 0 ? ` is-tablet-${tablet}` : ''} `;
    responsiveSize += `${desktop > 0 ? ` is-desktop-${desktop}` : ''} `;
    responsiveSize += `${widescreen > 0 ? ` is-widescreen-${widescreen}` : ''} `;
    responsiveSize += `${fullhd > 0 ? ` is-fullhd-${fullhd}` : ''} `;
  }
  if (typeof mobile === 'string') {
    responsiveSize = `${mobile === false ? `is-mobile-${mobile}` : ''} `;
    responsiveSize += `${tablet > 0 ? ` is-tablet-${tablet}` : ''} `;
    responsiveSize += `${desktop > 0 ? ` is-desktop-${desktop}` : ''} `;
    responsiveSize += `${widescreen > 0 ? ` is-widescreen-${widescreen}` : ''} `;
    responsiveSize += `${fullhd > 0 ? ` is-fullhd-${fullhd}` : ''} `;
  }

  classes = `${finalSize} ${offsetSize} ${narrowSize} ${responsiveSize} ${className}`.trim();
  DEVICE_SIZES.forEach((brkPoint) => {
    if (brkPoint === 0) {
      classes += `${`is-hidden-${brkPoint}${
        brkPoint !== 'mobile' && brkPoint !== 'fullhd' ? '-only' : ''
      }`} `;
    }
  });
  return <div className={`column ${classes}`} />;
};
const colSize = oneOfType([bool, number, string]);
const stringOrNumber = oneOfType([number, string]);
const column = oneOfType([
  colSize,
  shape({
    size: colSize,
    order: stringOrNumber,
    offset: stringOrNumber,
    display: string,
  }),
]);
Col.propTypes = {
  size: number,
  narrow: string,
  className: string,
  offset: number,
  mobile: column,
  tablet: column,
  desktop: column,
  widescreen: column,
  fullhd: column,
};
export default Col;
