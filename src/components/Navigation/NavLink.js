import React from "react";
import PropTypes from "prop-types";
import { Box } from "theme-ui";
import { useRouter } from "next/router";

const NavLink = ({ label, href }) => {
  const { push } = useRouter();

  return (
    <Box className="nav-link" onClick={() => push(href)}>
      {label}
    </Box>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;
