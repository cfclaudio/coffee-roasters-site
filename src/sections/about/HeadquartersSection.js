import React from "react";
import PropTypes from "prop-types";
import { Section } from "components";
import { Card, Image, Paragraph, Heading, Box } from "theme-ui";

const LocationCard = ({ country, address = [], phone, src }) => {
  return (
    <Card className="location-card" variant="location">
      <Image src={src} alt={`illustration-${country}`} />
      <Heading>{country}</Heading>
      <Paragraph>{address[0]}</Paragraph>
      <Paragraph>{address[1]}</Paragraph>
      <Paragraph>{address[2]}</Paragraph>
      <Paragraph>{phone}</Paragraph>
    </Card>
  );
};

LocationCard.propTypes = {
  address: PropTypes.arrayOf(PropTypes.string).isRequired,
  country: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const HeadquartersSection = () => {
  return (
    <Section sx={{ position: "relative", mt: 150 }}>
      <LocationCard
        src="/about/desktop/illustration-uk.svg"
        country="United Kingdom"
        address={["68  Asfordby Rd", "Alcaston", "SY6 1YA"]}
        phone="+44 1241 918425"
      />
      <LocationCard
        src="/about/desktop/illustration-canada.svg"
        country="Canada"
        address={["1528 Eglinton Avenue", "Toronto", "Ontario M4P 1A6"]}
        phone="+1 416 485 2997"
      />
      <LocationCard
        src="/about/desktop/illustration-australia.svg"
        country="Australia"
        address={["36 Swanston Street", "Kewell", "Victoria"]}
        phone="+61 4 9928 3629"
      />
    </Section>
  );
};

export default HeadquartersSection;
