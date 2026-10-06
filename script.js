const projects = {
  encon: {
    kicker: "Professional internship · Encon Pharma",
    title: "Cold-Chain Operations Portal",
    summary:
      "A complete serverless application for recording temperature readings, identifying excursions and triggering event-driven alerts.",
    cover: "assets/images/encon-care-logo.webp",
    coverAlt: "Encon Pharma logo",
    status: "Completed",
    period: "Aug–Sep 2026",
    focus: "Cloud · Full stack · IaC",
    story:
      "During a six-week IT internship, I progressed from individual development exercises to designing, building, testing and publicly deploying a complete cold-chain portal. I was mentored by the Head of Software Engineering and worked alongside regional and offshore developers in a professional Agile environment.",
    points: [
      "Built Node.js AWS Lambda functions and a REST API through API Gateway, with DynamoDB handling cold-chain reading data.",
      "Created an event-driven alert flow using SNS, SQS and Lambda, including retries, idempotency protection and a dead-letter queue.",
      "Rebuilt the backend with Terraform, including IAM, CloudWatch, remote state in S3, DynamoDB locking and a reusable module.",
      "Added Jest tests and an automated deployment gate that prevented Terraform deployment when tests failed.",
      "Built the frontend with Next.js, TypeScript, Tailwind CSS and TanStack Query, then deployed it through AWS Amplify.",
      "Presented the final system to the wider development team and gained exposure to Encon's real architecture, environments and development workflow."
    ],
    video: "assets/videos/encon-demo.mp4",
    gallery: [
      { src: "assets/images/encon-workspace.webp", alt: "Encon development workspace", caption: "The professional development environment during the internship." },
      { src: "assets/images/encon-sign.webp", alt: "Encon Pharma office sign", caption: "Encon Pharma — the setting for the six-week internship." }
    ],
    links: [
      { label: "View GitHub repository", href: "https://github.com/Umarhuss2234/Encon-Project" }
    ]
  },
  groot: {
    kicker: "Bradford Agentic AI Hackathon · Award winner",
    title: "Groot AI Interview Platform",
    summary:
      "A tailored, real-time mock interview experience built in one hackathon — and winner of the Best Use of ElevenLabs award.",
    cover: "assets/images/groot-event-poster.webp",
    coverAlt: "Bradford Agentic AI Hackathon event poster",
    status: "Completed · Award winner",
    period: "3 October 2026",
    focus: "Agentic AI · Voice · Product",
    story:
      "At the Bradford Agentic AI Hackathon at the University of Bradford, our team built Groot: an AI mock interview platform that turns a CV and job description into a tailored voice interview. I helped develop, test and present the idea before pitching it to around 120 attendees and four judges.",
    points: [
      "Used the candidate's CV, job description and interview context to create a tailored mock interview.",
      "Integrated an ElevenLabs voice agent capable of asking real-time questions, follow-ups and challenges based on supplied information.",
      "Designed the flow from interview setup and preparation through the live interview and post-interview feedback.",
      "Provided scoring, answer feedback, areas for improvement and progress tracking across interview rounds.",
      "Tested whether the agent referred back to the candidate data and questioned exaggerated or inconsistent claims.",
      "Pitched the final product to the room; the project won Best Use of ElevenLabs."
    ],
    video: "assets/videos/groot-demo.mp4",
    gallery: [
      { src: "assets/images/groot-planning.webp", alt: "The Groot team planning the product", caption: "Planning the product flow and interview experience." },
      { src: "assets/images/groot-building.webp", alt: "The Groot team developing the application", caption: "Building the application during the hackathon." },
      { src: "assets/images/groot-testing.webp", alt: "Testing the Groot application", caption: "Testing the interview workflow and AI response behaviour." },
      { src: "assets/images/groot-event.webp", alt: "Bradford Agentic AI Hackathon attendees", caption: "The Bradford Agentic AI Hackathon at the University of Bradford." },
      { src: "assets/images/groot-event-poster.webp", alt: "Bradford Agentic AI Hackathon event poster", caption: "The Agentic Era — 3 October 2026." }
    ],
    links: [
      { label: "View GitHub repository", href: "https://github.com/Umarhuss2234/Hackerthon_Projects" }
    ]
  },
  webhub: {
    kicker: "BTEC Unit 6 · Where the journey began",
    title: "WebHub — My First Website",
    summary:
      "My first coding experience: a multi-page website planned, documented and hand-coded for a college web-development unit.",
    cover: "assets/images/webhub-homepage.webp",
    coverAlt: "The WebHub website homepage",
    status: "Completed",
    period: "College project",
    focus: "HTML · CSS · JavaScript · PHP",
    story:
      "WebHub was the first website I ever designed and developed, completed for Unit 6: Website Development during my BTEC Level 3 National Extended Diploma in Information Technology. Learning through W3Schools and video tutorials, I turned a blank folder into a working multi-page website — and discovered that I wanted to pursue technology as a career.",
    points: [
      "Planned and documented the website before writing the implementation by hand.",
      "Created pages for courses, available jobs, contact information and online applications.",
      "Built the visual interface and navigation using HTML and CSS.",
      "Added interactive behaviour and form validation with JavaScript.",
      "Used PHP for the form-handling element of the original project.",
      "Deployed the finished static website through GitHub Pages."
    ],
    video: null,
    visualLink: {
      src: "assets/images/webhub-homepage.webp",
      alt: "WebHub homepage",
      href: "https://umarhuss2234.github.io/Collage-Project/",
      label: "Visit the live WebHub website"
    },
    gallery: [],
    links: [
      { label: "Open live website", href: "https://umarhuss2234.github.io/Collage-Project/" },
      { label: "View GitHub repository", href: "https://github.com/Umarhuss2234/Collage-Project" }
    ]
  },
  malware: {
    kicker: "Cybersecurity lab · In progress",
    title: "Malware Traffic Analysis Lab",
    summary:
      "A planned home lab for examining suspicious packet-capture data and documenting network-based indicators of compromise.",
    cover: "assets/images/malware-analysis-cover.webp",
    coverAlt: "Illustrated network traffic analysis dashboard",
    status: "In progress",
    period: "Current project",
    focus: "Wireshark · PCAP · Reporting",
    story:
      "This project is currently in development and is intentionally presented as a project plan rather than completed work. I am preparing a controlled investigation using a pre-recorded packet capture on my personal Windows computer, with the goal of practising evidence-led traffic analysis without executing malware on a home system.",
    points: [
      "Open and inspect a safe, pre-recorded PCAP or PCAPNG file in Wireshark.",
      "Use protocol, IP and stream filters to isolate relevant DNS, HTTP and TCP traffic.",
      "Review endpoints, conversations, protocol hierarchy and suspicious communication patterns.",
      "Follow selected streams to understand the sequence and content of network communications.",
      "Record potential indicators of compromise such as IP addresses, domains, ports and URLs.",
      "Produce an incident timeline and concise report explaining the evidence and recommended response."
    ],
    video: null,
    gallery: [
      { src: "assets/images/malware-analysis-cover.webp", alt: "Conceptual network traffic analysis dashboard", caption: "Original concept artwork for the planned investigation. Real evidence screenshots will be added after completion." }
    ],
    links: []
  }
};

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const dialog = document.querySelector("[data-project-dialog]");
const closeDialogButton = document.querySelector("[data-dialog-close]");
const videoSection = document.querySelector("[data-dialog-video-section]");
const visualLinkSection = document.querySelector("[data-dialog-visual-link-section]");
const visualLink = document.querySelector("[data-dialog-visual-link]");
const visualLinkImage = document.querySelector("[data-dialog-visual-link-image]");
const visualLinkLabel = document.querySelector("[data-dialog-visual-link-label]");
const gallerySection = document.querySelector("[data-dialog-gallery-section]");
const projectVideo = document.querySelector("[data-dialog-video]");
let lastTrigger = null;

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const populateProjectDialog = (project) => {
  document.querySelector("[data-dialog-cover]").src = project.cover;
  document.querySelector("[data-dialog-cover]").alt = project.coverAlt;
  document.querySelector("[data-dialog-kicker]").textContent = project.kicker;
  document.querySelector("[data-dialog-title]").textContent = project.title;
  document.querySelector("[data-dialog-summary]").textContent = project.summary;
  document.querySelector("[data-dialog-status]").textContent = project.status;
  document.querySelector("[data-dialog-period]").textContent = project.period;
  document.querySelector("[data-dialog-focus]").textContent = project.focus;
  document.querySelector("[data-dialog-story]").textContent = project.story;

  const points = document.querySelector("[data-dialog-points]");
  points.replaceChildren(
    ...project.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    })
  );

  const links = document.querySelector("[data-dialog-links]");
  links.replaceChildren(
    ...project.links.map((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener";
      anchor.innerHTML = `<span>${link.label}</span><span aria-hidden="true">↗</span>`;
      return anchor;
    })
  );

  if (project.video) {
    projectVideo.src = project.video;
    projectVideo.removeAttribute("poster");
    projectVideo.load();
    videoSection.hidden = false;
  } else {
    projectVideo.removeAttribute("src");
    projectVideo.removeAttribute("poster");
    projectVideo.load();
    videoSection.hidden = true;
  }

  if (project.visualLink) {
    visualLink.href = project.visualLink.href;
    visualLinkImage.src = project.visualLink.src;
    visualLinkImage.alt = project.visualLink.alt;
    visualLinkLabel.textContent = project.visualLink.label;
    visualLinkSection.hidden = false;
  } else {
    visualLink.removeAttribute("href");
    visualLinkImage.removeAttribute("src");
    visualLinkImage.alt = "";
    visualLinkLabel.textContent = "";
    visualLinkSection.hidden = true;
  }

  const gallery = document.querySelector("[data-dialog-gallery]");
  gallery.replaceChildren(
    ...project.gallery.map((image) => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const caption = document.createElement("figcaption");
      img.src = image.src;
      img.alt = image.alt;
      img.loading = "lazy";
      caption.textContent = image.caption;
      figure.append(img, caption);
      return figure;
    })
  );
  gallerySection.hidden = project.gallery.length === 0;
};

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => {
    const project = projects[card.dataset.project];
    if (!project) return;
    lastTrigger = card;
    dialog.dataset.project = card.dataset.project;
    populateProjectDialog(project);
    document.body.classList.add("dialog-open");
    dialog.showModal();
  });
});

