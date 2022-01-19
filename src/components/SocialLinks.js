/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const iconStyle = {
  mx: '12px',
  color: 'background',
  '&:hover': { cursor: 'pointer', color: 'accent' }
};

function SocialLinks(props) {
  return (
    <Box className="social-links" {...props}>
      <FacebookIcon sx={iconStyle} />
      <TwitterIcon sx={iconStyle} />
      <InstagramIcon sx={iconStyle} />
    </Box>
  );
}

export default SocialLinks;
