import './App.css'

// Data import
import data from "./data/blog_data.json";

// Components imports
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BlogPost from "./components/BlogPost";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const blog_data = data.blog_data;
  return (
    <>
      {blog_data.map((data) => {
        return (
          <div key={data.header.site_title}>
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
              <About title={data.about.title} body={data.about.body} />
            </main>
            <Footer student_name="Romain" student_url="https://github.com/Moromain2"/>
          </div>
        )
      })}
    </>
  )
}

export default App
