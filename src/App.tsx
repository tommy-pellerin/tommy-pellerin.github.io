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
        <Suspense>
          <Jumbotron />
        </Suspense>
      </header>
      <main className="container mx-auto">
        <Suspense>
          <section id="introduction" className='navbar-padding'>
            <Introduction />
          </section>
        </Suspense>
        <Suspense>
          <section id="skills" className='navbar-padding'>
            <Skills />
          </section>
        </Suspense>
        <Suspense>
          <section id="projects" className='navbar-padding'>
            <Projects />
          </section>
        </Suspense>
        <Suspense>
          <section id="experiences" className='navbar-padding'>
            <Experiences />
          </section>
        </Suspense>
        <Suspense>
          <section id="trainings" className='navbar-padding'>
            <Trainings />
          </section>
        </Suspense>
        <Suspense>
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
