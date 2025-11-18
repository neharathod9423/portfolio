import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.instagram,
    url: Strings.instagramLink,
    icon: faInstagram,
    text: Strings.instagramUsername,
  },
  {
    name: Strings.linkedIn,
    url: Strings.linkedInLink,
    icon: faLinkedin,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.whatsapp,
    url: Strings.whatsappLink,
    icon: faWhatsapp,
    text: Strings.whatsappNumber,
  },
];

export default socialLinks;
