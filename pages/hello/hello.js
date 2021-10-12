import Link from "next/link";

export default function Hello() {
  return (
    <>
      <h1>Hello World !</h1>
      <Link href="/">
        <a>Lien vers index</a>
      </Link>
    </>
  );
}
