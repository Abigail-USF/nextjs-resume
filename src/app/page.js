
export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 bg-white text-gray-900 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Abigail Hollowell</h1>
        <p className="text-sm text-gray-600">
          abigailllinhollowell@usf.edu | Tampa, FL | LinkedIn/GitHub
        </p>
        <p className="mt-4 text-gray-700">
          I am a Business Analytics and Business Management student at the University of South Florida with a passion for data analysis and visualization. I have experience in SQL, Tableau, and customer service. I am eager to apply my skills to real-world business problems.
        </p>
      </header>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide mb-3">Education
        </h2>
        <p className="font-semibold">University of South Florida</p>
        <p className="text-gray-600">
          Bachelor of Science in Business Analytics and Business Management, Expected Graduation: December 2027
        </p>
      </section>
    
    <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide mb-3">
          Work Experience
          </h2> 
          <h3 className="font-semibold">Sales and Reservations Agent</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Maintain strong client relationships through keeping client sensitive information confidential, daily updates, confirmation calls, and the prompt resolution of client concerns.</li>
            <li>Utilize booking systems, RocketRez and Fareharbor, to complete guest reservation requests, reservation changes, and cancellations.</li>
          </ul>

      <div className="mt-6">
        <h3 className="font-semibold">Server</h3>
        <p className="text-gray-600">
          BJ's Restaurant & Brewhouse
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Provided excellent customer service in a fast-paced environment.</li>
          <li>Managed multiple tables and ensured a smooth dining experience for guests.</li>
        </ul>
      </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide mb-3">
          Skills
        </h2>
        
        <ul className="list-disc list-inside">
          <li>Tableau</li>
          <li>Customer Service</li>
          <li>Data Analysis</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Communication</li>
        </ul>
      </section>

<section className="border-t border-gray-200 pt-6 mt-6">
  <h2 className="text-xl font-semibold uppercase tracking-wide mb-3">
    Leadership & Activities
  </h2>

  <h3 className="font-semibold">Senior Class President</h3>
  <p className="text-gray-600">First Academy Leesburg</p>

  <ul className="list-disc list-inside mt-2">
    <li>Organized 30+ meetings with class officers and students.</li>
    <li>Raised over $5,000 through fundraising efforts.</li>
    <li>Delivered the commencement speech to over 500 attendees.</li>
  </ul>
  <h3 className="font-semibold mt-4">
    Phi Chi Theta Professional Business Fraternity
  </h3>

  <ul className="list-disc list-inside mt-2">
    <li>Participated in fundraising and volunteer events.</li>
  </ul>
</section>

<section className="border-t border-gray-200 pt-6 mt-6">
  <h2 className="text-xl font-semibold uppercase tracking-wide mb-3">
    Certifications
  </h2>
  <ul className="list-disc list-inside mt-2 text-gray-700">
    <li>AI-Powered Shopping Ads Certificate</li>
    <li>Generative AI for Business Analysts</li>
  </ul>
</section>
    <footer className="border-t border-gray-200 pt-6 mt-6 text-center text-gray-500">
      <p>&copy; 2026 Abigail Hollowell. All rights reserved.</p>
    </footer>
    </main>
  );
} 
