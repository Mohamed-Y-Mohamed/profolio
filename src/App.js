import About from './components/about';
import Timeline from './components/experience';
import Skills from './components/skills';
import Education from './components/education';
function App() {
  return (
    <>

      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">

        <Education />
      </div>
      <div id="experience">
        <Timeline />
      </div>


    </>
  );
}

export default App;
