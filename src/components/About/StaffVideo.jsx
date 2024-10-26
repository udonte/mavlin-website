const StaffVideo = () => {
  return (
    <div className="py-16 w-full">
      <div className="max-w-2xl mx-auto mb-8 w-full text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-mavlin-blue mb-4">
          A Typical Day at the Office
        </h2>
        <p className="text-mavlin-blue text-sm md:text-base">
          Experience a glimpse into our daily environment. From collaborative
          projects to creative vibes, our office buzzes with energy and
          teamwork.
        </p>
      </div>
      <div className="w-full max-w-3xl mx-auto shadow-lg border-4 border-mavlin-gold h-[400px] md:h-[500px]">
        <iframe
          src="https://www.youtube.com/embed/-GyfmuFcSdM"
          title="A Typical Day at the Office"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      <div className="mt-16 px-8 md:px-24 py-16 bg-mavlin-blue text-white flex flex-col md:flex-row items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto mb-8">
            Discover how our expertise can elevate your business. Let’s bring
            your vision to life together! Reach out today to discuss the
            solutions that best fit your needs.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-block hover:bg-mavlin-gold hover:text-white text-mavlin-gold font-semibold py-3 border border-mavlin-gold px-8 shadow-lg transition-transform transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default StaffVideo;