const closeProjectDialog = () => {
  projectVideo.pause();
  dialog.close();
};

closeDialogButton.addEventListener("click", closeProjectDialog);

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const isOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;
  if (isOutside) closeProjectDialog();
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  projectVideo.pause();
  projectVideo.removeAttribute("src");
  projectVideo.load();
  lastTrigger?.focus();
});

dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeProjectDialog();
});

const techRail = document.querySelector(".tech-rail");
const techBadges = [...document.querySelectorAll(".tech-badge")];
const techTitle = document.querySelector("[data-tech-title]");
const techDescription = document.querySelector("[data-tech-description]");
let selectedTech = null;

const showTechnology = (badge) => {
  if (!badge || !techTitle || !techDescription) return;
  techTitle.textContent = badge.dataset.tech;
  techDescription.textContent = badge.dataset.description;
};

const restoreTechnology = () => {
  if (selectedTech) {
    showTechnology(selectedTech);
    return;
  }
  techTitle.textContent = "Explore the toolkit";
  techDescription.textContent = "Hover, focus or select an icon to see how I have used it.";
};

techBadges.forEach((badge) => {
  badge.addEventListener("pointerenter", () => showTechnology(badge));
  badge.addEventListener("focus", () => showTechnology(badge));
  badge.addEventListener("pointerleave", restoreTechnology);
  badge.addEventListener("click", () => {
    techBadges.forEach((item) => item.classList.remove("is-active"));
    badge.classList.add("is-active");
    selectedTech = badge;
    showTechnology(badge);
  });
});

techRail?.addEventListener("focusout", () => {
  window.setTimeout(() => {
    if (!techRail.contains(document.activeElement)) restoreTechnology();
  }, 0);
});
