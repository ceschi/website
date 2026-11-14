// Single source of truth for site content. Edit here.
//
// HIDE a single entry without deleting it: add hidden:true to its line, e.g.
//   {hidden:true, name:"FRED", desc:"...", url:"..."},
// Remove hidden:true (or set it to false) to show it again.
//
// COMMENT OUT an entry: put // at the start of its line. Safe for the data, codes,
// blogs and contacts lists below (one entry per line, each ending with a comma).
// In the research lists, the last entry of a section ends with ]}, so hide it with
// hidden:true instead of commenting it out.
//
// DELETE an entry: remove its whole line.
// ADD an entry: copy a line in the same list, then change the text and the link.
//
// Resources page sections: set to false to hide a whole section.
window.SITE_DATA = {
// Fallback date for the footer label. When the site is deployed by the GitHub workflow, the label is set
// automatically from the date of the last commit and this value is ignored.
updated: '2025/11/08',
// Your CV: replace the file papers/cv.pdf with your own (same name). The CV button opens a page that shows it.
cv: 'papers/cv.pdf',
// Charts next to every research entry. true = show, false = hide all of them.
// An entry shows the grey placeholder until you add  chart:'name.png'  to it (file goes in the charts folder).
showCharts: true,
repec: 'https://ideas.repec.org/f/pfr425.html',
twitter: 'https://twitter.com/emafraschi',
linkedin: 'https://www.linkedin.com/in/emanuele-franceschi-151263235',
// Which part of each picture stays visible when it is cropped. Two numbers: "horizontal% vertical%".
// 0% = left / top edge of the picture, 50% = centre, 100% = right / bottom edge.
// Example: '50% 80%' shows more of the lower part, '50% 20%' more of the upper part.
// Pictures are cropped differently on a laptop (wide strip) and a phone (tall strip), so there are two lists.
imageFocus: {home:'50% 50%', research:'50% 50%', resources:'50% 50%', contacts:'50% 50%', portrait:'50% 18%'},
imageFocusPhone: {home:'50% 50%', research:'50% 50%', resources:'50% 50%', contacts:'50% 50%', portrait:'50% 18%'},
show: {data:true, codes:true, blogs:true},
// Google Analytics measurement ID. Replace G-XXXXXXXXXX with your real ID (looks like G-AB12CD34EF).
// While it is the placeholder, the cookie notice is shown but nothing is sent to Google.
// Set it to '' (empty) to remove tracking and the cookie notice altogether.
analyticsId: 'G-XXXXXXXXXX',
// General texts of the site. Edit the quoted text only.
text: {
 homeRole: "Economist · European Central Bank · Frankfurt",
 homeTagline: "Financial stability, macro-finance and monetary policy.",
 homeBio: "I am a Financial Stability Expert (Economist) in the ECB’s Directorate General for Macroprudential Policy and Financial Stability. In 2021 I received my PhD from the Paris School of Economics and Paris 1 Panthéon-Sorbonne. This is my personal site, where I post updates and material about my research.",
 homeDisclaimer: "This is my private site; the views expressed do not necessarily reflect those of the European Central Bank or the Eurosystem.",
 dataIntro: "Open-access sources, many with APIs.",
 dataNoteBefore: "Administrative data are usually free but need paperwork for confidentiality; private providers (Bloomberg, FactSet, Bureau van Dijk, Compustat) sell granular data. If your institution subscribes to ",
 dataNoteLinkLabel: "Wharton Research Data Services",
 dataNoteLinkUrl: "https://wrds-web.wharton.upenn.edu/wrds/",
 dataNoteAfter: ", you get bulk access to most of them.",
 codesIntro: "Shared for reproducibility. I prefer free languages: R, Python, Julia.",
 cvTitle: "Curriculum vitae",
 cvDownload: "Download PDF",
 cvOpen: "Open in new tab",
 cvFallback: "This browser cannot show the PDF here. Use Download PDF or Open in new tab above.",
 showEmail: "Show email address",
 cookieTitle: "Cookies",
 cookieText: "I use Google Analytics to see which pages and papers are read: country and city, device, browser and the site you came from. It sets cookies and sends this data to Google. Nothing is loaded unless you accept. You can change your choice at any time with “Cookie settings” in the footer.",
 cookieMoreLabel: "Privacy notice",
 cookieAccept: "Accept",
 cookieDecline: "Decline",
 privacyLink: "Privacy",
 cookieSettings: "Cookie settings",
 blogsIntro: "Websites and blogs on economics, scientific and non-specialist alike, in more or less random order. I try to be pluralistic, though some biases are of course present.",
},
// Links under the bio on the home page. "ref" takes the address from the top of this file
// (repec, cv, twitter, linkedin). Hide a link with hidden:true.
homeLinks: [
 {label:"IDEAS RePEc ↗", ref:"repec"},
 {label:"CV", ref:"cv"},
 {label:"X / Twitter ↗", ref:"twitter"},
 {label:"LinkedIn ↗", ref:"linkedin"},
],
// Privacy notice shown at #privacy and linked from the cookie notice and the footer.
// TEMPLATE: replace every [BRACKET] and have the text checked for your situation before publishing.
privacy: {
 "title": "Privacy notice",
 "updated": "Last updated: [DATE]",
 "sections": [
  {
   "h": "Who is responsible",
   "paras": [
    "[YOUR FULL NAME], [POSTAL ADDRESS], [COUNTRY]. To contact me, use the details on the Contacts page of this site."
   ]
  },
  {
   "h": "Hosting",
   "paras": [
    "This site is hosted with GitHub Pages (GitHub, Inc., USA). When you open a page, the hosting provider processes technical data such as your IP address, the date and time and the requested file in its server logs. This is necessary to deliver the site (legitimate interest, Art. 6(1)(f) GDPR).",
    "The fonts and scripts the site needs are served from this site itself, not from other companies."
   ]
  },
  {
   "h": "Cookies and Google Analytics (only with your consent)",
   "paras": [
    "When you first visit, a notice asks whether you accept analytics cookies. If you decline, Google Analytics is not loaded and no analytics cookies are set. Your choice is stored in your browser (local storage, key “ga-consent”) only to remember it.",
    "If you accept, I use Google Analytics 4 (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) to count visits and to see which pages and files are read. The data collected are: pages visited, clicks on links to other sites, file downloads, approximate location (country, region and city, derived from your IP address), device type, browser, operating system, language, the site you came from, and a pseudonymous identifier stored in cookies (_ga and _ga_ followed by the measurement ID). Google states that it does not log or store IP addresses for Google Analytics 4.",
    "I have switched off Google signals and ad personalisation. No age, gender or interest data are collected, and the data are not used for advertising.",
    "Legal basis: your consent (Art. 6(1)(a) GDPR and, for storing and reading information on your device, Section 25(1) of the German TDDDG). You can withdraw consent at any time with “Cookie settings” in the footer. Withdrawal does not affect processing that took place before.",
    "Retention: the cookies expire after 13 months at most, and analytics data are deleted after 14 months.",
    "Google may process data in the United States. Google LLC participates in the EU-US Data Privacy Framework."
   ]
  },
  {
   "h": "Your rights",
   "paras": [
    "You have the right of access, rectification, erasure, restriction of processing, data portability and objection, and the right to withdraw consent at any time. You can complain to a data protection supervisory authority, for example [SUPERVISORY AUTHORITY]."
   ]
  },
  {
   "h": "Messages to me",
   "paras": [
    "If you write to me, I process your message and your email address only to reply."
   ]
  },
  {
   "h": "Links to other sites",
   "paras": [
    "This site links to other websites such as journals, repositories and social networks. Their operators are responsible for their own data processing."
   ]
  }
 ]
},
topics: ['Financial stability', 'Inflation', 'Monetary policy', 'Integration & growth'],
research: [
 {key:'pub',title:'Publications',items:[
  {year:'2022',topics:['Integration & growth'],title:'Institutional integration and productivity growth: Evidence from the 1995 enlargement of the European Union',url:'https://www.sciencedirect.com/science/article/pii/S0014292121002828',venue:'European Economic Review',with:'N. Campos and F. Coricelli',summary:'Had Norway joined the EU in 1995, its average region would have grown about 0.6 pp faster in productivity each year.',abstract:'This paper studies the productivity effects of integration deepening. The identification strategy exploits the 1995 European Union (EU) enlargement, when all candidate countries joined the Single Market but one — Norway — did not join the EU. Our synthetic difference-in-differences estimates on sectoral and regional data suggest that had Norway chosen deeper integration, the average Norwegian region would have experienced an increase in yearly productivity growth of about 0.6 percentage points. The method also helps determine the sources of heterogeneity, highlighting higher costs of the missed deeper integration for more peripheral regions and the industrial sector.',links:[{label:'IZA',url:'https://docs.iza.org/dp14834.pdf'},{label:'CEPR',url:'http://www.cepr.org/active/publications/discussion_papers/dp.php?dpno=16696'}]},
  {year:'2021',topics:['Monetary policy','Inflation'],title:'Taylor Rule and liquidity in financial markets',url:'https://raw.githubusercontent.com/ceschi/ceschi.github.io/master/papers/main_file_RE.pdf',venue:'Revue Économique',summary:'The Fed’s reaction to expected inflation is unstable, and turns passive when uncertainty and slowdown loom.',abstract:'We study the parameter instability in the monetary policy rule followed by the US Federal Reserve since WWII. We find evidence across a variety of econometric methods of fundamental instability, in particular in the parameter governing the reaction to inflation expectations — the Taylor Principle. We augment the rule to account for liquidity conditions and find consistent violations of the Taylor Principle without sunspot inflation episodes. Studying multiple regimes, we find that when uncertainty and economic slowdown loom, the Fed reacts passively to expected inflation.',links:[{label:'Journal',url:'https://www.cairn.info/revue-economique-2021-1-page-103.htm'},{label:'WP version (2019)',url:'https://hal-pse.archives-ouvertes.fr/PSE_WP/halshs-02978550'},{label:'Companion dataset',url:'https://drive.google.com/open?id=1go7U2rdVRJjuempgO891Hl3aljsn2o5w'}]}]},
 {key:'policy',title:'Policy work',items:[
  {year:'2025',topics:['Inflation','Monetary policy'],title:'A strategic view on the economic and inflation environment in the euro area',url:'https://www.ecb.europa.eu/pub/pdf/scpops/ecb.op371.en.pdf',venue:'ECB Occasional Paper No. 371',with:'the contributors of Workstream 1, 2025 ECB Strategy Review',summary:'What the recent inflation experience means for the environment the ECB is likely to face, and for its toolkit.',abstract:'This report offers a strategic view on the economic and inflation environment in the euro area as part of the monetary policy strategy assessment 2025. It reassesses the factors shaping the inflation and economic environment in light of the recent inflation experience, analyses changes in structural factors and examines the implications for the inflation environment the ECB is likely to face. It also draws conclusions on enhancements to the analytical toolkit and inflation forecasting.'},
  {year:'2025',topics:['Financial stability'],title:'Investment funds’ financial leverage — material and systemic?',url:'https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/focus/2025/html/ecb.mpbu202501_focus02.en.html',venue:'ECB Macroprudential Bulletin 26',with:'S. Kordel and O. Schwartz Blicke',summary:'How much leverage euro area funds take on via repo and margin lending — and how systemic they are.',abstract:'The piece discusses the financial leverage that euro area investment funds take on through repurchase transactions and margin lending, and assesses how systemic leveraged investment funds are, drawing on network analysis.'},
  {year:'2024',topics:['Financial stability'],title:'Non-bank financial intermediaries as providers of funding to euro area banks',url:'https://www.ecb.europa.eu/press/financial-stability-publications/fsr/focus/2024/html/ecb.fsrbox202405_04~738c9b3431.en.html',venue:'ECB Financial Stability Review, May 2024',with:'C. Kaufmann and F. Lenoci',summary:'Can banks replace non-bank funding if it suddenly runs off?',abstract:'In recent years euro area banks have increased their reliance on non-bank financial intermediaries (NBFIs) for funding, especially via market-based instruments (bonds, repos). We assess risks to banks in the event of sudden outflows from the NBFI sector, with potential knock-on effects on its ability to finance banks, and evaluate whether banks can replace NBFI funding by tapping other instruments or sectors.'},
  {year:'2023',topics:['Financial stability'],title:'Key linkages between banks and the non-bank financial sector',url:'https://www.ecb.europa.eu/pub/financial-stability/fsr/special/html/ecb.fsrart202305_02~1ff06bc324.en.html',venue:'ECB Financial Stability Review, May 2023, Special Feature B',with:'M. Grodzicki, B. Kagerer, C. Kaufmann, F. Lenoci, L. Mingarelli, C. Pancaro, R. Senner',summary:'Funding is the strongest spillover channel from non-banks to banks, concentrated in a few large banks.',abstract:'Banks are connected to NBFI entities via loans, securities and derivatives exposures, as well as funding dependencies, which expose them to liquidity, market and credit risks. Funding from NBFI entities appears to be the most likely and strongest spillover channel, given that NBFIs keep liquidity buffers primarily as deposits and very short-term repos with banks. Links are highly concentrated in a small group of systemically important banks, whose sizeable capital and liquidity buffers are essential to mitigate spillover risks.',links:[{label:'Full FSR (PDF)',url:'https://www.ecb.europa.eu/pub/pdf/fsr/ecb.fsr202305~65f8cb74d7.en.pdf'}]},
  {year:'2023',topics:['Financial stability'],title:'SESFOD@10 — credit terms and conditions in euro-denominated securities financing and OTC derivatives markets since 2013',url:'https://www.ecb.europa.eu/press/economic-bulletin/articles/2023/html/ecb.ebart202306_03~9412caf048.en.html#toc8',venue:'ECB Economic Bulletin 6/2023, Box 1',with:'P. Molitor, S. Kordel, V. Macchiati, P. Kotlarz',summary:'How representative the ECB’s SESFOD survey is of the repo and derivatives markets.',abstract:'In this box I quantify the representativeness of the ECB SESFOD survey in the repo and derivatives markets. SESFOD banks have a large footprint in both, especially in repo. Representativeness is lower in derivatives, especially in the over-the-counter/bilateral space.'}]},
 {key:'wip',title:'Work in progress',items:[
  {year:'2025',topics:['Inflation','Monetary policy'],title:'Cast out the pure? Inflation and relative prices on both sides of the Atlantic',url:'https://www.ecb.europa.eu/press/conferences/shared/pdf/20250929_inflation_conference/05_Poster-paper_Parker.pdf',with:'C. Osbat and M. Parker',status:'Draft on request',summary:'Relative prices, not “pure” inflation, explain most of the 2021–22 surge and its fall.',abstract:'What drives inflation — domestic monetary policy or relative price shocks? During decades of low inflation, large relative price shocks, notably energy, seem to have accounted for the bulk of inflation movements. We estimate the role of “pure” inflation versus relative prices using a modification of Reis and Watson (2010). Relative prices substantially explain the rise in inflation during 2021–2022 and its subsequent fall; we find little support for “pure” inflation as a material cause of recent dynamics.'},
  {year:'',topics:['Inflation'],title:'Inflation persistence before and after the 2021–2023 reflation',url:'https://github.com/ceschi/ceschi.github.io/blob/master/papers/inflationpers.pdf',summary:'US inflation persistence is back to early-2000s levels, across five measures and three methods.',abstract:'Until the 2021–2023 spike, US inflation was comparable to a white-noise process, with very low persistence. The reflation brought persistence back to early-2000s levels. We find this consistently across five measures of US inflation and three methods of increasing sophistication — frequentist, Bayesian and deep neural networks. Before the recent rise, persistence had been decreasing since the mid-90s. Current, higher persistence also suggests monetary transmission to realised inflation is slower than before.',links:[{label:'Short slides',url:'https://drive.google.com/file/d/1Hm_ipSZjW0shefz2pBhUj40VTRoIJgAH/view?usp=sharing'}]},
  {year:'2020',topics:['Monetary policy'],title:'A simple model with liquidity',url:'https://github.com/ceschi/ceschi.github.io/blob/master/papers/EFranceschi_liquidity.pdf',summary:'Adding liquid bonds breaks the New Keynesian need for aggressive policy.',abstract:'We propose a model with liquid bonds, money and illiquid assets. This simple set-up breaks the New Keynesian requirement for aggressive monetary policy. We study how liquidity affects portfolio choices and shock propagation: inflation displays higher inertia under a stable, accommodative stance. We also study how a liquidity dry-up propagates through the economy.',links:[{label:'PSE Working Paper',url:'https://hal-pse.archives-ouvertes.fr/PSE_WP/halshs-02978552'}]},
  {year:'',topics:['Financial stability'],title:'Euro area investment funds leverage',with:'L. Cappiello and O. Schwartz Blicke',status:'In progress',summary:'Aggregate leverage is low, but risk clusters in a handful of funds.',abstract:'We combine granular information on the asset holdings of euro area investment funds with transaction-level data on repo and margin borrowing, describing funds’ financial leverage and how it evolved over the recent hiking cycle. In aggregate leverage is low, though some financial stability risk is heavily clustered in a few funds, whose centrality and net positions we study.'},
  {year:'',topics:['Financial stability'],title:'Financial conglomerates: blurred lines between banks and non-banks',status:'Early stage',summary:'Mapping the networks of banks and non-banks inside euro area conglomerates.',abstract:'Combining detailed ownership data on euro area financial entities with supervisory reports, I reconstruct the networks of financial conglomerates — often a large supervised bank plus a host of highly specialised NBFI entities — and investigate the synergies and interactions among them.'}]},
 {key:'long',title:'Longer-term projects',items:[
  {year:'',topics:['Inflation','Monetary policy'],title:'Sectoral inflation and optimal monetary policy'},
  {year:'',topics:['Monetary policy'],title:'ML-VAR: a machine learning approach to time-series macroeconometrics'}]},
 {key:'other',title:'Other',items:[
  {year:'2015',topics:['Integration & growth'],title:'Effects of labour market frictions and knowledge spillover on structural change',venue:'ETE Master’s thesis, supervised by Prof. F. Coricelli',summary:'A two-sector model of how labour frictions shape structural change.',abstract:'A simple two-sector model accounts for the effect of labour market frictions and sectoral productivity differentials on structural change dynamics, intended as the industry labour share.'}]}
],
data: [
 {name:"US micro-macro data",desc:"In-house database blending micro and macro data on the US economy, built by the scripts below.",url:"https://github.com/ceschi/us_macro_data"},
 {name:"IMF data",desc:"The World Economic Outlook database: macro time series for a wide range of countries.",url:"http://www.imf.org/en/Data"},
 {name:"EUKLEMS",desc:"Industry-level time series for developed countries in a consistent accounting framework.",url:"https://euklems.eu/"},
 {name:"FRED",desc:"St. Louis Fed data on US GDP, rates, financial indicators and money, with a handy API.",url:"https://fred.stlouisfed.org/"},
 {name:"FRED-MD & FRED-QD",desc:"Two large US macro datasets at monthly and quarterly frequency.",url:"https://research.stlouisfed.org/econ/mccracken/fred-databases/"},
 {name:"OECD",desc:"Data from the Organisation for Economic Co-operation and Development.",url:"https://data.oecd.org/"},
 {name:"World Bank WDI",desc:"World Development Indicators, also accessible via API.",url:"http://data.worldbank.org/data-catalog/world-development-indicators"},
 {name:"Penn World Table",desc:"Real national accounts in dollars, for a unified, comparable framework.",url:"https://cid.econ.ucdavis.edu/pwt.html"},
 {name:"Groningen GGDC",desc:"Long-run comparable sectoral productivity for Africa, Asia and Latin America.",url:"https://www.rug.nl/ggdc/"},
 {name:"Policy Uncertainty",desc:"Baker, Bloom and Davis’ Economic Policy Uncertainty index.",url:"http://www.policyuncertainty.com"},
 {name:"Bank of Italy HH survey",desc:"Italian household balance sheets in great detail.",url:"https://www.bancaditalia.it/statistiche/tematiche/indagini-famiglie-imprese/bilanci-famiglie/"},
 {name:"Philadelphia Fed real-time data",desc:"Real-time vintages of policy-relevant US variables.",url:"https://www.philadelphiafed.org/research-and-data/real-time-center/atsix"},
 {name:"BIS",desc:"Financial statistics across countries and many dimensions.",url:"https://www.bis.org/statistics/index.htm"},
 {name:"BLS",desc:"A trove of US data with granular occupational breakdowns.",url:"https://www.bls.gov/data/"},
 {name:"rOpenSci open data",desc:"Non-economic open data to complement empirical work.",url:"https://ropensci.org/blog/2020/05/19/covid-19-open-data/"},
 {name:"Paris open data",desc:"Open data from the city of Paris.",url:"https://opendata.paris.fr/pages/home/"},
 {name:"Barcelona open data",desc:"Open data from the city of Barcelona.",url:"https://opendata-ajuntament.barcelona.cat/data/en/dataset"},
],
codes: [
 {tag:'R · data pipeline',name:'us_macro_data',desc:'Gathers, harmonises and updates US data. Installs required packages on first run.',url:'https://github.com/ceschi/us_macro_data'},
 {tag:'Dataset · txt',name:'US_data.txt',desc:'Processed output of the pipeline above.',url:'https://raw.githubusercontent.com/ceschi/us_macro_data/master/processed_data/US_data.txt'},
 {tag:'GitHub',name:'github.com/ceschi',desc:'All my public repositories.',url:'https://github.com/ceschi'},
 {tag:'Python · Julia',name:'QuantEcon',desc:'Sargent & Stachurski’s lectures on macroeconomics, with code and notebooks.',url:'https://quantecon.org/'}
],
blogs: [
 {name:"The Grumpy Economist",note:"John Cochrane’s blog",url:"https://johnhcochrane.blogspot.com/"},
 {name:"VoxEU",note:"The CEPR policy portal",url:"http://voxeu.org/"},
 {name:"Noahpinion",note:"Noah Smith’s blog",url:"http://noahpinionblog.blogspot.com/"},
 {name:"La Voce",note:"Dissemination blog, in Italian",url:"http://www.lavoce.info/"},
 {name:"Bloomberg Opinion",note:"Currently debated topics",url:"https://www.bloomberg.com/opinion"},
 {name:"The Economist",note:"Needless to say",url:"https://www.economist.com/"},
 {name:"Paul Krugman",note:"His column",url:"https://www.nytimes.com/column/paul-krugman"},
 {name:"Mainly Macro",note:"Simon Wren-Lewis’ blog",url:"https://mainlymacro.blogspot.com"},
 {name:"The CORE project",note:"A hands-on way of teaching econ",url:"http://www.core-econ.org/"},
 {name:"Thomas Piketty",note:"Blog in Le Monde, in French",url:"http://piketty.blog.lemonde.fr/"},
 {name:"Eco Notepad",note:"Banque de France dissemination blog",url:"https://blocnotesdeleco.banque-france.fr/en"},
 {name:"Liberty Street Economics",note:"New York Fed’s blog",url:"http://libertystreeteconomics.newyorkfed.org/"},
 {name:"Econbrowser",note:"Menzie Chinn and James Hamilton",url:"http://econbrowser.com/"},
 {name:"CEPII",note:"CEPII’s blog",url:"http://www.cepii.fr/BLOG/bi/blog.asp"},
 {name:"Job Openings for Economists",note:"From the AEA",url:"https://www.aeaweb.org/joe/"},
 {name:"Acemoglu facts",note:"Because we all love Daron",url:"https://daronacemoglufacts.tumblr.com/"},
 {name:"MacroMania",note:"David Andolfatto’s blog",url:"http://andolfatto.blogspot.com/"},
 {name:"Noise from Amerika",note:"Italian economists in the US on Italy",url:"http://noisefromamerika.org/"},
 {name:"Marginal Revolution",note:"Tyler Cowen’s blog",url:"http://marginalrevolution.com/"},
 {name:"INET",note:"Institute for New Economic Thinking",url:"https://www.ineteconomics.org/perspectives/blog"},
 {name:"Europa o no?",note:"Luigi Zingales’ blog (IT/EN)",url:"https://europaono.com/"},
 {name:"Economist’s View",note:"Mark Thoma’s link collector",url:"http://economistsview.typepad.com/"},
],
contacts: [
 // Emails are stored encoded (base64) and only decoded when a visitor clicks "Show email address".
 // To add one: encode the address (see guide.md section 3.7) and paste the result in email64.
 {label:"ECB", email64:"ZW1hbnVlbGUuZnJhbmNlc2NoaUBlY2IuZXVyb3BhLmV1"},
 {label:"Personal", email64:"ZW1hbnVlbGUuZnJhbmNlc2NoaUBnbWFpbC5jb20="},
 {label:"RePEc", value:"IDEAS RePEc profile", ref:"repec", target:"_blank"},
 {label:"X / Twitter", value:"@emafraschi", ref:"twitter", target:"_blank"},
 {label:"LinkedIn", value:"LinkedIn profile", ref:"linkedin", target:"_blank"},
]
};
