export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function PageDetails({ data }) {
  console.log(data);
  return (
    <div>
      <h1>Ninja Details</h1>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Website: {data.website}</p>
      <p>
        City: {data.address.city}, {data.address.zipcode}
      </p>
    </div>
  );
}
