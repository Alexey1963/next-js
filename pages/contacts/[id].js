// import Heading from "../../components/Heading";
import ContactInfo from "../../components/contactInfo";
import Head from "next/head";

export const getServerSideProps = async (context) => {
    const {id} = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { contact: data },
    }
  };

const Contact = ({contact}) => (
    <>
        <Head>
            <title>Contact</title>
        </Head>
        <ContactInfo contact={contact} />
    </>
)


export default Contact;