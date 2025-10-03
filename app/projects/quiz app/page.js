// app/projects/quiz-app/page.js
import Link from "next/link";

export default function QuizCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <Link href="/#projects" className="text-green-600">← Back</Link>
      <h1 className="text-3xl font-bold mt-4">Web-Based Quiz Application</h1>
      <p className="text-gray-700 mt-4">Role: UI & Front-end — Built a responsive quiz app with timer and scoring to improve user engagement.</p>

      <section className="mt-8">
        <h2 className="font-semibold text-xl">Problem</h2>
        <p className="text-gray-600 mt-2">Students needed a lightweight tool to test knowledge quickly and see instant feedback.</p>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold text-xl">Process</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Wireframed screens and user flow.</li>
          <li>Designed UI in Figma with mobile-first approach.</li>
          <li>Built front-end using HTML/CSS/JS — implemented timer, scoring, and responsive layout.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold text-xl">Outcome & Learnings</h2>
        <p className="text-gray-600">Implemented an accessible and responsive interface. Learned to prioritize clarity for quick tasks and edge case handling for timeouts and resets.</p>
      </section>
    </main>
  );
}
