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
      socialUrl: "https://www.facebook.com/sajjadsunny.dev",
      socialIcon: <FaFacebookF />,
      bgColor: "bg-facebook group-hover:bg-facebook"
    },
    {
      id: "02",
      socialName: "github",
      socialUrl: "https://github.com/sajjadsunny-dev",
      socialIcon: <FaGithub />,
      bgColor: "bg-github group-hover:bg-github"
    },
    {
      id: "03",
      socialName: "linkedin",
      socialUrl: "https://linkedin.com/in/sajjad-hossain-sunny",
      socialIcon: <FaLinkedinIn />,
      bgColor: "bg-linkedin group-hover:bg-linkedin"
    },
    {
      id: "04",
      socialName: "instagram",
      socialUrl: "https://www.instagram.com/sajjadsunny.dev/",
      socialIcon: <FaInstagram />,
      bgColor: "bg-instagram group-hover:bg-instagram"
    },
    {
      id: "05",
      socialName: "whatsapp",
      socialUrl: "https://wa.me/qr/MJJI7ZQB6EWYF1",
      socialIcon: <FaWhatsapp />,
      bgColor: "bg-whatsapp group-hover:bg-whatsapp"
    }
  ]
}
