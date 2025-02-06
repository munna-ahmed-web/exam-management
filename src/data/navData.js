import { generateRandomID } from "../lib/utils";

export const navBarItemsList = [
  {
    id: generateRandomID(),
    label: "Home",
    href: "/",
    hasChild: false,
  },
  {
    id: generateRandomID(),
    label: "Admin",
    hasChild: true,
    children: [
      {
        id: generateRandomID(),
        label: "Users",
        href: "/users",
      },
      {
        id: generateRandomID(),
        label: "Create Examiner",
        href: "/createExaminer",
      },
    ],
  },
  {
    id: generateRandomID(),
    label: "Examiner",
    hasChild: true,
    children: [
      {
        id: generateRandomID(),
        label: "Question Papers",
        href: "/questionPapers",
      },
      {
        id: generateRandomID(),
        label: "Create Question Paper",
        href: "/createQuestionPaper",
      },
      {
        id: generateRandomID(),
        label: "Question Paper By Candidate",
        href: "/questionPapersByCandidate/:id",
      },
    ],
  },
  {
    id: generateRandomID(),
    label: "Candidate",
    hasChild: true,
    children: [
      {
        id: generateRandomID(),
        label: "Start Exam",
        href: "/examStart",
      },
      {
        id: generateRandomID(),
        label: "Submit Exam",
        href: "/examSubmit",
      },
    ],
  },
  {
    id: generateRandomID(),
    label: "Contact Us",
    href: "/contact",
    hasChild: false,
  },
  {
    id: generateRandomID(),
    label: "Service",
    href: "/service",
    hasChild: false,
  },
];
