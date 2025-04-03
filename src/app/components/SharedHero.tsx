interface SharedHeroProps {
  title: string;
  subtitle: string;
}

const SharedHero = ({ title, subtitle }: SharedHeroProps) => {
  return (
    <section
      className={`relative py-12 bg-blend-overlay bg-[url(/images/home.jpg),linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6))]`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div>
          <h1 className="text-3xl font-bold text-white mt-6 md:text-5xl pb-2">
            {title}
          </h1>
          <p className="text-xl text-white mb-8">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default SharedHero;
