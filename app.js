const categories = [
  "Amino Acid Structure",
  "Primary Structure",
  "Secondary Structure",
  "Tertiary Structure",
  "Quaternary Structure",
  "Enzymes",
  "Carbohydrate Biochemistry",
  "Lipid Biochemistry",
  "Metabolism Concepts",
  "Glycolysis",
  "Citric Acid Cycle",
  "Electron Transport Chain",
  "Lipid Metabolism",
  "Protein Metabolism",
  "DNA and RNA Biochemistry"
];

const resources = [
  {
    id: "aa-ionization",
    category: "Amino Acid Structure",
    title: "Amino Acid Ionization and Zwitterions",
    summary: "Use a pH slider to connect protonation state, zwitterions, pKa values, net charge, and physiological pH.",
    type: "interactive",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "ionization",
    prompts: ["Ask students to predict net charge before moving the pH.", "Pause near pH 7.4 and identify the protonated amino group and deprotonated carboxyl group."],
    link: "https://molview.org/"
  },
  {
    id: "aa-backbone",
    category: "Amino Acid Structure",
    title: "Shared Alpha-Amino Acid Backbone",
    summary: "Build the common amino acid scaffold from the alpha carbon, amino group, carboxyl group, hydrogen, and variable R group.",
    type: "interactive",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "backbone",
    prompts: ["Reveal one group at a time and ask what all 20 proteogenic amino acids share.", "Use the R group as the bridge from common backbone to chemical diversity."],
    link: "https://molview.org/"
  },
  {
    id: "aa-chirality",
    category: "Amino Acid Structure",
    title: "L-Amino Acid Chirality",
    summary: "Rotate a tetrahedral alpha carbon and contrast L/D convention with R/S nomenclature.",
    type: "molecular",
    tags: ["interactive", "molecular"],
    demo: "chirality",
    prompts: ["Have students point to the alpha carbon, amine, carboxylate, H, and R group.", "Use glycine as the exception that proves the rule."],
    link: "https://molview.org/"
  },
  {
    id: "aa-classification",
    category: "Amino Acid Structure",
    title: "R-Group Classification Map",
    summary: "Sort the 20 common amino acids into nonpolar aliphatic, aromatic, polar uncharged, positively charged, and negatively charged groups.",
    type: "class-demo",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "classification",
    prompts: ["Move across categories and ask students what chemical feature earns membership.", "Connect polarity, charge, and hydrophobicity to folding and solubility."],
    link: "https://molview.org/"
  },
  {
    id: "aa-aromatic-uv",
    category: "Amino Acid Structure",
    title: "Aromatic Side Chains and UV Absorbance",
    summary: "Compare phenylalanine, tyrosine, and tryptophan to show why conjugated ring systems absorb near 280 nm.",
    type: "interactive",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "aromaticuv",
    prompts: ["Ask students which aromatic side chain should absorb most strongly before revealing the bar heights.", "Connect UV absorbance to protein detection and quantification."],
    link: "https://molview.org/"
  },
  {
    id: "aa-titration-pi",
    category: "Amino Acid Structure",
    title: "Titration Curves and Isoelectric Point",
    summary: "Trace glycine and histidine titration behavior, including buffering regions and the pH where net charge is zero.",
    type: "interactive",
    tags: ["interactive", "class-demo"],
    demo: "titration",
    prompts: ["Have students locate buffering regions before naming pKa values.", "Compare glycine with histidine to show why ionizable side chains add extra inflection points."],
    link: "https://molview.org/"
  },
  {
    id: "aa-sidechain-catalysis",
    category: "Amino Acid Structure",
    title: "Ionizable Side Chains in Catalysis",
    summary: "Focus on Asp, Glu, His, Cys, Tyr, Lys, and Arg as acid-base or ionic participants in active sites.",
    type: "class-demo",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "sidechaincatalysis",
    prompts: ["Ask which side chains can donate or accept protons near physiological pH.", "Use histidine to preview enzyme active sites because imidazole can gain or lose a proton near neutral pH."],
    link: "https://molview.org/"
  },
  {
    id: "peptide-resonance",
    category: "Primary Structure",
    title: "Peptide Bond Resonance and Rigidity",
    summary: "Animate electron delocalization across O-C-N to show partial double-bond character and restricted rotation.",
    type: "interactive",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "resonance",
    prompts: ["Ask why the C-N bond is shorter than a regular single bond.", "Connect planarity to protein backbone geometry."],
    link: "https://jmol.sourceforge.net/demo/"
  },
  {
    id: "dihedral",
    category: "Primary Structure",
    title: "Phi, Psi, and Omega Dihedral Angles",
    summary: "Let the backbone twist while omega remains nearly planar; bridge into allowed and disallowed Ramachandran space.",
    type: "interactive",
    tags: ["interactive", "molecular"],
    demo: "dihedral",
    prompts: ["Move phi and psi separately so students see which bond rotates.", "Freeze omega near 180 degrees and ask what chemistry makes that happen."],
    link: "https://proteopedia.org/"
  },
  {
    id: "ramachandran",
    category: "Primary Structure",
    title: "Ramachandran Plot Explorer",
    summary: "Plot phi/psi points as residues move into alpha helix, beta sheet, or steric-clash regions.",
    type: "interactive",
    tags: ["interactive", "molecular"],
    demo: "ramachandran",
    prompts: ["Click between alpha and beta presets.", "Ask students why glycine and proline need special treatment."],
    link: "https://proteopedia.org/wiki/index.php/Ramachandran_Plots"
  },
  {
    id: "alpha-beta",
    category: "Secondary Structure",
    title: "Alpha Helices and Beta Sheets",
    summary: "Compare helix pitch, backbone hydrogen bonds, beta-strand direction, and side-chain alternation.",
    type: "class-demo",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "secondary",
    prompts: ["Toggle helix versus sheet and follow only the backbone.", "Ask which atoms donate and accept H bonds."],
    link: "https://proteopedia.org/"
  },
  {
    id: "motifs",
    category: "Secondary Structure",
    title: "Turns, Loops, and Supersecondary Motifs",
    summary: "Show that not every important region is a regular helix or sheet; loops often position active sites.",
    type: "molecular",
    tags: ["molecular", "class-demo"],
    demo: "secondary",
    prompts: ["Highlight loop flexibility.", "Connect beta-alpha-beta motifs to larger domains."],
    link: "https://www.rcsb.org/"
  },
  {
    id: "folding-forces",
    category: "Tertiary Structure",
    title: "Forces that Stabilize a Fold",
    summary: "Map hydrophobic collapse, salt bridges, hydrogen bonds, van der Waals packing, and disulfides onto one protein.",
    type: "molecular",
    tags: ["interactive", "molecular", "class-demo"],
    demo: "tertiary",
    prompts: ["Turn each force on one at a time.", "Ask which interactions are strongest in water versus the protein core."],
    link: "https://www.rcsb.org/3d-view"
  },
  {
    id: "domains",
    category: "Tertiary Structure",
    title: "Domains, Active Sites, and Ligand Pockets",
    summary: "Visualize domains as functional modules that create binding surfaces and catalytic pockets.",
    type: "molecular",
    tags: ["molecular", "class-demo"],
    demo: "tertiary",
    prompts: ["Ask students to distinguish a domain from an entire protein.", "Show how distant residues in sequence can touch in 3D."],
    link: "https://www.rcsb.org/"
  },
  {
    id: "hemoglobin",
    category: "Quaternary Structure",
    title: "Hemoglobin as a Quaternary Structure Model",
    summary: "Use four subunits to introduce cooperativity, interfaces, conformational states, and allostery.",
    type: "molecular",
    tags: ["interactive", "molecular", "class-demo"],
    demo: "quaternary",
    prompts: ["Show individual subunits first, then the tetramer.", "Connect oxygen binding to a whole-complex conformational change."],
    link: "https://www.rcsb.org/structure/1HHO"
  },
  {
    id: "mm-kinetics",
    category: "Enzymes",
    title: "Michaelis-Menten Kinetics",
    summary: "Move substrate concentration and watch initial velocity approach Vmax; connect Km to half-maximal velocity.",
    type: "interactive",
    tags: ["interactive", "class-demo"],
    demo: "kinetics",
    prompts: ["Ask students to estimate Km from the curve.", "Overlay competitive and noncompetitive inhibition."],
    link: "https://phet.colorado.edu/"
  },
  {
    id: "chymotrypsin",
    category: "Enzymes",
    title: "Chymotrypsin Catalytic Cycle",
    summary: "Step through specificity pocket binding, catalytic triad activation, acyl-enzyme formation, and hydrolysis.",
    type: "class-demo",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "chymotrypsin",
    prompts: ["Assign roles to Ser195, His57, and Asp102.", "Compare transition-state stabilization with simple proximity."],
    link: "https://proteopedia.org/wiki/index.php/Chymotrypsin"
  },
  {
    id: "carb-projections",
    category: "Carbohydrate Biochemistry",
    title: "Fischer, Haworth, and Chair Projections",
    summary: "Convert between projections while keeping stereocenters honest, especially D/L and alpha/beta anomers.",
    type: "interactive",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "carbs",
    prompts: ["Track one carbon through all representations.", "Ask what changes during mutarotation and what stays fixed."],
    link: "https://molview.org/"
  },
  {
    id: "glycosidic",
    category: "Carbohydrate Biochemistry",
    title: "Glycosidic Linkages and Stereospecificity",
    summary: "Compare alpha and beta linkages to explain starch, glycogen, cellulose, and enzyme specificity.",
    type: "interactive",
    tags: ["interactive", "class-demo", "molecular"],
    demo: "carbs",
    prompts: ["Place alpha-1,4 and beta-1,4 side by side.", "Ask why humans digest one polymer but not the other."],
    link: "https://molview.org/"
  },
  {
    id: "bilayer",
    category: "Lipid Biochemistry",
    title: "Lipid Bilayers and Membrane Fluidity",
    summary: "Animate amphipathic assembly, cholesterol buffering, and how saturation changes packing.",
    type: "interactive",
    tags: ["interactive", "class-demo"],
    demo: "bilayer",
    prompts: ["Increase unsaturation and ask what happens to melting temperature.", "Add cholesterol and discuss fluidity buffering."],
    link: "https://phet.colorado.edu/"
  },
  {
    id: "lipid-classes",
    category: "Lipid Biochemistry",
    title: "Lipid Classes and Signaling Roles",
    summary: "Group fatty acids, triacylglycerols, phospholipids, sphingolipids, sterols, and eicosanoids by structure and function.",
    type: "class-demo",
    tags: ["class-demo", "molecular"],
    demo: "bilayer",
    prompts: ["Sort molecules by storage, membrane, or signal role.", "Point out recurring hydrophobic tails and polar head groups."],
    link: "https://molview.org/"
  },
  {
    id: "anabolism-catabolism",
    category: "Metabolism Concepts",
    title: "Anabolism, Catabolism, and Energy Coupling",
    summary: "Show carbon and electron flow through ATP, NADH, NADPH, and common activated carriers.",
    type: "pathway",
    tags: ["interactive", "pathway", "class-demo"],
    demo: "metabolism",
    prompts: ["Ask whether each route builds, breaks down, or transfers energy.", "Use NADPH versus NADH to separate biosynthesis from oxidation."],
    link: "https://www.genome.jp/kegg/pathway.html"
  },
  {
    id: "organic-phenomena",
    category: "Metabolism Concepts",
    title: "Recurring Organic Chemistry in Metabolism",
    summary: "Visualize phosphoryl transfer, redox, acyl transfer, aldol chemistry, decarboxylation, and isomerization.",
    type: "class-demo",
    tags: ["class-demo", "pathway"],
    demo: "metabolism",
    prompts: ["Ask students to name the reaction type before naming the enzyme.", "Make electron movement the common language across pathways."],
    link: "https://www.genome.jp/kegg/pathway.html"
  },
  {
    id: "glycolysis-map",
    category: "Glycolysis",
    title: "Glycolysis Carbon and Energy Accounting",
    summary: "Step through investment, cleavage, payoff, ATP production, NADH production, and regulatory points.",
    type: "pathway",
    tags: ["interactive", "pathway", "class-demo"],
    demo: "glycolysis",
    prompts: ["Track one labeled carbon from glucose to pyruvate.", "Pause at irreversible steps and name the regulatory logic."],
    link: "https://www.genome.jp/pathway/map00010"
  },
  {
    id: "tca-map",
    category: "Citric Acid Cycle",
    title: "Citric Acid Cycle Carbon Fate",
    summary: "Follow acetyl-CoA entry, decarboxylations, substrate-level phosphorylation, and electron-carrier output.",
    type: "pathway",
    tags: ["interactive", "pathway", "class-demo"],
    demo: "tca",
    prompts: ["Distinguish carbons entering as acetyl-CoA from carbons leaving as CO2.", "Count NADH, FADH2, and GTP per turn."],
    link: "https://www.genome.jp/pathway/map00020"
  },
  {
    id: "etc-gradient",
    category: "Electron Transport Chain",
    title: "Electron Transport and Proton Motive Force",
    summary: "Animate electron flow, proton pumping, oxygen reduction, and ATP synthase rotation.",
    type: "interactive",
    tags: ["interactive", "pathway", "class-demo"],
    demo: "etc",
    prompts: ["Ask what stops when oxygen is unavailable.", "Separate electron transport from ATP synthesis, then reconnect them with the gradient."],
    link: "https://www.genome.jp/pathway/map00190"
  },
  {
    id: "beta-oxidation",
    category: "Lipid Metabolism",
    title: "Beta-Oxidation Spiral",
    summary: "Cycle oxidation, hydration, oxidation, thiolysis while shortening fatty acyl-CoA by two carbons each turn.",
    type: "pathway",
    tags: ["interactive", "pathway", "class-demo"],
    demo: "betaoxidation",
    prompts: ["Count acetyl-CoA yield from a fatty acid length.", "Connect FADH2 and NADH output to the ETC."],
    link: "https://www.genome.jp/pathway/map00071"
  },
  {
    id: "protein-catabolism",
    category: "Protein Metabolism",
    title: "Amino Acid Nitrogen Handling",
    summary: "Connect transamination, oxidative deamination, ammonia toxicity, and urea cycle disposal.",
    type: "pathway",
    tags: ["interactive", "pathway", "class-demo"],
    demo: "proteinmet",
    prompts: ["Track nitrogen separately from carbon skeletons.", "Ask why nitrogen disposal is compartmentalized."],
    link: "https://www.genome.jp/pathway/map00330"
  },
  {
    id: "dna-replication",
    category: "DNA and RNA Biochemistry",
    title: "DNA Replication Fork",
    summary: "Show helicase, primase, leading and lagging strands, polymerase directionality, and ligase sealing.",
    type: "interactive",
    tags: ["interactive", "class-demo"],
    demo: "replication",
    prompts: ["Ask why both strands cannot be copied continuously.", "Make 5-prime to 3-prime synthesis visible at every step."],
    link: "https://phet.colorado.edu/"
  },
  {
    id: "central-dogma",
    category: "DNA and RNA Biochemistry",
    title: "Transcription and Translation Flow",
    summary: "Animate promoter recognition, RNA synthesis, codon reading, tRNA matching, and peptide elongation.",
    type: "interactive",
    tags: ["interactive", "class-demo"],
    demo: "translation",
    prompts: ["Compare template strand, coding strand, and mRNA.", "Ask students to predict the next amino acid from the codon."],
    link: "https://phet.colorado.edu/"
  }
];

