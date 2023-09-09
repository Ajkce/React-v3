import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  Footer,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
} from "./sections";

const App = () => {
  return (
    <main className="relative dark:bg-slate-900 dark:text-white">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue dark:bg-slate-800">
        <CustomerReviews />
      </section>
      <section className="padding sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black dark:bg-slate-800 padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
