import NavBar from "./components/navbar/navBar";
import { Suspense } from 'react';
import Jumbotron from './components/jumbotron/jumbotron';
import Introduction from './components/introduction/introduction';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Experiences from './components/experiences/experience';
import Contact from './components/contact/contact';
import Trainings from './components/trainings/trainings';

function App() {
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="container mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Jumbotron />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="introduction" className='navbar-padding'>
            <Introduction />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="skills" className='navbar-padding'>
            <Skills />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="projects" className='navbar-padding'>
            <Projects />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="experiences" className='navbar-padding'>
            <Experiences />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="trainings" className='navbar-padding'>
            <Trainings />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="contact" className='navbar-padding'>
            <Contact />
          </section>
        </Suspense>
      </main>
      <footer className="text-center bg-foreground text-background py-2">
        <p>Make with 💖 and 💪 by TOMMY PELLERIN</p>
        <p>@2024 all right reserved</p>
      </footer>
    </>
  )
}

export default App
