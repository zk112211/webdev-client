import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
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
      </div>
    </div>
  );
}
