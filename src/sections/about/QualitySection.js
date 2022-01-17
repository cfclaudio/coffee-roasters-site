import React from "react";
import { Section } from "components";
import { Card, Image, Paragraph, Heading, Box } from "theme-ui";

const QualitySection = () => {
  return (
    <Section sx={{ position: "relative", mt: 150 }}>
      <Card variant="image" sx={{ position: "absolute", mx: 24, top: "-60px" }}>
        <Image src="/about/mobile/image-quality.jpg" alt="image-commitment" />
      </Card>

      <Card
        sx={{
          textAlign: "center",
          borderRadius: "card",
          bg: "secondary",
          color: "white",
          pt: 100,
          pb: "4em",
          px: "1.5em",
        }}
      >
        <Heading>Uncompromising quality</Heading>
        <Paragraph>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </Paragraph>
      </Card>
    </Section>
  );
};

export default QualitySection;
