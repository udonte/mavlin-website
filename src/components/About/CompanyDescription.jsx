const CompanyDescription = () => {
  return (
    <div className="px-24 py-16">
      <div className="w-full border-x border-mavlin-gold px-24 mx-auto">
        <p className="text-mavlin-gold mb-8">OVERVIEW</p>
        <div className=" text-2xl text-mavlin-blue font-arimo">
          Mavlin is a company of African origin with operations across Nigeria
          and Canada. As an EPC{" "}
          <span className="text-mavlin-gold">
            {" "}
            (Engineering, Procurement, and Construction){" "}
          </span>{" "}
          company , Mavlin specializes in creating tailored solutions across
          various industries, including Energy, Telecommunications, Power, and
          Construction At Mavlin, we’re committed to providing innovative
          solutions across multiple sectors, from sustainable farming practices
          to reliable energy services.
        </div>
      </div>
    </div>
  );
};

export default CompanyDescription;