const state = {
  category: "All",
  filter: "all",
  query: "",
  demo: "backbone",
  favorites: JSON.parse(localStorage.getItem("biochemVizFavorites") || "[]")
};

const aaCategories = [
  {
    name: "Nonpolar aliphatic",
    examples: "Gly, Ala, Val, Leu, Ile, Met, Pro",
    feature: "hydrophobic side chains",
    color: "#dff0e8"
  },
  {
    name: "Aromatic",
    examples: "Phe, Tyr, Trp",
    feature: "conjugated ring systems",
    color: "#fff0df"
  },
  {
    name: "Polar uncharged",
    examples: "Ser, Thr, Asn, Gln, Cys",
    feature: "H-bond donors/acceptors",
    color: "#e8eef8"
  },
  {
    name: "Positive",
    examples: "Lys, Arg, His",
    feature: "cationic or protonatable",
    color: "#f5e4ef"
  },
  {
    name: "Negative",
    examples: "Asp, Glu",
    feature: "carboxylates at pH 7",
    color: "#e5f1fb"
  }
];

const catalyticSideChains = [
  { code: "Asp", group: "carboxylate", role: "accepts H+", pka: "3.9", color: "#e5f1fb" },
  { code: "Glu", group: "carboxylate", role: "accepts H+", pka: "4.3", color: "#e5f1fb" },
  { code: "His", group: "imidazole", role: "donates or accepts H+", pka: "6.0", color: "#fff0df" },
  { code: "Cys", group: "thiol/thiolate", role: "nucleophile, redox", pka: "8.3", color: "#edf6e5" },
  { code: "Tyr", group: "phenol", role: "H-bonding, acid/base", pka: "10.1", color: "#f6eadf" },
  { code: "Lys", group: "amino", role: "donates H+, ionic", pka: "10.5", color: "#f5e4ef" },
  { code: "Arg", group: "guanidinium", role: "ionic pairing", pka: "12.5", color: "#f5e4ef" }
];

