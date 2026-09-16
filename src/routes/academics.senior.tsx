import { createFileRoute } from "@tanstack/react-router";
import AcademicPage, { type AcademicPageConfig } from "@/components/site/AcademicPage";
import { SITE_URL } from "@/lib/school";
const image = "/__l5e/assets-v1/d0b2228d-b5eb-4e79-b910-f7997722d1ba/hero-6.jpeg";
const gallery1 = "/__l5e/assets-v1/21638de2-046e-4185-b107-d55ea7205a5d/senior-1.jpg";
const gallery2 = "/__l5e/assets-v1/f05f8cdd-e944-417b-be18-1f97067c2816/senior-2.jpg";
const gallery3 = "/__l5e/assets-v1/96f2a5d1-f48e-455b-b327-7cdf6f23480f/senior-3.jpg";

const title = "Senior School (Grades 10–12) — STEM & Social Sciences | Embakasi Benedicta Academy";
const description =
  "Senior School at Embakasi Benedicta Academy, Utawala: Grades 10–12 with two pathways — STEM and Social Sciences — where learners specialise according to their interests and aspirations.";

export const Route = createFileRoute("/academics/senior")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics/senior` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics/senior` }],
  }),
  component: () => <AcademicPage config={config} />,
});

const config: AcademicPageConfig = {
  name: "Senior School",
  image,
  gallery: [
    { src: gallery1, alt: "Senior School students solving mathematics on a whiteboard" },
    { src: gallery2, alt: "Senior School students conducting a physics experiment" },
    { src: gallery3, alt: "Senior School students revising in the study hall" },
  ],
  intro:
    "Grades 10 to 12 — learners begin specialising according to their interests, abilities and future aspirations.",
  grades: "Grades 10 to 12",
  curriculum: "Competency-based education",
  description: [
    "At Senior School, learners begin specialising according to their interests, abilities and future aspirations, supported by teachers who know them well.",
    "Embakasi Benedicta Academy currently offers two pathways: STEM and Social Sciences.",
  ],
  pathways: [
    {
      name: "STEM",
      description:
        "For learners drawn to science, technology, mathematics and technical problem-solving.",
    },
    {
      name: "Social Sciences",
      description:
        "For learners drawn to languages, humanities, business and people-centred careers.",
    },
  ],
  learningAreas: [],
  learningApproach: [
    "Specialised teaching within the learner's chosen pathway",
    "Research, projects and presentations",
    "Practical and laboratory work in the STEM pathway",
    "Discussion, analysis and case study work in Social Sciences",
    "Career guidance and preparation for further study",
  ],
  support: [
    "Guidance on pathway and subject choices",
    "Career and further-study counselling",
    "Subject support and structured revision",
    "Regular progress feedback to parents and learners",
  ],
  facilities: [
    "Science laboratory",
    "ICT laboratory",
    "Library",
    "Creative arts facilities",
    "Sports facilities",
    "Boarding facilities",
  ],
  coCurricular: [
    "Sports",
    "Debate and public speaking",
    "STEM club",
    "Leadership and mentorship",
    "Community service",
  ],
  faqs: [
    {
      question: "Which pathways does the Academy offer?",
      answer:
        "Embakasi Benedicta Academy currently offers two Senior School pathways: STEM and Social Sciences.",
    },
    {
      question: "How is a pathway chosen?",
      answer:
        "Pathway selection begins in Grade 9 and is guided by the learner's performance, interests and aspirations, in consultation with parents and teachers.",
    },
    {
      question: "Can a learner join Senior School from another school?",
      answer:
        "Yes. Transfers are welcome subject to available places and a placement discussion with the admissions team.",
    },
    {
      question: "Is boarding available?",
      answer:
        "Boarding facilities support Senior School learners. Availability and requirements are confirmed by the Academy office.",
    },
  ],
};
