
export default function Nav() {
  return (
    <nav className="bg-white text-black p-4 flex flex-row justify-between">
      <div>
        <a href="/">
          <h1 className="hover:text-secondary-blue text-xl font-semibold text-primary-blue">Stickles Electric</h1>
        </a>
      </div>
      <ul className="flex flex-row gap-4">
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/areas-we-serve">Areas We Serve</a>
        </li>
        <li>
          <a href="/reviews">Reviews</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}