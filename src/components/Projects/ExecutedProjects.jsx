const executedProjectsData = [
  {
    title: "Complete BTS Backbone Site Construction (Turnkey), Uganda",
    client: "Pivot Engineering Company Limited/Huawei Warid Uganda",
  },
  {
    title: "Sub-Contract for GSM Roof Top Site BOQ T-902 at Ijesha",
    client: "Pivot/Ericsson for MTN",
  },
  { title: "GSM/CDMA Site Build Owerri 2Nos", client: "Pivot/Huawei for Zain" },
  { title: "GSM/CDMA Site Build at Ahoada", client: "Pivot/Huawei for Zain" },
  {
    title:
      "Civil Works and Tower Rigging Works of GSM Sites in Abia (HT/SS/AB/001) & (HT/SS/IM/001) (Collocation)",
    client: "Helios Tower Nigeria Limited (Collocation)",
  },
  {
    title:
      "GSM/CDMA Site Build at Various Locations in Uganda, East Africa (MDMN 4523, MR 306168, MDMN 4251, MDMN 4252, MR 306178, MR 306170, MR 306171, MR 306172, MR 306177)",
    client: "Pivot/Huawei for Warid Telecoms",
  },
  {
    title: "GSM/CDMA Site Build at Various Locations (MDKP 1049, MR 205157)",
    client: "Pivot/Ericsson for Warid Telecoms",
  },
  {
    title: "Civil Works & Piling Works at 415 Osogbo",
    client: "IHS/Multilinks",
  },
  { title: "Civil Works at Ilobu", client: "IHS/Multilinks" },
  { title: "Site Build (46m) 9.5m x 9.5m at T2996", client: "Raeanna/MTN" },
  { title: "Site Build (46m) 9.5m x 9.5m at T2927", client: "Raeanna/MTN" },
  {
    title: "Civil Work on BTS Site HT/SW/LA/021 Ayobo, Ipaja (Collocation)",
    client: "Helios Towers Nigeria Limited",
  },
  {
    title:
      "Civil, Rigging & Installation Works for GSM Sites Bakin-Kasuwar Bayo, Sabon Gari Site No. 5334 & 5426",
    client: "Pivot Engineering Company Limited/Huawei for MTN",
  },
  {
    title: "Civil Work on BTS Site HT/SW/LA/025 (Collocation)",
    client: "Helios Towers Nigeria Limited",
  },
  {
    title: "Civil Work on BTS Site HT/SS/RV/011 Port Harcourt (Collocation)",
    client: "Helios Towers Nigeria Limited",
  },
  {
    title: "Civil Work on BTS Site HT/SS/RV/036 Port Harcourt (Collocation)",
    client: "Helios Towers Nigeria Limited",
  },
  {
    title:
      "Tower Build on BTS Site HT/NC/FC/172 at Dei Dei Junction Mobile Barracks Dei Dei",
    client: "Helios Towers Nigeria Limited",
  },
  { title: "Site Build (46m) 9.5m x 9.5m at T5730", client: "Raeanna/MTN" },
  { title: "Civil Works & Piling Works at LAG1858A", client: "IHS/Zain" },
  { title: "Site Build (46m) 9.5m x 9.5m at T3767", client: "Raeanna/MTN" },
  {
    title: "Civil Work on BTS Sites HT/NC/KD/21 & 31 (Collocation)",
    client: "Helios Towers Nigeria Limited",
  },
  {
    title: "Civil Works & Piling Works at T-6267 (8099) Oke-Afa",
    client: "IHS/MTN",
  },
  { title: "Civil Works & Piling Works at T-6287 Babs", client: "IHS/MTN" },
  {
    title: "Civil Work on BTS Site HT/NW/KN/009 Kabuga",
    client: "Helios Towers Nigeria Limited",
  },
  {
    title:
      "Tower Build on BTS Site HT/SS/RV/145 at Irebe, Beside Naval Base, KM 20 Aba/Port Harcourt Road, Obior-Akpor LGA. Rivers State.",
    client: "Helios Towers Nigeria Limited",
  },
  {
    title: "Civil Work on BTS Site HT/NW/KN/013 Gyadi Gyadi (Collocation)",
    client: "Helios Towers Nigeria Limited",
  },
  {
    title:
      "Civil Work on BTS Site (Extension Work) HT/SS/RV/131 Port Harcourt (Collocation)",
    client: "Helios Towers Nigeria Limited",
  },
  {
    title: "Pile Foundation for Lagos State Magistrate Court Ajegunle",
    client: "Moreno Nigeria Plc.",
  },
  {
    title:
      "Non-Destructive Test (NDT): Full Length Drift of Different Sizes of Tubular Virtual Thread Inspection, Stenciling Blasting and Coating. Location: ExxonMobil Yard, FOT, Onne, Port Harcourt.",
    client: "Tricontinental Oil Services Limited/Exxon Mobil",
  },
  {
    title:
      "Construction of New Heaven – 9th Mile – Nsukka 132KV D/C Transmission Line (Lot 21-2) Project. Enugu State.",
    client: "Pivot Engineering Company Limited/NIPP",
  },
  {
    title: "Civil Works at Isolo Injection Sub-Station Lot 11 Project Lagos",
    client: "Pivot Engineering Company Limited/NIPP",
  },
  {
    title:
      "Provision of Civil Works (Access Road) for Construction of 2X30/40MVA 32.33KV Substation, Ojoga (Lot 19 TCN) Cross River State.",
    client: "Income Electrix Limited",
  },
  {
    title:
      "Civil Works Gantry Foundation & Cable Trenches, Yenegoa Substation. Bayelsa State.",
    client: "Pivot Engineering Company Limited",
  },
  {
    title:
      "Construction of Pile Cap & Tower Coating at Owerri-Ahoda 132/33KV D/C Transmission Line. Anti Corrosion Treatment on Galvanized Steel Towers.",
    client: "Pivot Engineering Company Limited",
  },
  {
    title:
      "Supply of Lube Oil to Maersk Vessels, Terminal, and Support Vessels in Port Harcourt, Rivers State, Nigeria.",
    client: "Mobil Oil Ltd",
  },
  {
    title:
      "Construction of Office Complex for Julius Berger Port Harcourt, Rivers State, Nigeria.",
    client: "Julius Berger",
  },
  {
    title: "Procurement of VFD (TECO Westinghouse)",
    client: "Chesroc Nigeria Limited",
  },
  {
    title: "Procurement of John Deere Tractor 7230R and SFM mulcher",
    client: "Akadang Farms",
  },
];

const ExecutedProjects = () => {
  return (
    <div className="relative py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Main Content */}
      <div className="relative z-10">
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col text-center mx-auto mb-12">
          <p className="text-mavlin-gold uppercase text-sm md:text-base">
            Executed Projects
          </p>
          <p className="font-arimo text-2xl md:text-3xl text-mavlin-blue font-semibold w-full">
            Our Delivery Success Speaks For Itself
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-mavlin-gold/40 text-left text-mavlin-blue text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-2 md:px-4 border-b font-semibold">
                  S/N
                </th>
                <th className="py-3 px-2 md:px-4 border-b font-semibold">
                  Contract Title
                </th>
                <th className="py-3 px-2 md:px-4 border-b font-semibold">
                  Client
                </th>
              </tr>
            </thead>
            <tbody>
              {executedProjectsData.map((project, index) => (
                <tr
                  key={index}
                  className="border-b border-mavlin-gold/40 font-nunito"
                >
                  <td className="py-2 px-2 md:py-3 md:px-4">{index + 1}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 break-words">
                    {project.title}
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 break-words">
                    {project.client}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExecutedProjects;
