import type { Experience } from "../content/types";

// Newest first.
export const experience: Experience[] = [
  {
    company: "Swimming organization (freelance)",
    role: "Freelance Laravel Developer (Part-time)",
    start: "2025-09",
    end: "2026-07",
    highlights: [
      "Built a multi-role swimming competition management system (registration, scoring, reporting) as sole developer, from requirements gathering to deployment on Linux with aaPanel.",
      "Designed a normalized database for competitions, sessions, events, heats, lanes, and athlete registration, with paid registration fees per event.",
      "Implemented medal tally with raw SQL (CASE WHEN aggregation, Olympic-standard ranking), PDF reports with DomPDF, and bulk athlete import with Laravel-Excel.",
      "Built a drawer-based heat and lane result entry for live competition, AJAX CRUD with Bootstrap modals, and role-based access (Spatie Permission) for 4 user roles.",
    ],
  },
  {
    company: "PT Menara Agung",
    role: "Web Developer (Laravel)",
    start: "2025-05",
    end: "2026-07",
    highlights: [
      "Developed and maintained RESTful API services on Laravel Lumen 8 as both API provider and consumer across internal services, and maintained the token-based authentication system in production.",
      "Delivered features and maintenance for an internal Portal System on a Laravel 5 legacy codebase.",
      "Integrated a third-party leasing company API into the portal from the provided documentation, and built a CRM and leads management module (pipeline, modal CRUD, file upload) on PostgreSQL.",
      "Resolved a Carbon/PHP 8.2 incompatibility in a Lumen 8 production environment, and debugged and optimized API and portal performance.",
    ],
  },
  {
    company: "Argenesia (PT. ARG Solusi Teknologi)",
    role: "Backend Developer Project Partner",
    start: "2023-02",
    end: "2024-11",
    highlights: [
      "Took part in client meetings to define system architecture, database design, and API specifications.",
      "Designed MySQL schemas (relationships, foreign keys, pivot tables) supporting hospital operational workflows.",
      "Built RESTful APIs with Laravel for frontend integration, with validation and error handling, plus authentication and role-based access control with Spatie Permission.",
      "Wrote migrations, seeders, and factories, and documented and tested API endpoints with Postman Collection.",
    ],
  },
  {
    company: "Argenesia (PT. ARG Solusi Teknologi)",
    role: "Backend Developer Intern",
    start: "2022-03",
    end: "2022-09",
    highlights: [
      "Developed RESTful APIs with Laravel 9 and designed relational database schemas from business requirements.",
      "Tested APIs with Postman and wrote unit tests.",
      "Contributed to maintenance and enhancement of existing production applications.",
    ],
  },
];
