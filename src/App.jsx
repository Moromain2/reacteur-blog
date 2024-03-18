import './App.css'

// Data import
import data from "./data/blog_data.json";

// Components imports
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BlogPost from "./components/BlogPost";
import About from "./components/About";
import AsideLinks from "./components/AsideLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title={data.header.site_title} baseline={data.header.baseline}/>
      <Navigation
        primary_links={data.navlinks[0].primary_links}
        secondary_links={data.navlinks[1].secondary_links}
      />
      <main className="container">
        <div className="posts-container">
          {data.posts.map((post) => {
            return (
              <BlogPost
                key={post.title}
                title={post.title}
                subtitle={post.subtitle}
                body={post.body}
              />
            )
          })}
        </div>
        <aside>
          <About title={data.about.title} body={data.about.body} />
          <AsideLinks links_array={data.useful_links} />
        </aside>
      </main>
      <Footer
        tool_name={data.footer.tool.tool_name}
        tool_url={data.footer.tool.tool_url}
        school_name={data.footer.school.school_name}
        school_url={data.footer.school.school_url}
        student_url={data.footer.student.student_url}
        student_name={data.footer.student.student_name}
      />
    </>
  )
}

export default App
