import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faListCheck,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import IconWrapper from "./IconWrapper/IconWrapper";

export const guaranteeServices = [
  {
    icon: (
      <IconWrapper>
        <FontAwesomeIcon color="#fff" icon={faSackDollar} />
      </IconWrapper>
    ),
    title: "Estimates",
    explanation:
      "We bring you the most accurate and fair-price service estimates",
  },
  {
    icon: (
      <IconWrapper>
        <FontAwesomeIcon color="#fff" icon={faListCheck} />
      </IconWrapper>
    ),
    title: "Trusted",
    explanation: "Trusted Service Centersare certified for high quality",
  },
  {
    icon: (
      <IconWrapper>
        <FontAwesomeIcon color="#fff" icon={faPercent} />
      </IconWrapper>
    ),
    title: "Guarantees",
    explanation:
      "Covers parts and labor on qualifying repairs and services for 24 months/24,000 miles",
  },
];
