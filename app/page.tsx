import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/404-section">404 Section</Link>
        </li>
        <li>
          <Link href="/badge">Badge</Link>
        </li>
        <li>
          <Link href="/button">Button</Link>
        </li>
        <li>
          <Link href="/blog-card">Blog Card</Link>
        </li>
        <li>
          <Link href="/profile-card">Profile Card</Link>
        </li>
        <li>
          <Link href="/testimonial-card">Testimonial Card</Link>
        </li>
      </ul>
    </main>
  );
}
