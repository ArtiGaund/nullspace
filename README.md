📘 Project: Nullspace – Real-Time Collaborative Learning Platform
Nullspace is a full-stack, real-time collaborative learning platform built with JavaScript. It allows learners to study together, share knowledge, and build projects collaboratively — all in one place.

The platform focuses on bringing people together for live coding sessions, whiteboard discussions, flashcard revision, and group projects. Think of it as a virtual co-learning space where productivity meets community.

🔑 Key Features
🧑‍💻 Real-Time Code Collaboration – Live coding with peers using a collaborative editor.

🧠 Flashcards & Notes – Create, share, and revise using interactive flashcards.

🗣️ Voice & Text Chat – Communicate instantly during learning sessions.

📁 Project Workspaces – Organize folders, files, and group contributions.

🧑‍🤝‍🧑 Team Study Rooms – Join or create study rooms with real-time sync.

✅ Authentication – Secure login with GitHub, Google, or email/password.

🧩 Modular Learning – Share and follow learning paths across tech stacks.

🛠️ Tech Stack (JavaScript)
Layer	Tech
Frontend	Next.js (JavaScript)
Backend	Express.js
Real-Time	Socket.IO
Database	MongoDB (Mongoose)
Auth	NextAuth.js
Styling	Tailwind CSS
Collaboration	Yjs (optional)
Deployment	Vercel + MongoDB Atlas

Will try to follow this project structure

nullspace/
├── app/                             # App Router entry point
│   ├── layout.js                    # Root layout (shared across pages)
│   ├── page.js                      # Landing page ("/")
│   ├── dashboard/                   # Authenticated user dashboard
│   │   └── page.js
│   ├── room/                        # Dynamic room routes
│   │   └── [roomId]/               
│   │       └── page.js              # Collaborative room page
│   ├── flashcards/                 
│   │   └── page.js                  # Flashcard creation/revision UI
│   ├── login/                       # Login page (NextAuth)
│   │   └── page.js
│   ├── register/                    # Signup page
│   │   └── page.js
│   └── api/                         # (Optional: local API routes or NextAuth callbacks)
│       └── auth/                   
│           └── [...nextauth]/route.js
│
├── components/                      # UI components
│   ├── Navbar.js
│   ├── Sidebar.js
│   ├── Editor.js
│   ├── ChatPanel.js
│   ├── FlashcardCard.js
│   └── RoomHeader.js
│
├── context/                         # React Context Providers
│   ├── AuthContext.js
│   └── SocketContext.js
│
├── hooks/                           # Custom React hooks
│   └── useSocket.js
│   └── useAuth.js
│
├── lib/                             # Utilities (e.g. auth, helpers)
│   └── auth.js
│   └── db.js
│
├── styles/
│   ├── globals.css                  # TailwindCSS base styles
│   └── editor.css                   # Styles for custom components
│
├── public/                          # Static assets (icons, logo, images)
│
├── server/                          # Express.js backend server
│   ├── controllers/                 # Business logic
│   ├── models/                      # Mongoose schemas
│   ├── routes/                      # Express API endpoints
│   ├── sockets/                     # Socket.IO events
│   ├── config/                      # DB config, environment
│   └── server.js                    # Express entry point
│
├── .env.local                       # Frontend environment variables (NEXT_PUBLIC_*)
├── .env                             # Backend environment variables
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
