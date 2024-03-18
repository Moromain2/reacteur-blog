import './App.css'

// Data import
import data from "./data/blog_data.json";

// Components imports
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  const blog_data = data.blog_data;
  // console.log(blog_data);
  return (
    <>
      {blog_data.map((data) => {
        const primary_links = data.navlinks[0].primary_links
        console.log(primary_links);
        return (
          <div key={data.header.site_title}>
            <Header title={data.header.site_title} baseline={data.header.baseline}/>
            <Navigation main_links={primary_links}/>
          </div>
        )
      })}
    </>
  )
}

export default App
