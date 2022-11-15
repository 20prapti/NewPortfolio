import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Prapti Gupta <br />A full stack Java Devloper
        </SectionTitle>
        <SectionText>
          Looking for opportunity as a software engineer.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://drive.google.com/file/d/1JF1QOdsB7spO1ZTEimys425D4WaxKfZQ/view?usp=sharing")
          }
        >
          Download CVV
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