const demos = {
  backbone: {
    title: "Shared Alpha-Amino Acid Backbone",
    text: "Build the generic amino acid scaffold, then use the R group to explain why the same backbone can produce many protein behaviors.",
    controls: [{ id: "part", label: "Reveal", min: 0, max: 4, value: 4 }],
    render: values => {
      const part = Number(values.part ?? 4);
      const pieces = [
        { x: 135, y: 128, label: "NH3+", name: "amino group", show: part >= 1 },
        { x: 392, y: 128, label: "COO-", name: "carboxyl group", show: part >= 2 },
        { x: 260, y: 52, label: "H", name: "hydrogen", show: part >= 3 },
        { x: 260, y: 208, label: "R", name: "variable side chain", show: part >= 4 }
      ];
      return svg(520, 260, `
        <circle class="node" cx="260" cy="128" r="31"/><text class="label" x="260" y="133">Cα</text>
        ${pieces.map(item => item.show ? `
          <line class="bond" x1="260" y1="128" x2="${item.x}" y2="${item.y}"/>
          <circle class="node" cx="${item.x}" cy="${item.y}" r="${item.label.length > 2 ? 38 : 25}"/>
          <text class="label" x="${item.x}" y="${item.y + 5}">${item.label}</text>
        ` : "").join("")}
        <rect x="66" y="20" width="132" height="34" rx="8" fill="#e9f4f4" stroke="#d8e1e1"/>
        <text class="small-label" x="132" y="42">alpha-amino acid</text>
        <text class="small-label" x="260" y="241">${part < 4 ? "Reveal each shared group, then finish with the R group." : "R group chemistry drives polarity, charge, folding, and function."}</text>
      `);
    }
  },
  resonance: {
    title: "Peptide Bond Resonance",
    text: "Show how resonance delocalization creates partial double-bond character, keeping the peptide bond planar and rotation-poor.",
    controls: [{ id: "res", label: "Resonance blend", min: 0, max: 100, value: 55 }],
    render: values => {
      const blend = Number(values.res ?? 55) / 100;
      const offset = Math.round(24 * blend);
      return svg(520, 260, `
        <line class="bond" x1="110" y1="132" x2="210" y2="132"/>
        <line class="bond" x1="210" y1="132" x2="318" y2="132"/>
        <line class="bond" x1="210" y1="132" x2="210" y2="62"/>
        <line class="hot" x1="210" y1="${126 - offset * 0.2}" x2="318" y2="${126 - offset * 0.2}" opacity="${0.25 + blend * 0.65}"/>
        <line class="hot" x1="214" y1="66" x2="214" y2="126" opacity="${0.8 - blend * 0.45}"/>
        <circle class="node" cx="110" cy="132" r="24"/><text class="label" x="110" y="137">N</text>
        <circle class="node" cx="210" cy="132" r="24"/><text class="label" x="210" y="137">C</text>
        <circle class="node" cx="318" cy="132" r="24"/><text class="label" x="318" y="137">N</text>
        <circle class="node" cx="210" cy="62" r="24"/><text class="label" x="210" y="67">O</text>
        <path class="hot" d="M150 98 C185 55 245 55 280 98" marker-end="url(#arrow)"/>
        <text class="small-label" x="265" y="178">partial double-bond character</text>
        <text class="small-label" x="210" y="225">Planar peptide unit; omega is usually near 180 degrees</text>
      `);
    }
  },
  ionization: {
    title: "Amino Acid Ionization",
    text: "Move pH to show why amino acids switch between cationic, zwitterionic, and anionic forms.",
    controls: [{ id: "ph", label: "pH", min: 0, max: 14, value: 7 }],
    render: values => {
      const ph = Number(values.ph ?? 7);
      const amine = ph < 9.5 ? "NH3+" : "NH2";
      const carboxyl = ph < 2.2 ? "COOH" : "COO-";
      const net = (ph < 2.2 ? 1 : ph < 9.5 ? 0 : -1);
      return svg(520, 260, `
        <text class="small-label" x="260" y="28">pH ${ph.toFixed(1)} | net charge ${net > 0 ? "+" : ""}${net}</text>
        <circle class="node" cx="260" cy="128" r="28"/><text class="label" x="260" y="133">Cα</text>
        <line class="bond" x1="232" y1="128" x2="130" y2="128"/><circle class="node" cx="130" cy="128" r="34"/><text class="label" x="130" y="133">${amine}</text>
        <line class="bond" x1="288" y1="128" x2="395" y2="128"/><circle class="node" cx="395" cy="128" r="38"/><text class="label" x="395" y="133">${carboxyl}</text>
        <line class="bond" x1="260" y1="100" x2="260" y2="50"/><circle class="node" cx="260" cy="50" r="24"/><text class="label" x="260" y="55">H</text>
        <line class="bond" x1="260" y1="156" x2="260" y2="210"/><circle class="node" cx="260" cy="210" r="28"/><text class="label" x="260" y="215">R</text>
      `);
    }
  },
  chirality: {
    title: "L-Amino Acid Chirality",
    text: "Rotate the alpha carbon substituents to show tetrahedral geometry and why glycine is achiral.",
    controls: [
      { id: "rot", label: "Rotation", min: 0, max: 360, value: 35 },
      { id: "gly", label: "Glycine exception", min: 0, max: 1, value: 0 }
    ],
    render: values => {
      const r = Number(values.rot ?? 35) * Math.PI / 180;
      const gly = Number(values.gly ?? 0) > 0;
      const pts = [[0,-72,"NH3+"],[74,0,"COO-"],[0,72,gly ? "H" : "R"],[-74,0,"H"]].map(([x,y,t]) => [260 + x*Math.cos(r)-y*Math.sin(r), 130 + x*Math.sin(r)+y*Math.cos(r), t]);
      return svg(520, 260, `
        <circle class="node" cx="260" cy="130" r="30"/><text class="label" x="260" y="135">Cα</text>
        ${pts.map(([x,y,t], i) => `<line class="bond ${i === 3 ? "blue" : ""}" x1="260" y1="130" x2="${x}" y2="${y}"/><circle class="node" cx="${x}" cy="${y}" r="30"/><text class="label" x="${x}" y="${y+5}">${t}</text>`).join("")}
        <text class="small-label" x="260" y="238">${gly ? "Glycine has two H substituents, so the alpha carbon is achiral." : "Proteins use L-amino acids; stereochemistry shapes protein architecture."}</text>
      `);
    }
  },
  classification: {
    title: "R-Group Classification Map",
    text: "Step through side-chain classes and connect chemical features to folding, solubility, and interactions.",
    controls: [{ id: "cat", label: "Category", min: 0, max: 4, value: 0 }],
    render: values => {
      const selected = Number(values.cat ?? 0);
      const active = aaCategories[selected];
      return svg(560, 300, `
        <text class="small-label" x="280" y="26">20 common amino acids grouped by R-group chemistry</text>
        ${aaCategories.map((cat, i) => {
          const x = 80 + (i % 3) * 200;
          const y = i < 3 ? 72 : 192;
          const on = i === selected;
          return `
            <rect x="${x - 68}" y="${y - 36}" width="136" height="72" rx="8" fill="${cat.color}" stroke="${on ? "#b94b30" : "#d8e1e1"}" stroke-width="${on ? 4 : 2}"/>
            <text class="label" x="${x}" y="${y - 8}">${cat.name}</text>
            <text class="small-label" x="${x}" y="${y + 15}">${cat.examples}</text>
          `;
        }).join("")}
        <rect x="92" y="238" width="376" height="38" rx="8" fill="#fff" stroke="#d8e1e1"/>
        <text class="small-label" x="280" y="262">${active.name}: ${active.feature}</text>
      `);
    }
  },
  aromaticuv: {
    title: "Aromatic Side Chains and UV Absorbance",
    text: "Compare aromatic ring systems to explain why proteins with Trp and Tyr are readily detected near 280 nm.",
    controls: [{ id: "highlight", label: "Highlight", min: 0, max: 2, value: 2 }],
    render: values => {
      const h = Number(values.highlight ?? 2);
      const amino = [
        { code: "Phe", rings: 1, absorb: 35, note: "benzyl ring" },
        { code: "Tyr", rings: 1, absorb: 62, note: "phenol adds polarity" },
        { code: "Trp", rings: 2, absorb: 96, note: "largest 280 nm signal" }
      ];
      return svg(560, 300, `
        <line class="bond" x1="82" y1="238" x2="494" y2="238"/><line class="bond" x1="82" y1="238" x2="82" y2="50"/>
        ${amino.map((aa, i) => {
          const x = 160 + i * 130;
          const bar = aa.absorb * 1.55;
          const on = i === h;
          return `
            <rect x="${x - 24}" y="${238 - bar}" width="48" height="${bar}" rx="6" fill="${on ? "#b94b30" : "#9fb7d9"}"/>
            <text class="label" x="${x}" y="266">${aa.code}</text>
            ${ringGlyph(x, 76, aa.rings, on)}
            <text class="small-label" x="${x}" y="286">${aa.note}</text>
          `;
        }).join("")}
        <text class="small-label" x="98" y="42">relative UV absorbance</text>
        <text class="small-label" x="292" y="24">Conjugated pi systems allow electronic transitions near 280 nm.</text>
      `);
    }
  },
  titration: {
    title: "Titration Curves and Isoelectric Point",
    text: "Switch from glycine to histidine to see how ionizable side chains add buffering regions and change pI logic.",
    controls: [
      { id: "aa", label: "Gly to His", min: 0, max: 1, value: 0 },
      { id: "ph", label: "pH", min: 0, max: 14, value: 6 }
    ],
    render: values => {
      const his = Number(values.aa ?? 0) > 0;
      const ph = Number(values.ph ?? 6);
      const pKas = his ? [1.8, 6.0, 9.2] : [2.3, 9.6];
      const pI = his ? 7.6 : 6.0;
      let curve = "";
      for (let i = 0; i <= 140; i += 2) {
        const xph = i / 10;
        const charge = pKas.reduce((sum, pka, idx) => sum - 1 / (1 + Math.pow(10, pka - xph)), his ? 2 : 1);
        const y = 202 - ((charge + 1.2) / (his ? 3.4 : 2.4)) * 150;
        curve += `${80 + xph * 28},${y} `;
      }
      const markerX = 80 + ph * 28;
      return svg(560, 300, `
        <line class="bond" x1="72" y1="222" x2="490" y2="222"/><line class="bond" x1="80" y1="232" x2="80" y2="42"/>
        <polyline points="${curve}" fill="none" stroke="#19757a" stroke-width="5"/>
        ${pKas.map(pka => `<line class="hot" x1="${80 + pka * 28}" y1="60" x2="${80 + pka * 28}" y2="222" stroke-dasharray="5 7"/><text class="small-label" x="${80 + pka * 28}" y="48">pKa ${pka}</text>`).join("")}
        <line class="hot blue" x1="${80 + pI * 28}" y1="75" x2="${80 + pI * 28}" y2="222" stroke-dasharray="2 7"/>
        <circle cx="${markerX}" cy="222" r="8" fill="#b94b30"/><text class="small-label" x="${markerX}" y="246">pH ${ph.toFixed(1)}</text>
        <text class="label" x="430" y="78">${his ? "Histidine" : "Glycine"}</text>
        <text class="small-label" x="430" y="102">pI about ${pI.toFixed(1)}</text>
        <text class="small-label" x="280" y="282">${his ? "Histidine buffers near neutral pH because imidazole has pKa about 6." : "Glycine's pI is midway between its two backbone pKa values."}</text>
      `);
    }
  },
  sidechaincatalysis: {
    title: "Ionizable Side Chains in Catalysis",
    text: "Highlight residues whose side chains commonly donate or accept protons, stabilize charge, or form reactive nucleophiles.",
    controls: [{ id: "residue", label: "Residue", min: 0, max: 6, value: 2 }],
    render: values => {
      const idx = Number(values.residue ?? 2);
      const aa = catalyticSideChains[idx];
      return svg(560, 300, `
        <rect x="48" y="54" width="464" height="142" rx="8" fill="#fff" stroke="#d8e1e1"/>
        <circle class="node" cx="142" cy="124" r="28"/><text class="label" x="142" y="129">Cα</text>
        <line class="bond" x1="170" y1="124" x2="258" y2="124"/>
        <rect x="258" y="82" width="176" height="84" rx="8" fill="${aa.color}" stroke="#172122" stroke-width="2"/>
        <text class="label" x="346" y="112">${aa.code}</text>
        <text class="small-label" x="346" y="137">${aa.group}</text>
        <path class="hot" d="M374 77 C420 44 466 76 448 122" marker-end="url(#arrow)"/>
        <text class="small-label" x="437" y="54">H+ transfer</text>
        ${catalyticSideChains.map((item, i) => {
          const x = 78 + i * 67;
          const on = i === idx;
          return `<circle cx="${x}" cy="232" r="${on ? 23 : 18}" fill="${on ? "#b94b30" : item.color}" stroke="#172122" stroke-width="2"/><text class="small-label" x="${x}" y="237">${item.code}</text>`;
        }).join("")}
        <text class="small-label" x="280" y="274">${aa.code}: ${aa.role}; side-chain pKa about ${aa.pka}</text>
      `);
    }
  },
  dihedral: {
    title: "Backbone Dihedral Angles",
    text: "Twist phi and psi while keeping the peptide bond comparatively flat.",
    controls: [
      { id: "phi", label: "phi", min: -180, max: 180, value: -60 },
      { id: "psi", label: "psi", min: -180, max: 180, value: -45 }
    ],
    render: values => {
      const phi = Number(values.phi ?? -60);
      const psi = Number(values.psi ?? -45);
      const y1 = 130 + Math.sin(phi * Math.PI / 180) * 46;
      const y2 = 130 + Math.sin(psi * Math.PI / 180) * 46;
      return svg(520, 260, `
        <polyline class="bond" points="74,${y1} 154,130 234,${y2} 314,130 394,${130 - Math.sin(phi * Math.PI / 180) * 35} 466,130" fill="none"/>
        ${[[74,y1,"N"],[154,130,"Cα"],[234,y2,"C"],[314,130,"N"],[394,130 - Math.sin(phi * Math.PI / 180) * 35,"Cα"],[466,130,"C"]].map(([x,y,t]) => `<circle class="node" cx="${x}" cy="${y}" r="24"/><text class="label" x="${x}" y="${y+5}">${t}</text>`).join("")}
        <path class="hot" d="M125 108 A42 42 0 0 1 178 108"/><text class="small-label" x="151" y="88">phi ${phi}°</text>
        <path class="hot blue" d="M205 156 A42 42 0 0 0 258 156"/><text class="small-label" x="232" y="188">psi ${psi}°</text>
        <text class="small-label" x="354" y="70">omega peptide bond stays nearly planar</text>
      `);
    }
  },
  ramachandran: {
    title: "Ramachandran Plot Explorer",
    text: "Move a residue through allowed backbone angle regions.",
    controls: [
      { id: "phi", label: "phi", min: -180, max: 180, value: -60 },
      { id: "psi", label: "psi", min: -180, max: 180, value: -45 }
    ],
    render: values => {
      const phi = Number(values.phi ?? -60);
      const psi = Number(values.psi ?? -45);
      const x = 260 + phi;
      const y = 130 - psi * 0.55;
      return svg(520, 260, `
        <rect x="80" y="30" width="360" height="200" rx="8" fill="#fff" stroke="#d8e1e1"/>
        <ellipse cx="198" cy="82" rx="70" ry="42" fill="#dff0e8"/>
        <ellipse cx="205" cy="168" rx="84" ry="38" fill="#e4ecfa"/>
        <ellipse cx="322" cy="155" rx="44" ry="34" fill="#fff0df"/>
        <line class="bond" x1="260" y1="30" x2="260" y2="230"/><line class="bond" x1="80" y1="130" x2="440" y2="130"/>
        <circle cx="${x}" cy="${y}" r="9" fill="#b94b30"/>
        <text class="small-label" x="198" y="82">beta region</text><text class="small-label" x="205" y="168">right-handed alpha</text><text class="small-label" x="322" y="155">left alpha</text>
        <text class="small-label" x="260" y="248">phi ${phi}°, psi ${psi}°</text>
      `);
    }
  },
  secondary: {
    title: "Secondary Structure",
    text: "Toggle regular backbone patterns and the hydrogen bonds that stabilize them.",
    controls: [{ id: "mode", label: "Helix to sheet", min: 0, max: 100, value: 25 }],
    render: values => {
      const mode = Number(values.mode ?? 25);
      if (mode < 50) {
        return svg(520, 260, `
          <path d="M105 130 C125 40 190 40 210 130 S295 220 315 130 S400 40 420 130" fill="none" stroke="#19757a" stroke-width="14" stroke-linecap="round"/>
          ${[150,240,330].map(x => `<line class="hot" x1="${x}" y1="78" x2="${x+28}" y2="176" stroke-dasharray="6 7"/>`).join("")}
          <text class="small-label" x="260" y="232">Alpha helix: backbone H bonds roughly i to i+4</text>
        `);
      }
      return svg(520, 260, `
        ${[76,164,252,340].map((x,i) => `<path d="M${x} ${i%2?68:188} L${x+72} ${i%2?188:68}" stroke="#315fa8" stroke-width="16" stroke-linecap="round"/><polygon points="${x+72},${i%2?188:68} ${x+54},${i%2?168:88} ${x+90},${i%2?168:88}" fill="#315fa8"/>`).join("")}
        ${[154,242,330].map(x => `<line class="hot" x1="${x}" y1="88" x2="${x}" y2="172" stroke-dasharray="6 7"/>`).join("")}
        <text class="small-label" x="260" y="232">Beta sheet: strand direction and inter-strand H bonds matter</text>
      `);
    }
  },
  tertiary: {
    title: "Tertiary Structure Forces",
    text: "Reveal the interactions that stabilize a folded protein.",
    controls: [{ id: "force", label: "Interaction focus", min: 0, max: 4, value: 2 }],
    render: values => {
      const force = Number(values.force ?? 2);
      const labels = ["hydrophobic core", "salt bridge", "H bonds", "disulfide", "ligand pocket"];
      const colors = ["#19757a", "#b94b30", "#315fa8", "#8a5a13", "#6b4aa0"];
      return svg(520, 260, `
        <path d="M142 72 C210 18 330 42 365 104 C420 202 280 232 214 198 C110 228 76 128 142 72" fill="#edf6f6" stroke="#19757a" stroke-width="4"/>
        <circle cx="242" cy="132" r="48" fill="${force===0?colors[0]:"#d7e8e8"}"/>
        <line class="hot" x1="120" y1="96" x2="190" y2="82" opacity="${force===1?1:.25}"/>
        <line class="hot blue" x1="315" y1="80" x2="370" y2="122" stroke-dasharray="5 6" opacity="${force===2?1:.25}"/>
        <line class="hot" x1="150" y1="184" x2="198" y2="200" opacity="${force===3?1:.25}"/>
        <circle cx="316" cy="156" r="26" fill="${force===4?colors[4]:"#cfd8e8"}"/>
        <text class="small-label" x="260" y="238">Focus: ${labels[force]}</text>
      `);
    }
  },
  quaternary: {
    title: "Quaternary Structure",
    text: "Show subunits assembling into a functional complex.",
    controls: [{ id: "assemble", label: "Assembly", min: 0, max: 100, value: 70 }],
    render: values => {
      const a = Number(values.assemble ?? 70) / 100;
      const centers = [[190-70*(1-a),92-42*(1-a),"α1"],[330+70*(1-a),92-42*(1-a),"β1"],[190-70*(1-a),172+42*(1-a),"α2"],[330+70*(1-a),172+42*(1-a),"β2"]];
      return svg(520, 260, `
        ${centers.map(([x,y,t], i) => `<ellipse cx="${x}" cy="${y}" rx="62" ry="42" fill="${i%2?"#dfe8fa":"#dff0e8"}" stroke="#172122" stroke-width="2"/><text class="label" x="${x}" y="${y+5}">${t}</text>`).join("")}
        <circle cx="260" cy="132" r="${18 + 16*a}" fill="none" stroke="#b94b30" stroke-width="4"/>
        <text class="small-label" x="260" y="238">Interfaces create new behavior: cooperativity and allostery</text>
      `);
    }
  },
  kinetics: {
    title: "Michaelis-Menten Kinetics",
    text: "Move substrate concentration to see velocity approach Vmax.",
    controls: [{ id: "s", label: "[S]", min: 0, max: 100, value: 32 }],
    render: values => {
      const s = Number(values.s ?? 32);
      const km = 25;
      const v = s / (km + s);
      const px = 80 + s * 3.6;
      const py = 215 - v * 165;
      let curve = "";
      for (let i = 0; i <= 100; i += 4) {
        const cv = i / (km + i);
        curve += `${80+i*3.6},${215-cv*165} `;
      }
      return svg(520, 260, `
        <line class="bond" x1="70" y1="215" x2="455" y2="215"/><line class="bond" x1="80" y1="225" x2="80" y2="38"/>
        <polyline points="${curve}" fill="none" stroke="#19757a" stroke-width="5"/>
        <line class="hot" x1="80" y1="132" x2="455" y2="132" stroke-dasharray="5 7"/><text class="small-label" x="430" y="125">1/2 Vmax</text>
        <circle cx="${px}" cy="${py}" r="10" fill="#b94b30"/>
        <text class="small-label" x="260" y="246">[S] ${s}; v = ${(v*100).toFixed(0)}% of Vmax</text>
      `);
    }
  },
  chymotrypsin: {
    title: "Chymotrypsin Catalytic Cycle",
    text: "Step through binding, acyl-enzyme formation, water attack, and product release.",
    controls: [{ id: "step", label: "Step", min: 0, max: 4, value: 1 }],
    render: values => {
      const step = Number(values.step ?? 1);
      const names = ["bind substrate", "activate Ser195", "acyl-enzyme", "water attack", "release product"];
      return svg(520, 260, `
        <rect x="88" y="64" width="344" height="132" rx="40" fill="#edf6f6" stroke="#19757a" stroke-width="4"/>
        <circle cx="172" cy="130" r="28" fill="${step>=1?"#fff0df":"#fff"}" stroke="#172122" stroke-width="2"/><text class="label" x="172" y="135">Ser</text>
        <circle cx="260" cy="100" r="28" fill="${step>=1?"#fff0df":"#fff"}" stroke="#172122" stroke-width="2"/><text class="label" x="260" y="105">His</text>
        <circle cx="348" cy="130" r="28" fill="${step>=1?"#fff0df":"#fff"}" stroke="#172122" stroke-width="2"/><text class="label" x="348" y="135">Asp</text>
        <path class="hot" d="M130 48 C190 24 274 36 318 70" opacity="${step===0?1:.35}"/>
        <line class="hot" x1="198" y1="122" x2="232" y2="108" opacity="${step>=1?1:.25}"/>
        <path class="hot blue" d="M164 158 C208 218 322 218 366 158" opacity="${step>=2?1:.2}"/>
        <circle cx="410" cy="82" r="16" fill="#dfe8fa" opacity="${step>=3?1:.25}"/><text class="small-label" x="410" y="87">H2O</text>
        <text class="small-label" x="260" y="238">Current step: ${names[step]}</text>
      `);
    }
  },
  carbs: {
    title: "Carbohydrate Stereochemistry",
    text: "Move from linear to cyclic representations and compare alpha/beta anomers.",
    controls: [{ id: "cycle", label: "Linear to ring", min: 0, max: 100, value: 68 }],
    render: values => {
      const c = Number(values.cycle ?? 68);
      if (c < 50) {
        return svg(520, 260, `
          <line class="bond" x1="260" y1="42" x2="260" y2="218"/>
          ${[62,94,126,158,190].map((y,i)=>`<circle class="node" cx="260" cy="${y}" r="18"/><text class="small-label" x="260" y="${y+4}">C${i+1}</text><line class="bond" x1="242" y1="${y}" x2="188" y2="${y}"/><line class="bond" x1="278" y1="${y}" x2="332" y2="${y}"/><text class="small-label" x="168" y="${y+4}">${i===1||i===3?"OH":"H"}</text><text class="small-label" x="352" y="${y+4}">${i===1||i===3?"H":"OH"}</text>`).join("")}
          <text class="small-label" x="260" y="242">Fischer projection: horizontal groups project toward the viewer</text>
        `);
      }
      return svg(520, 260, `
        <polygon points="165,132 218,68 306,72 365,134 310,198 218,194" fill="#fff" stroke="#172122" stroke-width="4"/>
        <text class="label" x="165" y="137">O</text>
        ${[[218,68,"CH2OH"],[306,72,"OH"],[365,134,"OH"],[310,198,"OH"],[218,194,"OH"]].map(([x,y,t],i)=>`<line class="bond" x1="${x}" y1="${y}" x2="${x+(i===0?0:22)}" y2="${y+(i%2?-34:34)}"/><text class="small-label" x="${x+(i===0?0:32)}" y="${y+(i%2?-42:46)}">${t}</text>`).join("")}
        <text class="small-label" x="260" y="242">Haworth/chair thinking: alpha/beta depends on the anomeric OH</text>
      `);
    }
  },
  bilayer: {
    title: "Lipid Bilayer Fluidity",
    text: "Adjust unsaturation to show looser packing and greater membrane fluidity.",
    controls: [{ id: "unsat", label: "Unsaturation", min: 0, max: 100, value: 45 }],
    render: values => {
      const u = Number(values.unsat ?? 45) / 100;
      const lipids = Array.from({length: 10}, (_, i) => 82 + i * 40);
      return svg(520, 260, `
        ${lipids.map((x,i)=>`<circle cx="${x}" cy="78" r="13" fill="#19757a"/><path d="M${x-6} 92 C${x-8-u*18} 125 ${x-8+u*20} 146 ${x-10} 178" stroke="#172122" stroke-width="4" fill="none"/><path d="M${x+6} 92 C${x+8+u*18} 125 ${x+8-u*20} 146 ${x+10} 178" stroke="#172122" stroke-width="4" fill="none"/>`).join("")}
        ${lipids.map(x=>`<circle cx="${x}" cy="202" r="13" fill="#19757a"/>`).join("")}
        <rect x="92" y="112" width="18" height="62" rx="9" fill="#d3a047" opacity="${0.25 + u*.5}"/>
        <rect x="356" y="112" width="18" height="62" rx="9" fill="#d3a047" opacity="${0.25 + u*.5}"/>
        <text class="small-label" x="260" y="238">More cis double bonds disrupt packing; cholesterol buffers fluidity.</text>
      `);
    }
  },
  metabolism: {
    title: "Metabolism Overview",
    text: "Separate catabolic energy capture from anabolic biosynthesis, then connect them with carrier molecules.",
    controls: [{ id: "flow", label: "Flow emphasis", min: 0, max: 100, value: 50 }],
    render: values => {
      const f = Number(values.flow ?? 50) / 100;
      return svg(520, 260, `
        <rect x="80" y="70" width="132" height="90" rx="8" fill="#dfe8fa" stroke="#315fa8"/><text class="label" x="146" y="108">Catabolism</text><text class="small-label" x="146" y="132">break down</text>
        <rect x="308" y="70" width="132" height="90" rx="8" fill="#dff0e8" stroke="#19757a"/><text class="label" x="374" y="108">Anabolism</text><text class="small-label" x="374" y="132">build up</text>
        <path class="hot" d="M212 98 C252 52 288 52 308 98" marker-end="url(#arrow)" opacity="${1-f+.2}"/>
        <path class="hot blue" d="M308 136 C260 198 220 188 212 136" marker-end="url(#arrow)" opacity="${f+.2}"/>
        <text class="small-label" x="260" y="48">ATP, NADH, NADPH, acetyl-CoA</text>
        <text class="small-label" x="260" y="220">Energy coupling makes unfavorable work possible.</text>
      `);
    }
  },
  glycolysis: pathwayDemo("Glycolysis", ["Glucose", "G6P", "F6P", "F1,6BP", "G3P", "1,3BPG", "3PG", "2PG", "PEP", "Pyruvate"], "Investment, cleavage, payoff: net 2 ATP and 2 NADH per glucose."),
  tca: pathwayDemo("Citric Acid Cycle", ["Acetyl-CoA", "Citrate", "Isocitrate", "α-KG", "Succinyl-CoA", "Succinate", "Fumarate", "Malate", "OAA"], "One turn yields 3 NADH, 1 FADH2, 1 GTP, and 2 CO2."),
  etc: pathwayDemo("Electron Transport Chain", ["NADH", "I", "Q", "III", "cyt c", "IV", "O2", "ATP synthase"], "Electron flow pumps protons; the gradient powers ATP synthase."),
  betaoxidation: pathwayDemo("Beta-Oxidation", ["Acyl-CoA", "FADH2", "Hydration", "NADH", "Thiolysis", "Acetyl-CoA", "Shorter acyl-CoA"], "Each spiral releases acetyl-CoA and shortens the fatty acyl chain."),
  proteinmet: pathwayDemo("Protein Metabolism", ["Amino acid", "Transamination", "Glutamate", "NH4+", "Urea cycle", "Urea", "Carbon skeleton"], "Track nitrogen disposal separately from carbon skeleton energy use."),
  replication: pathwayDemo("DNA Replication Fork", ["Helicase", "Primase", "Leading strand", "Lagging strand", "Okazaki fragments", "Ligase"], "DNA polymerases synthesize 5-prime to 3-prime, forcing lagging-strand discontinuity."),
  translation: pathwayDemo("Central Dogma", ["DNA", "pre-mRNA", "mRNA", "Ribosome", "tRNA", "Peptide", "Protein"], "Information flows through base pairing, codons, anticodons, and peptide-bond formation.")
};

function pathwayDemo(title, steps, text) {
  return {
    title,
    text,
    controls: [{ id: "step", label: "Step", min: 0, max: steps.length - 1, value: 0 }],
    render: values => {
      const step = Number(values.step ?? 0);
      const gap = 360 / Math.max(1, steps.length - 1);
      return svg(520, 260, `
        <line class="bond" x1="80" y1="130" x2="440" y2="130"/>
        ${steps.map((name,i)=> {
          const x = 80 + i * gap;
          return `<circle cx="${x}" cy="130" r="${i===step?18:12}" fill="${i<=step?"#19757a":"#fff"}" stroke="#172122" stroke-width="2"/><text class="small-label" x="${x}" y="${i%2?178:88}">${name}</text>`;
        }).join("")}
        <text class="small-label" x="260" y="232">${text}</text>
      `);
    }
  };
}

function ringGlyph(x, y, count, active) {
  const first = `<polygon points="${x},${y - 28} ${x + 26},${y - 14} ${x + 26},${y + 14} ${x},${y + 28} ${x - 26},${y + 14} ${x - 26},${y - 14}" fill="${active ? "#fff0df" : "#fff"}" stroke="#172122" stroke-width="2"/>`;
  const second = count > 1
    ? `<polygon points="${x + 38},${y - 22} ${x + 59},${y - 10} ${x + 55},${y + 15} ${x + 31},${y + 25} ${x + 14},${y + 8} ${x + 20},${y - 14}" fill="${active ? "#fff0df" : "#fff"}" stroke="#172122" stroke-width="2"/>`
    : "";
  const piLines = `<line class="hot" x1="${x - 15}" y1="${y - 12}" x2="${x + 15}" y2="${y - 12}" opacity="${active ? 1 : 0.35}"/><line class="hot" x1="${x - 16}" y1="${y + 13}" x2="${x + 15}" y2="${y + 13}" opacity="${active ? 1 : 0.35}"/>`;
  return `${first}${second}${piLines}`;
}

