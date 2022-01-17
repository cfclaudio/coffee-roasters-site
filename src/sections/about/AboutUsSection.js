import React from "react";
import { Section } from "components";
import { Card, Image, Paragraph, Heading, Box } from "theme-ui";

const AboutUsSection = () => {
  return (
    <Section className="about-us-section first-section">
      <Card variant="image" sx={{ position: "relative" }}>
        <Image
          src={"/about/mobile/image-hero-whitecup.jpg"}
          alt="image-hero-whitecup"
        />
        <Box
          sx={{
            position: "absolute",
            color: "white",
            top: "0",
            mx: "1em",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Heading>About Us</Heading>
          <Paragraph>
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </Paragraph>
        </Box>
      </Card>
    </Section>
  );
};

export default AboutUsSection;
