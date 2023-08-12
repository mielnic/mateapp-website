import { documents, star, send, crm, club } from "../assets";

export const navLinks = [
    {
      id: "home",
      title: "navbar.home",
    },
    {
      id: "timesheet",
      title: "navbar.timesheet",
    },
    {
      id: "directory",
      title: "navbar.directory",
    },
    {
      id: "future",
      title: "navbar.future",
    },
    {
        id: "services",
        title: "navbar.services",
    },
  ];

  export const wins = [
    {
      id: "stats-2",
      title: "wins.pragmatic",
    },
    {
      id: "stats-3",
      title: "wins.efficient",
    },
    {
      id: "stats-1",
      title: "wins.simple",
    },
  ];

  export const features = [
    {
      id: "feature-1",
      icon: documents,
      title: "features.lean",
      content: "features.lean_text",
    },
    {
      id: "feature-2",
      icon: send,
      title: "features.streamlined",
      content: "features.streamlined_text",
    },
    {
      id: "feature-3",
      icon: star,
      title: "features.minimalist",
      content: "features.minimalist_text",
    },
  ];

  export const future = [
    {
      id: "future-1",
      content: "future.crm_content",
      name: "future.crm_name",
      title: "future.crm_title",
      img: crm,
    },
    {
      id: "future-2",
      content: "future.club_content",
      name: "future.club_name",
      title: "future.club_title",
      img: club,
    },
  ];
  