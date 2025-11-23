const About = () => {
  return (
      <div className="about">
        <div className="ccontainer lg:min-h-[calc(100vh-75px)] py-10">
          <h1 className="about-title text-3xl md:text-5xl font-jetbrains mb-5 underline text-primary">
            About Us
          </h1>
          <div className="about-desc text-xl font-light lg:text-justify leading-relaxed">
            <p className="mb-2.5">
              Welcome to our online bookstore — a space built for readers,
              thinkers, and knowledge seekers. We believe that every book holds
              the power to inspire, transform, and open doors to new worlds.
              That belief is the foundation of everything we do
            </p>
            <p className="mb-2.5">
              Our store was created with one goal in mind: to make quality books
              accessible to everyone. Whether you’re searching for the latest
              bestsellers, timeless classics, academic references, or inspiring
              self-help titles, we curate our collection with care to ensure
              there is something meaningful for every reader.
            </p>
            <h3 className="font-medium text-2xl mb-2.5 text-primary">
              We are committed to providing
            </h3>
            <ul className="list-disc *:ml-10 mb-2.5">
              <li>A diverse and carefully selected catalog</li>
              <li>Fair and competitive prices</li>
              <li>A smooth, fast, and secure shopping experience</li>
              <li>Reliable delivery</li>
              <li>Authentic books from trusted sources</li>
              <li>Friendly, responsive customer support</li>
            </ul>
            <p className="mb-2.5">
              Whether you’re a student completing your studies, a researcher
              exploring new ideas, or a passionate book lover building your next
              reading list, we’re here to support your journey. Our mission is
              to become your go-to destination for books — a place where
              discovering your next great read feels effortless and enjoyable.
            </p>
            <p>
              <span className="text-primary font-bold">Thank you</span> for
              choosing us. Your reading journey starts here.
            </p>
          </div>
        </div>
      </div>
  );
};
export default About;
