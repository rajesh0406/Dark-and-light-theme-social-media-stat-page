
import React,{useState} from 'react'
import down from './images/icon-down.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import up from './images/icon-up.svg';
import youtube from './images/icon-youtube.svg';
import './App.css'

function App() {
  const [theme,setTheme]=useState('dark')

  return (
    <div className={`App transition duration-500 ease-in-out bg-${theme}-backgroundcolor text-white h-screen w-screen px-4 py-4 md:px-44 md:py-0  overflow-x-hidden`}>
      <header className="w-full py-4 flex flex-col md:flex-row justify-between items-center">
        <div className={`flex flex-col border-${theme}-text1 border-b md:border-b-0 py-4`}>
          <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-semibold`}>Social Media Dashboard</h1>
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold py-1`}>Total Followers: 23,004</p>
        </div>
        <div className={`flex w-full md:w-44  px-4 py-6 md:py-0 md:px-2 text-${theme}-text1 hover:text-${theme}-text2 flex-row justify-between items-center`}>
        <p className={`font-Inter   text-md tracking-wider font-semibold`}>Dark Mode</p>
        <label class="switch">
        <input type="checkbox" onClick={()=>{(theme==='dark')?setTheme('light'):setTheme('dark')}}/>
        <span class="slider round"></span>
        </label>
        </div>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4">
        <div className={`flex flex-col space-y-6 justify-between items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard  rounded-md overflow-hidden border-t-4 py-6 border-facebook `}>
          <div className="flex flex-row items-center justify-between">
          <img src={facebook} alt="Facebook icon"/>
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold px-2`}>@nathanf</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <h1 className={`font-Inter text-6xl text-${theme}-text2 tracking-wide  font-bold`}>1987</h1>
            <p className={`font-Inter text-ms text-${theme}-text1 tracking-widest  font-thin uppercase py-2`}>followers</p>
          </div>
          <div className="flex flex-row items-center justify-between text-limegreen">
            <img src={up} alt="Up arrow"/>
            <p className="font-Inter text-sm font-semibold px-2">12 Today</p>

          </div>

        </div>
        <div className={`flex flex-col space-y-6 justify-between items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden border-t-4 py-6 border-twitter`}>
        <div className="flex flex-row items-center justify-between">
          <img src={twitter} alt="Twitter icon"/>
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold px-2`}>@nathanf</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <h1 className={`font-Inter text-6xl text-${theme}-text2 tracking-wide  font-bold`}>1044</h1>
            <p className={`font-Inter text-ms text-${theme}-text1 tracking-widest  font-thin uppercase py-2`}>followers</p>
          </div>
          <div className="flex flex-row items-center justify-between text-limegreen">
            <img src={up} alt="Up arrow"/>
            <p className="font-Inter text-sm font-semibold px-2">99 Today</p>

          </div>

        </div>
        <div className={`flex flex-col space-y-6 justify-between items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden border-t-4 py-6 instagram-border`}>
        <div className="flex flex-row items-center justify-between">
          <img src={instagram} alt="Facebook icon"/>
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold px-2`}>@realnathanf</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <h1 className={`font-Inter text-6xl text-${theme}-text2 tracking-wide  font-bold`}>11k</h1>
            <p className={`font-Inter text-ms text-${theme}-text1 tracking-widest  font-thin uppercase py-2`}>followers</p>
          </div>
          <div className="flex flex-row items-center justify-between text-limegreen">
            <img src={up} alt="Up arrow"/>
            <p className="font-Inter text-sm font-semibold px-2">1099 Today</p>
          </div>
        </div>
        <div className={`flex flex-col space-y-6 justify-between items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden border-t-4 py-6 border-youtube`}>
        <div className="flex flex-row items-center justify-between">
          <img src={facebook} alt="Facebook icon"/>
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold px-2`}>@nathanf</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <h1 className={`font-Inter text-6xl text-${theme}-text2 tracking-wide  font-bold`}>8239</h1>
            <p className={`font-Inter text-ms text-${theme}-text1 tracking-widest  font-thin uppercase py-2`}>followers</p>
          </div>
          <div className="flex flex-row items-center justify-between text-brightred">
            <img src={down} alt="Down arrow"/>
            <p className="font-Inter text-sm font-semibold px-2">144 Today</p>
          </div>
        </div>
      </section>
      <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-semibold py-8`}>Overview - Today</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 pb-10">
      <div className={`flex flex-col space-y-6 justify-center items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden p-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold py-1`}>Page Views</p>
          <img src={facebook} alt="facebook icon"/>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-bold py-1`}>87</h1>
          <div className="flex flex-row items-center justify-center text-limegreen">
            <img src={up} alt="Up icon"/>
            <p className={`font-Inter  text-sm tracking-wider font-semibold pl-1`}>3%</p>
          </div>
        </div>

      </div>
      <div className={`flex flex-col space-y-6 justify-center items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden p-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold py-1`}>Likes</p>
          <img src={facebook} alt="facebook icon"/>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-bold py-1`}>52</h1>
          <div className="flex flex-row items-center justify-center text-brightred">
            <img src={down} alt="Down icon"/>
            <p className={`font-Inter  text-sm tracking-wider font-semibold pl-1`}>2%</p>
          </div>
        </div>

      </div>
      <div className={`flex flex-col space-y-6 justify-center items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden p-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold py-1`}>Likes</p>
          <img src={instagram} alt="Instagram icon"/>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-bold py-1`}>5462</h1>
          <div className="flex flex-row items-center justify-center text-limegreen">
            <img src={up} alt="Up icon"/>
            <p className={`font-Inter  text-sm tracking-wider font-semibold p-1`}>2257%</p>
          </div>
        </div>

      </div>
      <div className={`flex flex-col space-y-6 justify-center items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden p-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold py-1`}>Page Views</p>
          <img src={instagram} alt="Instagram icon"/>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-bold py-1`}>52k</h1>
          <div className="flex flex-row items-center justify-center text-limegreen">
            <img src={up} alt="Up icon"/>
            <p className={`font-Inter  text-sm tracking-wider font-semibold p-1`}>1375%</p>
          </div>
        </div>

      </div>
      <div className={`flex flex-col space-y-6 justify-center items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden p-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold py-1`}>Retweets</p>
          <img src={twitter} alt="Twitter icon"/>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-bold py-1`}>117</h1>
          <div className="flex flex-row items-center justify-center text-limegreen">
            <img src={up} alt="Up icon"/>
            <p className={`font-Inter  text-sm tracking-wider font-semibold p-1`}>303%</p>
          </div>
        </div>

      </div>
      <div className={`flex flex-col space-y-6 justify-center items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden p-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold py-1`}>Likes</p>
          <img src={twitter} alt="Twitter icon"/>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-bold py-1`}>507</h1>
          <div className="flex flex-row items-center justify-center text-limegreen">
            <img src={up} alt="Up icon"/>
            <p className={`font-Inter  text-sm tracking-wider font-semibold p-1`}>553%</p>
          </div>
        </div>

      </div>
      <div className={`flex flex-col space-y-6 justify-center items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden p-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold py-1`}>Likes</p>
          <img src={youtube} alt="youtbe icon"/>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-bold py-1`}>107</h1>
          <div className="flex flex-row items-center justify-center text-brightred">
            <img src={down} alt="Up icon"/>
            <p className={`font-Inter  text-sm tracking-wider font-semibold p-1`}>19%</p>
          </div>
        </div>

      </div>
      <div className={`flex flex-col space-y-6 justify-center items-center max-w-sm bg-${theme}-cardbg hover:bg-${theme}-hovercard rounded-md overflow-hidden p-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <p className={`font-Inter text-${theme}-text1 text-sm tracking-wider font-semibold py-1`}>Total Views</p>
          <img src={youtube} alt="Youtube icon"/>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`font-Inter text-${theme}-text2 text-2xl tracking-wider font-bold py-1`}>1407</h1>
          <div className="flex flex-row items-center justify-center text-brightred">
            <img src={down} alt="down icon"/>
            <p className={`font-Inter  text-sm tracking-wider font-semibold p-1`}>12%</p>
          </div>
        </div>

      </div>

      </section>
    </div>
  );
}
 
export default App;
