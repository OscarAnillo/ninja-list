import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function Ninjas({ data }) {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1>All Ninjas</h1>
        {data.map((item) => (
          <div key={item.id}>
            <a className={styles.single}>
              <Link href={`/ninjas/${item.id}`}>{item.name}</Link>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