function svg(width, height, body) {
  return `
    <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 8 3.5, 0 7" fill="#b94b30"></polygon>
        </marker>
      </defs>
      ${body}
    </svg>`;
}

const els = {
  categories: document.querySelector("#categoryList"),
  cards: document.querySelector("#cards"),
  search: document.querySelector("#searchBox"),
  activeTitle: document.querySelector("#activeTitle"),
  activeCategoryLabel: document.querySelector("#activeCategoryLabel"),
  demoTitle: document.querySelector("#demoTitle"),
  demoText: document.querySelector("#demoText"),
  demoCanvas: document.querySelector("#demoCanvas"),
  demoControls: document.querySelector("#demoControls"),
  favorites: document.querySelector("#favoritesList")
};

function init() {
  renderCategories();
  bindEvents();
  render();
  renderDemo();
}

function bindEvents() {
  els.search.addEventListener("input", event => {
    state.query = event.target.value.trim().toLowerCase();
    render();
  });

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      state.filter = button.dataset.filter;
      render();
    });
  });

  document.querySelector("#clearFavorites").addEventListener("click", () => {
    state.favorites = [];
    saveFavorites();
    render();
  });

  document.querySelector("#exportFavorites").addEventListener("click", exportFavorites);
  document.querySelector("#printPlan").addEventListener("click", () => window.print());
}

