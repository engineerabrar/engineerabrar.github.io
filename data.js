/* ==========================================================================
   PORTFOLIO DATA
   ---------------------------------------------------------------------------
   Everything you'd want to update lives in this one file: your info, socials,
   skills, projects, and certifications. Edit the values below — the rest of
   the site (index.html / main.js) renders itself from this object.
   ========================================================================== */

const portfolioData = {

  personal: {
    name: "Engineer Abrar Hossain Mojumder",
    shortName: "Abrar.",
    role: "Civil Engineer",
    tagline: "Structural Design & 3D Visualization",
    phone: "01992157128",
    email: "apona783@gmail.com", // Messages from the contact form are sent here
    location: "Dhaka, Bangladesh",
    profileImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgM4CU0zIn3eLFtwYwOLwdLFLoGHbrqp5m_Fy91mwPzeifOp0L0briBQN-8MFb6WR31-jXR70KMqLdStKtXOvMQH4WxEX0iv0_h9XMuJvMsmRhYlojjN1cNCWY0WqBqilzDR1KsscCfswHqr5_K_uY7nPN13GWP2Yt3u4VTfOnus9TQQhwsL91L6W_fDxo/s0/ChatGPT%20Image%20Jul%2031,%202026,%2010_53_21%20AM.png",

    // TODO: upload your actual resume PDF into the /assets folder and keep
    // this filename in sync (or point it at a different path/URL).
    resume: "assets/resume.pdf",

    aboutMe: "I am a passionate and highly motivated Civil Engineer based in Dhaka, Bangladesh. Currently honing my academic knowledge while actively involving myself in professional practices. I specialize in structural analysis, high-rise building design, and creating photorealistic 3D architectural visualizations. My goal is to blend modern aesthetics with structural integrity to build resilient future cities."
  },

  typingTexts: [
    "Civil Engineer.",
    "Structural Analyst.",
    "High-Rise Designer.",
    "3D Visualizer.",
    "AutoCAD & ETABS Expert."
  ],

  socials: {
    facebook: "https://www.facebook.com/abrar.hossain.104225",
    linkedin: "",
    behance: "",
    instagram: ""
  },

  skills: [
    { icon: "fa-solid fa-pen-ruler", title: "AutoCAD", desc: "Expert in creating precise 2D and 3D architectural layouts, floor plans, and comprehensive detailing." },
    { icon: "fa-solid fa-building-shield", title: "ETABS", desc: "Advanced structural analysis and robust building design specifically targeted for high-rise stability." },
    { icon: "fa-solid fa-cubes", title: "SketchUp", desc: "Rapid and accurate 3D modeling for spatial visualization, architectural planning, and concept validation." },
    { icon: "fa-solid fa-vr-cardboard", title: "Lumion", desc: "Transforming 3D models into stunning photorealistic renders and immersive architectural walkthroughs." },
    { icon: "fa-solid fa-city", title: "Structural Analysis", desc: "Ensuring safety, durability, and standard code compliance in complex, heavy-load structures." },
    { icon: "fa-solid fa-layer-group", title: "High-Rise Projects", desc: "Specialized focus on the structural behavior, wind load, and seismic analysis of tall buildings." }
  ],

  // "category" powers the filter tabs above the project grid — add as many
  // distinct categories as you like, an "All" tab is generated automatically.
  projects: [
    { code: "DWG-01", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3Q3CykpmgR2tALOY-HEDNGHwrAqt-pBFBA68EMYsGyNDhFeAFg1mkynt17rui9yONMc_zQ6_ND6_L15Le8X61JRuh3HzV_8QJ7_F3DF0qDcCOezrU9lzTyZ-yWRFtlUGgeX-UhXbuiCo40ozgYMYSGJMoNpeFS4a4Chn4CQ0mOkwPCfR8hcjapybl6iI/s0/Screenshot%202026-07-31%20105904.png", title: "Modern High-Rise Complex", type: "ETABS Analysis & AutoCAD", category: "Structural" },
    { code: "DWG-02", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-IQWqA1rPJu0sDyAgY5LogDcP7xxgdv7pouk1Cnp_qGrAhhdgzSDwbdXhyUiR9hcC6vBQtAbIHuxKXouDDADo1i51oC-I0P6TF76E6dVBzngS1qC7tlz2QjSjzvju39Pt0oiZUo6rT5pABKL9ksI-pBLhL1SAO_n8uC7W4jqgIS82GQYaGuYq1Nxjjfc/s0/Screenshot%202026-07-31%20110030.png", title: "Commercial Building Layout", type: "Structural Design", category: "Structural" },
    { code: "DWG-03", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoUH9BlRafI_kYWPA7CsJZMt6ksfblvMYejolVRRTnKBvTEdqQ6swtSnn-9sPmv3JyUuICxkGncrUc98BNMCxGAwAtXutZr_8xUD_HrN7GUdcv8arXdVxqPW3jcp1NZL_7seZYeubVPEmq_7Lma4vWN-l7Iqylvj5g7gQ6SINWER-9weY68TWaOL1ZRkM/s0/Screenshot%202026-07-31%20110058.png", title: "Residential Tower 3D", type: "SketchUp & Lumion", category: "Visualization" },
    { code: "DWG-04", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu0UMx2_pFYQHEaGe7bx_-qDYrB0UXvHJ-Rd63Xu0mLyyenDP42IRmk_Vl-zEM0h9eQMj5jkR-x44SzrexXUR9otajcDWPeEsKBY9qTGtCfQe9f4zjOW2bL6U39YCMcv1cGYQRjwHo9n1f7av1a5QITdcX9BSofiMvYuW3Z0HvOK-RGhHEgZob4rN3Qig/s0/8eb4979c24fb142005144e87afefbf2f.jpg", title: "Urban Infrastructure", type: "Civil Engineering", category: "Infrastructure" },
    { code: "DWG-05", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN3u4IqzXhOSMa2InRLw6qr8XUmNrEy-XTh9TV2aIrKUk4b2BqbfHIdPSuMOyUBDx0WnQuZkHGRcszyLFW-Vng2avIQm1j8r9ZYP7AY8PjkKtU5KdllRi1qGqrHOTWxvp_QL9L6Ai48xERkW1oyiEeLMxUzvAXY7i51FiK3UQPRSCHbrv5HFle8-l_CxY/s0/1f9b94f1f41236dd491e6b821cb117ed.jpg", title: "Photorealistic Exterior", type: "Lumion Render", category: "Visualization" }
  ],

  // TODO: replace these placeholders with your real certifications,
  // issuing organizations, and years — icon can be any Font Awesome class.
  certifications: [
    { icon: "fa-solid fa-graduation-cap", title: "B.Sc. in Civil Engineering", issuer: "Add your university", year: "Add year" },
    { icon: "fa-solid fa-certificate", title: "AutoCAD Professional Certification", issuer: "Add issuing organization", year: "Add year" },
    { icon: "fa-solid fa-building-shield", title: "ETABS Structural Analysis Training", issuer: "Add issuing organization", year: "Add year" },
    { icon: "fa-solid fa-vr-cardboard", title: "SketchUp & Lumion Visualization", issuer: "Add issuing organization", year: "Add year" }
  ],

  mapEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.0097779313!2d90.33728807903494!3d23.78077774450226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1690800000000!5m2!1sen!2sus"
};
