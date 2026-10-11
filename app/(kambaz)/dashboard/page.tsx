import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/reactjs.jpg"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.jpg"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.jpg"
        />
        {/* TODO §2.4.2 */}
        <CourseCard
          id="4567"
          title="CS4567 Next.js"
          subtitle="Full stack React framework"
          image="/images/nextjs.jpg"
        />
        <CourseCard
          id="5678"
          title="CS5678 TypeScript"
          subtitle="Typed JavaScript at scale"
          image="/images/typescript.jpg"
        />
        <CourseCard
          id="6789"
          title="CS6789 HTML"
          subtitle="Structuring web content"
          image="/images/html.jpg"
        />
        <CourseCard
          id="7890"
          title="CS7890 CSS"
          subtitle="Styling web pages"
          image="/images/css.jpg"
        />
        {/* With AI §2.4.2 */}
        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample — not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}
