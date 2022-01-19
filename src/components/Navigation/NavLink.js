import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'theme-ui';
import { useRouter } from 'next/router';

function NavLink({ label, href }) {
  const { push } = useRouter();

  return (
    <Text
      variant="navLink"
      as="a"
      className="nav-link"
      onClick={() => push(href)}
    >
      {label}
    </Text>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default NavLink;
