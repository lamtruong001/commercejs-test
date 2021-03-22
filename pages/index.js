import Head from 'next/head';
import { motion } from "framer-motion";

import { commerce } from "../lib/commerce";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductGrid from "../components/ProductGrid";


export async function getStaticProps() {
  const { data } = await commerce.products.list();

  const products = data.filter(({ active }) => active);

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

function IndexPage({ products }) {
  return (
    <>
      <Head>
        <title>Poly</title>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.1/dist/alpine.min.js" defer></script>
        <link rel="icon" type="image/svg+xml" href="../favicon/favicon-mix.svg"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.typekit.net/ygm3cgz.css"></link>
      </Head>
      <div className="md:min-h-screen md:flex md:items-center">
        <div className="flex flex-col w-full md:flex-row space-y-3 md:space-y-0 md:space-x-10">
        <Header className="z-40"/>
          <div className="md:max-h-screen md:w-1/2 flex items-end justify-between md:sticky md:top-0">
            

            <motion.div
              className="md:py-12 hidden md:block md:sticky md:top-0 z-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.25,
                },
              }}
              exit={{ opacity: 0, y: -50 }}
            >
            
            <p className="text-xl w-10/12 pb-20">Sculpted with love, these low polygon animals are made to last. We went back 
              and forth for months deliberating on materials, size and price to deliver 
              centre piece for your living room.</p>

            </motion.div>
          </div>

          
          <motion.div
            className="md:min-h-screen pt-44 md:pt-16 pb-24 flex items-center md:w-1/2 md:z-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <ProductGrid products={products} className="h-112 pt-42 md:h-96 md:pt-auto xl:h-112 z-0" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
