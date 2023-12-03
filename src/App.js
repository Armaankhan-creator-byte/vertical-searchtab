import './App.css';
import{useState} from "react";
function App() 
{
const [show, setShow] = useState(1);
const[dis,setDis]=useState("Home");
const attach=(index)=>{   
setShow(index);
 } 
const shwn=(b)=>{
  setDis(b);

}   
const happy=(a,b)=>{
attach(a);
shwn(b);
} 
return (
  <>
  <div className='wrapper'>
    <div className='container'>
      <div className='space'>
        <h1>
          CSS Vertical Tabs
        </h1>
        <div className="parent">
          <div className='vertical-tabs'>
            <ul>
              <li  id="one" className={(show === 1?'special':'normal') } onClick={()=>{happy(1,'Home')}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="24" height="24" x="6" y="10"/>b</svg><a  className={show===1?"nj":" "} href="javascript:void(0)" >Home</a></li>
              <li  className={(show === 2?'special':'normal')} id="two" onClick={()=>{happy(2,'Blog')}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-audio-lines"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg><a  className={show===2?"nj":" "} href="javascript:void(0)">Blog</a></li>
              <li id="three"  className={(show === 3?'special':'normal')} onClick={()=>{happy(3,'Help')}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><a  className={show===3?"nj":" "} href="javascript:void(0)">Help</a></li>
              <li id="four"  className={(show === 4?'special':'normal')} onClick={()=>{happy(4,'Code')}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg><a   className={show===4?"nj":" "} href="javascript:void(0)">Code</a></li>
              <li id="five"  className={(show === 5?'special':'normal')} onClick={()=>{happy(5,'About')}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg><a   className={show===5?"nj":" "}href="javascript:void(0)">About</a></li>

            </ul>
          </div>
          <div className="content">
            <div className={`Home ${dis==="Home"? "show":"hide"}`}>
              <h2>Home Content</h2>
              <p >
              Lorem Ipsum is simply dummy text of the printing and   Lorem Ipsum has been the typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
              </p>
            </div>
             <div className={`Blog ${dis==="Blog"?"show":"hide"}`}>
              <h2>Blog Content</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
              </p>
            </div>
             <div className={`Help ${dis==="Help"?"show":"hide"}`}>
              <h2>Help Content</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. of the printing Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
              </p>
            </div>
            <div className={`Code ${dis==="Code"?"show":"hide"}`}>
              <h2>Code Content</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
              </p>
            </div>
            <div className={`About ${dis==="About"?"show":"hide"}`}>
              <h2> About content</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.of the printing and  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
             </p>
            </div>     
          
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
          }

export default App;
