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
        href: "/allQuestionPaperForExamineer",
      },
      {
        id: generateRandomID(),
        label: "Create Question Paper",
        href: "/createSingleQuestionPaper",
      },
      {
        id: generateRandomID(),
        label: "Question Paper for Examiner",
        href: "/allQuestionPapersOfExaminer",
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
        label: "All Question Papers",
        href: "/",
      },
       {
        id: generateRandomID(),
        label: "Start Exam",
        href: "/question/:id",
      },
      {
        id: generateRandomID(),
        label: "Submit Exam",
        href: "/examSubmit",
      }, 
      {
        id: generateRandomID(),
        label: "Create Candidate",
        href: "/createCandidate",
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
