
import './App.css';
import Card from './Card';


function App() {

  const services = [
    {
        title:"Web Development",
        subTitle: "This is the First Component",
        desc: "Web development tools helps the developer to test and debug the web sites. Now a days the web development tooll come with the web browsers as add-ons. All web browsers have built in tools for this purpose.",
        image: "https://www.brainstormindia.com/images/resources/web.jpg"
    
    },
    {
        title:"App Development",
        subTitle: "This is the Second Component",
        desc: "HTML and DOM viewer allows you to see the DOM as it was rendered. It also allows to make changes to HTML and DOM and see the changes reflected in the page after the change is made.",
        image:"https://th.bing.com/th/id/OIP.19zVzvXL6E3xaJumj2Q6-AHaE7?pid=ImgDet&rs=1"
    },

    {
      title:"App Development",
      subTitle: "This is the Third Component",
      desc: "ese tools allow the web developer to use HTML, CSS and JavaScript etc.. These are accessed by hovering over an item on a web page and selecting the “Inspect Elem",
      image:"https://www.brainstormindia.com/images/resources/web.jpg"
  },

  {
    title:"App Development",
    subTitle: "This is the Fourth Component",
    desc: " DOM viewer allows you to see the DOM as it was rendered. It also allows to make changes to HTML and DOM and see the changes reflected in the page after the change is made.",
    image:"https://th.bing.com/th/id/OIP.19zVzvXL6E3xaJumj2Q6-AHaE7?pid=ImgDet&rs=1"
},

    {
        title:"App Development",
        subTitle: "This is the Fifith Component",
        desc: "evelopment tooll come with the web browsers as add-ons. All web browsers have built in tools for this purpose.",
        image:"https://www.brainstormindia.com/images/resources/web.jpg"
    }

]

return(
    <div className="container">
{
    services.map((service,index)=>(
        <Card key={index} title={service.title} desc={service.desc} image={service.image} subTitle={service.subTitle} />
    ))
}
          </div>
)
}



export default App;