function renderCategories() {
  const all = [{ name: "All", count: resources.length }].concat(categories.map(name => ({
    name,
    count: resources.filter(item => item.category === name).length
  })));
  els.categories.innerHTML = "";
  all.forEach(category => {
    const button = document.createElement("button");
    button.className = `category-btn ${state.category === category.name ? "active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span>${category.name}</span><span class="count">${category.count}</span>`;
    button.addEventListener("click", () => {
      state.category = category.name;
      renderCategories();
      render();
    });
    els.categories.appendChild(button);
  });
}

function getVisibleResources() {
  return resources.filter(item => {
    const categoryMatch = state.category === "All" || item.category === state.category;
    const filterMatch = state.filter === "all" || item.tags.includes(state.filter);
    const text = `${item.title} ${item.summary} ${item.category} ${item.tags.join(" ")}`.toLowerCase();
    const queryMatch = !state.query || text.includes(state.query);
    return categoryMatch && filterMatch && queryMatch;
  });
}

function render() {
  const visible = getVisibleResources();
  els.activeCategoryLabel.textContent = state.category === "All" ? "All categories" : state.category;
  els.activeTitle.textContent = `${visible.length} visualization option${visible.length === 1 ? "" : "s"}`;
  els.cards.innerHTML = "";

  if (!visible.length) {
    els.cards.innerHTML = `<p class="empty">No matches yet. Try clearing the search or switching filters.</p>`;
  }

  visible.forEach(item => {
    const template = document.querySelector("#cardTemplate").content.cloneNode(true);
    const card = template.querySelector(".card");
    template.querySelector(".badge").textContent = item.category;
    template.querySelector("h3").textContent = item.title;
    template.querySelector(".summary").textContent = item.summary;
    template.querySelector(".chips").innerHTML = item.tags.map(tag => `<span class="chip">${tag}</span>`).join("");
    template.querySelector(".prompts").innerHTML = item.prompts.map(prompt => `<div class="prompt">${prompt}</div>`).join("");

    const save = template.querySelector(".save");
    const saved = state.favorites.includes(item.id);
    save.classList.toggle("saved", saved);
    save.textContent = saved ? "★" : "☆";
    save.addEventListener("click", () => toggleFavorite(item.id));

    const demoButton = template.querySelector(".demo-button");
    demoButton.addEventListener("click", () => {
      state.demo = item.demo;
      renderDemo();
      document.querySelector(".live-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const link = template.querySelector(".resource-link");
    link.href = item.link || "#";
    link.textContent = item.link ? "Open resource" : "No external link";
    card.dataset.id = item.id;
    els.cards.appendChild(template);
  });

  renderFavorites();
}

function renderDemo() {
  const demo = demos[state.demo] || demos.resonance;
  const values = {};
  els.demoTitle.textContent = demo.title;
  els.demoText.textContent = demo.text;
  els.demoControls.innerHTML = "";

  demo.controls.forEach(control => {
    values[control.id] = control.value;
    const label = document.createElement("label");
    label.innerHTML = `<span>${control.label}</span><input type="range" min="${control.min}" max="${control.max}" value="${control.value}" step="1" data-id="${control.id}"><strong>${control.value}</strong>`;
    els.demoControls.appendChild(label);
  });

  const update = () => {
    els.demoControls.querySelectorAll("input").forEach(input => {
      values[input.dataset.id] = input.value;
      input.nextElementSibling.textContent = input.value;
    });
    els.demoCanvas.innerHTML = demo.render(values);
  };

  els.demoControls.querySelectorAll("input").forEach(input => input.addEventListener("input", update));
  update();
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter(item => item !== id)
    : state.favorites.concat(id);
  saveFavorites();
  render();
}

function saveFavorites() {
  localStorage.setItem("biochemVizFavorites", JSON.stringify(state.favorites));
}

function renderFavorites() {
  const items = state.favorites.map(id => resources.find(item => item.id === id)).filter(Boolean);
  if (!items.length) {
    els.favorites.innerHTML = `<p class="empty">Save useful visuals here as you assemble a class session.</p>`;
    return;
  }
  els.favorites.innerHTML = items.map(item => `<div class="favorite-item"><strong>${item.title}</strong><br>${item.category}</div>`).join("");
}

function exportFavorites() {
  const items = state.favorites.map(id => resources.find(item => item.id === id)).filter(Boolean);
  const text = items.length
    ? items.map((item, index) => `${index + 1}. ${item.title}\nCategory: ${item.category}\nUse: ${item.summary}\nPrompt: ${item.prompts[0]}\nResource: ${item.link}\n`).join("\n")
    : "No favorites saved yet.";
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "biochemistry-visualization-favorites.txt";
  anchor.click();
  URL.revokeObjectURL(url);
}

init();
