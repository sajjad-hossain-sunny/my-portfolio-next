import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

export const Sidebar_contents = {
  name: "sajjad hossain sunny",
  description: "sajjad hossain sunny portfolio",
  avatar: "/images/avatar-ai.jpg",
  navItems: [
    {
      id: "01",
      navBtn: "home",
      navRoute: "/"
    },
    {
      id: "02",
      navBtn: "my skills",
      navRoute: "/skills"
    },
    {
      id: "03",
      navBtn: "Resume",
      navRoute: "/resume"
    },
    {
      id: "04",
      navBtn: "projects",
      navRoute: "/projects"
    },
    {
      id: "05",
      navBtn: "Contact Me",
      navRoute: "/contact-me"
    }
  ],
  socialLinks: [
    {
      id: "01",
      socialName: "facebook",
      socialUrl: "#",
      socialIcon: <FaFacebookF />,
      bgColor: "#1877F2"
    },
    {
      id: "02",
      socialName: "github",
      socialUrl: "#",
      socialIcon: <FaGithub />,
      bgColor: "#24292e"
    },
    {
      id: "03",
      socialName: "linkedin",
      socialUrl: "#",
      socialIcon: <FaLinkedinIn />,
      bgColor: "#0073AF"
    },
    {
      id: "04",
      socialName: "instagram",
      socialUrl: "#",
      socialIcon: <FaInstagram />,
      bgColor: "#E15546"
    },
    {
      id: "05",
      socialName: "whatsapp",
      socialUrl: "#",
      socialIcon: <FaWhatsapp />,
      bgColor: "#25D366"
    }
  ]
}
