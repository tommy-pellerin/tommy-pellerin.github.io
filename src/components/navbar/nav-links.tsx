// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Introduction', href: '#introduction' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Trainings', href: '#trainings' },
  { name: 'Contact', href: '#contact' },
];

export default function NavLinks() {

  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className='m-2 hover:text-secondary text-background'
          >
            <p>{link.name}</p>
          </a>
        );
      })}
    </>
  );
}