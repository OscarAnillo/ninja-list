import Link from "next/link";

export default function Page404() {
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the <Link href="/">Home page</Link>
      </p>
    </div>
  );
}
