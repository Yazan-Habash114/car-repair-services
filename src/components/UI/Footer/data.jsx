import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const info = [
  {
    icon: <FontAwesomeIcon color="#fff" icon={faLocationDot} />,
    text: "2605 Caton Hill Road, Woodbridge, VA 22192",
  },
  {
    icon: <FontAwesomeIcon color="#fff" icon={faPhone} />,
    text: "1-800-1234567",
  },
  {
    icon: <FontAwesomeIcon color="#fff" icon={faEnvelope} />,
    text: "officeone@youremail.com",
  },
];
