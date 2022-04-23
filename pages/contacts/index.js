import Heading from "../../components/Heading"
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { contacts: data },
    }
  };

const Contacts = ({contacts}) => {

    // const [contacts, setContacts] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //     const data = await res.json();
    //     setContacts(data);
    //     }
    //     fetchData();
    // }, []);

    return (
    <>
        <Head>
            <title>Contacts</title>
        </Head>
        <Heading text="Contacts list:" />
        <ul>
            {contacts && contacts.map(({id, name, email}) => (
                <li key={id}>
                    <Link href={`contacts/${id}`}>{name}</Link>
                </li>
            ))}
        </ul>
    </>
    )
}

export default Contacts;