// Edit everything about the site here. No other file needs to change for text updates.
export const profile = {
  name: "Your Name",
  photo: "/photo.jpg", // put your headshot in /public/photo.jpg
  program: "Electrical and Electronics Engineering (Co-op), University of Ottawa",
  headline: "First-year EE co-op at uOttawa working on RF receiver testing and beamforming",
  sub: "I use signal generators and spectrum analyzers on uOttawa Rocketry's beamforming team. Looking for hardware and RF co-op opportunities.",
  email: "your.email@example.com",
  emailSubject: "RF",
};

export const about = [
  "I joined the beamforming team at uOttawa Rocketry in my first semester of electrical engineering. Since then, I’ve been working with signal generators and spectrum analyzers to test RF receivers.",
  "I want to understand how a signal becomes hardware people can trust. In receiver testing, I’ve learned that settings like frequency span, resolution bandwidth, and sweep time change what you can actually see, so a good measurement is a deliberate one.",
  "Before engineering, I refereed competitive soccer for Lakeshore Soccer Club, where I made fast decisions and explained them calmly to people who disagreed. I also worked retail at Pharmaprix, where accuracy and patience came with the job.",
  "I work with discipline, take feedback well, and follow through. I’m now building skills in PCB design and electronics prototyping.",
];

export const experience = [
  { when: "2026 to present", role: "Beamforming Team Member, uOttawa Rocketry", points: [
    "Run receiver-testing activities using signal generation and spectrum-analyzer measurements.",
    "Learned how frequency span, resolution bandwidth, and sweep time affect measurement clarity, and applied that when reviewing results with teammates.",
    "Contribute to a team learning beamforming fundamentals and hardware evaluation from scratch." ] },
  { when: "2024 to 2025", role: "Soccer Referee, Lakeshore Soccer Club", points: [
    "Officiated competitive matches, making real-time calls under pressure from players and coaches.",
    "Explained decisions clearly and stayed composed when challenged, the same skill that makes design reviews and test debriefs go well." ] },
  { when: "Retail", role: "Cashier, Pharmaprix", points: [
    "Handled customer transactions accurately in a fast-paced, customer-facing setting." ] },
];

export const featured = [
  { title: "Download my resume", text: "One page: Rocketry first, then skills and test equipment.", href: "/resume.pdf" },
  { title: "What I learned testing RF receivers", text: "Span, resolution bandwidth, and sweep time in plain language.", href: "#" },
  { title: "See my electronics projects", text: "Circuits, PCBs, and measurement write-ups as I finish them.", href: "#" },
];
