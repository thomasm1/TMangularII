/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	// End D3 -- map
	__webpack_require__(5);
	/*
	$('#tomList a').on('hover', function (e) {
		e.preventDefault()
		$(this).tab('show')
	  })
	*/

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	
	
	console.log('blog-draft.js looaaaded');
	
	document.getElementById("blogtext").innerHTML = `<div id="top2"></div><div id="18-04-14" class="           avr 18-03 -24"> 
	<hr />  
	<a href="#top2"><button>Top</button></a> 
	 &nbsp; 
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>  
	<h5 class="  subdailytech">Sociology Tomorrow!</h5>  
	<p class="  author">by Thomas Maestas, MA</p>  
	<h6    class="  chapternumber">April 14-15, 2018<br /> 
	Weekend</h6>   
	<h6    class="dailytitle chapternumber">Clash of the Brick &amp; Mortars against Online Stores
	</h6>  
	<p class="firstparagraph">This week, the Supreme Court   revisits its 1992 decision not requiring state sales taxes for online purchases.<sup>1</sup> Although big-box stores like Amazon, Walmart, etc. <i>do</i> pay state taxes among the 45 states requiring it, small- and medium-sized retailers do not need to collect sales taxes in any state where they do not have physical presence, also known as "nexus." But, beginning this Tuesday, the free ride may come to an  end; this includes small retailers that comprise half of Amazon's 3rd-party online sales.
	</p>
	<p class="quote">  
	
	A reversal could mean that all online retailers must collect sales tax everywhere. It's an issue that brick-and-mortar retailers insist will provide a level playing field with online competitors, and help to provide state and local governments with the tax revenue they deserve.<sup>2</sup></p>
	<p> Livelihoods hang in the balance, so whatever the gavel settles on, let's hope for the best! The Blockbuster-ization of so many brick-and-mortars seems to claim a new victim every month--recently Toys 'R Us  meeting its demise.<sup>3</sup> So, with as many that have disappeared, big and small-, its a curiosity if maybe Tuesday breathes life into the boarded store-fronts across America. I think others share my view that shopping is more than shiny packaging at the doorstep: it's much more the ceremony and gala in the store - a  real shared moment with strangers, acquaintances and loved ones that makes for better packaging, a package embellished with a story.   
	</p>
	<p class="cite">1.<a href="https://www.forbes.com/sites/janetwburns/2018/04/15/supreme-court-decision-could-bring-sales-tax-to-more-online-shopping/#2a0ea38f3daf" target="_blank">https://www.forbes.com/sites/janetwburns/2018/04/15/supreme-court-decision-could-bring-sales-tax-to-more-online-shopping/#2a0ea38f3daf
	</a> </p>
	<p class="cite">2.<a href="http://money.cnn.com/2018/04/15/technology/online-purchases-sales-taxes-supreme-court/index.html" target="_blank">http://money.cnn.com/2018/04/15/technology/online-purchases-sales-taxes-supreme-court/index.html
	</a> </p>
	<p class="cite">3.<a href="https://www.washingtonpost.com/news/business/wp/2018/04/13/this-billionaire-toy-executive-has-a-last-ditch-mission-to-save-toys-r-us-before-its-too-late/?noredirect=on&utm_term=.b3201ad77891" target="_blank">https://www.washingtonpost.com/news/business/wp/2018/04/13/this-billionaire-toy-executive-has-a-last-ditch-mission-to-save-toys-r-us-before-its-too-late/?noredirect=on&utm_term=.b3201ad77891
	</a> </p> 
	</div>
	
	<div id="18-04-13" class="           avr 18-03 -24">
	<hr />
	<a href="#top2"><button>Top</button></a>
	 &nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4> 
	<h5 class="  subdailytech">Musing Blockchain</h5> 
	<p class="  author">by Thomas Maestas, MA</p> 
	<h6    class="  chapternumber">April 13, 2018<br />
	</h6>  
	<h6    class="dailytitle chapternumber"> 
	Bitcoins &amp; Browsers: A Glance at Bitcoin Distributed Mining  
	</h6> 
	<p class="firstparagraph">For all the clamor about Bitcoin's carbon footprint, who doesn't love the sound of money?  And, for all the pitfalls of Iota and the ever-evolving Ethereum (and ever-present threat of forking), Bitcoin stands true among the crypto-currency platforms. Keeping it Simple,   the very limited, non-crypto-contract may just be Bitcoin's virtue. In a rocky world, <i>a plain, no-frills crypto-currency with stability</i> is incomparable to crypto-contract powers, that are not fully stable, like Ethereum and Iota.  </p>
	<p>So, it's living the dream, but must it be so cost-intensive? Maybe, Maybe not, but where does the future lie for all that hardware? Where does the browser fit into this? First, what's going on under the hood: Note this article is older, but accurate in explanation--except for references to Bitcoin's value! </p>  
	
	<p class="quote">New bitcoins are created roughly every 10 minutes in batches of 25 coins, with each coin worth around $730 at current rates. [A typical home-] computer ... is racing thousands of others to unlock and claim the next batch.</p>
	<p class="quote">
	Let’s start with what it’s not doing.  
	Your computer is not blasting through the cavernous depths of the internet in search of digital ore that can be fashioned into bitcoin bullion. There is no ore, and bitcoin mining doesn’t involve extracting or smelting anything. It’s called mining only because the people who do it are the ones who get new bitcoins, and because bitcoin is a finite resource liberated in small amounts over time, like gold, or anything else that is mined. (The size of each batch of coins drops by half roughly every four years, and around 2140, it will be cut to zero, capping the total number of bitcoins in circulation at 21 million.) But the analogy ends there.
	</p><p class="quote">
	What bitcoin miners actually do could be better described as competitive bookkeeping. Miners build and maintain a gigantic public ledger containing a record of every bitcoin transaction in history. Every time somebody wants to send bitcoins to somebody else, the transfer has to be validated by miners: They check the ledger to make sure the sender isn’t transferring money she doesn’t have. If the transfer checks out, miners add it to the ledger. Finally, to protect that ledger from getting hacked, miners seal it behind layers and layers of computational work—too much for a would-be fraudster to possibly complete.<sup>1</sup>
	</p>
	
	<p>So all of this hard work <i>can be distributed</i> across browsers, which improves its energy-expensive plight. I wouldn't recommend running the demo in the article as it may overheat your device--it had my fan running double-time. But the internals are using JavaScript code for the math. Here's a look under the hood, and it's nice to see the role of <i>JavaScript graphics library, called D3JS, (Data Driven Documents)</i> playing a central role. So, below you see the browser accepting the SHA256 Hash along with the Bitcoin Owner's Address, and the JavaScript in the browser passes off calculations to the C++ running the JavaScript V8 engine on your computer. </p>
	<img src="./dist/img/miningBlockchainD3.PNG" class="zoom" style="overflow:hidden;width:180%;" />
	<p>And so, what does it mean to mine Bitcoins across browsers in a distributed fashion? It is similar to the same concept as Ethereum's direction (or at least idealized by its architect, Vitalik Buterin), in running the Ethereum Virtual Machine blockchain across all the browsers that download its GETH software. Nonetheless, here's a succinct explanation of the browser's role,again from Quartz: </p>
	<p class="quote">Mining’s ultimate purpose is to prevent people from double-spending bitcoins. But it also solves another problem. It distributes new bitcoins in a relatively fair way—only those people who dedicate some effort to making bitcoin work get to enjoy the coins as they are created.
	But because mining is a competitive enterprise, miners have come up with ways to gain an edge. One obvious way is by pooling resources.<br /><br />
	
	
	Your machine, right now, is actually working as part of a bitcoin mining collective that shares out the computational load. Your computer is not trying to solve the block, at least not immediately. It is chipping away at a cryptographic problem, using the input at the top of the screen and combining it with a nonce, then taking the hash to try to find a solution. Solving that problem is a lot easier than solving the block itself, but doing so gets the pool closer to finding a winning nonce for the block. And the pool pays its members in bitcoins for every one of these easier problems they solve.</p>
	<p>In practice, distributed mining pays off quite well if only for the owners of that address. My blogposts on <a href="# <a href="#18-02-28">February 26th  </a> and <a href="#18-02-28">Feb. 28th about blockchain sustainability paint a less rosy picture of tying the currency value to the cost of energy, but multiple solutions and fixes exist to distribute the energy load to laptops on clean renewables, the easy way ... after all, who ever said money had to be so expensive? </a> 
	<p class="cite">1.<a href="https://qz.com/154877/by-reading-this-page-you-are-mining-bitcoins/" target="_blank">https://qz.com/154877/by-reading-this-page-you-are-mining-bitcoins/
	</a> (The article link is harmless, but wouldn't recommend running it if low on batteries--it doubled the fan speed)</p>  	
	
	</div>
	18-02-26
	
	
	<div id="18-04-12" class="           avr 18-03 -24">
	
	  <hr />
	
	   
	
	  <a href="#top2"><button>Top</button></a>
	
	   &nbsp;
	
	  <h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4> 
	
	  <h5 class="  subdailytech">Web Dev Affairs</h5> 
	
	  <p class="  author">by Thomas Maestas, MA</p> 
	
	  <h6    class="  chapternumber">April 12, 2018<br />
	
	
	
	  </h6> 
	
	<h6    class="dailytitle chapternumber">Algorithms and A.I.<br />Scalability  Costs   of Data Privacy Policies
	
	</h6> 
	
	  <p class="firstparagraph">  Data privacy regulation's challenge begins with five million apps between Apple and Android stores. Countless vulnerabilities, not to mention different standards and languages across the app world. <i>Like all Tech problems,</i>scalability requires Tech problem-solving--</i>in this case implying artificial intelligence.  About A.I., Mark Zuckerberg remarks:</p>  
	
	  <p class="quote"> There are some really nuanced questions, though, about how to regulate [data] which I think are extremely interesting intellectually. So the biggest one that I’ve been thinking about is this question of: To what extent should companies have a responsibility to use AI tools to kind of self-regulate content?<sup>1</sup>
	  </p>
	
	  <p>A.I. help <i>would</i> alleviate the largest scalability problem--in the billions of accounts that Facebook now faces. Yet, the idea of robots mulling over data just somehow doesn't sit right. However such musing goes, the soon-to-be-implemented industry standard in Europe is the <i>E.U. General Data Privacy Regulation (GDPR)</i> casts a long shadow: Facebook will need to comply to that regulation for European F.B. consumers. </p>
	  <p>Set for May 14th implementation, the standard was frequently mentioned during the April 12 Congressional Hearings. Interestingly, the GDPR takes a <i>direct stand against the concept of algorithm use with data</i> (without express consent), which begs the A.I. question again. </p>
	
	  <p class="quote">The European law gives individuals the right not to be subject to completely automated  decisions which significantly affect them. These decisions could include credit algorithms that use an individual’s data to decide whether a bank should grant him or her a loan.  
	
	      Privacy International said the clause on automated decisions could allow consumers to challenge Facebook practices like political advertising, which can be sent to users based on algorithms, because the ads are meant to sway users’ votes.<sup>2</sup></p>
	
	  <p>I think the E.U. GDPR data policy model is intelligent - who would have thought to re-humanize our personal data   by taking it away from algorithms, without our permission. I like that, after all, who likes to be unknowingly judged? Least of all by a robot!
	
	
	
	  </p>
	
	      <p class="cite">1.<a href="https://www.wired.com/story/mark-zuckerberg-talks-to-wired-about-facebooks-privacy-problem" target="_blank">https://www.wired.com/story/mark-zuckerberg-talks-to-wired-about-facebooks-privacy-problem
	
	  </a></p>  	
	
	  <p class="cite">3. <a href="https://www.nytimes.com/2018/04/08/technology/a-tough-task-for-facebook-european-type-privacy-for-all.html?ribbon-ad-idx=2&rref=technology&module=Ribbon&version=context&region=Header&action=click&contentCollection=Technology&pgtype=article" target="_blank">https://www.nytimes.com/2018/04/08/technology/a-tough-task-for-facebook-european-type-privacy-for-all.html?ribbon-ad-idx=2&rref=technology&module=Ribbon&version=context&region=Header&action=click&contentCollection=Technology&pgtype=article
	
	  </a> </p>  
	
	</div>
	
	
	
	
	
	
	
	<div id="18-04-11" class="         avr 18-03 -24">
	
	<hr />
	
	 
	
	<a href="#top2"><button>Top</button></a>
	
	 &nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4> 
	
	<h5 class="  subdailytech">Web Dev Affairs</h5> 
	
	<p class="  author">by Thomas Maestas, MA</p> 
	
	<h6    class="  chapternumber">April 11, 2018<br />
	
	
	
	</h6> 
	
	<h6    class="dailytitle chapternumber">When a Pickpocket is Pickpocketed:<br />Part III. The Path toward Sound Data Privacy Policy
	
	</h6> 
	
	<p class="firstparagraph">Day two of Congressional hearings over Facebook's Data Privacy and Protections  were better articulated than the first day. Important dialogue surrounded primarily   two data privacy topics: First, financial transparency surrounding ads and political ads based on the <i>Honest Ads Act</i>, for which Zuckerberg pledged support<sup>1</sup>. 
	
	</p>
	
	<p>Second, and   more far-reaching, discussion of the <i>Browser Act</i> also was raised by several House members. While responding to the Act's sponsor, Marsha Blackburn of Tennessee, Zuckerberg expressed interest in working together. This bill is not well known, but aims to set prudent, consistent guidelines of privacy in the hands of the consumer. </p>
	
	<p class="quote"> [Blackburn's] new bill targets the full spectrum of the internet, including web giants like Amazon and Google. In Blackburn’s words, it moves the government “to a posture where we have one regulator, one set of rules [and] everybody knows who’s in charge,” she told Recode.<sup>3</sup></p>
	
	<p>So, however the power struggle goes, a <i>shared technology lexicon</i> clarifies that shades of meaning make enormous difference, depending on "what" an entity is--whether a technology is a Platform as a Service  versus media outlet or strictly merchant-based. Hopefully, <i>Tech will lead the way</i> without ceding authority in the process: </p>
	
	<p class="quote">
	
	  But the Tennessee lawmaker’s effort hasn’t won any allies among privacy-conscious consumer groups, like the American Civil Liberties Union, which doubt Blackburn’s methods. And her bill has already prompted a whole new round of fierce lobbying by tech and telecom giants, which don’t see the need for any new regulation at all.
	
	  </p> 
	
	<p class="quote">
	
	“I think that, in concept, the idea that there should be stronger privacy standards for edge providers and internet service providers is right,” said Neema Singh Guliani, the legislative counsel at the ACLU.</p>
	
	<p class="quote">
	
	But Blackburn, she added, should have gone about it differently. “The way to do it was not ... [through] gutting the FCC’s rules; the way to do it was actively working on a replacement.”<sup>3</sup>
	
	</p>
	
	<p>The bill is similar to the European data privacy model, <i>E.U. General Data Protection Regulation(GDPR)</i>, which serves as point of reference.<sup>2</sup> On May 14,   Europeans will   be implementing a pan-internet--edge and ISP--data protections, which include e-mail, Facebook and other apps, equally as for Comcast and Verizon, and industry-wide privacy defaults; Further, opt-in for privacy is more meaningful separate, and  not relegated to the main Terms and Conditions.<sup>3</sup></p>
	
	<p>Policy regulation in other industries--exemplified by medical <i>HIPAA</i>, financial <i>Fair Credit   Reporting Act</i>--reveals the noticeable absence of similar policy in Tech. Tech's regulation is however necessarily far more complex, involving at minimum trade-offs between app-to-app data portability and new boundaries for different sources and forms of data. Clearly, the browser-based, high-security HTTPS Encryption I mentioned in my <a href="#18-04-06">April 6 three-part series on Progressive Web Apps </a>will undoubtedly be used for quick, inexpensive data privacy compliance, <i>a real boon for JavaScript developers</i>--as if there wasn't enough work already!
	
	</p>
	
	
	
	
	
	
	
	<p class="cite">2. <a href="https://www.eugdpr.org" target="_blank">https://www.eugdpr.org
	
	</a></p>  
	
	
	
	        <p class="cite">3. <a href="https://www.recode.net/2017/5/24/15685870/new-republican-privacy-bill-tech-telecom-lobbying-fcc-congress" target="_blank">https://www.recode.net/2017/5/24/15685870/new-republican-privacy-bill-tech-telecom-lobbying-fcc-congress
	
	        </a></p>  
	
	    <p class="cite">3. <a href="https://www.nytimes.com/2018/04/08/technology/a-tough-task-for-facebook-european-type-privacy-for-all.html?ribbon-ad-idx=2&rref=technology&module=Ribbon&version=context&region=Header&action=click&contentCollection=Technology&pgtype=article" target="_blank">https://www.nytimes.com/2018/04/08/technology/a-tough-task-for-facebook-european-type-privacy-for-all.html?ribbon-ad-idx=2&rref=technology&module=Ribbon&version=context&region=Header&action=click&contentCollection=Technology&pgtype=article
	
	    </a> </p>  
	
	<p class="cite">4. <a href="https://www.reuters.com/article/us-facebook-privacy-zuckerberg/zuckerberg-resists-effort-by-u-s-senators-to-commit-him-to-regulation-idUSKBN1HH1CU" target="_blank">https://www.reuters.com/article/us-facebook-privacy-zuckerberg/zuckerberg-resists-effort-by-u-s-senators-to-commit-him-to-regulation-idUSKBN1HH1CU
	
	</a></p>  
	
	
	
	</div> 
	
	
	
	
	
	
	
	<div id="18-04-10" class="      avr 18-03 -24">
	
	<hr />
	
	
	
	<a href="#top2"> <button>Top</button> </a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4> 
	
	<h5 class="  subdailytech">Sociology Tomorrow!</h5> 
	
	<p class="  author">by Thomas Maestas, MA</p> 
	
	<h6    class="  chapternumber">April 10, 2018<br /> 
	
	</h6> 
	
	<h6    class="dailytitle chapternumber">When a Pickpocket is Pickpocketed:<br />  Part II:  "Semantic Polymorphism", i.e., Double Talk about  Data 
	
	</h6> 
	
	<p class="firstparagraph">Mark Zuckerberg daftly played word-tennis with   Senators in the first day of Congressional Hearings on Facebook Data Privacy issues. Although, in this case, <i>there were two, at times three, tennis balls at play!</i> What I mean is that "Data" and "Personal Data" vaccilated in meaning:  At times, Senators' questions referred to, 1.) personally identifiable data with intimate personal details, full name, location data (sensitive-data); 2.) Other times questions referred to <i>derivative data, i.e. data wrangled, refined, merged with different datasets</i> (composite-data); and,  3.) sometimes the questions meant the harmless, identity-encrypted "ad-data"(anonymized-data); but, usually, Zuckerberg responded to a question about one of these three meanings of "personal data", by responding with a non-abstract fourth: 4.) "Senator, the data, the 'likes' and pictures you share with Facebook, they are your property," Zuckerberg would answer. Well, thank goodness! </p>
	
	<p> My blogpost talks about the shades of meaning: We all know the light-hearted awkwardness when a conversation splits into two separate threads because each party unknowingly follows differing meanings from the same word, or idea.  Austin Powers would have more fun with it, but the Sociologists typically call it  a <i>Semantic Predicament</i>.<sup>1</sup></p> 
	
	<p>In fairness, Mark Zuckerberg volunteered as he himself was not subpoenaed, and therefore this preliminary, public discourse was critical for creating shared meaning and language about a complex topic. By volunteering to engage conversation with Senators, Zuckerberg interrupts the <i>game of telephone</i>; and, Senators engage with their constituents, and lo, America saves two years' of misunderstandings for clear data-protection action now. Bravo, Mark! Zuckerberg is perhaps one of the braver CEOs in American history--Now, he has earned his place right next to Andrew Carnegie--and very similar lives, too. And now, with defined boundaries, <i>Tech has a better roadmap</i> for ethical policy and sensible regulation. So let the data debates begin--but this time,with only one   ball at play! </p>
	
	
	
	<p class="quote"> 
	
	</p>
	
	
	
	<p class="cite">1. <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/j.1467-9558.2008.00324.x" target="_blank">Abend, G. (2008). The meaning of ‘theory’. Sociological Theory, 26(2), 173-199.
	
	</a> <br /><a href="https://pdfs.semanticscholar.org/6df2/9e19cb02b684ee387192dfa4b1d284b88143.pdf" target="_blank">PDF  </a>
	
	</p>  
	
	<p class="cite">2. <a href="https://www.wired.com/story/mark-zuckerberg-talks-to-wired-about-facebooks-privacy-problem" target="_blank">https://www.wired.com/story/mark-zuckerberg-talks-to-wired-about-facebooks-privacy-problem
	
	</a>	</p> 
	
	
	
	</div> 
	
	
	
	
	
	<div id="18-04-09" class="       avr 18-03 -24">
	
	<hr />
	
	 
	
	<a href="#top2"> <button>Top</button> </a>
	
	 &nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4> 
	
	<h5 class="  subdailytech">Sociology Tomorrow!</h5> 
	
	<p class="  author">by Thomas Maestas, MA</p> 
	
	<h6    class="  chapternumber">April 9, 2018<br />
	
	   
	
	  </h6> 
	
	<h6    class="dailytitle chapternumber">When a Pickpocket is Pickpocketed:<br />Part I: Facebook Data Generation and the Deepests Desires of Psychometricians, <i>Without Anonymization</i>   
	
	</h6>
	
	
	
	<p class="firstparagraph">Psychometrics, along with today's biometrics and econometrics, form the 3 primary domains of statistical research. These three fields approach research differently. Psychometricians are less causally oriented, as their tool, "factor analysis"--<i>analyse factorielle</i>--reduces complex data to dimple, categorical forms in order to reconcile <i>quantitative data</i> with intuitive categories.<sup>1.</sup> And this research is great for expanding knowledge about society. But to what end? Who's to say, after all society is both the subject <i>and</i> object of this research. Social scientists are used to these mental gymnastics, yet are bound by a certain ethos of research: <strong>Anonymization, i.e. encrypting or removing personally identifiable information from datasets</strong>. This is the Social Scientists' <i>Oath</i>--a line of decency. </p>
	
	<p>Tomorrow, Tuesday at noon, the world will tune in to hear Mark Zuckerberg's testimony before the U.S. Congress, all to hear about Facebook &amp; company's line of decency. However indecent any revelations may be, I'm not that entirely threatened by the revelations. Maybe I won't admit I'm   prone to Social Media influence, because I chart my course. Here's more from the esteemed Abbott: </p> 
	
	
	
	<p class="quote">“We have ended up believing that social reality is determined in the main by certain general forces, and that these generalities are then specified by combinations of forces, and further limited by various aspects of “individuality,” which in this sense is best understood as idiosyncratic higher order interaction.”<sup>1</sup> </p>
	
	<p>And so, while academic research focuses on the "general forces" to better understand how groups work together, the <strong>bad thing that Zuckerberg did</strong> is not following in the same spirit of generality.<sup>2</sup> They chose to collect and disseminate our "likes" as much as our locations, and ... wait for the ominous music ... the <i><strong>non-FB connected mobile contacts of the Facebook clients' personal cell-phones</strong></i>--flipping through someone's personal desk drawer is definitely pushing the rules of privacy. I addressed this issue in my <a href="#18-03-20">March 20th blog post</a> on Facebook's ethics versus the long-standing data-handling ethics from Academia. Regarding tomorrow's revelations, let's remember to give the guy benefit of the doubt, even if they were handily swindled, while they were swindling us.<sup>3</sup>
	
	</p>
	
	
	
	<p class="cite">1. <a href="http://journals.sagepub.com/doi/abs/10.1177/0049124198027002002" target="_blank">Abbott, A. 1998. “ The Causal Devolution.” Sociological Methods &amp; Research.
	
	
	
	</a></p>
	
	<p class="cite">2. <a href="https://www.nytimes.com/2018/04/08/us/facebook-users-data-harvested-cambridge-analytica.html" target="_blank">https://www.nytimes.com/2018/04/08/us/facebook-users-data-harvested-cambridge-analytica.html
	
	</a></p>
	
	<p class="cite">3. <a href="https://www.wired.com/story/did-cambridge-analytica-access-your-facebook-data/" target="_blank">https://www.wired.com/story/did-cambridge-analytica-access-your-facebook-data/
	
	</a></p>
	
	
	
	
	
	
	
	</div> 
	
	
	
	<div id="18-04-07" class="      avr 18-03 -24">
	
	<hr />
	
	<a href="#top2"> 
	
	  <button>Top</button> </a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4> 
	
	<h5 class="  subdailytech">Web Dev Affairs</h5> 
	
	<p class="  author">by Thomas Maestas, MA</p> 
	
	<h6    class="  chapternumber">April 7-8, 2018<br />
	
	Weekend
	
	</h6> 
	
	<h6    class="dailytitle chapternumber">
	
	On the	Inevitable Demise of   Native Mobile Apps in favor of Progressive Web Apps<br />Part III: The Nuts &amp; Bolts of the App Replacement Process</h6>
	
	
	
	<p class="firstparagraph">Revolutions come and revolutions go, but the <i>2nd app revolution</i> is already underway, albeit quietly.<sup>1</sup> Most media sources refer to a "Native App - Progressive Web App Debate" with emphasis on what the native app can already do--<i>so if it's not broke, don't fix it</i>. However, implications change as the conversation turns to the Hyper Text Transfer Protocol (HTTP) Chrome V-8 JavaScript Engine<sup>2</sup>--you know, the web-app on <i>steroids</i>! </p>
	
	<p>So what kind of steroids you ask? Let us say that the power of the modern browser lies in the open-source JavaScript engine, first C++ variation <i>originally </i>introduced in 2008 by Google's Chromium project. Open-source<i>-who?</i> (close your eyes next paragraph for the jargon-wary!) </p>
	
	<p class="quote">A JavaScript engine is a program or an interpreter which executes JavaScript code. A JavaScript engine can be implemented as a standard interpreter, or just-in-time compiler that compiles JavaScript to bytecode in some form.<sup>2</sup></p>
	
	<p>In plain english, this means that the browser speaks directly to machine code, and this is a big deal. Happily 'roided, the browser now accomodates tasks that the "App" was invented for: <i>To direct service work</i>--image and data loading, caching, storage, offline data, icons, notifica       tions, etc. </p>
	
	<p>Now, through a "Manifest" file provided to the device from the browser, all of those same tasks are accomplished through a series of handshakes, and voil&aacute;: the mobile device doesn't see the difference between a native app and, well ... a <i>progressive app!</i></p>
	
	<p>They say History repeats itself. In our digital lifetime, we have seen <i>record sales</i> surpass digital downloads again (due to streaming); we have seen the originally-decentralized internet return, or at least begin the journey, back to decentralization! And now, we have the once-lowly browser return with a vengeance and strength to replace native apps, with encrypted security, instant loading, and <i>better</i> off-line caching! Do you have an app for that?</p>
	
	
	
	<p class="cite">1. <a href="https://www.forbes.com/sites/forbestechcouncil/2018/03/09/why-progressive-web-apps-will-replace-native-mobile-apps/#3f39b4fa2112" target="_blank">https://www.forbes.com/sites/forbestechcouncil/2018/03/09/why-progressive-web-apps-will-replace-native-mobile-apps/#3f39b4fa2112</a></p>
	
	
	
	<p class="cite">2. <a href="https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e" target="_blank">https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e</a></p>
	
	
	
	</div> 
	
	
	
	
	
	
	
	<div id="18-04-06" class="      avr 18-03 -24">
	
	<hr />
	
	 
	
	<a href="#top2"><button>Top</button></a>
	
	 &nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4> 
	
	<h5 class="  subdailytech">Web Dev Affairs</h5> 
	
	<p class="  author">by Thomas Maestas, MA</p> 
	
	<h6    class="  chapternumber">April 6, 2018<br />
	
	  </h6> 
	
	<h6    class="dailytitle chapternumber">
	
	  On the	Inevitable Demise of   Native Mobile Apps in favor of Progressive Web Apps<br />Part II: New Powers of the Modern   Browser</h6>
	
	
	
	  <p class="firstparagraph">Today's Web Browsers, &agrave; la Firefox, Chrome, Opera, etc., are <i>unabashedly on steroids</i>. And, well they deserve to be--they were here first! More importantly, the browser's native language--JavaScript--has been granted full power of the entire web's backend, i.e. servers, data, todos. This means that the browser achieves instant loading, <i>fully progressive, device-responsive,</i> full <i>HTTPS</i>-encryption security, and coherent cross-browser compatibility. So that your favorite   apps look and interact the same between the array of browser choices. The Washington Post has been lauded for helping pioneer the technology. Most notably, their progressive web app loads in .9 of a second, while their native mobile app requires 2.9 seconds.<sup>3</sup> Not exactly a photo finish!</p>
	
	
	
	  <p class="cite">1. <a href="https://www.techrepublic.com/article/how-progressive-web-apps-promise-to-upend-native-mobile-apps/" target="_blank">https://www.techrepublic.com/article/how-progressive-web-apps-promise-to-upend-native-mobile-apps/</a></p>
	
	
	
	  <p class="cite">2. <a href="https://www.fastcompany.com/3063420/how-google-and-others-are-plotting-the-revenge-of-the-web-app"target="_blank">https://www.fastcompany.com/3063420/how-google-and-others-are-plotting-the-revenge-of-the-web-app</a></p>  
	
	
	
	  <p class="cite">3. <a href="https://www.webbyawards.com/winners/2017/mobile-sites-apps/features-categories/technical-achievement/progressive-web-app-by-the-washington-post/" target="_blank">https://www.webbyawards.com/winners/2017/mobile-sites-apps/features-categories/technical-achievement/progressive-web-app-by-the-washington-post/</a></p>
	
	
	
	  
	
	  <p class="cite">4. <a href="https://www.gartner.com/smarterwithgartner/top-trends-in-the-gartner-hype-cycle-for-emerging-technologies-2017/" target="_blank">https://www.gartner.com/smarterwithgartner/top-trends-in-the-gartner-hype-cycle-for-emerging-technologies-2017/</a></p>
	
	</div> 
	
	
	
	
	
	<div id="18-04-05" class="      avr 18-03 -24">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4> 
	
	<h5 class="  subdailytech">Web Dev Affairs</h5> 									
	
	<p class="  author">by Thomas Maestas, MA</p>									
	
	<h6    class="  chapternumber">April 5, 2018<br />
	
	</h6> 
	
	<h6    class="dailytitle chapternumber">
	
	  On the	Inevitable Demise of   Native Mobile Apps in favor of Progressive Web Apps<br />Part I:   Mobile Devices Outwit and Outgrow the "Old-School" App</h6>
	
	  <p  ><small>Note on app definitions in this post: Anything downloaded, whether iOS or Android is <i>native mobile app</i>, while progressive web apps are strictly behind the HTTPS protocol, i.e. browser-based.</small></p>
	
	<p class="firstparagraph">Mobile Devices are ever delightful, yet a pesky 2 to 3-second delay often accompanies our everyday tasks using device-native apps. For the impatient, this delay is not tolerable, and even the patient have their urgent moments (or have better things to do).    So, whether we're Verizon, T-Mobile, or pre-pay phones like Sprint's Boost, our experiences are the same: 3-second delays abound--much to our impatience!  </p>
	
	<p >Instant Loading </p>
	
	<p >In contrast, many of our daily web-based tasks are instant, i.e. a second or less. I feel instant loading should be <i>a right</i>, not an occasional convenience. what does this potential mean? This means an app's service workers can load nearly immediately and reliably. This means  non-choppy  animations, smooth scrolling, no matter the network connection you're using, no matter the device!  </p>
	
	<p  >Device-Neutral User Interface</p>
	
	
	
	<p  >After a long-day's work using desktop and mobile apps, why should an evening transition to tablet or laptop change our experience? Further, these variations differ between apps--of which there are alot:  2.2 million apps in the iTunes collection and 3 million Android apps, as of 2017<sup>2</sup>. of iOS apps &amp; 3 million. 	 My Fitbit experience is illustrative. First, I admit I have a terrible addiction to statistics, especially bio-statistics. And, Fitbit is my enabler.   However, my post-run tablet Fitbit app experience is different and more limited from the HTTPS-browser experience. App features, options, views, date-ranges vary between devices.  </p>
	
	
	
	<p  >Security </p>
	
	<p  >HTTPS-level <i>browser</i> security vs. iTunes &amp; Play Store native app security is akin to a vault door versus building door. I'm sorry, but there's a lot of difference! 
	
	<p  class="dailytech">In Progress  </p>
	
	
	
	<p class="cite">1. <a href="https://www.wired.com/2010/08/ff-webrip/" target="_blank">https://www.wired.com/2010/08/ff-webrip/</a>Re: The Web is Dead. Long Live the Internet</p>
	
	<p class="cite">2. <a href="http://www.businessofapps.com/data/app-statistics/" target="_blank">http://www.businessofapps.com/data/app-statistics/</a> </p>
	
	http://www.businessofapps.com/data/app-statistics/
	
	
	
	<p class="cite">2. <a href="https://www.techrepublic.com/article/how-progressive-web-apps-promise-to-upend-native-mobile-apps/" target="_blank">https://www.techrepublic.com/article/how-progressive-web-apps-promise-to-upend-native-mobile-apps/</a></p>
	
	
	
	
	
	
	
	<p class="cite">3. <a href="https://www.wired.com/2016/04/wait-web-isnt-really-dead-google-made-sure/" target="_blank">https://www.wired.com/2016/04/wait-web-isnt-really-dead-google-made-sure/</a></p>
	
	
	
	
	
	</div> 
	
	
	
	
	
	
	
	<div id="18-04-02" class="     avr 18-03 -24">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">MUSING BLOCKCHAIN</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6   class="  chapternumber">April 2, 2018<br />
	
	</h6> 
	
	<h6   class="dailytitle chapternumber">Heraclite's Delight: Technology Change is the Constant, Human Behavior is Variable:<br />The April 2nd Announced Hedera Hashgraph X Launch Event  </h6>
	
	<p class="firstparagraph">Next May 9th, the greatest known threat to traditional blockchain technology will be formally introduced, <i>along with its source code</i>, into our technological world. Hedera Hashgraph represents a blockchain alternative that caters to time-sensitive transactions, and order fairness. Currently, one transaction with Bitcoin takes about 12 minutes to validate. Ethereum is only a couple minutes, but in a world of micro-transactions and micro-second transactions, speed counts.</p><p>Next, Hedera's technology uses a consensus algorithm, which depends on  node neighbors' "voting" elections. This means that the design is impervious to "forking"--when a part of the blockchain splits and no long syncs with the main blockchain.  More importantly, Hedera's consensus design is   built on Asynchronous Byzantine Fault Tolerance (aBFT), so is then impervious to threats of <i>Distributed Denial of Service (DDS) attacks. </i></p>
	
	<p>So, lightning speed for validating crypto-transactions. Guaranteed security from hard- or soft-forking of the blockchain, and DDS-like attacks. Fairness in transaction order. Come May 9th, we'll see just how Hedera's codebase and cryptocurrency will accomplish these benchmarks, and if so, Heraclitean river stops in time! If not, yet another cryptographic mirage!</p>
	
	<p class="cite">1. <a href="https://www.hederahashgraph.com" target="_blank">	https://www.hederahashgraph.com</a> </p>
	
	<p class="cite">1. <a href="https://medium.com/hashgraph/eat-pray-hashgraph-56b9613ed46f" target="_blank">https://medium.com/hashgraph/eat-pray-hashgraph-56b9613ed46f</a> </p>
	
	
	
	</div> 
	
	
	
	<div id="18-03-30" class=" hidden   mar 18-03 -24">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">WEB DEV AFFAIRS</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 30 2018<br />
	
	Weekend </h6> 
	
	<h6 class="dailytitle chapternumber"> Why  I Would Boycott Bitcoin:
	
	</h6>
	
	<p class="firstparagraph">In my February <a href="#18-02-20">20th blog post</a>, I decided the importance of "going on strike AGAINST TOXIC bitcoin TECH" -- now I don't want you to get the wrong idea ... my boycott is only aimed at bitcoin currency. Not Ethereum, nor any other crypto-currencies. Bitcoin is ruining, and destroying by <i>subtracting time</i> the Earth through abnormally high energy usage. Ethereum, as a responsible tecchnologyhas redesigned their algorithm from a "Proof of Work" to a much more environmentally friendly "Proof of Stake". Hurray!!</p>
	
	<p>  Bitcoin, in almost every respect, is an Alkaline Battery upon the Tongue: Do not swallow it, rather spit it out. 
	
	Bitcoin's 50-Tera-Watt Carbon Footprint (equal to Singapore or Portugal) 
	
	shortens Earth's Life-Span, by virtue of helping accelerate coal use. </p> 
	
	</div>
	
	
	
	<div id="18-03-27" class="     mar 18-03 -27">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Sociology Tomorrow!</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 27, 2018<br />
	
	    </h6>
	
	
	
	<p class="firstparagraph">
	
	
	
	</p>
	
	</div> 
	
	
	
	
	
	<div id="18-03-24" class=" hidden   mar 18-03 -24">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Sociology Tomorrow!</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 24-25, 2018<br />
	
	Weekend </h6>
	
	
	
	<h6 class="dailytitle chapternumber">1968 Meets 2018
	
	</h6>
	
	<p class="firstparagraph">Washington D.C.  
	
	Not Normally does WonderWoman Show her Face, but Emma Gonzalez' impassioned speech roused up fervor.
	
	</p>
	
	
	
	<p>  </p>
	
	</div> 
	
	
	
	<div id="18-03-23" class="    mar 18-03 -23">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 23, 2018 </h6>
	
	
	
	<h6 class="dailytitle chapternumber"><i>It's not about the Blockchain, the Efficient Network Data Distribution is the Answer!</i>
	
	</h6>
	
	<p class="firstparagraph">Last week and this week, the out-of-control handgun problem is in the news. This leads one to believe there is a problem with the <i>definition</i> of a gun. As always. Definitions start wars and world wars--after all of last century, did anyone decide who controls the Coal of Sudetenland?? You can bet everyone there speaks two languages, still. The <i>definitional </i> answer makes the answer: This is why Blockchain technology--straddled between myriad start-ups, countless institutions and a hundred brilliant minds is The answer to our scalability problems.   
	
	
	
	</p><p>The problem is that data structures grow at differential rates, some exponential, some linear, some slower, some as a function of time or other variable.  Yet, our data analysis needs are clear: We need a new technology to handle quickly, securely and efficiently the <i>Networked, Relational Data Problem</i>, which scales exponentially with traditional data structures, like old-fashioned Excel-like Row-&amp;-Column data structures. Yet, as one would logarithmize the equation to best adapt new data, so must the computer data structure adjust accordingly. </p>
	
	<p>Too rigid, the world turned to relational, non-Structured Query Language (SQL) data, partially for the need to dislate <i>data objects</i> from their tables. The world needed that cell as a free-radical in order to mimic the data structure of societally-networked society.  Alas, a science already at hard work with Cambridge Analytica--again what's that field of study called again, Sociology, right? </p>
	
	<p>
	
	
	
	</p></div> 
	
	<div id="18-03-22" class="   S mar 18-03 -22">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Web Dev Affairs </h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 22, 2018 </h6>
	
	
	
	<h6 class="dailytitle chapternumber">A.I. Part II: Problems with Scale, Kindly Resolved by A.I.
	
	</h6>
	
	<p class="firstparagraph">I mistakenly laid waste to A.I.'s reputation in my last post. It <i>did</i> let us, our whole society, let us down, and maybe the forensics will give us <i>a few excuses</i> down on the road. However, "homicide by A.I. (aka Uber)" will need to be updated in records. But, artificial intelligence is not at fault. There are a few software engineers that did the best they could--with the time their superiors gave them.  Uber leadership, let's hope, will be deterred from future carelessnes to come.   </p>
	
	
	
	<p>That diatribe said, I do appreciate an Uber's proximity when I'm stranded at 2:00 am in a bad part of town. Why? Because I don't need to plan ahead -- Uber is there! And, sadly, I don't need to read or study -- Google is there! But wait, don't judge me, I'm not lazy! That being said, I have my own soul-searching to do: TECHNOLOGY AIDS AND ABETS ME AND MY ACTIONS, but it does not run my show> Only I take responsibility for my own actions: I allow technology into my life as a tool, and yet I   hold the power cord. I take responsibility for the tech that follows me--and believe me, I need that tech. And so do you. Not only so, but the world, and the ecological fate of our <i style="color:green">green earth</i>> also depends on tech, A.I. specifically. </p>
	
	<p>
	
	Humankind has already dug an ecological (dare I say 'alkaline') pit deeper than can be dug out of: Flooding, forest fires, and Species Extinctions. A.I. is <i style="color:brown"> is </i>> the only viable hope so we, i.e. Uber, shouldn't prematurely spoil its development. 
	
	</p>
	
	<p class="quote">Several questions raise their ugly head when A.I. can't help Earth or humankind. Like it or not, A.I. will need to 3-D print the dykes for the sunken coastal cities--like tiny island Den Haague, the most beautiful city in the world. Next, A.I. will make irrelevant fossil fuels by 2030, if not before; and those caught polluting would be fined to death, anyway. Without A.I., none of these worthwhile goals are possible. This precarious, difficult and most of all laborious job of designing our own solutions will take time: For this reason, Uber should be shamed even further for their short-cuts, and eventual errors of internal, organizational problems. <i>Uber's experiemental, tax-free "Testing Sandbox" cannot be the erstwhile safe neighborhoods of Surburban Phoenix, without proper caution.</i> </p>		
	
	<p>Are Uber's corporate desires, market stronghold, and shareholders' delight more worthwhile than <i>an entire sensitive field of machine-learning research?</i> No. Uber must be warned to not steal corporate secrets from Waymo, then proceed to be 86'd from California, then brush aside with excuses the <i>killing of an innocent Arizona bicyclist</i>.</p>
	
	<p>
	
	Who can count the number of very feisty taxi-men and -women that are not fans of the infamously hasty culture of Uber. The team of lawyers needed to be 86'd from France? Uber already knows, because maybe they know B.D.O! 
	
	</p>
	
	<p></p>
	
	<p class="cite">3.
	
	<a href="https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar" target="_blank">https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar</a>
	
	</p>
	
	</div> 
	
	<div id="18-03-21" class="    mar 18-03 -21  ">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Web Dev Affairs </h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 21, 2018 </h6>
	
	
	
	<h6 class="dailytitle chapternumber">Hey Uber Driver, Please Slow Down!
	
	</h6>
	
	<p class="firstparagraph">A.I. generally, and specifically Uber's Self-Driving Tech, both have failed society this week. Although we could all debate the merits of "Lidar", i.e. laser-based vision, the primary concern, in my view, is Uber's obvious carelessness in rushing their self-driving tech.  Although six thousand (6,000 too many) pedestrians are killed in the U.S. annually, I'd only hope AI wouldn't add to the problem.<sup>2</sup> The Arizona victim was walking her bicycle when struck, and I as bike-commuter can't help but take the affair personally. </p>
	
	<p>This first human death is at least a <strong>big Wake-Up moment</strong> for the industry in its haste to roll out A.I. tech.  After all, Uber's questionable leadership morals<sup>2</sup> and being kicked out of San Francisco for running more than six red-lights raises eyebrows to begin with.<sup>3</sup> My problem with Uber is that the car's algorithm, with perfect Lidar vision, did not flinch or slow down for two seconds as it killed the victim. Humans flinch and humans swerve, because protecting fellow humans is in our DNA, not in A.I.'s. So, while we now know Uber's software hasn't caught up with its A.I.-Lidar hardware--let's hope we see defensive driving and some <i>TLC</i> programmed into those A.I. Algorithms!
	
	</p>
	
	<p class="cite">1.
	
	<a href="https://www.theguardian.com/technology/2018/mar/22/video-released-of-uber-self-driving-crash-that-killed-woman-in-arizona" target="_blank">https://www.theguardian.com/technology/2018/mar/22/video-released-of-uber-self-driving-crash-that-killed-woman-in-arizona</a>
	
	</p>
	
	
	
	<p class="cite">2.
	
	<a href="https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar" target="_blank">https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar</a>
	
	</p>
	
	<p class="cite">3.
	
	<a href="http://fortune.com/2017/02/26/uber-self-driving-car-red-lights/" target="_blank">http://fortune.com/2017/02/26/uber-self-driving-car-red-lights/</a>
	
	</p>
	
	
	
	</div>
	
	<div id="18-03-20" class="  mar 18-03 -20">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Web Dev Affairs </h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 20, 2018 </h6>
	
	
	
	<h6 class="dailytitle chapternumber">The Facebook Fiasco: Why Zuckerberg Should not have Dropped out of Harvard
	
	</h6>
	
	<p class="firstparagraph">
	
	Universities, private or public institutions, serve as a beacon for
	
	<strong>the Fearless Protection and Ethical Regulation</strong> of information and data. This is because data and data research
	
	is innate to the university's Mission Statement, whereas business and governmental institutions are relatively new
	
	to the game, and often at odds with the
	
	<i>Academy</i>, and occasionally against each other. </p>
	
	<p class="quote">Threats to student data privacy existed long before the internet. The FBI under J. Edgar Hoover infiltrated Berkeley
	
	student groups to counter communism in the 1960s. Around the same time, the CIA manipulated the National Student
	
	Association for intelligence gathering in other anti-communism efforts. But the privacy issue is more acute now
	
	that the amount of student data in cloud-based systems has grown exponentially and is more widely dispersed.
	
	<sup>2</sup>
	
	</p>
	
	<p> The University's expertise over ethically regulated data collection and management, is better than government, business,
	
	and even medical domains for two reasons. First, the institution's long history and ethical motives with data are
	
	unique. The norms of data-handling have been codified through the University's Institutional Review Board based
	
	on its
	
	<strong>stated mission</strong>. In other words, Universities take data seriously
	
	<i>for reasons other than corporate profit or governmental control</i>. An example of personal data precautions has
	
	played out with Harvard's recent data tiffs leading to the Supreme Court, illustrated by a 2016 article: </p>
	
	<p class="quote">Last week undergraduates at Harvard University raised concerns about the institution handing over their data to an
	
	anti-affirmative action group as part of a lawsuit. Students for Fair Admissions, which is suing the university
	
	for allegedly discriminating against Asian American applicants, will have access to “academic, extracurricular,
	
	demographic and other information” from all undergrads who applied to Harvard between the fall 2009 and spring 2015,
	
	omitting names and Social Security numbers.
	
	<sup>2</sup>
	
	</p>
	
	<p>The second reason why Universities understand ethical implications for data is that data and more broadly data and
	
	human information
	
	<i>research</i> is the institutions' second highest priority, along with teaching and service. For example, in response
	
	to the unethical Public Health research in
	
	<i>Tuskegee Syphilis experiements</i>, the University instution
	
	<i>stepped in</i> to help design the 1978
	
	<strong>Belmont Principles</strong>. Currently, the University Institutional Review Board incorporates this with the Nuremburg
	
	Code (developed after WWII NAZI research), in handling data research.
	
	</p>
	
	<p>In recent days,
	
	<i>private companies</i> claim expertise for regulating "Fake News", and you guessed it,
	
	<strong>regulation of data privacy &amp; confidentiality.</strong><sup>3</sup> The ethical authority over data privacy norms are nowhere
	
	else than the University campus, case in point Harvard... Let the governments govern and the enterprises enterprise,
	
	and leave the
	
	<i>thoughtful, ethical regulation of data collection and precaution </i> to the Ivory Tower. Corporate and Government
	
	self-regulation is opaque enough!</p>
	
	
	
	
	
	<p class="cite">1.
	
	<a href="https://www.theguardian.com/technology/2018/mar/21/mark-zuckerberg-response-facebook-cambridge-analytica"
	
	target="_blank">https://www.theguardian.com/technology/2018/mar/21/mark-zuckerberg-response-facebook-cambridge-analytica</a>
	
	</p>
	
	<p class="cite">2.
	
	<a href="https://www.edsurge.com/news/2016-10-26-pursuing-academic-freedom-and-data-privacy-is-a-balancing-act"
	
	target="_blank">https://www.edsurge.com/news/2016-10-26-pursuing-academic-freedom-and-data-privacy-is-a-balancing-act</a>
	
	</p>
	
	<p class="cite">3.
	
	<a href="https://www.bloomberg.com/news/articles/2018-03-21/paul-ford-facebook-is-why-we-need-a-digital-protection-agency"
	
	target="_blank">https://www.bloomberg.com/news/articles/2018-03-21/paul-ford-facebook-is-why-we-need-a-digital-protection-agency</a>
	
	</p>
	
	
	
	</div>
	
	
	
	<div id="18-03-19" class="  mar 18-03 -19">
	
	
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Sociology Tomorrow!</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 19, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber">A New Politics of Power:
	
	<br /> The Cryptographic Financial Escape Hatch
	
	</h6>
	
	<p>I had originally intended for a post on the very lamentable
	
	<i>Blockbuster-ization</i> and eventual demise of Toys-"R"-Us, but Tech Affairs happen too quickly! Instead ...</p>
	
	<p class="firstparagraph">Today, US inserted itself into a large, deep debate about crypto-legitimacy by imposing new sanctions on Venezuela.
	
	In case you hadn't heard, here's a quick recap:</p>
	
	<p class="quote">The administration’s announcement came a few hours after Mr. Trump signed an executive order barring the use of any
	
	digital currency issued by the Maduro government since Jan. 9. Mr. Maduro announced last month that his country
	
	had begun a presale of the Petro, backed by the nation’s vast petroleum reserves.
	
	<br />
	
	<br />The Venezuelan government called the launch a response to a financial crisis that has prompted a profound devaluation
	
	of the national currency, the bolívar, and quadruple-digit inflation.
	
	<sup>1</sup>
	
	</p>
	
	<p>
	
	This turn of events, both Maduro et al.'s financial cleverness and Trump's action to de-legitimate the Petro crypto-currency,
	
	are examples of the undefined, near-limitless political uses for Blockchain Tech, both offensively and defensively.
	
	In fact, the ensuing events may be of great interest as we will witness a major first actual use-case of the decentralizing
	
	aims of crypto-technology tool. A tool that softens the financial leverage wielded by centralized authorities, whether
	
	governemntal or private.
	
	</p>
	
	<p>I used the term "de-legitimate" above because there are two processes at work: First, crypto-currencies are
	
	<i>in themselves</i> not legitimate. A
	
	<strong>crypto-currency platform gains legitimacy through a series of both technical and financial trust-building stages</strong>.
	
	So legitimacy is earned first privately, and some currency platforms continue publicly to Initial Coin Offering,
	
	and so on--purely financial and technical legitimacy.
	
	</p>
	
	<p>And then, there is the another kind of legitimacy, which involves political leverage ... </p>
	
	<p class="cite">1.
	
	<a href="https://www.nytimes.com/2018/03/19/world/americas/trump-venezuela-sanctions-petro.html" target="_blank">https://www.nytimes.com/2018/03/19/world/americas/trump-venezuela-sanctions-petro.html</a>
	
	</p>
	
	
	
	</div>
	
	
	
	<div id="18-03-17" class="  mar 18-03 -17">
	
	
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 17-18 2018
	
	<br /> Weekend
	
	</h6>
	
	
	
	<h6 class="dailytitle chapternumber"> Energy Alternatives Signal the Power Shift to Come, Part II: A Ripple and an Iota of Sustainable Crypto-Currency
	
	</h6>
	
	<p class="firstparagraph">Iota and Ripple cryptocurrencies use different technology than traditional blockchain in order to achieve their distributed
	
	ledgers. Traditionally, outside "miners" validate the block's
	
	<i> transaction records</i> as it replicates to the next "block." For example, a transaction is validated 2 or three
	
	times, and since three miners' validations all agree, one is kept and two are destroyed, in a nutshell; one example
	
	of computations (
	
	<strong>and hence coal</strong>) that cost too much time and energy.</p>
	
	<p>Unlike this arrangement, Iota, Ripple, and Hedera use a directed-acyclic-graph (DAG) data structure (shaped like
	
	a sideways genealogy tree) that relies on "consensus" from its nearest neighbor transaction nodes.
	
	<sup>1</sup>
	
	</p>
	
	<p>Enough with the jargon! The bottom line is that Bitcoin's tech is not eco-sustainable,
	
	<sup>2</sup> and so alternatives are already closing in on Bitcoin. Iota, the 8th largest cryptocurrency Iota delivers
	
	open-source transparency, lightning speed, and yet is it cryptographically sound? Not according to some tech pundits:
	
	</p>
	
	<p class="quote">You might think that IOTA, a cryptocurrency worth over a billion dollars, and working with organizations like Microsoft,
	
	University College London, Innogy, and Bosch, BNY Mellon, Cisco, and Foxconn (through the Trusted IOT Alliance)
	
	would not have fairly obvious vulnerabilities, but unfortunately, that’s not the case. When we took a look at their
	
	system, we found a serious vulnerability and textbook insecure code.
	
	<br />
	
	<br /> “In 2017, leaving your crypto algorithm vulnerable to differential cryptanalysis is a rookie mistake. It says that
	
	no one of any calibre analyzed their system, and that the odds that their fix makes the system secure is low,” states
	
	Bruce Schneier, renowned security technologist, about IOTA when we shared our attack.
	
	<sup>3</sup>
	
	</p>
	
	<p>And so, with a 1.9 billion market cap, I sometimes have to reflect on the immensity and non-relational fact and figures
	
	of our technological world! Security and other bugs are hard to avoid when an industry is moving too fast for thoroughly
	
	tested betas; and each iteration involves a series of bug-patches, with short- and long-term priorities stretched
	
	with new design &amp; function trade-offs.</p>
	
	<p>
	
	Full life-cycle software development, from napkin-idea to rolling specs, always follows these patterns yet not always with
	
	so much money on the line! Here's a closer look at one critique of Iota:</p>
	
	<p class="quote">
	
	IOTA developers had written their own hash function, it was a huge red flag ... I think it’s important to reiterate that
	
	the IOTA developers do not agree with our characterization of this as an issue of concern. Our report lays out more
	
	details about why we are concerned.
	
	<br />
	
	<br /> There are other red flags — unlike every other program running on your laptop or phone, IOTA uses ternary instead
	
	of binary. Since all computer hardware today uses binary, IOTA converts to ternary in software, which is less efficient
	
	and more complex. This complexity prevents IOTA from benefiting from existing security analysis tools that are designed
	
	to work with binary, and makes the code harder to read and understand.
	
	<br />
	
	<br /> The current IOTA tangle requires a trusted party (the coordinator) for security, suggesting that in its current
	
	form it’s not ready to run as a truly permissionless, decentralized system.
	
	<sup>3</sup>
	
	</p><p>
	
	Optimizing, not sacrificing, should be the name of the game as Tech closes in on Blockchain challenges of security, scalability,
	
	and that evers-so-costly
	
	<strong>Sustainability!</strong>
	
	</p>
	
	<p>1.
	
	<a href="https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain"
	
	target="_blank">https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain</a>
	
	</p>
	
	<p>2.
	
	<a href="
	
	https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal
	
	" target="_blank"> https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal </a>
	
	</p>
	
	<p>3.
	
	<a href="
	
	https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367
	
	" target="_blank"> https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367</a>
	
	</p>
	
	
	
	
	
	</div>
	
	
	
	<div id="18-03-16" class="  mar 18-03 -17">
	
	
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 16, 2018</h6>
	
	
	
	
	<h6 class="dailytitle chapternumber"> Energy Alternatives Signal the Power Shift to Come
	
	</h6>
	
	
	
	<p class="firstparagraph">Sustainability for the environment means an accelerated transition to renewables. While other nations have undertaken
	
	big steps toward wind and solar - even China's pollution declined in 2014 for the first time
	
	<sup>1</sup>. EU is now 30% renewable--from 12% in 2000 to expected 50% renewable energy by 2030
	
	<sup>2</sup>. Us, it appears, not so much...ouch.</p>
	
	<p>What can we do then, in our lives, to make our own contribution. Well, besides less fossil fuels and red meat, we
	
	can choose our cryptocurrencies more conscientiously. One NY town's recent actions echo my own concerns about the
	
	enormous carbon footprint of "Proof-of-Work" blockchain mining.
	
	</p>
	
	<p class="quote">
	
	The city of Plattsburgh has put a moratorium on cryptocurrency mining to preserve natural resources, the health of its residents
	
	and the city’s “character and direction,” officials said after a public hearing Thursday. For 18 months, the 20,000-resident
	
	city will not consider new applications for commercial cryptocurrency mining. Violators will face fines of up to
	
	$1,000 for each day they defy the moratorium.
	
	<sup>3</sup>
	
	</p>
	
	<p>So, me too - count me out, I can't help but do the same, and pronounce my own refrain from Bitcoin (this is more
	
	spiritual since I don't own, nor mine). In contrast, I'll put Ethereum on hold since they are transitioning to a
	
	zero carbon-footprint by year's end. </p>
	
	<p>And, for the most environmentally friendly cryptocurrencies, I wholly support Ripple (3rd highest valued cryptocurrency)
	
	and also clean
	
	<i>Iota</i> (8th highest valued )
	
	<sup>5</sup>. Ripple, unfortunately, is a private company with a less-accessible internal distributed ledger. And yet,
	
	Hedera Hashgraph heralds the most optimistic news of all: A blindlingly fast Hashgraph structure, unbound from any
	
	carbon footprint.
	
	</p>
	
	<p>1.
	
	<a href="http://www.wri.org/blog/2017/01/china%E2%80%99s-decline-coal-consumption-drives-global-slowdown-emissions"
	
	target="_blank">http://www.wri.org/blog/2017/01/china%E2%80%99s-decline-coal-consumption-drives-global-slowdown-emissions</a>
	
	</p>
	
	<p>2.
	
	<a href="https://qz.com/1193603/two-countries-are-the-reason-the-eu-is-hitting-its-ambitious-renewable-energy-targets/"
	
	target="_blank">https://qz.com/1193603/two-countries-are-the-reason-the-eu-is-hitting-its-ambitious-renewable-energy-targets/</a>
	
	</p>
	
	<p>3.
	
	<a href="https://www.washingtonpost.com/business/economy/upstate-new-york-town-bans-bitcoin-mining/2018/03/16/bd6f669e-2947-11e8-bc72-077aa4dab9ef_story.html?utm_term=.6282ea8429d5"
	
	target="_blank">https://www.washingtonpost.com/business/economy/upstate-new-york-town-bans-bitcoin-mining</a>
	
	</p>
	
	<p>4.
	
	<a href="https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain"
	
	target="_blank">https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain</a>
	
	</p>
	
	</div>
	
	
	
	<div id="18-03-15" class="  mar 18-03 -15">
	
	
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 15, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber">I Love this Record Baby but I Can't See Straight Anymore:
	
	<br />It's Gonna be Okay, Flip that Record and Just Dance!
	
	</h6>
	
	<p>-Lady Gaga</p>
	
	<br />
	
	<p class="firstparagraph">
	
	<strong>Creators in the Digital Age</strong>, especially Musicians, have faced just a panoply of business model challenges,
	
	notably since the 2000s'
	
	<i>Napster Era</i>. And yet, this is the age-old-case of new technologies reshaping long-standing fields, especially
	
	financial structure - the bottom line! All creative fields also have technological features on the horizon that
	
	may, potentially move the playing field. First some recent background: </p>
	
	<p class="quote">
	
	While [Taylor Swift] is certainly making money in retail sales and digital downloads, both of those metrics are spiraling
	
	downward as people migrate away from the concept of owning music at all. Nielsen recently released numbers indicating
	
	substantial drops in both CD and digital-track sales, which are down almost $100 million
	
	<i>year over year</i> from 2014; streaming music continues to grow, but the revenue it generates isn’t close to making
	
	up the difference, yet.
	
	<sup>1</sup>
	
	</p>
	
	<p>Most remember Taylor Swift's 2014 industry-shaking album withdraw in protest to Spotify's payment structure. The
	
	next year Taylor took on Apple iTunes--to which Apple bended to Taylor's Way
	
	<sup>2</sup>. These wins are amazing but not enough, if only for winning battles in a losing war. </p>
	
	<p class="quote">Spotify is the future. Spotify is the enemy. Spotify doesn’t pay enough. Spotify is music’s best bet for revenue
	
	growth. Since it arrived in the United States from Sweden in 2011, Spotify has been cast as both hero and villain
	
	in the music industry’s continuing debate over streaming music. </p>
	
	<p class="quote">
	
	It has been hailed as a potential savior through a two-tiered “freemium” model that would gradually lure listeners away from
	
	piracy. Yet Spotify’s royalty rates have also terrified many artists already worried that each new step in music’s
	
	digital evolution further devalues their work.
	
	<sup>3</sup>
	
	</p>
	
	<p>So the trend looks dire, and yet is it really? Where, just where are the
	
	<strong>Tech Platforms </strong> leading us? Tech is leading us
	
	<i>nowhere</i>, at least not to one
	
	<strong>singular, centralized place</strong>; rather, decentralized tech--including but not limited to blockchain--is busy
	
	rewriting the boundaries between creators and consumers. This Tuesday's Forbes article reported on new subscription-based
	
	model by Patreon. Still classical Web 2.0, it's novelty appears so simple, almost intuitive in potentially new pathway:</p>
	
	<p class="quote">"On Kickstarter and Indiegogo, creators essentially have to start over every time," says Danny Rimer, a partner at
	
	Index Ventures who is a Patreon investor and board member. "It's the same reason software companies went from licensed
	
	software to subscriptions: predictable revenue and better service for customers."
	
	<sup>4</sup>
	
	</p>
	
	<p>
	
	Apparently Patreon, along with last November's
	
	<i>Drip</i> by KickStarter have made headway. Patreon paid out $150 million to its artists in 2017, and each are doubling
	
	annually. Decentralizing again. Well, we say we can't
	
	<i>go back to the way it was</i>, but Tech always seems to lead us back to the way it was!
	
	</p>
	
	<p>1.
	
	<a href="https://www.nytimes.com/2016/01/25/magazine/touring-cant-save-musicians-in-the-age-of-spotify.html" target="_blank">https://www.nytimes.com/2016/01/25/magazine/touring-cant-save-musicians-in-the-age-of-spotify.html
	
	</a>
	
	</p>
	
	<p>2.
	
	<a href="http://www.businessinsider.com/taylor-swift-new-album-reputation-not-on-spotify-apple-music-streaming-2017-11"
	
	target="_blank">http://www.businessinsider.com/taylor-swift-new-album-reputation-not-on-spotify-apple-music-streaming-2017-11
	
	</a>
	
	</p>
	
	<p>3.
	
	<a href="https://www.nytimes.com/2014/11/12/business/media/taylor-swifts-stand-on-royalties-draws-a-rebuttal-from-spotify.html"
	
	target="_blank">https://www.nytimes.com/2014/11/12/business/media/taylor-swifts-stand-on-royalties-draws-a-rebuttal-from-spotify.html
	
	</a>
	
	</p>
	
	
	
	
	
	<p>4.
	
	<a href="https://www.forbes.com/sites/kathleenchaykowski/2018/02/13/digital-medici-how-this-musician-turned-entrepreneur-plans-to-save-creators-from-advertising/#6063ea771313"
	
	target="_blank">https://www.forbes.com/sites/kathleenchaykowski/2018/02/13/digital-medici-how-this-musician-turned-entrepreneur-plans-to-save-creators-from-advertising
	
	</a>
	
	</p>
	
	</div>
	
	
	
	<div id="18-03-14" class="  mar 18-03 -14">
	
	
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="  subdailytech">Sociology Tomorrow!</h5>
	
	
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="  chapternumber">March 14, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber"><i>Tou<strong>Demou</strong> tes<strong> Krates</strong></i>:<br />Strength of the People</h6>
	
	
	
	<p class="firstparagraph">Today's demonstrations and walk-outs, led by America's Youth and followed by many of the education staff, has aimed
	
	directly at Gun-Control legislation. Yet, the message more powerfully articulated than ever by adolescent-turns-adult
	
	students, takes aim at something further afield. </p>
	
	<p>Students, remembering the February 14th massacre victims, take aim at the corruption stemming from the 2010 Supreme
	
	Court "Person-hood" protection for Corporations, also known as the
	
	<i>Citizens United</i> Decision. A dated, but poignant, article from National Public Radio explains:
	
	</p>
	
	<p class="quote">The Supreme Court extended that protection to corporations, and over time also extended some — but not all — of the
	
	rights guaranteed to individuals in the Bill of Rights.
	
	<sup>1</sup>
	
	</p>
	
	<p>
	
	Yet, it appears deceptively harmless for Congressional Law-makers to protect corporations, in the form of
	
	<strong>Gun Manufacturers' Lobbyists, </strong>
	
	as equally as it protects humans. The origin or this ruling dates to a 70's Neo-Liberal, right-leaning legislation and Court
	
	rulings that include a pivotal 1978
	
	<i>First National Bank of Boston v. Belloti</i> decision allowing for corporations' ballot-initiative campaign contributions,
	
	citing the First Amendment.
	
	<sup>2</sup>
	
	</p>
	
	<p>
	
	
	
	The Result? The corporation, in "person" form, takes on Pseudo-Human qualities: immortal, beyond-measure capital, and programmatically
	
	serving stock-holders' interests with cut-throat competition at all costs. No match against a sympathetic human,
	
	yet the Corporation is given the same rights and privileges as the man in the street. Now, in the face of two decades'
	
	dead humans--as young as
	
	<i>Sandy Hook Elementary</i>, which were not protected by Legislation, due to commitments made to corporate lobbying.
	
	</p>
	
	<p>It appears increasingly difficult for Marco Rubio to accept money from gun lobbyists
	
	<i>in exchange</i> for executing their legislation demands. As I mentioned in my
	
	<a href="#18-02-14">February 14th post</a> on the topic, it is clear a generation is awakening: And, the Humans have begun to revolt
	
	against the
	
	<strong>Heavily-Armed Lobbying Machines!
	
	</strong>
	
	</p>
	
	<p>1.
	
	<a href="https://www.npr.org/2014/07/28/335288388/when-did-companies-become-people-excavating-the-legal-evolution"
	
	target="_blank">https://www.npr.org/2014/07/28/335288388/when-did-companies-become-people-excavating-the-legal-evolution</a>
	
	</p>
	
	<p>2.
	
	<a href="http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx#dnn_ctr77443_HtmlModule_lblContent"
	
	target="_blank">http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx</a>
	
	</p>
	
	http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx dnn_ctr77443_HtmlModule_lblContent
	
	</div> 
	
	<div id="18-03-13" class="mar 18-03 -13">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	
	
	<h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 13, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber">The Sharing Economy Hand-in-Hand with the Market Economy:
	
	<br /> Part III and Sustainability of Shared, Distributed Ledger Types</h6>
	
	
	
	<p class="firstparagraph">March 13th, 2018 marks the day that certain types of blockchain technologies, notably Bitcoin and Ethereum, face
	
	an existential crisis: Today, a new distributed ledger technology has been announced, which departs from the traditional
	
	"Proof-of-Work" (energy-intensive calculations) Blockchain technologies. This is critically important to zero carbon-footprint.
	
	For example, Bitcoin calculations drain more energy, 50 TeraWatt/hrs per year--higher than Singapore's 49.8!</p>
	
	<p>Next, the primary security flaw of consensus-based leadership like Ripple, Iota (as opposed to
	
	<i>random-selection blockchain leadership</i> based on carbon-intensive calculations) is they are susceptible to Hacking:
	
	Denial-of-Service Attacks are possible because the next leader Block can be anticipated and followed by a Bot),
	
	so the blockchain cycle is attacked at every cycle. </p>
	
	<p>The Heder Hashgraph unveiled today overcomes this problem by using a 39-node-leader hashgraph data structure. Interestingly,
	
	this is based on the original Visa Credit Card design from the 1950's (then called AmericaBank) for authenticating
	
	system. </p>
	
	<p>
	
	Next, The Heder Hashgraph overcomes the problem of "fairness" because blockchain transactions are
	
	<i>
	
	<strong>not ordered in each cycle</strong>.</i> Bitcoin transactions are haphazardly lumped together in each block-cycle,
	
	which is ~12 minutes. Which means that time-sensitive financial data queries will always lose! </p>
	
	<p>
	
	Swirld's unveiled their consensus-based
	
	<strong>Hashgraph, a type of distributed ledger technology (DLT),</strong> last year. Today, it has now been announced to
	
	deploy in late 2018 on the Hedera Hashgraph public network. This is tremendous news! Tremendous, since I explained
	
	in my
	
	<a href="#18-03-01">March 1st </a> blog post that older blockchain technologies incentivize miners' efforts by directly tying electrical-cost(
	
	(in calculations) to the Bitcoin/hour profit margin. For this reason, the future horizon just considerably shortened
	
	Bitcoin's runway for establishing anything beyond "early-adopter" status. </p>
	
	<p>So, we'll see if the innovating crew with Vitalik Buterin's Ethereum can successfully alter the crypto algorithm
	
	into it's planned carbon-free consensus-based, "proof-of-stake" form. For the moment, Bitcoin, Ethereum, and other
	
	electricity-draining "proof-of-work" designs, have their
	
	<strong>exchange value trapped inside their own Carbon Footprint</strong>.
	
	<sup>4</sup> And so, because environmental sustainablity is foremost of concerns for future investment, survival may
	
	depend on digging out of that Carbon Footprint much more quickly!</p>
	
	
	
	<p>1.
	
	<a href="https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#175e5c79abcb">
	
	https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#175e5c79abcb
	
	</a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="https://www.coindesk.com/hedera-hashgraph-swirlds-no-fork-guarantee-cryptocurrency-touts-resistance-code-splits/"
	
	target="_blank">
	
	https://www.coindesk.com/hedera-hashgraph-swirlds-no-fork-guarantee-cryptocurrency-touts-resistance-code-splits/</a>
	
	</p>
	
	
	
	<p>3.
	
	<a href="https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/"
	
	target="_blank">
	
	https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a>
	
	</p>
	
	
	
	
	
	<p>4.
	
	<a href="https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/" target="_blank">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>
	
	</p>
	
	</div>
	
	
	
	<div class="mar 18-03 -12" id="18-03-12">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 12, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber">The Sharing Economy Hand-in-Hand with the Market Economy:
	
	<br /> Part II and New Forms of Trust</h6>
	
	<p class="firstparagraph">
	
	Throughout the centralized-tech period of the
	
	<i>mobile-powered </i> Web 2.0, most Sharing transactions take place on a centralized platform that simply facilitates
	
	the peer-to-peer transactions. However, the trust is based on some third-party authority. For instance, Uber serves
	
	as the centralalized, third-party authority between both consumers (whether resource-obtaining or resource-providing)
	
	must place their trust. Similarly, centralized authorities like Paypal, etc. enable peer-to-peer collaboration.
	
	Yet, the notion of trust remains unsolved: Both parties must place their faith in the third party. By definition,
	
	this problem that undermines the
	
	<i>Sharing Economy</i> is resolved by Blockchain technologies, through cryptography. Now, Decentralized Apps (DAPPS)
	
	provide a truer sharing platform for value transactions.
	
	</p>
	
	<p>In short, neither peer,
	
	<strong>neither consumer needs to be trusted, because both parties share a mutual trust in their shared ledger</strong>
	
	(think of a thick book with an indexed log of each and every transaction, with unchangeable entries etched by cryptography.
	
	In this fashion the forms of Exchange Value include:
	
	<br /> 1. Value Funds &amp; Investments
	
	<br /> 2. Immutable Insurance &amp; Risk Management
	
	<br /> 3. Account for &amp; Audit Commodified Value 4. Authenticate &amp; Attest to Value
	
	<br /> 5. Transfer, Store, Lend Value
	
	<br />
	
	</p>
	
	</div>
	
	
	
	<div class="mar 18-03 -10" id="18-03-10">
	
	
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>
	
	
	
	<h5 class="subdailytech">Web Dev</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 10-11, 2018
	
	<br /> Weekend
	
	</h6>
	
	
	
	<h6 class="dailytitle chapternumber">The Sharing Economy Hand-in-Hand with the Market Economy:
	
	<br /> Part I and the Race for Sustainability Solutions</h6>
	
	
	
	<p class="firstparagraph">Sharing can be a philosophy and even an ideology, but it is also
	
	<strong> a concept sewn into the Technology of the Era</strong>. Sharing economy refers to both democratized peer-to-peer
	
	marketplaces,
	
	<i>and</i> collaborative, resource-circulating consumption systems where the consumer&#39;s role is provider or obtainer
	
	of resources. By either sense, the
	
	<i>Uberized</i> economy is made possible by the underlying platform of Decentralized Technologies. Mobile social media,
	
	internet, and blockchain tech creates the conditions needed for a convenient, community-based transactions.</p>
	
	
	
	<p>Bitcoin and Ethereum crypto-contracts grab the headlines, however it is the very nature of blockchain&#39;s
	
	<i>distributed, i.e. shared, </i>ledger that revolutionizes how humans interact, and how they exchange and share goods
	
	and services. So, how might a transactional, zero-sum Market Economy merge with a Sharing Economy?</p>
	
	
	
	<p>In
	
	<i>The Third Industrial Revolution, </i>Social and Economic theorist, Dr. Jeremy Rifkin, provides insight into how
	
	the
	
	<strong>Sharing Economy can grow alongside the traditional Market Economy</strong>.
	
	<sup>1</sup> The theory argues three (3) breakthroughs are needed to create the conditions necessary for a new &quot;general
	
	purpose technological platform,&quot; and thus an Industrial Revolution. They are management/commmunication of power,
	
	sources of new power/energy, and the transportation of this power.</p>
	
	
	
	<p>The first condition: New forms of communication to
	
	<i>manage</i> power, for example steam-powered printing press, trans-oceanic telegraph, then later telephone. The second
	
	condition: New energy sources, for example steam-engine using coal and other fossil fuels. The third condition:
	
	New methods to transport energy, i.e. the steam engine on rails, then later fossil fuel vehicles.</p>
	
	
	
	<p>So what&#39;s new about today? 5G Cellular technology coupled with decentralized, blockchain internet; Second, improving
	
	solar &amp; wind power coupled with decentralized, bi-directional energy grid; and third, transporation by automatated,
	
	driverless shipping for example. So, why is this important, even vital to adapt a new paradigm that fits the new
	
	technology? exponential populstion growth and exponential climate changes are top of the list.</p>
	
	
	
	<p>Britain&#39;s innovations with steam &amp; coal characterized the first Industrial Revolution, and America&#39;s
	
	innovations in telephones, oil-fueled vehicles, and centralized transportation grid, however the innovations in
	
	the present era are much quicker than previous eras... which means we as a society can embrace more proactively
	
	the New Paradigm needed to adapt.</p>
	
	
	
	<p>So, how can we change the way we
	
	<i>think</i> and how we
	
	<i>react</i> depends on our worldview, and how deeply entrenched. Thomas Kuhn&#39;s 2004 publication on
	
	<strong>
	
	<i>The Structure of Scientific Revolution</i>
	
	</strong>
	
	<sup>3</sup> explains how society will drag its feet in the face of change, and only after decades of controversy will
	
	a New Paradigm Shift emerge. In this occasion however, we as a society may not have the luxury of decades to adapt
	
	to New Technologies, as the carbon hangover from the previous Industrial Era imperils the safe arrival of the next!</p>
	
	
	
	<p>&nbsp;</p>
	
	
	
	<p>1.
	
	<a href="https://www.foet.org/books/the-third-industrial-revolution/" target="_blank">https://www.foet.org/books/the-third-industrial-revolution/</a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="https://www.economist.com/node/21553017" target="_blank">https://www.economist.com/node/21553017</a>
	
	</p>
	
	
	
	<p>3.
	
	<a href="https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf"
	
	target="_blank">3. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>
	
	</p>
	
	</div>
	
	
	
	<div class="mar 18-03 -09" id="18-03-09">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 9th, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber">&#39;Alexa, can you laugh?&#39;</h6>
	
	
	
	<p class="firstparagraph">Alexa has made headlines about reports of unexplained laughter responses
	
	<sup id="0309-1">1</sup>. Information like this needs a
	
	<i>
	
	<strong>fact-check</strong>
	
	</i> &agrave; la Snopes.com.
	
	<sup id="0309-2">2</sup> And, whether or not Alexa misheard, &quot;Alexa, laugh&quot;, or not, is less important than the
	
	<i>socially-intrusive consequences</i> of simple app-development errors. The first issue is simply that programmer
	
	<strong>logic </strong> and user-interface intuition should be as clear (and generalized) as possible. This is easier said
	
	than done, for example the recent case of Hawaii&#39;s mistaken
	
	<i>incoming-ballistic-missile warning system</i>.
	
	<sup id="0309-3">3</sup> As it turned out, the dropdown-menu design placed the &quot;Send Test Warning&quot; next to &quot;Send Warning&quot;
	
	in an unintuitive, fail-possible manner. Oops.</p>
	
	
	
	<p>While most focus on Alexa et al.&#39;s actions and abilites, in the name of caution, but rather the larger issue
	
	falls on how much we allow ourselves to mentally depend on tech for things.</p>
	
	
	
	<p>1.
	
	<a href="https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j"
	
	target="_blank">https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j</a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/" target="_blank">https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/</a>
	
	</p>
	
	
	
	<p>3.
	
	<a href="https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002"
	
	target="_blank">https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002</a>
	
	</p>
	
	</div>
	
	
	
	<div class="mar 18-03 -12" id="18-03-08">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 8, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber">1.4 Million Reasons for More Women in Tech, Part II
	
	<br />
	
	<br /> * Continuation of Women in Tech Theme from
	
	<a href="#18-02-23">Feb. 23rd Blog</a>
	
	</h6>
	
	
	
	<p class="quote">This is the first time in human history that we have the ability to see enough about ourselves that we can hope to
	
	actually build social systems that work qualitatively better than the systems we&#39;ve always had.</p>
	
	
	
	<p class="quote">--Author unknown</p>
	
	
	
	<p class="firstparagraph">My February 23rd Post on women in tech focused on the
	
	<i>workforce demand</i> for more women in tech positions, however today I&#39;m writing on the
	
	<strong>
	
	<i>social need</i> for more female insight within the tech workforce</strong> , given that programming will increasingly
	
	shape our future institutions. This means that every institution, whether private hospitals, non-profit charity
	
	foundations, or government bureaus, will effectively restructure (optimize) their own organizational structure in
	
	an increasingly
	
	<i>data-driven</i> paradigm. From a Sociology of Organizations perspective, the changes to come are breath-taking to
	
	consider.</p>
	
	
	
	<p>So why women? Where could I start? Better stated, why is a quintessentially important job sector, a sector in desperate
	
	need for insight, comprised primarily of men?
	
	<sup id="one">1</sup> The facts are evident: ~15-20% of women comprising tech positions.
	
	<sup id="two">2</sup> Numbers aside, I argue there is a quintessential societal need for more women in tech: This is because computing
	
	and understanding data has changed since the data collection from Web 2.0 (mobile), becoming more networked and
	
	relational.</p>
	
	
	
	<p>The challenge for society in this age is historic, and women must absolutely be included in the process of the age:
	
	Please consider, that in the 1650&#39;s, the invention of the microscope opened a new world of data and
	
	<i>information</i> about the bacteriological, microscopic surroundings--hitherto blind to all. Likewise, the telescope
	
	has allowed us as a society to explore the outer universe and earth&#39;s position within it.</p>
	
	
	
	<p>Now, the inventions of machine-learning, computing coupled with Big Data analytics, allows us to explore (and manage)
	
	a universe of knowledge--about
	
	<i>ourselves</i>, human society--with unfathomably complex, unstructured relational data structures. Accessing the
	
	data to computer-readable form is one thing, but meaning in data is inaccessible until the
	
	<i>output</i> can be
	
	<i>re-</i>programmed into meaningful, human-readable data, i.e. information. This latter stage of development is the
	
	key challenge--for which success depends on representative female participation in Tech.</p>
	
	
	
	<p>Adding to the challenge of finding meaningful trends is the backdrop of noise from spurious variables. This is akin
	
	to finding a needle in an increasingly complex and growing haystack.</p>
	
	
	
	<p class="quote">What&#39;s different now and has changed is it&#39;s no longer about taking this data, putting it into a computer
	
	running a calculation and getting a balance sheet answer ...</p>
	
	
	
	<p class="quote">What&#39;s important now is what is the context of the data, what is it connected to, what effect is it having on
	
	data around it... It&#39;s basically a network of the data, it&#39;s no longer sort of tabular columns, of rows
	
	of data, it&#39;s
	
	<i>interconnected patterns</i>.
	
	<br /> --Tim Cook</p>
	
	
	
	<p>This quote means that as we move away from rule-based, mechanistic data analytics toward more complex, relational
	
	and networked data, we need an equally complex paradigm to keep up. Excluding the female mind from this challenge
	
	is not simply a clumsy, myopic mistake. Worse yet, so long as the Tech Industry remains gender lop-sided, Tech will
	
	increasingly resemble another myopic beast, a cave-dweller named Cyclops.</p>
	
	
	
	<p>1.
	
	<a href="https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html" target="_blank">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages" target="_blank">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>
	
	</p>
	
	
	
	<p>3.
	
	<a href="https://www.aauw.org/research/why-so-few/" target="_blank">https://www.aauw.org/research/why-so-few/</a>
	
	</p>
	
	</div>
	
	
	
	<div class="mar 18-03 -12" id="18-03-07">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 7, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber">About the April 23 Implementation of the FCC Net Neutrality Laws:
	
	<br /> The Coming Battle of States&#39; versus Federal Rights Part II</h6>
	
	
	
	<p class="firstparagraph">Washington&#39;s assertion of States&#39; Rights yesterday may augur the first of many lawsuits over control over
	
	bandwidth.</p>
	
	</div>
	
	
	
	<div class="mar 18-03 -12" id="18-03-06">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 6, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber">April 23 Implementation of the FCC Net Neutrality Laws:
	
	<br /> The Coming Battle of States&#39; versus Federal Rights</h6>
	
	
	
	<p class="firstparagraph">Net Neutrality Rules, potentially one of the more important set of Individual Rights for us as citizens in the tech
	
	age, will soon undergo the rule changes voted by the Federal Communications Commission (FCC) this past December.
	
	In a nutshell, the Internet Service Providers (ISP&#39;s), e.g. Comcast, Cox, Verizon are granted the power--as
	
	a Title I &quot;information service&quot;--to slow down traffic, make fast- &amp; slow-lanes. Of course this is
	
	bad news for internet-users because even premium users may experience &quot;throttling&quot; if using the ISP&#39;s
	
	preferred apps. The only stipulation holds that the ISP&#39;s rules are made public. However, 21 states are bringing
	
	lawsuits to fight these changes, and the first assertion of State Law by Washington State today:</p>
	
	
	
	<p class="quote">The FCC is already embroiled in a variety of lawsuits related to its rollback of net neutrality rules, including
	
	an effort from 21 state attorneys general to get a court to block the FCC&#39;s move.</p>
	
	
	
	<p class="quote">&quot;This is symbolic politics, because the states know it is illegal to do,&quot; Roslyn Layton, a visiting scholar
	
	at the American Enterprise Institute, told NBC News. &quot;But they can put rules on the book and make it look like
	
	they&#39;re doing something.&quot; The FCC is already embroiled in a variety of lawsuits related to its rollback
	
	of net neutrality rules, including an effort from 21 state attorneys general to get a court to block the FCC&#39;s
	
	move.
	
	<sup>1</sup>
	
	</p>
	
	
	
	<p>S The big question arises over
	
	<i>who</i> has jurisdiction between the States&#39; and Federal authority; yet one thing is certain, the coming battle
	
	for protecting citizens&#39; rights will take place over jurisdiction of Internet Bandwidth turf.</p>
	
	
	
	<p>
	
	<a href="https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086"
	
	target="_blank">https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086</a>
	
	</p>
	
	
	
	<p>&nbsp;</p>
	
	</div>
	
	
	
	
	
	<div class="mar 18-03 -12" id="18-03-05">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Healthy Today!</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 5, 2018</h6>
	
	
	
	<h6 class="dailytitle chapternumber">A Return to the Question of Guns, Germs, and Steel: Part II and the Germs</h6>
	
	
	
	<p class="firstparagraph">Germs present a timely topic for today, given the especially virulent
	
	<strong>Flu Virus strain</strong>. Many, like me, have wondered why our 1940&#39;s-era
	
	<sup>1</sup> technology in Flu Vaccine fabrication wouldn&#39;t invite more innovative solutions. Without feigning any
	
	medical expertise, I have to still ask about the progress made with the ever-mutating--i.e., drifting--Flu virus&#39;
	
	surface protein &quot;head,&quot; called hemaglutinin. This strategy &quot;guesses right&quot; very effectively,
	
	and provides an effective solution for most, in most years. Yet this winter has revealed that effectiveness statistics
	
	are
	
	<i>not always</i> in our favor.</p>
	
	
	
	<p class="quote">For many decades, researchers believed the flu vaccine offered solid protection if it was a good match to the circulating
	
	strains; studies from the 1940s through the 1960s routinely showed an efficacy of 70% to 90%. But those studies
	
	relied on a misleading methodology.</p>
	
	
	
	<p class="quote">Danuta Skowronski, an epidemiologist at the BC Centre for Disease Control in Vancouver, Canada, instead blames mutations
	
	in the vaccine strain itself. The most common influenza vaccine contains an &quot;inactivated&quot; virus, which
	
	manufacturers grow in chicken eggs. As Skowronski&#39;s team first reported in 2014, the virus can mutate while
	
	it is growing in the eggs, resulting in a vaccine unable to block circulating strains.
	
	<sup>1</sup>
	
	</p>
	
	
	
	<p>Earlier, I casually mentioned &quot;guessing&quot;, yet with great respect, the science behind estimating the flu
	
	virus between the time of R &amp; D, fabrication, and the flu
	
	<i>season</i>. (This antigenic drift, not to be confused with
	
	<i>Antigenic Shift</i> in which the Flu Virus makes an abrupt change.) I&#39;ll let the CDC abbreviate this:</p>
	
	
	
	<p class="quote">One way they change is called &ldquo;antigenic drift.&rdquo; These are small changes in the genes of influenza viruses
	
	that happen continually over time as the virus replicates. These small genetic changes usually produce viruses that
	
	are pretty closely related to one another, which can be illustrated by their location close together on a phylogenetic
	
	tree. Viruses that are closely related to each other usually share the same antigenic properties and an immune system
	
	exposed to an similar virus will usually recognize it and respond
	
	<sup>2</sup>.</p>
	
	
	
	<p>So, ultimately, the strategy is to estimate the form, location, of that virus--what it will look like--at a particular
	
	period each year. This implicates a strategy to estimate the trajectory, stage by stage, of this virus, i.e. a longitudinal
	
	time-series morphology, each year. The article makes this point more precise:</p>
	
	
	
	<p class="quote">But these small genetic changes can accumulate over time and result in viruses that are antigenically different (further
	
	away on the phylogenetic tree). When this happens, the body&rsquo;s immune system may not recognize those viruses.
	
	<sup>2</sup>
	
	</p>
	
	
	
	<p>Petri dishes aside, let&#39;s focus on the changing nature of the Flu Virus, which makes itself a
	
	<i>research </i>challenge in itself because of an ever-mutating object of study. Yet, this ever-changing nature also
	
	provides the very tool Statisticians need most for estimating: Big Data. The Law of Large Numbers means that plain
	
	math can accurately plot, and in most cases predict with a moderate statistical significance, future events, sort
	
	of.</p>
	
	
	
	<p>Sort of I say because too often we predict that two separate events are more likely to occur, conditional on each
	
	other, then conditional upon other factors. This being
	
	<i>correlation</i>, but the Statistician&#39;s Holy Grail is the other kind: Causality. Causality hinges on only thre3e
	
	things: 1) Association, 2) Time Precedence, and 3) Ruling out any
	
	<i> effect</i> of spurious variables. (Hang with me, I&#39;m still getting back to the subject of our annual predictions
	
	about a few months&#39; worth of antigenic drift.)</p>
	
	
	
	<p>Therefore, Big data, and new advances in the statistical sciences, and the technology that increasingly defines our
	
	sciences, may soon refine and supercharge research into the first and third of the three points of causality. The
	
	first of these, the associations, along the phylogenetic tree, are merely a network at its base, the science of
	
	which gains computational strength each year. Rare as it is in Academia, in this case Might makes Right!</p>
	
	
	
	<p>
	
	The third tenet of causality, after association and time direction, is ruling out the effect of other factors when separating
	
	<i>cause</i> and consequence. Advances in managing big data, and statistical analysis of it, means gaining a better
	
	handle on the multiple effects of
	
	<sup>spurious </sup>factors, hence analysis optimized by new, network-graph data structure technology. The Law of Large
	
	Numbers
	
	<sup>3</sup>, i.e. the sheer number of mutations and other factors, coupled with new
	
	<strong>technology</strong>, will better inform the morphology of the
	
	<i>path</i> of the virus, along the phylogenetic tree itself. Who knows where a cure may come from, perhaps a bio-statistician
	
	out there, churning the numbers, may be the one to stumble upon a better Flu Vaccine!
	
	
	
	</p>
	
	<p>1.
	
	<a href="http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail" target="_blank"> http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail </a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual" target="_blank"> https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual </a>
	
	</p>
	
	
	
	<p>3.
	
	<a href="https://www.cdc.gov/flu/about/viruses/change.htm" target="_blank"> https://www.cdc.gov/flu/about/viruses/change.htm </a>
	
	</p>
	
	
	
	<p class="quote">&nbsp;</p>
	
	</div>
	
	
	
	<div class="mar 18-03 -12" id="18-03-03">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 3-4, 2018
	
	<br /> Weekend
	
	</h6>
	
	
	
	<h6 class="dailytitle chapternumber">A Return to the Question of Guns, Germs, and Steel</h6>
	
	
	
	<p class="firstparagraph">Back in 1997, a Pulitzer-Prize winning theory--based on Dr. Jared Diamond&#39;s
	
	<i>Guns, Germs, and Steel: The Fate of Human Societies</i> --provided the recipe book for the success of societies.
	
	Not without controversy, the theory posits that geographic and environmental preconditions, once met, provide tech
	
	&amp; resources trading opportunities, within a network of other nation-states also vying for technogical innovation.</p>
	
	
	
	<p>A nation&#39;s Technology, in turn, opens the means necessary to expansive, stable, independent sovereignty that
	
	lasts and thrives. Equally so, the nation&#39;s friends, especially those making the best-friends list, share and
	
	receive a secondary, &quot;residual&quot; technological bump over the time-course of the network&#39;s future trading,
	
	i.e. network transactions. So, if our best friends Canada and Mexico are less keen, then there is network reverberation!</p>
	
	
	
	<p>Given the advent of a real, lasting Trade-War, I would think that a network theorist wouldn&#39;t be betting on one
	
	particular node within this network. I say this because a disproportionately asymmetrical flow of technology and
	
	resources, while simultaneously raising prices on most staple goods, may spell trouble for the Every-Day person.
	
	So far, Nation-State: 0, People: 0 ... So, who wins with a Trade War? Alas, let&#39;s hope not the resurrection
	
	of the Neo-Multi-National Corporations, born from NAFTA deals, coincidentally, from the late 1990&#39;s. Bah humbug!</p>
	
	
	
	<p>&nbsp;</p>
	
	
	
	<p>1.
	
	<a href="http://www.jareddiamond.org/Jared_Diamond/Guns,_Germs,_and_Steel.html" target="_blank">Guns, Germs, and Steel. &quot;Steel: The Fates of Human Societies.&quot; Diamond J (1997).</a>
	
	</p>
	
	</div>
	
	
	
	<div class="mar 18-03 -12" id="18-03-02">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 2, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Widening Circles of Mobile-App Security Risks</h6>
	
	
	
	<p class="firstparagraph">Security, security, another day another platform risk, or risks from your device, or risks from transactions, Today&#39;s
	
	headline buried beneath a techy jargon provides a glimpse of the rising threat of web-application-based hackery:
	
	Cryptojacking.
	
	<i>Coindesk</i> reports, &quot; Opera browser introduces cryptocurrency miner protection for smartphones ... &quot;</p>
	
	
	
	<p class="quote">Cryptocurrency miners can overload smartphones&#39; CPUs, forcing 100 percent usage and potentially causing a phone
	
	to overheat. And the damage can sometimes be permanent. According to a ZDNet article, one trojan generated so much
	
	heat in a phone, its battery became swollen, permanently damaging the phone. While excessive ads were one reason
	
	for the heat generation, the main cause was that the phone&#39;s CPU was hijacked to mine for Monero.
	
	<sup>1</sup>
	
	</p>
	
	
	
	<p>The larger issue here is that the lines between trusted mobile-app authorities, i.e., certified by Play Store or
	
	Apple&#39;s is increasingly irrelevent. This is because an increasing number of app-users are ditching device-downloaded
	
	apps, preferring for browser applications--hence, a much more appetizing market for the newest generation of blackhat
	
	hackers, online thieves, peeping-toms, and other ill-wishers. There are a few driving factors for this issue--one
	
	of which is the onset of Decentralized Applications (DAPPs), which use the
	
	<i>browser</i> to interface between the Every-Day blockchain client/merchant/programmer and the actual byte-code of
	
	the blockchain (via WEB).</p>
	
	
	
	<p>More importantly, the larger issue is that we live in an age in which the exclusive, native browser language since
	
	1995, i.e. JavaScript. Security issues with browser-based apps were very low, because JavaScript never left the
	
	browser, ever. Until 2009, Data, Servers were the domain of PHP, JAVA, Python, etc. or some other language for the
	
	highly sensitive, dirty work of dipping into all that data sitting ontop of centralized servers around the world.
	
	PHP wasn&#39;t easy, so power and responsibility usually followed with all the extra effort and expertise.</p>
	
	
	
	<p>2015 augured in the Node.js server-accessing (can create, read, update, and delete date) new-born capabilities of
	
	JavaScript</p>
	
	
	
	
	
	<p>1.
	
	<a href="
	
	https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/
	
	" target="_blank"> https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/ </a>
	
	</p>
	
	</div>
	
	
	
	<div class="mar 18-03 -12" id="18-03-01">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">March 1, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Blockchain Sustainability Issues and The Double-Edged Sword</h6>
	
	
	
	<p class="firstparagraph">I couldn&#39;t help but revisit the
	
	<strong>Environmental Sustainability</strong> problem I addressed in my February 28th post. This problem, experienced by
	
	the top two crypto-currencies Bitcoin and Ethereum, is that the
	
	<i>monetary</i> value of the currency is matched to the
	
	<i>computing difficulty</i>--measured either by how much the computer is sweating, or by electricity KiloWatt Hours
	
	per year.
	
	<sup>1</sup> Digiconomist succinctly writes:</p>
	
	
	
	<p class="quote">The continuous block mining cycle incentivizes people all over the world to mine Bitcoin. As mining can provide a
	
	solid stream of revenue, people are very willing to run power-hungry machines to get a piece of it. Over the years
	
	this has caused the total energy consumption of the Bitcoin network to grow to epic proportions, as the price of
	
	the currency reached new highs.
	
	<sup>2</sup>
	
	</p>
	
	
	
	<p>And, so the issue I&#39;m addressing is a side-effect of the deepening incentivization for miners to invest more
	
	equipment, and in turn, more electricity. The article goes on to report Bitcoin&#39;s surpassing 50 TeraWatt-Hours-per-year
	
	usage has surpassed that of Portugal and Singapore, which are 49.5 TWh per year, and 49.8 TWh per year, respectively.
	
	In other words, the usage by the Bitcoin miner&#39;s cost (in electricity) compared with the miner&#39;s gain (in
	
	Bitcoins accrued by incentivized mining) drives up and incentives a deeper Carbon Footprint.</p>
	
	
	
	
	
	<p class="quote">Fueled by a meteoric rise in the Bitcoin price over the past few months, the power usage of the Bitcoin network has
	
	been increasing at a feverish pace. Just a little over three months ago, at the start of November 2017, the Bitcoin
	
	Energy Consumption Index was estimating the total electricity consumption of the Bitcoin network to be half of the
	
	current amount. On the first day of November, the estimated consumption was equal to 24.3 TWh per year.
	
	<sup>1</sup>
	
	</p>
	
	
	
	<p>
	
	Carbon Footprint, measured in this way, equates as a double-edged sword: The miner&#39;s electricity costs account for approximately
	
	65% of the profit (Bitcoin units&#39; value, measured when mined). So the
	
	<i>economic </i>usage means the cheapest available fuel is part of the business model--and it would lead to the cost
	
	of the cheapest source of energy: Dirty Coal. At the end of the day, if the
	
	<i>currency&#39;s </i>rising value means that more computationally-intensive mining is more and more profitable, then
	
	perhaps the other edge looks preferred!
	
	</p>
	
	
	
	<p>1.
	
	<a href="
	
	https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal
	
	" target="_blank"> https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal </a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="
	
	https://digiconomist.net/bitcoin-energy-consumption
	
	" target="_blank"> https://digiconomist.net/bitcoin-energy-consumption </a>
	
	</p>
	
	
	
	</div>
	
	
	
	<hr />
	
	<button id="febtop">TOP 
	
	FEBRUARY 
	
	<br />
	
	<h4>POSTS FEBRUARY 2018</h4>
	
	<br />
	
	<h6>First Blog Post!</h6>
	
	
	
	<div class="feb 18-03 -12" id="18-02-10"> 
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 10, 2018</h6>
	
	
	
	<h6>First Blog Post!</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Why are Sociologists now the Key Players in Data Analysis within the Domain of Blockchain Technologies?</h6>
	
	
	
	<p class="firstparagraph">First, let me describe that blockchain technologies, i.e. Government contracts, Business contracts, Bitcoin and other
	
	cryptocurrencies, all rely on network graph theory, both on the low-level programming technology (peer-to-peer global
	
	ip networks) across the spectrum to high-level interfaces for institutional, corporate, individual needs and uses.
	
	These blockchain &quot;network&quot; analyses depend on highly variable--and simultaneous--network changes, node
	
	changes, and link changes; and, the latter three may arbitrarily change interdependantly or not.</p>
	
	
	
	<p>Therefore, blockchain technologies must first accomodate complex node variables for contracts (relationships) that
	
	include arbitrarily hierarchical mappings and conditional data structures. Secondly, blockchain tech must face analytical
	
	challenges that arise from informal practices
	
	<sup>1</sup>, by which the organizational nodes (employees) choose to deviate from the employee role&#39;s protocol for
	
	the sake of efficiency, convenience, company culture, and multiple other levels of human factors.</p>
	
	
	
	<p>Sociologists Meyer &amp; Rowan&#39;s (1977)
	
	<i>New Institutionalism</i> explains how employees change practices and decouple
	
	<i>actual</i> organizational structure from recorded rules, as a function of organizational size, time, convenience,
	
	etc. These continually new, unknown constraints on data must be intimately understood, non-algorithm human understanding
	
	<i>by at least one side </i>of the exchange. How do we recognize unwritten, soft rules and behaviors of a bank, a person,
	
	or a company&#39;s internal bot?</p>
	
	
	
	<p>The hard sciences domain of Software Engineering, Computer Science, and Mathematics have brilliantly brought the
	
	world the blockchain tool, for which the Hard Sciences can only contribute little on how to interface with social
	
	needs. Ask yourself, how well do 1,000 top blockchain-related programmers understand the multi-dimensional layers
	
	of hierarchical social, corporate, and governmental relationship networks? Well enough to differentiate qualitative
	
	meaning in the smart-contract? Fearfully, no.</p>
	
	
	
	<p>In the past, the layers of abstraction from raw technological tool to societal use was refined, improved, integrated
	
	through multiple layers of &quot;middlemen&quot;, such as lawyers, corporate lawyers, government institutions, non-governmental,
	
	non-profit and for-profit actors. Blockchain technology, by its very nature, erases the middlemen. Suddenly, one
	
	programmer, for example, is writing the same healthcare insurance crypto-contract, that last month an entire team
	
	of hospital employees spent a month writing; then overseeing and managing different facets of this same thing.</p>
	
	
	
	<p>However, the crypto-contract, once deployed to the blockchain, auto-manages the rest, forever or for the life of
	
	the contract. Therefore, rather than redoing the trials and errors of 200 years&#39; Sociology Network Analysts&#39;
	
	research and analytical development. Therefore, medical and other social fields cannot and should not turn to the
	
	Hard Sciences for solutions. These Med researchers and developers are already at home, safe within the academic
	
	domain of the Raw Sciences of Medical Sociology, Public Health, and so on. The next ten years of blockchain technology
	
	can either be defined by unwitting, piecemeal advances, accompanied by frequent, non-improving distastrous crises.
	
	Or, the next ten years can follow Sociology&#39;s Scientific Method toward a mildly turbulent, but stable and beautiful
	
	future.</p>
	
	
	
	<p>Examples aside, the primacy of the Sociology academic field in the early 21st century quickly becomes apparent on
	
	review of the Sociologists&#39; specialization in network theories imbued with symmetrical and asymmetrical relationships,
	
	within social networks that change arbitrarily the direction, conditions, and values of those same relationships.
	
	We Sociologists deal with real-time, logical and hierarchical network mappings that appear arbitrary, yet are characterized
	
	by fixed patterns.</p>
	
	
	
	<p>No other academic field than sociology has advanced into the details, and endless network rabbit-holes that characterize
	
	societal behavior. Not until this second millenial decade could the marriage of Large Number Statistical Theory
	
	become consumated with the brilliance of early 1900&#39;s Sociological French Network Theories, like Maurice Halbswach&#39;s
	
	work on the clearly defined network patterns of a society&#39;s Collective Memory.</p>
	
	
	
	<p>No other academic field has collected and refined knowledge on network arbitrariness, such that Economic&#39;s &quot;irrational
	
	behaviors&quot; and Mathematical &quot;complexity models&quot; do not
	
	<i>touch to the bone</i> the meaning, the intersectionality of network analysis, which must incorporate simultaneous
	
	node changes (person gets job /or/ does not get job), network changes (All get jobs /or/ only 3 of 15 network groups
	
	get jobs), and most importantly the
	
	<i>relationship</i> changes (all jobs always useful /or/ half of job groups no longer useful) across time and fixed.</p>
	
	
	
	<p>Fine. So, why is Sociology&#39;s network theory so valuable beyond just the network insights gleaned from 19th and
	
	20th centuries&#39; network problems? Follow: European sociology came of age in the analog social era, while North
	
	American Sociology only recently come of age (Quebec in the 1960&#39;s [post-1968], U.S. in the 1990&#39;s[post-1999],
	
	in the digital social era. Therefore, the problem-solving patterns of past sociology are inherently small-data and
	
	more qualitative analysis, and thus only Sociology incorporates &quot;human-ness&quot; into the billion rows and
	
	columns of quantitative--numbers-only--analysis.</p>
	
	
	
	<p>For example, Oxford-developed S.I.E.N.A. Software accomplishes this task. SIENA--named for Simulation Investigation
	
	for Empirical Network Analysis--software calculates the real-time values, direction, and conditions of each relationship
	
	(link) in a network, simultaneously as each node, network, or alter-link changes or is changed; with this, it is
	
	possible to isolate directional, conditional
	
	<i>influence change</i> in real-time. Real-time sounds impossible, however, the SIENA documentation
	
	<sup id="9one">2</sup> describes its program algorithm to the statistical analysis of network data, with the focus on social networks.</p>
	
	
	
	<p>An easy example to grasp this is the concept of whether a person
	
	<i>self-selects </i>(e.g., due to subconscious leanings) into a group and thus matches to fruition the group&#39;s
	
	behavior with little group influence? Or does this same person join a group and emulates the group&#39;s behavior,
	
	by the group&#39;s influence over time. Sociological network analysis, using Snjder&#39;s SIENA software, achieves
	
	the impossible with the closed, directed graph networks that characterize blockchain technology. The network graph
	
	can be here understood as entire (complete) networks (i.e, the blockchain in its entirety without hard forks), not
	
	as personal (egocentered) networks: Using this SIENA model allows for the necessary assumptions that a set of nodes
	
	(social actors) is given, and all ties (links) between these nodes are known - except perhaps for a moderate amount
	
	of missing data</p>
	
	
	
	<p>If, and only if, this level of analysis may be achieved, the blockchain development may follow a linear, directed
	
	path of maturity with social and world needs. Until that time, that Sociology Network Theorists are called upon,
	
	blockchain developers will continue to bat their arms in the dark, stumbling over again the same bugs. Sadly, this
	
	semi-opaque future implicates the same fate as those that attempt to use blockchain for their currency, contract,
	
	and other societal needs--in this case, the blind will indeed lead the blind.</p>
	
	
	
	<p class="footnotes">1.
	
	<a href="http://www.journals.uchicago.edu/doi/abs/10.1086/226550" id="9one" target="_blank"> http://www.journals.uchicago.edu/doi/abs/10.1086/226550</a>
	
	<br />
	
	</p>
	
	<p>
	
	2.
	
	<a href="https://www.stats.ox.ac.uk/~snijders/siena/" id="9one" target="_blank"> https://www.stats.ox.ac.uk/~snijders/siena/</a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-11">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 11, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">How Can We Best Modularize our App Designs in Order to Achieve the Much Vaunted &quot;Separation of Concerns&quot;?</h6>
	
	
	
	<p class="firstparagraph">There was once a time for App Developers that our habits followed our inner-philosophers--as an Esteemed Order of
	
	Coders--we held ourselves in the highest regard to separate form from function, and style from structural design.
	
	Hence, in the early 2000&#39;s, a tri-partite, sensible world guided every web coder to abide by The scaffolding
	
	of HTML, functionality of JavaScript, and styling of CSS. A decade later, we must throw out this antiquated division
	
	of labor within web coding.</p>
	
	
	
	<p>Library modularization, (think JQuery, JSX, Bootstrap, etc.) within Javascript ES16 reveals that modules and components
	
	Must hold together CSS/HTML/JS, part by part. So, if a decade ago three teams handled html, js, css, it is now requisite
	
	to divide up 3 teams to 3 components (a team for the carousel widget, a team for the navigation widgets, and
	
	<i>
	
	each</i> of these component teams
	
	<strong>must</strong> be maintained together, not separately, the module&#39;s required html, js, css.</p>
	
	
	
	<p>This means that the new Division of Labour can no longer follow past patterns from 5 years ago. Otherwise, any and
	
	all coding will necessarily begin to &#39;reinvent the wheel.&#39; This is because any module, any library you go
	
	to, will
	
	<i>already</i> have its HTML pre-configured, JS pre-configured, CSS pre-configured. Thus, attempts to extricate new
	
	css from one module to another (or worse yet, sharing css of modules), will only invite eventual misery, almost
	
	instantly setting booby traps for the next coders upon arrival.</p>
	
	
	
	<p>So, where is the creativity? Where is the originality then? It is not gone. It has evolved to a higher level of abstraction,
	
	leaving to automation the boring stuff. So, if Vanilla JS is considered malpractice in the modern world, and if
	
	ad-hoc JQuery is mocked and scoffed at by React coders, then where is creativity? If yesterday&#39;s craft was the
	
	hoisting of 15 javascript functions on each page, the New Art of modular coding is akin to a game of Tetris. Part
	
	by part, module by module, the modern coder open-source window-browses and window-shops; goes home, and cuts and
	
	pastes, and folds and clips, then assembles and hangs to dry. Do Python programmers rewrite each particular module
	
	definition? That&#39;s absurd. Equally absurd is the javascript programmer that rewrites from scratch their modules.</p>
	
	
	
	<p>The esteemed Order of JavaScript Coders must wake up, and regain its work-load balance in this new age--an age that
	
	each year since 2014, the JavaScript language is rewritten, each year now, in both syntactic sugar and also fundamental
	
	structure--especially the importing and exporting of modules. Therefore, philosophical Honor behooves each of us
	
	to a higher complexity, and a new commitment to, the &quot;Separation of Concerns.&quot; We can allow ourselves
	
	a break, thankful for Progress, a progress by which we must
	
	<i>Stand on the Shoulders of Giants</i>, and Code-Create!</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-12">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 12, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Mark Zuckerberg&#39;s Innocence</h6>
	
	
	
	<p class="firstparagraph">Facebook Scandals
	
	<sup>1</sup> of recent months have demoralized the leadership for a role of misinformation in the Tech Age, however I
	
	charge Mark Zuckerberg&#39;s innocence
	
	<i>not</i> because all of us, as a society, were equally warned. Rather, arbitrary mathematical forces created abnormal,
	
	never-before-seen network structural density and symmetry patterns. Technological shifts were so efficient at multiplying
	
	and exacerbating misinformation because a curious sociological network phenomenon rendered parts of our daily social
	
	learning and acculturating process to network forces out of our own control.</p>
	
	
	
	<p>A January 2016 American Sociology Association Newsletter Editorial
	
	<sup> 2</sup> from Sally T. Hillsman, in which she explained how the social mechanisms of our own misinformation were
	
	not entirely within our own control to resist. In fact, the arbitrary (often random) social structural changes from
	
	higher social-media hours, create an arbitrary social network structure whose links (in their content and influence)
	
	begin to dominate over nodes (each of us). In other words, the sway of trends and opinionated critical thought becomes
	
	dominated by the relationships, e.g., the &quot;likes&quot; and &quot;shares&quot;, leading to a statistically natural
	
	propensity toward homogeneity--a.k.a. group-think. The mechanism is akin to peacefully swimming close and parallel
	
	to the coastline, and (due to random coastal floor structure), a rip-tide suddenly ships you far out to sea--a fatal
	
	and tragic fate rendering experienced swimmers out of their own control. Same principle with an arbitrary
	
	<i>underlying and unseen</i> network structure.</p>
	
	
	
	<p>Our social network structures always are prone to continual shift, and so the usual &quot;interruptions&quot; that
	
	previously stopped this inward shift soon began to disappear. Hillsman explains:</p>
	
	
	
	<p class="quote">Lies, half-truths, and misinformation spread so rapidly across the public through digital communication that the
	
	timespan for thoughtful, effective correction or rebuttal is infinitesimal. Because of confirmation Bias, misinformation
	
	and outright lies quickly strengthen preconceived truths or pre-held beliefs that are already hard to change.</p>
	
	
	
	<p>Therefore, even though we all have been pointedly warned,
	
	<i> none of us</i> without advanced sociological analysis skills could understand that a curious network phenomonenon--ultimately
	
	driven by some arbitrary mathematical calculation involving size, density, symmetry, conditional influences, and
	
	the strength of ties outweighing network nodes. For the reasons of these factors, our social inclinations were
	
	<i>out of our control</i> -- no, but really, this time they were!</p>
	
	
	
	<p>And so, we can learn from Sociology what steps to take in order to counteract random, but risky, network phenomena
	
	-- because nobody likes to go for a swim at the beach, and unwittingly get shipped out to sea!</p>
	
	
	
	<p class="footnotes">1. Wired Magazine
	
	<i>Inside the Two Years that Shook Facebook--and the World</i> (February, 2018)
	
	<a href="https://www.wired.com/story/inside-facebook-mark-zuckerberg-2-years-of-hell"
	
	target="_blank"> Wired Magazine, </a>
	
	<br />
	
	<br /> 2.ASA
	
	<i>Footnotes</i>. (January, 2016)
	
	<a href="http://www.asanet.org/footnotes/jan16/index.html" target="_blank"> www.asanet.org/footnotes/jan16/</a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-13">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 13, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">The Modern Doctors&#39; Updated Preparation for the Oath
	
	<sup>1</sup> of Hippocrates:
	
	<br /> On the 2015 Social Sciences Modification to the AAMC Medical College Admissions Test (MCAT)</h6>
	
	
	
	<p class="firstparagraph">Other than college pre-med students, few know the MCAT exam--the gatekeeper of U.S. &amp; Canadian Medical Schools--underwent
	
	a major modification in 2015.
	
	<sup>2</sup> Much deeper than Biological and Technological updates, major sections were added and/or expanded including
	
	the Social, Pyschological and Biological foundations of
	
	<i>behavior</i>. Named the
	
	<i>Health Systems Science</i>
	
	<sup>3</sup>, the American Medical Association&#39;s modern, holistic approach articulates outcomes-based measures for
	
	healthy living and disease prevention efforts. You could say the AMA is indeed,
	
	<i>woke</i>.</p>
	
	
	
	<p>But really, what&#39;s the difference and why would we care? And, who doesn&#39;t know that an apple-a-day keeps
	
	the doctor away? Dr. Jeffrey Borkan, MD, PHD of Brown University&#39;s Warren Alpert Medical School, explains the
	
	evident role of all those unnoticed social interactions involved in obtaining and consuming that apple. Further,
	
	the spatial and economic
	
	<i>availability</i> of that apple also plays a role in keeping the doctor away. Borkan explains:</p>
	
	
	
	<p class="quote">It&#39;s time for us to take a leap forward in educating physicians for the health care delivery models of the future&mdash;those
	
	that aim to improve not just the health of the individual patient and their family, but also the community and the
	
	population.
	
	<sup>4</sup>
	
	</p>
	
	
	
	<p>What, then, specifically, are the mechanisms that a community network&#39;s aggregated health may be inextricably
	
	tied up with
	
	<i>our own</i> individual health? In short, they are the sharing of health-promoting resources, timely assistance,
	
	health-promoting information channels -- all this, among the countless perks of a healthy social circle!</p>
	
	
	
	<p class="citations">1.
	
	<a href="http://www.greekmedicine.net/whos_who/The_Hippocratic_Oath.html" target="_blank">The Oath of Hippocrates</a>
	
	<br /> 2.
	
	<a href="https://students-residents.aamc.org/applying-medical-school/article/changing-mcat-exam/" target="_blank">The 2015 AAMA Changes to the Medical College Admissions Test</a>
	
	<br /> 3.
	
	<a href="https://www.ama-assn.org/education/teaching-new-content-health-systems-science" target="_blank">American Medical Association&#39;s
	
	<i>Teaching New Content Health Systems Science</i>
	
	</a>
	
	<br /> 4.
	
	<a href="https://www.ama-assn.org/education/teaching-new-content-health-systems-science" target="_blank">ibid.</a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-14">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">
	
	<s>Web Dev Affairs</s> Sociology Tomorrow!</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 14, 2018</h6>
	
	
	
	<p style="color:green;">
	
	<i>Due to the Tragic Events in Florida, Tech to the Rescue blog Rescheduled to February 16th ...]</i>
	
	</p>
	
	
	
	<h6 class="chapternumber dailytitle">
	
	<s>Tech to the Rescue: Secondary health effects of the Fitbit toward health-information sharing channels within a community.</s>
	
	</h6>
	
	
	
	<p class="firstparagraph" style="color:green;">Given that a community network&#39;s aggregated health is inextricably, and symmetrically, tied up with
	
	<i>our own</i> individual health, app-developers may design activity- and communication-based apps more responsibly,
	
	and in touch with modern healthcare recommendations. After all, if the Saintly Mark Zuckerberg&#39;s communication-
	
	and activity-based app inadvertantly led to novel, and deeply consequential, effects, then ...</p>
	
	<span class="alert">* Given the Tragic Events in the School Shooting in Florida, I felt a topic of more gravity was in order ... :( </span>
	
	
	
	<h6 class="chapternumber">Feb 14, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">A New Kernel, and the Manifestation of a Two-Hundred Year Problem named
	
	<i>Anomie</i>
	
	</h6>
	
	
	
	<p class="firstparagraph">Given the tragic events at a Florida school over Valentine&#39;s Day, 2018, who can write about Fitbits? So, thoughts
	
	and sympathy for those students today that endured this horror. 19 years after the first-of-its-kind school shooting,
	
	we as an American society have not become &#39;numb&#39; to these events. It hurts as much as it did in 1999.</p>
	
	
	
	<p>Darn that innocuous Spring day in 1999, when we heard the most absurd news-- students attacked their own colleagues
	
	at Colombine? In my blog post from January 10, I wrote that American Sociology, along with Qu&eacute;bec, came of
	
	age much later than European Sociology. The past 50 years&#39; social changes and new problems are generally atrributed
	
	for the increasing demand for sociological expertise after 1999, after a singular, senseless tragedy of a school
	
	shooting--this event, like a small kernel of societal desperation for a solution--led to a flurry of self-professed
	
	sociologists &agrave; la Michael Moore&#39;s Colombine, and other social-responsibility themed social consciousness.
	
	So far, only mutually incompatible solutions. The problem, however, is not new, only the manifestation of it.</p>
	
	
	
	<p>Suicide rates in 19th century France, disproportionately high, also served as a symptomatic manifestation of the
	
	same problem, called
	
	<i>Anomie.</i>
	
	<sup>1</sup> The term,
	
	<i>Anomie</i>, coined by Emile Durkheim in the late 1800&#39;s, captured the sense of instability, cultural and moral
	
	relativism that undermined a shared sense of meaning. Suicides, week-after-week, month-after-month? In 1897 France,
	
	noone had ever seen it before--at such rates--and people wanted answers. Alas, a kernel of social desperation leading
	
	to inquiry.</p>
	
	
	
	<p>People wanted to know why so many in the population responded negatively to the rapid changes, urbanization (Dreadful
	
	factory conditions &agrave; la
	
	<i>Taylorism&#39;s</i> calculated efficiency) new technologies, i.e. electricity, railroads, steam engines; these created
	
	an arbitrarily new world, very suddenly. Suddenly, like trying for the first time a roller-coaster, when all you&#39;ve
	
	ever known has been the carousel. So, we see technology&#39;s role for well or for ill, our job is to understand
	
	how to dial-in the tech specs necessary to keep society smiling on this roller coaster through another, yet not
	
	altogether new, technological thrill-ride.</p>
	
	
	
	<p>1.
	
	<a href="https://www.researchgate.net/publication/228173911_The_Sociology_of_Suicide" target="_blank">1897, Suicide, &Eacute;mile Durkheim.</a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-15">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH:</h5>
	
	
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 15, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card</h6>
	
	
	
	<h6>
	
	<small class="jargon">Tech blockchain jargon alert ahead, with all effort made for clarity! I treat a broad overview of the existing trajectory
	
	of blockchain-related micro-economic advancements. I make a technical &amp; contextualizing
	
	<abbr title="this link just goes down 5 paragraphs to Feb. 17th">
	
	<a href="#18-02-17"> three-part blog series in my Feb. 17-20 posts</a> on the micro-economic horizon of blockchain technologies.</abbr>
	
	</small>
	
	</h6>
	
	
	
	<p class="firstparagraph">Has anyone else been underwhelmed by the lack of Bitcoin&#39;s daily
	
	<i>presence</i>, despite its everpresence at the dinner tables and caf&eacute;s across America. Sure, it&#39;s more
	
	of a &quot;metropolitan&quot; phenomenon; and sure, it&#39;s become an accepted global platform--along with myriad
	
	other crypto-currencies, but it&#39;s exchange-worthiness remains shrowded, and misunderstood by many. Cryptocurrencies
	
	are useful as a vehicle for investment, and yes, there are Bitcoin millionaires due to the currency&#39;s rise to
	
	fame with last year&#39;s increase in value (from $1,000 to ~$20,000) etc., etc. But, so far its contributions,
	
	uses, fame are one-sidedly
	
	<i>macro-</i>economic. A recent CNET article
	
	<sup>1</sup>, among others, documents miniscule (and not improving) percentage of
	
	<i>actual</i> use at the &quot;cash-registers&quot; of society.</p>
	
	
	
	<p>Is there something wrong with such little micro-economic usage? Not at all! According to general sociological
	
	<i>Early Adopter</i> theory--based on Everett M. Rogers&#39;
	
	<i>Diffusion of Innovations</i>
	
	<sup>2</sup>--the timeline of the Innovation Adoption Lifecycle is fairly ordinary. That is, the Roger&#39;s bell curve
	
	ranges from the beginning innovators, to early adopters, early majority, and late majority. However, the blockchain
	
	articles always miss the point. Currencies are more of a distraction compared to the genuine usefulness for the
	
	every-person, in every-day affairs, on a given day--i.e., micro-economic use.</p>
	
	
	
	<p>The true value, the kind that makes our lives easier on any given day, and for the every-person, is
	
	<i>not</i> the currency, it is the contract, that allows for individualized, targeted sharing of specific information--whether
	
	financial, governmental, or any other centralized database. An example is in order before I continue, since we can
	
	all relate to the risk of using a credit or debit card, the risk most notably concerning Target store credit card
	
	hacks a couple years ago.</p>
	
	
	
	<p>Suppose a person shops at 3 different retailers, using a different credit card for each. For these 3 transactions,
	
	this person had only needed to provide two discrete pieces of information about themselves for each transaction:
	
	they prove they have the $27, $200, and $5; and they prove a third party(i.e.,CC or bank)will make that $27, $200,
	
	or $5 available, if their client agrees. Instead, for each transaction, they open their
	
	<i>entire</i> financial information, and can only hope that law-enforcement will prevent cyber-theft; and if the store&#39;s
	
	databases are hacked, then tough-luck!</p>
	
	
	
	<p>Crypto-contracts provide the technology for this individualized, risk-free transaction, rather than for each transaction,
	
	providing the generalized information for individual transaction. Highly inefficient! Nobody thinks to walk around
	
	with their life-savings in cash, then at the 7-11 store, to open their wad of cash and peel out a bill. The credit
	
	card system, blessed as it is, did not previously have technology to avoid this very thing. So, financial institutions
	
	have had to rely on the many layers of security, passwords, pins, mothers&#39; maiden names, etc. Then, based on
	
	the mathematics behind prime numbers, they hope to keep your money safe in one, centralized spot--with a bright
	
	red target on it.</p>
	
	
	
	<p>Now, the crypto-contract provides this decidedly *micro-economic* experience for the everyday person. And that, my
	
	friends, has nothing to do with crypto-currencies. There is no micro-economic value in crypto-currency, instead
	
	the crypto-
	
	<i>contract</i> is the true, unsung hero, and a hero we will all get to know. [personal opinion - this hero&#39;s name
	
	is the Ethereum Virtual Machine]. In any case, Crypto-contracts provide this ability to provide pinpointed,
	
	<i>specific, targeted information</i> as citizens, too. When we provide our drivers license number, for the sake of
	
	renting that car, we provide every aspect of information of ourselves to Hertz. They don&#39;t need this. They need
	
	to know only and exclusively driving-record related details--not the entire governmental database of information
	
	about you!</p>
	
	
	
	<p>1.
	
	<a href="https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/"
	
	target="_blank">https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/</a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="https://eric.ed.gov/?id=ED065999" target="_blank">Rogers, E. M., &amp; Shoemaker, F. F. (1971). Communication of Innovations; A Cross-Cultural Approach.</a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-16">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 16, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Tech on the Regret: Unintended, secondary effects of communication- and activity-based app-designs</h6>
	
	
	
	<p class="firstparagraph">Given that our app-use is inextricably tied up with our own behavior, activity/communication-based app developers
	
	have in the past year accepted (mostly in word) a renewed responsibility. More like resposibility for a multi-faceted
	
	power of influence granted to an industry, suddenly, disproportionately great, and
	
	<i>semi-arbitrarily related</i> to the designer&#39;s intent (and control!). After all, if the Saintly Mark Zuckerberg&#39;s
	
	activity/communication-based app inadvertantly led to novel, and deeply consequential, effects, then anyone could.</p>
	
	
	
	<p>After all, who could guess
	
	<i>how</i> these app-design effects would affect the users, years later. Who do we think programmers are, sociologists?
	
	More specifically, who could know
	
	<i>which</i> mundane coding practices, arbitrary app-design--like sharing permissions/features? Sure, everyone deep
	
	down knew their company practices yield unfathomable power of influence over the daily habits of cell-users, a.k.a.
	
	everyone. The easy part is knowing; the hard part is learning how and why certain app-features lead to behavioral
	
	risks.</p>
	
	
	
	<p>There could be no better example than the Alcoholic faced with an intervention by a loving family longing for change.
	
	The alcoholic could be forgiven for past misdeeds, but without actual
	
	<i>Acknowledgement</i> of a crisis in direction, which necessitates professional help from social scientists. Therefore,
	
	the recent
	
	<i>acknowledgments</i> signify something deeper--they signify a humility that app-designers are not sociologists, generally
	
	speaking. So, that means hiring sociologists, psychologists, anthropologists for every N
	
	<small>th</small> app-coder and software engineer. History can&#39;t be rewritten, but it can be interpreted and learned
	
	from. The acknowledgment is itself a victory if it induces learning from the raw, social sciences, whose expertise
	
	<i>can</i> predict how or why certain &quot;life&quot;-features, practices, and policies often unfold with undue and
	
	unintended social consequences.</p>
	
	
	
	<p>Water under the bridge, but going forward, it is one thing to claim a &quot;renewed sense of remorse&quot;, another
	
	to acknowledge, learn and change. Like last November
	
	<sup>1</sup> when Facebook co-founder Sean Parker confessed certain designs like &quot;social-validation feedback loop&quot;
	
	and other app-design intentions, while ignoring potential secondary effects on society. So, the
	
	<i>Acknowledgment</i> is the big win here--not so much the remorse!</p>
	
	
	
	<p>1.
	
	<a href="https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/" target="_blank">https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/</a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-17">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 17-18, 2018
	
	<br /> Weekend
	
	</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part II:
	
	<br />
	
	<br /> Seven Nuts &amp; Bolts Features of the New Blockchain Micro-Economy
	
	<br />
	
	<small class="jargon">Tech jargon alert ahead, with all effort made for clarity! Here, I provide a technical &amp; contextualizing addition
	
	to my
	
	<abbr title="this link just goes up 7 paragraphs to Feb. 15th">
	
	<a href="#18-02-15"> February 15th blog post</a>
	
	</abbr> on the micro-economic horizon of blockchain technologies. </small>
	
	</h6>
	
	
	
	<p class="firstparagraph">7 Ethereum-based technological features offer us a new world -- a decentralized new world, not dependent on the centralized
	
	servers of Instagram, Comcast, T-Mobile, Amazon, etc. With that statement ends general consensus among blockchain
	
	experts, pundits, and authors. However, if the current logistical obstacles provide controversy and competing algorithms
	
	over sustainability, security, and scalability, then they reveal much more about the general pathway of social uses
	
	(and potential effects) than they hide. In my February 15th
	
	<a href="#18-02-15">blog</a>, I touched on a few features of micro-economic uses so as to distinguish the more certain aspects of the
	
	crypto-contract horizon.</p>
	
	
	
	<p>
	
	<strong>Prologue</strong>
	
	</p>
	
	
	
	<p>So, what are some core features of block-chain technology that affect the quality of our lives, and the
	
	<i>productivity</i> of our work as a society of academics, public-sector and private-sector professionals? First, a
	
	little background and context before I outline seven blockchain functionalities. The Ethereum blockchain helps distinguish
	
	itself--and its blockchain-native language Solidity--from earlier tech, like Bitcoin and other Proof of Work-based
	
	blockchains. Ethereum blockchain offers a syntax and programming features, e.g. &quot;looping&quot;, &quot;recursion&quot;,
	
	with the full power of a
	
	<i>Turing Complete</i> language--that is, given enough resources, the language can solve any programmable problem.</p>
	
	
	
	<p>More background and a clarifying metaphor are in order: The Bitcoin blockchain transaction resembles the accounting
	
	system of a foos-ball table point rack with a basic calculator glued to the side. In contradistinction, An Ethereum
	
	blockchain transaction would resemble a network of computers,
	
	<i>which is itself,</i> a computer--hence, the name Ethereum Virtual Machine. This allows for Quickbooks to calculate
	
	into a PDF to be sent via an email contract-signing program. Much more useful!</p>
	
	
	
	<p>Therefore, Ethereum&#39;s Blockchain is more than a networked, chained list of blocks, like Bitcoin. The Ethereum
	
	blockchain is actually a &quot;Virtual Machine&quot;, like a a big networked &quot;home computer&quot;. The native
	
	language of the blockchain, Solidity, allows for an
	
	<i>application binary interface</i>, ABI. So, for example, I can type up an Ethereum contract on my home computer,
	
	then directly access by command line the blockchain itself. In layman&#39;s terms, the manner that modern-day app,
	
	for example Instagram, is a centralized API (Application Programming Interface) that allows one programming system
	
	to interact with another, such as Instragram offers a &quot;sharing API&quot; that connects to hardware contacts,
	
	thus facitilating communicating with third-party aplications, like sharing your instagram picture to your Facebook
	
	account, via your T-Mobile phone&#39;s contacts list. This API relationship broadly describes the modern world we
	
	live in, wherein a Chryser driving system exchanges API information with your T-Mobile Bluetooth network system,
	
	which exchanges API information with your own contact list, and so on, and our lives are made easier.</p>
	
	
	
	<p>So, are we out of the woods? Has Ethereum solved the blockchain question? Yes, if it were the 1920 pre-relativity
	
	days; However, with the advent of quantum computing, potential security vulnerabilities immediately arise. The reason
	
	being that digital math uses binary &quot;on/off&quot; calculations, while quantum math implicates a tertiary,
	
	<i>qubit</i> &quot;simultaneous states&quot;. Therefore, we have now entered the 3rd generation of blockchain technology,
	
	both programmable, but also quantum-proof due to mathematical graph features. For example, IOTA&#39;s blockchain
	
	design utilizes a
	
	<i>Winternitz One-Time Signature</i>, by which one&#39;s transaction is entered into with a private-key, and the blockchain
	
	moreso resembles a &quot;Tangle&quot; of a directed graph, which allows for computational &quot;states&quot;. IOTA
	
	recently garnered criticism in January 2018 due to an unfortunate crypto-hack, that exposed an apparent vulnerability.
	
	In truth, this was a case of user-error because users were
	
	<i>re-using</i> their one-time keys, which significantly decreases security to the point that a home computer could
	
	crack the code! I choose to not digress further, and quantum computing is not quite advanced enough now to cause
	
	damage, but in the future could potentially split the blockchain in two, or other quantum possibilities.</p>
	
	
	
	<p>In sum, the technical obstacles change each month, however one must not lose sight of the forest for the trees. Social
	
	useablity, potential scope and of course unintended consequences have all finally begun to emerge, at least in form,
	
	with little difference between the 2nd generation blockchain or the 3rd generation Patrician directed graph blockchain.
	
	The underlying principle of the blockchain&#39;s micro-economic utiliity through crypto-
	
	<i>contracts</i> is the same, as opposed to plain crypto-currency. you know the usual bartering solutions for Supply
	
	&amp; Demand leading to Economics Game Theory, etc. This is where we must take our leave of the Hard Sciences of
	
	Mathematics, and enter the realm of Sociology, Psychology, Anthropology and Economics.</p>
	
	
	
	<p>&nbsp;</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-19">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 19, 20189</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part III:
	
	<br />
	
	<br /> Seven Features of the New Blockchain Micro-Economy
	
	<br />
	
	<small class="jargon">Tech jargon alert ahead, with all effort made for clarity! The first 3 of 7 new possibilities thanks to the programmable
	
	blockchain.</small>
	
	</h6>
	
	
	
	<p class="firstparagraph">The guiding light through the centuries of scientific paradigms, in the Kuhnian sense
	
	<sup id="19-1">1</sup>, have derived from deductive ideas from above - whether priestly or royal decree. Then, the primacy of the
	
	<i>Scientific Method</i> from the Renaissance forward--punctuated first by Copernican Heliocentrism, then other Paradigm
	
	Shifts--has directed rational and ethical norms in each respective period, e.g. Enlightenment authors of 17th, 18th
	
	century. Fast forward to the modern period, wherein the current era&#39;s emerging paradigm holds Sharing as a collective-priority
	
	and responsibility, then an amazing philosophical moment.
	
	<i>Historical Materialism</i>
	
	<sup>2</sup> prescribes what is directly here a novel Paradigm Shift by which authority is not derived from governmental,
	
	financial sources, but rather the
	
	<i>shared</i>societal consensus about cryptographic, mathematical proofs as true authority. Further, the revolutionary
	
	shift also innately provides tools for implemention through decentralized, programmable data-sharing. Cryptography
	
	has in a sense become a
	
	<i>de jure</i> middle-person for identification and verification of property.</p>
	
	
	
	<p>
	
	<strong>I. Protecting rights through immutable records</strong>
	
	<br /> Inalieable Rights can now be identified and verified by the cryptographic authority of a mathematical proof, rather
	
	than exclusively through governmental or financial institutions from above. The modern period also has held this
	
	decentralized, individual authority as the
	
	<i>a priori</i> starting points for philosophical proofs. Premises about truth begin with the conditions of humankind,
	
	not idealogies. In fact, it was the
	
	<i>Young Hegelians</i> of early 19th century Vienna &amp; Berlin, who ushered in the Modern Era of Western Philosophy,
	
	by laying out Truth as inverted, beginning from the empirical &quot;ground&quot; upward. This &quot;upside-down
	
	tree&quot; defines philosophical modernity. Jean-Paul Sartre wrote that the whole of
	
	<i>Existentialism</i> and 20th century philsophy is a mere subset, and never escapes Continental Materialism, as argued
	
	in Sartre&#39;s
	
	<i>Search for a Method</i>.
	
	<sup>3</sup>
	
	</p>
	
	
	
	<p>All of the Sciences, prodded by this Truth of Empiricism, followed suit through all the tech innovations since Hegel.
	
	I&#39;m so surprised by this, because for me, the role of cryptography is shocking on two levels. First, cryptography
	
	resemblees philosophy rather than the Empiricism that I had envisioned would govern social rule (Some once thought
	
	nuclear sciences held this role--no longer! Mathematics takes the crown. Secondly, I&#39;m still dumbfounded that
	
	a Paradigm Shift
	
	<i>first</i> offers the tools to fulfill itself? Staggering to consider the arbitrary changes ahead for a society that
	
	is provided the tools of social structural change first, but how quite convenient!</p>
	
	
	
	<p>
	
	<strong>II. Bureaucratic Atomization in a True Sharing Economy</strong>
	
	</p>
	
	
	
	<p>It is satisfyingly reassuring to see the good-natured, altruistic efforts among the thousands, upon thousands of
	
	open-source volunteers, and blockchain innovators, like Vitalik Buterin author of Ethereum Virtual Machine, whose
	
	aims and efforts make staggering progress each quarter. The potential for removing the &quot;middle-person&quot;
	
	from the day-to-day, micro-economic &quot;cost of living&quot;. This goes for for the exchanging of titles, legal
	
	documents, etc.</p>
	
	
	
	<p>Sharing of Resources is, in my personal opinion, critical to global future--both out of increasing necessity in allocating
	
	increasingly limited resources; an arbitrary rearrangement of
	
	<i>Social Structure</i> and distribution of its resources. While the exponential population growth looms on the near
	
	horizon, a clear, pre-existing solution begins with a focus on
	
	<i>smart</i>, effective sharing of resources. The driving principle of sustainability is made convenient by means of
	
	blockchain technology, extending for example to local economies, cooperatives, ride-sharing, etc.</p>
	
	
	
	<p>
	
	<strong>III. Removing Double-Dipping from International Remittances </strong>
	
	</p>
	
	
	
	<p>
	
	<i>&quot;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.&quot;
	
	</i>
	
	<br /> --Antoine de Saint-Exup&eacute;ry, 1939</p>
	
	
	
	<p>Taxes and tariffs are difficult enough, the double-dipping of the current international remittance system, &aacute;
	
	la Western Union, does not reflect the global, sharing Economy of 2018. The existing remittance system (not speaking
	
	to
	
	<i>centralized</i>, middle-man alternatives like PayPay, etc.)--supposing if I wire $2 Loonie to a Canadian friend&#39;s
	
	Canadian Bank--requires payments executed through two separate bank transactions in two national payments systems,
	
	thus the sending country and receiving country each take a cut. Like everything else--c&#39;est la vie. Or is it?
	
	The beauty of Ethereum is that it &quot;talks&quot; well with others and across borders, while Bitcoin remains of
	
	little use for micro-transactions that involve semi-basic calculations. The reason being that Bitcoin blockchain
	
	language, Script, cannot support loops (while statements, etc.)</p>
	
	
	
	<p>Currently, both EOS and Ethereum blockchains appear poised for the most financial-friendly blockchain tech.</p>
	
	
	
	<p>1.
	
	<a href="https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers"
	
	target="_blank">https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers</a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/" target="_blank">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>
	
	</p>
	
	
	
	<p>3.
	
	<a href="http://www.bard.edu/library/arendt/pdfs/Sartre-Search.pdf" target="_blank">
	
	<i> Search for a Method</i>, Jean-Paul Sartre, 1957</a>.
	
	<br />
	
	<small>Sartre would later be awarded the Nobel Prize in 1964, but declined it.</small>
	
	</p>
	
	
	
	<p>
	
	<a href="https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf" target="_blank">4. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>
	
	</p>
	
	
	
	<p>
	
	<a href="https://hbr.org/2017/01/the-truth-about-blockchain" target="_blank">5. Harvard Business Review,
	
	<i>The Truth about Blockchain, Feb. 2017. (This is an older article, but very clear &amp; insightful)</i>
	
	</a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-20">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">&nbsp;</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 20, 2019</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part IV:
	
	<br />
	
	<br /> Seven Features of the New Blockchain Micro-Economy
	
	<br />
	
	<small class="jargon">Tech jargon alert ahead, with all effort made for clarity! The 4th through 7th outlined Features of the New Blockchain
	
	Micro-Economy</small>
	
	</h6>
	
	&nbsp;
	
	
	
	<p class="firstparagraph">I feel that data is one of the more underestimated new commodities of the age. Most visualize data as rows and columns,
	
	and at most only non-conditional dynamic data. Data are not so mute! Data, in most object-oriented languages at
	
	least, represents
	
	<i>functions</i>, conditions, and predicted values. And so, our own behavior, coupled with our networks&#39; behavior,
	
	coupled with predictive analytics--this represents a wealth of information beyond our attributed or inherited traits.
	
	The programming is
	
	<i>in</i> the data, however, citizens have become less and less involved, ceding app by centralized app our own information
	
	and ensuring profit to 3rd party marketers. The centralized nature of the internet allows for this, while the new
	
	landscape of
	
	<i>decentralized applications</i> (DAPP) completely upends this structure of the status quo.</p>
	
	
	
	<p>
	
	<strong>IV. Enabling citizens to own &amp; monetize their data (&amp; protect privacy)</strong>
	
	<br /> Ethereum offers a decentralized solution to &quot;owning&quot; one&#39;s own data, as data can be decentralized
	
	and returned to the individual&#39;s control, and
	
	<i>profit</i>. As sure as the 19th century&#39;s &quot;labor-hour&quot; became commodified to a calculable asset, i.e.
	
	property, which
	
	<i>another</i> party controls and makes profit; And as sure as the 20th century&#39;s data analytics became commodified
	
	into calculable assets for another party to take control and make profit; then only now in this 21st century does
	
	technology offer a new, more egalitarian path.</p>
	
	
	
	<p>
	
	<strong>V. Ensuring compensation for the Creators of Value </strong>
	
	<br /> So, how would decentralized innovations of blockchain
	
	<i>distributed ledger</i> technology compensate those whose actions, behavior, opinions, friend-networks, artwork,
	
	music, videos and other contributions profit the creator?</p>
	
	
	
	<p>
	
	<strong>VI. The Halcyon Age of Transaction-Chain Enterprise</strong>
	
	</p>
	
	
	
	<p class="quote">According to Greek Mythology, the days of eery, noticeable lack of storms have never been interpreted as a period
	
	of grace. Moreso,
	
	<i>Halcyon</i> tranquility only means a temporary moratorium on the winds and waves, imposed by Aeolus, God of Wind,
	
	to protect the nesting eggs of Alcyone, his daughter.</p>
	
	
	
	<p>If blockchain tech changes how we do research, analysis, and forecasting, as much as it changes international, and
	
	cross-industry transactions, then are we faced with a similar dilemma as the &quot;novelty&quot;, and double-dealing,
	
	of multi-nationals of the 1990s? No, because blockchain renders organizations, even those with a spotty past, into
	
	transparent, democratic, efficient, secure and easily scrutinized.</p>
	
	
	
	<p>After all, without transparent proof, how else would I know my bananas are the &quot;pura vida&quot; Costa Rique&ntilde;
	
	ones? More importantly, what was the carbon footprint of that banana&#39;s journey from its native soil to my breakfast
	
	table? New blockchain companies like
	
	<a href="https://www.provenance.org/">Provenance.org</a>,
	
	<a href="http://www.skuchain.com/" target="_blank">skuchain</a>,
	
	<a href="http://www.blockverify.io/">http://www.blockverify.io/</a> are a few noticeable game-changers. So, for bananas not backed by mathematical proofs,
	
	I really have to ask myself, is it
	
	<i>really</i> an authentic Fair Trade banana?</p>
	
	
	
	<p>Transactions are hardly valuable in the products themselves, if removed from the value of the
	
	<i>transaction per se</i>. International supply chain transactions, by virtue of a recently possible decentralized,
	
	permanent record and monitoring, have begun to make inroads in agriculture, petroleum, pharmaceuticals, food-supply
	
	and other multi-stage industries.</p>
	
	
	
	<p>If corporate and governmental transactions are to be made public--many bearing enterprise or State secrets, then
	
	will forecasting also go the way of birds? Possibly. Online platforms like Augur
	
	<sup id="20-8">8</sup>are creating global, decentralized prediction markets, in domains like sports betting, financial markets
	
	speculation and so forth. Armed with vast, transparent knowledge, the everyday person can now access the whims and
	
	power of Aeolus, and forecasting the winds of Fortune.</p>
	
	
	
	<p>
	
	<strong>VII. Reinventing Government &amp; Democracy</strong>
	
	<br /> ...to be completed...</p>
	
	
	
	<p>1.
	
	<a href="https://www.provenance.org/" target="_blank"> https://www.provenance.org/ </a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="http://www.skuchain.com/" target="_blank"> http://www.skuchain.com/ </a>
	
	</p>
	
	
	
	<p>3.
	
	<a href="http://www.blockverify.io/" target="_blank"> http://www.blockverify.io/ </a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-21">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 21, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Facebook-Friendly Third-Generation Data Structures</h6>
	
	
	
	<p class="firstparagraph">Today, I&#39;m going to write about data structures, and challenges that face Vitalik Buterin and other blockchain
	
	architects. &#39; Now, why in the
	
	<i>world</i> would I or anyone else care about ooh, merge sorts, bubble sorts, classificatory trees, and the advent
	
	of a third form of data structure?</p>
	
	
	
	<p>Today, we live in an ever more relational world. With all our technology, we just can&#39;t wait to hear the latest
	
	gossip about sister Becky&#39;s Boyfriend&#39;s Brother&#39;s Friend that
	
	<i>also</i> got to meet Shakira. Gossip to one person is a valuable asset to the data analyst. Because, how else could
	
	an algorithm draw simultaneous conclusions about two friends that &quot;liked&quot; the same Samsung VR, and that
	
	they are both located near Best Buy. Thanks to classificatorial wisdom of AI &amp; plain machine-learning?</p>
	
	
	
	<p>These relational queries are simply too difficult for relational, row &amp; column SQL data structures. In fact,
	
	many queries are impossible, due to unprescient database schema architectures. Next, with the need to &quot;objectify&quot;
	
	data into non-relational objects, rather than an antiquated, rigid row-and-column design. Thus, the second major
	
	type of data structure is more flexible and adept in finding these relational queries that are ever more in vogue.
	
	However, the crystal-like, pristine non-relational, No-SQL designs quickly turn to spaghetti, and are poor for scalability.
	
	Between a rock and a hard place, a third data structure has emerged in recent years.</p>
	
	
	
	<p>Graph Data Structures
	
	<sup>2</sup> allow data queries that had otherwise been impossible to capture in an entity relationship diagram. The
	
	ideal example to clarify is the manner that the Swiss banks&#39; accounts were discovered to be hiding vast amounts
	
	of hidden taxes, etc. The cover-up was so well-constructed that not until new, graph database queries discovered
	
	patterns of money flow
	
	<sup>1</sup>:</p>
	
	
	
	<p class="quote">The data was then turned into a graph format to detect then fine-tune the connections between the nodes. The Swiss
	
	Leak held around 60,000 files that contained information about over 100,000 clients in 203 countries, which means
	
	that the resulting graph database had more than 275,000 nodes with 400,000 relationships among them.</p>
	
	
	
	<p class="quote">By being able to easily visualise the networks around clients and accounts, the reporters found many more connections
	
	than they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators
	
	across the globe.</p>
	
	
	
	<p>And you thought that plagiarism-detecting software was impressive for complexity! The beauty of this newly available
	
	software (even Microsoft jumped on board in recent years) means that sociologists, economists can begin to make
	
	better headway in the way that our many interactions become more complex with more data. Remember, in the past ten
	
	minutes, more data information was just produced than most of human history! Thus, new and upcoming needs in domains
	
	like content management &amp; access control, geo-routing (public transportation), gene sequencing, bio-informatics,
	
	and so on. So, as technology takes us forward, and we make our considerations, let&#39;s stick by the golden rules
	
	of parallel processing, scalability, and, now, graph-network mindedness for the new data structures, and schema,
	
	of the Era!</p>
	
	
	
	<p>1.
	
	<a href="https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/"
	
	target="_blank"> https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/ </a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="https://neo4j.com/blog/analyzing-panama-papers-neo4j/">By being able to easily visualise the networks around clients and accounts, the reporters found many more connections
	
	than they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators
	
	across the globe. </a>
	
	<br /> Other major vendors in graph data structures based on Neo4j: OrientDB, ArangoDB, Titan, mongoDB, Complexible Stardog,
	
	and Franz AllegroGraph.</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-21">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 22, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Languages</h6>
	
	
	
	<p class="firstparagraph">While I&#39;ve had blockchain-related topics on the mind lately, it seems I can&#39;t escape it as I broach new fields--blockchain
	
	is everywhere! Well, I had begun my blog with intentions about the accelerated speed of language and syntax formation,
	
	and the curious phenomenon I&#39;d call, for lack of a better word or or my own reading, &quot;declarative-syntax-merging&quot;.
	
	This involves the curious, and largely unknown, growth of JavaScript scripting language into almost every domain
	
	of web apps, data analysis, and even the bounds of
	
	<i>Logic</i> itself. Though I won&#39;t submit my readers to a history of a language, suffice it to say that, &quot;If
	
	a certain algorithm, device, or object is programmable, then it will eventually be programmed in JavaScript.&quot;</p>
	
	
	
	<p>Without getting into technicals, I&#39;ll instead use a perfect metaphor--the manner by which English merged with
	
	French, beginning with the conquests of William of Normandy, around 1096 onward. Almost a thousand years later,
	
	we can see how English grammar inherited it&#39;s Anglo-Saxon Linguistic roots, along with the core vocabulary;
	
	Then, as English vocabulary moves past the first few thousand core words, e.g. &quot;milk&quot; or &quot;house&quot;
	
	from &quot;melche&quot; or &quot;haus&quot;, then more than 70% of English Vocabulary is directly inherited from
	
	French, e.g. &quot;lactose&quot; or &quot;mansion&quot; from &quot;lait&quot; or &quot;maison&quot;.</p>
	
	
	
	<p>Similarly, the language of the web and original browsers, JavaScript, has similarly morphed into a new language called
	
	Solidity, but in only a micro-fraction of English&#39;s time. The usual FOMO logic propels coding language use,
	
	for example FOMO induced Microsoft&#39;s flagship Text Editor, Visual Code, to adopt it years ago.
	
	<sup id="22-1">1</sup> The language of Ethereum Blockchain is Solidity, which like the above example, has two parents, one non-legitimate.
	
	It is in all respects totally JavaScript, yet with object-oriented elements of C++. For the layperson, let&#39;s
	
	just say Solidity resembles a &quot;Liger&quot;, in it is at it&#39;s core JavaScript, yet with increasing sophistication
	
	based on C++ logic, its head and torso has begun to resemble the powerful machine-code of C++ ever more. And it
	
	is a beautiful, but curious phenomonenon.</p>
	
	
	
	<p>
	
	<a href="http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171">http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171</a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-23">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 23, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">1.4 Million Reasons for more Women in Tech</h6>
	
	<a href="#18-03-08" rel="stylesheet">Blog addressed again March 8, 2018 </a>
	
	
	
	<p class="firstparagraph">1.4 million
	
	<i>new</i> jobs by 2020; End over end, year after year, the computer programming industry continues to add another
	
	20% more jobs each year, for the next five years. This is the only field that demand outstrips the supply--and increasingly
	
	short supply. So much so, the US Department of Labor forecasts U.S. citizens will be able to fill 39% of those positions;
	
	there are not enough Immigration visas (especially in the Trumpian era of isolationism) to make up the rest.</p>
	
	
	
	<p>&nbsp;</p>
	
	
	
	<p>So, how is it that only 14% of females in the entire field of cybersecurity? Silicon Valley is, at its best, obscenely
	
	one-sided. At Google, only 17% of the company&#39;s tech jobs are filled by women. Facebook women staff only 15%
	
	of tech jobs, and Twitter? 10% female. The figures on women in computer science across the nation, across the entire
	
	industry are not improving, but
	
	<i>declining</i>?
	
	<sup>1</sup>
	
	</p>
	
	
	
	<p>Of course, we&#39;ve heard these statistics from any given headline, and in the halls across the university landscape,
	
	starting with Women in STEM (Science, Tech, Engineering, Mathematics) programs.
	
	<sup>3</sup> Yet, why, with so much money, so many programs, so many non-governmental, non-profit effort?</p>
	
	
	
	<p>I argue that tech
	
	<i>climate </i> is directly to blame. Who then? Not a person, but principles are to blame. Culture--often defined as
	
	shared beliefs, norms, language and behaviors--can hardly be changed, but it can be understood.
	
	<br /> There is a book, called &quot;Program or be Programmed
	
	<sup id="24-4">4</sup>
	
	</p>
	
	, by which the author explains social consequences of a dichotomized society--between those that manipulate the environment
	
	around them, whether automating tasks at work, or simply fixing a simple software bug, by adding a comma. This literacy
	
	of the Current Era is akin to the 26-letter alphabet of written sentences and paragraphs, and--not to be taken for
	
	granted--is the exclusive form of communication, outside of a 100-foot perimeter, up until 150 years ago. Knowledge
	
	is not power, the communication of knowledge is power.
	
	
	
	<p>&nbsp;</p>
	
	
	
	<p>I argue that today, the power is to program one application programming interface (API) to talk to another API. In
	
	other words, the ability to directly communicate with software at the command-line is not now a requisite skill,
	
	but promotions would not escape this necessity! So, now reverting back to the subject of women in tech, American
	
	leadership is in deep peril without more female insight. I will finish by citing that Ares, the violent, untamed
	
	Greek
	
	<i>god of war</i>, cannot always drive the Capitalist engine; because She, Athena, the
	
	<i>goddess of intelligence</i> represents true strategy!</p>
	
	
	
	<p>1.
	
	<a href="https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html" target="_blank">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages" target="_blank">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>
	
	</p>
	
	
	
	<p>3.
	
	<a href="https://www.aauw.org/research/why-so-few/" target="_blank">https://www.aauw.org/research/why-so-few/</a>
	
	</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-24">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 24-25, 2018
	
	<br /> Weekend
	
	</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Joys of Automation</h6>
	
	
	
	<p class="firstparagraph">While coding up a better shell for this website, I thought it&#39;s remarkable how our lives get easier and easier
	
	with each passing year of tech. Using JavaScript--the primordial web-coding language--I marvel at the convenience
	
	of delegating mundande coding stuff to taskrunners, like
	
	<i>Gulp</i>--a programmable package manager that &quot;bundles&quot; up the libraries to be used in the app. It is
	
	truly a joy!</p>
	
	
	
	<p>I write four styling
	
	<i>functions</i>, with about 16
	
	<i>variables</i> and voil&agrave;! I finish in 3 hours what would have taken me 15 hours, then another 5 hours a month
	
	for upkeep. Instead, now, it&#39;s as though I wind up the clock, and need only periodically check, and perhaps
	
	update a variable or two ... Technology. I&#39;m gushing for joy.</p>
	
	
	
	<p>This was mere JavaScript--with a truly
	
	<i>Turing Complete</i>--pan-algorithm status--languages, the possibilities are 100-fold with Python language library
	
	collection; this library collection includes NASA modules, mathematical proofs, and limitless uses from web-scraping
	
	for unstructured data to an excellent data visualization collection. Sometimes I feel like I&#39;m in the Library
	
	of Congress, and better yet because, PIP, the Python package manager acts and automates like a cyborg librarian,
	
	for lack of better imagery.</p>
	
	
	
	<p>I just have so much joy watching a project come to life, and it&#39;s even a greater delight if this project comes
	
	to life and stays alive, through the joys of automation!</p>
	
	
	
	<p>&nbsp;</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-26">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 26, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">Cryptocurrency&#39;s Cumbersome Carbon Footprint</h6>
	
	
	
	<p class="firstparagraph">I must confess that on the very day that Our Daily Tech Blog gets an under-the-head make-over for security&#39;s
	
	sake, I wrote the new formatting file right over today&#39;s post. Amazing, and the two occurred nearly simultaneously
	
	as I worked on them, their paths crossed and poof, gone! Same platform, and I paid the price! Whether I change my
	
	ways is yet to be seen, but I shall continue with my original theme for the day, namely, Sustainability, a.k.a.
	
	Carbon Footprint.</p>
	
	
	
	<p class="quote">Power consumption is one of the major costs of bitcoin mining, as dedicated machines crunch the algorithms that build
	
	a record of every single bitcoin transaction and are rewarded with tiny fractions of a bitcoin for their efforts.
	
	<sup id="explain">1</sup>
	
	</p>
	
	
	
	<p>Today I have a mild Critique and Praise for the blockchain sustainability problem caused by sky-high electricity
	
	bills! Computer algorithms do waste electricity, not like your Widescreen. More electricity is gobbled up by small
	
	and large mining operations in nearly every country than small nations!
	
	<sup id="electricity">1</sup>. Ethereum, Bitcoin and a handful of other &quot;Proof-of-Work&quot; designs require electricity because
	
	the investment in equipment itself is investment, but more importantly, two-way incentivation for mining drives
	
	the system, and the scarcity demand through difficulty computations.</p>
	
	
	
	<p>So, is the electricity consumption really
	
	<i>correlated</i> with the value, scarcity, of the currency? Yes. Digiconomist--a cryptocurrency analysis site
	
	<sup
	
	id="digiconomist">3</sup> estimates
	
	<i>each</i>Ethereum transaction represents a 45 Kilowatt-hour of electricity&#39;s mining. (A visa credit card transaction
	
	is 0.00651 kWh. The entire Ethereum global blockchain could be &quot;using as much as 4.2 Terawatt-hours (tWh),
	
	or slightly more than the country of Cyprus
	
	<sup id="cyprus">1</sup>.&quot; So, electricity comparisons are telling, but how does this relate to its environment impact, sustainability
	
	itself?</p>
	
	
	
	<p>Carbon Footprint, our energy consumption index, can be compared to another element of scarcity, which dictates fluctuations
	
	in value: Gold. According to
	
	<i>Digiconomist</i>, an average household&#39;s Carbon Footprint is about 10 tons of CO2 per year. The article does
	
	the math for us very succinctly:</p>
	
	
	
	<p class="quote">On top of this, we can find that the process of mining Bitcoin isn&rsquo;t just more energy-intensive, but also has
	
	a bigger environmental impact. To reach that conclusion, we first need to estimate the carbon footprint for both.
	
	For Bitcoin we can, again, get this number from the Bitcoin Energy Consumption Index. For gold, we assume a carbon
	
	footprint of 20 tons of CO2e per every kilogram of gold mined
	
	<sup id="digiconomist2">3</sup>.</p>
	
	
	
	<p>The article continues to clarify that 33,000 kilograms of CO2 per unit mines (comparatively, one Bitcoin&#39;s worth
	
	of Gold is 4,000 kilograms of CO2). At the end of the day, the electricity costs--if not sustainable long-term--could
	
	spell trouble. Hence, the three S&#39;s, mentioned last, sustainability is perhaps a larger issue than blockchain
	
	Security and Scalability challenges. Again, this is a problem that the third largest cryptocurrency does not have:
	
	<i>Ripple</i>, which does not bear a carbon footprint
	
	<sup id="ripple">4</sup>.</p>
	
	
	
	<p>&nbsp;</p>
	
	
	
	<p>0.
	
	<a href="https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/" target="_blank">https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/</a>
	
	<br /> For those new to cryptocurrencies, this is a fairly succinct article to cryptocurrencies, and their underlying
	
	structure.</p>
	
	
	
	<p>1.
	
	<a href="https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin"
	
	target="_blank">https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin</a>
	
	</p>
	
	
	
	<p>2.
	
	<a href="http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use" target="_blank">http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use</a>
	
	</p>
	
	
	
	<p>3.
	
	<a href="https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining" target="_blank">https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining</a>
	
	</p>
	
	
	
	<p>4.
	
	<a href="https://ripple.com/xrp/" target="_blank">https://ripple.com/xrp/</a>
	
	</p>
	
	
	
	<p>&nbsp;</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-27">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 27, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">After Yesterday&#39;s Scathing Post, A Look at my own Carbon Footprint</h6>
	
	
	
	<p class="firstparagraph">In my reflections about environment sustainability issues, I confess I&#39;m sort of a hypocrite ... The whole matter
	
	that caused my own introspection begins with my usual daily vexation: Tangles of wires!
	
	<br /> &nbsp; ... I&#39;ve been having electricity issues, here as of late ...</p>
	
	
	
	<p>On one side, my tiny Yoga Ultrabook usually likes to charge just fine with my phone charger--if I&#39;m stuck without
	
	my charger. And due to an untimely end to the charger, I needed a replacement. So, singular errand of the day was
	
	a trip to Best Buy to peruse for a 45-Watt USB-C charger ( the new oval charging port on Samsung 8&#39;s, LG G6&#39;s
	
	and newer Apple products).</p>
	
	
	
	<p>Meanwhile, my credit-card sized Raspberry Pi computer runs on an old-school USB charger--a whole Linux Server Tower
	
	on a cell-phone charger. Then, we have my trusty Dell (actual) Tower with 16 Gigs of RAM, 2-terabytes, etc. that
	
	also seems to need an extra fan to stay cool--probably the sustainability of 100 Raspberry computers. My entire
	
	carbon footprint changes more with the electrical products that I use, than my vehicle! Well, I also confess my
	
	Jeep Cherokee can&#39;t even boast 20 miles per hour ... oops, conscience pangs, ouch ... Well, hypocritical, slightly,
	
	but found not guilty since I&#39;m a bike-commuter for life!</p>
	
	
	
	<p>&nbsp;</p>
	
	</div>
	
	
	
	<div class="feb 18-03 -12" id="18-02-28">
	
	<hr />
	
	
	
	<a href="#top2"><button>Top</button></a>
	
	&nbsp;
	
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	
	
	<p class="author">by Thomas Maestas, MA</p>
	
	
	
	<h6 class="chapternumber">Feb 28, 2018</h6>
	
	
	
	<h6 class="chapternumber dailytitle">One Last Word about Bitcoin&#39;s Carbon Footprint</h6>
	
	
	
	<p class="firstparagraph">Environmental Sustainability, again, and a higher-level view of the dilemmea...I couldn&#39;t resist:
	
	<br /> Bitcoin&#39;s Initial Coin Offering was 2011 or so, then Ethereum, with Ether for currency was 2015; These two,
	
	ever so prescient designs, also have their Achilles Heal. These two are
	
	<strong>&quot;Proof of Work&quot; currency algorithsms</strong>. This means that the &quot;Demand&quot; side of supply-and-demand,
	
	derives from
	
	<i>difficulty levels</i> of crypto-blocks to mine. So, miners are incentivized to spend $1500 on a semi-mediocre-good
	
	mining rig (which is basically 20 NVIDIA Graphics Cards tied together to stack of two-by-fours with lots of fans
	
	... erhem, sustainability?...</p>
	
	
	
	<p>And for each block that is &quot;solved&quot;, hence the block being validated, and somebody&#39;s cryptocurrency
	
	purchase/transaction is resolved! (takes about 12 minutes for the whole global blockchain to cycle, and Ethereum
	
	is less than a minute). So, the whole cycle continues, churning through coal- and carbon-stained hands of the electricity
	
	fed to these crypto-mining rigs
	
	<sup>1</sup>. For many it&#39;s a hobby, like the British Hobbyists&#39; love for ham- and short-wave radio setups, yet
	
	this profitable, yet particular hobby resembles the 1870&#39;s coal factory smoke stacks in South London!</p>
	
	
	
	<p>Let&#39;s face it, if Ethereum is able to successfully hard-fork to a Proof-of-Stake system soon--and Vitalik Buterin
	
	and his crew assure us it is coming
	
	<sup>2</sup>--then great--problem solved, everything eventually converts to Ethereum. If
	
	<i>not</i>they face an existential threat. Because, in a more enlightened ten years from now, those mining depots
	
	<i>would</i> look like unfettered factory smoke-stacks. Proof-of-Stack, whose currency value is not set to difficult
	
	of algorithm puzzle (hence,
	
	<i>proof-of-work</i>, but rather to ownership of &quot;voting pools&quot;, which is a
	
	<i>
	
	<strong>Consensus-Based Blockchain algorithm</strong>
	
	</i> [Complex subject best reserved for a rainy day, or better yet, no day! I may revisit this alternative in a funner
	
	way, here&#39;s a glimpse from Vitalk&#39;s @VitalikButerin tweet yesterday:</p>
	
	
	
	<p class="quote">Question for mathematicians: is there a assumed-to-be-normal number (ie. digits are random, like pi or e) where you
	
	can calculate the nth digit in log(n) (or even polylog(n)) time? If so, then H(x) = digits[x ... x+100] seems like
	
	it would be a cool cryptographic hash algo.</p>
	
	
	
	<p>Now, I am by no means a detective, but by the sound of those tweets, the Proof-of-Work algorithm seems to still be
	
	of utmost importance ...</p>
	
	
	
	<p>1.
	
	<a href="https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/" target="_blank">https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/</a> and also,
	
	<a href="https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch"
	
	target="_blank">https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch</a>
	
	</p>
	
	</div>
	
	
	
	<div>
	
	<p id="pageend" style="padding-bottom:150px;">&nbsp;</p>
	
	</div>
	
	Top of Page</button>
	
	
	
	<p>Copyright &copy; 2018 All Rights Reserved. &nbsp; | &nbsp;
	
	<a href="http://www.thomasmaestas.net" title="Contact Information: thomasmaestas.net/">
	
	thomasmaestas.net </a>&nbsp; | &nbsp; 
	
	<img src="dist/img/paypal.PNG" alt="PayPal Emblem" height="
	
	15"  ></img>
	
	<a href="https://www.paypal.com/paypalme/ThomasMaestas" style="color:white;text-decoration:none;">
	
	&nbsp;
	
	Blog Support  Appreciated!</a> 
	
	</p>   
	`;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	
	
	console.log('blog-feb-loader');
	document.getElementById("blog-feb").innerHTML = ` 
	<hr />
	<button id="febtop">TOP</button> 
	<br />
	<h4>POSTS FEBRUARY 2018</h4>
	<br />
	<h6>First Blog Post!</h6>
	
	<div class="feb 18-03 -12" id="18-02-10">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 10, 2018</h6>
	
	<h6>First Blog Post!</h6>
	
	<h6 class="chapternumber dailytitle">Why are Sociologists now the Key Players in Data Analysis within the Domain of Blockchain Technologies?</h6>
	
	<p class="firstparagraph">First, let me describe that blockchain technologies, i.e. Government contracts, Business contracts, Bitcoin and other
	cryptocurrencies, all rely on network graph theory, both on the low-level programming technology (peer-to-peer global
	ip networks) across the spectrum to high-level interfaces for institutional, corporate, individual needs and uses.
	These blockchain &quot;network&quot; analyses depend on highly variable--and simultaneous--network changes, node
	changes, and link changes; and, the latter three may arbitrarily change interdependantly or not.</p>
	
	<p>Therefore, blockchain technologies must first accomodate complex node variables for contracts (relationships) that
	include arbitrarily hierarchical mappings and conditional data structures. Secondly, blockchain tech must face analytical
	challenges that arise from informal practices
	<sup>1</sup>, by which the organizational nodes (employees) choose to deviate from the employee role&#39;s protocol for
	the sake of efficiency, convenience, company culture, and multiple other levels of human factors.</p>
	
	<p>Sociologists Meyer &amp; Rowan&#39;s (1977)
	<i>New Institutionalism</i> explains how employees change practices and decouple
	<i>actual</i> organizational structure from recorded rules, as a function of organizational size, time, convenience,
	etc. These continually new, unknown constraints on data must be intimately understood, non-algorithm human understanding
	<i>by at least one side </i>of the exchange. How do we recognize unwritten, soft rules and behaviors of a bank, a person,
	or a company&#39;s internal bot?</p>
	
	<p>The hard sciences domain of Software Engineering, Computer Science, and Mathematics have brilliantly brought the
	world the blockchain tool, for which the Hard Sciences can only contribute little on how to interface with social
	needs. Ask yourself, how well do 1,000 top blockchain-related programmers understand the multi-dimensional layers
	of hierarchical social, corporate, and governmental relationship networks? Well enough to differentiate qualitative
	meaning in the smart-contract? Fearfully, no.</p>
	
	<p>In the past, the layers of abstraction from raw technological tool to societal use was refined, improved, integrated
	through multiple layers of &quot;middlemen&quot;, such as lawyers, corporate lawyers, government institutions, non-governmental,
	non-profit and for-profit actors. Blockchain technology, by its very nature, erases the middlemen. Suddenly, one
	programmer, for example, is writing the same healthcare insurance crypto-contract, that last month an entire team
	of hospital employees spent a month writing; then overseeing and managing different facets of this same thing.</p>
	
	<p>However, the crypto-contract, once deployed to the blockchain, auto-manages the rest, forever or for the life of
	the contract. Therefore, rather than redoing the trials and errors of 200 years&#39; Sociology Network Analysts&#39;
	research and analytical development. Therefore, medical and other social fields cannot and should not turn to the
	Hard Sciences for solutions. These Med researchers and developers are already at home, safe within the academic
	domain of the Raw Sciences of Medical Sociology, Public Health, and so on. The next ten years of blockchain technology
	can either be defined by unwitting, piecemeal advances, accompanied by frequent, non-improving distastrous crises.
	Or, the next ten years can follow Sociology&#39;s Scientific Method toward a mildly turbulent, but stable and beautiful
	future.</p>
	
	<p>Examples aside, the primacy of the Sociology academic field in the early 21st century quickly becomes apparent on
	review of the Sociologists&#39; specialization in network theories imbued with symmetrical and asymmetrical relationships,
	within social networks that change arbitrarily the direction, conditions, and values of those same relationships.
	We Sociologists deal with real-time, logical and hierarchical network mappings that appear arbitrary, yet are characterized
	by fixed patterns.</p>
	
	<p>No other academic field than sociology has advanced into the details, and endless network rabbit-holes that characterize
	societal behavior. Not until this second millenial decade could the marriage of Large Number Statistical Theory
	become consumated with the brilliance of early 1900&#39;s Sociological French Network Theories, like Maurice Halbswach&#39;s
	work on the clearly defined network patterns of a society&#39;s Collective Memory.</p>
	
	<p>No other academic field has collected and refined knowledge on network arbitrariness, such that Economic&#39;s &quot;irrational
	behaviors&quot; and Mathematical &quot;complexity models&quot; do not
	<i>touch to the bone</i> the meaning, the intersectionality of network analysis, which must incorporate simultaneous
	node changes (person gets job /or/ does not get job), network changes (All get jobs /or/ only 3 of 15 network groups
	get jobs), and most importantly the
	<i>relationship</i> changes (all jobs always useful /or/ half of job groups no longer useful) across time and fixed.</p>
	
	<p>Fine. So, why is Sociology&#39;s network theory so valuable beyond just the network insights gleaned from 19th and
	20th centuries&#39; network problems? Follow: European sociology came of age in the analog social era, while North
	American Sociology only recently come of age (Quebec in the 1960&#39;s [post-1968], U.S. in the 1990&#39;s[post-1999],
	in the digital social era. Therefore, the problem-solving patterns of past sociology are inherently small-data and
	more qualitative analysis, and thus only Sociology incorporates &quot;human-ness&quot; into the billion rows and
	columns of quantitative--numbers-only--analysis.</p>
	
	<p>For example, Oxford-developed S.I.E.N.A. Software accomplishes this task. SIENA--named for Simulation Investigation
	for Empirical Network Analysis--software calculates the real-time values, direction, and conditions of each relationship
	(link) in a network, simultaneously as each node, network, or alter-link changes or is changed; with this, it is
	possible to isolate directional, conditional
	<i>influence change</i> in real-time. Real-time sounds impossible, however, the SIENA documentation
	<sup id="9one">2</sup> describes its program algorithm to the statistical analysis of network data, with the focus on social networks.</p>
	
	<p>An easy example to grasp this is the concept of whether a person
	<i>self-selects </i>(e.g., due to subconscious leanings) into a group and thus matches to fruition the group&#39;s
	behavior with little group influence? Or does this same person join a group and emulates the group&#39;s behavior,
	by the group&#39;s influence over time. Sociological network analysis, using Snjder&#39;s SIENA software, achieves
	the impossible with the closed, directed graph networks that characterize blockchain technology. The network graph
	can be here understood as entire (complete) networks (i.e, the blockchain in its entirety without hard forks), not
	as personal (egocentered) networks: Using this SIENA model allows for the necessary assumptions that a set of nodes
	(social actors) is given, and all ties (links) between these nodes are known - except perhaps for a moderate amount
	of missing data</p>
	
	<p>If, and only if, this level of analysis may be achieved, the blockchain development may follow a linear, directed
	path of maturity with social and world needs. Until that time, that Sociology Network Theorists are called upon,
	blockchain developers will continue to bat their arms in the dark, stumbling over again the same bugs. Sadly, this
	semi-opaque future implicates the same fate as those that attempt to use blockchain for their currency, contract,
	and other societal needs--in this case, the blind will indeed lead the blind.</p>
	
	<p class="footnotes">1.
	<a href="http://www.journals.uchicago.edu/doi/abs/10.1086/226550" id="9one" target="_blank"> http://www.journals.uchicago.edu/doi/abs/10.1086/226550</a>
	<br />
	</p>
	<p>
	2.
	<a href="https://www.stats.ox.ac.uk/~snijders/siena/" id="9one" target="_blank"> https://www.stats.ox.ac.uk/~snijders/siena/</a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-11">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 11, 2018</h6>
	
	<h6 class="chapternumber dailytitle">How Can We Best Modularize our App Designs in Order to Achieve the Much Vaunted &quot;Separation of Concerns&quot;?</h6>
	
	<p class="firstparagraph">There was once a time for App Developers that our habits followed our inner-philosophers--as an Esteemed Order of
	Coders--we held ourselves in the highest regard to separate form from function, and style from structural design.
	Hence, in the early 2000&#39;s, a tri-partite, sensible world guided every web coder to abide by The scaffolding
	of HTML, functionality of JavaScript, and styling of CSS. A decade later, we must throw out this antiquated division
	of labor within web coding.</p>
	
	<p>Library modularization, (think JQuery, JSX, Bootstrap, etc.) within Javascript ES16 reveals that modules and components
	Must hold together CSS/HTML/JS, part by part. So, if a decade ago three teams handled html, js, css, it is now requisite
	to divide up 3 teams to 3 components (a team for the carousel widget, a team for the navigation widgets, and
	<i>
	each</i> of these component teams
	<strong>must</strong> be maintained together, not separately, the module&#39;s required html, js, css.</p>
	
	<p>This means that the new Division of Labour can no longer follow past patterns from 5 years ago. Otherwise, any and
	all coding will necessarily begin to &#39;reinvent the wheel.&#39; This is because any module, any library you go
	to, will
	<i>already</i> have its HTML pre-configured, JS pre-configured, CSS pre-configured. Thus, attempts to extricate new
	css from one module to another (or worse yet, sharing css of modules), will only invite eventual misery, almost
	instantly setting booby traps for the next coders upon arrival.</p>
	
	<p>So, where is the creativity? Where is the originality then? It is not gone. It has evolved to a higher level of abstraction,
	leaving to automation the boring stuff. So, if Vanilla JS is considered malpractice in the modern world, and if
	ad-hoc JQuery is mocked and scoffed at by React coders, then where is creativity? If yesterday&#39;s craft was the
	hoisting of 15 javascript functions on each page, the New Art of modular coding is akin to a game of Tetris. Part
	by part, module by module, the modern coder open-source window-browses and window-shops; goes home, and cuts and
	pastes, and folds and clips, then assembles and hangs to dry. Do Python programmers rewrite each particular module
	definition? That&#39;s absurd. Equally absurd is the javascript programmer that rewrites from scratch their modules.</p>
	
	<p>The esteemed Order of JavaScript Coders must wake up, and regain its work-load balance in this new age--an age that
	each year since 2014, the JavaScript language is rewritten, each year now, in both syntactic sugar and also fundamental
	structure--especially the importing and exporting of modules. Therefore, philosophical Honor behooves each of us
	to a higher complexity, and a new commitment to, the &quot;Separation of Concerns.&quot; We can allow ourselves
	a break, thankful for Progress, a progress by which we must
	<i>Stand on the Shoulders of Giants</i>, and Code-Create!</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-12">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 12, 2018</h6>
	
	<h6 class="chapternumber dailytitle">Mark Zuckerberg&#39;s Innocence</h6>
	
	<p class="firstparagraph">Facebook Scandals
	<sup>1</sup> of recent months have demoralized the leadership for a role of misinformation in the Tech Age, however I
	charge Mark Zuckerberg&#39;s innocence
	<i>not</i> because all of us, as a society, were equally warned. Rather, arbitrary mathematical forces created abnormal,
	never-before-seen network structural density and symmetry patterns. Technological shifts were so efficient at multiplying
	and exacerbating misinformation because a curious sociological network phenomenon rendered parts of our daily social
	learning and acculturating process to network forces out of our own control.</p>
	
	<p>A January 2016 American Sociology Association Newsletter Editorial
	<sup> 2</sup> from Sally T. Hillsman, in which she explained how the social mechanisms of our own misinformation were
	not entirely within our own control to resist. In fact, the arbitrary (often random) social structural changes from
	higher social-media hours, create an arbitrary social network structure whose links (in their content and influence)
	begin to dominate over nodes (each of us). In other words, the sway of trends and opinionated critical thought becomes
	dominated by the relationships, e.g., the &quot;likes&quot; and &quot;shares&quot;, leading to a statistically natural
	propensity toward homogeneity--a.k.a. group-think. The mechanism is akin to peacefully swimming close and parallel
	to the coastline, and (due to random coastal floor structure), a rip-tide suddenly ships you far out to sea--a fatal
	and tragic fate rendering experienced swimmers out of their own control. Same principle with an arbitrary
	<i>underlying and unseen</i> network structure.</p>
	
	<p>Our social network structures always are prone to continual shift, and so the usual &quot;interruptions&quot; that
	previously stopped this inward shift soon began to disappear. Hillsman explains:</p>
	
	<p class="quote">Lies, half-truths, and misinformation spread so rapidly across the public through digital communication that the
	timespan for thoughtful, effective correction or rebuttal is infinitesimal. Because of confirmation Bias, misinformation
	and outright lies quickly strengthen preconceived truths or pre-held beliefs that are already hard to change.</p>
	
	<p>Therefore, even though we all have been pointedly warned,
	<i> none of us</i> without advanced sociological analysis skills could understand that a curious network phenomonenon--ultimately
	driven by some arbitrary mathematical calculation involving size, density, symmetry, conditional influences, and
	the strength of ties outweighing network nodes. For the reasons of these factors, our social inclinations were
	<i>out of our control</i> -- no, but really, this time they were!</p>
	
	<p>And so, we can learn from Sociology what steps to take in order to counteract random, but risky, network phenomena
	-- because nobody likes to go for a swim at the beach, and unwittingly get shipped out to sea!</p>
	
	<p class="footnotes">1. Wired Magazine
	<i>Inside the Two Years that Shook Facebook--and the World</i> (February, 2018)
	<a href="https://www.wired.com/story/inside-facebook-mark-zuckerberg-2-years-of-hell"
	  target="_blank"> Wired Magazine, </a>
	<br />
	<br /> 2.ASA
	<i>Footnotes</i>. (January, 2016)
	<a href="http://www.asanet.org/footnotes/jan16/index.html" target="_blank"> www.asanet.org/footnotes/jan16/</a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-13">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 13, 2018</h6>
	
	<h6 class="chapternumber dailytitle">The Modern Doctors&#39; Updated Preparation for the Oath
	<sup>1</sup> of Hippocrates:
	<br /> On the 2015 Social Sciences Modification to the AAMC Medical College Admissions Test (MCAT)</h6>
	
	<p class="firstparagraph">Other than college pre-med students, few know the MCAT exam--the gatekeeper of U.S. &amp; Canadian Medical Schools--underwent
	a major modification in 2015.
	<sup>2</sup> Much deeper than Biological and Technological updates, major sections were added and/or expanded including
	the Social, Pyschological and Biological foundations of
	<i>behavior</i>. Named the
	<i>Health Systems Science</i>
	<sup>3</sup>, the American Medical Association&#39;s modern, holistic approach articulates outcomes-based measures for
	healthy living and disease prevention efforts. You could say the AMA is indeed,
	<i>woke</i>.</p>
	
	<p>But really, what&#39;s the difference and why would we care? And, who doesn&#39;t know that an apple-a-day keeps
	the doctor away? Dr. Jeffrey Borkan, MD, PHD of Brown University&#39;s Warren Alpert Medical School, explains the
	evident role of all those unnoticed social interactions involved in obtaining and consuming that apple. Further,
	the spatial and economic
	<i>availability</i> of that apple also plays a role in keeping the doctor away. Borkan explains:</p>
	
	<p class="quote">It&#39;s time for us to take a leap forward in educating physicians for the health care delivery models of the future&mdash;those
	that aim to improve not just the health of the individual patient and their family, but also the community and the
	population.
	<sup>4</sup>
	</p>
	
	<p>What, then, specifically, are the mechanisms that a community network&#39;s aggregated health may be inextricably
	tied up with
	<i>our own</i> individual health? In short, they are the sharing of health-promoting resources, timely assistance,
	health-promoting information channels -- all this, among the countless perks of a healthy social circle!</p>
	
	<p class="citations">1.
	<a href="http://www.greekmedicine.net/whos_who/The_Hippocratic_Oath.html" target="_blank">The Oath of Hippocrates</a>
	<br /> 2.
	<a href="https://students-residents.aamc.org/applying-medical-school/article/changing-mcat-exam/" target="_blank">The 2015 AAMA Changes to the Medical College Admissions Test</a>
	<br /> 3.
	<a href="https://www.ama-assn.org/education/teaching-new-content-health-systems-science" target="_blank">American Medical Association&#39;s
	  <i>Teaching New Content Health Systems Science</i>
	</a>
	<br /> 4.
	<a href="https://www.ama-assn.org/education/teaching-new-content-health-systems-science" target="_blank">ibid.</a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-14">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">
	<s>Web Dev Affairs</s> Sociology Tomorrow!</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 14, 2018</h6>
	
	<p style="color:green;">
	<i>Due to the Tragic Events in Florida, Tech to the Rescue blog Rescheduled to February 16th ...]</i>
	</p>
	
	<h6 class="chapternumber dailytitle">
	<s>Tech to the Rescue: Secondary health effects of the Fitbit toward health-information sharing channels within a community.</s>
	</h6>
	
	<p class="firstparagraph" style="color:green;">Given that a community network&#39;s aggregated health is inextricably, and symmetrically, tied up with
	<i>our own</i> individual health, app-developers may design activity- and communication-based apps more responsibly,
	and in touch with modern healthcare recommendations. After all, if the Saintly Mark Zuckerberg&#39;s communication-
	and activity-based app inadvertantly led to novel, and deeply consequential, effects, then ...</p>
	<span class="alert">* Given the Tragic Events in the School Shooting in Florida, I felt a topic of more gravity was in order ... :( </span>
	
	<h6 class="chapternumber">Feb 14, 2018</h6>
	
	<h6 class="chapternumber dailytitle">A New Kernel, and the Manifestation of a Two-Hundred Year Problem named
	<i>Anomie</i>
	</h6>
	
	<p class="firstparagraph">Given the tragic events at a Florida school over Valentine&#39;s Day, 2018, who can write about Fitbits? So, thoughts
	and sympathy for those students today that endured this horror. 19 years after the first-of-its-kind school shooting,
	we as an American society have not become &#39;numb&#39; to these events. It hurts as much as it did in 1999.</p>
	
	<p>Darn that innocuous Spring day in 1999, when we heard the most absurd news-- students attacked their own colleagues
	at Colombine? In my blog post from January 10, I wrote that American Sociology, along with Qu&eacute;bec, came of
	age much later than European Sociology. The past 50 years&#39; social changes and new problems are generally atrributed
	for the increasing demand for sociological expertise after 1999, after a singular, senseless tragedy of a school
	shooting--this event, like a small kernel of societal desperation for a solution--led to a flurry of self-professed
	sociologists &agrave; la Michael Moore&#39;s Colombine, and other social-responsibility themed social consciousness.
	So far, only mutually incompatible solutions. The problem, however, is not new, only the manifestation of it.</p>
	
	<p>Suicide rates in 19th century France, disproportionately high, also served as a symptomatic manifestation of the
	same problem, called
	<i>Anomie.</i>
	<sup>1</sup> The term,
	<i>Anomie</i>, coined by Emile Durkheim in the late 1800&#39;s, captured the sense of instability, cultural and moral
	relativism that undermined a shared sense of meaning. Suicides, week-after-week, month-after-month? In 1897 France,
	noone had ever seen it before--at such rates--and people wanted answers. Alas, a kernel of social desperation leading
	to inquiry.</p>
	
	<p>People wanted to know why so many in the population responded negatively to the rapid changes, urbanization (Dreadful
	factory conditions &agrave; la
	<i>Taylorism&#39;s</i> calculated efficiency) new technologies, i.e. electricity, railroads, steam engines; these created
	an arbitrarily new world, very suddenly. Suddenly, like trying for the first time a roller-coaster, when all you&#39;ve
	ever known has been the carousel. So, we see technology&#39;s role for well or for ill, our job is to understand
	how to dial-in the tech specs necessary to keep society smiling on this roller coaster through another, yet not
	altogether new, technological thrill-ride.</p>
	
	<p>1.
	<a href="https://www.researchgate.net/publication/228173911_The_Sociology_of_Suicide" target="_blank">1897, Suicide, &Eacute;mile Durkheim.</a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-15">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 15, 2018</h6>
	
	<h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card</h6>
	
	<h6>
	<small class="jargon">Tech blockchain jargon alert ahead, with all effort made for clarity! I treat a broad overview of the existing trajectory
	  of blockchain-related micro-economic advancements. I make a technical &amp; contextualizing
	  <abbr title="this link just goes down 5 paragraphs to Feb. 17th">
	    <a href="#18-02-17"> three-part blog series in my Feb. 17-20 posts</a> on the micro-economic horizon of blockchain technologies.</abbr>
	</small>
	</h6>
	
	<p class="firstparagraph">Has anyone else been underwhelmed by the lack of Bitcoin&#39;s daily
	<i>presence</i>, despite its everpresence at the dinner tables and caf&eacute;s across America. Sure, it&#39;s more
	of a &quot;metropolitan&quot; phenomenon; and sure, it&#39;s become an accepted global platform--along with myriad
	other crypto-currencies, but it&#39;s exchange-worthiness remains shrowded, and misunderstood by many. Cryptocurrencies
	are useful as a vehicle for investment, and yes, there are Bitcoin millionaires due to the currency&#39;s rise to
	fame with last year&#39;s increase in value (from $1,000 to ~$20,000) etc., etc. But, so far its contributions,
	uses, fame are one-sidedly
	<i>macro-</i>economic. A recent CNET article
	<sup>1</sup>, among others, documents miniscule (and not improving) percentage of
	<i>actual</i> use at the &quot;cash-registers&quot; of society.</p>
	
	<p>Is there something wrong with such little micro-economic usage? Not at all! According to general sociological
	<i>Early Adopter</i> theory--based on Everett M. Rogers&#39;
	<i>Diffusion of Innovations</i>
	<sup>2</sup>--the timeline of the Innovation Adoption Lifecycle is fairly ordinary. That is, the Roger&#39;s bell curve
	ranges from the beginning innovators, to early adopters, early majority, and late majority. However, the blockchain
	articles always miss the point. Currencies are more of a distraction compared to the genuine usefulness for the
	every-person, in every-day affairs, on a given day--i.e., micro-economic use.</p>
	
	<p>The true value, the kind that makes our lives easier on any given day, and for the every-person, is
	<i>not</i> the currency, it is the contract, that allows for individualized, targeted sharing of specific information--whether
	financial, governmental, or any other centralized database. An example is in order before I continue, since we can
	all relate to the risk of using a credit or debit card, the risk most notably concerning Target store credit card
	hacks a couple years ago.</p>
	
	<p>Suppose a person shops at 3 different retailers, using a different credit card for each. For these 3 transactions,
	this person had only needed to provide two discrete pieces of information about themselves for each transaction:
	they prove they have the $27, $200, and $5; and they prove a third party(i.e.,CC or bank)will make that $27, $200,
	or $5 available, if their client agrees. Instead, for each transaction, they open their
	<i>entire</i> financial information, and can only hope that law-enforcement will prevent cyber-theft; and if the store&#39;s
	databases are hacked, then tough-luck!</p>
	
	<p>Crypto-contracts provide the technology for this individualized, risk-free transaction, rather than for each transaction,
	providing the generalized information for individual transaction. Highly inefficient! Nobody thinks to walk around
	with their life-savings in cash, then at the 7-11 store, to open their wad of cash and peel out a bill. The credit
	card system, blessed as it is, did not previously have technology to avoid this very thing. So, financial institutions
	have had to rely on the many layers of security, passwords, pins, mothers&#39; maiden names, etc. Then, based on
	the mathematics behind prime numbers, they hope to keep your money safe in one, centralized spot--with a bright
	red target on it.</p>
	
	<p>Now, the crypto-contract provides this decidedly *micro-economic* experience for the everyday person. And that, my
	friends, has nothing to do with crypto-currencies. There is no micro-economic value in crypto-currency, instead
	the crypto-
	<i>contract</i> is the true, unsung hero, and a hero we will all get to know. [personal opinion - this hero&#39;s name
	is the Ethereum Virtual Machine]. In any case, Crypto-contracts provide this ability to provide pinpointed,
	<i>specific, targeted information</i> as citizens, too. When we provide our drivers license number, for the sake of
	renting that car, we provide every aspect of information of ourselves to Hertz. They don&#39;t need this. They need
	to know only and exclusively driving-record related details--not the entire governmental database of information
	about you!</p>
	
	<p>1.
	<a href="https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/"
	  target="_blank">https://www.cnet.com/news/bitcoin-cryptocurrency-big-in-investing-but-still-lousy-for-buying-a-sandwich/</a>
	</p>
	
	<p>2.
	<a href="https://eric.ed.gov/?id=ED065999" target="_blank">Rogers, E. M., &amp; Shoemaker, F. F. (1971). Communication of Innovations; A Cross-Cultural Approach.</a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-16">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 16, 2018</h6>
	
	<h6 class="chapternumber dailytitle">Tech on the Regret: Unintended, secondary effects of communication- and activity-based app-designs</h6>
	
	<p class="firstparagraph">Given that our app-use is inextricably tied up with our own behavior, activity/communication-based app developers
	have in the past year accepted (mostly in word) a renewed responsibility. More like resposibility for a multi-faceted
	power of influence granted to an industry, suddenly, disproportionately great, and
	<i>semi-arbitrarily related</i> to the designer&#39;s intent (and control!). After all, if the Saintly Mark Zuckerberg&#39;s
	activity/communication-based app inadvertantly led to novel, and deeply consequential, effects, then anyone could.</p>
	
	<p>After all, who could guess
	<i>how</i> these app-design effects would affect the users, years later. Who do we think programmers are, sociologists?
	More specifically, who could know
	<i>which</i> mundane coding practices, arbitrary app-design--like sharing permissions/features? Sure, everyone deep
	down knew their company practices yield unfathomable power of influence over the daily habits of cell-users, a.k.a.
	everyone. The easy part is knowing; the hard part is learning how and why certain app-features lead to behavioral
	risks.</p>
	
	<p>There could be no better example than the Alcoholic faced with an intervention by a loving family longing for change.
	The alcoholic could be forgiven for past misdeeds, but without actual
	<i>Acknowledgement</i> of a crisis in direction, which necessitates professional help from social scientists. Therefore,
	the recent
	<i>acknowledgments</i> signify something deeper--they signify a humility that app-designers are not sociologists, generally
	speaking. So, that means hiring sociologists, psychologists, anthropologists for every N
	<small>th</small> app-coder and software engineer. History can&#39;t be rewritten, but it can be interpreted and learned
	from. The acknowledgment is itself a victory if it induces learning from the raw, social sciences, whose expertise
	<i>can</i> predict how or why certain &quot;life&quot;-features, practices, and policies often unfold with undue and
	unintended social consequences.</p>
	
	<p>Water under the bridge, but going forward, it is one thing to claim a &quot;renewed sense of remorse&quot;, another
	to acknowledge, learn and change. Like last November
	<sup>1</sup> when Facebook co-founder Sean Parker confessed certain designs like &quot;social-validation feedback loop&quot;
	and other app-design intentions, while ignoring potential secondary effects on society. So, the
	<i>Acknowledgment</i> is the big win here--not so much the remorse!</p>
	
	<p>1.
	<a href="https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/" target="_blank">https://digitaladdictsblog.com/facebook-co-founder-says-company-built-to-exploit-you/</a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-17">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 17-18, 2018
	<br /> Weekend
	</h6>
	
	<h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part II:
	<br />
	<br /> Seven Nuts &amp; Bolts Features of the New Blockchain Micro-Economy
	<br />
	<small class="jargon">Tech jargon alert ahead, with all effort made for clarity! Here, I provide a technical &amp; contextualizing addition
	  to my
	  <abbr title="this link just goes up 7 paragraphs to Feb. 15th">
	    <a href="#18-02-15"> February 15th blog post</a>
	  </abbr> on the micro-economic horizon of blockchain technologies. </small>
	</h6>
	
	<p class="firstparagraph">7 Ethereum-based technological features offer us a new world -- a decentralized new world, not dependent on the centralized
	servers of Instagram, Comcast, T-Mobile, Amazon, etc. With that statement ends general consensus among blockchain
	experts, pundits, and authors. However, if the current logistical obstacles provide controversy and competing algorithms
	over sustainability, security, and scalability, then they reveal much more about the general pathway of social uses
	(and potential effects) than they hide. In my February 15th
	<a href="#18-02-15">blog</a>, I touched on a few features of micro-economic uses so as to distinguish the more certain aspects of the
	crypto-contract horizon.</p>
	
	<p>
	<strong>Prologue</strong>
	</p>
	
	<p>So, what are some core features of block-chain technology that affect the quality of our lives, and the
	<i>productivity</i> of our work as a society of academics, public-sector and private-sector professionals? First, a
	little background and context before I outline seven blockchain functionalities. The Ethereum blockchain helps distinguish
	itself--and its blockchain-native language Solidity--from earlier tech, like Bitcoin and other Proof of Work-based
	blockchains. Ethereum blockchain offers a syntax and programming features, e.g. &quot;looping&quot;, &quot;recursion&quot;,
	with the full power of a
	<i>Turing Complete</i> language--that is, given enough resources, the language can solve any programmable problem.</p>
	
	<p>More background and a clarifying metaphor are in order: The Bitcoin blockchain transaction resembles the accounting
	system of a foos-ball table point rack with a basic calculator glued to the side. In contradistinction, An Ethereum
	blockchain transaction would resemble a network of computers,
	<i>which is itself,</i> a computer--hence, the name Ethereum Virtual Machine. This allows for Quickbooks to calculate
	into a PDF to be sent via an email contract-signing program. Much more useful!</p>
	
	<p>Therefore, Ethereum&#39;s Blockchain is more than a networked, chained list of blocks, like Bitcoin. The Ethereum
	blockchain is actually a &quot;Virtual Machine&quot;, like a a big networked &quot;home computer&quot;. The native
	language of the blockchain, Solidity, allows for an
	<i>application binary interface</i>, ABI. So, for example, I can type up an Ethereum contract on my home computer,
	then directly access by command line the blockchain itself. In layman&#39;s terms, the manner that modern-day app,
	for example Instagram, is a centralized API (Application Programming Interface) that allows one programming system
	to interact with another, such as Instragram offers a &quot;sharing API&quot; that connects to hardware contacts,
	thus facitilating communicating with third-party aplications, like sharing your instagram picture to your Facebook
	account, via your T-Mobile phone&#39;s contacts list. This API relationship broadly describes the modern world we
	live in, wherein a Chryser driving system exchanges API information with your T-Mobile Bluetooth network system,
	which exchanges API information with your own contact list, and so on, and our lives are made easier.</p>
	
	<p>So, are we out of the woods? Has Ethereum solved the blockchain question? Yes, if it were the 1920 pre-relativity
	days; However, with the advent of quantum computing, potential security vulnerabilities immediately arise. The reason
	being that digital math uses binary &quot;on/off&quot; calculations, while quantum math implicates a tertiary,
	<i>qubit</i> &quot;simultaneous states&quot;. Therefore, we have now entered the 3rd generation of blockchain technology,
	both programmable, but also quantum-proof due to mathematical graph features. For example, IOTA&#39;s blockchain
	design utilizes a
	<i>Winternitz One-Time Signature</i>, by which one&#39;s transaction is entered into with a private-key, and the blockchain
	moreso resembles a &quot;Tangle&quot; of a directed graph, which allows for computational &quot;states&quot;. IOTA
	recently garnered criticism in January 2018 due to an unfortunate crypto-hack, that exposed an apparent vulnerability.
	In truth, this was a case of user-error because users were
	<i>re-using</i> their one-time keys, which significantly decreases security to the point that a home computer could
	crack the code! I choose to not digress further, and quantum computing is not quite advanced enough now to cause
	damage, but in the future could potentially split the blockchain in two, or other quantum possibilities.</p>
	
	<p>In sum, the technical obstacles change each month, however one must not lose sight of the forest for the trees. Social
	useablity, potential scope and of course unintended consequences have all finally begun to emerge, at least in form,
	with little difference between the 2nd generation blockchain or the 3rd generation Patrician directed graph blockchain.
	The underlying principle of the blockchain&#39;s micro-economic utiliity through crypto-
	<i>contracts</i> is the same, as opposed to plain crypto-currency. you know the usual bartering solutions for Supply
	&amp; Demand leading to Economics Game Theory, etc. This is where we must take our leave of the Hard Sciences of
	Mathematics, and enter the realm of Sociology, Psychology, Anthropology and Economics.</p>
	
	<p>&nbsp;</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-19">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 19, 20189</h6>
	
	<h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part III:
	<br />
	<br /> Seven Features of the New Blockchain Micro-Economy
	<br />
	<small class="jargon">Tech jargon alert ahead, with all effort made for clarity! The first 3 of 7 new possibilities thanks to the programmable
	  blockchain.</small>
	</h6>
	
	<p class="firstparagraph">The guiding light through the centuries of scientific paradigms, in the Kuhnian sense
	<sup id="19-1">1</sup>, have derived from deductive ideas from above - whether priestly or royal decree. Then, the primacy of the
	<i>Scientific Method</i> from the Renaissance forward--punctuated first by Copernican Heliocentrism, then other Paradigm
	Shifts--has directed rational and ethical norms in each respective period, e.g. Enlightenment authors of 17th, 18th
	century. Fast forward to the modern period, wherein the current era&#39;s emerging paradigm holds Sharing as a collective-priority
	and responsibility, then an amazing philosophical moment.
	<i>Historical Materialism</i>
	<sup>2</sup> prescribes what is directly here a novel Paradigm Shift by which authority is not derived from governmental,
	financial sources, but rather the
	<i>shared</i>societal consensus about cryptographic, mathematical proofs as true authority. Further, the revolutionary
	shift also innately provides tools for implemention through decentralized, programmable data-sharing. Cryptography
	has in a sense become a
	<i>de jure</i> middle-person for identification and verification of property.</p>
	
	<p>
	<strong>I. Protecting rights through immutable records</strong>
	<br /> Inalieable Rights can now be identified and verified by the cryptographic authority of a mathematical proof, rather
	than exclusively through governmental or financial institutions from above. The modern period also has held this
	decentralized, individual authority as the
	<i>a priori</i> starting points for philosophical proofs. Premises about truth begin with the conditions of humankind,
	not idealogies. In fact, it was the
	<i>Young Hegelians</i> of early 19th century Vienna &amp; Berlin, who ushered in the Modern Era of Western Philosophy,
	by laying out Truth as inverted, beginning from the empirical &quot;ground&quot; upward. This &quot;upside-down
	tree&quot; defines philosophical modernity. Jean-Paul Sartre wrote that the whole of
	<i>Existentialism</i> and 20th century philsophy is a mere subset, and never escapes Continental Materialism, as argued
	in Sartre&#39;s
	<i>Search for a Method</i>.
	<sup>3</sup>
	</p>
	
	<p>All of the Sciences, prodded by this Truth of Empiricism, followed suit through all the tech innovations since Hegel.
	I&#39;m so surprised by this, because for me, the role of cryptography is shocking on two levels. First, cryptography
	resemblees philosophy rather than the Empiricism that I had envisioned would govern social rule (Some once thought
	nuclear sciences held this role--no longer! Mathematics takes the crown. Secondly, I&#39;m still dumbfounded that
	a Paradigm Shift
	<i>first</i> offers the tools to fulfill itself? Staggering to consider the arbitrary changes ahead for a society that
	is provided the tools of social structural change first, but how quite convenient!</p>
	
	<p>
	<strong>II. Bureaucratic Atomization in a True Sharing Economy</strong>
	</p>
	
	<p>It is satisfyingly reassuring to see the good-natured, altruistic efforts among the thousands, upon thousands of
	open-source volunteers, and blockchain innovators, like Vitalik Buterin author of Ethereum Virtual Machine, whose
	aims and efforts make staggering progress each quarter. The potential for removing the &quot;middle-person&quot;
	from the day-to-day, micro-economic &quot;cost of living&quot;. This goes for for the exchanging of titles, legal
	documents, etc.</p>
	
	<p>Sharing of Resources is, in my personal opinion, critical to global future--both out of increasing necessity in allocating
	increasingly limited resources; an arbitrary rearrangement of
	<i>Social Structure</i> and distribution of its resources. While the exponential population growth looms on the near
	horizon, a clear, pre-existing solution begins with a focus on
	<i>smart</i>, effective sharing of resources. The driving principle of sustainability is made convenient by means of
	blockchain technology, extending for example to local economies, cooperatives, ride-sharing, etc.</p>
	
	<p>
	<strong>III. Removing Double-Dipping from International Remittances </strong>
	</p>
	
	<p>
	<i>&quot;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.&quot;
	  </i>
	<br /> --Antoine de Saint-Exup&eacute;ry, 1939</p>
	
	<p>Taxes and tariffs are difficult enough, the double-dipping of the current international remittance system, &aacute;
	la Western Union, does not reflect the global, sharing Economy of 2018. The existing remittance system (not speaking
	to
	<i>centralized</i>, middle-man alternatives like PayPay, etc.)--supposing if I wire $2 Loonie to a Canadian friend&#39;s
	Canadian Bank--requires payments executed through two separate bank transactions in two national payments systems,
	thus the sending country and receiving country each take a cut. Like everything else--c&#39;est la vie. Or is it?
	The beauty of Ethereum is that it &quot;talks&quot; well with others and across borders, while Bitcoin remains of
	little use for micro-transactions that involve semi-basic calculations. The reason being that Bitcoin blockchain
	language, Script, cannot support loops (while statements, etc.)</p>
	
	<p>Currently, both EOS and Ethereum blockchains appear poised for the most financial-friendly blockchain tech.</p>
	
	<p>1.
	<a href="https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers"
	  target="_blank">https://www.economist.com/news/business/21722869-anti-establishment-technology-faces-ironic-turn-fortune-governments-may-be-big-backers</a>
	</p>
	
	<p>2.
	<a href="https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/" target="_blank">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>
	</p>
	
	<p>3.
	<a href="http://www.bard.edu/library/arendt/pdfs/Sartre-Search.pdf" target="_blank">
	  <i> Search for a Method</i>, Jean-Paul Sartre, 1957</a>.
	<br />
	<small>Sartre would later be awarded the Nobel Prize in 1964, but declined it.</small>
	</p>
	
	<p>
	<a href="https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf" target="_blank">4. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>
	</p>
	
	<p>
	<a href="https://hbr.org/2017/01/the-truth-about-blockchain" target="_blank">5. Harvard Business Review,
	  <i>The Truth about Blockchain, Feb. 2017. (This is an older article, but very clear &amp; insightful)</i>
	</a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-20">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">&nbsp;</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 20, 2019</h6>
	
	<h6 class="chapternumber dailytitle">Blockchains, Bitcoins and The Unnecessary Risk of Shopping at Target with a Credit Card, Part IV:
	<br />
	<br /> Seven Features of the New Blockchain Micro-Economy
	<br />
	<small class="jargon">Tech jargon alert ahead, with all effort made for clarity! The 4th through 7th outlined Features of the New Blockchain
	  Micro-Economy</small>
	</h6>
	&nbsp;
	
	<p class="firstparagraph">I feel that data is one of the more underestimated new commodities of the age. Most visualize data as rows and columns,
	and at most only non-conditional dynamic data. Data are not so mute! Data, in most object-oriented languages at
	least, represents
	<i>functions</i>, conditions, and predicted values. And so, our own behavior, coupled with our networks&#39; behavior,
	coupled with predictive analytics--this represents a wealth of information beyond our attributed or inherited traits.
	The programming is
	<i>in</i> the data, however, citizens have become less and less involved, ceding app by centralized app our own information
	and ensuring profit to 3rd party marketers. The centralized nature of the internet allows for this, while the new
	landscape of
	<i>decentralized applications</i> (DAPP) completely upends this structure of the status quo.</p>
	
	<p>
	<strong>IV. Enabling citizens to own &amp; monetize their data (&amp; protect privacy)</strong>
	<br /> Ethereum offers a decentralized solution to &quot;owning&quot; one&#39;s own data, as data can be decentralized
	and returned to the individual&#39;s control, and
	<i>profit</i>. As sure as the 19th century&#39;s &quot;labor-hour&quot; became commodified to a calculable asset, i.e.
	property, which
	<i>another</i> party controls and makes profit; And as sure as the 20th century&#39;s data analytics became commodified
	into calculable assets for another party to take control and make profit; then only now in this 21st century does
	technology offer a new, more egalitarian path.</p>
	
	<p>
	<strong>V. Ensuring compensation for the Creators of Value </strong>
	<br /> So, how would decentralized innovations of blockchain
	<i>distributed ledger</i> technology compensate those whose actions, behavior, opinions, friend-networks, artwork,
	music, videos and other contributions profit the creator?</p>
	
	<p>
	<strong>VI. The Halcyon Age of Transaction-Chain Enterprise</strong>
	</p>
	
	<p class="quote">According to Greek Mythology, the days of eery, noticeable lack of storms have never been interpreted as a period
	of grace. Moreso,
	<i>Halcyon</i> tranquility only means a temporary moratorium on the winds and waves, imposed by Aeolus, God of Wind,
	to protect the nesting eggs of Alcyone, his daughter.</p>
	
	<p>If blockchain tech changes how we do research, analysis, and forecasting, as much as it changes international, and
	cross-industry transactions, then are we faced with a similar dilemma as the &quot;novelty&quot;, and double-dealing,
	of multi-nationals of the 1990s? No, because blockchain renders organizations, even those with a spotty past, into
	transparent, democratic, efficient, secure and easily scrutinized.</p>
	
	<p>After all, without transparent proof, how else would I know my bananas are the &quot;pura vida&quot; Costa Rique&ntilde;
	ones? More importantly, what was the carbon footprint of that banana&#39;s journey from its native soil to my breakfast
	table? New blockchain companies like
	<a href="https://www.provenance.org/">Provenance.org</a>,
	<a href="http://www.skuchain.com/" target="_blank">skuchain</a>,
	<a href="http://www.blockverify.io/">http://www.blockverify.io/</a> are a few noticeable game-changers. So, for bananas not backed by mathematical proofs,
	I really have to ask myself, is it
	<i>really</i> an authentic Fair Trade banana?</p>
	
	<p>Transactions are hardly valuable in the products themselves, if removed from the value of the
	<i>transaction per se</i>. International supply chain transactions, by virtue of a recently possible decentralized,
	permanent record and monitoring, have begun to make inroads in agriculture, petroleum, pharmaceuticals, food-supply
	and other multi-stage industries.</p>
	
	<p>If corporate and governmental transactions are to be made public--many bearing enterprise or State secrets, then
	will forecasting also go the way of birds? Possibly. Online platforms like Augur
	<sup id="20-8">8</sup>are creating global, decentralized prediction markets, in domains like sports betting, financial markets
	speculation and so forth. Armed with vast, transparent knowledge, the everyday person can now access the whims and
	power of Aeolus, and forecasting the winds of Fortune.</p>
	
	<p>
	<strong>VII. Reinventing Government &amp; Democracy</strong>
	<br /> ...to be completed...</p>
	
	<p>1.
	<a href="https://www.provenance.org/" target="_blank"> https://www.provenance.org/ </a>
	</p>
	
	<p>2.
	<a href="http://www.skuchain.com/" target="_blank"> http://www.skuchain.com/ </a>
	</p>
	
	<p>3.
	<a href="http://www.blockverify.io/" target="_blank"> http://www.blockverify.io/ </a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-21">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Data Analysis Musing</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 21, 2018</h6>
	
	<h6 class="chapternumber dailytitle">Facebook-Friendly Third-Generation Data Structures</h6>
	
	<p class="firstparagraph">Today, I&#39;m going to write about data structures, and challenges that face Vitalik Buterin and other blockchain
	architects. &#39; Now, why in the
	<i>world</i> would I or anyone else care about ooh, merge sorts, bubble sorts, classificatory trees, and the advent
	of a third form of data structure?</p>
	
	<p>Today, we live in an ever more relational world. With all our technology, we just can&#39;t wait to hear the latest
	gossip about sister Becky&#39;s Boyfriend&#39;s Brother&#39;s Friend that
	<i>also</i> got to meet Shakira. Gossip to one person is a valuable asset to the data analyst. Because, how else could
	an algorithm draw simultaneous conclusions about two friends that &quot;liked&quot; the same Samsung VR, and that
	they are both located near Best Buy. Thanks to classificatorial wisdom of AI &amp; plain machine-learning?</p>
	
	<p>These relational queries are simply too difficult for relational, row &amp; column SQL data structures. In fact,
	many queries are impossible, due to unprescient database schema architectures. Next, with the need to &quot;objectify&quot;
	data into non-relational objects, rather than an antiquated, rigid row-and-column design. Thus, the second major
	type of data structure is more flexible and adept in finding these relational queries that are ever more in vogue.
	However, the crystal-like, pristine non-relational, No-SQL designs quickly turn to spaghetti, and are poor for scalability.
	Between a rock and a hard place, a third data structure has emerged in recent years.</p>
	
	<p>Graph Data Structures
	<sup>2</sup> allow data queries that had otherwise been impossible to capture in an entity relationship diagram. The
	ideal example to clarify is the manner that the Swiss banks&#39; accounts were discovered to be hiding vast amounts
	of hidden taxes, etc. The cover-up was so well-constructed that not until new, graph database queries discovered
	patterns of money flow
	<sup>1</sup>:</p>
	
	<p class="quote">The data was then turned into a graph format to detect then fine-tune the connections between the nodes. The Swiss
	Leak held around 60,000 files that contained information about over 100,000 clients in 203 countries, which means
	that the resulting graph database had more than 275,000 nodes with 400,000 relationships among them.</p>
	
	<p class="quote">By being able to easily visualise the networks around clients and accounts, the reporters found many more connections
	than they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators
	across the globe.</p>
	
	<p>And you thought that plagiarism-detecting software was impressive for complexity! The beauty of this newly available
	software (even Microsoft jumped on board in recent years) means that sociologists, economists can begin to make
	better headway in the way that our many interactions become more complex with more data. Remember, in the past ten
	minutes, more data information was just produced than most of human history! Thus, new and upcoming needs in domains
	like content management &amp; access control, geo-routing (public transportation), gene sequencing, bio-informatics,
	and so on. So, as technology takes us forward, and we make our considerations, let&#39;s stick by the golden rules
	of parallel processing, scalability, and, now, graph-network mindedness for the new data structures, and schema,
	of the Era!</p>
	
	<p>1.
	<a href="https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/"
	  target="_blank"> https://www.globalbankingandfinance.com/how-a-graph-database-unearthed-major-financial-improprieties/ </a>
	</p>
	
	<p>2.
	<a href="https://neo4j.com/blog/analyzing-panama-papers-neo4j/" target="_blank">By being able to easily visualise the networks around clients and accounts, the reporters found many more connections
	  than they had before, which lead to the Swiss Leaks revelations soon being shared with the public and regulators
	  across the globe. </a>
	<br /> Other major vendors in graph data structures based on Neo4j: OrientDB, ArangoDB, Titan, mongoDB, Complexible Stardog,
	and Franz AllegroGraph.</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-21">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 22, 2018</h6>
	
	<h6 class="chapternumber dailytitle">Languages</h6>
	
	<p class="firstparagraph">While I&#39;ve had blockchain-related topics on the mind lately, it seems I can&#39;t escape it as I broach new fields--blockchain
	is everywhere! Well, I had begun my blog with intentions about the accelerated speed of language and syntax formation,
	and the curious phenomenon I&#39;d call, for lack of a better word or or my own reading, &quot;declarative-syntax-merging&quot;.
	This involves the curious, and largely unknown, growth of JavaScript scripting language into almost every domain
	of web apps, data analysis, and even the bounds of
	<i>Logic</i> itself. Though I won&#39;t submit my readers to a history of a language, suffice it to say that, &quot;If
	a certain algorithm, device, or object is programmable, then it will eventually be programmed in JavaScript.&quot;</p>
	
	<p>Without getting into technicals, I&#39;ll instead use a perfect metaphor--the manner by which English merged with
	French, beginning with the conquests of William of Normandy, around 1096 onward. Almost a thousand years later,
	we can see how English grammar inherited it&#39;s Anglo-Saxon Linguistic roots, along with the core vocabulary;
	Then, as English vocabulary moves past the first few thousand core words, e.g. &quot;milk&quot; or &quot;house&quot;
	from &quot;melche&quot; or &quot;haus&quot;, then more than 70% of English Vocabulary is directly inherited from
	French, e.g. &quot;lactose&quot; or &quot;mansion&quot; from &quot;lait&quot; or &quot;maison&quot;.</p>
	
	<p>Similarly, the language of the web and original browsers, JavaScript, has similarly morphed into a new language called
	Solidity, but in only a micro-fraction of English&#39;s time. The usual FOMO logic propels coding language use,
	for example FOMO induced Microsoft&#39;s flagship Text Editor, Visual Code, to adopt it years ago.
	<sup id="22-1">1</sup> The language of Ethereum Blockchain is Solidity, which like the above example, has two parents, one non-legitimate.
	It is in all respects totally JavaScript, yet with object-oriented elements of C++. For the layperson, let&#39;s
	just say Solidity resembles a &quot;Liger&quot;, in it is at it&#39;s core JavaScript, yet with increasing sophistication
	based on C++ logic, its head and torso has begun to resemble the powerful machine-code of C++ ever more. And it
	is a beautiful, but curious phenomonenon.</p>
	
	<p>
	<a href="http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171" target="_blank">http://www.ibtimes.co.uk/microsoft-adds-ethereum-language-solidity-visual-studio-1552171</a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-23">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 23, 2018</h6>
	
	<h6 class="chapternumber dailytitle">1.4 Million Reasons for more Women in Tech</h6>
	<a href="#18-03-08" rel="stylesheet">Blog addressed again March 8, 2018 </a>
	
	<p class="firstparagraph">1.4 million
	<i>new</i> jobs by 2020; End over end, year after year, the computer programming industry continues to add another
	20% more jobs each year, for the next five years. This is the only field that demand outstrips the supply--and increasingly
	short supply. So much so, the US Department of Labor forecasts U.S. citizens will be able to fill 39% of those positions;
	there are not enough Immigration visas (especially in the Trumpian era of isolationism) to make up the rest.</p>
	
	<p>&nbsp;</p>
	
	<p>So, how is it that only 14% of females in the entire field of cybersecurity? Silicon Valley is, at its best, obscenely
	one-sided. At Google, only 17% of the company&#39;s tech jobs are filled by women. Facebook women staff only 15%
	of tech jobs, and Twitter? 10% female. The figures on women in computer science across the nation, across the entire
	industry are not improving, but
	<i>declining</i>?
	<sup>1</sup>
	</p>
	
	<p>Of course, we&#39;ve heard these statistics from any given headline, and in the halls across the university landscape,
	starting with Women in STEM (Science, Tech, Engineering, Mathematics) programs.
	<sup>3</sup> Yet, why, with so much money, so many programs, so many non-governmental, non-profit effort?</p>
	
	<p>I argue that tech
	<i>climate </i> is directly to blame. Who then? Not a person, but principles are to blame. Culture--often defined as
	shared beliefs, norms, language and behaviors--can hardly be changed, but it can be understood.
	<br /> There is a book, called &quot;Program or be Programmed
	<sup id="24-4">4</sup>
	</p>
	, by which the author explains social consequences of a dichotomized society--between those that manipulate the environment
	around them, whether automating tasks at work, or simply fixing a simple software bug, by adding a comma. This literacy
	of the Current Era is akin to the 26-letter alphabet of written sentences and paragraphs, and--not to be taken for
	granted--is the exclusive form of communication, outside of a 100-foot perimeter, up until 150 years ago. Knowledge
	is not power, the communication of knowledge is power.
	
	<p>&nbsp;</p>
	
	<p>I argue that today, the power is to program one application programming interface (API) to talk to another API. In
	other words, the ability to directly communicate with software at the command-line is not now a requisite skill,
	but promotions would not escape this necessity! So, now reverting back to the subject of women in tech, American
	leadership is in deep peril without more female insight. I will finish by citing that Ares, the violent, untamed
	Greek
	<i>god of war</i>, cannot always drive the Capitalist engine; because She, Athena, the
	<i>goddess of intelligence</i> represents true strategy!</p>
	
	<p>1.
	<a href="https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html" target="_blank">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>
	</p>
	
	<p>2.
	<a href="https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages" target="_blank">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>
	</p>
	
	<p>3.
	<a href="https://www.aauw.org/research/why-so-few/" target="_blank">https://www.aauw.org/research/why-so-few/</a>
	</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-24">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 24-25, 2018
	<br /> Weekend
	</h6>
	
	<h6 class="chapternumber dailytitle">Joys of Automation</h6>
	
	<p class="firstparagraph">While coding up a better shell for this website, I thought it&#39;s remarkable how our lives get easier and easier
	with each passing year of tech. Using JavaScript--the primordial web-coding language--I marvel at the convenience
	of delegating mundande coding stuff to taskrunners, like
	<i>Gulp</i>--a programmable package manager that &quot;bundles&quot; up the libraries to be used in the app. It is
	truly a joy!</p>
	
	<p>I write four styling
	<i>functions</i>, with about 16
	<i>variables</i> and voil&agrave;! I finish in 3 hours what would have taken me 15 hours, then another 5 hours a month
	for upkeep. Instead, now, it&#39;s as though I wind up the clock, and need only periodically check, and perhaps
	update a variable or two ... Technology. I&#39;m gushing for joy.</p>
	
	<p>This was mere JavaScript--with a truly
	<i>Turing Complete</i>--pan-algorithm status--languages, the possibilities are 100-fold with Python language library
	collection; this library collection includes NASA modules, mathematical proofs, and limitless uses from web-scraping
	for unstructured data to an excellent data visualization collection. Sometimes I feel like I&#39;m in the Library
	of Congress, and better yet because, PIP, the Python package manager acts and automates like a cyborg librarian,
	for lack of better imagery.</p>
	
	<p>I just have so much joy watching a project come to life, and it&#39;s even a greater delight if this project comes
	to life and stays alive, through the joys of automation!</p>
	
	<p>&nbsp;</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-26">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 26, 2018</h6>
	
	<h6 class="chapternumber dailytitle">Cryptocurrency&#39;s Cumbersome Carbon Footprint</h6>
	
	<p class="firstparagraph">I must confess that on the very day that Our Daily Tech Blog gets an under-the-head make-over for security&#39;s
	sake, I wrote the new formatting file right over today&#39;s post. Amazing, and the two occurred nearly simultaneously
	as I worked on them, their paths crossed and poof, gone! Same platform, and I paid the price! Whether I change my
	ways is yet to be seen, but I shall continue with my original theme for the day, namely, Sustainability, a.k.a.
	Carbon Footprint.</p>
	
	<p class="quote">Power consumption is one of the major costs of bitcoin mining, as dedicated machines crunch the algorithms that build
	a record of every single bitcoin transaction and are rewarded with tiny fractions of a bitcoin for their efforts.
	<sup id="explain">1</sup>
	</p>
	
	<p>Today I have a mild Critique and Praise for the blockchain sustainability problem caused by sky-high electricity
	bills! Computer algorithms do waste electricity, not like your Widescreen. More electricity is gobbled up by small
	and large mining operations in nearly every country than small nations!
	<sup id="electricity">1</sup>. Ethereum, Bitcoin and a handful of other &quot;Proof-of-Work&quot; designs require electricity because
	the investment in equipment itself is investment, but more importantly, two-way incentivation for mining drives
	the system, and the scarcity demand through difficulty computations.</p>
	
	<p>So, is the electricity consumption really
	<i>correlated</i> with the value, scarcity, of the currency? Yes. Digiconomist--a cryptocurrency analysis site
	<sup
	  id="digiconomist">3</sup> estimates
	  <i>each</i>Ethereum transaction represents a 45 Kilowatt-hour of electricity&#39;s mining. (A visa credit card transaction
	  is 0.00651 kWh. The entire Ethereum global blockchain could be &quot;using as much as 4.2 Terawatt-hours (tWh),
	  or slightly more than the country of Cyprus
	  <sup id="cyprus">1</sup>.&quot; So, electricity comparisons are telling, but how does this relate to its environment impact, sustainability
	  itself?</p>
	
	<p>Carbon Footprint, our energy consumption index, can be compared to another element of scarcity, which dictates fluctuations
	in value: Gold. According to
	<i>Digiconomist</i>, an average household&#39;s Carbon Footprint is about 10 tons of CO2 per year. The article does
	the math for us very succinctly:</p>
	
	<p class="quote">On top of this, we can find that the process of mining Bitcoin isn&rsquo;t just more energy-intensive, but also has
	a bigger environmental impact. To reach that conclusion, we first need to estimate the carbon footprint for both.
	For Bitcoin we can, again, get this number from the Bitcoin Energy Consumption Index. For gold, we assume a carbon
	footprint of 20 tons of CO2e per every kilogram of gold mined
	<sup id="digiconomist2">3</sup>.</p>
	
	<p>The article continues to clarify that 33,000 kilograms of CO2 per unit mines (comparatively, one Bitcoin&#39;s worth
	of Gold is 4,000 kilograms of CO2). At the end of the day, the electricity costs--if not sustainable long-term--could
	spell trouble. Hence, the three S&#39;s, mentioned last, sustainability is perhaps a larger issue than blockchain
	Security and Scalability challenges. Again, this is a problem that the third largest cryptocurrency does not have:
	<i>Ripple</i>, which does not bear a carbon footprint
	<sup id="ripple">4</sup>.</p>
	
	<p>&nbsp;</p>
	
	<p>0.
	<a href="https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/" target="_blank">https://www.cnet.com/how-to/bitcoin-ethereum-or-litecoin-which-cryptocurrency-is-best-for-you/</a>
	<br /> For those new to cryptocurrencies, this is a fairly succinct article to cryptocurrencies, and their underlying
	structure.</p>
	
	<p>1.
	<a href="https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin"
	  target="_blank">https://motherboard.vice.com/en_us/article/d3zn9a/ethereum-mining-transaction-electricity-consumption-bitcoin</a>
	</p>
	
	<p>2.
	<a href="http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use" target="_blank">http://www.wired.co.uk/article/how-much-energy-does-bitcoin-mining-really-use</a>
	</p>
	
	<p>3.
	<a href="https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining" target="_blank">https://digiconomist.net/bitcoin-mining-more-polluting-than-gold-mining</a>
	</p>
	
	<p>4.
	<a href="https://ripple.com/xrp/" target="_blank">https://ripple.com/xrp/</a>
	</p>
	
	<p>&nbsp;</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-27">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 27, 2018</h6>
	
	<h6 class="chapternumber dailytitle">After Yesterday&#39;s Scathing Post, A Look at my own Carbon Footprint</h6>
	
	<p class="firstparagraph">In my reflections about environment sustainability issues, I confess I&#39;m sort of a hypocrite ... The whole matter
	that caused my own introspection begins with my usual daily vexation: Tangles of wires!
	<br /> &nbsp; ... I&#39;ve been having electricity issues, here as of late ...</p>
	
	<p>On one side, my tiny Yoga Ultrabook usually likes to charge just fine with my phone charger--if I&#39;m stuck without
	my charger. And due to an untimely end to the charger, I needed a replacement. So, singular errand of the day was
	a trip to Best Buy to peruse for a 45-Watt USB-C charger ( the new oval charging port on Samsung 8&#39;s, LG G6&#39;s
	and newer Apple products).</p>
	
	<p>Meanwhile, my credit-card sized Raspberry Pi computer runs on an old-school USB charger--a whole Linux Server Tower
	on a cell-phone charger. Then, we have my trusty Dell (actual) Tower with 16 Gigs of RAM, 2-terabytes, etc. that
	also seems to need an extra fan to stay cool--probably the sustainability of 100 Raspberry computers. My entire
	carbon footprint changes more with the electrical products that I use, than my vehicle! Well, I also confess my
	Jeep Cherokee can&#39;t even boast 20 miles per hour ... oops, conscience pangs, ouch ... Well, hypocritical, slightly,
	but found not guilty since I&#39;m a bike-commuter for life!</p>
	
	<p>&nbsp;</p>
	</div>
	
	<div class="feb 18-03 -12" id="18-02-28">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech">OUR DAILY TECH</h5>
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">Feb 28, 2018</h6>
	
	<h6 class="chapternumber dailytitle">One Last Word about Bitcoin&#39;s Carbon Footprint</h6>
	
	<p class="firstparagraph">Environmental Sustainability, again, and a higher-level view of the dilemmea...I couldn&#39;t resist:
	<br /> Bitcoin&#39;s Initial Coin Offering was 2011 or so, then Ethereum, with Ether for currency was 2015; These two,
	ever so prescient designs, also have their Achilles Heal. These two are
	<strong>&quot;Proof of Work&quot; currency algorithsms</strong>. This means that the &quot;Demand&quot; side of supply-and-demand,
	derives from
	<i>difficulty levels</i> of crypto-blocks to mine. So, miners are incentivized to spend $1500 on a semi-mediocre-good
	mining rig (which is basically 20 NVIDIA Graphics Cards tied together to stack of two-by-fours with lots of fans
	... erhem, sustainability?...</p>
	
	<p>And for each block that is &quot;solved&quot;, hence the block being validated, and somebody&#39;s cryptocurrency
	purchase/transaction is resolved! (takes about 12 minutes for the whole global blockchain to cycle, and Ethereum
	is less than a minute). So, the whole cycle continues, churning through coal- and carbon-stained hands of the electricity
	fed to these crypto-mining rigs
	<sup>1</sup>. For many it&#39;s a hobby, like the British Hobbyists&#39; love for ham- and short-wave radio setups, yet
	this profitable, yet particular hobby resembles the 1870&#39;s coal factory smoke stacks in South London!</p>
	
	<p>Let&#39;s face it, if Ethereum is able to successfully hard-fork to a Proof-of-Stake system soon--and Vitalik Buterin
	and his crew assure us it is coming
	<sup>2</sup>--then great--problem solved, everything eventually converts to Ethereum. If
	<i>not</i>they face an existential threat. Because, in a more enlightened ten years from now, those mining depots
	<i>would</i> look like unfettered factory smoke-stacks. Proof-of-Stack, whose currency value is not set to difficult
	of algorithm puzzle (hence,
	<i>proof-of-work</i>, but rather to ownership of &quot;voting pools&quot;, which is a
	<i>
	  <strong>Consensus-Based Blockchain algorithm</strong>
	</i> [Complex subject best reserved for a rainy day, or better yet, no day! I may revisit this alternative in a funner
	way, here&#39;s a glimpse from Vitalk&#39;s @VitalikButerin tweet yesterday:</p>
	
	<p class="quote">Question for mathematicians: is there a assumed-to-be-normal number (ie. digits are random, like pi or e) where you
	can calculate the nth digit in log(n) (or even polylog(n)) time? If so, then H(x) = digits[x ... x+100] seems like
	it would be a cool cryptographic hash algo.</p>
	
	<p>Now, I am by no means a detective, but by the sound of those tweets, the Proof-of-Work algorithm seems to still be
	of utmost importance ...</p>
	
	<p>1.
	<a href="https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/" target="_blank">https://blockexplorer.com/news/ethereum-launches-casper-testnet-paving-way-proof-stake/</a> and also,
	<a href="https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch"
	  target="_blank">https://www.trustnodes.com/2017/11/28/ethereums-proof-stake-casper-testnet-nears-launch</a>
	</p>
	</div>
	
	<div>
	<p id="pageend" style="padding-bottom:150px;">&nbsp;</p>
	</div>
	<button><a href="#top">Top of Page</a></button>
	`;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	
	
	console.log('blog-mar-loader');
	document.getElementById("blog-mar").innerHTML = ` 
	
	<div id="18-03-24" class=" hidden   mar 18-03 -24">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Sociology Tomorrow!</h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 24-25, 2018<br />
	Weekend </h6>
	
	<h6 class="dailytitle chapternumber">1968 Meets 2018
	</h6>
	<p class="firstparagraph">Washington D.C.  
	Not Normally does WonderWoman Show her Face
	</p>
	
	<p>  </p>
	</div> 
	
	<div id="18-03-23" class="    mar 18-03 -23">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Musing Blockchain</h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 23, 2018 </h6>
	
	<h6 class="dailytitle chapternumber"><i>It's not about the Blockchain, the Efficient Network Data Distribution is the Answer!</i>
	</h6>
	<p class="firstparagraph">Last week and this week, the out-of-control handgun problem is in the news. This leads one to believe there is a problem with the <i>definition</i> of a gun. As always. Definitions start wars and world wars--after all of last century, did anyone decide who controls the Coal of Sudetenland?? You can bet everyone there speaks two languages, still. The <i>definitional </i> answer makes the answer: This is why Blockchain technology--straddled between myriad start-ups, countless institutions and a hundred brilliant minds is The answer to our scalability problems.   
	
	</p><p>The problem is that data structures grow at differential rates, some exponential, some linear, some slower, some as a function of time or other variable.  Yet, our data analysis needs are clear: We need a new technology to handle quickly, securely and efficiently the <i>Networked, Relational Data Problem</i>, which scales exponentially with traditional data structures, like old-fashioned Excel-like Row-&amp;-Column data structures. Yet, as one would logarithmize the equation to best adapt new data, so must the computer data structure adjust accordingly. </p>
	<p>Too rigid, the world turned to relational, non-Structured Query Language (SQL) data, partially for the need to dislate <i>data objects</i> from their tables. The world needed that cell as a free-radical in order to mimic the data structure of societally-networked society.  Alas, a science already at hard work with Cambridge Analytica--again what's that field of study called again, Sociology, right? </p>
	<p>
	
	</p></div> 
	<div id="18-03-22" class="   S mar 18-03 -22">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Web Dev Affairs </h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 22, 2018 </h6>
	
	<h6 class="dailytitle chapternumber">A.I. Part II: Problems with Scale, Kindly Resolved by A.I.
	</h6>
	<p class="firstparagraph">I mistakenly laid waste to A.I.'s reputation in my last post. It <i>did</i> let us, our whole society, let us down, and maybe the forensics will give us <i>a few excuses</i> down on the road. However, "homicide by A.I. (aka Uber)" will need to be updated in records. But, artificial intelligence is not at fault. There are a few software engineers that did the best they could--with the time their superiors gave them.  Uber leadership, let's hope, will be deterred from future carelessnes to come.   </p>
	
	<p>That diatribe said, I do appreciate an Uber's proximity when I'm stranded at 2:00 am in a bad part of town. Why? Because I don't need to plan ahead -- Uber is there! And, sadly, I don't need to read or study -- Google is there! But wait, don't judge me, I'm not lazy! That being said, I have my own soul-searching to do: TECHNOLOGY AIDS AND ABETS ME AND MY ACTIONS, but it does not run my show> Only I take responsibility for my own actions: I allow technology into my life as a tool, and yet I   hold the power cord. I take responsibility for the tech that follows me--and believe me, I need that tech. And so do you. Not only so, but the world, and the ecological fate of our <i style="color:green">green earth</i>> also depends on tech, A.I. specifically. </p>
	<p>
	Humankind has already dug an ecological (dare I say 'alkaline') pit deeper than can be dug out of: Flooding, forest fires, and Species Extinctions. A.I. is <i style="color:brown"> is </i>> the only viable hope so we, i.e. Uber, shouldn't prematurely spoil its development. 
	</p>
	<p class="quote">Several questions raise their ugly head when A.I. can't help Earth or humankind. Like it or not, A.I. will need to 3-D print the dykes for the sunken coastal cities--like tiny island Den Haague, the most beautiful city in the world. Next, A.I. will make irrelevant fossil fuels by 2030, if not before; and those caught polluting would be fined to death, anyway. Without A.I., none of these worthwhile goals are possible. This precarious, difficult and most of all laborious job of designing our own solutions will take time: For this reason, Uber should be shamed even further for their short-cuts, and eventual errors of internal, organizational problems. <i>Uber's experiemental, tax-free "Testing Sandbox" cannot be the erstwhile safe neighborhoods of Surburban Phoenix, without proper caution.</i> </p>		
	<p>Are Uber's corporate desires, market stronghold, and shareholders' delight more worthwhile than <i>an entire sensitive field of machine-learning research?</i> No. Uber must be warned to not steal corporate secrets from Waymo, then proceed to be 86'd from California, then brush aside with excuses the <i>killing of an innocent Arizona bicyclist</i>.</p>
	<p>
	Who can count the number of very feisty taxi-men and -women that are not fans of the infamously hasty culture of Uber. The team of lawyers needed to be 86'd from France? Uber already knows, because maybe they know B.D.O! 
	</p>
	<p></p>
	<p class="cite">3.
	<a href="https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar" target="_blank">https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar</a>
	</p>
	</div> 
	<div id="18-03-21" class="    mar 18-03 -21  ">
	<hr />
	<button>
	<a href="#top">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Web Dev Affairs </h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 21, 2018 </h6>
	
	<h6 class="dailytitle chapternumber">Hey Uber Driver, Please Slow Down!
	</h6>
	<p class="firstparagraph">A.I. generally, and specifically Uber's Self-Driving Tech, both have failed society this week. Although we could all debate the merits of "Lidar", i.e. laser-based vision, the primary concern, in my view, is Uber's obvious carelessness in rushing their self-driving tech.  Although six thousand (6,000 too many) pedestrians are killed in the U.S. annually, I'd only hope AI wouldn't add to the problem.<sup>2</sup> The Arizona victim was walking her bicycle when struck, and I as bike-commuter can't help but take the affair personally. </p>
	<p>This first human death is at least a <strong>big Wake-Up moment</strong> for the industry in its haste to roll out A.I. tech.  After all, Uber's questionable leadership morals<sup>2</sup> and being kicked out of San Francisco for running more than six red-lights raises eyebrows to begin with.<sup>3</sup> My problem with Uber is that the car's algorithm, with perfect Lidar vision, did not flinch or slow down for two seconds as it killed the victim. Humans flinch and humans swerve, because protecting fellow humans is in our DNA, not in A.I.'s. So, while we now know Uber's software hasn't caught up with its A.I.-Lidar hardware--let's hope we see defensive driving and some <i>TLC</i> programmed into those A.I. Algorithms!
	</p>
	<p class="cite">1.
	<a href="https://www.theguardian.com/technology/2018/mar/22/video-released-of-uber-self-driving-crash-that-killed-woman-in-arizona" target="_blank">https://www.theguardian.com/technology/2018/mar/22/video-released-of-uber-self-driving-crash-that-killed-woman-in-arizona</a>
	</p>
	
	<p class="cite">2.
	<a href="https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar" target="_blank">https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar</a>
	</p>
	<p class="cite">3.
	<a href="http://fortune.com/2017/02/26/uber-self-driving-car-red-lights/" target="_blank">http://fortune.com/2017/02/26/uber-self-driving-car-red-lights/</a>
	</p>
	
	</div>
	<div id="18-03-20" class="  mar 18-03 -20">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Web Dev Affairs </h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 20, 2018 </h6>
	
	<h6 class="dailytitle chapternumber">The Facebook Fiasco: Why Zuckerberg Should not have Dropped out of Harvard
	</h6>
	<p class="firstparagraph">
	Universities, private or public institutions, serve as a beacon for
	<strong>the Fearless Protection and Ethical Regulation</strong> of information and data. This is because data and data research
	is innate to the university's Mission Statement, whereas business and governmental institutions are relatively new
	to the game, and often at odds with the
	<i>Academy</i>, and occasionally against each other. </p>
	<p class="quote">Threats to student data privacy existed long before the internet. The FBI under J. Edgar Hoover infiltrated Berkeley
	student groups to counter communism in the 1960s. Around the same time, the CIA manipulated the National Student
	Association for intelligence gathering in other anti-communism efforts. But the privacy issue is more acute now
	that the amount of student data in cloud-based systems has grown exponentially and is more widely dispersed.
	<sup>2</sup>
	</p>
	<p> The University's expertise over ethically regulated data collection and management, is better than government, business,
	and even medical domains for two reasons. First, the institution's long history and ethical motives with data are
	unique. The norms of data-handling have been codified through the University's Institutional Review Board based
	on its
	<strong>stated mission</strong>. In other words, Universities take data seriously
	<i>for reasons other than corporate profit or governmental control</i>. An example of personal data precautions has
	played out with Harvard's recent data tiffs leading to the Supreme Court, illustrated by a 2016 article: </p>
	<p class="quote">Last week undergraduates at Harvard University raised concerns about the institution handing over their data to an
	anti-affirmative action group as part of a lawsuit. Students for Fair Admissions, which is suing the university
	for allegedly discriminating against Asian American applicants, will have access to “academic, extracurricular,
	demographic and other information” from all undergrads who applied to Harvard between the fall 2009 and spring 2015,
	omitting names and Social Security numbers.
	<sup>2</sup>
	</p>
	<p>The second reason why Universities understand ethical implications for data is that data and more broadly data and
	human information
	<i>research</i> is the institutions' second highest priority, along with teaching and service. For example, in response
	to the unethical Public Health research in
	<i>Tuskegee Syphilis experiements</i>, the University instution
	<i>stepped in</i> to help design the 1978
	<strong>Belmont Principles</strong>. Currently, the University Institutional Review Board incorporates this with the Nuremburg
	Code (developed after WWII NAZI research), in handling data research.
	</p>
	<p>In recent days,
	<i>private companies</i> claim expertise for regulating "Fake News", and you guessed it,
	<strong>regulation of data privacy &amp; confidentiality.</strong><sup>3</sup> The ethical authority over data privacy norms are nowhere
	else than the University campus, case in point Harvard... Let the governments govern and the enterprises enterprise,
	and leave the
	<i>thoughtful, ethical regulation of data collection and precaution </i> to the Ivory Tower. Corporate and Government
	self-regulation is opaque enough!</p>
	
	
	<p class="cite">1.
	<a href="https://www.theguardian.com/technology/2018/mar/21/mark-zuckerberg-response-facebook-cambridge-analytica"
	  target="_blank">https://www.theguardian.com/technology/2018/mar/21/mark-zuckerberg-response-facebook-cambridge-analytica</a>
	</p>
	<p class="cite">2.
	<a href="https://www.edsurge.com/news/2016-10-26-pursuing-academic-freedom-and-data-privacy-is-a-balancing-act"
	  target="_blank">https://www.edsurge.com/news/2016-10-26-pursuing-academic-freedom-and-data-privacy-is-a-balancing-act</a>
	</p>
	<p class="cite">3.
	<a href="https://www.bloomberg.com/news/articles/2018-03-21/paul-ford-facebook-is-why-we-need-a-digital-protection-agency"
	target="_blank">https://www.bloomberg.com/news/articles/2018-03-21/paul-ford-facebook-is-why-we-need-a-digital-protection-agency</a>
	</p>
	
	</div>
	
	<div id="18-03-19" class="  mar 18-03 -19">
	
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Sociology Tomorrow!</h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 19, 2018</h6>
	
	<h6 class="dailytitle chapternumber">A New Politics of Power:
	<br /> The Cryptographic Financial Escape Hatch
	</h6>
	<p>I had originally intended for a post on the very lamentable
	<i>Blockbuster-ization</i> and eventual demise of Toys-"R"-Us, but Tech Affairs happen too quickly! Instead ...</p>
	<p class="firstparagraph">Today, US inserted itself into a large, deep debate about crypto-legitimacy by imposing new sanctions on Venezuela.
	In case you hadn't heard, here's a quick recap:</p>
	<p class="quote">The administration’s announcement came a few hours after Mr. Trump signed an executive order barring the use of any
	digital currency issued by the Maduro government since Jan. 9. Mr. Maduro announced last month that his country
	had begun a presale of the Petro, backed by the nation’s vast petroleum reserves.
	<br />
	<br />The Venezuelan government called the launch a response to a financial crisis that has prompted a profound devaluation
	of the national currency, the bolívar, and quadruple-digit inflation.
	<sup>1</sup>
	</p>
	<p>
	This turn of events, both Maduro et al.'s financial cleverness and Trump's action to de-legitimate the Petro crypto-currency,
	are examples of the undefined, near-limitless political uses for Blockchain Tech, both offensively and defensively.
	In fact, the ensuing events may be of great interest as we will witness a major first actual use-case of the decentralizing
	aims of crypto-technology tool. A tool that softens the financial leverage wielded by centralized authorities, whether
	governmental or private.
	</p>
	<p>I used the term "de-legitimate" above because there are two processes at work: First, crypto-currencies are
	<i>in themselves</i> not legitimate. A
	<strong>crypto-currency platform gains legitimacy through a series of both technical and financial trust-building stages</strong>.
	So legitimacy is earned first privately, and some currency platforms continue publicly to Initial Coin Offering,
	and so on--purely financial and technical legitimacy.
	</p>
	<p>And then, there is the another kind of legitimacy, which involves political leverage ... </p>
	<p class="cite">1.
	<a href="https://www.nytimes.com/2018/03/19/world/americas/trump-venezuela-sanctions-petro.html" target="_blank">https://www.nytimes.com/2018/03/19/world/americas/trump-venezuela-sanctions-petro.html</a>
	</p>
	
	</div>
	
	<div id="18-03-17" class="  mar 18-03 -17">
	
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Musing Blockchain</h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 17-18 2018
	<br /> Weekend
	</h6>
	
	<h6 class="dailytitle chapternumber"> Energy Alternatives Signal the Power Shift to Come, Part II: A Ripple and an Iota of Sustainable Crypto-Currency
	</h6>
	<p class="firstparagraph">Iota and Ripple cryptocurrencies use different technology than traditional blockchain in order to achieve their distributed
	ledgers. Traditionally, outside "miners" validate the block's
	<i> transaction records</i> as it replicates to the next "block." For example, a transaction is validated 2 or three
	times, and since three miners' validations all agree, one is kept and two are destroyed, in a nutshell; one example
	of computations (
	<strong>and hence coal</strong>) that cost too much time and energy.</p>
	<p>Unlike this arrangement, Iota, Ripple, and Hedera use a directed-acyclic-graph (DAG) data structure (shaped like
	a sideways genealogy tree) that relies on "consensus" from its nearest neighbor transaction nodes.
	<sup>1</sup>
	</p>
	<p>Enough with the jargon! The bottom line is that Bitcoin's tech is not eco-sustainable,
	<sup>2</sup> and so alternatives are already closing in on Bitcoin. Iota, the 8th largest cryptocurrency Iota delivers
	open-source transparency, lightning speed, and yet is it cryptographically sound? Not according to some tech pundits:
	</p>
	<p class="quote">You might think that IOTA, a cryptocurrency worth over a billion dollars, and working with organizations like Microsoft,
	University College London, Innogy, and Bosch, BNY Mellon, Cisco, and Foxconn (through the Trusted IOT Alliance)
	would not have fairly obvious vulnerabilities, but unfortunately, that’s not the case. When we took a look at their
	system, we found a serious vulnerability and textbook insecure code.
	<br />
	<br /> “In 2017, leaving your crypto algorithm vulnerable to differential cryptanalysis is a rookie mistake. It says that
	no one of any calibre analyzed their system, and that the odds that their fix makes the system secure is low,” states
	Bruce Schneier, renowned security technologist, about IOTA when we shared our attack.
	<sup>3</sup>
	</p>
	<p>And so, with a 1.9 billion market cap, I sometimes have to reflect on the immensity and non-relational fact and figures
	of our technological world! Security and other bugs are hard to avoid when an industry is moving too fast for thoroughly
	tested betas; and each iteration involves a series of bug-patches, with short- and long-term priorities stretched
	with new design &amp; function trade-offs.</p>
	<p>
	Full life-cycle software development, from napkin-idea to rolling specs, always follows these patterns yet not always with
	so much money on the line! Here's a closer look at one critique of Iota:</p>
	<p class="quote">
	IOTA developers had written their own hash function, it was a huge red flag ... I think it’s important to reiterate that
	the IOTA developers do not agree with our characterization of this as an issue of concern. Our report lays out more
	details about why we are concerned.
	<br />
	<br /> There are other red flags — unlike every other program running on your laptop or phone, IOTA uses ternary instead
	of binary. Since all computer hardware today uses binary, IOTA converts to ternary in software, which is less efficient
	and more complex. This complexity prevents IOTA from benefiting from existing security analysis tools that are designed
	to work with binary, and makes the code harder to read and understand.
	<br />
	<br /> The current IOTA tangle requires a trusted party (the coordinator) for security, suggesting that in its current
	form it’s not ready to run as a truly permissionless, decentralized system.
	<sup>3</sup>
	</p><p>
	Optimizing, not sacrificing, should be the name of the game as Tech closes in on Blockchain challenges of security, scalability,
	and that evers-so-costly
	<strong>Sustainability!</strong>
	</p>
	<p>1.
	<a href="https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain"
	  target="_blank">https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain</a>
	</p>
	<p>2.
	<a href="
	https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal
	" target="_blank"> https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal </a>
	</p>
	<p>3.
	<a href="
	https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367
	" target="_blank"> https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367</a>
	</p>
	
	
	</div>
	
	<div id="18-03-16" class="  mar 18-03 -17">
	
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Musing Blockchain</h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 16, 2018</h6>
	
	<h6 class="dailytitle chapternumber"> Energy Alternatives Signal the Power Shift to Come
	</h6>
	
	<p class="firstparagraph">Sustainability for the environment means an accelerated transition to renewables. While other nations have undertaken
	big steps toward wind and solar - even China's pollution declined in 2014 for the first time
	<sup>1</sup>. EU is now 30% renewable--from 12% in 2000 to expected 50% renewable energy by 2030
	<sup>2</sup>. Us, it appears, not so much...ouch.</p>
	<p>What can we do then, in our lives, to make our own contribution. Well, besides less fossil fuels and red meat, we
	can choose our cryptocurrencies more conscientiously. One NY town's recent actions echo my own concerns about the
	enormous carbon footprint of "Proof-of-Work" blockchain mining.
	</p>
	<p class="quote">
	The city of Plattsburgh has put a moratorium on cryptocurrency mining to preserve natural resources, the health of its residents
	and the city’s “character and direction,” officials said after a public hearing Thursday. For 18 months, the 20,000-resident
	city will not consider new applications for commercial cryptocurrency mining. Violators will face fines of up to
	$1,000 for each day they defy the moratorium.
	<sup>3</sup>
	</p>
	<p>So, me too - count me out, I can't help but do the same, and pronounce my own refrain from Bitcoin (this is more
	spiritual since I don't own, nor mine). In contrast, I'll put Ethereum on hold since they are transitioning to a
	zero carbon-footprint by year's end. </p>
	<p>And, for the most environmentally friendly cryptocurrencies, I wholly support Ripple (3rd highest valued cryptocurrency)
	and also clean
	<i>Iota</i> (8th highest valued )
	<sup>5</sup>. Ripple, unfortunately, is a private company with a less-accessible internal distributed ledger. And yet,
	Hedera Hashgraph heralds the most optimistic news of all: A blindlingly fast Hashgraph structure, unbound from any
	carbon footprint.
	</p>
	<p>1.
	<a href="http://www.wri.org/blog/2017/01/china%E2%80%99s-decline-coal-consumption-drives-global-slowdown-emissions"
	  target="_blank">http://www.wri.org/blog/2017/01/china%E2%80%99s-decline-coal-consumption-drives-global-slowdown-emissions</a>
	</p>
	<p>2.
	<a href="https://qz.com/1193603/two-countries-are-the-reason-the-eu-is-hitting-its-ambitious-renewable-energy-targets/"
	  target="_blank">https://qz.com/1193603/two-countries-are-the-reason-the-eu-is-hitting-its-ambitious-renewable-energy-targets/</a>
	</p>
	<p>3.
	<a href="https://www.washingtonpost.com/business/economy/upstate-new-york-town-bans-bitcoin-mining/2018/03/16/bd6f669e-2947-11e8-bc72-077aa4dab9ef_story.html?utm_term=.6282ea8429d5"
	  target="_blank">https://www.washingtonpost.com/business/economy/upstate-new-york-town-bans-bitcoin-mining</a>
	</p>
	<p>4.
	<a href="https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain"
	  target="_blank">https://www.bloomberg.com/news/articles/2018-02-14/next-generation-crypto-ledgers-take-the-block-out-of-blockchain</a>
	</p>
	</div>
	
	<div id="18-03-15" class="  mar 18-03 -15">
	
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Web Dev Affairs</h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 15, 2018</h6>
	
	<h6 class="dailytitle chapternumber">I Love this Record Baby but I Can't See Straight Anymore:
	<br />It's Gonna be Okay, Flip that Record and Just Dance!
	</h6>
	<p>-Lady Gaga</p>
	<br />
	<p class="firstparagraph">
	<strong>Creators in the Digital Age</strong>, especially Musicians, have faced just a panoply of business model challenges,
	notably since the 2000s'
	<i>Napster Era</i>. And yet, this is the age-old-case of new technologies reshaping long-standing fields, especially
	financial structure - the bottom line! All creative fields also have technological features on the horizon that
	may, potentially move the playing field. First some recent background: </p>
	<p class="quote">
	While [Taylor Swift] is certainly making money in retail sales and digital downloads, both of those metrics are spiraling
	downward as people migrate away from the concept of owning music at all. Nielsen recently released numbers indicating
	substantial drops in both CD and digital-track sales, which are down almost $100 million
	<i>year over year</i> from 2014; streaming music continues to grow, but the revenue it generates isn’t close to making
	up the difference, yet.
	<sup>1</sup>
	</p>
	<p>Most remember Taylor Swift's 2014 industry-shaking album withdraw in protest to Spotify's payment structure. The
	next year Taylor took on Apple iTunes--to which Apple bended to Taylor's Way
	<sup>2</sup>. These wins are amazing but not enough, if only for winning battles in a losing war. </p>
	<p class="quote">Spotify is the future. Spotify is the enemy. Spotify doesn’t pay enough. Spotify is music’s best bet for revenue
	growth. Since it arrived in the United States from Sweden in 2011, Spotify has been cast as both hero and villain
	in the music industry’s continuing debate over streaming music. </p>
	<p class="quote">
	It has been hailed as a potential savior through a two-tiered “freemium” model that would gradually lure listeners away from
	piracy. Yet Spotify’s royalty rates have also terrified many artists already worried that each new step in music’s
	digital evolution further devalues their work.
	<sup>3</sup>
	</p>
	<p>So the trend looks dire, and yet is it really? Where, just where are the
	<strong>Tech Platforms </strong> leading us? Tech is leading us
	<i>nowhere</i>, at least not to one
	<strong>singular, centralized place</strong>; rather, decentralized tech--including but not limited to blockchain--is busy
	rewriting the boundaries between creators and consumers. This Tuesday's Forbes article reported on new subscription-based
	model by Patreon. Still classical Web 2.0, it's novelty appears so simple, almost intuitive in potentially new pathway:</p>
	<p class="quote">"On Kickstarter and Indiegogo, creators essentially have to start over every time," says Danny Rimer, a partner at
	Index Ventures who is a Patreon investor and board member. "It's the same reason software companies went from licensed
	software to subscriptions: predictable revenue and better service for customers."
	<sup>4</sup>
	</p>
	<p>
	Apparently Patreon, along with last November's
	<i>Drip</i> by KickStarter have made headway. Patreon paid out $150 million to its artists in 2017, and each are doubling
	annually. Decentralizing again. Well, we say we can't
	<i>go back to the way it was</i>, but Tech always seems to lead us back to the way it was!
	</p>
	<p>1.
	<a href="https://www.nytimes.com/2016/01/25/magazine/touring-cant-save-musicians-in-the-age-of-spotify.html" target="_blank">https://www.nytimes.com/2016/01/25/magazine/touring-cant-save-musicians-in-the-age-of-spotify.html
	</a>
	</p>
	<p>2.
	<a href="http://www.businessinsider.com/taylor-swift-new-album-reputation-not-on-spotify-apple-music-streaming-2017-11"
	  target="_blank">http://www.businessinsider.com/taylor-swift-new-album-reputation-not-on-spotify-apple-music-streaming-2017-11
	</a>
	</p>
	<p>3.
	<a href="https://www.nytimes.com/2014/11/12/business/media/taylor-swifts-stand-on-royalties-draws-a-rebuttal-from-spotify.html"
	  target="_blank">https://www.nytimes.com/2014/11/12/business/media/taylor-swifts-stand-on-royalties-draws-a-rebuttal-from-spotify.html
	</a>
	</p>
	
	
	<p>4.
	<a href="https://www.forbes.com/sites/kathleenchaykowski/2018/02/13/digital-medici-how-this-musician-turned-entrepreneur-plans-to-save-creators-from-advertising/#6063ea771313"
	  target="_blank">https://www.forbes.com/sites/kathleenchaykowski/2018/02/13/digital-medici-how-this-musician-turned-entrepreneur-plans-to-save-creators-from-advertising
	</a>
	</p>
	</div>
	
	<div id="18-03-14" class="  mar 18-03 -14">
	
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="  title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="  subdailytech">Sociology Tomorrow!</h5>
	
	<p class="  author">by Thomas Maestas, MA</p>
	
	<h6 class="  chapternumber">March 14, 2018</h6>
	
	<h6 class="dailytitle chapternumber">
	<i>Tou
	  <strong>Demou</strong> tes
	  <strong> Krates</strong>
	</i>:
	<br />Strength of the People</h6>
	
	<p class="firstparagraph">Today's demonstrations and walk-outs, led by America's Youth and followed by many of the education staff, has aimed
	directly at Gun-Control legislation. Yet, the message more powerfully articulated than ever by adolescent-turns-adult
	students, takes aim at something further afield. </p>
	<p>Students, remembering the February 14th massacre victims, take aim at the corruption stemming from the 2010 Supreme
	Court "Person-hood" protection for Corporations, also known as the
	<i>Citizens United</i> Decision. A dated, but poignant, article from National Public Radio explains:
	</p>
	<p class="quote">The Supreme Court extended that protection to corporations, and over time also extended some — but not all — of the
	rights guaranteed to individuals in the Bill of Rights.
	<sup>1</sup>
	</p>
	<p>
	Yet, it appears deceptively harmless for Congressional Law-makers to protect corporations, in the form of
	<strong>Gun Manufacturers' Lobbyists, </strong>
	as equally as it protects humans. The origin or this ruling dates to a 70's Neo-Liberal, right-leaning legislation and Court
	rulings that include a pivotal 1978
	<i>First National Bank of Boston v. Belloti</i> decision allowing for corporations' ballot-initiative campaign contributions,
	citing the First Amendment.
	<sup>2</sup>
	</p>
	<p>
	
	The Result? The corporation, in "person" form, takes on Pseudo-Human qualities: immortal, beyond-measure capital, and programmatically
	serving stock-holders' interests with cut-throat competition at all costs. No match against a sympathetic human,
	yet the Corporation is given the same rights and privileges as the man in the street. Now, in the face of two decades'
	dead humans--as young as
	<i>Sandy Hook Elementary</i>, which were not protected by Legislation, due to commitments made to corporate lobbying.
	</p>
	<p>It appears increasingly difficult for Marco Rubio to accept money from gun lobbyists
	<i>in exchange</i> for executing their legislation demands. As I mentioned in my
	<a href="#18-02-14">February 14th post</a> on the topic, it is clear a generation is awakening: And, the Humans have begun to revolt
	against the
	<strong>Heavily-Armed Lobbying Machines!
	</strong>
	</p>
	<p>1.
	<a href="https://www.npr.org/2014/07/28/335288388/when-did-companies-become-people-excavating-the-legal-evolution"
	  target="_blank">https://www.npr.org/2014/07/28/335288388/when-did-companies-become-people-excavating-the-legal-evolution</a>
	</p>
	<p>2.
	<a href="http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx#dnn_ctr77443_HtmlModule_lblContent"
	  target="_blank">http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx</a>
	</p>
	http://www.ncsl.org/research/elections-and-campaigns/campaign-finance-and-the-supreme-court.aspx dnn_ctr77443_HtmlModule_lblContent
	</div> 
	<div id="18-03-13" class="mar 18-03 -13">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>
	<h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 13, 2018</h6>
	
	<h6 class="dailytitle chapternumber">The Sharing Economy Hand-in-Hand with the Market Economy:
	<br /> Part III and Sustainability of Shared, Distributed Ledger Types</h6>
	
	<p class="firstparagraph">March 13th, 2018 marks the day that certain types of blockchain technologies, notably Bitcoin and Ethereum, face
	an existential crisis: Today, a new distributed ledger technology has been announced, which departs from the traditional
	"Proof-of-Work" (energy-intensive calculations) Blockchain technologies. This is critically important to zero carbon-footprint.
	For example, Bitcoin calculations drain more energy, 50 TeraWatt/hrs per year--higher than Singapore's 49.8!</p>
	<p>Next, the primary security flaw of consensus-based leadership like Ripple, Iota (as opposed to
	<i>random-selection blockchain leadership</i> based on carbon-intensive calculations) is they are susceptible to Hacking:
	Denial-of-Service Attacks are possible because the next leader Block can be anticipated and followed by a Bot),
	so the blockchain cycle is attacked at every cycle. </p>
	<p>The Heder Hashgraph unveiled today overcomes this problem by using a 39-node-leader hashgraph data structure. Interestingly,
	this is based on the original Visa Credit Card design from the 1950's (then called AmericaBank) for authenticating
	system. </p>
	<p>
	Next, The Heder Hashgraph overcomes the problem of "fairness" because blockchain transactions are
	<i>
	  <strong>not ordered in each cycle</strong>.</i> Bitcoin transactions are haphazardly lumped together in each block-cycle,
	which is ~12 minutes. Which means that time-sensitive financial data queries will always lose! </p>
	<p>
	Swirld's unveiled their consensus-based
	<strong>Hashgraph, a type of distributed ledger technology (DLT),</strong> last year. Today, it has now been announced to
	deploy in late 2018 on the Hedera Hashgraph public network. This is tremendous news! Tremendous, since I explained
	in my
	<a href="#18-03-01">March 1st </a> blog post that older blockchain technologies incentivize miners' efforts by directly tying electrical-cost(
	(in calculations) to the Bitcoin/hour profit margin. For this reason, the future horizon just considerably shortened
	Bitcoin's runway for establishing anything beyond "early-adopter" status. </p>
	<p>So, we'll see if the innovating crew with Vitalik Buterin's Ethereum can successfully alter the crypto algorithm
	into it's planned carbon-free consensus-based, "proof-of-stake" form. For the moment, Bitcoin, Ethereum, and other
	electricity-draining "proof-of-work" designs, have their
	<strong>exchange value trapped inside their own Carbon Footprint</strong>.
	<sup>4</sup> And so, because environmental sustainablity is foremost of concerns for future investment, survival may
	depend on digging out of that Carbon Footprint much more quickly!</p>
	
	<p>1.
	<a href="https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#175e5c79abcb">
	  https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#175e5c79abcb
	</a>
	</p>
	
	<p>2.
	<a href="https://www.coindesk.com/hedera-hashgraph-swirlds-no-fork-guarantee-cryptocurrency-touts-resistance-code-splits/"
	  target="_blank">
	  https://www.coindesk.com/hedera-hashgraph-swirlds-no-fork-guarantee-cryptocurrency-touts-resistance-code-splits/</a>
	</p>
	
	<p>3.
	<a href="https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/"
	  target="_blank">
	  https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a>
	</p>
	
	
	<p>4.
	<a href="https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/" target="_blank">https://blog.ethereum.org/2016/02/09/cut-and-try-building-a-dream/</a>
	</p>
	</div>
	
	<div class="mar 18-03 -12" id="18-03-12">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 12, 2018</h6>
	
	<h6 class="dailytitle chapternumber">The Sharing Economy Hand-in-Hand with the Market Economy:
	<br /> Part II and New Forms of Trust</h6>
	<p class="firstparagraph">
	Throughout the centralized-tech period of the
	<i>mobile-powered </i> Web 2.0, most Sharing transactions take place on a centralized platform that simply facilitates
	the peer-to-peer transactions. However, the trust is based on some third-party authority. For instance, Uber serves
	as the centralalized, third-party authority between both consumers (whether resource-obtaining or resource-providing)
	must place their trust. Similarly, centralized authorities like Paypal, etc. enable peer-to-peer collaboration.
	Yet, the notion of trust remains unsolved: Both parties must place their faith in the third party. By definition,
	this problem that undermines the
	<i>Sharing Economy</i> is resolved by Blockchain technologies, through cryptography. Now, Decentralized Apps (DAPPS)
	provide a truer sharing platform for value transactions.
	</p>
	<p>In short, neither peer,
	<strong>neither consumer needs to be trusted, because both parties share a mutual trust in their shared ledger</strong>
	(think of a thick book with an indexed log of each and every transaction, with unchangeable entries etched by cryptography.
	In this fashion the forms of Exchange Value include:
	<br /> 1. Value Funds &amp; Investments
	<br /> 2. Immutable Insurance &amp; Risk Management
	<br /> 3. Account for &amp; Audit Commodified Value 4. Authenticate &amp; Attest to Value
	<br /> 5. Transfer, Store, Lend Value
	<br />
	</p>
	</div>
	
	<div class="mar 18-03 -10" id="18-03-10">
	
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>
	
	<h5 class="subdailytech">Web Dev</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 10-11, 2018
	<br /> Weekend
	</h6>
	
	<h6 class="dailytitle chapternumber">The Sharing Economy Hand-in-Hand with the Market Economy:
	<br /> Part I and the Race for Sustainability Solutions</h6>
	
	<p class="firstparagraph">Sharing can be a philosophy and even an ideology, but it is also
	<strong> a concept sewn into the Technology of the Era</strong>. Sharing economy refers to both democratized peer-to-peer
	marketplaces,
	<i>and</i> collaborative, resource-circulating consumption systems where the consumer&#39;s role is provider or obtainer
	of resources. By either sense, the
	<i>Uberized</i> economy is made possible by the underlying platform of Decentralized Technologies. Mobile social media,
	internet, and blockchain tech creates the conditions needed for a convenient, community-based transactions.</p>
	
	<p>Bitcoin and Ethereum crypto-contracts grab the headlines, however it is the very nature of blockchain&#39;s
	<i>distributed, i.e. shared, </i>ledger that revolutionizes how humans interact, and how they exchange and share goods
	and services. So, how might a transactional, zero-sum Market Economy merge with a Sharing Economy?</p>
	
	<p>In
	<i>The Third Industrial Revolution, </i>Social and Economic theorist, Dr. Jeremy Rifkin, provides insight into how
	the
	<strong>Sharing Economy can grow alongside the traditional Market Economy</strong>.
	<sup>1</sup> The theory argues three (3) breakthroughs are needed to create the conditions necessary for a new &quot;general
	purpose technological platform,&quot; and thus an Industrial Revolution. They are management/commmunication of power,
	sources of new power/energy, and the transportation of this power.</p>
	
	<p>The first condition: New forms of communication to
	<i>manage</i> power, for example steam-powered printing press, trans-oceanic telegraph, then later telephone. The second
	condition: New energy sources, for example steam-engine using coal and other fossil fuels. The third condition:
	New methods to transport energy, i.e. the steam engine on rails, then later fossil fuel vehicles.</p>
	
	<p>So what&#39;s new about today? 5G Cellular technology coupled with decentralized, blockchain internet; Second, improving
	solar &amp; wind power coupled with decentralized, bi-directional energy grid; and third, transporation by automatated,
	driverless shipping for example. So, why is this important, even vital to adapt a new paradigm that fits the new
	technology? exponential populstion growth and exponential climate changes are top of the list.</p>
	
	<p>Britain&#39;s innovations with steam &amp; coal characterized the first Industrial Revolution, and America&#39;s
	innovations in telephones, oil-fueled vehicles, and centralized transportation grid, however the innovations in
	the present era are much quicker than previous eras... which means we as a society can embrace more proactively
	the New Paradigm needed to adapt.</p>
	
	<p>So, how can we change the way we
	<i>think</i> and how we
	<i>react</i> depends on our worldview, and how deeply entrenched. Thomas Kuhn&#39;s 2004 publication on
	<strong>
	  <i>The Structure of Scientific Revolution</i>
	</strong>
	<sup>3</sup> explains how society will drag its feet in the face of change, and only after decades of controversy will
	a New Paradigm Shift emerge. In this occasion however, we as a society may not have the luxury of decades to adapt
	to New Technologies, as the carbon hangover from the previous Industrial Era imperils the safe arrival of the next!</p>
	
	<p>&nbsp;</p>
	
	<p>1.
	<a href="https://www.foet.org/books/the-third-industrial-revolution/" target="_blank">https://www.foet.org/books/the-third-industrial-revolution/</a>
	</p>
	
	<p>2.
	<a href="https://www.economist.com/node/21553017" target="_blank">https://www.economist.com/node/21553017</a>
	</p>
	
	<p>3.
	<a href="https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf"
	  target="_blank">3. Kuhn, Thomas, The Structure of Scientific Revolutions, </a>
	</p>
	</div>
	
	<div class="mar 18-03 -09" id="18-03-09">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 9th, 2018</h6>
	
	<h6 class="dailytitle chapternumber">&#39;Alexa, can you laugh?&#39;</h6>
	
	<p class="firstparagraph">Alexa has made headlines about reports of unexplained laughter responses
	<sup id="0309-1">1</sup>. Information like this needs a
	<i>
	  <strong>fact-check</strong>
	</i> &agrave; la Snopes.com.
	<sup id="0309-2">2</sup> And, whether or not Alexa misheard, &quot;Alexa, laugh&quot;, or not, is less important than the
	<i>socially-intrusive consequences</i> of simple app-development errors. The first issue is simply that programmer
	<strong>logic </strong> and user-interface intuition should be as clear (and generalized) as possible. This is easier said
	than done, for example the recent case of Hawaii&#39;s mistaken
	<i>incoming-ballistic-missile warning system</i>.
	<sup id="0309-3">3</sup> As it turned out, the dropdown-menu design placed the &quot;Send Test Warning&quot; next to &quot;Send Warning&quot;
	in an unintuitive, fail-possible manner. Oops.</p>
	
	<p>While most focus on Alexa et al.&#39;s actions and abilites, in the name of caution, but rather the larger issue
	falls on how much we allow ourselves to mentally depend on tech for things.</p>
	
	<p>1.
	<a href="https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j"
	  target="_blank">https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j</a>
	</p>
	
	<p>2.
	<a href="https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/" target="_blank">https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/</a>
	</p>
	
	<p>3.
	<a href="https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002"
	  target="_blank">https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002</a>
	</p>
	</div>
	
	<div class="mar 18-03 -12" id="18-03-08">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 8, 2018</h6>
	
	<h6 class="dailytitle chapternumber">1.4 Million Reasons for More Women in Tech, Part II
	<br />
	<br /> * Continuation of Women in Tech Theme from
	<a href="#18-02-23">Feb. 23rd Blog</a>
	</h6>
	
	<p class="quote">This is the first time in human history that we have the ability to see enough about ourselves that we can hope to
	actually build social systems that work qualitatively better than the systems we&#39;ve always had.</p>
	
	<p class="quote">--Author unknown</p>
	
	<p class="firstparagraph">My February 23rd Post on women in tech focused on the
	<i>workforce demand</i> for more women in tech positions, however today I&#39;m writing on the
	<strong>
	  <i>social need</i> for more female insight within the tech workforce</strong> , given that programming will increasingly
	shape our future institutions. This means that every institution, whether private hospitals, non-profit charity
	foundations, or government bureaus, will effectively restructure (optimize) their own organizational structure in
	an increasingly
	<i>data-driven</i> paradigm. From a Sociology of Organizations perspective, the changes to come are breath-taking to
	consider.</p>
	
	<p>So why women? Where could I start? Better stated, why is a quintessentially important job sector, a sector in desperate
	need for insight, comprised primarily of men?
	<sup id="one">1</sup> The facts are evident: ~15-20% of women comprising tech positions.
	<sup id="two">2</sup> Numbers aside, I argue there is a quintessential societal need for more women in tech: This is because computing
	and understanding data has changed since the data collection from Web 2.0 (mobile), becoming more networked and
	relational.</p>
	
	<p>The challenge for society in this age is historic, and women must absolutely be included in the process of the age:
	Please consider, that in the 1650&#39;s, the invention of the microscope opened a new world of data and
	<i>information</i> about the bacteriological, microscopic surroundings--hitherto blind to all. Likewise, the telescope
	has allowed us as a society to explore the outer universe and earth&#39;s position within it.</p>
	
	<p>Now, the inventions of machine-learning, computing coupled with Big Data analytics, allows us to explore (and manage)
	a universe of knowledge--about
	<i>ourselves</i>, human society--with unfathomably complex, unstructured relational data structures. Accessing the
	data to computer-readable form is one thing, but meaning in data is inaccessible until the
	<i>output</i> can be
	<i>re-</i>programmed into meaningful, human-readable data, i.e. information. This latter stage of development is the
	key challenge--for which success depends on representative female participation in Tech.</p>
	
	<p>Adding to the challenge of finding meaningful trends is the backdrop of noise from spurious variables. This is akin
	to finding a needle in an increasingly complex and growing haystack.</p>
	
	<p class="quote">What&#39;s different now and has changed is it&#39;s no longer about taking this data, putting it into a computer
	running a calculation and getting a balance sheet answer ...</p>
	
	<p class="quote">What&#39;s important now is what is the context of the data, what is it connected to, what effect is it having on
	data around it... It&#39;s basically a network of the data, it&#39;s no longer sort of tabular columns, of rows
	of data, it&#39;s
	<i>interconnected patterns</i>.
	<br /> --Tim Cook</p>
	
	<p>This quote means that as we move away from rule-based, mechanistic data analytics toward more complex, relational
	and networked data, we need an equally complex paradigm to keep up. Excluding the female mind from this challenge
	is not simply a clumsy, myopic mistake. Worse yet, so long as the Tech Industry remains gender lop-sided, Tech will
	increasingly resemble another myopic beast, a cave-dweller named Cyclops.</p>
	
	<p>1.
	<a href="https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html" target="_blank">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>
	</p>
	
	<p>2.
	<a href="https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages" target="_blank">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>
	</p>
	
	<p>3.
	<a href="https://www.aauw.org/research/why-so-few/" target="_blank">https://www.aauw.org/research/why-so-few/</a>
	</p>
	</div>
	
	<div class="mar 18-03 -12" id="18-03-07">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 7, 2018</h6>
	
	<h6 class="dailytitle chapternumber">About the April 23 Implementation of the FCC Net Neutrality Laws:
	<br /> The Coming Battle of States&#39; versus Federal Rights Part II</h6>
	
	<p class="firstparagraph">Washington&#39;s assertion of States&#39; Rights yesterday may augur the first of many lawsuits over control over
	bandwidth.</p>
	</div>
	
	<div class="mar 18-03 -12" id="18-03-06">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 6, 2018</h6>
	
	<h6 class="dailytitle chapternumber">April 23 Implementation of the FCC Net Neutrality Laws:
	<br /> The Coming Battle of States&#39; versus Federal Rights</h6>
	
	<p class="firstparagraph">Net Neutrality Rules, potentially one of the more important set of Individual Rights for us as citizens in the tech
	age, will soon undergo the rule changes voted by the Federal Communications Commission (FCC) this past December.
	In a nutshell, the Internet Service Providers (ISP&#39;s), e.g. Comcast, Cox, Verizon are granted the power--as
	a Title I &quot;information service&quot;--to slow down traffic, make fast- &amp; slow-lanes. Of course this is
	bad news for internet-users because even premium users may experience &quot;throttling&quot; if using the ISP&#39;s
	preferred apps. The only stipulation holds that the ISP&#39;s rules are made public. However, 21 states are bringing
	lawsuits to fight these changes, and the first assertion of State Law by Washington State today:</p>
	
	<p class="quote">The FCC is already embroiled in a variety of lawsuits related to its rollback of net neutrality rules, including
	an effort from 21 state attorneys general to get a court to block the FCC&#39;s move.</p>
	
	<p class="quote">&quot;This is symbolic politics, because the states know it is illegal to do,&quot; Roslyn Layton, a visiting scholar
	at the American Enterprise Institute, told NBC News. &quot;But they can put rules on the book and make it look like
	they&#39;re doing something.&quot; The FCC is already embroiled in a variety of lawsuits related to its rollback
	of net neutrality rules, including an effort from 21 state attorneys general to get a court to block the FCC&#39;s
	move.
	<sup>1</sup>
	</p>
	
	<p>S The big question arises over
	<i>who</i> has jurisdiction between the States&#39; and Federal authority; yet one thing is certain, the coming battle
	for protecting citizens&#39; rights will take place over jurisdiction of Internet Bandwidth turf.</p>
	
	<p>
	<a href="https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086"
	  target="_blank">https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086</a>
	</p>
	
	<p>&nbsp;</p>
	</div>
	
	
	<div class="mar 18-03 -12" id="18-03-05">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Healthy Today!</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 5, 2018</h6>
	
	<h6 class="dailytitle chapternumber">A Return to the Question of Guns, Germs, and Steel: Part II and the Germs</h6>
	
	<p class="firstparagraph">Germs present a timely topic for today, given the especially virulent
	<strong>Flu Virus strain</strong>. Many, like me, have wondered why our 1940&#39;s-era
	<sup>1</sup> technology in Flu Vaccine fabrication wouldn&#39;t invite more innovative solutions. Without feigning any
	medical expertise, I have to still ask about the progress made with the ever-mutating--i.e., drifting--Flu virus&#39;
	surface protein &quot;head,&quot; called hemaglutinin. This strategy &quot;guesses right&quot; very effectively,
	and provides an effective solution for most, in most years. Yet this winter has revealed that effectiveness statistics
	are
	<i>not always</i> in our favor.</p>
	
	<p class="quote">For many decades, researchers believed the flu vaccine offered solid protection if it was a good match to the circulating
	strains; studies from the 1940s through the 1960s routinely showed an efficacy of 70% to 90%. But those studies
	relied on a misleading methodology.</p>
	
	<p class="quote">Danuta Skowronski, an epidemiologist at the BC Centre for Disease Control in Vancouver, Canada, instead blames mutations
	in the vaccine strain itself. The most common influenza vaccine contains an &quot;inactivated&quot; virus, which
	manufacturers grow in chicken eggs. As Skowronski&#39;s team first reported in 2014, the virus can mutate while
	it is growing in the eggs, resulting in a vaccine unable to block circulating strains.
	<sup>1</sup>
	</p>
	
	<p>Earlier, I casually mentioned &quot;guessing&quot;, yet with great respect, the science behind estimating the flu
	virus between the time of R &amp; D, fabrication, and the flu
	<i>season</i>. (This antigenic drift, not to be confused with
	<i>Antigenic Shift</i> in which the Flu Virus makes an abrupt change.) I&#39;ll let the CDC abbreviate this:</p>
	
	<p class="quote">One way they change is called &ldquo;antigenic drift.&rdquo; These are small changes in the genes of influenza viruses
	that happen continually over time as the virus replicates. These small genetic changes usually produce viruses that
	are pretty closely related to one another, which can be illustrated by their location close together on a phylogenetic
	tree. Viruses that are closely related to each other usually share the same antigenic properties and an immune system
	exposed to an similar virus will usually recognize it and respond
	<sup>2</sup>.</p>
	
	<p>So, ultimately, the strategy is to estimate the form, location, of that virus--what it will look like--at a particular
	period each year. This implicates a strategy to estimate the trajectory, stage by stage, of this virus, i.e. a longitudinal
	time-series morphology, each year. The article makes this point more precise:</p>
	
	<p class="quote">But these small genetic changes can accumulate over time and result in viruses that are antigenically different (further
	away on the phylogenetic tree). When this happens, the body&rsquo;s immune system may not recognize those viruses.
	<sup>2</sup>
	</p>
	
	<p>Petri dishes aside, let&#39;s focus on the changing nature of the Flu Virus, which makes itself a
	<i>research </i>challenge in itself because of an ever-mutating object of study. Yet, this ever-changing nature also
	provides the very tool Statisticians need most for estimating: Big Data. The Law of Large Numbers means that plain
	math can accurately plot, and in most cases predict with a moderate statistical significance, future events, sort
	of.</p>
	
	<p>Sort of I say because too often we predict that two separate events are more likely to occur, conditional on each
	other, then conditional upon other factors. This being
	<i>correlation</i>, but the Statistician&#39;s Holy Grail is the other kind: Causality. Causality hinges on only thre3e
	things: 1) Association, 2) Time Precedence, and 3) Ruling out any
	<i> effect</i> of spurious variables. (Hang with me, I&#39;m still getting back to the subject of our annual predictions
	about a few months&#39; worth of antigenic drift.)</p>
	
	<p>Therefore, Big data, and new advances in the statistical sciences, and the technology that increasingly defines our
	sciences, may soon refine and supercharge research into the first and third of the three points of causality. The
	first of these, the associations, along the phylogenetic tree, are merely a network at its base, the science of
	which gains computational strength each year. Rare as it is in Academia, in this case Might makes Right!</p>
	
	<p>
	The third tenet of causality, after association and time direction, is ruling out the effect of other factors when separating
	<i>cause</i> and consequence. Advances in managing big data, and statistical analysis of it, means gaining a better
	handle on the multiple effects of
	<sup>spurious </sup>factors, hence analysis optimized by new, network-graph data structure technology. The Law of Large
	Numbers
	<sup>3</sup>, i.e. the sheer number of mutations and other factors, coupled with new
	<strong>technology</strong>, will better inform the morphology of the
	<i>path</i> of the virus, along the phylogenetic tree itself. Who knows where a cure may come from, perhaps a bio-statistician
	out there, churning the numbers, may be the one to stumble upon a better Flu Vaccine!
	
	</p>
	<p>1.
	<a href="http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail" target="_blank"> http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail </a>
	</p>
	
	<p>2.
	<a href="https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual" target="_blank"> https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual </a>
	</p>
	
	<p>3.
	<a href="https://www.cdc.gov/flu/about/viruses/change.htm" target="_blank"> https://www.cdc.gov/flu/about/viruses/change.htm </a>
	</p>
	
	<p class="quote">&nbsp;</p>
	</div>
	
	<div class="mar 18-03 -12" id="18-03-03">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Sociology Tomorrow!</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 3-4, 2018
	<br /> Weekend
	</h6>
	
	<h6 class="dailytitle chapternumber">A Return to the Question of Guns, Germs, and Steel</h6>
	
	<p class="firstparagraph">Back in 1997, a Pulitzer-Prize winning theory--based on Dr. Jared Diamond&#39;s
	<i>Guns, Germs, and Steel: The Fate of Human Societies</i> --provided the recipe book for the success of societies.
	Not without controversy, the theory posits that geographic and environmental preconditions, once met, provide tech
	&amp; resources trading opportunities, within a network of other nation-states also vying for technogical innovation.</p>
	
	<p>A nation&#39;s Technology, in turn, opens the means necessary to expansive, stable, independent sovereignty that
	lasts and thrives. Equally so, the nation&#39;s friends, especially those making the best-friends list, share and
	receive a secondary, &quot;residual&quot; technological bump over the time-course of the network&#39;s future trading,
	i.e. network transactions. So, if our best friends Canada and Mexico are less keen, then there is network reverberation!</p>
	
	<p>Given the advent of a real, lasting Trade-War, I would think that a network theorist wouldn&#39;t be betting on one
	particular node within this network. I say this because a disproportionately asymmetrical flow of technology and
	resources, while simultaneously raising prices on most staple goods, may spell trouble for the Every-Day person.
	So far, Nation-State: 0, People: 0 ... So, who wins with a Trade War? Alas, let&#39;s hope not the resurrection
	of the Neo-Multi-National Corporations, born from NAFTA deals, coincidentally, from the late 1990&#39;s. Bah humbug!</p>
	
	<p>&nbsp;</p>
	
	<p>1.
	<a href="http://www.jareddiamond.org/Jared_Diamond/Guns,_Germs,_and_Steel.html" target="_blank">Guns, Germs, and Steel. &quot;Steel: The Fates of Human Societies.&quot; Diamond J (1997).</a>
	</p>
	</div>
	
	<div class="mar 18-03 -12" id="18-03-02">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Web Dev Affairs</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 2, 2018</h6>
	
	<h6 class="chapternumber dailytitle">Widening Circles of Mobile-App Security Risks</h6>
	
	<p class="firstparagraph">Security, security, another day another platform risk, or risks from your device, or risks from transactions, Today&#39;s
	headline buried beneath a techy jargon provides a glimpse of the rising threat of web-application-based hackery:
	Cryptojacking.
	<i>Coindesk</i> reports, &quot; Opera browser introduces cryptocurrency miner protection for smartphones ... &quot;</p>
	
	<p class="quote">Cryptocurrency miners can overload smartphones&#39; CPUs, forcing 100 percent usage and potentially causing a phone
	to overheat. And the damage can sometimes be permanent. According to a ZDNet article, one trojan generated so much
	heat in a phone, its battery became swollen, permanently damaging the phone. While excessive ads were one reason
	for the heat generation, the main cause was that the phone&#39;s CPU was hijacked to mine for Monero.
	<sup>1</sup>
	</p>
	
	<p>The larger issue here is that the lines between trusted mobile-app authorities, i.e., certified by Play Store or
	Apple&#39;s is increasingly irrelevent. This is because an increasing number of app-users are ditching device-downloaded
	apps, preferring for browser applications--hence, a much more appetizing market for the newest generation of blackhat
	hackers, online thieves, peeping-toms, and other ill-wishers. There are a few driving factors for this issue--one
	of which is the onset of Decentralized Applications (DAPPs), which use the
	<i>browser</i> to interface between the Every-Day blockchain client/merchant/programmer and the actual byte-code of
	the blockchain (via WEB).</p>
	
	<p>More importantly, the larger issue is that we live in an age in which the exclusive, native browser language since
	1995, i.e. JavaScript. Security issues with browser-based apps were very low, because JavaScript never left the
	browser, ever. Until 2009, Data, Servers were the domain of PHP, JAVA, Python, etc. or some other language for the
	highly sensitive, dirty work of dipping into all that data sitting ontop of centralized servers around the world.
	PHP wasn&#39;t easy, so power and responsibility usually followed with all the extra effort and expertise.</p>
	
	<p>2015 augured in the Node.js server-accessing (can create, read, update, and delete date) new-born capabilities of
	JavaScript</p>
	
	
	<p>1.
	<a href="
	https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/
	" target="_blank"> https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/ </a>
	</p>
	</div>
	
	<div class="mar 18-03 -12" id="18-03-01">
	<hr />
	<button>
	<a href="#martop">Top</a>
	</button>&nbsp;
	<h5 class="title dailytech longtitle">OUR DAILY TECH:</h5>
	
	<h5 class="subdailytech">Musing Blockchain</h5>
	
	<p class="author">by Thomas Maestas, MA</p>
	
	<h6 class="chapternumber">March 1, 2018</h6>
	
	<h6 class="chapternumber dailytitle">Blockchain Sustainability Issues and The Double-Edged Sword</h6>
	
	<p class="firstparagraph">I couldn&#39;t help but revisit the
	<strong>Environmental Sustainability</strong> problem I addressed in my February 28th post. This problem, experienced by
	the top two crypto-currencies Bitcoin and Ethereum, is that the
	<i>monetary</i> value of the currency is matched to the
	<i>computing difficulty</i>--measured either by how much the computer is sweating, or by electricity KiloWatt Hours
	per year.
	<sup>1</sup> Digiconomist succinctly writes:</p>
	
	<p class="quote">The continuous block mining cycle incentivizes people all over the world to mine Bitcoin. As mining can provide a
	solid stream of revenue, people are very willing to run power-hungry machines to get a piece of it. Over the years
	this has caused the total energy consumption of the Bitcoin network to grow to epic proportions, as the price of
	the currency reached new highs.
	<sup>2</sup>
	</p>
	
	<p>And, so the issue I&#39;m addressing is a side-effect of the deepening incentivization for miners to invest more
	equipment, and in turn, more electricity. The article goes on to report Bitcoin&#39;s surpassing 50 TeraWatt-Hours-per-year
	usage has surpassed that of Portugal and Singapore, which are 49.5 TWh per year, and 49.8 TWh per year, respectively.
	In other words, the usage by the Bitcoin miner&#39;s cost (in electricity) compared with the miner&#39;s gain (in
	Bitcoins accrued by incentivized mining) drives up and incentives a deeper Carbon Footprint.</p>
	
	
	<p class="quote">Fueled by a meteoric rise in the Bitcoin price over the past few months, the power usage of the Bitcoin network has
	been increasing at a feverish pace. Just a little over three months ago, at the start of November 2017, the Bitcoin
	Energy Consumption Index was estimating the total electricity consumption of the Bitcoin network to be half of the
	current amount. On the first day of November, the estimated consumption was equal to 24.3 TWh per year.
	<sup>1</sup>
	</p>
	
	<p>
	Carbon Footprint, measured in this way, equates as a double-edged sword: The miner&#39;s electricity costs account for approximately
	65% of the profit (Bitcoin units&#39; value, measured when mined). So the
	<i>economic </i>usage means the cheapest available fuel is part of the business model--and it would lead to the cost
	of the cheapest source of energy: Dirty Coal. At the end of the day, if the
	<i>currency&#39;s </i>rising value means that more computationally-intensive mining is more and more profitable, then
	perhaps the other edge looks preferred!
	</p>
	
	<p>1.
	<a href="
	https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal
	" target="_blank"> https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal </a>
	</p>
	
	<p>2.
	<a href="
	https://digiconomist.net/bitcoin-energy-consumption
	" target="_blank"> https://digiconomist.net/bitcoin-energy-consumption </a>
	</p>
	
	</div>
	
	<hr /><a href="#martop">
	<button id="end">TOP</button>
	</a>
	`;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/* 
	import App from './components/app';  
	import popper from './popper';
	import february from "../data/february"; 
	*/
	
	const data = {
	  type: "line",
	  //data:formatedData,
	  data: a2c(rawData),
	  options: {
	    responsive: true,
	    text: "Average Polllution in Three Cities",
	    title: {
	      display: true,
	      text: "Average Temperature: Austin, San Francisco, New York"
	    },
	    hover: {
	      mode: 'label'
	    },
	    tooltips: {
	      mode: 'label' //single
	    }
	  }
	};
	
	var blogs = [{ posts: 'February' }, { posts: 'March' }];
	$.each(blogs, function (key, value) {
	  $('.blogs').append('<h2>' + value.posts + '</h2>');
	});
	console.log(blogs.posts);
	
	console.log('dom-loader');
	var metaBlog = {
	  "dailytitle": "The Sharing Economy Hand-in-Hand with the Market Economy, Part II: Internet of Things",
	  "chapternumber": "March 12, 2018",
	  "weekend": false,
	  "divs": ['18-03-10', '18-03-10', '18-03-11', '18-03-12', '18-03-13', '18-03-14', '18-03-15', '18-03-16', '18-03-17', '18-03-18', '18-03-19', '18-03-20', '18-03-21', '18-03-22', '18-03-23', '18-03-24', '18-03-25', '18-03-26', '18-03-27', '18-03-28', '18-03-29', '18-03-30']
	};
	
	// ReactDom.render(<App />, document.getElementById('react'))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}
	
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;
	}
	
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v4.0.0): tab.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * --------------------------------------------------------------------------
	 */
	var Tab = function ($) {
	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */
	  var NAME = 'tab';
	  var VERSION = '4.0.0';
	  var DATA_KEY = 'bs.tab';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $.fn[NAME];
	  var TRANSITION_DURATION = 150;
	  var Event = {
	    HIDE: "hide" + EVENT_KEY,
	    HIDDEN: "hidden" + EVENT_KEY,
	    SHOW: "show" + EVENT_KEY,
	    SHOWN: "shown" + EVENT_KEY,
	    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
	  };
	  var ClassName = {
	    DROPDOWN_MENU: 'dropdown-menu',
	    ACTIVE: 'active',
	    DISABLED: 'disabled',
	    FADE: 'fade',
	    SHOW: 'show'
	  };
	  var Selector = {
	    DROPDOWN: '.dropdown',
	    NAV_LIST_GROUP: '.nav, .list-group',
	    ACTIVE: '.active',
	    ACTIVE_UL: '> li > .active',
	    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
	    DROPDOWN_TOGGLE: '.dropdown-toggle',
	    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */
	
	  };
	
	  var Tab =
	  /*#__PURE__*/
	  function () {
	    function Tab(element) {
	      this._element = element;
	    } // Getters
	
	
	    var _proto = Tab.prototype;
	
	    // Public
	    _proto.show = function show() {
	      var _this = this;
	
	      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
	        return;
	      }
	
	      var target;
	      var previous;
	      var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
	      var selector = Util.getSelectorFromElement(this._element);
	
	      if (listElement) {
	        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
	        previous = $.makeArray($(listElement).find(itemSelector));
	        previous = previous[previous.length - 1];
	      }
	
	      var hideEvent = $.Event(Event.HIDE, {
	        relatedTarget: this._element
	      });
	      var showEvent = $.Event(Event.SHOW, {
	        relatedTarget: previous
	      });
	
	      if (previous) {
	        $(previous).trigger(hideEvent);
	      }
	
	      $(this._element).trigger(showEvent);
	
	      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
	        return;
	      }
	
	      if (selector) {
	        target = $(selector)[0];
	      }
	
	      this._activate(this._element, listElement);
	
	      var complete = function complete() {
	        var hiddenEvent = $.Event(Event.HIDDEN, {
	          relatedTarget: _this._element
	        });
	        var shownEvent = $.Event(Event.SHOWN, {
	          relatedTarget: previous
	        });
	        $(previous).trigger(hiddenEvent);
	        $(_this._element).trigger(shownEvent);
	      };
	
	      if (target) {
	        this._activate(target, target.parentNode, complete);
	      } else {
	        complete();
	      }
	    };
	
	    _proto.dispose = function dispose() {
	      $.removeData(this._element, DATA_KEY);
	      this._element = null;
	    }; // Private
	
	
	    _proto._activate = function _activate(element, container, callback) {
	      var _this2 = this;
	
	      var activeElements;
	
	      if (container.nodeName === 'UL') {
	        activeElements = $(container).find(Selector.ACTIVE_UL);
	      } else {
	        activeElements = $(container).children(Selector.ACTIVE);
	      }
	
	      var active = activeElements[0];
	      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);
	
	      var complete = function complete() {
	        return _this2._transitionComplete(element, active, callback);
	      };
	
	      if (active && isTransitioning) {
	        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	      } else {
	        complete();
	      }
	    };
	
	    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
	      if (active) {
	        $(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
	        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];
	
	        if (dropdownChild) {
	          $(dropdownChild).removeClass(ClassName.ACTIVE);
	        }
	
	        if (active.getAttribute('role') === 'tab') {
	          active.setAttribute('aria-selected', false);
	        }
	      }
	
	      $(element).addClass(ClassName.ACTIVE);
	
	      if (element.getAttribute('role') === 'tab') {
	        element.setAttribute('aria-selected', true);
	      }
	
	      Util.reflow(element);
	      $(element).addClass(ClassName.SHOW);
	
	      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
	        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
	
	        if (dropdownElement) {
	          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
	        }
	
	        element.setAttribute('aria-expanded', true);
	      }
	
	      if (callback) {
	        callback();
	      }
	    }; // Static
	
	
	    Tab._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $this = $(this);
	        var data = $this.data(DATA_KEY);
	
	        if (!data) {
	          data = new Tab(this);
	          $this.data(DATA_KEY, data);
	        }
	
	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }
	
	          data[config]();
	        }
	      });
	    };
	
	    _createClass(Tab, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }]);
	
	    return Tab;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */
	
	  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	    event.preventDefault();
	
	    Tab._jQueryInterface.call($(this), 'show');
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */
	
	  $.fn[NAME] = Tab._jQueryInterface;
	  $.fn[NAME].Constructor = Tab;
	
	  $.fn[NAME].noConflict = function () {
	    $.fn[NAME] = JQUERY_NO_CONFLICT;
	    return Tab._jQueryInterface;
	  };
	
	  return Tab;
	}($);
	//# sourceMappingURL=tab.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWFlY2RmZGI5MjdjMjY5NzM4YWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmxvZy10ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ibG9nLWZlYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmxvZy1tYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RvbS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFiLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImRhdGEiLCJ0eXBlIiwiYTJjIiwicmF3RGF0YSIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwidGV4dCIsInRpdGxlIiwiZGlzcGxheSIsImhvdmVyIiwibW9kZSIsInRvb2x0aXBzIiwiYmxvZ3MiLCJwb3N0cyIsIiQiLCJlYWNoIiwia2V5IiwidmFsdWUiLCJhcHBlbmQiLCJtZXRhQmxvZyIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJUYWIiLCJOQU1FIiwiVkVSU0lPTiIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiREFUQV9BUElfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiZm4iLCJUUkFOU0lUSU9OX0RVUkFUSU9OIiwiRXZlbnQiLCJISURFIiwiSElEREVOIiwiU0hPVyIsIlNIT1dOIiwiQ0xJQ0tfREFUQV9BUEkiLCJDbGFzc05hbWUiLCJEUk9QRE9XTl9NRU5VIiwiQUNUSVZFIiwiRElTQUJMRUQiLCJGQURFIiwiU2VsZWN0b3IiLCJEUk9QRE9XTiIsIk5BVl9MSVNUX0dST1VQIiwiQUNUSVZFX1VMIiwiREFUQV9UT0dHTEUiLCJEUk9QRE9XTl9UT0dHTEUiLCJEUk9QRE9XTl9BQ1RJVkVfQ0hJTEQiLCJlbGVtZW50IiwiX2VsZW1lbnQiLCJfcHJvdG8iLCJzaG93IiwiX3RoaXMiLCJwYXJlbnROb2RlIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiaGFzQ2xhc3MiLCJwcmV2aW91cyIsImxpc3RFbGVtZW50IiwiY2xvc2VzdCIsInNlbGVjdG9yIiwiVXRpbCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJub2RlTmFtZSIsIm1ha2VBcnJheSIsImZpbmQiLCJoaWRlRXZlbnQiLCJyZWxhdGVkVGFyZ2V0Iiwic2hvd0V2ZW50IiwidHJpZ2dlciIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9hY3RpdmF0ZSIsImNvbXBsZXRlIiwiaGlkZGVuRXZlbnQiLCJzaG93bkV2ZW50IiwiZGlzcG9zZSIsInJlbW92ZURhdGEiLCJjb250YWluZXIiLCJjYWxsYmFjayIsIl90aGlzMiIsImFjdGl2ZUVsZW1lbnRzIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpc1RyYW5zaXRpb25pbmciLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJfdHJhbnNpdGlvbkNvbXBsZXRlIiwib25lIiwiVFJBTlNJVElPTl9FTkQiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsInJlbW92ZUNsYXNzIiwiZHJvcGRvd25DaGlsZCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImFkZENsYXNzIiwicmVmbG93IiwiZHJvcGRvd25FbGVtZW50IiwiX2pRdWVyeUludGVyZmFjZSIsImNvbmZpZyIsIiR0aGlzIiwiVHlwZUVycm9yIiwiZ2V0Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FsbCIsIm5vQ29uZmxpY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3JDQSxvQkFBQUEsQ0FBUSxDQUFSO0FBQ0Esb0JBQUFBLENBQVEsQ0FBUjtBQUNBLG9CQUFBQSxDQUFRLENBQVI7QUFDQSxvQkFBQUEsQ0FBUSxDQUFSO0FBQ0E7QUFDQSxvQkFBQUEsQ0FBUSxDQUFSO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMQUMsU0FBUUMsR0FBUixDQUFZLHlCQUFaOztBQUlBQyxVQUFTQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxTQUFwQyxHQUFpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBakQsQzs7Ozs7Ozs7QUNKQUosU0FBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0FDLFVBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFNBQXBDLEdBQWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFqRCxDOzs7Ozs7OztBQ0RBSixTQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQUMsVUFBU0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsU0FBcEMsR0FBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBakQsQzs7Ozs7O0FDSEE7Ozs7OztBQU1BLE9BQU1DLE9BQU87QUFDWkMsU0FBSyxNQURPO0FBRVo7QUFDQUQsU0FBS0UsSUFBSUMsT0FBSixDQUhPO0FBSVpDLFlBQVE7QUFDVEMsaUJBQVksSUFESDtBQUVEQyxXQUFLLG9DQUZKO0FBR1BDLFlBQU07QUFDUEMsZ0JBQVEsSUFERDtBQUVJRixhQUFLO0FBRlQsTUFIQztBQU9QRyxZQUFNO0FBQ1BDLGFBQUs7QUFERSxNQVBDO0FBVVBDLGVBQVM7QUFDVkQsYUFBSyxPQURLLENBQ0c7QUFESDtBQVZGO0FBSkksRUFBYjs7QUFxQkEsS0FBSUUsUUFBUSxDQUNWLEVBQUNDLE9BQU8sVUFBUixFQURVLEVBRVYsRUFBQ0EsT0FBTyxPQUFSLEVBRlUsQ0FBWjtBQUtBQyxHQUFFQyxJQUFGLENBQU9ILEtBQVAsRUFBYyxVQUFTSSxHQUFULEVBQWNDLEtBQWQsRUFBb0I7QUFDaENILEtBQUUsUUFBRixFQUFZSSxNQUFaLENBQW1CLFNBQU9ELE1BQU1KLEtBQWIsR0FBbUIsT0FBdEM7QUFDRCxFQUZEO0FBR0FsQixTQUFRQyxHQUFSLENBQVlnQixNQUFNQyxLQUFsQjs7QUFHQWxCLFNBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsS0FBSXVCLFdBQVc7QUFDWCxpQkFBYSx1RkFERjtBQUVYLG9CQUFnQixnQkFGTDtBQUdYLGNBQVUsS0FIQztBQUlYLFdBQVEsQ0FBQyxVQUFELEVBQ1IsVUFEUSxFQUVSLFVBRlEsRUFHUixVQUhRLEVBSVIsVUFKUSxFQUtSLFVBTFEsRUFNUixVQU5RLEVBT1IsVUFQUSxFQVFSLFVBUlEsRUFTUixVQVRRLEVBVVIsVUFWUSxFQVdSLFVBWFEsRUFZUixVQVpRLEVBYVIsVUFiUSxFQWNSLFVBZFEsRUFlUixVQWZRLEVBZ0JSLFVBaEJRLEVBaUJSLFVBakJRLEVBa0JSLFVBbEJRLEVBbUJSLFVBbkJRLEVBb0JSLFVBcEJRLEVBcUJSLFVBckJRO0FBSkcsRUFBZjs7QUE4QkEsOEQ7Ozs7OztBQ3JFQSxVQUFTQyxpQkFBVCxDQUEyQkMsTUFBM0IsRUFBbUNDLEtBQW5DLEVBQTBDO0FBQUUsUUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELE1BQU1FLE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUFFLFNBQUlFLGFBQWFILE1BQU1DLENBQU4sQ0FBakIsQ0FBMkJFLFdBQVdDLFVBQVgsR0FBd0JELFdBQVdDLFVBQVgsSUFBeUIsS0FBakQsQ0FBd0RELFdBQVdFLFlBQVgsR0FBMEIsSUFBMUIsQ0FBZ0MsSUFBSSxXQUFXRixVQUFmLEVBQTJCQSxXQUFXRyxRQUFYLEdBQXNCLElBQXRCLENBQTRCQyxPQUFPQyxjQUFQLENBQXNCVCxNQUF0QixFQUE4QkksV0FBV1QsR0FBekMsRUFBOENTLFVBQTlDO0FBQTREO0FBQUU7O0FBRTdULFVBQVNNLFlBQVQsQ0FBc0JDLFdBQXRCLEVBQW1DQyxVQUFuQyxFQUErQ0MsV0FBL0MsRUFBNEQ7QUFBRSxPQUFJRCxVQUFKLEVBQWdCYixrQkFBa0JZLFlBQVlHLFNBQTlCLEVBQXlDRixVQUF6QyxFQUFzRCxJQUFJQyxXQUFKLEVBQWlCZCxrQkFBa0JZLFdBQWxCLEVBQStCRSxXQUEvQixFQUE2QyxPQUFPRixXQUFQO0FBQXFCOztBQUV2Tjs7Ozs7O0FBTUEsS0FBSUksTUFBTSxVQUFVdEIsQ0FBVixFQUFhO0FBQ3JCOzs7OztBQUtBLE9BQUl1QixPQUFPLEtBQVg7QUFDQSxPQUFJQyxVQUFVLE9BQWQ7QUFDQSxPQUFJQyxXQUFXLFFBQWY7QUFDQSxPQUFJQyxZQUFZLE1BQU1ELFFBQXRCO0FBQ0EsT0FBSUUsZUFBZSxXQUFuQjtBQUNBLE9BQUlDLHFCQUFxQjVCLEVBQUU2QixFQUFGLENBQUtOLElBQUwsQ0FBekI7QUFDQSxPQUFJTyxzQkFBc0IsR0FBMUI7QUFDQSxPQUFJQyxRQUFRO0FBQ1ZDLFdBQU0sU0FBU04sU0FETDtBQUVWTyxhQUFRLFdBQVdQLFNBRlQ7QUFHVlEsV0FBTSxTQUFTUixTQUhMO0FBSVZTLFlBQU8sVUFBVVQsU0FKUDtBQUtWVSxxQkFBZ0IsVUFBVVYsU0FBVixHQUFzQkM7QUFMNUIsSUFBWjtBQU9BLE9BQUlVLFlBQVk7QUFDZEMsb0JBQWUsZUFERDtBQUVkQyxhQUFRLFFBRk07QUFHZEMsZUFBVSxVQUhJO0FBSWRDLFdBQU0sTUFKUTtBQUtkUCxXQUFNO0FBTFEsSUFBaEI7QUFPQSxPQUFJUSxXQUFXO0FBQ2JDLGVBQVUsV0FERztBQUViQyxxQkFBZ0IsbUJBRkg7QUFHYkwsYUFBUSxTQUhLO0FBSWJNLGdCQUFXLGdCQUpFO0FBS2JDLGtCQUFhLGlFQUxBO0FBTWJDLHNCQUFpQixrQkFOSjtBQU9iQyw0QkFBdUI7QUFDdkI7Ozs7OztBQVJhLElBQWY7O0FBZ0JBLE9BQUkxQjtBQUNKO0FBQ0EsZUFBWTtBQUNWLGNBQVNBLEdBQVQsQ0FBYTJCLE9BQWIsRUFBc0I7QUFDcEIsWUFBS0MsUUFBTCxHQUFnQkQsT0FBaEI7QUFDRCxNQUhTLENBR1I7OztBQUdGLFNBQUlFLFNBQVM3QixJQUFJRCxTQUFqQjs7QUFFQTtBQUNBOEIsWUFBT0MsSUFBUCxHQUFjLFNBQVNBLElBQVQsR0FBZ0I7QUFDNUIsV0FBSUMsUUFBUSxJQUFaOztBQUVBLFdBQUksS0FBS0gsUUFBTCxDQUFjSSxVQUFkLElBQTRCLEtBQUtKLFFBQUwsQ0FBY0ksVUFBZCxDQUF5QkMsUUFBekIsS0FBc0NDLEtBQUtDLFlBQXZFLElBQXVGekQsRUFBRSxLQUFLa0QsUUFBUCxFQUFpQlEsUUFBakIsQ0FBMEJyQixVQUFVRSxNQUFwQyxDQUF2RixJQUFzSXZDLEVBQUUsS0FBS2tELFFBQVAsRUFBaUJRLFFBQWpCLENBQTBCckIsVUFBVUcsUUFBcEMsQ0FBMUksRUFBeUw7QUFDdkw7QUFDRDs7QUFFRCxXQUFJakMsTUFBSjtBQUNBLFdBQUlvRCxRQUFKO0FBQ0EsV0FBSUMsY0FBYzVELEVBQUUsS0FBS2tELFFBQVAsRUFBaUJXLE9BQWpCLENBQXlCbkIsU0FBU0UsY0FBbEMsRUFBa0QsQ0FBbEQsQ0FBbEI7QUFDQSxXQUFJa0IsV0FBV0MsS0FBS0Msc0JBQUwsQ0FBNEIsS0FBS2QsUUFBakMsQ0FBZjs7QUFFQSxXQUFJVSxXQUFKLEVBQWlCO0FBQ2YsYUFBSUssZUFBZUwsWUFBWU0sUUFBWixLQUF5QixJQUF6QixHQUFnQ3hCLFNBQVNHLFNBQXpDLEdBQXFESCxTQUFTSCxNQUFqRjtBQUNBb0Isb0JBQVczRCxFQUFFbUUsU0FBRixDQUFZbkUsRUFBRTRELFdBQUYsRUFBZVEsSUFBZixDQUFvQkgsWUFBcEIsQ0FBWixDQUFYO0FBQ0FOLG9CQUFXQSxTQUFTQSxTQUFTakQsTUFBVCxHQUFrQixDQUEzQixDQUFYO0FBQ0Q7O0FBRUQsV0FBSTJELFlBQVlyRSxFQUFFK0IsS0FBRixDQUFRQSxNQUFNQyxJQUFkLEVBQW9CO0FBQ2xDc0Msd0JBQWUsS0FBS3BCO0FBRGMsUUFBcEIsQ0FBaEI7QUFHQSxXQUFJcUIsWUFBWXZFLEVBQUUrQixLQUFGLENBQVFBLE1BQU1HLElBQWQsRUFBb0I7QUFDbENvQyx3QkFBZVg7QUFEbUIsUUFBcEIsQ0FBaEI7O0FBSUEsV0FBSUEsUUFBSixFQUFjO0FBQ1ozRCxXQUFFMkQsUUFBRixFQUFZYSxPQUFaLENBQW9CSCxTQUFwQjtBQUNEOztBQUVEckUsU0FBRSxLQUFLa0QsUUFBUCxFQUFpQnNCLE9BQWpCLENBQXlCRCxTQUF6Qjs7QUFFQSxXQUFJQSxVQUFVRSxrQkFBVixNQUFrQ0osVUFBVUksa0JBQVYsRUFBdEMsRUFBc0U7QUFDcEU7QUFDRDs7QUFFRCxXQUFJWCxRQUFKLEVBQWM7QUFDWnZELGtCQUFTUCxFQUFFOEQsUUFBRixFQUFZLENBQVosQ0FBVDtBQUNEOztBQUVELFlBQUtZLFNBQUwsQ0FBZSxLQUFLeEIsUUFBcEIsRUFBOEJVLFdBQTlCOztBQUVBLFdBQUllLFdBQVcsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxhQUFJQyxjQUFjNUUsRUFBRStCLEtBQUYsQ0FBUUEsTUFBTUUsTUFBZCxFQUFzQjtBQUN0Q3FDLDBCQUFlakIsTUFBTUg7QUFEaUIsVUFBdEIsQ0FBbEI7QUFHQSxhQUFJMkIsYUFBYTdFLEVBQUUrQixLQUFGLENBQVFBLE1BQU1JLEtBQWQsRUFBcUI7QUFDcENtQywwQkFBZVg7QUFEcUIsVUFBckIsQ0FBakI7QUFHQTNELFdBQUUyRCxRQUFGLEVBQVlhLE9BQVosQ0FBb0JJLFdBQXBCO0FBQ0E1RSxXQUFFcUQsTUFBTUgsUUFBUixFQUFrQnNCLE9BQWxCLENBQTBCSyxVQUExQjtBQUNELFFBVEQ7O0FBV0EsV0FBSXRFLE1BQUosRUFBWTtBQUNWLGNBQUttRSxTQUFMLENBQWVuRSxNQUFmLEVBQXVCQSxPQUFPK0MsVUFBOUIsRUFBMENxQixRQUExQztBQUNELFFBRkQsTUFFTztBQUNMQTtBQUNEO0FBQ0YsTUF6REQ7O0FBMkRBeEIsWUFBTzJCLE9BQVAsR0FBaUIsU0FBU0EsT0FBVCxHQUFtQjtBQUNsQzlFLFNBQUUrRSxVQUFGLENBQWEsS0FBSzdCLFFBQWxCLEVBQTRCekIsUUFBNUI7QUFDQSxZQUFLeUIsUUFBTCxHQUFnQixJQUFoQjtBQUNELE1BSEQsQ0FwRVUsQ0F1RVA7OztBQUdIQyxZQUFPdUIsU0FBUCxHQUFtQixTQUFTQSxTQUFULENBQW1CekIsT0FBbkIsRUFBNEIrQixTQUE1QixFQUF1Q0MsUUFBdkMsRUFBaUQ7QUFDbEUsV0FBSUMsU0FBUyxJQUFiOztBQUVBLFdBQUlDLGNBQUo7O0FBRUEsV0FBSUgsVUFBVWQsUUFBVixLQUF1QixJQUEzQixFQUFpQztBQUMvQmlCLDBCQUFpQm5GLEVBQUVnRixTQUFGLEVBQWFaLElBQWIsQ0FBa0IxQixTQUFTRyxTQUEzQixDQUFqQjtBQUNELFFBRkQsTUFFTztBQUNMc0MsMEJBQWlCbkYsRUFBRWdGLFNBQUYsRUFBYUksUUFBYixDQUFzQjFDLFNBQVNILE1BQS9CLENBQWpCO0FBQ0Q7O0FBRUQsV0FBSThDLFNBQVNGLGVBQWUsQ0FBZixDQUFiO0FBQ0EsV0FBSUcsa0JBQWtCTCxZQUFZbEIsS0FBS3dCLHFCQUFMLEVBQVosSUFBNENGLE1BQTVDLElBQXNEckYsRUFBRXFGLE1BQUYsRUFBVTNCLFFBQVYsQ0FBbUJyQixVQUFVSSxJQUE3QixDQUE1RTs7QUFFQSxXQUFJa0MsV0FBVyxTQUFTQSxRQUFULEdBQW9CO0FBQ2pDLGdCQUFPTyxPQUFPTSxtQkFBUCxDQUEyQnZDLE9BQTNCLEVBQW9Db0MsTUFBcEMsRUFBNENKLFFBQTVDLENBQVA7QUFDRCxRQUZEOztBQUlBLFdBQUlJLFVBQVVDLGVBQWQsRUFBK0I7QUFDN0J0RixXQUFFcUYsTUFBRixFQUFVSSxHQUFWLENBQWMxQixLQUFLMkIsY0FBbkIsRUFBbUNmLFFBQW5DLEVBQTZDZ0Isb0JBQTdDLENBQWtFN0QsbUJBQWxFO0FBQ0QsUUFGRCxNQUVPO0FBQ0w2QztBQUNEO0FBQ0YsTUF2QkQ7O0FBeUJBeEIsWUFBT3FDLG1CQUFQLEdBQTZCLFNBQVNBLG1CQUFULENBQTZCdkMsT0FBN0IsRUFBc0NvQyxNQUF0QyxFQUE4Q0osUUFBOUMsRUFBd0Q7QUFDbkYsV0FBSUksTUFBSixFQUFZO0FBQ1ZyRixXQUFFcUYsTUFBRixFQUFVTyxXQUFWLENBQXNCdkQsVUFBVUgsSUFBVixHQUFpQixHQUFqQixHQUF1QkcsVUFBVUUsTUFBdkQ7QUFDQSxhQUFJc0QsZ0JBQWdCN0YsRUFBRXFGLE9BQU8vQixVQUFULEVBQXFCYyxJQUFyQixDQUEwQjFCLFNBQVNNLHFCQUFuQyxFQUEwRCxDQUExRCxDQUFwQjs7QUFFQSxhQUFJNkMsYUFBSixFQUFtQjtBQUNqQjdGLGFBQUU2RixhQUFGLEVBQWlCRCxXQUFqQixDQUE2QnZELFVBQVVFLE1BQXZDO0FBQ0Q7O0FBRUQsYUFBSThDLE9BQU9TLFlBQVAsQ0FBb0IsTUFBcEIsTUFBZ0MsS0FBcEMsRUFBMkM7QUFDekNULGtCQUFPVSxZQUFQLENBQW9CLGVBQXBCLEVBQXFDLEtBQXJDO0FBQ0Q7QUFDRjs7QUFFRC9GLFNBQUVpRCxPQUFGLEVBQVcrQyxRQUFYLENBQW9CM0QsVUFBVUUsTUFBOUI7O0FBRUEsV0FBSVUsUUFBUTZDLFlBQVIsQ0FBcUIsTUFBckIsTUFBaUMsS0FBckMsRUFBNEM7QUFDMUM3QyxpQkFBUThDLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0MsSUFBdEM7QUFDRDs7QUFFRGhDLFlBQUtrQyxNQUFMLENBQVloRCxPQUFaO0FBQ0FqRCxTQUFFaUQsT0FBRixFQUFXK0MsUUFBWCxDQUFvQjNELFVBQVVILElBQTlCOztBQUVBLFdBQUllLFFBQVFLLFVBQVIsSUFBc0J0RCxFQUFFaUQsUUFBUUssVUFBVixFQUFzQkksUUFBdEIsQ0FBK0JyQixVQUFVQyxhQUF6QyxDQUExQixFQUFtRjtBQUNqRixhQUFJNEQsa0JBQWtCbEcsRUFBRWlELE9BQUYsRUFBV1ksT0FBWCxDQUFtQm5CLFNBQVNDLFFBQTVCLEVBQXNDLENBQXRDLENBQXRCOztBQUVBLGFBQUl1RCxlQUFKLEVBQXFCO0FBQ25CbEcsYUFBRWtHLGVBQUYsRUFBbUI5QixJQUFuQixDQUF3QjFCLFNBQVNLLGVBQWpDLEVBQWtEaUQsUUFBbEQsQ0FBMkQzRCxVQUFVRSxNQUFyRTtBQUNEOztBQUVEVSxpQkFBUThDLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0MsSUFBdEM7QUFDRDs7QUFFRCxXQUFJZCxRQUFKLEVBQWM7QUFDWkE7QUFDRDtBQUNGLE1BcENELENBbkdVLENBdUlQOzs7QUFHSDNELFNBQUk2RSxnQkFBSixHQUF1QixTQUFTQSxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBa0M7QUFDdkQsY0FBTyxLQUFLbkcsSUFBTCxDQUFVLFlBQVk7QUFDM0IsYUFBSW9HLFFBQVFyRyxFQUFFLElBQUYsQ0FBWjtBQUNBLGFBQUlkLE9BQU9tSCxNQUFNbkgsSUFBTixDQUFXdUMsUUFBWCxDQUFYOztBQUVBLGFBQUksQ0FBQ3ZDLElBQUwsRUFBVztBQUNUQSxrQkFBTyxJQUFJb0MsR0FBSixDQUFRLElBQVIsQ0FBUDtBQUNBK0UsaUJBQU1uSCxJQUFOLENBQVd1QyxRQUFYLEVBQXFCdkMsSUFBckI7QUFDRDs7QUFFRCxhQUFJLE9BQU9rSCxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCLGVBQUksT0FBT2xILEtBQUtrSCxNQUFMLENBQVAsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkMsbUJBQU0sSUFBSUUsU0FBSixDQUFjLHVCQUF1QkYsTUFBdkIsR0FBZ0MsSUFBOUMsQ0FBTjtBQUNEOztBQUVEbEgsZ0JBQUtrSCxNQUFMO0FBQ0Q7QUFDRixRQWhCTSxDQUFQO0FBaUJELE1BbEJEOztBQW9CQW5GLGtCQUFhSyxHQUFiLEVBQWtCLElBQWxCLEVBQXdCLENBQUM7QUFDdkJwQixZQUFLLFNBRGtCO0FBRXZCcUcsWUFBSyxTQUFTQSxHQUFULEdBQWU7QUFDbEIsZ0JBQU8vRSxPQUFQO0FBQ0Q7QUFKc0IsTUFBRCxDQUF4Qjs7QUFPQSxZQUFPRixHQUFQO0FBQ0QsSUF0S0QsRUFGQTtBQXlLQTs7Ozs7O0FBT0F0QixLQUFFakIsUUFBRixFQUFZeUgsRUFBWixDQUFlekUsTUFBTUssY0FBckIsRUFBcUNNLFNBQVNJLFdBQTlDLEVBQTJELFVBQVUyRCxLQUFWLEVBQWlCO0FBQzFFQSxXQUFNQyxjQUFOOztBQUVBcEYsU0FBSTZFLGdCQUFKLENBQXFCUSxJQUFyQixDQUEwQjNHLEVBQUUsSUFBRixDQUExQixFQUFtQyxNQUFuQztBQUNELElBSkQ7QUFLQTs7Ozs7O0FBTUFBLEtBQUU2QixFQUFGLENBQUtOLElBQUwsSUFBYUQsSUFBSTZFLGdCQUFqQjtBQUNBbkcsS0FBRTZCLEVBQUYsQ0FBS04sSUFBTCxFQUFXTCxXQUFYLEdBQXlCSSxHQUF6Qjs7QUFFQXRCLEtBQUU2QixFQUFGLENBQUtOLElBQUwsRUFBV3FGLFVBQVgsR0FBd0IsWUFBWTtBQUNsQzVHLE9BQUU2QixFQUFGLENBQUtOLElBQUwsSUFBYUssa0JBQWI7QUFDQSxZQUFPTixJQUFJNkUsZ0JBQVg7QUFDRCxJQUhEOztBQUtBLFVBQU83RSxHQUFQO0FBQ0QsRUEvT1MsQ0ErT1J0QixDQS9PUSxDQUFWO0FBZ1BBLGdDIiwiZmlsZSI6ImJ1bmRsZVRNTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFhZWNkZmRiOTI3YzI2OTczOGFkIiwiIFxucmVxdWlyZSgnLi9ibG9nLXRleHQnKTtcbnJlcXVpcmUoJy4vYmxvZy1mZWInKTtcbnJlcXVpcmUoJy4vYmxvZy1tYXInKTtcbnJlcXVpcmUoJy4vZG9tLWxvYWRlcicpOyAgXG4vLyBFbmQgRDMgLS0gbWFwXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvdGFiJyk7ICBcbi8qXG4kKCcjdG9tTGlzdCBhJykub24oJ2hvdmVyJywgZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdCQodGhpcykudGFiKCdzaG93JylcbiAgfSlcbiovXG5cbiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiXHJcblxyXG5jb25zb2xlLmxvZygnYmxvZy1kcmFmdC5qcyBsb29hYWFkZWQnKTsgXHJcblxyXG4gXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsb2d0ZXh0XCIpLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwidG9wMlwiPjwvZGl2PjxkaXYgaWQ9XCIxOC0wNC0xNFwiIGNsYXNzPVwiICAgICAgICAgICBhdnIgMTgtMDMgLTI0XCI+IFxyXG48aHIgLz4gIFxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT4gXHJcbiAmbmJzcDsgXHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+ICBcclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5Tb2Npb2xvZ3kgVG9tb3Jyb3chPC9oNT4gIFxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPiAgXHJcbjxoNiAgICBjbGFzcz1cIiAgY2hhcHRlcm51bWJlclwiPkFwcmlsIDE0LTE1LCAyMDE4PGJyIC8+IFxyXG5XZWVrZW5kPC9oNj4gICBcclxuPGg2ICAgIGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+Q2xhc2ggb2YgdGhlIEJyaWNrICZhbXA7IE1vcnRhcnMgYWdhaW5zdCBPbmxpbmUgU3RvcmVzXHJcbjwvaDY+ICBcclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlRoaXMgd2VlaywgdGhlIFN1cHJlbWUgQ291cnQgICByZXZpc2l0cyBpdHMgMTk5MiBkZWNpc2lvbiBub3QgcmVxdWlyaW5nIHN0YXRlIHNhbGVzIHRheGVzIGZvciBvbmxpbmUgcHVyY2hhc2VzLjxzdXA+MTwvc3VwPiBBbHRob3VnaCBiaWctYm94IHN0b3JlcyBsaWtlIEFtYXpvbiwgV2FsbWFydCwgZXRjLiA8aT5kbzwvaT4gcGF5IHN0YXRlIHRheGVzIGFtb25nIHRoZSA0NSBzdGF0ZXMgcmVxdWlyaW5nIGl0LCBzbWFsbC0gYW5kIG1lZGl1bS1zaXplZCByZXRhaWxlcnMgZG8gbm90IG5lZWQgdG8gY29sbGVjdCBzYWxlcyB0YXhlcyBpbiBhbnkgc3RhdGUgd2hlcmUgdGhleSBkbyBub3QgaGF2ZSBwaHlzaWNhbCBwcmVzZW5jZSwgYWxzbyBrbm93biBhcyBcIm5leHVzLlwiIEJ1dCwgYmVnaW5uaW5nIHRoaXMgVHVlc2RheSwgdGhlIGZyZWUgcmlkZSBtYXkgY29tZSB0byBhbiAgZW5kOyB0aGlzIGluY2x1ZGVzIHNtYWxsIHJldGFpbGVycyB0aGF0IGNvbXByaXNlIGhhbGYgb2YgQW1hem9uJ3MgM3JkLXBhcnR5IG9ubGluZSBzYWxlcy5cclxuPC9wPlxyXG48cCBjbGFzcz1cInF1b3RlXCI+ICBcclxuXHJcbkEgcmV2ZXJzYWwgY291bGQgbWVhbiB0aGF0IGFsbCBvbmxpbmUgcmV0YWlsZXJzIG11c3QgY29sbGVjdCBzYWxlcyB0YXggZXZlcnl3aGVyZS4gSXQncyBhbiBpc3N1ZSB0aGF0IGJyaWNrLWFuZC1tb3J0YXIgcmV0YWlsZXJzIGluc2lzdCB3aWxsIHByb3ZpZGUgYSBsZXZlbCBwbGF5aW5nIGZpZWxkIHdpdGggb25saW5lIGNvbXBldGl0b3JzLCBhbmQgaGVscCB0byBwcm92aWRlIHN0YXRlIGFuZCBsb2NhbCBnb3Zlcm5tZW50cyB3aXRoIHRoZSB0YXggcmV2ZW51ZSB0aGV5IGRlc2VydmUuPHN1cD4yPC9zdXA+PC9wPlxyXG48cD4gTGl2ZWxpaG9vZHMgaGFuZyBpbiB0aGUgYmFsYW5jZSwgc28gd2hhdGV2ZXIgdGhlIGdhdmVsIHNldHRsZXMgb24sIGxldCdzIGhvcGUgZm9yIHRoZSBiZXN0ISBUaGUgQmxvY2tidXN0ZXItaXphdGlvbiBvZiBzbyBtYW55IGJyaWNrLWFuZC1tb3J0YXJzIHNlZW1zIHRvIGNsYWltIGEgbmV3IHZpY3RpbSBldmVyeSBtb250aC0tcmVjZW50bHkgVG95cyAnUiBVcyAgbWVldGluZyBpdHMgZGVtaXNlLjxzdXA+Mzwvc3VwPiBTbywgd2l0aCBhcyBtYW55IHRoYXQgaGF2ZSBkaXNhcHBlYXJlZCwgYmlnIGFuZCBzbWFsbC0sIGl0cyBhIGN1cmlvc2l0eSBpZiBtYXliZSBUdWVzZGF5IGJyZWF0aGVzIGxpZmUgaW50byB0aGUgYm9hcmRlZCBzdG9yZS1mcm9udHMgYWNyb3NzIEFtZXJpY2EuIEkgdGhpbmsgb3RoZXJzIHNoYXJlIG15IHZpZXcgdGhhdCBzaG9wcGluZyBpcyBtb3JlIHRoYW4gc2hpbnkgcGFja2FnaW5nIGF0IHRoZSBkb29yc3RlcDogaXQncyBtdWNoIG1vcmUgdGhlIGNlcmVtb255IGFuZCBnYWxhIGluIHRoZSBzdG9yZSAtIGEgIHJlYWwgc2hhcmVkIG1vbWVudCB3aXRoIHN0cmFuZ2VycywgYWNxdWFpbnRhbmNlcyBhbmQgbG92ZWQgb25lcyB0aGF0IG1ha2VzIGZvciBiZXR0ZXIgcGFja2FnaW5nLCBhIHBhY2thZ2UgZW1iZWxsaXNoZWQgd2l0aCBhIHN0b3J5LiAgIFxyXG48L3A+XHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjEuPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMvamFuZXR3YnVybnMvMjAxOC8wNC8xNS9zdXByZW1lLWNvdXJ0LWRlY2lzaW9uLWNvdWxkLWJyaW5nLXNhbGVzLXRheC10by1tb3JlLW9ubGluZS1zaG9wcGluZy8jMmEwZWEzOGYzZGFmXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuZm9yYmVzLmNvbS9zaXRlcy9qYW5ldHdidXJucy8yMDE4LzA0LzE1L3N1cHJlbWUtY291cnQtZGVjaXNpb24tY291bGQtYnJpbmctc2FsZXMtdGF4LXRvLW1vcmUtb25saW5lLXNob3BwaW5nLyMyYTBlYTM4ZjNkYWZcclxuPC9hPiA8L3A+XHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjIuPGEgaHJlZj1cImh0dHA6Ly9tb25leS5jbm4uY29tLzIwMTgvMDQvMTUvdGVjaG5vbG9neS9vbmxpbmUtcHVyY2hhc2VzLXNhbGVzLXRheGVzLXN1cHJlbWUtY291cnQvaW5kZXguaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHA6Ly9tb25leS5jbm4uY29tLzIwMTgvMDQvMTUvdGVjaG5vbG9neS9vbmxpbmUtcHVyY2hhc2VzLXNhbGVzLXRheGVzLXN1cHJlbWUtY291cnQvaW5kZXguaHRtbFxyXG48L2E+IDwvcD5cclxuPHAgY2xhc3M9XCJjaXRlXCI+My48YSBocmVmPVwiaHR0cHM6Ly93d3cud2FzaGluZ3RvbnBvc3QuY29tL25ld3MvYnVzaW5lc3Mvd3AvMjAxOC8wNC8xMy90aGlzLWJpbGxpb25haXJlLXRveS1leGVjdXRpdmUtaGFzLWEtbGFzdC1kaXRjaC1taXNzaW9uLXRvLXNhdmUtdG95cy1yLXVzLWJlZm9yZS1pdHMtdG9vLWxhdGUvP25vcmVkaXJlY3Q9b24mdXRtX3Rlcm09LmIzMjAxYWQ3Nzg5MVwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9uZXdzL2J1c2luZXNzL3dwLzIwMTgvMDQvMTMvdGhpcy1iaWxsaW9uYWlyZS10b3ktZXhlY3V0aXZlLWhhcy1hLWxhc3QtZGl0Y2gtbWlzc2lvbi10by1zYXZlLXRveXMtci11cy1iZWZvcmUtaXRzLXRvby1sYXRlLz9ub3JlZGlyZWN0PW9uJnV0bV90ZXJtPS5iMzIwMWFkNzc4OTFcclxuPC9hPiA8L3A+IFxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCIxOC0wNC0xM1wiIGNsYXNzPVwiICAgICAgICAgICBhdnIgMTgtMDMgLTI0XCI+XHJcbjxociAvPlxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuICZuYnNwO1xyXG48aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PiBcclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5NdXNpbmcgQmxvY2tjaGFpbjwvaDU+IFxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPiBcclxuPGg2ICAgIGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+QXByaWwgMTMsIDIwMTg8YnIgLz5cclxuPC9oNj4gIFxyXG48aDYgICAgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj4gXHJcbkJpdGNvaW5zICZhbXA7IEJyb3dzZXJzOiBBIEdsYW5jZSBhdCBCaXRjb2luIERpc3RyaWJ1dGVkIE1pbmluZyAgXHJcbjwvaDY+IFxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+Rm9yIGFsbCB0aGUgY2xhbW9yIGFib3V0IEJpdGNvaW4ncyBjYXJib24gZm9vdHByaW50LCB3aG8gZG9lc24ndCBsb3ZlIHRoZSBzb3VuZCBvZiBtb25leT8gIEFuZCwgZm9yIGFsbCB0aGUgcGl0ZmFsbHMgb2YgSW90YSBhbmQgdGhlIGV2ZXItZXZvbHZpbmcgRXRoZXJldW0gKGFuZCBldmVyLXByZXNlbnQgdGhyZWF0IG9mIGZvcmtpbmcpLCBCaXRjb2luIHN0YW5kcyB0cnVlIGFtb25nIHRoZSBjcnlwdG8tY3VycmVuY3kgcGxhdGZvcm1zLiBLZWVwaW5nIGl0IFNpbXBsZSwgICB0aGUgdmVyeSBsaW1pdGVkLCBub24tY3J5cHRvLWNvbnRyYWN0IG1heSBqdXN0IGJlIEJpdGNvaW4ncyB2aXJ0dWUuIEluIGEgcm9ja3kgd29ybGQsIDxpPmEgcGxhaW4sIG5vLWZyaWxscyBjcnlwdG8tY3VycmVuY3kgd2l0aCBzdGFiaWxpdHk8L2k+IGlzIGluY29tcGFyYWJsZSB0byBjcnlwdG8tY29udHJhY3QgcG93ZXJzLCB0aGF0IGFyZSBub3QgZnVsbHkgc3RhYmxlLCBsaWtlIEV0aGVyZXVtIGFuZCBJb3RhLiAgPC9wPlxyXG48cD5TbywgaXQncyBsaXZpbmcgdGhlIGRyZWFtLCBidXQgbXVzdCBpdCBiZSBzbyBjb3N0LWludGVuc2l2ZT8gTWF5YmUsIE1heWJlIG5vdCwgYnV0IHdoZXJlIGRvZXMgdGhlIGZ1dHVyZSBsaWUgZm9yIGFsbCB0aGF0IGhhcmR3YXJlPyBXaGVyZSBkb2VzIHRoZSBicm93c2VyIGZpdCBpbnRvIHRoaXM/IEZpcnN0LCB3aGF0J3MgZ29pbmcgb24gdW5kZXIgdGhlIGhvb2Q6IE5vdGUgdGhpcyBhcnRpY2xlIGlzIG9sZGVyLCBidXQgYWNjdXJhdGUgaW4gZXhwbGFuYXRpb24tLWV4Y2VwdCBmb3IgcmVmZXJlbmNlcyB0byBCaXRjb2luJ3MgdmFsdWUhIDwvcD4gIFxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPk5ldyBiaXRjb2lucyBhcmUgY3JlYXRlZCByb3VnaGx5IGV2ZXJ5IDEwIG1pbnV0ZXMgaW4gYmF0Y2hlcyBvZiAyNSBjb2lucywgd2l0aCBlYWNoIGNvaW4gd29ydGggYXJvdW5kICQ3MzAgYXQgY3VycmVudCByYXRlcy4gW0EgdHlwaWNhbCBob21lLV0gY29tcHV0ZXIgLi4uIGlzIHJhY2luZyB0aG91c2FuZHMgb2Ygb3RoZXJzIHRvIHVubG9jayBhbmQgY2xhaW0gdGhlIG5leHQgYmF0Y2guPC9wPlxyXG48cCBjbGFzcz1cInF1b3RlXCI+XHJcbkxldOKAmXMgc3RhcnQgd2l0aCB3aGF0IGl04oCZcyBub3QgZG9pbmcuICBcclxuWW91ciBjb21wdXRlciBpcyBub3QgYmxhc3RpbmcgdGhyb3VnaCB0aGUgY2F2ZXJub3VzIGRlcHRocyBvZiB0aGUgaW50ZXJuZXQgaW4gc2VhcmNoIG9mIGRpZ2l0YWwgb3JlIHRoYXQgY2FuIGJlIGZhc2hpb25lZCBpbnRvIGJpdGNvaW4gYnVsbGlvbi4gVGhlcmUgaXMgbm8gb3JlLCBhbmQgYml0Y29pbiBtaW5pbmcgZG9lc27igJl0IGludm9sdmUgZXh0cmFjdGluZyBvciBzbWVsdGluZyBhbnl0aGluZy4gSXTigJlzIGNhbGxlZCBtaW5pbmcgb25seSBiZWNhdXNlIHRoZSBwZW9wbGUgd2hvIGRvIGl0IGFyZSB0aGUgb25lcyB3aG8gZ2V0IG5ldyBiaXRjb2lucywgYW5kIGJlY2F1c2UgYml0Y29pbiBpcyBhIGZpbml0ZSByZXNvdXJjZSBsaWJlcmF0ZWQgaW4gc21hbGwgYW1vdW50cyBvdmVyIHRpbWUsIGxpa2UgZ29sZCwgb3IgYW55dGhpbmcgZWxzZSB0aGF0IGlzIG1pbmVkLiAoVGhlIHNpemUgb2YgZWFjaCBiYXRjaCBvZiBjb2lucyBkcm9wcyBieSBoYWxmIHJvdWdobHkgZXZlcnkgZm91ciB5ZWFycywgYW5kIGFyb3VuZCAyMTQwLCBpdCB3aWxsIGJlIGN1dCB0byB6ZXJvLCBjYXBwaW5nIHRoZSB0b3RhbCBudW1iZXIgb2YgYml0Y29pbnMgaW4gY2lyY3VsYXRpb24gYXQgMjEgbWlsbGlvbi4pIEJ1dCB0aGUgYW5hbG9neSBlbmRzIHRoZXJlLlxyXG48L3A+PHAgY2xhc3M9XCJxdW90ZVwiPlxyXG5XaGF0IGJpdGNvaW4gbWluZXJzIGFjdHVhbGx5IGRvIGNvdWxkIGJlIGJldHRlciBkZXNjcmliZWQgYXMgY29tcGV0aXRpdmUgYm9va2tlZXBpbmcuIE1pbmVycyBidWlsZCBhbmQgbWFpbnRhaW4gYSBnaWdhbnRpYyBwdWJsaWMgbGVkZ2VyIGNvbnRhaW5pbmcgYSByZWNvcmQgb2YgZXZlcnkgYml0Y29pbiB0cmFuc2FjdGlvbiBpbiBoaXN0b3J5LiBFdmVyeSB0aW1lIHNvbWVib2R5IHdhbnRzIHRvIHNlbmQgYml0Y29pbnMgdG8gc29tZWJvZHkgZWxzZSwgdGhlIHRyYW5zZmVyIGhhcyB0byBiZSB2YWxpZGF0ZWQgYnkgbWluZXJzOiBUaGV5IGNoZWNrIHRoZSBsZWRnZXIgdG8gbWFrZSBzdXJlIHRoZSBzZW5kZXIgaXNu4oCZdCB0cmFuc2ZlcnJpbmcgbW9uZXkgc2hlIGRvZXNu4oCZdCBoYXZlLiBJZiB0aGUgdHJhbnNmZXIgY2hlY2tzIG91dCwgbWluZXJzIGFkZCBpdCB0byB0aGUgbGVkZ2VyLiBGaW5hbGx5LCB0byBwcm90ZWN0IHRoYXQgbGVkZ2VyIGZyb20gZ2V0dGluZyBoYWNrZWQsIG1pbmVycyBzZWFsIGl0IGJlaGluZCBsYXllcnMgYW5kIGxheWVycyBvZiBjb21wdXRhdGlvbmFsIHdvcmvigJR0b28gbXVjaCBmb3IgYSB3b3VsZC1iZSBmcmF1ZHN0ZXIgdG8gcG9zc2libHkgY29tcGxldGUuPHN1cD4xPC9zdXA+XHJcbjwvcD5cclxuXHJcbjxwPlNvIGFsbCBvZiB0aGlzIGhhcmQgd29yayA8aT5jYW4gYmUgZGlzdHJpYnV0ZWQ8L2k+IGFjcm9zcyBicm93c2Vycywgd2hpY2ggaW1wcm92ZXMgaXRzIGVuZXJneS1leHBlbnNpdmUgcGxpZ2h0LiBJIHdvdWxkbid0IHJlY29tbWVuZCBydW5uaW5nIHRoZSBkZW1vIGluIHRoZSBhcnRpY2xlIGFzIGl0IG1heSBvdmVyaGVhdCB5b3VyIGRldmljZS0taXQgaGFkIG15IGZhbiBydW5uaW5nIGRvdWJsZS10aW1lLiBCdXQgdGhlIGludGVybmFscyBhcmUgdXNpbmcgSmF2YVNjcmlwdCBjb2RlIGZvciB0aGUgbWF0aC4gSGVyZSdzIGEgbG9vayB1bmRlciB0aGUgaG9vZCwgYW5kIGl0J3MgbmljZSB0byBzZWUgdGhlIHJvbGUgb2YgPGk+SmF2YVNjcmlwdCBncmFwaGljcyBsaWJyYXJ5LCBjYWxsZWQgRDNKUywgKERhdGEgRHJpdmVuIERvY3VtZW50cyk8L2k+IHBsYXlpbmcgYSBjZW50cmFsIHJvbGUuIFNvLCBiZWxvdyB5b3Ugc2VlIHRoZSBicm93c2VyIGFjY2VwdGluZyB0aGUgU0hBMjU2IEhhc2ggYWxvbmcgd2l0aCB0aGUgQml0Y29pbiBPd25lcidzIEFkZHJlc3MsIGFuZCB0aGUgSmF2YVNjcmlwdCBpbiB0aGUgYnJvd3NlciBwYXNzZXMgb2ZmIGNhbGN1bGF0aW9ucyB0byB0aGUgQysrIHJ1bm5pbmcgdGhlIEphdmFTY3JpcHQgVjggZW5naW5lIG9uIHlvdXIgY29tcHV0ZXIuIDwvcD5cclxuPGltZyBzcmM9XCIuL2Rpc3QvaW1nL21pbmluZ0Jsb2NrY2hhaW5EMy5QTkdcIiBjbGFzcz1cInpvb21cIiBzdHlsZT1cIm92ZXJmbG93OmhpZGRlbjt3aWR0aDoxODAlO1wiIC8+XHJcbjxwPkFuZCBzbywgd2hhdCBkb2VzIGl0IG1lYW4gdG8gbWluZSBCaXRjb2lucyBhY3Jvc3MgYnJvd3NlcnMgaW4gYSBkaXN0cmlidXRlZCBmYXNoaW9uPyBJdCBpcyBzaW1pbGFyIHRvIHRoZSBzYW1lIGNvbmNlcHQgYXMgRXRoZXJldW0ncyBkaXJlY3Rpb24gKG9yIGF0IGxlYXN0IGlkZWFsaXplZCBieSBpdHMgYXJjaGl0ZWN0LCBWaXRhbGlrIEJ1dGVyaW4pLCBpbiBydW5uaW5nIHRoZSBFdGhlcmV1bSBWaXJ0dWFsIE1hY2hpbmUgYmxvY2tjaGFpbiBhY3Jvc3MgYWxsIHRoZSBicm93c2VycyB0aGF0IGRvd25sb2FkIGl0cyBHRVRIIHNvZnR3YXJlLiBOb25ldGhlbGVzcywgaGVyZSdzIGEgc3VjY2luY3QgZXhwbGFuYXRpb24gb2YgdGhlIGJyb3dzZXIncyByb2xlLGFnYWluIGZyb20gUXVhcnR6OiA8L3A+XHJcbjxwIGNsYXNzPVwicXVvdGVcIj5NaW5pbmfigJlzIHVsdGltYXRlIHB1cnBvc2UgaXMgdG8gcHJldmVudCBwZW9wbGUgZnJvbSBkb3VibGUtc3BlbmRpbmcgYml0Y29pbnMuIEJ1dCBpdCBhbHNvIHNvbHZlcyBhbm90aGVyIHByb2JsZW0uIEl0IGRpc3RyaWJ1dGVzIG5ldyBiaXRjb2lucyBpbiBhIHJlbGF0aXZlbHkgZmFpciB3YXnigJRvbmx5IHRob3NlIHBlb3BsZSB3aG8gZGVkaWNhdGUgc29tZSBlZmZvcnQgdG8gbWFraW5nIGJpdGNvaW4gd29yayBnZXQgdG8gZW5qb3kgdGhlIGNvaW5zIGFzIHRoZXkgYXJlIGNyZWF0ZWQuXHJcbkJ1dCBiZWNhdXNlIG1pbmluZyBpcyBhIGNvbXBldGl0aXZlIGVudGVycHJpc2UsIG1pbmVycyBoYXZlIGNvbWUgdXAgd2l0aCB3YXlzIHRvIGdhaW4gYW4gZWRnZS4gT25lIG9idmlvdXMgd2F5IGlzIGJ5IHBvb2xpbmcgcmVzb3VyY2VzLjxiciAvPjxiciAvPlxyXG5cclxuXHJcbllvdXIgbWFjaGluZSwgcmlnaHQgbm93LCBpcyBhY3R1YWxseSB3b3JraW5nIGFzIHBhcnQgb2YgYSBiaXRjb2luIG1pbmluZyBjb2xsZWN0aXZlIHRoYXQgc2hhcmVzIG91dCB0aGUgY29tcHV0YXRpb25hbCBsb2FkLiBZb3VyIGNvbXB1dGVyIGlzIG5vdCB0cnlpbmcgdG8gc29sdmUgdGhlIGJsb2NrLCBhdCBsZWFzdCBub3QgaW1tZWRpYXRlbHkuIEl0IGlzIGNoaXBwaW5nIGF3YXkgYXQgYSBjcnlwdG9ncmFwaGljIHByb2JsZW0sIHVzaW5nIHRoZSBpbnB1dCBhdCB0aGUgdG9wIG9mIHRoZSBzY3JlZW4gYW5kIGNvbWJpbmluZyBpdCB3aXRoIGEgbm9uY2UsIHRoZW4gdGFraW5nIHRoZSBoYXNoIHRvIHRyeSB0byBmaW5kIGEgc29sdXRpb24uIFNvbHZpbmcgdGhhdCBwcm9ibGVtIGlzIGEgbG90IGVhc2llciB0aGFuIHNvbHZpbmcgdGhlIGJsb2NrIGl0c2VsZiwgYnV0IGRvaW5nIHNvIGdldHMgdGhlIHBvb2wgY2xvc2VyIHRvIGZpbmRpbmcgYSB3aW5uaW5nIG5vbmNlIGZvciB0aGUgYmxvY2suIEFuZCB0aGUgcG9vbCBwYXlzIGl0cyBtZW1iZXJzIGluIGJpdGNvaW5zIGZvciBldmVyeSBvbmUgb2YgdGhlc2UgZWFzaWVyIHByb2JsZW1zIHRoZXkgc29sdmUuPC9wPlxyXG48cD5JbiBwcmFjdGljZSwgZGlzdHJpYnV0ZWQgbWluaW5nIHBheXMgb2ZmIHF1aXRlIHdlbGwgaWYgb25seSBmb3IgdGhlIG93bmVycyBvZiB0aGF0IGFkZHJlc3MuIE15IGJsb2dwb3N0cyBvbiA8YSBocmVmPVwiIyA8YSBocmVmPVwiIzE4LTAyLTI4XCI+RmVicnVhcnkgMjZ0aCAgPC9hPiBhbmQgPGEgaHJlZj1cIiMxOC0wMi0yOFwiPkZlYi4gMjh0aCBhYm91dCBibG9ja2NoYWluIHN1c3RhaW5hYmlsaXR5IHBhaW50IGEgbGVzcyByb3N5IHBpY3R1cmUgb2YgdHlpbmcgdGhlIGN1cnJlbmN5IHZhbHVlIHRvIHRoZSBjb3N0IG9mIGVuZXJneSwgYnV0IG11bHRpcGxlIHNvbHV0aW9ucyBhbmQgZml4ZXMgZXhpc3QgdG8gZGlzdHJpYnV0ZSB0aGUgZW5lcmd5IGxvYWQgdG8gbGFwdG9wcyBvbiBjbGVhbiByZW5ld2FibGVzLCB0aGUgZWFzeSB3YXkgLi4uIGFmdGVyIGFsbCwgd2hvIGV2ZXIgc2FpZCBtb25leSBoYWQgdG8gYmUgc28gZXhwZW5zaXZlPyA8L2E+IFxyXG48cCBjbGFzcz1cImNpdGVcIj4xLjxhIGhyZWY9XCJodHRwczovL3F6LmNvbS8xNTQ4NzcvYnktcmVhZGluZy10aGlzLXBhZ2UteW91LWFyZS1taW5pbmctYml0Y29pbnMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9xei5jb20vMTU0ODc3L2J5LXJlYWRpbmctdGhpcy1wYWdlLXlvdS1hcmUtbWluaW5nLWJpdGNvaW5zL1xyXG48L2E+IChUaGUgYXJ0aWNsZSBsaW5rIGlzIGhhcm1sZXNzLCBidXQgd291bGRuJ3QgcmVjb21tZW5kIHJ1bm5pbmcgaXQgaWYgbG93IG9uIGJhdHRlcmllcy0taXQgZG91YmxlZCB0aGUgZmFuIHNwZWVkKTwvcD4gIFx0XHJcblxyXG48L2Rpdj5cclxuMTgtMDItMjZcclxuXHJcblxyXG48ZGl2IGlkPVwiMTgtMDQtMTJcIiBjbGFzcz1cIiAgICAgICAgICAgYXZyIDE4LTAzIC0yNFwiPlxyXG5cclxuICA8aHIgLz5cclxuXHJcbiAgIFxyXG5cclxuICA8YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiAgICZuYnNwO1xyXG5cclxuICA8aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PiBcclxuXHJcbiAgPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PiBcclxuXHJcbiAgPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD4gXHJcblxyXG4gIDxoNiAgICBjbGFzcz1cIiAgY2hhcHRlcm51bWJlclwiPkFwcmlsIDEyLCAyMDE4PGJyIC8+XHJcblxyXG5cclxuXHJcbiAgPC9oNj4gXHJcblxyXG48aDYgICAgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5BbGdvcml0aG1zIGFuZCBBLkkuPGJyIC8+U2NhbGFiaWxpdHkgIENvc3RzICAgb2YgRGF0YSBQcml2YWN5IFBvbGljaWVzXHJcblxyXG48L2g2PiBcclxuXHJcbiAgPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPiAgRGF0YSBwcml2YWN5IHJlZ3VsYXRpb24ncyBjaGFsbGVuZ2UgYmVnaW5zIHdpdGggZml2ZSBtaWxsaW9uIGFwcHMgYmV0d2VlbiBBcHBsZSBhbmQgQW5kcm9pZCBzdG9yZXMuIENvdW50bGVzcyB2dWxuZXJhYmlsaXRpZXMsIG5vdCB0byBtZW50aW9uIGRpZmZlcmVudCBzdGFuZGFyZHMgYW5kIGxhbmd1YWdlcyBhY3Jvc3MgdGhlIGFwcCB3b3JsZC4gPGk+TGlrZSBhbGwgVGVjaCBwcm9ibGVtcyw8L2k+c2NhbGFiaWxpdHkgcmVxdWlyZXMgVGVjaCBwcm9ibGVtLXNvbHZpbmctLTwvaT5pbiB0aGlzIGNhc2UgaW1wbHlpbmcgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UuICBBYm91dCBBLkkuLCBNYXJrIFp1Y2tlcmJlcmcgcmVtYXJrczo8L3A+ICBcclxuXHJcbiAgPHAgY2xhc3M9XCJxdW90ZVwiPiBUaGVyZSBhcmUgc29tZSByZWFsbHkgbnVhbmNlZCBxdWVzdGlvbnMsIHRob3VnaCwgYWJvdXQgaG93IHRvIHJlZ3VsYXRlIFtkYXRhXSB3aGljaCBJIHRoaW5rIGFyZSBleHRyZW1lbHkgaW50ZXJlc3RpbmcgaW50ZWxsZWN0dWFsbHkuIFNvIHRoZSBiaWdnZXN0IG9uZSB0aGF0IEnigJl2ZSBiZWVuIHRoaW5raW5nIGFib3V0IGlzIHRoaXMgcXVlc3Rpb24gb2Y6IFRvIHdoYXQgZXh0ZW50IHNob3VsZCBjb21wYW5pZXMgaGF2ZSBhIHJlc3BvbnNpYmlsaXR5IHRvIHVzZSBBSSB0b29scyB0byBraW5kIG9mIHNlbGYtcmVndWxhdGUgY29udGVudD88c3VwPjE8L3N1cD5cclxuICA8L3A+XHJcblxyXG4gIDxwPkEuSS4gaGVscCA8aT53b3VsZDwvaT4gYWxsZXZpYXRlIHRoZSBsYXJnZXN0IHNjYWxhYmlsaXR5IHByb2JsZW0tLWluIHRoZSBiaWxsaW9ucyBvZiBhY2NvdW50cyB0aGF0IEZhY2Vib29rIG5vdyBmYWNlcy4gWWV0LCB0aGUgaWRlYSBvZiByb2JvdHMgbXVsbGluZyBvdmVyIGRhdGEganVzdCBzb21laG93IGRvZXNuJ3Qgc2l0IHJpZ2h0LiBIb3dldmVyIHN1Y2ggbXVzaW5nIGdvZXMsIHRoZSBzb29uLXRvLWJlLWltcGxlbWVudGVkIGluZHVzdHJ5IHN0YW5kYXJkIGluIEV1cm9wZSBpcyB0aGUgPGk+RS5VLiBHZW5lcmFsIERhdGEgUHJpdmFjeSBSZWd1bGF0aW9uIChHRFBSKTwvaT4gY2FzdHMgYSBsb25nIHNoYWRvdzogRmFjZWJvb2sgd2lsbCBuZWVkIHRvIGNvbXBseSB0byB0aGF0IHJlZ3VsYXRpb24gZm9yIEV1cm9wZWFuIEYuQi4gY29uc3VtZXJzLiA8L3A+XHJcbiAgPHA+U2V0IGZvciBNYXkgMTR0aCBpbXBsZW1lbnRhdGlvbiwgdGhlIHN0YW5kYXJkIHdhcyBmcmVxdWVudGx5IG1lbnRpb25lZCBkdXJpbmcgdGhlIEFwcmlsIDEyIENvbmdyZXNzaW9uYWwgSGVhcmluZ3MuIEludGVyZXN0aW5nbHksIHRoZSBHRFBSIHRha2VzIGEgPGk+ZGlyZWN0IHN0YW5kIGFnYWluc3QgdGhlIGNvbmNlcHQgb2YgYWxnb3JpdGhtIHVzZSB3aXRoIGRhdGE8L2k+ICh3aXRob3V0IGV4cHJlc3MgY29uc2VudCksIHdoaWNoIGJlZ3MgdGhlIEEuSS4gcXVlc3Rpb24gYWdhaW4uIDwvcD5cclxuXHJcbiAgPHAgY2xhc3M9XCJxdW90ZVwiPlRoZSBFdXJvcGVhbiBsYXcgZ2l2ZXMgaW5kaXZpZHVhbHMgdGhlIHJpZ2h0IG5vdCB0byBiZSBzdWJqZWN0IHRvIGNvbXBsZXRlbHkgYXV0b21hdGVkICBkZWNpc2lvbnMgd2hpY2ggc2lnbmlmaWNhbnRseSBhZmZlY3QgdGhlbS4gVGhlc2UgZGVjaXNpb25zIGNvdWxkIGluY2x1ZGUgY3JlZGl0IGFsZ29yaXRobXMgdGhhdCB1c2UgYW4gaW5kaXZpZHVhbOKAmXMgZGF0YSB0byBkZWNpZGUgd2hldGhlciBhIGJhbmsgc2hvdWxkIGdyYW50IGhpbSBvciBoZXIgYSBsb2FuLiAgXHJcblxyXG4gICAgICBQcml2YWN5IEludGVybmF0aW9uYWwgc2FpZCB0aGUgY2xhdXNlIG9uIGF1dG9tYXRlZCBkZWNpc2lvbnMgY291bGQgYWxsb3cgY29uc3VtZXJzIHRvIGNoYWxsZW5nZSBGYWNlYm9vayBwcmFjdGljZXMgbGlrZSBwb2xpdGljYWwgYWR2ZXJ0aXNpbmcsIHdoaWNoIGNhbiBiZSBzZW50IHRvIHVzZXJzIGJhc2VkIG9uIGFsZ29yaXRobXMsIGJlY2F1c2UgdGhlIGFkcyBhcmUgbWVhbnQgdG8gc3dheSB1c2Vyc+KAmSB2b3Rlcy48c3VwPjI8L3N1cD48L3A+XHJcblxyXG4gIDxwPkkgdGhpbmsgdGhlIEUuVS4gR0RQUiBkYXRhIHBvbGljeSBtb2RlbCBpcyBpbnRlbGxpZ2VudCAtIHdobyB3b3VsZCBoYXZlIHRob3VnaHQgdG8gcmUtaHVtYW5pemUgb3VyIHBlcnNvbmFsIGRhdGEgICBieSB0YWtpbmcgaXQgYXdheSBmcm9tIGFsZ29yaXRobXMsIHdpdGhvdXQgb3VyIHBlcm1pc3Npb24uIEkgbGlrZSB0aGF0LCBhZnRlciBhbGwsIHdobyBsaWtlcyB0byBiZSB1bmtub3dpbmdseSBqdWRnZWQ/IExlYXN0IG9mIGFsbCBieSBhIHJvYm90IVxyXG5cclxuXHJcblxyXG4gIDwvcD5cclxuXHJcbiAgICAgIDxwIGNsYXNzPVwiY2l0ZVwiPjEuPGEgaHJlZj1cImh0dHBzOi8vd3d3LndpcmVkLmNvbS9zdG9yeS9tYXJrLXp1Y2tlcmJlcmctdGFsa3MtdG8td2lyZWQtYWJvdXQtZmFjZWJvb2tzLXByaXZhY3ktcHJvYmxlbVwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LndpcmVkLmNvbS9zdG9yeS9tYXJrLXp1Y2tlcmJlcmctdGFsa3MtdG8td2lyZWQtYWJvdXQtZmFjZWJvb2tzLXByaXZhY3ktcHJvYmxlbVxyXG5cclxuICA8L2E+PC9wPiAgXHRcclxuXHJcbiAgPHAgY2xhc3M9XCJjaXRlXCI+My4gPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTgvMDQvMDgvdGVjaG5vbG9neS9hLXRvdWdoLXRhc2stZm9yLWZhY2Vib29rLWV1cm9wZWFuLXR5cGUtcHJpdmFjeS1mb3ItYWxsLmh0bWw/cmliYm9uLWFkLWlkeD0yJnJyZWY9dGVjaG5vbG9neSZtb2R1bGU9UmliYm9uJnZlcnNpb249Y29udGV4dCZyZWdpb249SGVhZGVyJmFjdGlvbj1jbGljayZjb250ZW50Q29sbGVjdGlvbj1UZWNobm9sb2d5JnBndHlwZT1hcnRpY2xlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAxOC8wNC8wOC90ZWNobm9sb2d5L2EtdG91Z2gtdGFzay1mb3ItZmFjZWJvb2stZXVyb3BlYW4tdHlwZS1wcml2YWN5LWZvci1hbGwuaHRtbD9yaWJib24tYWQtaWR4PTImcnJlZj10ZWNobm9sb2d5Jm1vZHVsZT1SaWJib24mdmVyc2lvbj1jb250ZXh0JnJlZ2lvbj1IZWFkZXImYWN0aW9uPWNsaWNrJmNvbnRlbnRDb2xsZWN0aW9uPVRlY2hub2xvZ3kmcGd0eXBlPWFydGljbGVcclxuXHJcbiAgPC9hPiA8L3A+ICBcclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuPGRpdiBpZD1cIjE4LTA0LTExXCIgY2xhc3M9XCIgICAgICAgICBhdnIgMTgtMDMgLTI0XCI+XHJcblxyXG48aHIgLz5cclxuXHJcbiBcclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuICZuYnNwO1xyXG5cclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND4gXHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+IFxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD4gXHJcblxyXG48aDYgICAgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5BcHJpbCAxMSwgMjAxODxiciAvPlxyXG5cclxuXHJcblxyXG48L2g2PiBcclxuXHJcbjxoNiAgICBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPldoZW4gYSBQaWNrcG9ja2V0IGlzIFBpY2twb2NrZXRlZDo8YnIgLz5QYXJ0IElJSS4gVGhlIFBhdGggdG93YXJkIFNvdW5kIERhdGEgUHJpdmFjeSBQb2xpY3lcclxuXHJcbjwvaDY+IFxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkRheSB0d28gb2YgQ29uZ3Jlc3Npb25hbCBoZWFyaW5ncyBvdmVyIEZhY2Vib29rJ3MgRGF0YSBQcml2YWN5IGFuZCBQcm90ZWN0aW9ucyAgd2VyZSBiZXR0ZXIgYXJ0aWN1bGF0ZWQgdGhhbiB0aGUgZmlyc3QgZGF5LiBJbXBvcnRhbnQgZGlhbG9ndWUgc3Vycm91bmRlZCBwcmltYXJpbHkgICB0d28gZGF0YSBwcml2YWN5IHRvcGljczogRmlyc3QsIGZpbmFuY2lhbCB0cmFuc3BhcmVuY3kgc3Vycm91bmRpbmcgYWRzIGFuZCBwb2xpdGljYWwgYWRzIGJhc2VkIG9uIHRoZSA8aT5Ib25lc3QgQWRzIEFjdDwvaT4sIGZvciB3aGljaCBadWNrZXJiZXJnIHBsZWRnZWQgc3VwcG9ydDxzdXA+MTwvc3VwPi4gXHJcblxyXG48L3A+XHJcblxyXG48cD5TZWNvbmQsIGFuZCAgIG1vcmUgZmFyLXJlYWNoaW5nLCBkaXNjdXNzaW9uIG9mIHRoZSA8aT5Ccm93c2VyIEFjdDwvaT4gYWxzbyB3YXMgcmFpc2VkIGJ5IHNldmVyYWwgSG91c2UgbWVtYmVycy4gV2hpbGUgcmVzcG9uZGluZyB0byB0aGUgQWN0J3Mgc3BvbnNvciwgTWFyc2hhIEJsYWNrYnVybiBvZiBUZW5uZXNzZWUsIFp1Y2tlcmJlcmcgZXhwcmVzc2VkIGludGVyZXN0IGluIHdvcmtpbmcgdG9nZXRoZXIuIFRoaXMgYmlsbCBpcyBub3Qgd2VsbCBrbm93biwgYnV0IGFpbXMgdG8gc2V0IHBydWRlbnQsIGNvbnNpc3RlbnQgZ3VpZGVsaW5lcyBvZiBwcml2YWN5IGluIHRoZSBoYW5kcyBvZiB0aGUgY29uc3VtZXIuIDwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj4gW0JsYWNrYnVybidzXSBuZXcgYmlsbCB0YXJnZXRzIHRoZSBmdWxsIHNwZWN0cnVtIG9mIHRoZSBpbnRlcm5ldCwgaW5jbHVkaW5nIHdlYiBnaWFudHMgbGlrZSBBbWF6b24gYW5kIEdvb2dsZS4gSW4gQmxhY2tidXJu4oCZcyB3b3JkcywgaXQgbW92ZXMgdGhlIGdvdmVybm1lbnQg4oCcdG8gYSBwb3N0dXJlIHdoZXJlIHdlIGhhdmUgb25lIHJlZ3VsYXRvciwgb25lIHNldCBvZiBydWxlcyBbYW5kXSBldmVyeWJvZHkga25vd3Mgd2hv4oCZcyBpbiBjaGFyZ2Us4oCdIHNoZSB0b2xkIFJlY29kZS48c3VwPjM8L3N1cD48L3A+XHJcblxyXG48cD5TbywgaG93ZXZlciB0aGUgcG93ZXIgc3RydWdnbGUgZ29lcywgYSA8aT5zaGFyZWQgdGVjaG5vbG9neSBsZXhpY29uPC9pPiBjbGFyaWZpZXMgdGhhdCBzaGFkZXMgb2YgbWVhbmluZyBtYWtlIGVub3Jtb3VzIGRpZmZlcmVuY2UsIGRlcGVuZGluZyBvbiBcIndoYXRcIiBhbiBlbnRpdHkgaXMtLXdoZXRoZXIgYSB0ZWNobm9sb2d5IGlzIGEgUGxhdGZvcm0gYXMgYSBTZXJ2aWNlICB2ZXJzdXMgbWVkaWEgb3V0bGV0IG9yIHN0cmljdGx5IG1lcmNoYW50LWJhc2VkLiBIb3BlZnVsbHksIDxpPlRlY2ggd2lsbCBsZWFkIHRoZSB3YXk8L2k+IHdpdGhvdXQgY2VkaW5nIGF1dGhvcml0eSBpbiB0aGUgcHJvY2VzczogPC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlxyXG5cclxuICBCdXQgdGhlIFRlbm5lc3NlZSBsYXdtYWtlcuKAmXMgZWZmb3J0IGhhc27igJl0IHdvbiBhbnkgYWxsaWVzIGFtb25nIHByaXZhY3ktY29uc2Npb3VzIGNvbnN1bWVyIGdyb3VwcywgbGlrZSB0aGUgQW1lcmljYW4gQ2l2aWwgTGliZXJ0aWVzIFVuaW9uLCB3aGljaCBkb3VidCBCbGFja2J1cm7igJlzIG1ldGhvZHMuIEFuZCBoZXIgYmlsbCBoYXMgYWxyZWFkeSBwcm9tcHRlZCBhIHdob2xlIG5ldyByb3VuZCBvZiBmaWVyY2UgbG9iYnlpbmcgYnkgdGVjaCBhbmQgdGVsZWNvbSBnaWFudHMsIHdoaWNoIGRvbuKAmXQgc2VlIHRoZSBuZWVkIGZvciBhbnkgbmV3IHJlZ3VsYXRpb24gYXQgYWxsLlxyXG5cclxuICA8L3A+IFxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlxyXG5cclxu4oCcSSB0aGluayB0aGF0LCBpbiBjb25jZXB0LCB0aGUgaWRlYSB0aGF0IHRoZXJlIHNob3VsZCBiZSBzdHJvbmdlciBwcml2YWN5IHN0YW5kYXJkcyBmb3IgZWRnZSBwcm92aWRlcnMgYW5kIGludGVybmV0IHNlcnZpY2UgcHJvdmlkZXJzIGlzIHJpZ2h0LOKAnSBzYWlkIE5lZW1hIFNpbmdoIEd1bGlhbmksIHRoZSBsZWdpc2xhdGl2ZSBjb3Vuc2VsIGF0IHRoZSBBQ0xVLjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5cclxuXHJcbkJ1dCBCbGFja2J1cm4sIHNoZSBhZGRlZCwgc2hvdWxkIGhhdmUgZ29uZSBhYm91dCBpdCBkaWZmZXJlbnRseS4g4oCcVGhlIHdheSB0byBkbyBpdCB3YXMgbm90IC4uLiBbdGhyb3VnaF0gZ3V0dGluZyB0aGUgRkND4oCZcyBydWxlczsgdGhlIHdheSB0byBkbyBpdCB3YXMgYWN0aXZlbHkgd29ya2luZyBvbiBhIHJlcGxhY2VtZW50LuKAnTxzdXA+Mzwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+VGhlIGJpbGwgaXMgc2ltaWxhciB0byB0aGUgRXVyb3BlYW4gZGF0YSBwcml2YWN5IG1vZGVsLCA8aT5FLlUuIEdlbmVyYWwgRGF0YSBQcm90ZWN0aW9uIFJlZ3VsYXRpb24oR0RQUik8L2k+LCB3aGljaCBzZXJ2ZXMgYXMgcG9pbnQgb2YgcmVmZXJlbmNlLjxzdXA+Mjwvc3VwPiBPbiBNYXkgMTQsICAgRXVyb3BlYW5zIHdpbGwgICBiZSBpbXBsZW1lbnRpbmcgYSBwYW4taW50ZXJuZXQtLWVkZ2UgYW5kIElTUC0tZGF0YSBwcm90ZWN0aW9ucywgd2hpY2ggaW5jbHVkZSBlLW1haWwsIEZhY2Vib29rIGFuZCBvdGhlciBhcHBzLCBlcXVhbGx5IGFzIGZvciBDb21jYXN0IGFuZCBWZXJpem9uLCBhbmQgaW5kdXN0cnktd2lkZSBwcml2YWN5IGRlZmF1bHRzOyBGdXJ0aGVyLCBvcHQtaW4gZm9yIHByaXZhY3kgaXMgbW9yZSBtZWFuaW5nZnVsIHNlcGFyYXRlLCBhbmQgIG5vdCByZWxlZ2F0ZWQgdG8gdGhlIG1haW4gVGVybXMgYW5kIENvbmRpdGlvbnMuPHN1cD4zPC9zdXA+PC9wPlxyXG5cclxuPHA+UG9saWN5IHJlZ3VsYXRpb24gaW4gb3RoZXIgaW5kdXN0cmllcy0tZXhlbXBsaWZpZWQgYnkgbWVkaWNhbCA8aT5ISVBBQTwvaT4sIGZpbmFuY2lhbCA8aT5GYWlyIENyZWRpdCAgIFJlcG9ydGluZyBBY3Q8L2k+LS1yZXZlYWxzIHRoZSBub3RpY2VhYmxlIGFic2VuY2Ugb2Ygc2ltaWxhciBwb2xpY3kgaW4gVGVjaC4gVGVjaCdzIHJlZ3VsYXRpb24gaXMgaG93ZXZlciBuZWNlc3NhcmlseSBmYXIgbW9yZSBjb21wbGV4LCBpbnZvbHZpbmcgYXQgbWluaW11bSB0cmFkZS1vZmZzIGJldHdlZW4gYXBwLXRvLWFwcCBkYXRhIHBvcnRhYmlsaXR5IGFuZCBuZXcgYm91bmRhcmllcyBmb3IgZGlmZmVyZW50IHNvdXJjZXMgYW5kIGZvcm1zIG9mIGRhdGEuIENsZWFybHksIHRoZSBicm93c2VyLWJhc2VkLCBoaWdoLXNlY3VyaXR5IEhUVFBTIEVuY3J5cHRpb24gSSBtZW50aW9uZWQgaW4gbXkgPGEgaHJlZj1cIiMxOC0wNC0wNlwiPkFwcmlsIDYgdGhyZWUtcGFydCBzZXJpZXMgb24gUHJvZ3Jlc3NpdmUgV2ViIEFwcHMgPC9hPndpbGwgdW5kb3VidGVkbHkgYmUgdXNlZCBmb3IgcXVpY2ssIGluZXhwZW5zaXZlIGRhdGEgcHJpdmFjeSBjb21wbGlhbmNlLCA8aT5hIHJlYWwgYm9vbiBmb3IgSmF2YVNjcmlwdCBkZXZlbG9wZXJzPC9pPi0tYXMgaWYgdGhlcmUgd2Fzbid0IGVub3VnaCB3b3JrIGFscmVhZHkhXHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4yLiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZXVnZHByLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LmV1Z2Rwci5vcmdcclxuXHJcbjwvYT48L3A+ICBcclxuXHJcblxyXG5cclxuICAgICAgICA8cCBjbGFzcz1cImNpdGVcIj4zLiA8YSBocmVmPVwiaHR0cHM6Ly93d3cucmVjb2RlLm5ldC8yMDE3LzUvMjQvMTU2ODU4NzAvbmV3LXJlcHVibGljYW4tcHJpdmFjeS1iaWxsLXRlY2gtdGVsZWNvbS1sb2JieWluZy1mY2MtY29uZ3Jlc3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5yZWNvZGUubmV0LzIwMTcvNS8yNC8xNTY4NTg3MC9uZXctcmVwdWJsaWNhbi1wcml2YWN5LWJpbGwtdGVjaC10ZWxlY29tLWxvYmJ5aW5nLWZjYy1jb25ncmVzc1xyXG5cclxuICAgICAgICA8L2E+PC9wPiAgXHJcblxyXG4gICAgPHAgY2xhc3M9XCJjaXRlXCI+My4gPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTgvMDQvMDgvdGVjaG5vbG9neS9hLXRvdWdoLXRhc2stZm9yLWZhY2Vib29rLWV1cm9wZWFuLXR5cGUtcHJpdmFjeS1mb3ItYWxsLmh0bWw/cmliYm9uLWFkLWlkeD0yJnJyZWY9dGVjaG5vbG9neSZtb2R1bGU9UmliYm9uJnZlcnNpb249Y29udGV4dCZyZWdpb249SGVhZGVyJmFjdGlvbj1jbGljayZjb250ZW50Q29sbGVjdGlvbj1UZWNobm9sb2d5JnBndHlwZT1hcnRpY2xlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAxOC8wNC8wOC90ZWNobm9sb2d5L2EtdG91Z2gtdGFzay1mb3ItZmFjZWJvb2stZXVyb3BlYW4tdHlwZS1wcml2YWN5LWZvci1hbGwuaHRtbD9yaWJib24tYWQtaWR4PTImcnJlZj10ZWNobm9sb2d5Jm1vZHVsZT1SaWJib24mdmVyc2lvbj1jb250ZXh0JnJlZ2lvbj1IZWFkZXImYWN0aW9uPWNsaWNrJmNvbnRlbnRDb2xsZWN0aW9uPVRlY2hub2xvZ3kmcGd0eXBlPWFydGljbGVcclxuXHJcbiAgICA8L2E+IDwvcD4gIFxyXG5cclxuPHAgY2xhc3M9XCJjaXRlXCI+NC4gPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2FydGljbGUvdXMtZmFjZWJvb2stcHJpdmFjeS16dWNrZXJiZXJnL3p1Y2tlcmJlcmctcmVzaXN0cy1lZmZvcnQtYnktdS1zLXNlbmF0b3JzLXRvLWNvbW1pdC1oaW0tdG8tcmVndWxhdGlvbi1pZFVTS0JOMUhIMUNVXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cucmV1dGVycy5jb20vYXJ0aWNsZS91cy1mYWNlYm9vay1wcml2YWN5LXp1Y2tlcmJlcmcvenVja2VyYmVyZy1yZXNpc3RzLWVmZm9ydC1ieS11LXMtc2VuYXRvcnMtdG8tY29tbWl0LWhpbS10by1yZWd1bGF0aW9uLWlkVVNLQk4xSEgxQ1VcclxuXHJcbjwvYT48L3A+ICBcclxuXHJcblxyXG5cclxuPC9kaXY+IFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuPGRpdiBpZD1cIjE4LTA0LTEwXCIgY2xhc3M9XCIgICAgICBhdnIgMTgtMDMgLTI0XCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+IDxidXR0b24+VG9wPC9idXR0b24+IDwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND4gXHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPlNvY2lvbG9neSBUb21vcnJvdyE8L2g1PiBcclxuXHJcbjxwIGNsYXNzPVwiICBhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+IFxyXG5cclxuPGg2ICAgIGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+QXByaWwgMTAsIDIwMTg8YnIgLz4gXHJcblxyXG48L2g2PiBcclxuXHJcbjxoNiAgICBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPldoZW4gYSBQaWNrcG9ja2V0IGlzIFBpY2twb2NrZXRlZDo8YnIgLz4gIFBhcnQgSUk6ICBcIlNlbWFudGljIFBvbHltb3JwaGlzbVwiLCBpLmUuLCBEb3VibGUgVGFsayBhYm91dCAgRGF0YSBcclxuXHJcbjwvaDY+IFxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPk1hcmsgWnVja2VyYmVyZyBkYWZ0bHkgcGxheWVkIHdvcmQtdGVubmlzIHdpdGggICBTZW5hdG9ycyBpbiB0aGUgZmlyc3QgZGF5IG9mIENvbmdyZXNzaW9uYWwgSGVhcmluZ3Mgb24gRmFjZWJvb2sgRGF0YSBQcml2YWN5IGlzc3Vlcy4gQWx0aG91Z2gsIGluIHRoaXMgY2FzZSwgPGk+dGhlcmUgd2VyZSB0d28sIGF0IHRpbWVzIHRocmVlLCB0ZW5uaXMgYmFsbHMgYXQgcGxheSE8L2k+IFdoYXQgSSBtZWFuIGlzIHRoYXQgXCJEYXRhXCIgYW5kIFwiUGVyc29uYWwgRGF0YVwiIHZhY2NpbGF0ZWQgaW4gbWVhbmluZzogIEF0IHRpbWVzLCBTZW5hdG9ycycgcXVlc3Rpb25zIHJlZmVycmVkIHRvLCAxLikgcGVyc29uYWxseSBpZGVudGlmaWFibGUgZGF0YSB3aXRoIGludGltYXRlIHBlcnNvbmFsIGRldGFpbHMsIGZ1bGwgbmFtZSwgbG9jYXRpb24gZGF0YSAoc2Vuc2l0aXZlLWRhdGEpOyAyLikgT3RoZXIgdGltZXMgcXVlc3Rpb25zIHJlZmVycmVkIHRvIDxpPmRlcml2YXRpdmUgZGF0YSwgaS5lLiBkYXRhIHdyYW5nbGVkLCByZWZpbmVkLCBtZXJnZWQgd2l0aCBkaWZmZXJlbnQgZGF0YXNldHM8L2k+IChjb21wb3NpdGUtZGF0YSk7IGFuZCwgIDMuKSBzb21ldGltZXMgdGhlIHF1ZXN0aW9ucyBtZWFudCB0aGUgaGFybWxlc3MsIGlkZW50aXR5LWVuY3J5cHRlZCBcImFkLWRhdGFcIihhbm9ueW1pemVkLWRhdGEpOyBidXQsIHVzdWFsbHksIFp1Y2tlcmJlcmcgcmVzcG9uZGVkIHRvIGEgcXVlc3Rpb24gYWJvdXQgb25lIG9mIHRoZXNlIHRocmVlIG1lYW5pbmdzIG9mIFwicGVyc29uYWwgZGF0YVwiLCBieSByZXNwb25kaW5nIHdpdGggYSBub24tYWJzdHJhY3QgZm91cnRoOiA0LikgXCJTZW5hdG9yLCB0aGUgZGF0YSwgdGhlICdsaWtlcycgYW5kIHBpY3R1cmVzIHlvdSBzaGFyZSB3aXRoIEZhY2Vib29rLCB0aGV5IGFyZSB5b3VyIHByb3BlcnR5LFwiIFp1Y2tlcmJlcmcgd291bGQgYW5zd2VyLiBXZWxsLCB0aGFuayBnb29kbmVzcyEgPC9wPlxyXG5cclxuPHA+IE15IGJsb2dwb3N0IHRhbGtzIGFib3V0IHRoZSBzaGFkZXMgb2YgbWVhbmluZzogV2UgYWxsIGtub3cgdGhlIGxpZ2h0LWhlYXJ0ZWQgYXdrd2FyZG5lc3Mgd2hlbiBhIGNvbnZlcnNhdGlvbiBzcGxpdHMgaW50byB0d28gc2VwYXJhdGUgdGhyZWFkcyBiZWNhdXNlIGVhY2ggcGFydHkgdW5rbm93aW5nbHkgZm9sbG93cyBkaWZmZXJpbmcgbWVhbmluZ3MgZnJvbSB0aGUgc2FtZSB3b3JkLCBvciBpZGVhLiAgQXVzdGluIFBvd2VycyB3b3VsZCBoYXZlIG1vcmUgZnVuIHdpdGggaXQsIGJ1dCB0aGUgU29jaW9sb2dpc3RzIHR5cGljYWxseSBjYWxsIGl0ICBhIDxpPlNlbWFudGljIFByZWRpY2FtZW50PC9pPi48c3VwPjE8L3N1cD48L3A+IFxyXG5cclxuPHA+SW4gZmFpcm5lc3MsIE1hcmsgWnVja2VyYmVyZyB2b2x1bnRlZXJlZCBhcyBoZSBoaW1zZWxmIHdhcyBub3Qgc3VicG9lbmFlZCwgYW5kIHRoZXJlZm9yZSB0aGlzIHByZWxpbWluYXJ5LCBwdWJsaWMgZGlzY291cnNlIHdhcyBjcml0aWNhbCBmb3IgY3JlYXRpbmcgc2hhcmVkIG1lYW5pbmcgYW5kIGxhbmd1YWdlIGFib3V0IGEgY29tcGxleCB0b3BpYy4gQnkgdm9sdW50ZWVyaW5nIHRvIGVuZ2FnZSBjb252ZXJzYXRpb24gd2l0aCBTZW5hdG9ycywgWnVja2VyYmVyZyBpbnRlcnJ1cHRzIHRoZSA8aT5nYW1lIG9mIHRlbGVwaG9uZTwvaT47IGFuZCwgU2VuYXRvcnMgZW5nYWdlIHdpdGggdGhlaXIgY29uc3RpdHVlbnRzLCBhbmQgbG8sIEFtZXJpY2Egc2F2ZXMgdHdvIHllYXJzJyBvZiBtaXN1bmRlcnN0YW5kaW5ncyBmb3IgY2xlYXIgZGF0YS1wcm90ZWN0aW9uIGFjdGlvbiBub3cuIEJyYXZvLCBNYXJrISBadWNrZXJiZXJnIGlzIHBlcmhhcHMgb25lIG9mIHRoZSBicmF2ZXIgQ0VPcyBpbiBBbWVyaWNhbiBoaXN0b3J5LS1Ob3csIGhlIGhhcyBlYXJuZWQgaGlzIHBsYWNlIHJpZ2h0IG5leHQgdG8gQW5kcmV3IENhcm5lZ2llLS1hbmQgdmVyeSBzaW1pbGFyIGxpdmVzLCB0b28uIEFuZCBub3csIHdpdGggZGVmaW5lZCBib3VuZGFyaWVzLCA8aT5UZWNoIGhhcyBhIGJldHRlciByb2FkbWFwPC9pPiBmb3IgZXRoaWNhbCBwb2xpY3kgYW5kIHNlbnNpYmxlIHJlZ3VsYXRpb24uIFNvIGxldCB0aGUgZGF0YSBkZWJhdGVzIGJlZ2luLS1idXQgdGhpcyB0aW1lLHdpdGggb25seSBvbmUgICBiYWxsIGF0IHBsYXkhIDwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPiBcclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJjaXRlXCI+MS4gPGEgaHJlZj1cImh0dHBzOi8vb25saW5lbGlicmFyeS53aWxleS5jb20vZG9pL2Z1bGwvMTAuMTExMS9qLjE0NjctOTU1OC4yMDA4LjAwMzI0LnhcIiB0YXJnZXQ9XCJfYmxhbmtcIj5BYmVuZCwgRy4gKDIwMDgpLiBUaGUgbWVhbmluZyBvZiDigJh0aGVvcnnigJkuIFNvY2lvbG9naWNhbCBUaGVvcnksIDI2KDIpLCAxNzMtMTk5LlxyXG5cclxuPC9hPiA8YnIgLz48YSBocmVmPVwiaHR0cHM6Ly9wZGZzLnNlbWFudGljc2Nob2xhci5vcmcvNmRmMi85ZTE5Y2IwMmI2ODRlZTM4NzE5MmRmYTRiMWQyODRiODgxNDMucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UERGICA8L2E+XHJcblxyXG48L3A+ICBcclxuXHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjIuIDxhIGhyZWY9XCJodHRwczovL3d3dy53aXJlZC5jb20vc3RvcnkvbWFyay16dWNrZXJiZXJnLXRhbGtzLXRvLXdpcmVkLWFib3V0LWZhY2Vib29rcy1wcml2YWN5LXByb2JsZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy53aXJlZC5jb20vc3RvcnkvbWFyay16dWNrZXJiZXJnLXRhbGtzLXRvLXdpcmVkLWFib3V0LWZhY2Vib29rcy1wcml2YWN5LXByb2JsZW1cclxuXHJcbjwvYT5cdDwvcD4gXHJcblxyXG5cclxuXHJcbjwvZGl2PiBcclxuXHJcblxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiMTgtMDQtMDlcIiBjbGFzcz1cIiAgICAgICBhdnIgMTgtMDMgLTI0XCI+XHJcblxyXG48aHIgLz5cclxuXHJcbiBcclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPiA8YnV0dG9uPlRvcDwvYnV0dG9uPiA8L2E+XHJcblxyXG4gJm5ic3A7XHJcblxyXG48aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PiBcclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+U29jaW9sb2d5IFRvbW9ycm93ITwvaDU+IFxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD4gXHJcblxyXG48aDYgICAgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5BcHJpbCA5LCAyMDE4PGJyIC8+XHJcblxyXG4gICBcclxuXHJcbiAgPC9oNj4gXHJcblxyXG48aDYgICAgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5XaGVuIGEgUGlja3BvY2tldCBpcyBQaWNrcG9ja2V0ZWQ6PGJyIC8+UGFydCBJOiBGYWNlYm9vayBEYXRhIEdlbmVyYXRpb24gYW5kIHRoZSBEZWVwZXN0cyBEZXNpcmVzIG9mIFBzeWNob21ldHJpY2lhbnMsIDxpPldpdGhvdXQgQW5vbnltaXphdGlvbjwvaT4gICBcclxuXHJcbjwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5Qc3ljaG9tZXRyaWNzLCBhbG9uZyB3aXRoIHRvZGF5J3MgYmlvbWV0cmljcyBhbmQgZWNvbm9tZXRyaWNzLCBmb3JtIHRoZSAzIHByaW1hcnkgZG9tYWlucyBvZiBzdGF0aXN0aWNhbCByZXNlYXJjaC4gVGhlc2UgdGhyZWUgZmllbGRzIGFwcHJvYWNoIHJlc2VhcmNoIGRpZmZlcmVudGx5LiBQc3ljaG9tZXRyaWNpYW5zIGFyZSBsZXNzIGNhdXNhbGx5IG9yaWVudGVkLCBhcyB0aGVpciB0b29sLCBcImZhY3RvciBhbmFseXNpc1wiLS08aT5hbmFseXNlIGZhY3RvcmllbGxlPC9pPi0tcmVkdWNlcyBjb21wbGV4IGRhdGEgdG8gZGltcGxlLCBjYXRlZ29yaWNhbCBmb3JtcyBpbiBvcmRlciB0byByZWNvbmNpbGUgPGk+cXVhbnRpdGF0aXZlIGRhdGE8L2k+IHdpdGggaW50dWl0aXZlIGNhdGVnb3JpZXMuPHN1cD4xLjwvc3VwPiBBbmQgdGhpcyByZXNlYXJjaCBpcyBncmVhdCBmb3IgZXhwYW5kaW5nIGtub3dsZWRnZSBhYm91dCBzb2NpZXR5LiBCdXQgdG8gd2hhdCBlbmQ/IFdobydzIHRvIHNheSwgYWZ0ZXIgYWxsIHNvY2lldHkgaXMgYm90aCB0aGUgc3ViamVjdCA8aT5hbmQ8L2k+IG9iamVjdCBvZiB0aGlzIHJlc2VhcmNoLiBTb2NpYWwgc2NpZW50aXN0cyBhcmUgdXNlZCB0byB0aGVzZSBtZW50YWwgZ3ltbmFzdGljcywgeWV0IGFyZSBib3VuZCBieSBhIGNlcnRhaW4gZXRob3Mgb2YgcmVzZWFyY2g6IDxzdHJvbmc+QW5vbnltaXphdGlvbiwgaS5lLiBlbmNyeXB0aW5nIG9yIHJlbW92aW5nIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uIGZyb20gZGF0YXNldHM8L3N0cm9uZz4uIFRoaXMgaXMgdGhlIFNvY2lhbCBTY2llbnRpc3RzJyA8aT5PYXRoPC9pPi0tYSBsaW5lIG9mIGRlY2VuY3kuIDwvcD5cclxuXHJcbjxwPlRvbW9ycm93LCBUdWVzZGF5IGF0IG5vb24sIHRoZSB3b3JsZCB3aWxsIHR1bmUgaW4gdG8gaGVhciBNYXJrIFp1Y2tlcmJlcmcncyB0ZXN0aW1vbnkgYmVmb3JlIHRoZSBVLlMuIENvbmdyZXNzLCBhbGwgdG8gaGVhciBhYm91dCBGYWNlYm9vayAmYW1wOyBjb21wYW55J3MgbGluZSBvZiBkZWNlbmN5LiBIb3dldmVyIGluZGVjZW50IGFueSByZXZlbGF0aW9ucyBtYXkgYmUsIEknbSBub3QgdGhhdCBlbnRpcmVseSB0aHJlYXRlbmVkIGJ5IHRoZSByZXZlbGF0aW9ucy4gTWF5YmUgSSB3b24ndCBhZG1pdCBJJ20gICBwcm9uZSB0byBTb2NpYWwgTWVkaWEgaW5mbHVlbmNlLCBiZWNhdXNlIEkgY2hhcnQgbXkgY291cnNlLiBIZXJlJ3MgbW9yZSBmcm9tIHRoZSBlc3RlZW1lZCBBYmJvdHQ6IDwvcD4gXHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj7igJxXZSBoYXZlIGVuZGVkIHVwIGJlbGlldmluZyB0aGF0IHNvY2lhbCByZWFsaXR5IGlzIGRldGVybWluZWQgaW4gdGhlIG1haW4gYnkgY2VydGFpbiBnZW5lcmFsIGZvcmNlcywgYW5kIHRoYXQgdGhlc2UgZ2VuZXJhbGl0aWVzIGFyZSB0aGVuIHNwZWNpZmllZCBieSBjb21iaW5hdGlvbnMgb2YgZm9yY2VzLCBhbmQgZnVydGhlciBsaW1pdGVkIGJ5IHZhcmlvdXMgYXNwZWN0cyBvZiDigJxpbmRpdmlkdWFsaXR5LOKAnSB3aGljaCBpbiB0aGlzIHNlbnNlIGlzIGJlc3QgdW5kZXJzdG9vZCBhcyBpZGlvc3luY3JhdGljIGhpZ2hlciBvcmRlciBpbnRlcmFjdGlvbi7igJ08c3VwPjE8L3N1cD4gPC9wPlxyXG5cclxuPHA+QW5kIHNvLCB3aGlsZSBhY2FkZW1pYyByZXNlYXJjaCBmb2N1c2VzIG9uIHRoZSBcImdlbmVyYWwgZm9yY2VzXCIgdG8gYmV0dGVyIHVuZGVyc3RhbmQgaG93IGdyb3VwcyB3b3JrIHRvZ2V0aGVyLCB0aGUgPHN0cm9uZz5iYWQgdGhpbmcgdGhhdCBadWNrZXJiZXJnIGRpZDwvc3Ryb25nPiBpcyBub3QgZm9sbG93aW5nIGluIHRoZSBzYW1lIHNwaXJpdCBvZiBnZW5lcmFsaXR5LjxzdXA+Mjwvc3VwPiBUaGV5IGNob3NlIHRvIGNvbGxlY3QgYW5kIGRpc3NlbWluYXRlIG91ciBcImxpa2VzXCIgYXMgbXVjaCBhcyBvdXIgbG9jYXRpb25zLCBhbmQgLi4uIHdhaXQgZm9yIHRoZSBvbWlub3VzIG11c2ljIC4uLiB0aGUgPGk+PHN0cm9uZz5ub24tRkIgY29ubmVjdGVkIG1vYmlsZSBjb250YWN0cyBvZiB0aGUgRmFjZWJvb2sgY2xpZW50cycgcGVyc29uYWwgY2VsbC1waG9uZXM8L3N0cm9uZz48L2k+LS1mbGlwcGluZyB0aHJvdWdoIHNvbWVvbmUncyBwZXJzb25hbCBkZXNrIGRyYXdlciBpcyBkZWZpbml0ZWx5IHB1c2hpbmcgdGhlIHJ1bGVzIG9mIHByaXZhY3kuIEkgYWRkcmVzc2VkIHRoaXMgaXNzdWUgaW4gbXkgPGEgaHJlZj1cIiMxOC0wMy0yMFwiPk1hcmNoIDIwdGggYmxvZyBwb3N0PC9hPiBvbiBGYWNlYm9vaydzIGV0aGljcyB2ZXJzdXMgdGhlIGxvbmctc3RhbmRpbmcgZGF0YS1oYW5kbGluZyBldGhpY3MgZnJvbSBBY2FkZW1pYS4gUmVnYXJkaW5nIHRvbW9ycm93J3MgcmV2ZWxhdGlvbnMsIGxldCdzIHJlbWVtYmVyIHRvIGdpdmUgdGhlIGd1eSBiZW5lZml0IG9mIHRoZSBkb3VidCwgZXZlbiBpZiB0aGV5IHdlcmUgaGFuZGlseSBzd2luZGxlZCwgd2hpbGUgdGhleSB3ZXJlIHN3aW5kbGluZyB1cy48c3VwPjM8L3N1cD5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJjaXRlXCI+MS4gPGEgaHJlZj1cImh0dHA6Ly9qb3VybmFscy5zYWdlcHViLmNvbS9kb2kvYWJzLzEwLjExNzcvMDA0OTEyNDE5ODAyNzAwMjAwMlwiIHRhcmdldD1cIl9ibGFua1wiPkFiYm90dCwgQS4gMTk5OC4g4oCcIFRoZSBDYXVzYWwgRGV2b2x1dGlvbi7igJ0gU29jaW9sb2dpY2FsIE1ldGhvZHMgJmFtcDsgUmVzZWFyY2guXHJcblxyXG5cclxuXHJcbjwvYT48L3A+XHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4yLiA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAxOC8wNC8wOC91cy9mYWNlYm9vay11c2Vycy1kYXRhLWhhcnZlc3RlZC1jYW1icmlkZ2UtYW5hbHl0aWNhLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5ueXRpbWVzLmNvbS8yMDE4LzA0LzA4L3VzL2ZhY2Vib29rLXVzZXJzLWRhdGEtaGFydmVzdGVkLWNhbWJyaWRnZS1hbmFseXRpY2EuaHRtbFxyXG5cclxuPC9hPjwvcD5cclxuXHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjMuIDxhIGhyZWY9XCJodHRwczovL3d3dy53aXJlZC5jb20vc3RvcnkvZGlkLWNhbWJyaWRnZS1hbmFseXRpY2EtYWNjZXNzLXlvdXItZmFjZWJvb2stZGF0YS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy53aXJlZC5jb20vc3RvcnkvZGlkLWNhbWJyaWRnZS1hbmFseXRpY2EtYWNjZXNzLXlvdXItZmFjZWJvb2stZGF0YS9cclxuXHJcbjwvYT48L3A+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG48L2Rpdj4gXHJcblxyXG5cclxuXHJcbjxkaXYgaWQ9XCIxOC0wNC0wN1wiIGNsYXNzPVwiICAgICAgYXZyIDE4LTAzIC0yNFwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj4gXHJcblxyXG4gIDxidXR0b24+VG9wPC9idXR0b24+IDwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND4gXHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+IFxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD4gXHJcblxyXG48aDYgICAgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5BcHJpbCA3LTgsIDIwMTg8YnIgLz5cclxuXHJcbldlZWtlbmRcclxuXHJcbjwvaDY+IFxyXG5cclxuPGg2ICAgIGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+XHJcblxyXG5PbiB0aGVcdEluZXZpdGFibGUgRGVtaXNlIG9mICAgTmF0aXZlIE1vYmlsZSBBcHBzIGluIGZhdm9yIG9mIFByb2dyZXNzaXZlIFdlYiBBcHBzPGJyIC8+UGFydCBJSUk6IFRoZSBOdXRzICZhbXA7IEJvbHRzIG9mIHRoZSBBcHAgUmVwbGFjZW1lbnQgUHJvY2VzczwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5SZXZvbHV0aW9ucyBjb21lIGFuZCByZXZvbHV0aW9ucyBnbywgYnV0IHRoZSA8aT4ybmQgYXBwIHJldm9sdXRpb248L2k+IGlzIGFscmVhZHkgdW5kZXJ3YXksIGFsYmVpdCBxdWlldGx5LjxzdXA+MTwvc3VwPiBNb3N0IG1lZGlhIHNvdXJjZXMgcmVmZXIgdG8gYSBcIk5hdGl2ZSBBcHAgLSBQcm9ncmVzc2l2ZSBXZWIgQXBwIERlYmF0ZVwiIHdpdGggZW1waGFzaXMgb24gd2hhdCB0aGUgbmF0aXZlIGFwcCBjYW4gYWxyZWFkeSBkby0tPGk+c28gaWYgaXQncyBub3QgYnJva2UsIGRvbid0IGZpeCBpdDwvaT4uIEhvd2V2ZXIsIGltcGxpY2F0aW9ucyBjaGFuZ2UgYXMgdGhlIGNvbnZlcnNhdGlvbiB0dXJucyB0byB0aGUgSHlwZXIgVGV4dCBUcmFuc2ZlciBQcm90b2NvbCAoSFRUUCkgQ2hyb21lIFYtOCBKYXZhU2NyaXB0IEVuZ2luZTxzdXA+Mjwvc3VwPi0teW91IGtub3csIHRoZSB3ZWItYXBwIG9uIDxpPnN0ZXJvaWRzPC9pPiEgPC9wPlxyXG5cclxuPHA+U28gd2hhdCBraW5kIG9mIHN0ZXJvaWRzIHlvdSBhc2s/IExldCB1cyBzYXkgdGhhdCB0aGUgcG93ZXIgb2YgdGhlIG1vZGVybiBicm93c2VyIGxpZXMgaW4gdGhlIG9wZW4tc291cmNlIEphdmFTY3JpcHQgZW5naW5lLCBmaXJzdCBDKysgdmFyaWF0aW9uIDxpPm9yaWdpbmFsbHkgPC9pPmludHJvZHVjZWQgaW4gMjAwOCBieSBHb29nbGUncyBDaHJvbWl1bSBwcm9qZWN0LiBPcGVuLXNvdXJjZTxpPi13aG8/PC9pPiAoY2xvc2UgeW91ciBleWVzIG5leHQgcGFyYWdyYXBoIGZvciB0aGUgamFyZ29uLXdhcnkhKSA8L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+QSBKYXZhU2NyaXB0IGVuZ2luZSBpcyBhIHByb2dyYW0gb3IgYW4gaW50ZXJwcmV0ZXIgd2hpY2ggZXhlY3V0ZXMgSmF2YVNjcmlwdCBjb2RlLiBBIEphdmFTY3JpcHQgZW5naW5lIGNhbiBiZSBpbXBsZW1lbnRlZCBhcyBhIHN0YW5kYXJkIGludGVycHJldGVyLCBvciBqdXN0LWluLXRpbWUgY29tcGlsZXIgdGhhdCBjb21waWxlcyBKYXZhU2NyaXB0IHRvIGJ5dGVjb2RlIGluIHNvbWUgZm9ybS48c3VwPjI8L3N1cD48L3A+XHJcblxyXG48cD5JbiBwbGFpbiBlbmdsaXNoLCB0aGlzIG1lYW5zIHRoYXQgdGhlIGJyb3dzZXIgc3BlYWtzIGRpcmVjdGx5IHRvIG1hY2hpbmUgY29kZSwgYW5kIHRoaXMgaXMgYSBiaWcgZGVhbC4gSGFwcGlseSAncm9pZGVkLCB0aGUgYnJvd3NlciBub3cgYWNjb21vZGF0ZXMgdGFza3MgdGhhdCB0aGUgXCJBcHBcIiB3YXMgaW52ZW50ZWQgZm9yOiA8aT5UbyBkaXJlY3Qgc2VydmljZSB3b3JrPC9pPi0taW1hZ2UgYW5kIGRhdGEgbG9hZGluZywgY2FjaGluZywgc3RvcmFnZSwgb2ZmbGluZSBkYXRhLCBpY29ucywgbm90aWZpY2EgICAgICAgdGlvbnMsIGV0Yy4gPC9wPlxyXG5cclxuPHA+Tm93LCB0aHJvdWdoIGEgXCJNYW5pZmVzdFwiIGZpbGUgcHJvdmlkZWQgdG8gdGhlIGRldmljZSBmcm9tIHRoZSBicm93c2VyLCBhbGwgb2YgdGhvc2Ugc2FtZSB0YXNrcyBhcmUgYWNjb21wbGlzaGVkIHRocm91Z2ggYSBzZXJpZXMgb2YgaGFuZHNoYWtlcywgYW5kIHZvaWwmYWFjdXRlOzogdGhlIG1vYmlsZSBkZXZpY2UgZG9lc24ndCBzZWUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIG5hdGl2ZSBhcHAgYW5kLCB3ZWxsIC4uLiBhIDxpPnByb2dyZXNzaXZlIGFwcCE8L2k+PC9wPlxyXG5cclxuPHA+VGhleSBzYXkgSGlzdG9yeSByZXBlYXRzIGl0c2VsZi4gSW4gb3VyIGRpZ2l0YWwgbGlmZXRpbWUsIHdlIGhhdmUgc2VlbiA8aT5yZWNvcmQgc2FsZXM8L2k+IHN1cnBhc3MgZGlnaXRhbCBkb3dubG9hZHMgYWdhaW4gKGR1ZSB0byBzdHJlYW1pbmcpOyB3ZSBoYXZlIHNlZW4gdGhlIG9yaWdpbmFsbHktZGVjZW50cmFsaXplZCBpbnRlcm5ldCByZXR1cm4sIG9yIGF0IGxlYXN0IGJlZ2luIHRoZSBqb3VybmV5LCBiYWNrIHRvIGRlY2VudHJhbGl6YXRpb24hIEFuZCBub3csIHdlIGhhdmUgdGhlIG9uY2UtbG93bHkgYnJvd3NlciByZXR1cm4gd2l0aCBhIHZlbmdlYW5jZSBhbmQgc3RyZW5ndGggdG8gcmVwbGFjZSBuYXRpdmUgYXBwcywgd2l0aCBlbmNyeXB0ZWQgc2VjdXJpdHksIGluc3RhbnQgbG9hZGluZywgYW5kIDxpPmJldHRlcjwvaT4gb2ZmLWxpbmUgY2FjaGluZyEgRG8geW91IGhhdmUgYW4gYXBwIGZvciB0aGF0PzwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJjaXRlXCI+MS4gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMvZm9yYmVzdGVjaGNvdW5jaWwvMjAxOC8wMy8wOS93aHktcHJvZ3Jlc3NpdmUtd2ViLWFwcHMtd2lsbC1yZXBsYWNlLW5hdGl2ZS1tb2JpbGUtYXBwcy8jM2YzOWI0ZmEyMTEyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuZm9yYmVzLmNvbS9zaXRlcy9mb3JiZXN0ZWNoY291bmNpbC8yMDE4LzAzLzA5L3doeS1wcm9ncmVzc2l2ZS13ZWItYXBwcy13aWxsLXJlcGxhY2UtbmF0aXZlLW1vYmlsZS1hcHBzLyMzZjM5YjRmYTIxMTI8L2E+PC9wPlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4yLiA8YSBocmVmPVwiaHR0cHM6Ly9ibG9nLnNlc3Npb25zdGFjay5jb20vaG93LWphdmFzY3JpcHQtd29ya3MtaW5zaWRlLXRoZS12OC1lbmdpbmUtNS10aXBzLW9uLWhvdy10by13cml0ZS1vcHRpbWl6ZWQtY29kZS1hYzA4OWU2MmIxMmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL2Jsb2cuc2Vzc2lvbnN0YWNrLmNvbS9ob3ctamF2YXNjcmlwdC13b3Jrcy1pbnNpZGUtdGhlLXY4LWVuZ2luZS01LXRpcHMtb24taG93LXRvLXdyaXRlLW9wdGltaXplZC1jb2RlLWFjMDg5ZTYyYjEyZTwvYT48L3A+XHJcblxyXG5cclxuXHJcbjwvZGl2PiBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbjxkaXYgaWQ9XCIxOC0wNC0wNlwiIGNsYXNzPVwiICAgICAgYXZyIDE4LTAzIC0yNFwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG4gXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiAmbmJzcDtcclxuXHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+IFxyXG5cclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PiBcclxuXHJcbjxwIGNsYXNzPVwiICBhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+IFxyXG5cclxuPGg2ICAgIGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+QXByaWwgNiwgMjAxODxiciAvPlxyXG5cclxuICA8L2g2PiBcclxuXHJcbjxoNiAgICBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPlxyXG5cclxuICBPbiB0aGVcdEluZXZpdGFibGUgRGVtaXNlIG9mICAgTmF0aXZlIE1vYmlsZSBBcHBzIGluIGZhdm9yIG9mIFByb2dyZXNzaXZlIFdlYiBBcHBzPGJyIC8+UGFydCBJSTogTmV3IFBvd2VycyBvZiB0aGUgTW9kZXJuICAgQnJvd3NlcjwvaDY+XHJcblxyXG5cclxuXHJcbiAgPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlRvZGF5J3MgV2ViIEJyb3dzZXJzLCAmYWdyYXZlOyBsYSBGaXJlZm94LCBDaHJvbWUsIE9wZXJhLCBldGMuLCBhcmUgPGk+dW5hYmFzaGVkbHkgb24gc3Rlcm9pZHM8L2k+LiBBbmQsIHdlbGwgdGhleSBkZXNlcnZlIHRvIGJlLS10aGV5IHdlcmUgaGVyZSBmaXJzdCEgTW9yZSBpbXBvcnRhbnRseSwgdGhlIGJyb3dzZXIncyBuYXRpdmUgbGFuZ3VhZ2UtLUphdmFTY3JpcHQtLWhhcyBiZWVuIGdyYW50ZWQgZnVsbCBwb3dlciBvZiB0aGUgZW50aXJlIHdlYidzIGJhY2tlbmQsIGkuZS4gc2VydmVycywgZGF0YSwgdG9kb3MuIFRoaXMgbWVhbnMgdGhhdCB0aGUgYnJvd3NlciBhY2hpZXZlcyBpbnN0YW50IGxvYWRpbmcsIDxpPmZ1bGx5IHByb2dyZXNzaXZlLCBkZXZpY2UtcmVzcG9uc2l2ZSw8L2k+IGZ1bGwgPGk+SFRUUFM8L2k+LWVuY3J5cHRpb24gc2VjdXJpdHksIGFuZCBjb2hlcmVudCBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkuIFNvIHRoYXQgeW91ciBmYXZvcml0ZSAgIGFwcHMgbG9vayBhbmQgaW50ZXJhY3QgdGhlIHNhbWUgYmV0d2VlbiB0aGUgYXJyYXkgb2YgYnJvd3NlciBjaG9pY2VzLiBUaGUgV2FzaGluZ3RvbiBQb3N0IGhhcyBiZWVuIGxhdWRlZCBmb3IgaGVscGluZyBwaW9uZWVyIHRoZSB0ZWNobm9sb2d5LiBNb3N0IG5vdGFibHksIHRoZWlyIHByb2dyZXNzaXZlIHdlYiBhcHAgbG9hZHMgaW4gLjkgb2YgYSBzZWNvbmQsIHdoaWxlIHRoZWlyIG5hdGl2ZSBtb2JpbGUgYXBwIHJlcXVpcmVzIDIuOSBzZWNvbmRzLjxzdXA+Mzwvc3VwPiBOb3QgZXhhY3RseSBhIHBob3RvIGZpbmlzaCE8L3A+XHJcblxyXG5cclxuXHJcbiAgPHAgY2xhc3M9XCJjaXRlXCI+MS4gPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlY2hyZXB1YmxpYy5jb20vYXJ0aWNsZS9ob3ctcHJvZ3Jlc3NpdmUtd2ViLWFwcHMtcHJvbWlzZS10by11cGVuZC1uYXRpdmUtbW9iaWxlLWFwcHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cudGVjaHJlcHVibGljLmNvbS9hcnRpY2xlL2hvdy1wcm9ncmVzc2l2ZS13ZWItYXBwcy1wcm9taXNlLXRvLXVwZW5kLW5hdGl2ZS1tb2JpbGUtYXBwcy88L2E+PC9wPlxyXG5cclxuXHJcblxyXG4gIDxwIGNsYXNzPVwiY2l0ZVwiPjIuIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYXN0Y29tcGFueS5jb20vMzA2MzQyMC9ob3ctZ29vZ2xlLWFuZC1vdGhlcnMtYXJlLXBsb3R0aW5nLXRoZS1yZXZlbmdlLW9mLXRoZS13ZWItYXBwXCJ0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5mYXN0Y29tcGFueS5jb20vMzA2MzQyMC9ob3ctZ29vZ2xlLWFuZC1vdGhlcnMtYXJlLXBsb3R0aW5nLXRoZS1yZXZlbmdlLW9mLXRoZS13ZWItYXBwPC9hPjwvcD4gIFxyXG5cclxuXHJcblxyXG4gIDxwIGNsYXNzPVwiY2l0ZVwiPjMuIDxhIGhyZWY9XCJodHRwczovL3d3dy53ZWJieWF3YXJkcy5jb20vd2lubmVycy8yMDE3L21vYmlsZS1zaXRlcy1hcHBzL2ZlYXR1cmVzLWNhdGVnb3JpZXMvdGVjaG5pY2FsLWFjaGlldmVtZW50L3Byb2dyZXNzaXZlLXdlYi1hcHAtYnktdGhlLXdhc2hpbmd0b24tcG9zdC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy53ZWJieWF3YXJkcy5jb20vd2lubmVycy8yMDE3L21vYmlsZS1zaXRlcy1hcHBzL2ZlYXR1cmVzLWNhdGVnb3JpZXMvdGVjaG5pY2FsLWFjaGlldmVtZW50L3Byb2dyZXNzaXZlLXdlYi1hcHAtYnktdGhlLXdhc2hpbmd0b24tcG9zdC88L2E+PC9wPlxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuICA8cCBjbGFzcz1cImNpdGVcIj40LiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2FydG5lci5jb20vc21hcnRlcndpdGhnYXJ0bmVyL3RvcC10cmVuZHMtaW4tdGhlLWdhcnRuZXItaHlwZS1jeWNsZS1mb3ItZW1lcmdpbmctdGVjaG5vbG9naWVzLTIwMTcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuZ2FydG5lci5jb20vc21hcnRlcndpdGhnYXJ0bmVyL3RvcC10cmVuZHMtaW4tdGhlLWdhcnRuZXItaHlwZS1jeWNsZS1mb3ItZW1lcmdpbmctdGVjaG5vbG9naWVzLTIwMTcvPC9hPjwvcD5cclxuXHJcbjwvZGl2PiBcclxuXHJcblxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiMTgtMDQtMDVcIiBjbGFzcz1cIiAgICAgIGF2ciAxOC0wMyAtMjRcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND4gXHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+IFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHJcbjxoNiAgICBjbGFzcz1cIiAgY2hhcHRlcm51bWJlclwiPkFwcmlsIDUsIDIwMTg8YnIgLz5cclxuXHJcbjwvaDY+IFxyXG5cclxuPGg2ICAgIGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+XHJcblxyXG4gIE9uIHRoZVx0SW5ldml0YWJsZSBEZW1pc2Ugb2YgICBOYXRpdmUgTW9iaWxlIEFwcHMgaW4gZmF2b3Igb2YgUHJvZ3Jlc3NpdmUgV2ViIEFwcHM8YnIgLz5QYXJ0IEk6ICAgTW9iaWxlIERldmljZXMgT3V0d2l0IGFuZCBPdXRncm93IHRoZSBcIk9sZC1TY2hvb2xcIiBBcHA8L2g2PlxyXG5cclxuICA8cCAgPjxzbWFsbD5Ob3RlIG9uIGFwcCBkZWZpbml0aW9ucyBpbiB0aGlzIHBvc3Q6IEFueXRoaW5nIGRvd25sb2FkZWQsIHdoZXRoZXIgaU9TIG9yIEFuZHJvaWQgaXMgPGk+bmF0aXZlIG1vYmlsZSBhcHA8L2k+LCB3aGlsZSBwcm9ncmVzc2l2ZSB3ZWIgYXBwcyBhcmUgc3RyaWN0bHkgYmVoaW5kIHRoZSBIVFRQUyBwcm90b2NvbCwgaS5lLiBicm93c2VyLWJhc2VkLjwvc21hbGw+PC9wPlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPk1vYmlsZSBEZXZpY2VzIGFyZSBldmVyIGRlbGlnaHRmdWwsIHlldCBhIHBlc2t5IDIgdG8gMy1zZWNvbmQgZGVsYXkgb2Z0ZW4gYWNjb21wYW5pZXMgb3VyIGV2ZXJ5ZGF5IHRhc2tzIHVzaW5nIGRldmljZS1uYXRpdmUgYXBwcy4gRm9yIHRoZSBpbXBhdGllbnQsIHRoaXMgZGVsYXkgaXMgbm90IHRvbGVyYWJsZSwgYW5kIGV2ZW4gdGhlIHBhdGllbnQgaGF2ZSB0aGVpciB1cmdlbnQgbW9tZW50cyAob3IgaGF2ZSBiZXR0ZXIgdGhpbmdzIHRvIGRvKS4gICAgU28sIHdoZXRoZXIgd2UncmUgVmVyaXpvbiwgVC1Nb2JpbGUsIG9yIHByZS1wYXkgcGhvbmVzIGxpa2UgU3ByaW50J3MgQm9vc3QsIG91ciBleHBlcmllbmNlcyBhcmUgdGhlIHNhbWU6IDMtc2Vjb25kIGRlbGF5cyBhYm91bmQtLW11Y2ggdG8gb3VyIGltcGF0aWVuY2UhICA8L3A+XHJcblxyXG48cCA+SW5zdGFudCBMb2FkaW5nIDwvcD5cclxuXHJcbjxwID5JbiBjb250cmFzdCwgbWFueSBvZiBvdXIgZGFpbHkgd2ViLWJhc2VkIHRhc2tzIGFyZSBpbnN0YW50LCBpLmUuIGEgc2Vjb25kIG9yIGxlc3MuIEkgZmVlbCBpbnN0YW50IGxvYWRpbmcgc2hvdWxkIGJlIDxpPmEgcmlnaHQ8L2k+LCBub3QgYW4gb2NjYXNpb25hbCBjb252ZW5pZW5jZS4gd2hhdCBkb2VzIHRoaXMgcG90ZW50aWFsIG1lYW4/IFRoaXMgbWVhbnMgYW4gYXBwJ3Mgc2VydmljZSB3b3JrZXJzIGNhbiBsb2FkIG5lYXJseSBpbW1lZGlhdGVseSBhbmQgcmVsaWFibHkuIFRoaXMgbWVhbnMgIG5vbi1jaG9wcHkgIGFuaW1hdGlvbnMsIHNtb290aCBzY3JvbGxpbmcsIG5vIG1hdHRlciB0aGUgbmV0d29yayBjb25uZWN0aW9uIHlvdSdyZSB1c2luZywgbm8gbWF0dGVyIHRoZSBkZXZpY2UhICA8L3A+XHJcblxyXG48cCAgPkRldmljZS1OZXV0cmFsIFVzZXIgSW50ZXJmYWNlPC9wPlxyXG5cclxuXHJcblxyXG48cCAgPkFmdGVyIGEgbG9uZy1kYXkncyB3b3JrIHVzaW5nIGRlc2t0b3AgYW5kIG1vYmlsZSBhcHBzLCB3aHkgc2hvdWxkIGFuIGV2ZW5pbmcgdHJhbnNpdGlvbiB0byB0YWJsZXQgb3IgbGFwdG9wIGNoYW5nZSBvdXIgZXhwZXJpZW5jZT8gRnVydGhlciwgdGhlc2UgdmFyaWF0aW9ucyBkaWZmZXIgYmV0d2VlbiBhcHBzLS1vZiB3aGljaCB0aGVyZSBhcmUgYWxvdDogIDIuMiBtaWxsaW9uIGFwcHMgaW4gdGhlIGlUdW5lcyBjb2xsZWN0aW9uIGFuZCAzIG1pbGxpb24gQW5kcm9pZCBhcHBzLCBhcyBvZiAyMDE3PHN1cD4yPC9zdXA+LiBvZiBpT1MgYXBwcyAmYW1wOyAzIG1pbGxpb24uIFx0IE15IEZpdGJpdCBleHBlcmllbmNlIGlzIGlsbHVzdHJhdGl2ZS4gRmlyc3QsIEkgYWRtaXQgSSBoYXZlIGEgdGVycmlibGUgYWRkaWN0aW9uIHRvIHN0YXRpc3RpY3MsIGVzcGVjaWFsbHkgYmlvLXN0YXRpc3RpY3MuIEFuZCwgRml0Yml0IGlzIG15IGVuYWJsZXIuICAgSG93ZXZlciwgbXkgcG9zdC1ydW4gdGFibGV0IEZpdGJpdCBhcHAgZXhwZXJpZW5jZSBpcyBkaWZmZXJlbnQgYW5kIG1vcmUgbGltaXRlZCBmcm9tIHRoZSBIVFRQUy1icm93c2VyIGV4cGVyaWVuY2UuIEFwcCBmZWF0dXJlcywgb3B0aW9ucywgdmlld3MsIGRhdGUtcmFuZ2VzIHZhcnkgYmV0d2VlbiBkZXZpY2VzLiAgPC9wPlxyXG5cclxuXHJcblxyXG48cCAgPlNlY3VyaXR5IDwvcD5cclxuXHJcbjxwICA+SFRUUFMtbGV2ZWwgPGk+YnJvd3NlcjwvaT4gc2VjdXJpdHkgdnMuIGlUdW5lcyAmYW1wOyBQbGF5IFN0b3JlIG5hdGl2ZSBhcHAgc2VjdXJpdHkgaXMgYWtpbiB0byBhIHZhdWx0IGRvb3IgdmVyc3VzIGJ1aWxkaW5nIGRvb3IuIEknbSBzb3JyeSwgYnV0IHRoZXJlJ3MgYSBsb3Qgb2YgZGlmZmVyZW5jZSEgXHJcblxyXG48cCAgY2xhc3M9XCJkYWlseXRlY2hcIj5JbiBQcm9ncmVzcyAgPC9wPlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4xLiA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2lyZWQuY29tLzIwMTAvMDgvZmYtd2VicmlwL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LndpcmVkLmNvbS8yMDEwLzA4L2ZmLXdlYnJpcC88L2E+UmU6IFRoZSBXZWIgaXMgRGVhZC4gTG9uZyBMaXZlIHRoZSBJbnRlcm5ldDwvcD5cclxuXHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjIuIDxhIGhyZWY9XCJodHRwOi8vd3d3LmJ1c2luZXNzb2ZhcHBzLmNvbS9kYXRhL2FwcC1zdGF0aXN0aWNzL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHA6Ly93d3cuYnVzaW5lc3NvZmFwcHMuY29tL2RhdGEvYXBwLXN0YXRpc3RpY3MvPC9hPiA8L3A+XHJcblxyXG5odHRwOi8vd3d3LmJ1c2luZXNzb2ZhcHBzLmNvbS9kYXRhL2FwcC1zdGF0aXN0aWNzL1xyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4yLiA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGVjaHJlcHVibGljLmNvbS9hcnRpY2xlL2hvdy1wcm9ncmVzc2l2ZS13ZWItYXBwcy1wcm9taXNlLXRvLXVwZW5kLW5hdGl2ZS1tb2JpbGUtYXBwcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy50ZWNocmVwdWJsaWMuY29tL2FydGljbGUvaG93LXByb2dyZXNzaXZlLXdlYi1hcHBzLXByb21pc2UtdG8tdXBlbmQtbmF0aXZlLW1vYmlsZS1hcHBzLzwvYT48L3A+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4zLiA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2lyZWQuY29tLzIwMTYvMDQvd2FpdC13ZWItaXNudC1yZWFsbHktZGVhZC1nb29nbGUtbWFkZS1zdXJlL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LndpcmVkLmNvbS8yMDE2LzA0L3dhaXQtd2ViLWlzbnQtcmVhbGx5LWRlYWQtZ29vZ2xlLW1hZGUtc3VyZS88L2E+PC9wPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbjwvZGl2PiBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbjxkaXYgaWQ9XCIxOC0wNC0wMlwiIGNsYXNzPVwiICAgICBhdnIgMTgtMDMgLTI0XCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+TVVTSU5HIEJMT0NLQ0hBSU48L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgICBjbGFzcz1cIiAgY2hhcHRlcm51bWJlclwiPkFwcmlsIDIsIDIwMTg8YnIgLz5cclxuXHJcbjwvaDY+IFxyXG5cclxuPGg2ICAgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5IZXJhY2xpdGUncyBEZWxpZ2h0OiBUZWNobm9sb2d5IENoYW5nZSBpcyB0aGUgQ29uc3RhbnQsIEh1bWFuIEJlaGF2aW9yIGlzIFZhcmlhYmxlOjxiciAvPlRoZSBBcHJpbCAybmQgQW5ub3VuY2VkIEhlZGVyYSBIYXNoZ3JhcGggWCBMYXVuY2ggRXZlbnQgIDwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+TmV4dCBNYXkgOXRoLCB0aGUgZ3JlYXRlc3Qga25vd24gdGhyZWF0IHRvIHRyYWRpdGlvbmFsIGJsb2NrY2hhaW4gdGVjaG5vbG9neSB3aWxsIGJlIGZvcm1hbGx5IGludHJvZHVjZWQsIDxpPmFsb25nIHdpdGggaXRzIHNvdXJjZSBjb2RlPC9pPiwgaW50byBvdXIgdGVjaG5vbG9naWNhbCB3b3JsZC4gSGVkZXJhIEhhc2hncmFwaCByZXByZXNlbnRzIGEgYmxvY2tjaGFpbiBhbHRlcm5hdGl2ZSB0aGF0IGNhdGVycyB0byB0aW1lLXNlbnNpdGl2ZSB0cmFuc2FjdGlvbnMsIGFuZCBvcmRlciBmYWlybmVzcy4gQ3VycmVudGx5LCBvbmUgdHJhbnNhY3Rpb24gd2l0aCBCaXRjb2luIHRha2VzIGFib3V0IDEyIG1pbnV0ZXMgdG8gdmFsaWRhdGUuIEV0aGVyZXVtIGlzIG9ubHkgYSBjb3VwbGUgbWludXRlcywgYnV0IGluIGEgd29ybGQgb2YgbWljcm8tdHJhbnNhY3Rpb25zIGFuZCBtaWNyby1zZWNvbmQgdHJhbnNhY3Rpb25zLCBzcGVlZCBjb3VudHMuPC9wPjxwPk5leHQsIEhlZGVyYSdzIHRlY2hub2xvZ3kgdXNlcyBhIGNvbnNlbnN1cyBhbGdvcml0aG0sIHdoaWNoIGRlcGVuZHMgb24gIG5vZGUgbmVpZ2hib3JzJyBcInZvdGluZ1wiIGVsZWN0aW9ucy4gVGhpcyBtZWFucyB0aGF0IHRoZSBkZXNpZ24gaXMgaW1wZXJ2aW91cyB0byBcImZvcmtpbmdcIi0td2hlbiBhIHBhcnQgb2YgdGhlIGJsb2NrY2hhaW4gc3BsaXRzIGFuZCBubyBsb25nIHN5bmNzIHdpdGggdGhlIG1haW4gYmxvY2tjaGFpbi4gIE1vcmUgaW1wb3J0YW50bHksIEhlZGVyYSdzIGNvbnNlbnN1cyBkZXNpZ24gaXMgICBidWlsdCBvbiBBc3luY2hyb25vdXMgQnl6YW50aW5lIEZhdWx0IFRvbGVyYW5jZSAoYUJGVCksIHNvIGlzIHRoZW4gaW1wZXJ2aW91cyB0byB0aHJlYXRzIG9mIDxpPkRpc3RyaWJ1dGVkIERlbmlhbCBvZiBTZXJ2aWNlIChERFMpIGF0dGFja3MuIDwvaT48L3A+XHJcblxyXG48cD5TbywgbGlnaHRuaW5nIHNwZWVkIGZvciB2YWxpZGF0aW5nIGNyeXB0by10cmFuc2FjdGlvbnMuIEd1YXJhbnRlZWQgc2VjdXJpdHkgZnJvbSBoYXJkLSBvciBzb2Z0LWZvcmtpbmcgb2YgdGhlIGJsb2NrY2hhaW4sIGFuZCBERFMtbGlrZSBhdHRhY2tzLiBGYWlybmVzcyBpbiB0cmFuc2FjdGlvbiBvcmRlci4gQ29tZSBNYXkgOXRoLCB3ZSdsbCBzZWUganVzdCBob3cgSGVkZXJhJ3MgY29kZWJhc2UgYW5kIGNyeXB0b2N1cnJlbmN5IHdpbGwgYWNjb21wbGlzaCB0aGVzZSBiZW5jaG1hcmtzLCBhbmQgaWYgc28sIEhlcmFjbGl0ZWFuIHJpdmVyIHN0b3BzIGluIHRpbWUhIElmIG5vdCwgeWV0IGFub3RoZXIgY3J5cHRvZ3JhcGhpYyBtaXJhZ2UhPC9wPlxyXG5cclxuPHAgY2xhc3M9XCJjaXRlXCI+MS4gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmhlZGVyYWhhc2hncmFwaC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cdGh0dHBzOi8vd3d3LmhlZGVyYWhhc2hncmFwaC5jb208L2E+IDwvcD5cclxuXHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjEuIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vaGFzaGdyYXBoL2VhdC1wcmF5LWhhc2hncmFwaC01NmI5NjEzZWQ0NmZcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL21lZGl1bS5jb20vaGFzaGdyYXBoL2VhdC1wcmF5LWhhc2hncmFwaC01NmI5NjEzZWQ0NmY8L2E+IDwvcD5cclxuXHJcblxyXG5cclxuPC9kaXY+IFxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiMTgtMDMtMzBcIiBjbGFzcz1cIiBoaWRkZW4gICBtYXIgMTgtMDMgLTI0XCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+V0VCIERFViBBRkZBSVJTPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMzAgMjAxODxiciAvPlxyXG5cclxuV2Vla2VuZCA8L2g2PiBcclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPiBXaHkgIEkgV291bGQgQm95Y290dCBCaXRjb2luOlxyXG5cclxuPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5JbiBteSBGZWJydWFyeSA8YSBocmVmPVwiIzE4LTAyLTIwXCI+MjB0aCBibG9nIHBvc3Q8L2E+LCBJIGRlY2lkZWQgdGhlIGltcG9ydGFuY2Ugb2YgXCJnb2luZyBvbiBzdHJpa2UgQUdBSU5TVCBUT1hJQyBiaXRjb2luIFRFQ0hcIiAtLSBub3cgSSBkb24ndCB3YW50IHlvdSB0byBnZXQgdGhlIHdyb25nIGlkZWEgLi4uIG15IGJveWNvdHQgaXMgb25seSBhaW1lZCBhdCBiaXRjb2luIGN1cnJlbmN5LiBOb3QgRXRoZXJldW0sIG5vciBhbnkgb3RoZXIgY3J5cHRvLWN1cnJlbmNpZXMuIEJpdGNvaW4gaXMgcnVpbmluZywgYW5kIGRlc3Ryb3lpbmcgYnkgPGk+c3VidHJhY3RpbmcgdGltZTwvaT4gdGhlIEVhcnRoIHRocm91Z2ggYWJub3JtYWxseSBoaWdoIGVuZXJneSB1c2FnZS4gRXRoZXJldW0sIGFzIGEgcmVzcG9uc2libGUgdGVjY2hub2xvZ3loYXMgcmVkZXNpZ25lZCB0aGVpciBhbGdvcml0aG0gZnJvbSBhIFwiUHJvb2Ygb2YgV29ya1wiIHRvIGEgbXVjaCBtb3JlIGVudmlyb25tZW50YWxseSBmcmllbmRseSBcIlByb29mIG9mIFN0YWtlXCIuIEh1cnJheSEhPC9wPlxyXG5cclxuPHA+ICBCaXRjb2luLCBpbiBhbG1vc3QgZXZlcnkgcmVzcGVjdCwgaXMgYW4gQWxrYWxpbmUgQmF0dGVyeSB1cG9uIHRoZSBUb25ndWU6IERvIG5vdCBzd2FsbG93IGl0LCByYXRoZXIgc3BpdCBpdCBvdXQuIFxyXG5cclxuQml0Y29pbidzIDUwLVRlcmEtV2F0dCBDYXJib24gRm9vdHByaW50IChlcXVhbCB0byBTaW5nYXBvcmUgb3IgUG9ydHVnYWwpIFxyXG5cclxuc2hvcnRlbnMgRWFydGgncyBMaWZlLVNwYW4sIGJ5IHZpcnR1ZSBvZiBoZWxwaW5nIGFjY2VsZXJhdGUgY29hbCB1c2UuIDwvcD4gXHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBpZD1cIjE4LTAzLTI3XCIgY2xhc3M9XCIgICAgIG1hciAxOC0wMyAtMjdcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcblxyXG5cclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcblxyXG5cclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5Tb2Npb2xvZ3kgVG9tb3Jyb3chPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMjcsIDIwMTg8YnIgLz5cclxuXHJcbiAgICA8L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+XHJcblxyXG5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PiBcclxuXHJcblxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiMTgtMDMtMjRcIiBjbGFzcz1cIiBoaWRkZW4gICBtYXIgMTgtMDMgLTI0XCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+U29jaW9sb2d5IFRvbW9ycm93ITwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiICBhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cIiAgY2hhcHRlcm51bWJlclwiPk1hcmNoIDI0LTI1LCAyMDE4PGJyIC8+XHJcblxyXG5XZWVrZW5kIDwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPjE5NjggTWVldHMgMjAxOFxyXG5cclxuPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5XYXNoaW5ndG9uIEQuQy4gIFxyXG5cclxuTm90IE5vcm1hbGx5IGRvZXMgV29uZGVyV29tYW4gU2hvdyBoZXIgRmFjZSwgYnV0IEVtbWEgR29uemFsZXonIGltcGFzc2lvbmVkIHNwZWVjaCByb3VzZWQgdXAgZmVydm9yLlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cD4gIDwvcD5cclxuXHJcbjwvZGl2PiBcclxuXHJcblxyXG5cclxuPGRpdiBpZD1cIjE4LTAzLTIzXCIgY2xhc3M9XCIgICAgbWFyIDE4LTAzIC0yM1wiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMjMsIDIwMTggPC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+PGk+SXQncyBub3QgYWJvdXQgdGhlIEJsb2NrY2hhaW4sIHRoZSBFZmZpY2llbnQgTmV0d29yayBEYXRhIERpc3RyaWJ1dGlvbiBpcyB0aGUgQW5zd2VyITwvaT5cclxuXHJcbjwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+TGFzdCB3ZWVrIGFuZCB0aGlzIHdlZWssIHRoZSBvdXQtb2YtY29udHJvbCBoYW5kZ3VuIHByb2JsZW0gaXMgaW4gdGhlIG5ld3MuIFRoaXMgbGVhZHMgb25lIHRvIGJlbGlldmUgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhlIDxpPmRlZmluaXRpb248L2k+IG9mIGEgZ3VuLiBBcyBhbHdheXMuIERlZmluaXRpb25zIHN0YXJ0IHdhcnMgYW5kIHdvcmxkIHdhcnMtLWFmdGVyIGFsbCBvZiBsYXN0IGNlbnR1cnksIGRpZCBhbnlvbmUgZGVjaWRlIHdobyBjb250cm9scyB0aGUgQ29hbCBvZiBTdWRldGVubGFuZD8/IFlvdSBjYW4gYmV0IGV2ZXJ5b25lIHRoZXJlIHNwZWFrcyB0d28gbGFuZ3VhZ2VzLCBzdGlsbC4gVGhlIDxpPmRlZmluaXRpb25hbCA8L2k+IGFuc3dlciBtYWtlcyB0aGUgYW5zd2VyOiBUaGlzIGlzIHdoeSBCbG9ja2NoYWluIHRlY2hub2xvZ3ktLXN0cmFkZGxlZCBiZXR3ZWVuIG15cmlhZCBzdGFydC11cHMsIGNvdW50bGVzcyBpbnN0aXR1dGlvbnMgYW5kIGEgaHVuZHJlZCBicmlsbGlhbnQgbWluZHMgaXMgVGhlIGFuc3dlciB0byBvdXIgc2NhbGFiaWxpdHkgcHJvYmxlbXMuICAgXHJcblxyXG5cclxuXHJcbjwvcD48cD5UaGUgcHJvYmxlbSBpcyB0aGF0IGRhdGEgc3RydWN0dXJlcyBncm93IGF0IGRpZmZlcmVudGlhbCByYXRlcywgc29tZSBleHBvbmVudGlhbCwgc29tZSBsaW5lYXIsIHNvbWUgc2xvd2VyLCBzb21lIGFzIGEgZnVuY3Rpb24gb2YgdGltZSBvciBvdGhlciB2YXJpYWJsZS4gIFlldCwgb3VyIGRhdGEgYW5hbHlzaXMgbmVlZHMgYXJlIGNsZWFyOiBXZSBuZWVkIGEgbmV3IHRlY2hub2xvZ3kgdG8gaGFuZGxlIHF1aWNrbHksIHNlY3VyZWx5IGFuZCBlZmZpY2llbnRseSB0aGUgPGk+TmV0d29ya2VkLCBSZWxhdGlvbmFsIERhdGEgUHJvYmxlbTwvaT4sIHdoaWNoIHNjYWxlcyBleHBvbmVudGlhbGx5IHdpdGggdHJhZGl0aW9uYWwgZGF0YSBzdHJ1Y3R1cmVzLCBsaWtlIG9sZC1mYXNoaW9uZWQgRXhjZWwtbGlrZSBSb3ctJmFtcDstQ29sdW1uIGRhdGEgc3RydWN0dXJlcy4gWWV0LCBhcyBvbmUgd291bGQgbG9nYXJpdGhtaXplIHRoZSBlcXVhdGlvbiB0byBiZXN0IGFkYXB0IG5ldyBkYXRhLCBzbyBtdXN0IHRoZSBjb21wdXRlciBkYXRhIHN0cnVjdHVyZSBhZGp1c3QgYWNjb3JkaW5nbHkuIDwvcD5cclxuXHJcbjxwPlRvbyByaWdpZCwgdGhlIHdvcmxkIHR1cm5lZCB0byByZWxhdGlvbmFsLCBub24tU3RydWN0dXJlZCBRdWVyeSBMYW5ndWFnZSAoU1FMKSBkYXRhLCBwYXJ0aWFsbHkgZm9yIHRoZSBuZWVkIHRvIGRpc2xhdGUgPGk+ZGF0YSBvYmplY3RzPC9pPiBmcm9tIHRoZWlyIHRhYmxlcy4gVGhlIHdvcmxkIG5lZWRlZCB0aGF0IGNlbGwgYXMgYSBmcmVlLXJhZGljYWwgaW4gb3JkZXIgdG8gbWltaWMgdGhlIGRhdGEgc3RydWN0dXJlIG9mIHNvY2lldGFsbHktbmV0d29ya2VkIHNvY2lldHkuICBBbGFzLCBhIHNjaWVuY2UgYWxyZWFkeSBhdCBoYXJkIHdvcmsgd2l0aCBDYW1icmlkZ2UgQW5hbHl0aWNhLS1hZ2FpbiB3aGF0J3MgdGhhdCBmaWVsZCBvZiBzdHVkeSBjYWxsZWQgYWdhaW4sIFNvY2lvbG9neSwgcmlnaHQ/IDwvcD5cclxuXHJcbjxwPlxyXG5cclxuXHJcblxyXG48L3A+PC9kaXY+IFxyXG5cclxuPGRpdiBpZD1cIjE4LTAzLTIyXCIgY2xhc3M9XCIgICBTIG1hciAxOC0wMyAtMjJcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcblxyXG5cclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnMgPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMjIsIDIwMTggPC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+QS5JLiBQYXJ0IElJOiBQcm9ibGVtcyB3aXRoIFNjYWxlLCBLaW5kbHkgUmVzb2x2ZWQgYnkgQS5JLlxyXG5cclxuPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5JIG1pc3Rha2VubHkgbGFpZCB3YXN0ZSB0byBBLkkuJ3MgcmVwdXRhdGlvbiBpbiBteSBsYXN0IHBvc3QuIEl0IDxpPmRpZDwvaT4gbGV0IHVzLCBvdXIgd2hvbGUgc29jaWV0eSwgbGV0IHVzIGRvd24sIGFuZCBtYXliZSB0aGUgZm9yZW5zaWNzIHdpbGwgZ2l2ZSB1cyA8aT5hIGZldyBleGN1c2VzPC9pPiBkb3duIG9uIHRoZSByb2FkLiBIb3dldmVyLCBcImhvbWljaWRlIGJ5IEEuSS4gKGFrYSBVYmVyKVwiIHdpbGwgbmVlZCB0byBiZSB1cGRhdGVkIGluIHJlY29yZHMuIEJ1dCwgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgaXMgbm90IGF0IGZhdWx0LiBUaGVyZSBhcmUgYSBmZXcgc29mdHdhcmUgZW5naW5lZXJzIHRoYXQgZGlkIHRoZSBiZXN0IHRoZXkgY291bGQtLXdpdGggdGhlIHRpbWUgdGhlaXIgc3VwZXJpb3JzIGdhdmUgdGhlbS4gIFViZXIgbGVhZGVyc2hpcCwgbGV0J3MgaG9wZSwgd2lsbCBiZSBkZXRlcnJlZCBmcm9tIGZ1dHVyZSBjYXJlbGVzc25lcyB0byBjb21lLiAgIDwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhhdCBkaWF0cmliZSBzYWlkLCBJIGRvIGFwcHJlY2lhdGUgYW4gVWJlcidzIHByb3hpbWl0eSB3aGVuIEknbSBzdHJhbmRlZCBhdCAyOjAwIGFtIGluIGEgYmFkIHBhcnQgb2YgdG93bi4gV2h5PyBCZWNhdXNlIEkgZG9uJ3QgbmVlZCB0byBwbGFuIGFoZWFkIC0tIFViZXIgaXMgdGhlcmUhIEFuZCwgc2FkbHksIEkgZG9uJ3QgbmVlZCB0byByZWFkIG9yIHN0dWR5IC0tIEdvb2dsZSBpcyB0aGVyZSEgQnV0IHdhaXQsIGRvbid0IGp1ZGdlIG1lLCBJJ20gbm90IGxhenkhIFRoYXQgYmVpbmcgc2FpZCwgSSBoYXZlIG15IG93biBzb3VsLXNlYXJjaGluZyB0byBkbzogVEVDSE5PTE9HWSBBSURTIEFORCBBQkVUUyBNRSBBTkQgTVkgQUNUSU9OUywgYnV0IGl0IGRvZXMgbm90IHJ1biBteSBzaG93PiBPbmx5IEkgdGFrZSByZXNwb25zaWJpbGl0eSBmb3IgbXkgb3duIGFjdGlvbnM6IEkgYWxsb3cgdGVjaG5vbG9neSBpbnRvIG15IGxpZmUgYXMgYSB0b29sLCBhbmQgeWV0IEkgICBob2xkIHRoZSBwb3dlciBjb3JkLiBJIHRha2UgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSB0ZWNoIHRoYXQgZm9sbG93cyBtZS0tYW5kIGJlbGlldmUgbWUsIEkgbmVlZCB0aGF0IHRlY2guIEFuZCBzbyBkbyB5b3UuIE5vdCBvbmx5IHNvLCBidXQgdGhlIHdvcmxkLCBhbmQgdGhlIGVjb2xvZ2ljYWwgZmF0ZSBvZiBvdXIgPGkgc3R5bGU9XCJjb2xvcjpncmVlblwiPmdyZWVuIGVhcnRoPC9pPj4gYWxzbyBkZXBlbmRzIG9uIHRlY2gsIEEuSS4gc3BlY2lmaWNhbGx5LiA8L3A+XHJcblxyXG48cD5cclxuXHJcbkh1bWFua2luZCBoYXMgYWxyZWFkeSBkdWcgYW4gZWNvbG9naWNhbCAoZGFyZSBJIHNheSAnYWxrYWxpbmUnKSBwaXQgZGVlcGVyIHRoYW4gY2FuIGJlIGR1ZyBvdXQgb2Y6IEZsb29kaW5nLCBmb3Jlc3QgZmlyZXMsIGFuZCBTcGVjaWVzIEV4dGluY3Rpb25zLiBBLkkuIGlzIDxpIHN0eWxlPVwiY29sb3I6YnJvd25cIj4gaXMgPC9pPj4gdGhlIG9ubHkgdmlhYmxlIGhvcGUgc28gd2UsIGkuZS4gVWJlciwgc2hvdWxkbid0IHByZW1hdHVyZWx5IHNwb2lsIGl0cyBkZXZlbG9wbWVudC4gXHJcblxyXG48L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+U2V2ZXJhbCBxdWVzdGlvbnMgcmFpc2UgdGhlaXIgdWdseSBoZWFkIHdoZW4gQS5JLiBjYW4ndCBoZWxwIEVhcnRoIG9yIGh1bWFua2luZC4gTGlrZSBpdCBvciBub3QsIEEuSS4gd2lsbCBuZWVkIHRvIDMtRCBwcmludCB0aGUgZHlrZXMgZm9yIHRoZSBzdW5rZW4gY29hc3RhbCBjaXRpZXMtLWxpa2UgdGlueSBpc2xhbmQgRGVuIEhhYWd1ZSwgdGhlIG1vc3QgYmVhdXRpZnVsIGNpdHkgaW4gdGhlIHdvcmxkLiBOZXh0LCBBLkkuIHdpbGwgbWFrZSBpcnJlbGV2YW50IGZvc3NpbCBmdWVscyBieSAyMDMwLCBpZiBub3QgYmVmb3JlOyBhbmQgdGhvc2UgY2F1Z2h0IHBvbGx1dGluZyB3b3VsZCBiZSBmaW5lZCB0byBkZWF0aCwgYW55d2F5LiBXaXRob3V0IEEuSS4sIG5vbmUgb2YgdGhlc2Ugd29ydGh3aGlsZSBnb2FscyBhcmUgcG9zc2libGUuIFRoaXMgcHJlY2FyaW91cywgZGlmZmljdWx0IGFuZCBtb3N0IG9mIGFsbCBsYWJvcmlvdXMgam9iIG9mIGRlc2lnbmluZyBvdXIgb3duIHNvbHV0aW9ucyB3aWxsIHRha2UgdGltZTogRm9yIHRoaXMgcmVhc29uLCBVYmVyIHNob3VsZCBiZSBzaGFtZWQgZXZlbiBmdXJ0aGVyIGZvciB0aGVpciBzaG9ydC1jdXRzLCBhbmQgZXZlbnR1YWwgZXJyb3JzIG9mIGludGVybmFsLCBvcmdhbml6YXRpb25hbCBwcm9ibGVtcy4gPGk+VWJlcidzIGV4cGVyaWVtZW50YWwsIHRheC1mcmVlIFwiVGVzdGluZyBTYW5kYm94XCIgY2Fubm90IGJlIHRoZSBlcnN0d2hpbGUgc2FmZSBuZWlnaGJvcmhvb2RzIG9mIFN1cmJ1cmJhbiBQaG9lbml4LCB3aXRob3V0IHByb3BlciBjYXV0aW9uLjwvaT4gPC9wPlx0XHRcclxuXHJcbjxwPkFyZSBVYmVyJ3MgY29ycG9yYXRlIGRlc2lyZXMsIG1hcmtldCBzdHJvbmdob2xkLCBhbmQgc2hhcmVob2xkZXJzJyBkZWxpZ2h0IG1vcmUgd29ydGh3aGlsZSB0aGFuIDxpPmFuIGVudGlyZSBzZW5zaXRpdmUgZmllbGQgb2YgbWFjaGluZS1sZWFybmluZyByZXNlYXJjaD88L2k+IE5vLiBVYmVyIG11c3QgYmUgd2FybmVkIHRvIG5vdCBzdGVhbCBjb3Jwb3JhdGUgc2VjcmV0cyBmcm9tIFdheW1vLCB0aGVuIHByb2NlZWQgdG8gYmUgODYnZCBmcm9tIENhbGlmb3JuaWEsIHRoZW4gYnJ1c2ggYXNpZGUgd2l0aCBleGN1c2VzIHRoZSA8aT5raWxsaW5nIG9mIGFuIGlubm9jZW50IEFyaXpvbmEgYmljeWNsaXN0PC9pPi48L3A+XHJcblxyXG48cD5cclxuXHJcbldobyBjYW4gY291bnQgdGhlIG51bWJlciBvZiB2ZXJ5IGZlaXN0eSB0YXhpLW1lbiBhbmQgLXdvbWVuIHRoYXQgYXJlIG5vdCBmYW5zIG9mIHRoZSBpbmZhbW91c2x5IGhhc3R5IGN1bHR1cmUgb2YgVWJlci4gVGhlIHRlYW0gb2YgbGF3eWVycyBuZWVkZWQgdG8gYmUgODYnZCBmcm9tIEZyYW5jZT8gVWJlciBhbHJlYWR5IGtub3dzLCBiZWNhdXNlIG1heWJlIHRoZXkga25vdyBCLkQuTyEgXHJcblxyXG48L3A+XHJcblxyXG48cD48L3A+XHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4zLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS90ZWNobm9sb2d5LzIwMTcvYXByLzA3L3ViZXItd2F5bW8tbGF3c3VpdC1saWRhclwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS90ZWNobm9sb2d5LzIwMTcvYXByLzA3L3ViZXItd2F5bW8tbGF3c3VpdC1saWRhcjwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PiBcclxuXHJcbjxkaXYgaWQ9XCIxOC0wMy0yMVwiIGNsYXNzPVwiICAgIG1hciAxOC0wMyAtMjEgIFwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlycyA8L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5NYXJjaCAyMSwgMjAxOCA8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5IZXkgVWJlciBEcml2ZXIsIFBsZWFzZSBTbG93IERvd24hXHJcblxyXG48L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkEuSS4gZ2VuZXJhbGx5LCBhbmQgc3BlY2lmaWNhbGx5IFViZXIncyBTZWxmLURyaXZpbmcgVGVjaCwgYm90aCBoYXZlIGZhaWxlZCBzb2NpZXR5IHRoaXMgd2Vlay4gQWx0aG91Z2ggd2UgY291bGQgYWxsIGRlYmF0ZSB0aGUgbWVyaXRzIG9mIFwiTGlkYXJcIiwgaS5lLiBsYXNlci1iYXNlZCB2aXNpb24sIHRoZSBwcmltYXJ5IGNvbmNlcm4sIGluIG15IHZpZXcsIGlzIFViZXIncyBvYnZpb3VzIGNhcmVsZXNzbmVzcyBpbiBydXNoaW5nIHRoZWlyIHNlbGYtZHJpdmluZyB0ZWNoLiAgQWx0aG91Z2ggc2l4IHRob3VzYW5kICg2LDAwMCB0b28gbWFueSkgcGVkZXN0cmlhbnMgYXJlIGtpbGxlZCBpbiB0aGUgVS5TLiBhbm51YWxseSwgSSdkIG9ubHkgaG9wZSBBSSB3b3VsZG4ndCBhZGQgdG8gdGhlIHByb2JsZW0uPHN1cD4yPC9zdXA+IFRoZSBBcml6b25hIHZpY3RpbSB3YXMgd2Fsa2luZyBoZXIgYmljeWNsZSB3aGVuIHN0cnVjaywgYW5kIEkgYXMgYmlrZS1jb21tdXRlciBjYW4ndCBoZWxwIGJ1dCB0YWtlIHRoZSBhZmZhaXIgcGVyc29uYWxseS4gPC9wPlxyXG5cclxuPHA+VGhpcyBmaXJzdCBodW1hbiBkZWF0aCBpcyBhdCBsZWFzdCBhIDxzdHJvbmc+YmlnIFdha2UtVXAgbW9tZW50PC9zdHJvbmc+IGZvciB0aGUgaW5kdXN0cnkgaW4gaXRzIGhhc3RlIHRvIHJvbGwgb3V0IEEuSS4gdGVjaC4gIEFmdGVyIGFsbCwgVWJlcidzIHF1ZXN0aW9uYWJsZSBsZWFkZXJzaGlwIG1vcmFsczxzdXA+Mjwvc3VwPiBhbmQgYmVpbmcga2lja2VkIG91dCBvZiBTYW4gRnJhbmNpc2NvIGZvciBydW5uaW5nIG1vcmUgdGhhbiBzaXggcmVkLWxpZ2h0cyByYWlzZXMgZXllYnJvd3MgdG8gYmVnaW4gd2l0aC48c3VwPjM8L3N1cD4gTXkgcHJvYmxlbSB3aXRoIFViZXIgaXMgdGhhdCB0aGUgY2FyJ3MgYWxnb3JpdGhtLCB3aXRoIHBlcmZlY3QgTGlkYXIgdmlzaW9uLCBkaWQgbm90IGZsaW5jaCBvciBzbG93IGRvd24gZm9yIHR3byBzZWNvbmRzIGFzIGl0IGtpbGxlZCB0aGUgdmljdGltLiBIdW1hbnMgZmxpbmNoIGFuZCBodW1hbnMgc3dlcnZlLCBiZWNhdXNlIHByb3RlY3RpbmcgZmVsbG93IGh1bWFucyBpcyBpbiBvdXIgRE5BLCBub3QgaW4gQS5JLidzLiBTbywgd2hpbGUgd2Ugbm93IGtub3cgVWJlcidzIHNvZnR3YXJlIGhhc24ndCBjYXVnaHQgdXAgd2l0aCBpdHMgQS5JLi1MaWRhciBoYXJkd2FyZS0tbGV0J3MgaG9wZSB3ZSBzZWUgZGVmZW5zaXZlIGRyaXZpbmcgYW5kIHNvbWUgPGk+VExDPC9pPiBwcm9ncmFtbWVkIGludG8gdGhvc2UgQS5JLiBBbGdvcml0aG1zIVxyXG5cclxuPC9wPlxyXG5cclxuPHAgY2xhc3M9XCJjaXRlXCI+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vdGVjaG5vbG9neS8yMDE4L21hci8yMi92aWRlby1yZWxlYXNlZC1vZi11YmVyLXNlbGYtZHJpdmluZy1jcmFzaC10aGF0LWtpbGxlZC13b21hbi1pbi1hcml6b25hXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cudGhlZ3VhcmRpYW4uY29tL3RlY2hub2xvZ3kvMjAxOC9tYXIvMjIvdmlkZW8tcmVsZWFzZWQtb2YtdWJlci1zZWxmLWRyaXZpbmctY3Jhc2gtdGhhdC1raWxsZWQtd29tYW4taW4tYXJpem9uYTwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJjaXRlXCI+Mi5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vdGVjaG5vbG9neS8yMDE3L2Fwci8wNy91YmVyLXdheW1vLWxhd3N1aXQtbGlkYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vdGVjaG5vbG9neS8yMDE3L2Fwci8wNy91YmVyLXdheW1vLWxhd3N1aXQtbGlkYXI8L2E+XHJcblxyXG48L3A+XHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4zLlxyXG5cclxuPGEgaHJlZj1cImh0dHA6Ly9mb3J0dW5lLmNvbS8yMDE3LzAyLzI2L3ViZXItc2VsZi1kcml2aW5nLWNhci1yZWQtbGlnaHRzL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHA6Ly9mb3J0dW5lLmNvbS8yMDE3LzAyLzI2L3ViZXItc2VsZi1kcml2aW5nLWNhci1yZWQtbGlnaHRzLzwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGlkPVwiMTgtMDMtMjBcIiBjbGFzcz1cIiAgbWFyIDE4LTAzIC0yMFwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlycyA8L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5NYXJjaCAyMCwgMjAxOCA8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5UaGUgRmFjZWJvb2sgRmlhc2NvOiBXaHkgWnVja2VyYmVyZyBTaG91bGQgbm90IGhhdmUgRHJvcHBlZCBvdXQgb2YgSGFydmFyZFxyXG5cclxuPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5cclxuXHJcblVuaXZlcnNpdGllcywgcHJpdmF0ZSBvciBwdWJsaWMgaW5zdGl0dXRpb25zLCBzZXJ2ZSBhcyBhIGJlYWNvbiBmb3JcclxuXHJcbjxzdHJvbmc+dGhlIEZlYXJsZXNzIFByb3RlY3Rpb24gYW5kIEV0aGljYWwgUmVndWxhdGlvbjwvc3Ryb25nPiBvZiBpbmZvcm1hdGlvbiBhbmQgZGF0YS4gVGhpcyBpcyBiZWNhdXNlIGRhdGEgYW5kIGRhdGEgcmVzZWFyY2hcclxuXHJcbmlzIGlubmF0ZSB0byB0aGUgdW5pdmVyc2l0eSdzIE1pc3Npb24gU3RhdGVtZW50LCB3aGVyZWFzIGJ1c2luZXNzIGFuZCBnb3Zlcm5tZW50YWwgaW5zdGl0dXRpb25zIGFyZSByZWxhdGl2ZWx5IG5ld1xyXG5cclxudG8gdGhlIGdhbWUsIGFuZCBvZnRlbiBhdCBvZGRzIHdpdGggdGhlXHJcblxyXG48aT5BY2FkZW15PC9pPiwgYW5kIG9jY2FzaW9uYWxseSBhZ2FpbnN0IGVhY2ggb3RoZXIuIDwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5UaHJlYXRzIHRvIHN0dWRlbnQgZGF0YSBwcml2YWN5IGV4aXN0ZWQgbG9uZyBiZWZvcmUgdGhlIGludGVybmV0LiBUaGUgRkJJIHVuZGVyIEouIEVkZ2FyIEhvb3ZlciBpbmZpbHRyYXRlZCBCZXJrZWxleVxyXG5cclxuc3R1ZGVudCBncm91cHMgdG8gY291bnRlciBjb21tdW5pc20gaW4gdGhlIDE5NjBzLiBBcm91bmQgdGhlIHNhbWUgdGltZSwgdGhlIENJQSBtYW5pcHVsYXRlZCB0aGUgTmF0aW9uYWwgU3R1ZGVudFxyXG5cclxuQXNzb2NpYXRpb24gZm9yIGludGVsbGlnZW5jZSBnYXRoZXJpbmcgaW4gb3RoZXIgYW50aS1jb21tdW5pc20gZWZmb3J0cy4gQnV0IHRoZSBwcml2YWN5IGlzc3VlIGlzIG1vcmUgYWN1dGUgbm93XHJcblxyXG50aGF0IHRoZSBhbW91bnQgb2Ygc3R1ZGVudCBkYXRhIGluIGNsb3VkLWJhc2VkIHN5c3RlbXMgaGFzIGdyb3duIGV4cG9uZW50aWFsbHkgYW5kIGlzIG1vcmUgd2lkZWx5IGRpc3BlcnNlZC5cclxuXHJcbjxzdXA+Mjwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+IFRoZSBVbml2ZXJzaXR5J3MgZXhwZXJ0aXNlIG92ZXIgZXRoaWNhbGx5IHJlZ3VsYXRlZCBkYXRhIGNvbGxlY3Rpb24gYW5kIG1hbmFnZW1lbnQsIGlzIGJldHRlciB0aGFuIGdvdmVybm1lbnQsIGJ1c2luZXNzLFxyXG5cclxuYW5kIGV2ZW4gbWVkaWNhbCBkb21haW5zIGZvciB0d28gcmVhc29ucy4gRmlyc3QsIHRoZSBpbnN0aXR1dGlvbidzIGxvbmcgaGlzdG9yeSBhbmQgZXRoaWNhbCBtb3RpdmVzIHdpdGggZGF0YSBhcmVcclxuXHJcbnVuaXF1ZS4gVGhlIG5vcm1zIG9mIGRhdGEtaGFuZGxpbmcgaGF2ZSBiZWVuIGNvZGlmaWVkIHRocm91Z2ggdGhlIFVuaXZlcnNpdHkncyBJbnN0aXR1dGlvbmFsIFJldmlldyBCb2FyZCBiYXNlZFxyXG5cclxub24gaXRzXHJcblxyXG48c3Ryb25nPnN0YXRlZCBtaXNzaW9uPC9zdHJvbmc+LiBJbiBvdGhlciB3b3JkcywgVW5pdmVyc2l0aWVzIHRha2UgZGF0YSBzZXJpb3VzbHlcclxuXHJcbjxpPmZvciByZWFzb25zIG90aGVyIHRoYW4gY29ycG9yYXRlIHByb2ZpdCBvciBnb3Zlcm5tZW50YWwgY29udHJvbDwvaT4uIEFuIGV4YW1wbGUgb2YgcGVyc29uYWwgZGF0YSBwcmVjYXV0aW9ucyBoYXNcclxuXHJcbnBsYXllZCBvdXQgd2l0aCBIYXJ2YXJkJ3MgcmVjZW50IGRhdGEgdGlmZnMgbGVhZGluZyB0byB0aGUgU3VwcmVtZSBDb3VydCwgaWxsdXN0cmF0ZWQgYnkgYSAyMDE2IGFydGljbGU6IDwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5MYXN0IHdlZWsgdW5kZXJncmFkdWF0ZXMgYXQgSGFydmFyZCBVbml2ZXJzaXR5IHJhaXNlZCBjb25jZXJucyBhYm91dCB0aGUgaW5zdGl0dXRpb24gaGFuZGluZyBvdmVyIHRoZWlyIGRhdGEgdG8gYW5cclxuXHJcbmFudGktYWZmaXJtYXRpdmUgYWN0aW9uIGdyb3VwIGFzIHBhcnQgb2YgYSBsYXdzdWl0LiBTdHVkZW50cyBmb3IgRmFpciBBZG1pc3Npb25zLCB3aGljaCBpcyBzdWluZyB0aGUgdW5pdmVyc2l0eVxyXG5cclxuZm9yIGFsbGVnZWRseSBkaXNjcmltaW5hdGluZyBhZ2FpbnN0IEFzaWFuIEFtZXJpY2FuIGFwcGxpY2FudHMsIHdpbGwgaGF2ZSBhY2Nlc3MgdG8g4oCcYWNhZGVtaWMsIGV4dHJhY3VycmljdWxhcixcclxuXHJcbmRlbW9ncmFwaGljIGFuZCBvdGhlciBpbmZvcm1hdGlvbuKAnSBmcm9tIGFsbCB1bmRlcmdyYWRzIHdobyBhcHBsaWVkIHRvIEhhcnZhcmQgYmV0d2VlbiB0aGUgZmFsbCAyMDA5IGFuZCBzcHJpbmcgMjAxNSxcclxuXHJcbm9taXR0aW5nIG5hbWVzIGFuZCBTb2NpYWwgU2VjdXJpdHkgbnVtYmVycy5cclxuXHJcbjxzdXA+Mjwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+VGhlIHNlY29uZCByZWFzb24gd2h5IFVuaXZlcnNpdGllcyB1bmRlcnN0YW5kIGV0aGljYWwgaW1wbGljYXRpb25zIGZvciBkYXRhIGlzIHRoYXQgZGF0YSBhbmQgbW9yZSBicm9hZGx5IGRhdGEgYW5kXHJcblxyXG5odW1hbiBpbmZvcm1hdGlvblxyXG5cclxuPGk+cmVzZWFyY2g8L2k+IGlzIHRoZSBpbnN0aXR1dGlvbnMnIHNlY29uZCBoaWdoZXN0IHByaW9yaXR5LCBhbG9uZyB3aXRoIHRlYWNoaW5nIGFuZCBzZXJ2aWNlLiBGb3IgZXhhbXBsZSwgaW4gcmVzcG9uc2VcclxuXHJcbnRvIHRoZSB1bmV0aGljYWwgUHVibGljIEhlYWx0aCByZXNlYXJjaCBpblxyXG5cclxuPGk+VHVza2VnZWUgU3lwaGlsaXMgZXhwZXJpZW1lbnRzPC9pPiwgdGhlIFVuaXZlcnNpdHkgaW5zdHV0aW9uXHJcblxyXG48aT5zdGVwcGVkIGluPC9pPiB0byBoZWxwIGRlc2lnbiB0aGUgMTk3OFxyXG5cclxuPHN0cm9uZz5CZWxtb250IFByaW5jaXBsZXM8L3N0cm9uZz4uIEN1cnJlbnRseSwgdGhlIFVuaXZlcnNpdHkgSW5zdGl0dXRpb25hbCBSZXZpZXcgQm9hcmQgaW5jb3Jwb3JhdGVzIHRoaXMgd2l0aCB0aGUgTnVyZW1idXJnXHJcblxyXG5Db2RlIChkZXZlbG9wZWQgYWZ0ZXIgV1dJSSBOQVpJIHJlc2VhcmNoKSwgaW4gaGFuZGxpbmcgZGF0YSByZXNlYXJjaC5cclxuXHJcbjwvcD5cclxuXHJcbjxwPkluIHJlY2VudCBkYXlzLFxyXG5cclxuPGk+cHJpdmF0ZSBjb21wYW5pZXM8L2k+IGNsYWltIGV4cGVydGlzZSBmb3IgcmVndWxhdGluZyBcIkZha2UgTmV3c1wiLCBhbmQgeW91IGd1ZXNzZWQgaXQsXHJcblxyXG48c3Ryb25nPnJlZ3VsYXRpb24gb2YgZGF0YSBwcml2YWN5ICZhbXA7IGNvbmZpZGVudGlhbGl0eS48L3N0cm9uZz48c3VwPjM8L3N1cD4gVGhlIGV0aGljYWwgYXV0aG9yaXR5IG92ZXIgZGF0YSBwcml2YWN5IG5vcm1zIGFyZSBub3doZXJlXHJcblxyXG5lbHNlIHRoYW4gdGhlIFVuaXZlcnNpdHkgY2FtcHVzLCBjYXNlIGluIHBvaW50IEhhcnZhcmQuLi4gTGV0IHRoZSBnb3Zlcm5tZW50cyBnb3Zlcm4gYW5kIHRoZSBlbnRlcnByaXNlcyBlbnRlcnByaXNlLFxyXG5cclxuYW5kIGxlYXZlIHRoZVxyXG5cclxuPGk+dGhvdWdodGZ1bCwgZXRoaWNhbCByZWd1bGF0aW9uIG9mIGRhdGEgY29sbGVjdGlvbiBhbmQgcHJlY2F1dGlvbiA8L2k+IHRvIHRoZSBJdm9yeSBUb3dlci4gQ29ycG9yYXRlIGFuZCBHb3Zlcm5tZW50XHJcblxyXG5zZWxmLXJlZ3VsYXRpb24gaXMgb3BhcXVlIGVub3VnaCE8L3A+XHJcblxyXG5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJjaXRlXCI+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vdGVjaG5vbG9neS8yMDE4L21hci8yMS9tYXJrLXp1Y2tlcmJlcmctcmVzcG9uc2UtZmFjZWJvb2stY2FtYnJpZGdlLWFuYWx5dGljYVwiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vdGVjaG5vbG9neS8yMDE4L21hci8yMS9tYXJrLXp1Y2tlcmJlcmctcmVzcG9uc2UtZmFjZWJvb2stY2FtYnJpZGdlLWFuYWx5dGljYTwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjIuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuZWRzdXJnZS5jb20vbmV3cy8yMDE2LTEwLTI2LXB1cnN1aW5nLWFjYWRlbWljLWZyZWVkb20tYW5kLWRhdGEtcHJpdmFjeS1pcy1hLWJhbGFuY2luZy1hY3RcIlxyXG5cclxudGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuZWRzdXJnZS5jb20vbmV3cy8yMDE2LTEwLTI2LXB1cnN1aW5nLWFjYWRlbWljLWZyZWVkb20tYW5kLWRhdGEtcHJpdmFjeS1pcy1hLWJhbGFuY2luZy1hY3Q8L2E+XHJcblxyXG48L3A+XHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4zLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDE4LTAzLTIxL3BhdWwtZm9yZC1mYWNlYm9vay1pcy13aHktd2UtbmVlZC1hLWRpZ2l0YWwtcHJvdGVjdGlvbi1hZ2VuY3lcIlxyXG5cclxudGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuYmxvb21iZXJnLmNvbS9uZXdzL2FydGljbGVzLzIwMTgtMDMtMjEvcGF1bC1mb3JkLWZhY2Vib29rLWlzLXdoeS13ZS1uZWVkLWEtZGlnaXRhbC1wcm90ZWN0aW9uLWFnZW5jeTwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgaWQ9XCIxOC0wMy0xOVwiIGNsYXNzPVwiICBtYXIgMTgtMDMgLTE5XCI+XHJcblxyXG5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcblxyXG5cclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5Tb2Npb2xvZ3kgVG9tb3Jyb3chPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMTksIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5BIE5ldyBQb2xpdGljcyBvZiBQb3dlcjpcclxuXHJcbjxiciAvPiBUaGUgQ3J5cHRvZ3JhcGhpYyBGaW5hbmNpYWwgRXNjYXBlIEhhdGNoXHJcblxyXG48L2g2PlxyXG5cclxuPHA+SSBoYWQgb3JpZ2luYWxseSBpbnRlbmRlZCBmb3IgYSBwb3N0IG9uIHRoZSB2ZXJ5IGxhbWVudGFibGVcclxuXHJcbjxpPkJsb2NrYnVzdGVyLWl6YXRpb248L2k+IGFuZCBldmVudHVhbCBkZW1pc2Ugb2YgVG95cy1cIlJcIi1VcywgYnV0IFRlY2ggQWZmYWlycyBoYXBwZW4gdG9vIHF1aWNrbHkhIEluc3RlYWQgLi4uPC9wPlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlRvZGF5LCBVUyBpbnNlcnRlZCBpdHNlbGYgaW50byBhIGxhcmdlLCBkZWVwIGRlYmF0ZSBhYm91dCBjcnlwdG8tbGVnaXRpbWFjeSBieSBpbXBvc2luZyBuZXcgc2FuY3Rpb25zIG9uIFZlbmV6dWVsYS5cclxuXHJcbkluIGNhc2UgeW91IGhhZG4ndCBoZWFyZCwgaGVyZSdzIGEgcXVpY2sgcmVjYXA6PC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlRoZSBhZG1pbmlzdHJhdGlvbuKAmXMgYW5ub3VuY2VtZW50IGNhbWUgYSBmZXcgaG91cnMgYWZ0ZXIgTXIuIFRydW1wIHNpZ25lZCBhbiBleGVjdXRpdmUgb3JkZXIgYmFycmluZyB0aGUgdXNlIG9mIGFueVxyXG5cclxuZGlnaXRhbCBjdXJyZW5jeSBpc3N1ZWQgYnkgdGhlIE1hZHVybyBnb3Zlcm5tZW50IHNpbmNlIEphbi4gOS4gTXIuIE1hZHVybyBhbm5vdW5jZWQgbGFzdCBtb250aCB0aGF0IGhpcyBjb3VudHJ5XHJcblxyXG5oYWQgYmVndW4gYSBwcmVzYWxlIG9mIHRoZSBQZXRybywgYmFja2VkIGJ5IHRoZSBuYXRpb27igJlzIHZhc3QgcGV0cm9sZXVtIHJlc2VydmVzLlxyXG5cclxuPGJyIC8+XHJcblxyXG48YnIgLz5UaGUgVmVuZXp1ZWxhbiBnb3Zlcm5tZW50IGNhbGxlZCB0aGUgbGF1bmNoIGEgcmVzcG9uc2UgdG8gYSBmaW5hbmNpYWwgY3Jpc2lzIHRoYXQgaGFzIHByb21wdGVkIGEgcHJvZm91bmQgZGV2YWx1YXRpb25cclxuXHJcbm9mIHRoZSBuYXRpb25hbCBjdXJyZW5jeSwgdGhlIGJvbMOtdmFyLCBhbmQgcXVhZHJ1cGxlLWRpZ2l0IGluZmxhdGlvbi5cclxuXHJcbjxzdXA+MTwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+XHJcblxyXG5UaGlzIHR1cm4gb2YgZXZlbnRzLCBib3RoIE1hZHVybyBldCBhbC4ncyBmaW5hbmNpYWwgY2xldmVybmVzcyBhbmQgVHJ1bXAncyBhY3Rpb24gdG8gZGUtbGVnaXRpbWF0ZSB0aGUgUGV0cm8gY3J5cHRvLWN1cnJlbmN5LFxyXG5cclxuYXJlIGV4YW1wbGVzIG9mIHRoZSB1bmRlZmluZWQsIG5lYXItbGltaXRsZXNzIHBvbGl0aWNhbCB1c2VzIGZvciBCbG9ja2NoYWluIFRlY2gsIGJvdGggb2ZmZW5zaXZlbHkgYW5kIGRlZmVuc2l2ZWx5LlxyXG5cclxuSW4gZmFjdCwgdGhlIGVuc3VpbmcgZXZlbnRzIG1heSBiZSBvZiBncmVhdCBpbnRlcmVzdCBhcyB3ZSB3aWxsIHdpdG5lc3MgYSBtYWpvciBmaXJzdCBhY3R1YWwgdXNlLWNhc2Ugb2YgdGhlIGRlY2VudHJhbGl6aW5nXHJcblxyXG5haW1zIG9mIGNyeXB0by10ZWNobm9sb2d5IHRvb2wuIEEgdG9vbCB0aGF0IHNvZnRlbnMgdGhlIGZpbmFuY2lhbCBsZXZlcmFnZSB3aWVsZGVkIGJ5IGNlbnRyYWxpemVkIGF1dGhvcml0aWVzLCB3aGV0aGVyXHJcblxyXG5nb3Zlcm5lbW50YWwgb3IgcHJpdmF0ZS5cclxuXHJcbjwvcD5cclxuXHJcbjxwPkkgdXNlZCB0aGUgdGVybSBcImRlLWxlZ2l0aW1hdGVcIiBhYm92ZSBiZWNhdXNlIHRoZXJlIGFyZSB0d28gcHJvY2Vzc2VzIGF0IHdvcms6IEZpcnN0LCBjcnlwdG8tY3VycmVuY2llcyBhcmVcclxuXHJcbjxpPmluIHRoZW1zZWx2ZXM8L2k+IG5vdCBsZWdpdGltYXRlLiBBXHJcblxyXG48c3Ryb25nPmNyeXB0by1jdXJyZW5jeSBwbGF0Zm9ybSBnYWlucyBsZWdpdGltYWN5IHRocm91Z2ggYSBzZXJpZXMgb2YgYm90aCB0ZWNobmljYWwgYW5kIGZpbmFuY2lhbCB0cnVzdC1idWlsZGluZyBzdGFnZXM8L3N0cm9uZz4uXHJcblxyXG5TbyBsZWdpdGltYWN5IGlzIGVhcm5lZCBmaXJzdCBwcml2YXRlbHksIGFuZCBzb21lIGN1cnJlbmN5IHBsYXRmb3JtcyBjb250aW51ZSBwdWJsaWNseSB0byBJbml0aWFsIENvaW4gT2ZmZXJpbmcsXHJcblxyXG5hbmQgc28gb24tLXB1cmVseSBmaW5hbmNpYWwgYW5kIHRlY2huaWNhbCBsZWdpdGltYWN5LlxyXG5cclxuPC9wPlxyXG5cclxuPHA+QW5kIHRoZW4sIHRoZXJlIGlzIHRoZSBhbm90aGVyIGtpbmQgb2YgbGVnaXRpbWFjeSwgd2hpY2ggaW52b2x2ZXMgcG9saXRpY2FsIGxldmVyYWdlIC4uLiA8L3A+XHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4xLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTgvMDMvMTkvd29ybGQvYW1lcmljYXMvdHJ1bXAtdmVuZXp1ZWxhLXNhbmN0aW9ucy1wZXRyby5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAxOC8wMy8xOS93b3JsZC9hbWVyaWNhcy90cnVtcC12ZW5lenVlbGEtc2FuY3Rpb25zLXBldHJvLmh0bWw8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiMTgtMDMtMTdcIiBjbGFzcz1cIiAgbWFyIDE4LTAzIC0xN1wiPlxyXG5cclxuXHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+TXVzaW5nIEJsb2NrY2hhaW48L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5NYXJjaCAxNy0xOCAyMDE4XHJcblxyXG48YnIgLz4gV2Vla2VuZFxyXG5cclxuPC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+IEVuZXJneSBBbHRlcm5hdGl2ZXMgU2lnbmFsIHRoZSBQb3dlciBTaGlmdCB0byBDb21lLCBQYXJ0IElJOiBBIFJpcHBsZSBhbmQgYW4gSW90YSBvZiBTdXN0YWluYWJsZSBDcnlwdG8tQ3VycmVuY3lcclxuXHJcbjwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+SW90YSBhbmQgUmlwcGxlIGNyeXB0b2N1cnJlbmNpZXMgdXNlIGRpZmZlcmVudCB0ZWNobm9sb2d5IHRoYW4gdHJhZGl0aW9uYWwgYmxvY2tjaGFpbiBpbiBvcmRlciB0byBhY2hpZXZlIHRoZWlyIGRpc3RyaWJ1dGVkXHJcblxyXG5sZWRnZXJzLiBUcmFkaXRpb25hbGx5LCBvdXRzaWRlIFwibWluZXJzXCIgdmFsaWRhdGUgdGhlIGJsb2NrJ3NcclxuXHJcbjxpPiB0cmFuc2FjdGlvbiByZWNvcmRzPC9pPiBhcyBpdCByZXBsaWNhdGVzIHRvIHRoZSBuZXh0IFwiYmxvY2suXCIgRm9yIGV4YW1wbGUsIGEgdHJhbnNhY3Rpb24gaXMgdmFsaWRhdGVkIDIgb3IgdGhyZWVcclxuXHJcbnRpbWVzLCBhbmQgc2luY2UgdGhyZWUgbWluZXJzJyB2YWxpZGF0aW9ucyBhbGwgYWdyZWUsIG9uZSBpcyBrZXB0IGFuZCB0d28gYXJlIGRlc3Ryb3llZCwgaW4gYSBudXRzaGVsbDsgb25lIGV4YW1wbGVcclxuXHJcbm9mIGNvbXB1dGF0aW9ucyAoXHJcblxyXG48c3Ryb25nPmFuZCBoZW5jZSBjb2FsPC9zdHJvbmc+KSB0aGF0IGNvc3QgdG9vIG11Y2ggdGltZSBhbmQgZW5lcmd5LjwvcD5cclxuXHJcbjxwPlVubGlrZSB0aGlzIGFycmFuZ2VtZW50LCBJb3RhLCBSaXBwbGUsIGFuZCBIZWRlcmEgdXNlIGEgZGlyZWN0ZWQtYWN5Y2xpYy1ncmFwaCAoREFHKSBkYXRhIHN0cnVjdHVyZSAoc2hhcGVkIGxpa2VcclxuXHJcbmEgc2lkZXdheXMgZ2VuZWFsb2d5IHRyZWUpIHRoYXQgcmVsaWVzIG9uIFwiY29uc2Vuc3VzXCIgZnJvbSBpdHMgbmVhcmVzdCBuZWlnaGJvciB0cmFuc2FjdGlvbiBub2Rlcy5cclxuXHJcbjxzdXA+MTwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+RW5vdWdoIHdpdGggdGhlIGphcmdvbiEgVGhlIGJvdHRvbSBsaW5lIGlzIHRoYXQgQml0Y29pbidzIHRlY2ggaXMgbm90IGVjby1zdXN0YWluYWJsZSxcclxuXHJcbjxzdXA+Mjwvc3VwPiBhbmQgc28gYWx0ZXJuYXRpdmVzIGFyZSBhbHJlYWR5IGNsb3NpbmcgaW4gb24gQml0Y29pbi4gSW90YSwgdGhlIDh0aCBsYXJnZXN0IGNyeXB0b2N1cnJlbmN5IElvdGEgZGVsaXZlcnNcclxuXHJcbm9wZW4tc291cmNlIHRyYW5zcGFyZW5jeSwgbGlnaHRuaW5nIHNwZWVkLCBhbmQgeWV0IGlzIGl0IGNyeXB0b2dyYXBoaWNhbGx5IHNvdW5kPyBOb3QgYWNjb3JkaW5nIHRvIHNvbWUgdGVjaCBwdW5kaXRzOlxyXG5cclxuPC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPllvdSBtaWdodCB0aGluayB0aGF0IElPVEEsIGEgY3J5cHRvY3VycmVuY3kgd29ydGggb3ZlciBhIGJpbGxpb24gZG9sbGFycywgYW5kIHdvcmtpbmcgd2l0aCBvcmdhbml6YXRpb25zIGxpa2UgTWljcm9zb2Z0LFxyXG5cclxuVW5pdmVyc2l0eSBDb2xsZWdlIExvbmRvbiwgSW5ub2d5LCBhbmQgQm9zY2gsIEJOWSBNZWxsb24sIENpc2NvLCBhbmQgRm94Y29ubiAodGhyb3VnaCB0aGUgVHJ1c3RlZCBJT1QgQWxsaWFuY2UpXHJcblxyXG53b3VsZCBub3QgaGF2ZSBmYWlybHkgb2J2aW91cyB2dWxuZXJhYmlsaXRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5LCB0aGF04oCZcyBub3QgdGhlIGNhc2UuIFdoZW4gd2UgdG9vayBhIGxvb2sgYXQgdGhlaXJcclxuXHJcbnN5c3RlbSwgd2UgZm91bmQgYSBzZXJpb3VzIHZ1bG5lcmFiaWxpdHkgYW5kIHRleHRib29rIGluc2VjdXJlIGNvZGUuXHJcblxyXG48YnIgLz5cclxuXHJcbjxiciAvPiDigJxJbiAyMDE3LCBsZWF2aW5nIHlvdXIgY3J5cHRvIGFsZ29yaXRobSB2dWxuZXJhYmxlIHRvIGRpZmZlcmVudGlhbCBjcnlwdGFuYWx5c2lzIGlzIGEgcm9va2llIG1pc3Rha2UuIEl0IHNheXMgdGhhdFxyXG5cclxubm8gb25lIG9mIGFueSBjYWxpYnJlIGFuYWx5emVkIHRoZWlyIHN5c3RlbSwgYW5kIHRoYXQgdGhlIG9kZHMgdGhhdCB0aGVpciBmaXggbWFrZXMgdGhlIHN5c3RlbSBzZWN1cmUgaXMgbG93LOKAnSBzdGF0ZXNcclxuXHJcbkJydWNlIFNjaG5laWVyLCByZW5vd25lZCBzZWN1cml0eSB0ZWNobm9sb2dpc3QsIGFib3V0IElPVEEgd2hlbiB3ZSBzaGFyZWQgb3VyIGF0dGFjay5cclxuXHJcbjxzdXA+Mzwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+QW5kIHNvLCB3aXRoIGEgMS45IGJpbGxpb24gbWFya2V0IGNhcCwgSSBzb21ldGltZXMgaGF2ZSB0byByZWZsZWN0IG9uIHRoZSBpbW1lbnNpdHkgYW5kIG5vbi1yZWxhdGlvbmFsIGZhY3QgYW5kIGZpZ3VyZXNcclxuXHJcbm9mIG91ciB0ZWNobm9sb2dpY2FsIHdvcmxkISBTZWN1cml0eSBhbmQgb3RoZXIgYnVncyBhcmUgaGFyZCB0byBhdm9pZCB3aGVuIGFuIGluZHVzdHJ5IGlzIG1vdmluZyB0b28gZmFzdCBmb3IgdGhvcm91Z2hseVxyXG5cclxudGVzdGVkIGJldGFzOyBhbmQgZWFjaCBpdGVyYXRpb24gaW52b2x2ZXMgYSBzZXJpZXMgb2YgYnVnLXBhdGNoZXMsIHdpdGggc2hvcnQtIGFuZCBsb25nLXRlcm0gcHJpb3JpdGllcyBzdHJldGNoZWRcclxuXHJcbndpdGggbmV3IGRlc2lnbiAmYW1wOyBmdW5jdGlvbiB0cmFkZS1vZmZzLjwvcD5cclxuXHJcbjxwPlxyXG5cclxuRnVsbCBsaWZlLWN5Y2xlIHNvZnR3YXJlIGRldmVsb3BtZW50LCBmcm9tIG5hcGtpbi1pZGVhIHRvIHJvbGxpbmcgc3BlY3MsIGFsd2F5cyBmb2xsb3dzIHRoZXNlIHBhdHRlcm5zIHlldCBub3QgYWx3YXlzIHdpdGhcclxuXHJcbnNvIG11Y2ggbW9uZXkgb24gdGhlIGxpbmUhIEhlcmUncyBhIGNsb3NlciBsb29rIGF0IG9uZSBjcml0aXF1ZSBvZiBJb3RhOjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5cclxuXHJcbklPVEEgZGV2ZWxvcGVycyBoYWQgd3JpdHRlbiB0aGVpciBvd24gaGFzaCBmdW5jdGlvbiwgaXQgd2FzIGEgaHVnZSByZWQgZmxhZyAuLi4gSSB0aGluayBpdOKAmXMgaW1wb3J0YW50IHRvIHJlaXRlcmF0ZSB0aGF0XHJcblxyXG50aGUgSU9UQSBkZXZlbG9wZXJzIGRvIG5vdCBhZ3JlZSB3aXRoIG91ciBjaGFyYWN0ZXJpemF0aW9uIG9mIHRoaXMgYXMgYW4gaXNzdWUgb2YgY29uY2Vybi4gT3VyIHJlcG9ydCBsYXlzIG91dCBtb3JlXHJcblxyXG5kZXRhaWxzIGFib3V0IHdoeSB3ZSBhcmUgY29uY2VybmVkLlxyXG5cclxuPGJyIC8+XHJcblxyXG48YnIgLz4gVGhlcmUgYXJlIG90aGVyIHJlZCBmbGFnc+KAiuKAlOKAinVubGlrZSBldmVyeSBvdGhlciBwcm9ncmFtIHJ1bm5pbmcgb24geW91ciBsYXB0b3Agb3IgcGhvbmUsIElPVEEgdXNlcyB0ZXJuYXJ5IGluc3RlYWRcclxuXHJcbm9mIGJpbmFyeS4gU2luY2UgYWxsIGNvbXB1dGVyIGhhcmR3YXJlIHRvZGF5IHVzZXMgYmluYXJ5LCBJT1RBIGNvbnZlcnRzIHRvIHRlcm5hcnkgaW4gc29mdHdhcmUsIHdoaWNoIGlzIGxlc3MgZWZmaWNpZW50XHJcblxyXG5hbmQgbW9yZSBjb21wbGV4LiBUaGlzIGNvbXBsZXhpdHkgcHJldmVudHMgSU9UQSBmcm9tIGJlbmVmaXRpbmcgZnJvbSBleGlzdGluZyBzZWN1cml0eSBhbmFseXNpcyB0b29scyB0aGF0IGFyZSBkZXNpZ25lZFxyXG5cclxudG8gd29yayB3aXRoIGJpbmFyeSwgYW5kIG1ha2VzIHRoZSBjb2RlIGhhcmRlciB0byByZWFkIGFuZCB1bmRlcnN0YW5kLlxyXG5cclxuPGJyIC8+XHJcblxyXG48YnIgLz4gVGhlIGN1cnJlbnQgSU9UQSB0YW5nbGUgcmVxdWlyZXMgYSB0cnVzdGVkIHBhcnR5ICh0aGUgY29vcmRpbmF0b3IpIGZvciBzZWN1cml0eSwgc3VnZ2VzdGluZyB0aGF0IGluIGl0cyBjdXJyZW50XHJcblxyXG5mb3JtIGl04oCZcyBub3QgcmVhZHkgdG8gcnVuIGFzIGEgdHJ1bHkgcGVybWlzc2lvbmxlc3MsIGRlY2VudHJhbGl6ZWQgc3lzdGVtLlxyXG5cclxuPHN1cD4zPC9zdXA+XHJcblxyXG48L3A+PHA+XHJcblxyXG5PcHRpbWl6aW5nLCBub3Qgc2FjcmlmaWNpbmcsIHNob3VsZCBiZSB0aGUgbmFtZSBvZiB0aGUgZ2FtZSBhcyBUZWNoIGNsb3NlcyBpbiBvbiBCbG9ja2NoYWluIGNoYWxsZW5nZXMgb2Ygc2VjdXJpdHksIHNjYWxhYmlsaXR5LFxyXG5cclxuYW5kIHRoYXQgZXZlcnMtc28tY29zdGx5XHJcblxyXG48c3Ryb25nPlN1c3RhaW5hYmlsaXR5ITwvc3Ryb25nPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5ibG9vbWJlcmcuY29tL25ld3MvYXJ0aWNsZXMvMjAxOC0wMi0xNC9uZXh0LWdlbmVyYXRpb24tY3J5cHRvLWxlZGdlcnMtdGFrZS10aGUtYmxvY2stb3V0LW9mLWJsb2NrY2hhaW5cIlxyXG5cclxudGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuYmxvb21iZXJnLmNvbS9uZXdzL2FydGljbGVzLzIwMTgtMDItMTQvbmV4dC1nZW5lcmF0aW9uLWNyeXB0by1sZWRnZXJzLXRha2UtdGhlLWJsb2NrLW91dC1vZi1ibG9ja2NoYWluPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+Mi5cclxuXHJcbjxhIGhyZWY9XCJcclxuXHJcbmh0dHBzOi8vZGlnaWNvbm9taXN0Lm5ldC9iaXRjb2luLWVsZWN0cmljaXR5LWNvbnN1bXB0aW9uLXN1cnBhc3Nlcy1zaW5nYXBvcmUtcG9ydHVnYWxcclxuXHJcblwiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwczovL2RpZ2ljb25vbWlzdC5uZXQvYml0Y29pbi1lbGVjdHJpY2l0eS1jb25zdW1wdGlvbi1zdXJwYXNzZXMtc2luZ2Fwb3JlLXBvcnR1Z2FsIDwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjxwPjMuXHJcblxyXG48YSBocmVmPVwiXHJcblxyXG5odHRwczovL21lZGl1bS5jb20vQG5laGEvY3J5cHRvZ3JhcGhpYy12dWxuZXJhYmlsaXRpZXMtaW4taW90YS05YTZhOWRkYzQzNjdcclxuXHJcblwiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwczovL21lZGl1bS5jb20vQG5laGEvY3J5cHRvZ3JhcGhpYy12dWxuZXJhYmlsaXRpZXMtaW4taW90YS05YTZhOWRkYzQzNjc8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcblxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgaWQ9XCIxOC0wMy0xNlwiIGNsYXNzPVwiICBtYXIgMTgtMDMgLTE3XCI+XHJcblxyXG5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcblxyXG5cclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5NdXNpbmcgQmxvY2tjaGFpbjwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiICBhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cIiAgY2hhcHRlcm51bWJlclwiPk1hcmNoIDE2LCAyMDE4PC9oNj5cclxuXHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPiBFbmVyZ3kgQWx0ZXJuYXRpdmVzIFNpZ25hbCB0aGUgUG93ZXIgU2hpZnQgdG8gQ29tZVxyXG5cclxuPC9oNj5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlN1c3RhaW5hYmlsaXR5IGZvciB0aGUgZW52aXJvbm1lbnQgbWVhbnMgYW4gYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbiB0byByZW5ld2FibGVzLiBXaGlsZSBvdGhlciBuYXRpb25zIGhhdmUgdW5kZXJ0YWtlblxyXG5cclxuYmlnIHN0ZXBzIHRvd2FyZCB3aW5kIGFuZCBzb2xhciAtIGV2ZW4gQ2hpbmEncyBwb2xsdXRpb24gZGVjbGluZWQgaW4gMjAxNCBmb3IgdGhlIGZpcnN0IHRpbWVcclxuXHJcbjxzdXA+MTwvc3VwPi4gRVUgaXMgbm93IDMwJSByZW5ld2FibGUtLWZyb20gMTIlIGluIDIwMDAgdG8gZXhwZWN0ZWQgNTAlIHJlbmV3YWJsZSBlbmVyZ3kgYnkgMjAzMFxyXG5cclxuPHN1cD4yPC9zdXA+LiBVcywgaXQgYXBwZWFycywgbm90IHNvIG11Y2guLi5vdWNoLjwvcD5cclxuXHJcbjxwPldoYXQgY2FuIHdlIGRvIHRoZW4sIGluIG91ciBsaXZlcywgdG8gbWFrZSBvdXIgb3duIGNvbnRyaWJ1dGlvbi4gV2VsbCwgYmVzaWRlcyBsZXNzIGZvc3NpbCBmdWVscyBhbmQgcmVkIG1lYXQsIHdlXHJcblxyXG5jYW4gY2hvb3NlIG91ciBjcnlwdG9jdXJyZW5jaWVzIG1vcmUgY29uc2NpZW50aW91c2x5LiBPbmUgTlkgdG93bidzIHJlY2VudCBhY3Rpb25zIGVjaG8gbXkgb3duIGNvbmNlcm5zIGFib3V0IHRoZVxyXG5cclxuZW5vcm1vdXMgY2FyYm9uIGZvb3RwcmludCBvZiBcIlByb29mLW9mLVdvcmtcIiBibG9ja2NoYWluIG1pbmluZy5cclxuXHJcbjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5cclxuXHJcblRoZSBjaXR5IG9mIFBsYXR0c2J1cmdoIGhhcyBwdXQgYSBtb3JhdG9yaXVtIG9uIGNyeXB0b2N1cnJlbmN5IG1pbmluZyB0byBwcmVzZXJ2ZSBuYXR1cmFsIHJlc291cmNlcywgdGhlIGhlYWx0aCBvZiBpdHMgcmVzaWRlbnRzXHJcblxyXG5hbmQgdGhlIGNpdHnigJlzIOKAnGNoYXJhY3RlciBhbmQgZGlyZWN0aW9uLOKAnSBvZmZpY2lhbHMgc2FpZCBhZnRlciBhIHB1YmxpYyBoZWFyaW5nIFRodXJzZGF5LiBGb3IgMTggbW9udGhzLCB0aGUgMjAsMDAwLXJlc2lkZW50XHJcblxyXG5jaXR5IHdpbGwgbm90IGNvbnNpZGVyIG5ldyBhcHBsaWNhdGlvbnMgZm9yIGNvbW1lcmNpYWwgY3J5cHRvY3VycmVuY3kgbWluaW5nLiBWaW9sYXRvcnMgd2lsbCBmYWNlIGZpbmVzIG9mIHVwIHRvXHJcblxyXG4kMSwwMDAgZm9yIGVhY2ggZGF5IHRoZXkgZGVmeSB0aGUgbW9yYXRvcml1bS5cclxuXHJcbjxzdXA+Mzwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+U28sIG1lIHRvbyAtIGNvdW50IG1lIG91dCwgSSBjYW4ndCBoZWxwIGJ1dCBkbyB0aGUgc2FtZSwgYW5kIHByb25vdW5jZSBteSBvd24gcmVmcmFpbiBmcm9tIEJpdGNvaW4gKHRoaXMgaXMgbW9yZVxyXG5cclxuc3Bpcml0dWFsIHNpbmNlIEkgZG9uJ3Qgb3duLCBub3IgbWluZSkuIEluIGNvbnRyYXN0LCBJJ2xsIHB1dCBFdGhlcmV1bSBvbiBob2xkIHNpbmNlIHRoZXkgYXJlIHRyYW5zaXRpb25pbmcgdG8gYVxyXG5cclxuemVybyBjYXJib24tZm9vdHByaW50IGJ5IHllYXIncyBlbmQuIDwvcD5cclxuXHJcbjxwPkFuZCwgZm9yIHRoZSBtb3N0IGVudmlyb25tZW50YWxseSBmcmllbmRseSBjcnlwdG9jdXJyZW5jaWVzLCBJIHdob2xseSBzdXBwb3J0IFJpcHBsZSAoM3JkIGhpZ2hlc3QgdmFsdWVkIGNyeXB0b2N1cnJlbmN5KVxyXG5cclxuYW5kIGFsc28gY2xlYW5cclxuXHJcbjxpPklvdGE8L2k+ICg4dGggaGlnaGVzdCB2YWx1ZWQgKVxyXG5cclxuPHN1cD41PC9zdXA+LiBSaXBwbGUsIHVuZm9ydHVuYXRlbHksIGlzIGEgcHJpdmF0ZSBjb21wYW55IHdpdGggYSBsZXNzLWFjY2Vzc2libGUgaW50ZXJuYWwgZGlzdHJpYnV0ZWQgbGVkZ2VyLiBBbmQgeWV0LFxyXG5cclxuSGVkZXJhIEhhc2hncmFwaCBoZXJhbGRzIHRoZSBtb3N0IG9wdGltaXN0aWMgbmV3cyBvZiBhbGw6IEEgYmxpbmRsaW5nbHkgZmFzdCBIYXNoZ3JhcGggc3RydWN0dXJlLCB1bmJvdW5kIGZyb20gYW55XHJcblxyXG5jYXJib24gZm9vdHByaW50LlxyXG5cclxuPC9wPlxyXG5cclxuPHA+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwOi8vd3d3LndyaS5vcmcvYmxvZy8yMDE3LzAxL2NoaW5hJUUyJTgwJTk5cy1kZWNsaW5lLWNvYWwtY29uc3VtcHRpb24tZHJpdmVzLWdsb2JhbC1zbG93ZG93bi1lbWlzc2lvbnNcIlxyXG5cclxudGFyZ2V0PVwiX2JsYW5rXCI+aHR0cDovL3d3dy53cmkub3JnL2Jsb2cvMjAxNy8wMS9jaGluYSVFMiU4MCU5OXMtZGVjbGluZS1jb2FsLWNvbnN1bXB0aW9uLWRyaXZlcy1nbG9iYWwtc2xvd2Rvd24tZW1pc3Npb25zPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+Mi5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3F6LmNvbS8xMTkzNjAzL3R3by1jb3VudHJpZXMtYXJlLXRoZS1yZWFzb24tdGhlLWV1LWlzLWhpdHRpbmctaXRzLWFtYml0aW91cy1yZW5ld2FibGUtZW5lcmd5LXRhcmdldHMvXCJcclxuXHJcbnRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vcXouY29tLzExOTM2MDMvdHdvLWNvdW50cmllcy1hcmUtdGhlLXJlYXNvbi10aGUtZXUtaXMtaGl0dGluZy1pdHMtYW1iaXRpb3VzLXJlbmV3YWJsZS1lbmVyZ3ktdGFyZ2V0cy88L2E+XHJcblxyXG48L3A+XHJcblxyXG48cD4zLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9idXNpbmVzcy9lY29ub215L3Vwc3RhdGUtbmV3LXlvcmstdG93bi1iYW5zLWJpdGNvaW4tbWluaW5nLzIwMTgvMDMvMTYvYmQ2ZjY2OWUtMjk0Ny0xMWU4LWJjNzItMDc3YWE0ZGFiOWVmX3N0b3J5Lmh0bWw/dXRtX3Rlcm09LjYyODJlYTg0MjlkNVwiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vYnVzaW5lc3MvZWNvbm9teS91cHN0YXRlLW5ldy15b3JrLXRvd24tYmFucy1iaXRjb2luLW1pbmluZzwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjxwPjQuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuYmxvb21iZXJnLmNvbS9uZXdzL2FydGljbGVzLzIwMTgtMDItMTQvbmV4dC1nZW5lcmF0aW9uLWNyeXB0by1sZWRnZXJzLXRha2UtdGhlLWJsb2NrLW91dC1vZi1ibG9ja2NoYWluXCJcclxuXHJcbnRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDE4LTAyLTE0L25leHQtZ2VuZXJhdGlvbi1jcnlwdG8tbGVkZ2Vycy10YWtlLXRoZS1ibG9jay1vdXQtb2YtYmxvY2tjaGFpbjwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGlkPVwiMTgtMDMtMTVcIiBjbGFzcz1cIiAgbWFyIDE4LTAzIC0xNVwiPlxyXG5cclxuXHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+V2ViIERldiBBZmZhaXJzPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMTUsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5JIExvdmUgdGhpcyBSZWNvcmQgQmFieSBidXQgSSBDYW4ndCBTZWUgU3RyYWlnaHQgQW55bW9yZTpcclxuXHJcbjxiciAvPkl0J3MgR29ubmEgYmUgT2theSwgRmxpcCB0aGF0IFJlY29yZCBhbmQgSnVzdCBEYW5jZSFcclxuXHJcbjwvaDY+XHJcblxyXG48cD4tTGFkeSBHYWdhPC9wPlxyXG5cclxuPGJyIC8+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+XHJcblxyXG48c3Ryb25nPkNyZWF0b3JzIGluIHRoZSBEaWdpdGFsIEFnZTwvc3Ryb25nPiwgZXNwZWNpYWxseSBNdXNpY2lhbnMsIGhhdmUgZmFjZWQganVzdCBhIHBhbm9wbHkgb2YgYnVzaW5lc3MgbW9kZWwgY2hhbGxlbmdlcyxcclxuXHJcbm5vdGFibHkgc2luY2UgdGhlIDIwMDBzJ1xyXG5cclxuPGk+TmFwc3RlciBFcmE8L2k+LiBBbmQgeWV0LCB0aGlzIGlzIHRoZSBhZ2Utb2xkLWNhc2Ugb2YgbmV3IHRlY2hub2xvZ2llcyByZXNoYXBpbmcgbG9uZy1zdGFuZGluZyBmaWVsZHMsIGVzcGVjaWFsbHlcclxuXHJcbmZpbmFuY2lhbCBzdHJ1Y3R1cmUgLSB0aGUgYm90dG9tIGxpbmUhIEFsbCBjcmVhdGl2ZSBmaWVsZHMgYWxzbyBoYXZlIHRlY2hub2xvZ2ljYWwgZmVhdHVyZXMgb24gdGhlIGhvcml6b24gdGhhdFxyXG5cclxubWF5LCBwb3RlbnRpYWxseSBtb3ZlIHRoZSBwbGF5aW5nIGZpZWxkLiBGaXJzdCBzb21lIHJlY2VudCBiYWNrZ3JvdW5kOiA8L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+XHJcblxyXG5XaGlsZSBbVGF5bG9yIFN3aWZ0XSBpcyBjZXJ0YWlubHkgbWFraW5nIG1vbmV5IGluIHJldGFpbCBzYWxlcyBhbmQgZGlnaXRhbCBkb3dubG9hZHMsIGJvdGggb2YgdGhvc2UgbWV0cmljcyBhcmUgc3BpcmFsaW5nXHJcblxyXG5kb3dud2FyZCBhcyBwZW9wbGUgbWlncmF0ZSBhd2F5IGZyb20gdGhlIGNvbmNlcHQgb2Ygb3duaW5nIG11c2ljIGF0IGFsbC4gTmllbHNlbiByZWNlbnRseSByZWxlYXNlZCBudW1iZXJzIGluZGljYXRpbmdcclxuXHJcbnN1YnN0YW50aWFsIGRyb3BzIGluIGJvdGggQ0QgYW5kIGRpZ2l0YWwtdHJhY2sgc2FsZXMsIHdoaWNoIGFyZSBkb3duIGFsbW9zdCAkMTAwIG1pbGxpb25cclxuXHJcbjxpPnllYXIgb3ZlciB5ZWFyPC9pPiBmcm9tIDIwMTQ7IHN0cmVhbWluZyBtdXNpYyBjb250aW51ZXMgdG8gZ3JvdywgYnV0IHRoZSByZXZlbnVlIGl0IGdlbmVyYXRlcyBpc27igJl0IGNsb3NlIHRvIG1ha2luZ1xyXG5cclxudXAgdGhlIGRpZmZlcmVuY2UsIHlldC5cclxuXHJcbjxzdXA+MTwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+TW9zdCByZW1lbWJlciBUYXlsb3IgU3dpZnQncyAyMDE0IGluZHVzdHJ5LXNoYWtpbmcgYWxidW0gd2l0aGRyYXcgaW4gcHJvdGVzdCB0byBTcG90aWZ5J3MgcGF5bWVudCBzdHJ1Y3R1cmUuIFRoZVxyXG5cclxubmV4dCB5ZWFyIFRheWxvciB0b29rIG9uIEFwcGxlIGlUdW5lcy0tdG8gd2hpY2ggQXBwbGUgYmVuZGVkIHRvIFRheWxvcidzIFdheVxyXG5cclxuPHN1cD4yPC9zdXA+LiBUaGVzZSB3aW5zIGFyZSBhbWF6aW5nIGJ1dCBub3QgZW5vdWdoLCBpZiBvbmx5IGZvciB3aW5uaW5nIGJhdHRsZXMgaW4gYSBsb3Npbmcgd2FyLiA8L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+U3BvdGlmeSBpcyB0aGUgZnV0dXJlLiBTcG90aWZ5IGlzIHRoZSBlbmVteS4gU3BvdGlmeSBkb2VzbuKAmXQgcGF5IGVub3VnaC4gU3BvdGlmeSBpcyBtdXNpY+KAmXMgYmVzdCBiZXQgZm9yIHJldmVudWVcclxuXHJcbmdyb3d0aC4gU2luY2UgaXQgYXJyaXZlZCBpbiB0aGUgVW5pdGVkIFN0YXRlcyBmcm9tIFN3ZWRlbiBpbiAyMDExLCBTcG90aWZ5IGhhcyBiZWVuIGNhc3QgYXMgYm90aCBoZXJvIGFuZCB2aWxsYWluXHJcblxyXG5pbiB0aGUgbXVzaWMgaW5kdXN0cnnigJlzIGNvbnRpbnVpbmcgZGViYXRlIG92ZXIgc3RyZWFtaW5nIG11c2ljLiA8L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+XHJcblxyXG5JdCBoYXMgYmVlbiBoYWlsZWQgYXMgYSBwb3RlbnRpYWwgc2F2aW9yIHRocm91Z2ggYSB0d28tdGllcmVkIOKAnGZyZWVtaXVt4oCdIG1vZGVsIHRoYXQgd291bGQgZ3JhZHVhbGx5IGx1cmUgbGlzdGVuZXJzIGF3YXkgZnJvbVxyXG5cclxucGlyYWN5LiBZZXQgU3BvdGlmeeKAmXMgcm95YWx0eSByYXRlcyBoYXZlIGFsc28gdGVycmlmaWVkIG1hbnkgYXJ0aXN0cyBhbHJlYWR5IHdvcnJpZWQgdGhhdCBlYWNoIG5ldyBzdGVwIGluIG11c2lj4oCZc1xyXG5cclxuZGlnaXRhbCBldm9sdXRpb24gZnVydGhlciBkZXZhbHVlcyB0aGVpciB3b3JrLlxyXG5cclxuPHN1cD4zPC9zdXA+XHJcblxyXG48L3A+XHJcblxyXG48cD5TbyB0aGUgdHJlbmQgbG9va3MgZGlyZSwgYW5kIHlldCBpcyBpdCByZWFsbHk/IFdoZXJlLCBqdXN0IHdoZXJlIGFyZSB0aGVcclxuXHJcbjxzdHJvbmc+VGVjaCBQbGF0Zm9ybXMgPC9zdHJvbmc+IGxlYWRpbmcgdXM/IFRlY2ggaXMgbGVhZGluZyB1c1xyXG5cclxuPGk+bm93aGVyZTwvaT4sIGF0IGxlYXN0IG5vdCB0byBvbmVcclxuXHJcbjxzdHJvbmc+c2luZ3VsYXIsIGNlbnRyYWxpemVkIHBsYWNlPC9zdHJvbmc+OyByYXRoZXIsIGRlY2VudHJhbGl6ZWQgdGVjaC0taW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBibG9ja2NoYWluLS1pcyBidXN5XHJcblxyXG5yZXdyaXRpbmcgdGhlIGJvdW5kYXJpZXMgYmV0d2VlbiBjcmVhdG9ycyBhbmQgY29uc3VtZXJzLiBUaGlzIFR1ZXNkYXkncyBGb3JiZXMgYXJ0aWNsZSByZXBvcnRlZCBvbiBuZXcgc3Vic2NyaXB0aW9uLWJhc2VkXHJcblxyXG5tb2RlbCBieSBQYXRyZW9uLiBTdGlsbCBjbGFzc2ljYWwgV2ViIDIuMCwgaXQncyBub3ZlbHR5IGFwcGVhcnMgc28gc2ltcGxlLCBhbG1vc3QgaW50dWl0aXZlIGluIHBvdGVudGlhbGx5IG5ldyBwYXRod2F5OjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5cIk9uIEtpY2tzdGFydGVyIGFuZCBJbmRpZWdvZ28sIGNyZWF0b3JzIGVzc2VudGlhbGx5IGhhdmUgdG8gc3RhcnQgb3ZlciBldmVyeSB0aW1lLFwiIHNheXMgRGFubnkgUmltZXIsIGEgcGFydG5lciBhdFxyXG5cclxuSW5kZXggVmVudHVyZXMgd2hvIGlzIGEgUGF0cmVvbiBpbnZlc3RvciBhbmQgYm9hcmQgbWVtYmVyLiBcIkl0J3MgdGhlIHNhbWUgcmVhc29uIHNvZnR3YXJlIGNvbXBhbmllcyB3ZW50IGZyb20gbGljZW5zZWRcclxuXHJcbnNvZnR3YXJlIHRvIHN1YnNjcmlwdGlvbnM6IHByZWRpY3RhYmxlIHJldmVudWUgYW5kIGJldHRlciBzZXJ2aWNlIGZvciBjdXN0b21lcnMuXCJcclxuXHJcbjxzdXA+NDwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+XHJcblxyXG5BcHBhcmVudGx5IFBhdHJlb24sIGFsb25nIHdpdGggbGFzdCBOb3ZlbWJlcidzXHJcblxyXG48aT5EcmlwPC9pPiBieSBLaWNrU3RhcnRlciBoYXZlIG1hZGUgaGVhZHdheS4gUGF0cmVvbiBwYWlkIG91dCAkMTUwIG1pbGxpb24gdG8gaXRzIGFydGlzdHMgaW4gMjAxNywgYW5kIGVhY2ggYXJlIGRvdWJsaW5nXHJcblxyXG5hbm51YWxseS4gRGVjZW50cmFsaXppbmcgYWdhaW4uIFdlbGwsIHdlIHNheSB3ZSBjYW4ndFxyXG5cclxuPGk+Z28gYmFjayB0byB0aGUgd2F5IGl0IHdhczwvaT4sIGJ1dCBUZWNoIGFsd2F5cyBzZWVtcyB0byBsZWFkIHVzIGJhY2sgdG8gdGhlIHdheSBpdCB3YXMhXHJcblxyXG48L3A+XHJcblxyXG48cD4xLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTYvMDEvMjUvbWFnYXppbmUvdG91cmluZy1jYW50LXNhdmUtbXVzaWNpYW5zLWluLXRoZS1hZ2Utb2Ytc3BvdGlmeS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAxNi8wMS8yNS9tYWdhemluZS90b3VyaW5nLWNhbnQtc2F2ZS1tdXNpY2lhbnMtaW4tdGhlLWFnZS1vZi1zcG90aWZ5Lmh0bWxcclxuXHJcbjwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjxwPjIuXHJcblxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5idXNpbmVzc2luc2lkZXIuY29tL3RheWxvci1zd2lmdC1uZXctYWxidW0tcmVwdXRhdGlvbi1ub3Qtb24tc3BvdGlmeS1hcHBsZS1tdXNpYy1zdHJlYW1pbmctMjAxNy0xMVwiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5odHRwOi8vd3d3LmJ1c2luZXNzaW5zaWRlci5jb20vdGF5bG9yLXN3aWZ0LW5ldy1hbGJ1bS1yZXB1dGF0aW9uLW5vdC1vbi1zcG90aWZ5LWFwcGxlLW11c2ljLXN0cmVhbWluZy0yMDE3LTExXHJcblxyXG48L2E+XHJcblxyXG48L3A+XHJcblxyXG48cD4zLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTQvMTEvMTIvYnVzaW5lc3MvbWVkaWEvdGF5bG9yLXN3aWZ0cy1zdGFuZC1vbi1yb3lhbHRpZXMtZHJhd3MtYS1yZWJ1dHRhbC1mcm9tLXNwb3RpZnkuaHRtbFwiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5ueXRpbWVzLmNvbS8yMDE0LzExLzEyL2J1c2luZXNzL21lZGlhL3RheWxvci1zd2lmdHMtc3RhbmQtb24tcm95YWx0aWVzLWRyYXdzLWEtcmVidXR0YWwtZnJvbS1zcG90aWZ5Lmh0bWxcclxuXHJcbjwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuXHJcblxyXG48cD40LlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMva2F0aGxlZW5jaGF5a293c2tpLzIwMTgvMDIvMTMvZGlnaXRhbC1tZWRpY2ktaG93LXRoaXMtbXVzaWNpYW4tdHVybmVkLWVudHJlcHJlbmV1ci1wbGFucy10by1zYXZlLWNyZWF0b3JzLWZyb20tYWR2ZXJ0aXNpbmcvIzYwNjNlYTc3MTMxM1wiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5mb3JiZXMuY29tL3NpdGVzL2thdGhsZWVuY2hheWtvd3NraS8yMDE4LzAyLzEzL2RpZ2l0YWwtbWVkaWNpLWhvdy10aGlzLW11c2ljaWFuLXR1cm5lZC1lbnRyZXByZW5ldXItcGxhbnMtdG8tc2F2ZS1jcmVhdG9ycy1mcm9tLWFkdmVydGlzaW5nXHJcblxyXG48L2E+XHJcblxyXG48L3A+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBpZD1cIjE4LTAzLTE0XCIgY2xhc3M9XCIgIG1hciAxOC0wMyAtMTRcIj5cclxuXHJcblxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPlNvY2lvbG9neSBUb21vcnJvdyE8L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5NYXJjaCAxNCwgMjAxODwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPjxpPlRvdTxzdHJvbmc+RGVtb3U8L3N0cm9uZz4gdGVzPHN0cm9uZz4gS3JhdGVzPC9zdHJvbmc+PC9pPjo8YnIgLz5TdHJlbmd0aCBvZiB0aGUgUGVvcGxlPC9oNj5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlRvZGF5J3MgZGVtb25zdHJhdGlvbnMgYW5kIHdhbGstb3V0cywgbGVkIGJ5IEFtZXJpY2EncyBZb3V0aCBhbmQgZm9sbG93ZWQgYnkgbWFueSBvZiB0aGUgZWR1Y2F0aW9uIHN0YWZmLCBoYXMgYWltZWRcclxuXHJcbmRpcmVjdGx5IGF0IEd1bi1Db250cm9sIGxlZ2lzbGF0aW9uLiBZZXQsIHRoZSBtZXNzYWdlIG1vcmUgcG93ZXJmdWxseSBhcnRpY3VsYXRlZCB0aGFuIGV2ZXIgYnkgYWRvbGVzY2VudC10dXJucy1hZHVsdFxyXG5cclxuc3R1ZGVudHMsIHRha2VzIGFpbSBhdCBzb21ldGhpbmcgZnVydGhlciBhZmllbGQuIDwvcD5cclxuXHJcbjxwPlN0dWRlbnRzLCByZW1lbWJlcmluZyB0aGUgRmVicnVhcnkgMTR0aCBtYXNzYWNyZSB2aWN0aW1zLCB0YWtlIGFpbSBhdCB0aGUgY29ycnVwdGlvbiBzdGVtbWluZyBmcm9tIHRoZSAyMDEwIFN1cHJlbWVcclxuXHJcbkNvdXJ0IFwiUGVyc29uLWhvb2RcIiBwcm90ZWN0aW9uIGZvciBDb3Jwb3JhdGlvbnMsIGFsc28ga25vd24gYXMgdGhlXHJcblxyXG48aT5DaXRpemVucyBVbml0ZWQ8L2k+IERlY2lzaW9uLiBBIGRhdGVkLCBidXQgcG9pZ25hbnQsIGFydGljbGUgZnJvbSBOYXRpb25hbCBQdWJsaWMgUmFkaW8gZXhwbGFpbnM6XHJcblxyXG48L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+VGhlIFN1cHJlbWUgQ291cnQgZXh0ZW5kZWQgdGhhdCBwcm90ZWN0aW9uIHRvIGNvcnBvcmF0aW9ucywgYW5kIG92ZXIgdGltZSBhbHNvIGV4dGVuZGVkIHNvbWUg4oCUIGJ1dCBub3QgYWxsIOKAlCBvZiB0aGVcclxuXHJcbnJpZ2h0cyBndWFyYW50ZWVkIHRvIGluZGl2aWR1YWxzIGluIHRoZSBCaWxsIG9mIFJpZ2h0cy5cclxuXHJcbjxzdXA+MTwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+XHJcblxyXG5ZZXQsIGl0IGFwcGVhcnMgZGVjZXB0aXZlbHkgaGFybWxlc3MgZm9yIENvbmdyZXNzaW9uYWwgTGF3LW1ha2VycyB0byBwcm90ZWN0IGNvcnBvcmF0aW9ucywgaW4gdGhlIGZvcm0gb2ZcclxuXHJcbjxzdHJvbmc+R3VuIE1hbnVmYWN0dXJlcnMnIExvYmJ5aXN0cywgPC9zdHJvbmc+XHJcblxyXG5hcyBlcXVhbGx5IGFzIGl0IHByb3RlY3RzIGh1bWFucy4gVGhlIG9yaWdpbiBvciB0aGlzIHJ1bGluZyBkYXRlcyB0byBhIDcwJ3MgTmVvLUxpYmVyYWwsIHJpZ2h0LWxlYW5pbmcgbGVnaXNsYXRpb24gYW5kIENvdXJ0XHJcblxyXG5ydWxpbmdzIHRoYXQgaW5jbHVkZSBhIHBpdm90YWwgMTk3OFxyXG5cclxuPGk+Rmlyc3QgTmF0aW9uYWwgQmFuayBvZiBCb3N0b24gdi4gQmVsbG90aTwvaT4gZGVjaXNpb24gYWxsb3dpbmcgZm9yIGNvcnBvcmF0aW9ucycgYmFsbG90LWluaXRpYXRpdmUgY2FtcGFpZ24gY29udHJpYnV0aW9ucyxcclxuXHJcbmNpdGluZyB0aGUgRmlyc3QgQW1lbmRtZW50LlxyXG5cclxuPHN1cD4yPC9zdXA+XHJcblxyXG48L3A+XHJcblxyXG48cD5cclxuXHJcblxyXG5cclxuVGhlIFJlc3VsdD8gVGhlIGNvcnBvcmF0aW9uLCBpbiBcInBlcnNvblwiIGZvcm0sIHRha2VzIG9uIFBzZXVkby1IdW1hbiBxdWFsaXRpZXM6IGltbW9ydGFsLCBiZXlvbmQtbWVhc3VyZSBjYXBpdGFsLCBhbmQgcHJvZ3JhbW1hdGljYWxseVxyXG5cclxuc2VydmluZyBzdG9jay1ob2xkZXJzJyBpbnRlcmVzdHMgd2l0aCBjdXQtdGhyb2F0IGNvbXBldGl0aW9uIGF0IGFsbCBjb3N0cy4gTm8gbWF0Y2ggYWdhaW5zdCBhIHN5bXBhdGhldGljIGh1bWFuLFxyXG5cclxueWV0IHRoZSBDb3Jwb3JhdGlvbiBpcyBnaXZlbiB0aGUgc2FtZSByaWdodHMgYW5kIHByaXZpbGVnZXMgYXMgdGhlIG1hbiBpbiB0aGUgc3RyZWV0LiBOb3csIGluIHRoZSBmYWNlIG9mIHR3byBkZWNhZGVzJ1xyXG5cclxuZGVhZCBodW1hbnMtLWFzIHlvdW5nIGFzXHJcblxyXG48aT5TYW5keSBIb29rIEVsZW1lbnRhcnk8L2k+LCB3aGljaCB3ZXJlIG5vdCBwcm90ZWN0ZWQgYnkgTGVnaXNsYXRpb24sIGR1ZSB0byBjb21taXRtZW50cyBtYWRlIHRvIGNvcnBvcmF0ZSBsb2JieWluZy5cclxuXHJcbjwvcD5cclxuXHJcbjxwPkl0IGFwcGVhcnMgaW5jcmVhc2luZ2x5IGRpZmZpY3VsdCBmb3IgTWFyY28gUnViaW8gdG8gYWNjZXB0IG1vbmV5IGZyb20gZ3VuIGxvYmJ5aXN0c1xyXG5cclxuPGk+aW4gZXhjaGFuZ2U8L2k+IGZvciBleGVjdXRpbmcgdGhlaXIgbGVnaXNsYXRpb24gZGVtYW5kcy4gQXMgSSBtZW50aW9uZWQgaW4gbXlcclxuXHJcbjxhIGhyZWY9XCIjMTgtMDItMTRcIj5GZWJydWFyeSAxNHRoIHBvc3Q8L2E+IG9uIHRoZSB0b3BpYywgaXQgaXMgY2xlYXIgYSBnZW5lcmF0aW9uIGlzIGF3YWtlbmluZzogQW5kLCB0aGUgSHVtYW5zIGhhdmUgYmVndW4gdG8gcmV2b2x0XHJcblxyXG5hZ2FpbnN0IHRoZVxyXG5cclxuPHN0cm9uZz5IZWF2aWx5LUFybWVkIExvYmJ5aW5nIE1hY2hpbmVzIVxyXG5cclxuPC9zdHJvbmc+XHJcblxyXG48L3A+XHJcblxyXG48cD4xLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5wci5vcmcvMjAxNC8wNy8yOC8zMzUyODgzODgvd2hlbi1kaWQtY29tcGFuaWVzLWJlY29tZS1wZW9wbGUtZXhjYXZhdGluZy10aGUtbGVnYWwtZXZvbHV0aW9uXCJcclxuXHJcbnRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3Lm5wci5vcmcvMjAxNC8wNy8yOC8zMzUyODgzODgvd2hlbi1kaWQtY29tcGFuaWVzLWJlY29tZS1wZW9wbGUtZXhjYXZhdGluZy10aGUtbGVnYWwtZXZvbHV0aW9uPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuPHA+Mi5cclxuXHJcbjxhIGhyZWY9XCJodHRwOi8vd3d3Lm5jc2wub3JnL3Jlc2VhcmNoL2VsZWN0aW9ucy1hbmQtY2FtcGFpZ25zL2NhbXBhaWduLWZpbmFuY2UtYW5kLXRoZS1zdXByZW1lLWNvdXJ0LmFzcHgjZG5uX2N0cjc3NDQzX0h0bWxNb2R1bGVfbGJsQ29udGVudFwiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5odHRwOi8vd3d3Lm5jc2wub3JnL3Jlc2VhcmNoL2VsZWN0aW9ucy1hbmQtY2FtcGFpZ25zL2NhbXBhaWduLWZpbmFuY2UtYW5kLXRoZS1zdXByZW1lLWNvdXJ0LmFzcHg8L2E+XHJcblxyXG48L3A+XHJcblxyXG5odHRwOi8vd3d3Lm5jc2wub3JnL3Jlc2VhcmNoL2VsZWN0aW9ucy1hbmQtY2FtcGFpZ25zL2NhbXBhaWduLWZpbmFuY2UtYW5kLXRoZS1zdXByZW1lLWNvdXJ0LmFzcHggZG5uX2N0cjc3NDQzX0h0bWxNb2R1bGVfbGJsQ29udGVudFxyXG5cclxuPC9kaXY+IFxyXG5cclxuPGRpdiBpZD1cIjE4LTAzLTEzXCIgY2xhc3M9XCJtYXIgMTgtMDMgLTEzXCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG5cclxuXHJcbjxoNCBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5NdXNpbmcgQmxvY2tjaGFpbjwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggMTMsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5UaGUgU2hhcmluZyBFY29ub215IEhhbmQtaW4tSGFuZCB3aXRoIHRoZSBNYXJrZXQgRWNvbm9teTpcclxuXHJcbjxiciAvPiBQYXJ0IElJSSBhbmQgU3VzdGFpbmFiaWxpdHkgb2YgU2hhcmVkLCBEaXN0cmlidXRlZCBMZWRnZXIgVHlwZXM8L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+TWFyY2ggMTN0aCwgMjAxOCBtYXJrcyB0aGUgZGF5IHRoYXQgY2VydGFpbiB0eXBlcyBvZiBibG9ja2NoYWluIHRlY2hub2xvZ2llcywgbm90YWJseSBCaXRjb2luIGFuZCBFdGhlcmV1bSwgZmFjZVxyXG5cclxuYW4gZXhpc3RlbnRpYWwgY3Jpc2lzOiBUb2RheSwgYSBuZXcgZGlzdHJpYnV0ZWQgbGVkZ2VyIHRlY2hub2xvZ3kgaGFzIGJlZW4gYW5ub3VuY2VkLCB3aGljaCBkZXBhcnRzIGZyb20gdGhlIHRyYWRpdGlvbmFsXHJcblxyXG5cIlByb29mLW9mLVdvcmtcIiAoZW5lcmd5LWludGVuc2l2ZSBjYWxjdWxhdGlvbnMpIEJsb2NrY2hhaW4gdGVjaG5vbG9naWVzLiBUaGlzIGlzIGNyaXRpY2FsbHkgaW1wb3J0YW50IHRvIHplcm8gY2FyYm9uLWZvb3RwcmludC5cclxuXHJcbkZvciBleGFtcGxlLCBCaXRjb2luIGNhbGN1bGF0aW9ucyBkcmFpbiBtb3JlIGVuZXJneSwgNTAgVGVyYVdhdHQvaHJzIHBlciB5ZWFyLS1oaWdoZXIgdGhhbiBTaW5nYXBvcmUncyA0OS44ITwvcD5cclxuXHJcbjxwPk5leHQsIHRoZSBwcmltYXJ5IHNlY3VyaXR5IGZsYXcgb2YgY29uc2Vuc3VzLWJhc2VkIGxlYWRlcnNoaXAgbGlrZSBSaXBwbGUsIElvdGEgKGFzIG9wcG9zZWQgdG9cclxuXHJcbjxpPnJhbmRvbS1zZWxlY3Rpb24gYmxvY2tjaGFpbiBsZWFkZXJzaGlwPC9pPiBiYXNlZCBvbiBjYXJib24taW50ZW5zaXZlIGNhbGN1bGF0aW9ucykgaXMgdGhleSBhcmUgc3VzY2VwdGlibGUgdG8gSGFja2luZzpcclxuXHJcbkRlbmlhbC1vZi1TZXJ2aWNlIEF0dGFja3MgYXJlIHBvc3NpYmxlIGJlY2F1c2UgdGhlIG5leHQgbGVhZGVyIEJsb2NrIGNhbiBiZSBhbnRpY2lwYXRlZCBhbmQgZm9sbG93ZWQgYnkgYSBCb3QpLFxyXG5cclxuc28gdGhlIGJsb2NrY2hhaW4gY3ljbGUgaXMgYXR0YWNrZWQgYXQgZXZlcnkgY3ljbGUuIDwvcD5cclxuXHJcbjxwPlRoZSBIZWRlciBIYXNoZ3JhcGggdW52ZWlsZWQgdG9kYXkgb3ZlcmNvbWVzIHRoaXMgcHJvYmxlbSBieSB1c2luZyBhIDM5LW5vZGUtbGVhZGVyIGhhc2hncmFwaCBkYXRhIHN0cnVjdHVyZS4gSW50ZXJlc3RpbmdseSxcclxuXHJcbnRoaXMgaXMgYmFzZWQgb24gdGhlIG9yaWdpbmFsIFZpc2EgQ3JlZGl0IENhcmQgZGVzaWduIGZyb20gdGhlIDE5NTAncyAodGhlbiBjYWxsZWQgQW1lcmljYUJhbmspIGZvciBhdXRoZW50aWNhdGluZ1xyXG5cclxuc3lzdGVtLiA8L3A+XHJcblxyXG48cD5cclxuXHJcbk5leHQsIFRoZSBIZWRlciBIYXNoZ3JhcGggb3ZlcmNvbWVzIHRoZSBwcm9ibGVtIG9mIFwiZmFpcm5lc3NcIiBiZWNhdXNlIGJsb2NrY2hhaW4gdHJhbnNhY3Rpb25zIGFyZVxyXG5cclxuPGk+XHJcblxyXG48c3Ryb25nPm5vdCBvcmRlcmVkIGluIGVhY2ggY3ljbGU8L3N0cm9uZz4uPC9pPiBCaXRjb2luIHRyYW5zYWN0aW9ucyBhcmUgaGFwaGF6YXJkbHkgbHVtcGVkIHRvZ2V0aGVyIGluIGVhY2ggYmxvY2stY3ljbGUsXHJcblxyXG53aGljaCBpcyB+MTIgbWludXRlcy4gV2hpY2ggbWVhbnMgdGhhdCB0aW1lLXNlbnNpdGl2ZSBmaW5hbmNpYWwgZGF0YSBxdWVyaWVzIHdpbGwgYWx3YXlzIGxvc2UhIDwvcD5cclxuXHJcbjxwPlxyXG5cclxuU3dpcmxkJ3MgdW52ZWlsZWQgdGhlaXIgY29uc2Vuc3VzLWJhc2VkXHJcblxyXG48c3Ryb25nPkhhc2hncmFwaCwgYSB0eXBlIG9mIGRpc3RyaWJ1dGVkIGxlZGdlciB0ZWNobm9sb2d5IChETFQpLDwvc3Ryb25nPiBsYXN0IHllYXIuIFRvZGF5LCBpdCBoYXMgbm93IGJlZW4gYW5ub3VuY2VkIHRvXHJcblxyXG5kZXBsb3kgaW4gbGF0ZSAyMDE4IG9uIHRoZSBIZWRlcmEgSGFzaGdyYXBoIHB1YmxpYyBuZXR3b3JrLiBUaGlzIGlzIHRyZW1lbmRvdXMgbmV3cyEgVHJlbWVuZG91cywgc2luY2UgSSBleHBsYWluZWRcclxuXHJcbmluIG15XHJcblxyXG48YSBocmVmPVwiIzE4LTAzLTAxXCI+TWFyY2ggMXN0IDwvYT4gYmxvZyBwb3N0IHRoYXQgb2xkZXIgYmxvY2tjaGFpbiB0ZWNobm9sb2dpZXMgaW5jZW50aXZpemUgbWluZXJzJyBlZmZvcnRzIGJ5IGRpcmVjdGx5IHR5aW5nIGVsZWN0cmljYWwtY29zdChcclxuXHJcbihpbiBjYWxjdWxhdGlvbnMpIHRvIHRoZSBCaXRjb2luL2hvdXIgcHJvZml0IG1hcmdpbi4gRm9yIHRoaXMgcmVhc29uLCB0aGUgZnV0dXJlIGhvcml6b24ganVzdCBjb25zaWRlcmFibHkgc2hvcnRlbmVkXHJcblxyXG5CaXRjb2luJ3MgcnVud2F5IGZvciBlc3RhYmxpc2hpbmcgYW55dGhpbmcgYmV5b25kIFwiZWFybHktYWRvcHRlclwiIHN0YXR1cy4gPC9wPlxyXG5cclxuPHA+U28sIHdlJ2xsIHNlZSBpZiB0aGUgaW5ub3ZhdGluZyBjcmV3IHdpdGggVml0YWxpayBCdXRlcmluJ3MgRXRoZXJldW0gY2FuIHN1Y2Nlc3NmdWxseSBhbHRlciB0aGUgY3J5cHRvIGFsZ29yaXRobVxyXG5cclxuaW50byBpdCdzIHBsYW5uZWQgY2FyYm9uLWZyZWUgY29uc2Vuc3VzLWJhc2VkLCBcInByb29mLW9mLXN0YWtlXCIgZm9ybS4gRm9yIHRoZSBtb21lbnQsIEJpdGNvaW4sIEV0aGVyZXVtLCBhbmQgb3RoZXJcclxuXHJcbmVsZWN0cmljaXR5LWRyYWluaW5nIFwicHJvb2Ytb2Ytd29ya1wiIGRlc2lnbnMsIGhhdmUgdGhlaXJcclxuXHJcbjxzdHJvbmc+ZXhjaGFuZ2UgdmFsdWUgdHJhcHBlZCBpbnNpZGUgdGhlaXIgb3duIENhcmJvbiBGb290cHJpbnQ8L3N0cm9uZz4uXHJcblxyXG48c3VwPjQ8L3N1cD4gQW5kIHNvLCBiZWNhdXNlIGVudmlyb25tZW50YWwgc3VzdGFpbmFibGl0eSBpcyBmb3JlbW9zdCBvZiBjb25jZXJucyBmb3IgZnV0dXJlIGludmVzdG1lbnQsIHN1cnZpdmFsIG1heVxyXG5cclxuZGVwZW5kIG9uIGRpZ2dpbmcgb3V0IG9mIHRoYXQgQ2FyYm9uIEZvb3RwcmludCBtdWNoIG1vcmUgcXVpY2tseSE8L3A+XHJcblxyXG5cclxuXHJcbjxwPjEuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuZm9yYmVzLmNvbS9zaXRlcy9qZWZma2F1Zmxpbi8yMDE4LzAzLzEzL2hlZGVyYS1oYXNoZ3JhcGgtdGhpbmtzLWl0LWNhbi1vbmUtdXAtYml0Y29pbi1hbmQtZXRoZXJldW0td2l0aC1mYXN0ZXItdHJhbnNhY3Rpb25zLyMxNzVlNWM3OWFiY2JcIj5cclxuXHJcbmh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMvamVmZmthdWZsaW4vMjAxOC8wMy8xMy9oZWRlcmEtaGFzaGdyYXBoLXRoaW5rcy1pdC1jYW4tb25lLXVwLWJpdGNvaW4tYW5kLWV0aGVyZXVtLXdpdGgtZmFzdGVyLXRyYW5zYWN0aW9ucy8jMTc1ZTVjNzlhYmNiXHJcblxyXG48L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjIuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuY29pbmRlc2suY29tL2hlZGVyYS1oYXNoZ3JhcGgtc3dpcmxkcy1uby1mb3JrLWd1YXJhbnRlZS1jcnlwdG9jdXJyZW5jeS10b3V0cy1yZXNpc3RhbmNlLWNvZGUtc3BsaXRzL1wiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHJcbmh0dHBzOi8vd3d3LmNvaW5kZXNrLmNvbS9oZWRlcmEtaGFzaGdyYXBoLXN3aXJsZHMtbm8tZm9yay1ndWFyYW50ZWUtY3J5cHRvY3VycmVuY3ktdG91dHMtcmVzaXN0YW5jZS1jb2RlLXNwbGl0cy88L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjMuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly92ZW50dXJlYmVhdC5jb20vMjAxOC8wMy8xMy9oZWRlcmEtaGFzaGdyYXBoLWFuZC1tei11bnZlaWwtbmV4dC1nZW5lcmF0aW9uLWJsb2NrY2hhaW4tYWx0ZXJuYXRpdmUvXCJcclxuXHJcbnRhcmdldD1cIl9ibGFua1wiPlxyXG5cclxuaHR0cHM6Ly92ZW50dXJlYmVhdC5jb20vMjAxOC8wMy8xMy9oZWRlcmEtaGFzaGdyYXBoLWFuZC1tei11bnZlaWwtbmV4dC1nZW5lcmF0aW9uLWJsb2NrY2hhaW4tYWx0ZXJuYXRpdmUvPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbjxwPjQuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly9ibG9nLmV0aGVyZXVtLm9yZy8yMDE2LzAyLzA5L2N1dC1hbmQtdHJ5LWJ1aWxkaW5nLWEtZHJlYW0vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9ibG9nLmV0aGVyZXVtLm9yZy8yMDE2LzAyLzA5L2N1dC1hbmQtdHJ5LWJ1aWxkaW5nLWEtZHJlYW0vPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYXIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMy0xMlwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDQgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcblxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+U29jaW9sb2d5IFRvbW9ycm93ITwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggMTIsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5UaGUgU2hhcmluZyBFY29ub215IEhhbmQtaW4tSGFuZCB3aXRoIHRoZSBNYXJrZXQgRWNvbm9teTpcclxuXHJcbjxiciAvPiBQYXJ0IElJIGFuZCBOZXcgRm9ybXMgb2YgVHJ1c3Q8L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlxyXG5cclxuVGhyb3VnaG91dCB0aGUgY2VudHJhbGl6ZWQtdGVjaCBwZXJpb2Qgb2YgdGhlXHJcblxyXG48aT5tb2JpbGUtcG93ZXJlZCA8L2k+IFdlYiAyLjAsIG1vc3QgU2hhcmluZyB0cmFuc2FjdGlvbnMgdGFrZSBwbGFjZSBvbiBhIGNlbnRyYWxpemVkIHBsYXRmb3JtIHRoYXQgc2ltcGx5IGZhY2lsaXRhdGVzXHJcblxyXG50aGUgcGVlci10by1wZWVyIHRyYW5zYWN0aW9ucy4gSG93ZXZlciwgdGhlIHRydXN0IGlzIGJhc2VkIG9uIHNvbWUgdGhpcmQtcGFydHkgYXV0aG9yaXR5LiBGb3IgaW5zdGFuY2UsIFViZXIgc2VydmVzXHJcblxyXG5hcyB0aGUgY2VudHJhbGFsaXplZCwgdGhpcmQtcGFydHkgYXV0aG9yaXR5IGJldHdlZW4gYm90aCBjb25zdW1lcnMgKHdoZXRoZXIgcmVzb3VyY2Utb2J0YWluaW5nIG9yIHJlc291cmNlLXByb3ZpZGluZylcclxuXHJcbm11c3QgcGxhY2UgdGhlaXIgdHJ1c3QuIFNpbWlsYXJseSwgY2VudHJhbGl6ZWQgYXV0aG9yaXRpZXMgbGlrZSBQYXlwYWwsIGV0Yy4gZW5hYmxlIHBlZXItdG8tcGVlciBjb2xsYWJvcmF0aW9uLlxyXG5cclxuWWV0LCB0aGUgbm90aW9uIG9mIHRydXN0IHJlbWFpbnMgdW5zb2x2ZWQ6IEJvdGggcGFydGllcyBtdXN0IHBsYWNlIHRoZWlyIGZhaXRoIGluIHRoZSB0aGlyZCBwYXJ0eS4gQnkgZGVmaW5pdGlvbixcclxuXHJcbnRoaXMgcHJvYmxlbSB0aGF0IHVuZGVybWluZXMgdGhlXHJcblxyXG48aT5TaGFyaW5nIEVjb25vbXk8L2k+IGlzIHJlc29sdmVkIGJ5IEJsb2NrY2hhaW4gdGVjaG5vbG9naWVzLCB0aHJvdWdoIGNyeXB0b2dyYXBoeS4gTm93LCBEZWNlbnRyYWxpemVkIEFwcHMgKERBUFBTKVxyXG5cclxucHJvdmlkZSBhIHRydWVyIHNoYXJpbmcgcGxhdGZvcm0gZm9yIHZhbHVlIHRyYW5zYWN0aW9ucy5cclxuXHJcbjwvcD5cclxuXHJcbjxwPkluIHNob3J0LCBuZWl0aGVyIHBlZXIsXHJcblxyXG48c3Ryb25nPm5laXRoZXIgY29uc3VtZXIgbmVlZHMgdG8gYmUgdHJ1c3RlZCwgYmVjYXVzZSBib3RoIHBhcnRpZXMgc2hhcmUgYSBtdXR1YWwgdHJ1c3QgaW4gdGhlaXIgc2hhcmVkIGxlZGdlcjwvc3Ryb25nPlxyXG5cclxuKHRoaW5rIG9mIGEgdGhpY2sgYm9vayB3aXRoIGFuIGluZGV4ZWQgbG9nIG9mIGVhY2ggYW5kIGV2ZXJ5IHRyYW5zYWN0aW9uLCB3aXRoIHVuY2hhbmdlYWJsZSBlbnRyaWVzIGV0Y2hlZCBieSBjcnlwdG9ncmFwaHkuXHJcblxyXG5JbiB0aGlzIGZhc2hpb24gdGhlIGZvcm1zIG9mIEV4Y2hhbmdlIFZhbHVlIGluY2x1ZGU6XHJcblxyXG48YnIgLz4gMS4gVmFsdWUgRnVuZHMgJmFtcDsgSW52ZXN0bWVudHNcclxuXHJcbjxiciAvPiAyLiBJbW11dGFibGUgSW5zdXJhbmNlICZhbXA7IFJpc2sgTWFuYWdlbWVudFxyXG5cclxuPGJyIC8+IDMuIEFjY291bnQgZm9yICZhbXA7IEF1ZGl0IENvbW1vZGlmaWVkIFZhbHVlIDQuIEF1dGhlbnRpY2F0ZSAmYW1wOyBBdHRlc3QgdG8gVmFsdWVcclxuXHJcbjxiciAvPiA1LiBUcmFuc2ZlciwgU3RvcmUsIExlbmQgVmFsdWVcclxuXHJcbjxiciAvPlxyXG5cclxuPC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYXIgMTgtMDMgLTEwXCIgaWQ9XCIxOC0wMy0xMFwiPlxyXG5cclxuXHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNCBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2PC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5NYXJjaCAxMC0xMSwgMjAxOFxyXG5cclxuPGJyIC8+IFdlZWtlbmRcclxuXHJcbjwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPlRoZSBTaGFyaW5nIEVjb25vbXkgSGFuZC1pbi1IYW5kIHdpdGggdGhlIE1hcmtldCBFY29ub215OlxyXG5cclxuPGJyIC8+IFBhcnQgSSBhbmQgdGhlIFJhY2UgZm9yIFN1c3RhaW5hYmlsaXR5IFNvbHV0aW9uczwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5TaGFyaW5nIGNhbiBiZSBhIHBoaWxvc29waHkgYW5kIGV2ZW4gYW4gaWRlb2xvZ3ksIGJ1dCBpdCBpcyBhbHNvXHJcblxyXG48c3Ryb25nPiBhIGNvbmNlcHQgc2V3biBpbnRvIHRoZSBUZWNobm9sb2d5IG9mIHRoZSBFcmE8L3N0cm9uZz4uIFNoYXJpbmcgZWNvbm9teSByZWZlcnMgdG8gYm90aCBkZW1vY3JhdGl6ZWQgcGVlci10by1wZWVyXHJcblxyXG5tYXJrZXRwbGFjZXMsXHJcblxyXG48aT5hbmQ8L2k+IGNvbGxhYm9yYXRpdmUsIHJlc291cmNlLWNpcmN1bGF0aW5nIGNvbnN1bXB0aW9uIHN5c3RlbXMgd2hlcmUgdGhlIGNvbnN1bWVyJiMzOTtzIHJvbGUgaXMgcHJvdmlkZXIgb3Igb2J0YWluZXJcclxuXHJcbm9mIHJlc291cmNlcy4gQnkgZWl0aGVyIHNlbnNlLCB0aGVcclxuXHJcbjxpPlViZXJpemVkPC9pPiBlY29ub215IGlzIG1hZGUgcG9zc2libGUgYnkgdGhlIHVuZGVybHlpbmcgcGxhdGZvcm0gb2YgRGVjZW50cmFsaXplZCBUZWNobm9sb2dpZXMuIE1vYmlsZSBzb2NpYWwgbWVkaWEsXHJcblxyXG5pbnRlcm5ldCwgYW5kIGJsb2NrY2hhaW4gdGVjaCBjcmVhdGVzIHRoZSBjb25kaXRpb25zIG5lZWRlZCBmb3IgYSBjb252ZW5pZW50LCBjb21tdW5pdHktYmFzZWQgdHJhbnNhY3Rpb25zLjwvcD5cclxuXHJcblxyXG5cclxuPHA+Qml0Y29pbiBhbmQgRXRoZXJldW0gY3J5cHRvLWNvbnRyYWN0cyBncmFiIHRoZSBoZWFkbGluZXMsIGhvd2V2ZXIgaXQgaXMgdGhlIHZlcnkgbmF0dXJlIG9mIGJsb2NrY2hhaW4mIzM5O3NcclxuXHJcbjxpPmRpc3RyaWJ1dGVkLCBpLmUuIHNoYXJlZCwgPC9pPmxlZGdlciB0aGF0IHJldm9sdXRpb25pemVzIGhvdyBodW1hbnMgaW50ZXJhY3QsIGFuZCBob3cgdGhleSBleGNoYW5nZSBhbmQgc2hhcmUgZ29vZHNcclxuXHJcbmFuZCBzZXJ2aWNlcy4gU28sIGhvdyBtaWdodCBhIHRyYW5zYWN0aW9uYWwsIHplcm8tc3VtIE1hcmtldCBFY29ub215IG1lcmdlIHdpdGggYSBTaGFyaW5nIEVjb25vbXk/PC9wPlxyXG5cclxuXHJcblxyXG48cD5JblxyXG5cclxuPGk+VGhlIFRoaXJkIEluZHVzdHJpYWwgUmV2b2x1dGlvbiwgPC9pPlNvY2lhbCBhbmQgRWNvbm9taWMgdGhlb3Jpc3QsIERyLiBKZXJlbXkgUmlma2luLCBwcm92aWRlcyBpbnNpZ2h0IGludG8gaG93XHJcblxyXG50aGVcclxuXHJcbjxzdHJvbmc+U2hhcmluZyBFY29ub215IGNhbiBncm93IGFsb25nc2lkZSB0aGUgdHJhZGl0aW9uYWwgTWFya2V0IEVjb25vbXk8L3N0cm9uZz4uXHJcblxyXG48c3VwPjE8L3N1cD4gVGhlIHRoZW9yeSBhcmd1ZXMgdGhyZWUgKDMpIGJyZWFrdGhyb3VnaHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGNvbmRpdGlvbnMgbmVjZXNzYXJ5IGZvciBhIG5ldyAmcXVvdDtnZW5lcmFsXHJcblxyXG5wdXJwb3NlIHRlY2hub2xvZ2ljYWwgcGxhdGZvcm0sJnF1b3Q7IGFuZCB0aHVzIGFuIEluZHVzdHJpYWwgUmV2b2x1dGlvbi4gVGhleSBhcmUgbWFuYWdlbWVudC9jb21tbXVuaWNhdGlvbiBvZiBwb3dlcixcclxuXHJcbnNvdXJjZXMgb2YgbmV3IHBvd2VyL2VuZXJneSwgYW5kIHRoZSB0cmFuc3BvcnRhdGlvbiBvZiB0aGlzIHBvd2VyLjwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhlIGZpcnN0IGNvbmRpdGlvbjogTmV3IGZvcm1zIG9mIGNvbW11bmljYXRpb24gdG9cclxuXHJcbjxpPm1hbmFnZTwvaT4gcG93ZXIsIGZvciBleGFtcGxlIHN0ZWFtLXBvd2VyZWQgcHJpbnRpbmcgcHJlc3MsIHRyYW5zLW9jZWFuaWMgdGVsZWdyYXBoLCB0aGVuIGxhdGVyIHRlbGVwaG9uZS4gVGhlIHNlY29uZFxyXG5cclxuY29uZGl0aW9uOiBOZXcgZW5lcmd5IHNvdXJjZXMsIGZvciBleGFtcGxlIHN0ZWFtLWVuZ2luZSB1c2luZyBjb2FsIGFuZCBvdGhlciBmb3NzaWwgZnVlbHMuIFRoZSB0aGlyZCBjb25kaXRpb246XHJcblxyXG5OZXcgbWV0aG9kcyB0byB0cmFuc3BvcnQgZW5lcmd5LCBpLmUuIHRoZSBzdGVhbSBlbmdpbmUgb24gcmFpbHMsIHRoZW4gbGF0ZXIgZm9zc2lsIGZ1ZWwgdmVoaWNsZXMuPC9wPlxyXG5cclxuXHJcblxyXG48cD5TbyB3aGF0JiMzOTtzIG5ldyBhYm91dCB0b2RheT8gNUcgQ2VsbHVsYXIgdGVjaG5vbG9neSBjb3VwbGVkIHdpdGggZGVjZW50cmFsaXplZCwgYmxvY2tjaGFpbiBpbnRlcm5ldDsgU2Vjb25kLCBpbXByb3ZpbmdcclxuXHJcbnNvbGFyICZhbXA7IHdpbmQgcG93ZXIgY291cGxlZCB3aXRoIGRlY2VudHJhbGl6ZWQsIGJpLWRpcmVjdGlvbmFsIGVuZXJneSBncmlkOyBhbmQgdGhpcmQsIHRyYW5zcG9yYXRpb24gYnkgYXV0b21hdGF0ZWQsXHJcblxyXG5kcml2ZXJsZXNzIHNoaXBwaW5nIGZvciBleGFtcGxlLiBTbywgd2h5IGlzIHRoaXMgaW1wb3J0YW50LCBldmVuIHZpdGFsIHRvIGFkYXB0IGEgbmV3IHBhcmFkaWdtIHRoYXQgZml0cyB0aGUgbmV3XHJcblxyXG50ZWNobm9sb2d5PyBleHBvbmVudGlhbCBwb3B1bHN0aW9uIGdyb3d0aCBhbmQgZXhwb25lbnRpYWwgY2xpbWF0ZSBjaGFuZ2VzIGFyZSB0b3Agb2YgdGhlIGxpc3QuPC9wPlxyXG5cclxuXHJcblxyXG48cD5Ccml0YWluJiMzOTtzIGlubm92YXRpb25zIHdpdGggc3RlYW0gJmFtcDsgY29hbCBjaGFyYWN0ZXJpemVkIHRoZSBmaXJzdCBJbmR1c3RyaWFsIFJldm9sdXRpb24sIGFuZCBBbWVyaWNhJiMzOTtzXHJcblxyXG5pbm5vdmF0aW9ucyBpbiB0ZWxlcGhvbmVzLCBvaWwtZnVlbGVkIHZlaGljbGVzLCBhbmQgY2VudHJhbGl6ZWQgdHJhbnNwb3J0YXRpb24gZ3JpZCwgaG93ZXZlciB0aGUgaW5ub3ZhdGlvbnMgaW5cclxuXHJcbnRoZSBwcmVzZW50IGVyYSBhcmUgbXVjaCBxdWlja2VyIHRoYW4gcHJldmlvdXMgZXJhcy4uLiB3aGljaCBtZWFucyB3ZSBhcyBhIHNvY2lldHkgY2FuIGVtYnJhY2UgbW9yZSBwcm9hY3RpdmVseVxyXG5cclxudGhlIE5ldyBQYXJhZGlnbSBuZWVkZWQgdG8gYWRhcHQuPC9wPlxyXG5cclxuXHJcblxyXG48cD5TbywgaG93IGNhbiB3ZSBjaGFuZ2UgdGhlIHdheSB3ZVxyXG5cclxuPGk+dGhpbms8L2k+IGFuZCBob3cgd2VcclxuXHJcbjxpPnJlYWN0PC9pPiBkZXBlbmRzIG9uIG91ciB3b3JsZHZpZXcsIGFuZCBob3cgZGVlcGx5IGVudHJlbmNoZWQuIFRob21hcyBLdWhuJiMzOTtzIDIwMDQgcHVibGljYXRpb24gb25cclxuXHJcbjxzdHJvbmc+XHJcblxyXG48aT5UaGUgU3RydWN0dXJlIG9mIFNjaWVudGlmaWMgUmV2b2x1dGlvbjwvaT5cclxuXHJcbjwvc3Ryb25nPlxyXG5cclxuPHN1cD4zPC9zdXA+IGV4cGxhaW5zIGhvdyBzb2NpZXR5IHdpbGwgZHJhZyBpdHMgZmVldCBpbiB0aGUgZmFjZSBvZiBjaGFuZ2UsIGFuZCBvbmx5IGFmdGVyIGRlY2FkZXMgb2YgY29udHJvdmVyc3kgd2lsbFxyXG5cclxuYSBOZXcgUGFyYWRpZ20gU2hpZnQgZW1lcmdlLiBJbiB0aGlzIG9jY2FzaW9uIGhvd2V2ZXIsIHdlIGFzIGEgc29jaWV0eSBtYXkgbm90IGhhdmUgdGhlIGx1eHVyeSBvZiBkZWNhZGVzIHRvIGFkYXB0XHJcblxyXG50byBOZXcgVGVjaG5vbG9naWVzLCBhcyB0aGUgY2FyYm9uIGhhbmdvdmVyIGZyb20gdGhlIHByZXZpb3VzIEluZHVzdHJpYWwgRXJhIGltcGVyaWxzIHRoZSBzYWZlIGFycml2YWwgb2YgdGhlIG5leHQhPC9wPlxyXG5cclxuXHJcblxyXG48cD4mbmJzcDs8L3A+XHJcblxyXG5cclxuXHJcbjxwPjEuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuZm9ldC5vcmcvYm9va3MvdGhlLXRoaXJkLWluZHVzdHJpYWwtcmV2b2x1dGlvbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5mb2V0Lm9yZy9ib29rcy90aGUtdGhpcmQtaW5kdXN0cmlhbC1yZXZvbHV0aW9uLzwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+Mi5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5lY29ub21pc3QuY29tL25vZGUvMjE1NTMwMTdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5lY29ub21pc3QuY29tL25vZGUvMjE1NTMwMTc8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjMuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly9wcm9qZWt0aW50ZWdyYWNpamEucHJhdm8uaHIvX2Rvd25sb2FkL3JlcG9zaXRvcnkvS3Vobl9TdHJ1Y3R1cmVfb2ZfU2NpZW50aWZpY19SZXZvbHV0aW9ucy5wZGZcIlxyXG5cclxudGFyZ2V0PVwiX2JsYW5rXCI+My4gS3VobiwgVGhvbWFzLCBUaGUgU3RydWN0dXJlIG9mIFNjaWVudGlmaWMgUmV2b2x1dGlvbnMsIDwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwibWFyIDE4LTAzIC0wOVwiIGlkPVwiMTgtMDMtMDlcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggOXRoLCAyMDE4PC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+JiMzOTtBbGV4YSwgY2FuIHlvdSBsYXVnaD8mIzM5OzwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5BbGV4YSBoYXMgbWFkZSBoZWFkbGluZXMgYWJvdXQgcmVwb3J0cyBvZiB1bmV4cGxhaW5lZCBsYXVnaHRlciByZXNwb25zZXNcclxuXHJcbjxzdXAgaWQ9XCIwMzA5LTFcIj4xPC9zdXA+LiBJbmZvcm1hdGlvbiBsaWtlIHRoaXMgbmVlZHMgYVxyXG5cclxuPGk+XHJcblxyXG48c3Ryb25nPmZhY3QtY2hlY2s8L3N0cm9uZz5cclxuXHJcbjwvaT4gJmFncmF2ZTsgbGEgU25vcGVzLmNvbS5cclxuXHJcbjxzdXAgaWQ9XCIwMzA5LTJcIj4yPC9zdXA+IEFuZCwgd2hldGhlciBvciBub3QgQWxleGEgbWlzaGVhcmQsICZxdW90O0FsZXhhLCBsYXVnaCZxdW90Oywgb3Igbm90LCBpcyBsZXNzIGltcG9ydGFudCB0aGFuIHRoZVxyXG5cclxuPGk+c29jaWFsbHktaW50cnVzaXZlIGNvbnNlcXVlbmNlczwvaT4gb2Ygc2ltcGxlIGFwcC1kZXZlbG9wbWVudCBlcnJvcnMuIFRoZSBmaXJzdCBpc3N1ZSBpcyBzaW1wbHkgdGhhdCBwcm9ncmFtbWVyXHJcblxyXG48c3Ryb25nPmxvZ2ljIDwvc3Ryb25nPiBhbmQgdXNlci1pbnRlcmZhY2UgaW50dWl0aW9uIHNob3VsZCBiZSBhcyBjbGVhciAoYW5kIGdlbmVyYWxpemVkKSBhcyBwb3NzaWJsZS4gVGhpcyBpcyBlYXNpZXIgc2FpZFxyXG5cclxudGhhbiBkb25lLCBmb3IgZXhhbXBsZSB0aGUgcmVjZW50IGNhc2Ugb2YgSGF3YWlpJiMzOTtzIG1pc3Rha2VuXHJcblxyXG48aT5pbmNvbWluZy1iYWxsaXN0aWMtbWlzc2lsZSB3YXJuaW5nIHN5c3RlbTwvaT4uXHJcblxyXG48c3VwIGlkPVwiMDMwOS0zXCI+Mzwvc3VwPiBBcyBpdCB0dXJuZWQgb3V0LCB0aGUgZHJvcGRvd24tbWVudSBkZXNpZ24gcGxhY2VkIHRoZSAmcXVvdDtTZW5kIFRlc3QgV2FybmluZyZxdW90OyBuZXh0IHRvICZxdW90O1NlbmQgV2FybmluZyZxdW90O1xyXG5cclxuaW4gYW4gdW5pbnR1aXRpdmUsIGZhaWwtcG9zc2libGUgbWFubmVyLiBPb3BzLjwvcD5cclxuXHJcblxyXG5cclxuPHA+V2hpbGUgbW9zdCBmb2N1cyBvbiBBbGV4YSBldCBhbC4mIzM5O3MgYWN0aW9ucyBhbmQgYWJpbGl0ZXMsIGluIHRoZSBuYW1lIG9mIGNhdXRpb24sIGJ1dCByYXRoZXIgdGhlIGxhcmdlciBpc3N1ZVxyXG5cclxuZmFsbHMgb24gaG93IG11Y2ggd2UgYWxsb3cgb3Vyc2VsdmVzIHRvIG1lbnRhbGx5IGRlcGVuZCBvbiB0ZWNoIGZvciB0aGluZ3MuPC9wPlxyXG5cclxuXHJcblxyXG48cD4xLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJ1enpmZWVkLmNvbS92ZW5lc3Nhd29uZy9hbWF6b24tYWxleGEtZGV2aWNlcy1hcmUtbGF1Z2hpbmctY3JlZXB5P3V0bV90ZXJtPS51bTZQMThhOGEjLmNnZ2dQMmoyalwiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5idXp6ZmVlZC5jb20vdmVuZXNzYXdvbmcvYW1hem9uLWFsZXhhLWRldmljZXMtYXJlLWxhdWdoaW5nLWNyZWVweT91dG1fdGVybT0udW02UDE4YThhIy5jZ2dnUDJqMmo8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjIuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuc25vcGVzLmNvbS9mYWN0LWNoZWNrL2lzLWFtYXpvbnMtYWxleGEtZW1pdHRpbmctdW5wcm9tcHRlZC1jcmVlcHktbGF1Z2hpbmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuc25vcGVzLmNvbS9mYWN0LWNoZWNrL2lzLWFtYXpvbnMtYWxleGEtZW1pdHRpbmctdW5wcm9tcHRlZC1jcmVlcHktbGF1Z2hpbmcvPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cD4zLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9uZXdzL21vcm5pbmctbWl4L3dwLzIwMTgvMDEvMTYvdGhhdC13YXMtbm8td3JvbmctYnV0dG9uLWluLWhhd2FpaS10YWtlLWEtbG9vay8/dXRtX3Rlcm09LmEyYWE2NTMyOTAwMlwiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vbmV3cy9tb3JuaW5nLW1peC93cC8yMDE4LzAxLzE2L3RoYXQtd2FzLW5vLXdyb25nLWJ1dHRvbi1pbi1oYXdhaWktdGFrZS1hLWxvb2svP3V0bV90ZXJtPS5hMmFhNjUzMjkwMDI8L2E+XHJcblxyXG48L3A+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTJcIiBpZD1cIjE4LTAzLTA4XCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5Tb2Npb2xvZ3kgVG9tb3Jyb3chPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5NYXJjaCA4LCAyMDE4PC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+MS40IE1pbGxpb24gUmVhc29ucyBmb3IgTW9yZSBXb21lbiBpbiBUZWNoLCBQYXJ0IElJXHJcblxyXG48YnIgLz5cclxuXHJcbjxiciAvPiAqIENvbnRpbnVhdGlvbiBvZiBXb21lbiBpbiBUZWNoIFRoZW1lIGZyb21cclxuXHJcbjxhIGhyZWY9XCIjMTgtMDItMjNcIj5GZWIuIDIzcmQgQmxvZzwvYT5cclxuXHJcbjwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5UaGlzIGlzIHRoZSBmaXJzdCB0aW1lIGluIGh1bWFuIGhpc3RvcnkgdGhhdCB3ZSBoYXZlIHRoZSBhYmlsaXR5IHRvIHNlZSBlbm91Z2ggYWJvdXQgb3Vyc2VsdmVzIHRoYXQgd2UgY2FuIGhvcGUgdG9cclxuXHJcbmFjdHVhbGx5IGJ1aWxkIHNvY2lhbCBzeXN0ZW1zIHRoYXQgd29yayBxdWFsaXRhdGl2ZWx5IGJldHRlciB0aGFuIHRoZSBzeXN0ZW1zIHdlJiMzOTt2ZSBhbHdheXMgaGFkLjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPi0tQXV0aG9yIHVua25vd248L3A+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5NeSBGZWJydWFyeSAyM3JkIFBvc3Qgb24gd29tZW4gaW4gdGVjaCBmb2N1c2VkIG9uIHRoZVxyXG5cclxuPGk+d29ya2ZvcmNlIGRlbWFuZDwvaT4gZm9yIG1vcmUgd29tZW4gaW4gdGVjaCBwb3NpdGlvbnMsIGhvd2V2ZXIgdG9kYXkgSSYjMzk7bSB3cml0aW5nIG9uIHRoZVxyXG5cclxuPHN0cm9uZz5cclxuXHJcbjxpPnNvY2lhbCBuZWVkPC9pPiBmb3IgbW9yZSBmZW1hbGUgaW5zaWdodCB3aXRoaW4gdGhlIHRlY2ggd29ya2ZvcmNlPC9zdHJvbmc+ICwgZ2l2ZW4gdGhhdCBwcm9ncmFtbWluZyB3aWxsIGluY3JlYXNpbmdseVxyXG5cclxuc2hhcGUgb3VyIGZ1dHVyZSBpbnN0aXR1dGlvbnMuIFRoaXMgbWVhbnMgdGhhdCBldmVyeSBpbnN0aXR1dGlvbiwgd2hldGhlciBwcml2YXRlIGhvc3BpdGFscywgbm9uLXByb2ZpdCBjaGFyaXR5XHJcblxyXG5mb3VuZGF0aW9ucywgb3IgZ292ZXJubWVudCBidXJlYXVzLCB3aWxsIGVmZmVjdGl2ZWx5IHJlc3RydWN0dXJlIChvcHRpbWl6ZSkgdGhlaXIgb3duIG9yZ2FuaXphdGlvbmFsIHN0cnVjdHVyZSBpblxyXG5cclxuYW4gaW5jcmVhc2luZ2x5XHJcblxyXG48aT5kYXRhLWRyaXZlbjwvaT4gcGFyYWRpZ20uIEZyb20gYSBTb2Npb2xvZ3kgb2YgT3JnYW5pemF0aW9ucyBwZXJzcGVjdGl2ZSwgdGhlIGNoYW5nZXMgdG8gY29tZSBhcmUgYnJlYXRoLXRha2luZyB0b1xyXG5cclxuY29uc2lkZXIuPC9wPlxyXG5cclxuXHJcblxyXG48cD5TbyB3aHkgd29tZW4/IFdoZXJlIGNvdWxkIEkgc3RhcnQ/IEJldHRlciBzdGF0ZWQsIHdoeSBpcyBhIHF1aW50ZXNzZW50aWFsbHkgaW1wb3J0YW50IGpvYiBzZWN0b3IsIGEgc2VjdG9yIGluIGRlc3BlcmF0ZVxyXG5cclxubmVlZCBmb3IgaW5zaWdodCwgY29tcHJpc2VkIHByaW1hcmlseSBvZiBtZW4/XHJcblxyXG48c3VwIGlkPVwib25lXCI+MTwvc3VwPiBUaGUgZmFjdHMgYXJlIGV2aWRlbnQ6IH4xNS0yMCUgb2Ygd29tZW4gY29tcHJpc2luZyB0ZWNoIHBvc2l0aW9ucy5cclxuXHJcbjxzdXAgaWQ9XCJ0d29cIj4yPC9zdXA+IE51bWJlcnMgYXNpZGUsIEkgYXJndWUgdGhlcmUgaXMgYSBxdWludGVzc2VudGlhbCBzb2NpZXRhbCBuZWVkIGZvciBtb3JlIHdvbWVuIGluIHRlY2g6IFRoaXMgaXMgYmVjYXVzZSBjb21wdXRpbmdcclxuXHJcbmFuZCB1bmRlcnN0YW5kaW5nIGRhdGEgaGFzIGNoYW5nZWQgc2luY2UgdGhlIGRhdGEgY29sbGVjdGlvbiBmcm9tIFdlYiAyLjAgKG1vYmlsZSksIGJlY29taW5nIG1vcmUgbmV0d29ya2VkIGFuZFxyXG5cclxucmVsYXRpb25hbC48L3A+XHJcblxyXG5cclxuXHJcbjxwPlRoZSBjaGFsbGVuZ2UgZm9yIHNvY2lldHkgaW4gdGhpcyBhZ2UgaXMgaGlzdG9yaWMsIGFuZCB3b21lbiBtdXN0IGFic29sdXRlbHkgYmUgaW5jbHVkZWQgaW4gdGhlIHByb2Nlc3Mgb2YgdGhlIGFnZTpcclxuXHJcblBsZWFzZSBjb25zaWRlciwgdGhhdCBpbiB0aGUgMTY1MCYjMzk7cywgdGhlIGludmVudGlvbiBvZiB0aGUgbWljcm9zY29wZSBvcGVuZWQgYSBuZXcgd29ybGQgb2YgZGF0YSBhbmRcclxuXHJcbjxpPmluZm9ybWF0aW9uPC9pPiBhYm91dCB0aGUgYmFjdGVyaW9sb2dpY2FsLCBtaWNyb3Njb3BpYyBzdXJyb3VuZGluZ3MtLWhpdGhlcnRvIGJsaW5kIHRvIGFsbC4gTGlrZXdpc2UsIHRoZSB0ZWxlc2NvcGVcclxuXHJcbmhhcyBhbGxvd2VkIHVzIGFzIGEgc29jaWV0eSB0byBleHBsb3JlIHRoZSBvdXRlciB1bml2ZXJzZSBhbmQgZWFydGgmIzM5O3MgcG9zaXRpb24gd2l0aGluIGl0LjwvcD5cclxuXHJcblxyXG5cclxuPHA+Tm93LCB0aGUgaW52ZW50aW9ucyBvZiBtYWNoaW5lLWxlYXJuaW5nLCBjb21wdXRpbmcgY291cGxlZCB3aXRoIEJpZyBEYXRhIGFuYWx5dGljcywgYWxsb3dzIHVzIHRvIGV4cGxvcmUgKGFuZCBtYW5hZ2UpXHJcblxyXG5hIHVuaXZlcnNlIG9mIGtub3dsZWRnZS0tYWJvdXRcclxuXHJcbjxpPm91cnNlbHZlczwvaT4sIGh1bWFuIHNvY2lldHktLXdpdGggdW5mYXRob21hYmx5IGNvbXBsZXgsIHVuc3RydWN0dXJlZCByZWxhdGlvbmFsIGRhdGEgc3RydWN0dXJlcy4gQWNjZXNzaW5nIHRoZVxyXG5cclxuZGF0YSB0byBjb21wdXRlci1yZWFkYWJsZSBmb3JtIGlzIG9uZSB0aGluZywgYnV0IG1lYW5pbmcgaW4gZGF0YSBpcyBpbmFjY2Vzc2libGUgdW50aWwgdGhlXHJcblxyXG48aT5vdXRwdXQ8L2k+IGNhbiBiZVxyXG5cclxuPGk+cmUtPC9pPnByb2dyYW1tZWQgaW50byBtZWFuaW5nZnVsLCBodW1hbi1yZWFkYWJsZSBkYXRhLCBpLmUuIGluZm9ybWF0aW9uLiBUaGlzIGxhdHRlciBzdGFnZSBvZiBkZXZlbG9wbWVudCBpcyB0aGVcclxuXHJcbmtleSBjaGFsbGVuZ2UtLWZvciB3aGljaCBzdWNjZXNzIGRlcGVuZHMgb24gcmVwcmVzZW50YXRpdmUgZmVtYWxlIHBhcnRpY2lwYXRpb24gaW4gVGVjaC48L3A+XHJcblxyXG5cclxuXHJcbjxwPkFkZGluZyB0byB0aGUgY2hhbGxlbmdlIG9mIGZpbmRpbmcgbWVhbmluZ2Z1bCB0cmVuZHMgaXMgdGhlIGJhY2tkcm9wIG9mIG5vaXNlIGZyb20gc3B1cmlvdXMgdmFyaWFibGVzLiBUaGlzIGlzIGFraW5cclxuXHJcbnRvIGZpbmRpbmcgYSBuZWVkbGUgaW4gYW4gaW5jcmVhc2luZ2x5IGNvbXBsZXggYW5kIGdyb3dpbmcgaGF5c3RhY2suPC9wPlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+V2hhdCYjMzk7cyBkaWZmZXJlbnQgbm93IGFuZCBoYXMgY2hhbmdlZCBpcyBpdCYjMzk7cyBubyBsb25nZXIgYWJvdXQgdGFraW5nIHRoaXMgZGF0YSwgcHV0dGluZyBpdCBpbnRvIGEgY29tcHV0ZXJcclxuXHJcbnJ1bm5pbmcgYSBjYWxjdWxhdGlvbiBhbmQgZ2V0dGluZyBhIGJhbGFuY2Ugc2hlZXQgYW5zd2VyIC4uLjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPldoYXQmIzM5O3MgaW1wb3J0YW50IG5vdyBpcyB3aGF0IGlzIHRoZSBjb250ZXh0IG9mIHRoZSBkYXRhLCB3aGF0IGlzIGl0IGNvbm5lY3RlZCB0bywgd2hhdCBlZmZlY3QgaXMgaXQgaGF2aW5nIG9uXHJcblxyXG5kYXRhIGFyb3VuZCBpdC4uLiBJdCYjMzk7cyBiYXNpY2FsbHkgYSBuZXR3b3JrIG9mIHRoZSBkYXRhLCBpdCYjMzk7cyBubyBsb25nZXIgc29ydCBvZiB0YWJ1bGFyIGNvbHVtbnMsIG9mIHJvd3NcclxuXHJcbm9mIGRhdGEsIGl0JiMzOTtzXHJcblxyXG48aT5pbnRlcmNvbm5lY3RlZCBwYXR0ZXJuczwvaT4uXHJcblxyXG48YnIgLz4gLS1UaW0gQ29vazwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhpcyBxdW90ZSBtZWFucyB0aGF0IGFzIHdlIG1vdmUgYXdheSBmcm9tIHJ1bGUtYmFzZWQsIG1lY2hhbmlzdGljIGRhdGEgYW5hbHl0aWNzIHRvd2FyZCBtb3JlIGNvbXBsZXgsIHJlbGF0aW9uYWxcclxuXHJcbmFuZCBuZXR3b3JrZWQgZGF0YSwgd2UgbmVlZCBhbiBlcXVhbGx5IGNvbXBsZXggcGFyYWRpZ20gdG8ga2VlcCB1cC4gRXhjbHVkaW5nIHRoZSBmZW1hbGUgbWluZCBmcm9tIHRoaXMgY2hhbGxlbmdlXHJcblxyXG5pcyBub3Qgc2ltcGx5IGEgY2x1bXN5LCBteW9waWMgbWlzdGFrZS4gV29yc2UgeWV0LCBzbyBsb25nIGFzIHRoZSBUZWNoIEluZHVzdHJ5IHJlbWFpbnMgZ2VuZGVyIGxvcC1zaWRlZCwgVGVjaCB3aWxsXHJcblxyXG5pbmNyZWFzaW5nbHkgcmVzZW1ibGUgYW5vdGhlciBteW9waWMgYmVhc3QsIGEgY2F2ZS1kd2VsbGVyIG5hbWVkIEN5Y2xvcHMuPC9wPlxyXG5cclxuXHJcblxyXG48cD4xLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmh1ZmZpbmd0b25wb3N0LmNvbS8yMDE1LzAzLzI3L3dvbWVuLWluLXRlY2hfbl82OTU1OTQwLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5odWZmaW5ndG9ucG9zdC5jb20vMjAxNS8wMy8yNy93b21lbi1pbi10ZWNoX25fNjk1NTk0MC5odG1sPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cD4yLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vZmFpcnlnb2Rib3NzLmNvbS9hcnRpY2xlcy93b21lbi1pbi10ZWNoLWZhY3RzLWZpZ3VyZXMtYW5kLXBlcmNlbnRhZ2VzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9mYWlyeWdvZGJvc3MuY29tL2FydGljbGVzL3dvbWVuLWluLXRlY2gtZmFjdHMtZmlndXJlcy1hbmQtcGVyY2VudGFnZXM8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjMuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuYWF1dy5vcmcvcmVzZWFyY2gvd2h5LXNvLWZldy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5hYXV3Lm9yZy9yZXNlYXJjaC93aHktc28tZmV3LzwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwibWFyIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDMtMDdcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggNywgMjAxODwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPkFib3V0IHRoZSBBcHJpbCAyMyBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgRkNDIE5ldCBOZXV0cmFsaXR5IExhd3M6XHJcblxyXG48YnIgLz4gVGhlIENvbWluZyBCYXR0bGUgb2YgU3RhdGVzJiMzOTsgdmVyc3VzIEZlZGVyYWwgUmlnaHRzIFBhcnQgSUk8L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+V2FzaGluZ3RvbiYjMzk7cyBhc3NlcnRpb24gb2YgU3RhdGVzJiMzOTsgUmlnaHRzIHllc3RlcmRheSBtYXkgYXVndXIgdGhlIGZpcnN0IG9mIG1hbnkgbGF3c3VpdHMgb3ZlciBjb250cm9sIG92ZXJcclxuXHJcbmJhbmR3aWR0aC48L3A+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTJcIiBpZD1cIjE4LTAzLTA2XCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPk1hcmNoIDYsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5BcHJpbCAyMyBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgRkNDIE5ldCBOZXV0cmFsaXR5IExhd3M6XHJcblxyXG48YnIgLz4gVGhlIENvbWluZyBCYXR0bGUgb2YgU3RhdGVzJiMzOTsgdmVyc3VzIEZlZGVyYWwgUmlnaHRzPC9oNj5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPk5ldCBOZXV0cmFsaXR5IFJ1bGVzLCBwb3RlbnRpYWxseSBvbmUgb2YgdGhlIG1vcmUgaW1wb3J0YW50IHNldCBvZiBJbmRpdmlkdWFsIFJpZ2h0cyBmb3IgdXMgYXMgY2l0aXplbnMgaW4gdGhlIHRlY2hcclxuXHJcbmFnZSwgd2lsbCBzb29uIHVuZGVyZ28gdGhlIHJ1bGUgY2hhbmdlcyB2b3RlZCBieSB0aGUgRmVkZXJhbCBDb21tdW5pY2F0aW9ucyBDb21taXNzaW9uIChGQ0MpIHRoaXMgcGFzdCBEZWNlbWJlci5cclxuXHJcbkluIGEgbnV0c2hlbGwsIHRoZSBJbnRlcm5ldCBTZXJ2aWNlIFByb3ZpZGVycyAoSVNQJiMzOTtzKSwgZS5nLiBDb21jYXN0LCBDb3gsIFZlcml6b24gYXJlIGdyYW50ZWQgdGhlIHBvd2VyLS1hc1xyXG5cclxuYSBUaXRsZSBJICZxdW90O2luZm9ybWF0aW9uIHNlcnZpY2UmcXVvdDstLXRvIHNsb3cgZG93biB0cmFmZmljLCBtYWtlIGZhc3QtICZhbXA7IHNsb3ctbGFuZXMuIE9mIGNvdXJzZSB0aGlzIGlzXHJcblxyXG5iYWQgbmV3cyBmb3IgaW50ZXJuZXQtdXNlcnMgYmVjYXVzZSBldmVuIHByZW1pdW0gdXNlcnMgbWF5IGV4cGVyaWVuY2UgJnF1b3Q7dGhyb3R0bGluZyZxdW90OyBpZiB1c2luZyB0aGUgSVNQJiMzOTtzXHJcblxyXG5wcmVmZXJyZWQgYXBwcy4gVGhlIG9ubHkgc3RpcHVsYXRpb24gaG9sZHMgdGhhdCB0aGUgSVNQJiMzOTtzIHJ1bGVzIGFyZSBtYWRlIHB1YmxpYy4gSG93ZXZlciwgMjEgc3RhdGVzIGFyZSBicmluZ2luZ1xyXG5cclxubGF3c3VpdHMgdG8gZmlnaHQgdGhlc2UgY2hhbmdlcywgYW5kIHRoZSBmaXJzdCBhc3NlcnRpb24gb2YgU3RhdGUgTGF3IGJ5IFdhc2hpbmd0b24gU3RhdGUgdG9kYXk6PC9wPlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+VGhlIEZDQyBpcyBhbHJlYWR5IGVtYnJvaWxlZCBpbiBhIHZhcmlldHkgb2YgbGF3c3VpdHMgcmVsYXRlZCB0byBpdHMgcm9sbGJhY2sgb2YgbmV0IG5ldXRyYWxpdHkgcnVsZXMsIGluY2x1ZGluZ1xyXG5cclxuYW4gZWZmb3J0IGZyb20gMjEgc3RhdGUgYXR0b3JuZXlzIGdlbmVyYWwgdG8gZ2V0IGEgY291cnQgdG8gYmxvY2sgdGhlIEZDQyYjMzk7cyBtb3ZlLjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPiZxdW90O1RoaXMgaXMgc3ltYm9saWMgcG9saXRpY3MsIGJlY2F1c2UgdGhlIHN0YXRlcyBrbm93IGl0IGlzIGlsbGVnYWwgdG8gZG8sJnF1b3Q7IFJvc2x5biBMYXl0b24sIGEgdmlzaXRpbmcgc2Nob2xhclxyXG5cclxuYXQgdGhlIEFtZXJpY2FuIEVudGVycHJpc2UgSW5zdGl0dXRlLCB0b2xkIE5CQyBOZXdzLiAmcXVvdDtCdXQgdGhleSBjYW4gcHV0IHJ1bGVzIG9uIHRoZSBib29rIGFuZCBtYWtlIGl0IGxvb2sgbGlrZVxyXG5cclxudGhleSYjMzk7cmUgZG9pbmcgc29tZXRoaW5nLiZxdW90OyBUaGUgRkNDIGlzIGFscmVhZHkgZW1icm9pbGVkIGluIGEgdmFyaWV0eSBvZiBsYXdzdWl0cyByZWxhdGVkIHRvIGl0cyByb2xsYmFja1xyXG5cclxub2YgbmV0IG5ldXRyYWxpdHkgcnVsZXMsIGluY2x1ZGluZyBhbiBlZmZvcnQgZnJvbSAyMSBzdGF0ZSBhdHRvcm5leXMgZ2VuZXJhbCB0byBnZXQgYSBjb3VydCB0byBibG9jayB0aGUgRkNDJiMzOTtzXHJcblxyXG5tb3ZlLlxyXG5cclxuPHN1cD4xPC9zdXA+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPlMgVGhlIGJpZyBxdWVzdGlvbiBhcmlzZXMgb3ZlclxyXG5cclxuPGk+d2hvPC9pPiBoYXMganVyaXNkaWN0aW9uIGJldHdlZW4gdGhlIFN0YXRlcyYjMzk7IGFuZCBGZWRlcmFsIGF1dGhvcml0eTsgeWV0IG9uZSB0aGluZyBpcyBjZXJ0YWluLCB0aGUgY29taW5nIGJhdHRsZVxyXG5cclxuZm9yIHByb3RlY3RpbmcgY2l0aXplbnMmIzM5OyByaWdodHMgd2lsbCB0YWtlIHBsYWNlIG92ZXIganVyaXNkaWN0aW9uIG9mIEludGVybmV0IEJhbmR3aWR0aCB0dXJmLjwvcD5cclxuXHJcblxyXG5cclxuPHA+XHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cubmJjbmV3cy5jb20vdGVjaC90ZWNoLW5ld3Mvd2FzaGluZ3Rvbi1zdGF0ZS1wYXNzZXMtbmV0LW5ldXRyYWxpdHktbGF3LXN0YXRlcy1wdXNoLWJhY2stYWdhaW5zdC1uODU0MDg2XCJcclxuXHJcbnRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3Lm5iY25ld3MuY29tL3RlY2gvdGVjaC1uZXdzL3dhc2hpbmd0b24tc3RhdGUtcGFzc2VzLW5ldC1uZXV0cmFsaXR5LWxhdy1zdGF0ZXMtcHVzaC1iYWNrLWFnYWluc3Qtbjg1NDA4NjwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+Jm5ic3A7PC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTJcIiBpZD1cIjE4LTAzLTA1XCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5IZWFsdGh5IFRvZGF5ITwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggNSwgMjAxODwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPkEgUmV0dXJuIHRvIHRoZSBRdWVzdGlvbiBvZiBHdW5zLCBHZXJtcywgYW5kIFN0ZWVsOiBQYXJ0IElJIGFuZCB0aGUgR2VybXM8L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+R2VybXMgcHJlc2VudCBhIHRpbWVseSB0b3BpYyBmb3IgdG9kYXksIGdpdmVuIHRoZSBlc3BlY2lhbGx5IHZpcnVsZW50XHJcblxyXG48c3Ryb25nPkZsdSBWaXJ1cyBzdHJhaW48L3N0cm9uZz4uIE1hbnksIGxpa2UgbWUsIGhhdmUgd29uZGVyZWQgd2h5IG91ciAxOTQwJiMzOTtzLWVyYVxyXG5cclxuPHN1cD4xPC9zdXA+IHRlY2hub2xvZ3kgaW4gRmx1IFZhY2NpbmUgZmFicmljYXRpb24gd291bGRuJiMzOTt0IGludml0ZSBtb3JlIGlubm92YXRpdmUgc29sdXRpb25zLiBXaXRob3V0IGZlaWduaW5nIGFueVxyXG5cclxubWVkaWNhbCBleHBlcnRpc2UsIEkgaGF2ZSB0byBzdGlsbCBhc2sgYWJvdXQgdGhlIHByb2dyZXNzIG1hZGUgd2l0aCB0aGUgZXZlci1tdXRhdGluZy0taS5lLiwgZHJpZnRpbmctLUZsdSB2aXJ1cyYjMzk7XHJcblxyXG5zdXJmYWNlIHByb3RlaW4gJnF1b3Q7aGVhZCwmcXVvdDsgY2FsbGVkIGhlbWFnbHV0aW5pbi4gVGhpcyBzdHJhdGVneSAmcXVvdDtndWVzc2VzIHJpZ2h0JnF1b3Q7IHZlcnkgZWZmZWN0aXZlbHksXHJcblxyXG5hbmQgcHJvdmlkZXMgYW4gZWZmZWN0aXZlIHNvbHV0aW9uIGZvciBtb3N0LCBpbiBtb3N0IHllYXJzLiBZZXQgdGhpcyB3aW50ZXIgaGFzIHJldmVhbGVkIHRoYXQgZWZmZWN0aXZlbmVzcyBzdGF0aXN0aWNzXHJcblxyXG5hcmVcclxuXHJcbjxpPm5vdCBhbHdheXM8L2k+IGluIG91ciBmYXZvci48L3A+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5Gb3IgbWFueSBkZWNhZGVzLCByZXNlYXJjaGVycyBiZWxpZXZlZCB0aGUgZmx1IHZhY2NpbmUgb2ZmZXJlZCBzb2xpZCBwcm90ZWN0aW9uIGlmIGl0IHdhcyBhIGdvb2QgbWF0Y2ggdG8gdGhlIGNpcmN1bGF0aW5nXHJcblxyXG5zdHJhaW5zOyBzdHVkaWVzIGZyb20gdGhlIDE5NDBzIHRocm91Z2ggdGhlIDE5NjBzIHJvdXRpbmVseSBzaG93ZWQgYW4gZWZmaWNhY3kgb2YgNzAlIHRvIDkwJS4gQnV0IHRob3NlIHN0dWRpZXNcclxuXHJcbnJlbGllZCBvbiBhIG1pc2xlYWRpbmcgbWV0aG9kb2xvZ3kuPC9wPlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+RGFudXRhIFNrb3dyb25za2ksIGFuIGVwaWRlbWlvbG9naXN0IGF0IHRoZSBCQyBDZW50cmUgZm9yIERpc2Vhc2UgQ29udHJvbCBpbiBWYW5jb3V2ZXIsIENhbmFkYSwgaW5zdGVhZCBibGFtZXMgbXV0YXRpb25zXHJcblxyXG5pbiB0aGUgdmFjY2luZSBzdHJhaW4gaXRzZWxmLiBUaGUgbW9zdCBjb21tb24gaW5mbHVlbnphIHZhY2NpbmUgY29udGFpbnMgYW4gJnF1b3Q7aW5hY3RpdmF0ZWQmcXVvdDsgdmlydXMsIHdoaWNoXHJcblxyXG5tYW51ZmFjdHVyZXJzIGdyb3cgaW4gY2hpY2tlbiBlZ2dzLiBBcyBTa293cm9uc2tpJiMzOTtzIHRlYW0gZmlyc3QgcmVwb3J0ZWQgaW4gMjAxNCwgdGhlIHZpcnVzIGNhbiBtdXRhdGUgd2hpbGVcclxuXHJcbml0IGlzIGdyb3dpbmcgaW4gdGhlIGVnZ3MsIHJlc3VsdGluZyBpbiBhIHZhY2NpbmUgdW5hYmxlIHRvIGJsb2NrIGNpcmN1bGF0aW5nIHN0cmFpbnMuXHJcblxyXG48c3VwPjE8L3N1cD5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+RWFybGllciwgSSBjYXN1YWxseSBtZW50aW9uZWQgJnF1b3Q7Z3Vlc3NpbmcmcXVvdDssIHlldCB3aXRoIGdyZWF0IHJlc3BlY3QsIHRoZSBzY2llbmNlIGJlaGluZCBlc3RpbWF0aW5nIHRoZSBmbHVcclxuXHJcbnZpcnVzIGJldHdlZW4gdGhlIHRpbWUgb2YgUiAmYW1wOyBELCBmYWJyaWNhdGlvbiwgYW5kIHRoZSBmbHVcclxuXHJcbjxpPnNlYXNvbjwvaT4uIChUaGlzIGFudGlnZW5pYyBkcmlmdCwgbm90IHRvIGJlIGNvbmZ1c2VkIHdpdGhcclxuXHJcbjxpPkFudGlnZW5pYyBTaGlmdDwvaT4gaW4gd2hpY2ggdGhlIEZsdSBWaXJ1cyBtYWtlcyBhbiBhYnJ1cHQgY2hhbmdlLikgSSYjMzk7bGwgbGV0IHRoZSBDREMgYWJicmV2aWF0ZSB0aGlzOjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPk9uZSB3YXkgdGhleSBjaGFuZ2UgaXMgY2FsbGVkICZsZHF1bzthbnRpZ2VuaWMgZHJpZnQuJnJkcXVvOyBUaGVzZSBhcmUgc21hbGwgY2hhbmdlcyBpbiB0aGUgZ2VuZXMgb2YgaW5mbHVlbnphIHZpcnVzZXNcclxuXHJcbnRoYXQgaGFwcGVuIGNvbnRpbnVhbGx5IG92ZXIgdGltZSBhcyB0aGUgdmlydXMgcmVwbGljYXRlcy4gVGhlc2Ugc21hbGwgZ2VuZXRpYyBjaGFuZ2VzIHVzdWFsbHkgcHJvZHVjZSB2aXJ1c2VzIHRoYXRcclxuXHJcbmFyZSBwcmV0dHkgY2xvc2VseSByZWxhdGVkIHRvIG9uZSBhbm90aGVyLCB3aGljaCBjYW4gYmUgaWxsdXN0cmF0ZWQgYnkgdGhlaXIgbG9jYXRpb24gY2xvc2UgdG9nZXRoZXIgb24gYSBwaHlsb2dlbmV0aWNcclxuXHJcbnRyZWUuIFZpcnVzZXMgdGhhdCBhcmUgY2xvc2VseSByZWxhdGVkIHRvIGVhY2ggb3RoZXIgdXN1YWxseSBzaGFyZSB0aGUgc2FtZSBhbnRpZ2VuaWMgcHJvcGVydGllcyBhbmQgYW4gaW1tdW5lIHN5c3RlbVxyXG5cclxuZXhwb3NlZCB0byBhbiBzaW1pbGFyIHZpcnVzIHdpbGwgdXN1YWxseSByZWNvZ25pemUgaXQgYW5kIHJlc3BvbmRcclxuXHJcbjxzdXA+Mjwvc3VwPi48L3A+XHJcblxyXG5cclxuXHJcbjxwPlNvLCB1bHRpbWF0ZWx5LCB0aGUgc3RyYXRlZ3kgaXMgdG8gZXN0aW1hdGUgdGhlIGZvcm0sIGxvY2F0aW9uLCBvZiB0aGF0IHZpcnVzLS13aGF0IGl0IHdpbGwgbG9vayBsaWtlLS1hdCBhIHBhcnRpY3VsYXJcclxuXHJcbnBlcmlvZCBlYWNoIHllYXIuIFRoaXMgaW1wbGljYXRlcyBhIHN0cmF0ZWd5IHRvIGVzdGltYXRlIHRoZSB0cmFqZWN0b3J5LCBzdGFnZSBieSBzdGFnZSwgb2YgdGhpcyB2aXJ1cywgaS5lLiBhIGxvbmdpdHVkaW5hbFxyXG5cclxudGltZS1zZXJpZXMgbW9ycGhvbG9neSwgZWFjaCB5ZWFyLiBUaGUgYXJ0aWNsZSBtYWtlcyB0aGlzIHBvaW50IG1vcmUgcHJlY2lzZTo8L3A+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5CdXQgdGhlc2Ugc21hbGwgZ2VuZXRpYyBjaGFuZ2VzIGNhbiBhY2N1bXVsYXRlIG92ZXIgdGltZSBhbmQgcmVzdWx0IGluIHZpcnVzZXMgdGhhdCBhcmUgYW50aWdlbmljYWxseSBkaWZmZXJlbnQgKGZ1cnRoZXJcclxuXHJcbmF3YXkgb24gdGhlIHBoeWxvZ2VuZXRpYyB0cmVlKS4gV2hlbiB0aGlzIGhhcHBlbnMsIHRoZSBib2R5JnJzcXVvO3MgaW1tdW5lIHN5c3RlbSBtYXkgbm90IHJlY29nbml6ZSB0aG9zZSB2aXJ1c2VzLlxyXG5cclxuPHN1cD4yPC9zdXA+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPlBldHJpIGRpc2hlcyBhc2lkZSwgbGV0JiMzOTtzIGZvY3VzIG9uIHRoZSBjaGFuZ2luZyBuYXR1cmUgb2YgdGhlIEZsdSBWaXJ1cywgd2hpY2ggbWFrZXMgaXRzZWxmIGFcclxuXHJcbjxpPnJlc2VhcmNoIDwvaT5jaGFsbGVuZ2UgaW4gaXRzZWxmIGJlY2F1c2Ugb2YgYW4gZXZlci1tdXRhdGluZyBvYmplY3Qgb2Ygc3R1ZHkuIFlldCwgdGhpcyBldmVyLWNoYW5naW5nIG5hdHVyZSBhbHNvXHJcblxyXG5wcm92aWRlcyB0aGUgdmVyeSB0b29sIFN0YXRpc3RpY2lhbnMgbmVlZCBtb3N0IGZvciBlc3RpbWF0aW5nOiBCaWcgRGF0YS4gVGhlIExhdyBvZiBMYXJnZSBOdW1iZXJzIG1lYW5zIHRoYXQgcGxhaW5cclxuXHJcbm1hdGggY2FuIGFjY3VyYXRlbHkgcGxvdCwgYW5kIGluIG1vc3QgY2FzZXMgcHJlZGljdCB3aXRoIGEgbW9kZXJhdGUgc3RhdGlzdGljYWwgc2lnbmlmaWNhbmNlLCBmdXR1cmUgZXZlbnRzLCBzb3J0XHJcblxyXG5vZi48L3A+XHJcblxyXG5cclxuXHJcbjxwPlNvcnQgb2YgSSBzYXkgYmVjYXVzZSB0b28gb2Z0ZW4gd2UgcHJlZGljdCB0aGF0IHR3byBzZXBhcmF0ZSBldmVudHMgYXJlIG1vcmUgbGlrZWx5IHRvIG9jY3VyLCBjb25kaXRpb25hbCBvbiBlYWNoXHJcblxyXG5vdGhlciwgdGhlbiBjb25kaXRpb25hbCB1cG9uIG90aGVyIGZhY3RvcnMuIFRoaXMgYmVpbmdcclxuXHJcbjxpPmNvcnJlbGF0aW9uPC9pPiwgYnV0IHRoZSBTdGF0aXN0aWNpYW4mIzM5O3MgSG9seSBHcmFpbCBpcyB0aGUgb3RoZXIga2luZDogQ2F1c2FsaXR5LiBDYXVzYWxpdHkgaGluZ2VzIG9uIG9ubHkgdGhyZTNlXHJcblxyXG50aGluZ3M6IDEpIEFzc29jaWF0aW9uLCAyKSBUaW1lIFByZWNlZGVuY2UsIGFuZCAzKSBSdWxpbmcgb3V0IGFueVxyXG5cclxuPGk+IGVmZmVjdDwvaT4gb2Ygc3B1cmlvdXMgdmFyaWFibGVzLiAoSGFuZyB3aXRoIG1lLCBJJiMzOTttIHN0aWxsIGdldHRpbmcgYmFjayB0byB0aGUgc3ViamVjdCBvZiBvdXIgYW5udWFsIHByZWRpY3Rpb25zXHJcblxyXG5hYm91dCBhIGZldyBtb250aHMmIzM5OyB3b3J0aCBvZiBhbnRpZ2VuaWMgZHJpZnQuKTwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhlcmVmb3JlLCBCaWcgZGF0YSwgYW5kIG5ldyBhZHZhbmNlcyBpbiB0aGUgc3RhdGlzdGljYWwgc2NpZW5jZXMsIGFuZCB0aGUgdGVjaG5vbG9neSB0aGF0IGluY3JlYXNpbmdseSBkZWZpbmVzIG91clxyXG5cclxuc2NpZW5jZXMsIG1heSBzb29uIHJlZmluZSBhbmQgc3VwZXJjaGFyZ2UgcmVzZWFyY2ggaW50byB0aGUgZmlyc3QgYW5kIHRoaXJkIG9mIHRoZSB0aHJlZSBwb2ludHMgb2YgY2F1c2FsaXR5LiBUaGVcclxuXHJcbmZpcnN0IG9mIHRoZXNlLCB0aGUgYXNzb2NpYXRpb25zLCBhbG9uZyB0aGUgcGh5bG9nZW5ldGljIHRyZWUsIGFyZSBtZXJlbHkgYSBuZXR3b3JrIGF0IGl0cyBiYXNlLCB0aGUgc2NpZW5jZSBvZlxyXG5cclxud2hpY2ggZ2FpbnMgY29tcHV0YXRpb25hbCBzdHJlbmd0aCBlYWNoIHllYXIuIFJhcmUgYXMgaXQgaXMgaW4gQWNhZGVtaWEsIGluIHRoaXMgY2FzZSBNaWdodCBtYWtlcyBSaWdodCE8L3A+XHJcblxyXG5cclxuXHJcbjxwPlxyXG5cclxuVGhlIHRoaXJkIHRlbmV0IG9mIGNhdXNhbGl0eSwgYWZ0ZXIgYXNzb2NpYXRpb24gYW5kIHRpbWUgZGlyZWN0aW9uLCBpcyBydWxpbmcgb3V0IHRoZSBlZmZlY3Qgb2Ygb3RoZXIgZmFjdG9ycyB3aGVuIHNlcGFyYXRpbmdcclxuXHJcbjxpPmNhdXNlPC9pPiBhbmQgY29uc2VxdWVuY2UuIEFkdmFuY2VzIGluIG1hbmFnaW5nIGJpZyBkYXRhLCBhbmQgc3RhdGlzdGljYWwgYW5hbHlzaXMgb2YgaXQsIG1lYW5zIGdhaW5pbmcgYSBiZXR0ZXJcclxuXHJcbmhhbmRsZSBvbiB0aGUgbXVsdGlwbGUgZWZmZWN0cyBvZlxyXG5cclxuPHN1cD5zcHVyaW91cyA8L3N1cD5mYWN0b3JzLCBoZW5jZSBhbmFseXNpcyBvcHRpbWl6ZWQgYnkgbmV3LCBuZXR3b3JrLWdyYXBoIGRhdGEgc3RydWN0dXJlIHRlY2hub2xvZ3kuIFRoZSBMYXcgb2YgTGFyZ2VcclxuXHJcbk51bWJlcnNcclxuXHJcbjxzdXA+Mzwvc3VwPiwgaS5lLiB0aGUgc2hlZXIgbnVtYmVyIG9mIG11dGF0aW9ucyBhbmQgb3RoZXIgZmFjdG9ycywgY291cGxlZCB3aXRoIG5ld1xyXG5cclxuPHN0cm9uZz50ZWNobm9sb2d5PC9zdHJvbmc+LCB3aWxsIGJldHRlciBpbmZvcm0gdGhlIG1vcnBob2xvZ3kgb2YgdGhlXHJcblxyXG48aT5wYXRoPC9pPiBvZiB0aGUgdmlydXMsIGFsb25nIHRoZSBwaHlsb2dlbmV0aWMgdHJlZSBpdHNlbGYuIFdobyBrbm93cyB3aGVyZSBhIGN1cmUgbWF5IGNvbWUgZnJvbSwgcGVyaGFwcyBhIGJpby1zdGF0aXN0aWNpYW5cclxuXHJcbm91dCB0aGVyZSwgY2h1cm5pbmcgdGhlIG51bWJlcnMsIG1heSBiZSB0aGUgb25lIHRvIHN0dW1ibGUgdXBvbiBhIGJldHRlciBGbHUgVmFjY2luZSFcclxuXHJcblxyXG5cclxuPC9wPlxyXG5cclxuPHA+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwOi8vd3d3LnNjaWVuY2VtYWcub3JnL25ld3MvMjAxNy8wOS93aHktZmx1LXZhY2NpbmVzLXNvLW9mdGVuLWZhaWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj4gaHR0cDovL3d3dy5zY2llbmNlbWFnLm9yZy9uZXdzLzIwMTcvMDkvd2h5LWZsdS12YWNjaW5lcy1zby1vZnRlbi1mYWlsIDwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+Mi5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3F6LmNvbS8xMTQzNDIwL3RoZS0yMDE3LTIwMTgtZmx1LXZhY2NpbmUtaXMtbGVzcy1lZmZlY3RpdmUtdGhhbi11c3VhbFwiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwczovL3F6LmNvbS8xMTQzNDIwL3RoZS0yMDE3LTIwMTgtZmx1LXZhY2NpbmUtaXMtbGVzcy1lZmZlY3RpdmUtdGhhbi11c3VhbCA8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjMuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuY2RjLmdvdi9mbHUvYWJvdXQvdmlydXNlcy9jaGFuZ2UuaHRtXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IGh0dHBzOi8vd3d3LmNkYy5nb3YvZmx1L2Fib3V0L3ZpcnVzZXMvY2hhbmdlLmh0bSA8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj4mbmJzcDs8L3A+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTJcIiBpZD1cIjE4LTAzLTAzXCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5Tb2Npb2xvZ3kgVG9tb3Jyb3chPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5NYXJjaCAzLTQsIDIwMThcclxuXHJcbjxiciAvPiBXZWVrZW5kXHJcblxyXG48L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5BIFJldHVybiB0byB0aGUgUXVlc3Rpb24gb2YgR3VucywgR2VybXMsIGFuZCBTdGVlbDwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5CYWNrIGluIDE5OTcsIGEgUHVsaXR6ZXItUHJpemUgd2lubmluZyB0aGVvcnktLWJhc2VkIG9uIERyLiBKYXJlZCBEaWFtb25kJiMzOTtzXHJcblxyXG48aT5HdW5zLCBHZXJtcywgYW5kIFN0ZWVsOiBUaGUgRmF0ZSBvZiBIdW1hbiBTb2NpZXRpZXM8L2k+IC0tcHJvdmlkZWQgdGhlIHJlY2lwZSBib29rIGZvciB0aGUgc3VjY2VzcyBvZiBzb2NpZXRpZXMuXHJcblxyXG5Ob3Qgd2l0aG91dCBjb250cm92ZXJzeSwgdGhlIHRoZW9yeSBwb3NpdHMgdGhhdCBnZW9ncmFwaGljIGFuZCBlbnZpcm9ubWVudGFsIHByZWNvbmRpdGlvbnMsIG9uY2UgbWV0LCBwcm92aWRlIHRlY2hcclxuXHJcbiZhbXA7IHJlc291cmNlcyB0cmFkaW5nIG9wcG9ydHVuaXRpZXMsIHdpdGhpbiBhIG5ldHdvcmsgb2Ygb3RoZXIgbmF0aW9uLXN0YXRlcyBhbHNvIHZ5aW5nIGZvciB0ZWNobm9naWNhbCBpbm5vdmF0aW9uLjwvcD5cclxuXHJcblxyXG5cclxuPHA+QSBuYXRpb24mIzM5O3MgVGVjaG5vbG9neSwgaW4gdHVybiwgb3BlbnMgdGhlIG1lYW5zIG5lY2Vzc2FyeSB0byBleHBhbnNpdmUsIHN0YWJsZSwgaW5kZXBlbmRlbnQgc292ZXJlaWdudHkgdGhhdFxyXG5cclxubGFzdHMgYW5kIHRocml2ZXMuIEVxdWFsbHkgc28sIHRoZSBuYXRpb24mIzM5O3MgZnJpZW5kcywgZXNwZWNpYWxseSB0aG9zZSBtYWtpbmcgdGhlIGJlc3QtZnJpZW5kcyBsaXN0LCBzaGFyZSBhbmRcclxuXHJcbnJlY2VpdmUgYSBzZWNvbmRhcnksICZxdW90O3Jlc2lkdWFsJnF1b3Q7IHRlY2hub2xvZ2ljYWwgYnVtcCBvdmVyIHRoZSB0aW1lLWNvdXJzZSBvZiB0aGUgbmV0d29yayYjMzk7cyBmdXR1cmUgdHJhZGluZyxcclxuXHJcbmkuZS4gbmV0d29yayB0cmFuc2FjdGlvbnMuIFNvLCBpZiBvdXIgYmVzdCBmcmllbmRzIENhbmFkYSBhbmQgTWV4aWNvIGFyZSBsZXNzIGtlZW4sIHRoZW4gdGhlcmUgaXMgbmV0d29yayByZXZlcmJlcmF0aW9uITwvcD5cclxuXHJcblxyXG5cclxuPHA+R2l2ZW4gdGhlIGFkdmVudCBvZiBhIHJlYWwsIGxhc3RpbmcgVHJhZGUtV2FyLCBJIHdvdWxkIHRoaW5rIHRoYXQgYSBuZXR3b3JrIHRoZW9yaXN0IHdvdWxkbiYjMzk7dCBiZSBiZXR0aW5nIG9uIG9uZVxyXG5cclxucGFydGljdWxhciBub2RlIHdpdGhpbiB0aGlzIG5ldHdvcmsuIEkgc2F5IHRoaXMgYmVjYXVzZSBhIGRpc3Byb3BvcnRpb25hdGVseSBhc3ltbWV0cmljYWwgZmxvdyBvZiB0ZWNobm9sb2d5IGFuZFxyXG5cclxucmVzb3VyY2VzLCB3aGlsZSBzaW11bHRhbmVvdXNseSByYWlzaW5nIHByaWNlcyBvbiBtb3N0IHN0YXBsZSBnb29kcywgbWF5IHNwZWxsIHRyb3VibGUgZm9yIHRoZSBFdmVyeS1EYXkgcGVyc29uLlxyXG5cclxuU28gZmFyLCBOYXRpb24tU3RhdGU6IDAsIFBlb3BsZTogMCAuLi4gU28sIHdobyB3aW5zIHdpdGggYSBUcmFkZSBXYXI/IEFsYXMsIGxldCYjMzk7cyBob3BlIG5vdCB0aGUgcmVzdXJyZWN0aW9uXHJcblxyXG5vZiB0aGUgTmVvLU11bHRpLU5hdGlvbmFsIENvcnBvcmF0aW9ucywgYm9ybiBmcm9tIE5BRlRBIGRlYWxzLCBjb2luY2lkZW50YWxseSwgZnJvbSB0aGUgbGF0ZSAxOTkwJiMzOTtzLiBCYWggaHVtYnVnITwvcD5cclxuXHJcblxyXG5cclxuPHA+Jm5ic3A7PC9wPlxyXG5cclxuXHJcblxyXG48cD4xLlxyXG5cclxuPGEgaHJlZj1cImh0dHA6Ly93d3cuamFyZWRkaWFtb25kLm9yZy9KYXJlZF9EaWFtb25kL0d1bnMsX0dlcm1zLF9hbmRfU3RlZWwuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPkd1bnMsIEdlcm1zLCBhbmQgU3RlZWwuICZxdW90O1N0ZWVsOiBUaGUgRmF0ZXMgb2YgSHVtYW4gU29jaWV0aWVzLiZxdW90OyBEaWFtb25kIEogKDE5OTcpLjwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwibWFyIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDMtMDJcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggMiwgMjAxODwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPldpZGVuaW5nIENpcmNsZXMgb2YgTW9iaWxlLUFwcCBTZWN1cml0eSBSaXNrczwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5TZWN1cml0eSwgc2VjdXJpdHksIGFub3RoZXIgZGF5IGFub3RoZXIgcGxhdGZvcm0gcmlzaywgb3Igcmlza3MgZnJvbSB5b3VyIGRldmljZSwgb3Igcmlza3MgZnJvbSB0cmFuc2FjdGlvbnMsIFRvZGF5JiMzOTtzXHJcblxyXG5oZWFkbGluZSBidXJpZWQgYmVuZWF0aCBhIHRlY2h5IGphcmdvbiBwcm92aWRlcyBhIGdsaW1wc2Ugb2YgdGhlIHJpc2luZyB0aHJlYXQgb2Ygd2ViLWFwcGxpY2F0aW9uLWJhc2VkIGhhY2tlcnk6XHJcblxyXG5DcnlwdG9qYWNraW5nLlxyXG5cclxuPGk+Q29pbmRlc2s8L2k+IHJlcG9ydHMsICZxdW90OyBPcGVyYSBicm93c2VyIGludHJvZHVjZXMgY3J5cHRvY3VycmVuY3kgbWluZXIgcHJvdGVjdGlvbiBmb3Igc21hcnRwaG9uZXMgLi4uICZxdW90OzwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPkNyeXB0b2N1cnJlbmN5IG1pbmVycyBjYW4gb3ZlcmxvYWQgc21hcnRwaG9uZXMmIzM5OyBDUFVzLCBmb3JjaW5nIDEwMCBwZXJjZW50IHVzYWdlIGFuZCBwb3RlbnRpYWxseSBjYXVzaW5nIGEgcGhvbmVcclxuXHJcbnRvIG92ZXJoZWF0LiBBbmQgdGhlIGRhbWFnZSBjYW4gc29tZXRpbWVzIGJlIHBlcm1hbmVudC4gQWNjb3JkaW5nIHRvIGEgWkROZXQgYXJ0aWNsZSwgb25lIHRyb2phbiBnZW5lcmF0ZWQgc28gbXVjaFxyXG5cclxuaGVhdCBpbiBhIHBob25lLCBpdHMgYmF0dGVyeSBiZWNhbWUgc3dvbGxlbiwgcGVybWFuZW50bHkgZGFtYWdpbmcgdGhlIHBob25lLiBXaGlsZSBleGNlc3NpdmUgYWRzIHdlcmUgb25lIHJlYXNvblxyXG5cclxuZm9yIHRoZSBoZWF0IGdlbmVyYXRpb24sIHRoZSBtYWluIGNhdXNlIHdhcyB0aGF0IHRoZSBwaG9uZSYjMzk7cyBDUFUgd2FzIGhpamFja2VkIHRvIG1pbmUgZm9yIE1vbmVyby5cclxuXHJcbjxzdXA+MTwvc3VwPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cD5UaGUgbGFyZ2VyIGlzc3VlIGhlcmUgaXMgdGhhdCB0aGUgbGluZXMgYmV0d2VlbiB0cnVzdGVkIG1vYmlsZS1hcHAgYXV0aG9yaXRpZXMsIGkuZS4sIGNlcnRpZmllZCBieSBQbGF5IFN0b3JlIG9yXHJcblxyXG5BcHBsZSYjMzk7cyBpcyBpbmNyZWFzaW5nbHkgaXJyZWxldmVudC4gVGhpcyBpcyBiZWNhdXNlIGFuIGluY3JlYXNpbmcgbnVtYmVyIG9mIGFwcC11c2VycyBhcmUgZGl0Y2hpbmcgZGV2aWNlLWRvd25sb2FkZWRcclxuXHJcbmFwcHMsIHByZWZlcnJpbmcgZm9yIGJyb3dzZXIgYXBwbGljYXRpb25zLS1oZW5jZSwgYSBtdWNoIG1vcmUgYXBwZXRpemluZyBtYXJrZXQgZm9yIHRoZSBuZXdlc3QgZ2VuZXJhdGlvbiBvZiBibGFja2hhdFxyXG5cclxuaGFja2Vycywgb25saW5lIHRoaWV2ZXMsIHBlZXBpbmctdG9tcywgYW5kIG90aGVyIGlsbC13aXNoZXJzLiBUaGVyZSBhcmUgYSBmZXcgZHJpdmluZyBmYWN0b3JzIGZvciB0aGlzIGlzc3VlLS1vbmVcclxuXHJcbm9mIHdoaWNoIGlzIHRoZSBvbnNldCBvZiBEZWNlbnRyYWxpemVkIEFwcGxpY2F0aW9ucyAoREFQUHMpLCB3aGljaCB1c2UgdGhlXHJcblxyXG48aT5icm93c2VyPC9pPiB0byBpbnRlcmZhY2UgYmV0d2VlbiB0aGUgRXZlcnktRGF5IGJsb2NrY2hhaW4gY2xpZW50L21lcmNoYW50L3Byb2dyYW1tZXIgYW5kIHRoZSBhY3R1YWwgYnl0ZS1jb2RlIG9mXHJcblxyXG50aGUgYmxvY2tjaGFpbiAodmlhIFdFQikuPC9wPlxyXG5cclxuXHJcblxyXG48cD5Nb3JlIGltcG9ydGFudGx5LCB0aGUgbGFyZ2VyIGlzc3VlIGlzIHRoYXQgd2UgbGl2ZSBpbiBhbiBhZ2UgaW4gd2hpY2ggdGhlIGV4Y2x1c2l2ZSwgbmF0aXZlIGJyb3dzZXIgbGFuZ3VhZ2Ugc2luY2VcclxuXHJcbjE5OTUsIGkuZS4gSmF2YVNjcmlwdC4gU2VjdXJpdHkgaXNzdWVzIHdpdGggYnJvd3Nlci1iYXNlZCBhcHBzIHdlcmUgdmVyeSBsb3csIGJlY2F1c2UgSmF2YVNjcmlwdCBuZXZlciBsZWZ0IHRoZVxyXG5cclxuYnJvd3NlciwgZXZlci4gVW50aWwgMjAwOSwgRGF0YSwgU2VydmVycyB3ZXJlIHRoZSBkb21haW4gb2YgUEhQLCBKQVZBLCBQeXRob24sIGV0Yy4gb3Igc29tZSBvdGhlciBsYW5ndWFnZSBmb3IgdGhlXHJcblxyXG5oaWdobHkgc2Vuc2l0aXZlLCBkaXJ0eSB3b3JrIG9mIGRpcHBpbmcgaW50byBhbGwgdGhhdCBkYXRhIHNpdHRpbmcgb250b3Agb2YgY2VudHJhbGl6ZWQgc2VydmVycyBhcm91bmQgdGhlIHdvcmxkLlxyXG5cclxuUEhQIHdhc24mIzM5O3QgZWFzeSwgc28gcG93ZXIgYW5kIHJlc3BvbnNpYmlsaXR5IHVzdWFsbHkgZm9sbG93ZWQgd2l0aCBhbGwgdGhlIGV4dHJhIGVmZm9ydCBhbmQgZXhwZXJ0aXNlLjwvcD5cclxuXHJcblxyXG5cclxuPHA+MjAxNSBhdWd1cmVkIGluIHRoZSBOb2RlLmpzIHNlcnZlci1hY2Nlc3NpbmcgKGNhbiBjcmVhdGUsIHJlYWQsIHVwZGF0ZSwgYW5kIGRlbGV0ZSBkYXRlKSBuZXctYm9ybiBjYXBhYmlsaXRpZXMgb2ZcclxuXHJcbkphdmFTY3JpcHQ8L3A+XHJcblxyXG5cclxuXHJcblxyXG5cclxuPHA+MS5cclxuXHJcbjxhIGhyZWY9XCJcclxuXHJcbmh0dHBzOi8vd3d3LmNvaW5kZXNrLmNvbS9vcGVyYS1icm93c2VyLWludHJvZHVjZXMtY3J5cHRvY3VycmVuY3ktbWluZXItcHJvdGVjdGlvbi1mb3Itc21hcnRwaG9uZXMvXHJcblxyXG5cIiB0YXJnZXQ9XCJfYmxhbmtcIj4gaHR0cHM6Ly93d3cuY29pbmRlc2suY29tL29wZXJhLWJyb3dzZXItaW50cm9kdWNlcy1jcnlwdG9jdXJyZW5jeS1taW5lci1wcm90ZWN0aW9uLWZvci1zbWFydHBob25lcy8gPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYXIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMy0wMVwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oNT5cclxuXHJcblxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+TXVzaW5nIEJsb2NrY2hhaW48L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPk1hcmNoIDEsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyIGRhaWx5dGl0bGVcIj5CbG9ja2NoYWluIFN1c3RhaW5hYmlsaXR5IElzc3VlcyBhbmQgVGhlIERvdWJsZS1FZGdlZCBTd29yZDwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5JIGNvdWxkbiYjMzk7dCBoZWxwIGJ1dCByZXZpc2l0IHRoZVxyXG5cclxuPHN0cm9uZz5FbnZpcm9ubWVudGFsIFN1c3RhaW5hYmlsaXR5PC9zdHJvbmc+IHByb2JsZW0gSSBhZGRyZXNzZWQgaW4gbXkgRmVicnVhcnkgMjh0aCBwb3N0LiBUaGlzIHByb2JsZW0sIGV4cGVyaWVuY2VkIGJ5XHJcblxyXG50aGUgdG9wIHR3byBjcnlwdG8tY3VycmVuY2llcyBCaXRjb2luIGFuZCBFdGhlcmV1bSwgaXMgdGhhdCB0aGVcclxuXHJcbjxpPm1vbmV0YXJ5PC9pPiB2YWx1ZSBvZiB0aGUgY3VycmVuY3kgaXMgbWF0Y2hlZCB0byB0aGVcclxuXHJcbjxpPmNvbXB1dGluZyBkaWZmaWN1bHR5PC9pPi0tbWVhc3VyZWQgZWl0aGVyIGJ5IGhvdyBtdWNoIHRoZSBjb21wdXRlciBpcyBzd2VhdGluZywgb3IgYnkgZWxlY3RyaWNpdHkgS2lsb1dhdHQgSG91cnNcclxuXHJcbnBlciB5ZWFyLlxyXG5cclxuPHN1cD4xPC9zdXA+IERpZ2ljb25vbWlzdCBzdWNjaW5jdGx5IHdyaXRlczo8L3A+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5UaGUgY29udGludW91cyBibG9jayBtaW5pbmcgY3ljbGUgaW5jZW50aXZpemVzIHBlb3BsZSBhbGwgb3ZlciB0aGUgd29ybGQgdG8gbWluZSBCaXRjb2luLiBBcyBtaW5pbmcgY2FuIHByb3ZpZGUgYVxyXG5cclxuc29saWQgc3RyZWFtIG9mIHJldmVudWUsIHBlb3BsZSBhcmUgdmVyeSB3aWxsaW5nIHRvIHJ1biBwb3dlci1odW5ncnkgbWFjaGluZXMgdG8gZ2V0IGEgcGllY2Ugb2YgaXQuIE92ZXIgdGhlIHllYXJzXHJcblxyXG50aGlzIGhhcyBjYXVzZWQgdGhlIHRvdGFsIGVuZXJneSBjb25zdW1wdGlvbiBvZiB0aGUgQml0Y29pbiBuZXR3b3JrIHRvIGdyb3cgdG8gZXBpYyBwcm9wb3J0aW9ucywgYXMgdGhlIHByaWNlIG9mXHJcblxyXG50aGUgY3VycmVuY3kgcmVhY2hlZCBuZXcgaGlnaHMuXHJcblxyXG48c3VwPjI8L3N1cD5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+QW5kLCBzbyB0aGUgaXNzdWUgSSYjMzk7bSBhZGRyZXNzaW5nIGlzIGEgc2lkZS1lZmZlY3Qgb2YgdGhlIGRlZXBlbmluZyBpbmNlbnRpdml6YXRpb24gZm9yIG1pbmVycyB0byBpbnZlc3QgbW9yZVxyXG5cclxuZXF1aXBtZW50LCBhbmQgaW4gdHVybiwgbW9yZSBlbGVjdHJpY2l0eS4gVGhlIGFydGljbGUgZ29lcyBvbiB0byByZXBvcnQgQml0Y29pbiYjMzk7cyBzdXJwYXNzaW5nIDUwIFRlcmFXYXR0LUhvdXJzLXBlci15ZWFyXHJcblxyXG51c2FnZSBoYXMgc3VycGFzc2VkIHRoYXQgb2YgUG9ydHVnYWwgYW5kIFNpbmdhcG9yZSwgd2hpY2ggYXJlIDQ5LjUgVFdoIHBlciB5ZWFyLCBhbmQgNDkuOCBUV2ggcGVyIHllYXIsIHJlc3BlY3RpdmVseS5cclxuXHJcbkluIG90aGVyIHdvcmRzLCB0aGUgdXNhZ2UgYnkgdGhlIEJpdGNvaW4gbWluZXImIzM5O3MgY29zdCAoaW4gZWxlY3RyaWNpdHkpIGNvbXBhcmVkIHdpdGggdGhlIG1pbmVyJiMzOTtzIGdhaW4gKGluXHJcblxyXG5CaXRjb2lucyBhY2NydWVkIGJ5IGluY2VudGl2aXplZCBtaW5pbmcpIGRyaXZlcyB1cCBhbmQgaW5jZW50aXZlcyBhIGRlZXBlciBDYXJib24gRm9vdHByaW50LjwvcD5cclxuXHJcblxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+RnVlbGVkIGJ5IGEgbWV0ZW9yaWMgcmlzZSBpbiB0aGUgQml0Y29pbiBwcmljZSBvdmVyIHRoZSBwYXN0IGZldyBtb250aHMsIHRoZSBwb3dlciB1c2FnZSBvZiB0aGUgQml0Y29pbiBuZXR3b3JrIGhhc1xyXG5cclxuYmVlbiBpbmNyZWFzaW5nIGF0IGEgZmV2ZXJpc2ggcGFjZS4gSnVzdCBhIGxpdHRsZSBvdmVyIHRocmVlIG1vbnRocyBhZ28sIGF0IHRoZSBzdGFydCBvZiBOb3ZlbWJlciAyMDE3LCB0aGUgQml0Y29pblxyXG5cclxuRW5lcmd5IENvbnN1bXB0aW9uIEluZGV4IHdhcyBlc3RpbWF0aW5nIHRoZSB0b3RhbCBlbGVjdHJpY2l0eSBjb25zdW1wdGlvbiBvZiB0aGUgQml0Y29pbiBuZXR3b3JrIHRvIGJlIGhhbGYgb2YgdGhlXHJcblxyXG5jdXJyZW50IGFtb3VudC4gT24gdGhlIGZpcnN0IGRheSBvZiBOb3ZlbWJlciwgdGhlIGVzdGltYXRlZCBjb25zdW1wdGlvbiB3YXMgZXF1YWwgdG8gMjQuMyBUV2ggcGVyIHllYXIuXHJcblxyXG48c3VwPjE8L3N1cD5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+XHJcblxyXG5DYXJib24gRm9vdHByaW50LCBtZWFzdXJlZCBpbiB0aGlzIHdheSwgZXF1YXRlcyBhcyBhIGRvdWJsZS1lZGdlZCBzd29yZDogVGhlIG1pbmVyJiMzOTtzIGVsZWN0cmljaXR5IGNvc3RzIGFjY291bnQgZm9yIGFwcHJveGltYXRlbHlcclxuXHJcbjY1JSBvZiB0aGUgcHJvZml0IChCaXRjb2luIHVuaXRzJiMzOTsgdmFsdWUsIG1lYXN1cmVkIHdoZW4gbWluZWQpLiBTbyB0aGVcclxuXHJcbjxpPmVjb25vbWljIDwvaT51c2FnZSBtZWFucyB0aGUgY2hlYXBlc3QgYXZhaWxhYmxlIGZ1ZWwgaXMgcGFydCBvZiB0aGUgYnVzaW5lc3MgbW9kZWwtLWFuZCBpdCB3b3VsZCBsZWFkIHRvIHRoZSBjb3N0XHJcblxyXG5vZiB0aGUgY2hlYXBlc3Qgc291cmNlIG9mIGVuZXJneTogRGlydHkgQ29hbC4gQXQgdGhlIGVuZCBvZiB0aGUgZGF5LCBpZiB0aGVcclxuXHJcbjxpPmN1cnJlbmN5JiMzOTtzIDwvaT5yaXNpbmcgdmFsdWUgbWVhbnMgdGhhdCBtb3JlIGNvbXB1dGF0aW9uYWxseS1pbnRlbnNpdmUgbWluaW5nIGlzIG1vcmUgYW5kIG1vcmUgcHJvZml0YWJsZSwgdGhlblxyXG5cclxucGVyaGFwcyB0aGUgb3RoZXIgZWRnZSBsb29rcyBwcmVmZXJyZWQhXHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjEuXHJcblxyXG48YSBocmVmPVwiXHJcblxyXG5odHRwczovL2RpZ2ljb25vbWlzdC5uZXQvYml0Y29pbi1lbGVjdHJpY2l0eS1jb25zdW1wdGlvbi1zdXJwYXNzZXMtc2luZ2Fwb3JlLXBvcnR1Z2FsXHJcblxyXG5cIiB0YXJnZXQ9XCJfYmxhbmtcIj4gaHR0cHM6Ly9kaWdpY29ub21pc3QubmV0L2JpdGNvaW4tZWxlY3RyaWNpdHktY29uc3VtcHRpb24tc3VycGFzc2VzLXNpbmdhcG9yZS1wb3J0dWdhbCA8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjIuXHJcblxyXG48YSBocmVmPVwiXHJcblxyXG5odHRwczovL2RpZ2ljb25vbWlzdC5uZXQvYml0Y29pbi1lbmVyZ3ktY29uc3VtcHRpb25cclxuXHJcblwiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwczovL2RpZ2ljb25vbWlzdC5uZXQvYml0Y29pbi1lbmVyZ3ktY29uc3VtcHRpb24gPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGhyIC8+XHJcblxyXG48YnV0dG9uIGlkPVwiZmVidG9wXCI+VE9QIFxyXG5cclxuRkVCUlVBUlkgXHJcblxyXG48YnIgLz5cclxuXHJcbjxoND5QT1NUUyBGRUJSVUFSWSAyMDE4PC9oND5cclxuXHJcbjxiciAvPlxyXG5cclxuPGg2PkZpcnN0IEJsb2cgUG9zdCE8L2g2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMTBcIj4gXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMTAsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDY+Rmlyc3QgQmxvZyBQb3N0ITwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPldoeSBhcmUgU29jaW9sb2dpc3RzIG5vdyB0aGUgS2V5IFBsYXllcnMgaW4gRGF0YSBBbmFseXNpcyB3aXRoaW4gdGhlIERvbWFpbiBvZiBCbG9ja2NoYWluIFRlY2hub2xvZ2llcz88L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+Rmlyc3QsIGxldCBtZSBkZXNjcmliZSB0aGF0IGJsb2NrY2hhaW4gdGVjaG5vbG9naWVzLCBpLmUuIEdvdmVybm1lbnQgY29udHJhY3RzLCBCdXNpbmVzcyBjb250cmFjdHMsIEJpdGNvaW4gYW5kIG90aGVyXHJcblxyXG5jcnlwdG9jdXJyZW5jaWVzLCBhbGwgcmVseSBvbiBuZXR3b3JrIGdyYXBoIHRoZW9yeSwgYm90aCBvbiB0aGUgbG93LWxldmVsIHByb2dyYW1taW5nIHRlY2hub2xvZ3kgKHBlZXItdG8tcGVlciBnbG9iYWxcclxuXHJcbmlwIG5ldHdvcmtzKSBhY3Jvc3MgdGhlIHNwZWN0cnVtIHRvIGhpZ2gtbGV2ZWwgaW50ZXJmYWNlcyBmb3IgaW5zdGl0dXRpb25hbCwgY29ycG9yYXRlLCBpbmRpdmlkdWFsIG5lZWRzIGFuZCB1c2VzLlxyXG5cclxuVGhlc2UgYmxvY2tjaGFpbiAmcXVvdDtuZXR3b3JrJnF1b3Q7IGFuYWx5c2VzIGRlcGVuZCBvbiBoaWdobHkgdmFyaWFibGUtLWFuZCBzaW11bHRhbmVvdXMtLW5ldHdvcmsgY2hhbmdlcywgbm9kZVxyXG5cclxuY2hhbmdlcywgYW5kIGxpbmsgY2hhbmdlczsgYW5kLCB0aGUgbGF0dGVyIHRocmVlIG1heSBhcmJpdHJhcmlseSBjaGFuZ2UgaW50ZXJkZXBlbmRhbnRseSBvciBub3QuPC9wPlxyXG5cclxuXHJcblxyXG48cD5UaGVyZWZvcmUsIGJsb2NrY2hhaW4gdGVjaG5vbG9naWVzIG11c3QgZmlyc3QgYWNjb21vZGF0ZSBjb21wbGV4IG5vZGUgdmFyaWFibGVzIGZvciBjb250cmFjdHMgKHJlbGF0aW9uc2hpcHMpIHRoYXRcclxuXHJcbmluY2x1ZGUgYXJiaXRyYXJpbHkgaGllcmFyY2hpY2FsIG1hcHBpbmdzIGFuZCBjb25kaXRpb25hbCBkYXRhIHN0cnVjdHVyZXMuIFNlY29uZGx5LCBibG9ja2NoYWluIHRlY2ggbXVzdCBmYWNlIGFuYWx5dGljYWxcclxuXHJcbmNoYWxsZW5nZXMgdGhhdCBhcmlzZSBmcm9tIGluZm9ybWFsIHByYWN0aWNlc1xyXG5cclxuPHN1cD4xPC9zdXA+LCBieSB3aGljaCB0aGUgb3JnYW5pemF0aW9uYWwgbm9kZXMgKGVtcGxveWVlcykgY2hvb3NlIHRvIGRldmlhdGUgZnJvbSB0aGUgZW1wbG95ZWUgcm9sZSYjMzk7cyBwcm90b2NvbCBmb3JcclxuXHJcbnRoZSBzYWtlIG9mIGVmZmljaWVuY3ksIGNvbnZlbmllbmNlLCBjb21wYW55IGN1bHR1cmUsIGFuZCBtdWx0aXBsZSBvdGhlciBsZXZlbHMgb2YgaHVtYW4gZmFjdG9ycy48L3A+XHJcblxyXG5cclxuXHJcbjxwPlNvY2lvbG9naXN0cyBNZXllciAmYW1wOyBSb3dhbiYjMzk7cyAoMTk3NylcclxuXHJcbjxpPk5ldyBJbnN0aXR1dGlvbmFsaXNtPC9pPiBleHBsYWlucyBob3cgZW1wbG95ZWVzIGNoYW5nZSBwcmFjdGljZXMgYW5kIGRlY291cGxlXHJcblxyXG48aT5hY3R1YWw8L2k+IG9yZ2FuaXphdGlvbmFsIHN0cnVjdHVyZSBmcm9tIHJlY29yZGVkIHJ1bGVzLCBhcyBhIGZ1bmN0aW9uIG9mIG9yZ2FuaXphdGlvbmFsIHNpemUsIHRpbWUsIGNvbnZlbmllbmNlLFxyXG5cclxuZXRjLiBUaGVzZSBjb250aW51YWxseSBuZXcsIHVua25vd24gY29uc3RyYWludHMgb24gZGF0YSBtdXN0IGJlIGludGltYXRlbHkgdW5kZXJzdG9vZCwgbm9uLWFsZ29yaXRobSBodW1hbiB1bmRlcnN0YW5kaW5nXHJcblxyXG48aT5ieSBhdCBsZWFzdCBvbmUgc2lkZSA8L2k+b2YgdGhlIGV4Y2hhbmdlLiBIb3cgZG8gd2UgcmVjb2duaXplIHVud3JpdHRlbiwgc29mdCBydWxlcyBhbmQgYmVoYXZpb3JzIG9mIGEgYmFuaywgYSBwZXJzb24sXHJcblxyXG5vciBhIGNvbXBhbnkmIzM5O3MgaW50ZXJuYWwgYm90PzwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhlIGhhcmQgc2NpZW5jZXMgZG9tYWluIG9mIFNvZnR3YXJlIEVuZ2luZWVyaW5nLCBDb21wdXRlciBTY2llbmNlLCBhbmQgTWF0aGVtYXRpY3MgaGF2ZSBicmlsbGlhbnRseSBicm91Z2h0IHRoZVxyXG5cclxud29ybGQgdGhlIGJsb2NrY2hhaW4gdG9vbCwgZm9yIHdoaWNoIHRoZSBIYXJkIFNjaWVuY2VzIGNhbiBvbmx5IGNvbnRyaWJ1dGUgbGl0dGxlIG9uIGhvdyB0byBpbnRlcmZhY2Ugd2l0aCBzb2NpYWxcclxuXHJcbm5lZWRzLiBBc2sgeW91cnNlbGYsIGhvdyB3ZWxsIGRvIDEsMDAwIHRvcCBibG9ja2NoYWluLXJlbGF0ZWQgcHJvZ3JhbW1lcnMgdW5kZXJzdGFuZCB0aGUgbXVsdGktZGltZW5zaW9uYWwgbGF5ZXJzXHJcblxyXG5vZiBoaWVyYXJjaGljYWwgc29jaWFsLCBjb3Jwb3JhdGUsIGFuZCBnb3Zlcm5tZW50YWwgcmVsYXRpb25zaGlwIG5ldHdvcmtzPyBXZWxsIGVub3VnaCB0byBkaWZmZXJlbnRpYXRlIHF1YWxpdGF0aXZlXHJcblxyXG5tZWFuaW5nIGluIHRoZSBzbWFydC1jb250cmFjdD8gRmVhcmZ1bGx5LCBuby48L3A+XHJcblxyXG5cclxuXHJcbjxwPkluIHRoZSBwYXN0LCB0aGUgbGF5ZXJzIG9mIGFic3RyYWN0aW9uIGZyb20gcmF3IHRlY2hub2xvZ2ljYWwgdG9vbCB0byBzb2NpZXRhbCB1c2Ugd2FzIHJlZmluZWQsIGltcHJvdmVkLCBpbnRlZ3JhdGVkXHJcblxyXG50aHJvdWdoIG11bHRpcGxlIGxheWVycyBvZiAmcXVvdDttaWRkbGVtZW4mcXVvdDssIHN1Y2ggYXMgbGF3eWVycywgY29ycG9yYXRlIGxhd3llcnMsIGdvdmVybm1lbnQgaW5zdGl0dXRpb25zLCBub24tZ292ZXJubWVudGFsLFxyXG5cclxubm9uLXByb2ZpdCBhbmQgZm9yLXByb2ZpdCBhY3RvcnMuIEJsb2NrY2hhaW4gdGVjaG5vbG9neSwgYnkgaXRzIHZlcnkgbmF0dXJlLCBlcmFzZXMgdGhlIG1pZGRsZW1lbi4gU3VkZGVubHksIG9uZVxyXG5cclxucHJvZ3JhbW1lciwgZm9yIGV4YW1wbGUsIGlzIHdyaXRpbmcgdGhlIHNhbWUgaGVhbHRoY2FyZSBpbnN1cmFuY2UgY3J5cHRvLWNvbnRyYWN0LCB0aGF0IGxhc3QgbW9udGggYW4gZW50aXJlIHRlYW1cclxuXHJcbm9mIGhvc3BpdGFsIGVtcGxveWVlcyBzcGVudCBhIG1vbnRoIHdyaXRpbmc7IHRoZW4gb3ZlcnNlZWluZyBhbmQgbWFuYWdpbmcgZGlmZmVyZW50IGZhY2V0cyBvZiB0aGlzIHNhbWUgdGhpbmcuPC9wPlxyXG5cclxuXHJcblxyXG48cD5Ib3dldmVyLCB0aGUgY3J5cHRvLWNvbnRyYWN0LCBvbmNlIGRlcGxveWVkIHRvIHRoZSBibG9ja2NoYWluLCBhdXRvLW1hbmFnZXMgdGhlIHJlc3QsIGZvcmV2ZXIgb3IgZm9yIHRoZSBsaWZlIG9mXHJcblxyXG50aGUgY29udHJhY3QuIFRoZXJlZm9yZSwgcmF0aGVyIHRoYW4gcmVkb2luZyB0aGUgdHJpYWxzIGFuZCBlcnJvcnMgb2YgMjAwIHllYXJzJiMzOTsgU29jaW9sb2d5IE5ldHdvcmsgQW5hbHlzdHMmIzM5O1xyXG5cclxucmVzZWFyY2ggYW5kIGFuYWx5dGljYWwgZGV2ZWxvcG1lbnQuIFRoZXJlZm9yZSwgbWVkaWNhbCBhbmQgb3RoZXIgc29jaWFsIGZpZWxkcyBjYW5ub3QgYW5kIHNob3VsZCBub3QgdHVybiB0byB0aGVcclxuXHJcbkhhcmQgU2NpZW5jZXMgZm9yIHNvbHV0aW9ucy4gVGhlc2UgTWVkIHJlc2VhcmNoZXJzIGFuZCBkZXZlbG9wZXJzIGFyZSBhbHJlYWR5IGF0IGhvbWUsIHNhZmUgd2l0aGluIHRoZSBhY2FkZW1pY1xyXG5cclxuZG9tYWluIG9mIHRoZSBSYXcgU2NpZW5jZXMgb2YgTWVkaWNhbCBTb2Npb2xvZ3ksIFB1YmxpYyBIZWFsdGgsIGFuZCBzbyBvbi4gVGhlIG5leHQgdGVuIHllYXJzIG9mIGJsb2NrY2hhaW4gdGVjaG5vbG9neVxyXG5cclxuY2FuIGVpdGhlciBiZSBkZWZpbmVkIGJ5IHVud2l0dGluZywgcGllY2VtZWFsIGFkdmFuY2VzLCBhY2NvbXBhbmllZCBieSBmcmVxdWVudCwgbm9uLWltcHJvdmluZyBkaXN0YXN0cm91cyBjcmlzZXMuXHJcblxyXG5PciwgdGhlIG5leHQgdGVuIHllYXJzIGNhbiBmb2xsb3cgU29jaW9sb2d5JiMzOTtzIFNjaWVudGlmaWMgTWV0aG9kIHRvd2FyZCBhIG1pbGRseSB0dXJidWxlbnQsIGJ1dCBzdGFibGUgYW5kIGJlYXV0aWZ1bFxyXG5cclxuZnV0dXJlLjwvcD5cclxuXHJcblxyXG5cclxuPHA+RXhhbXBsZXMgYXNpZGUsIHRoZSBwcmltYWN5IG9mIHRoZSBTb2Npb2xvZ3kgYWNhZGVtaWMgZmllbGQgaW4gdGhlIGVhcmx5IDIxc3QgY2VudHVyeSBxdWlja2x5IGJlY29tZXMgYXBwYXJlbnQgb25cclxuXHJcbnJldmlldyBvZiB0aGUgU29jaW9sb2dpc3RzJiMzOTsgc3BlY2lhbGl6YXRpb24gaW4gbmV0d29yayB0aGVvcmllcyBpbWJ1ZWQgd2l0aCBzeW1tZXRyaWNhbCBhbmQgYXN5bW1ldHJpY2FsIHJlbGF0aW9uc2hpcHMsXHJcblxyXG53aXRoaW4gc29jaWFsIG5ldHdvcmtzIHRoYXQgY2hhbmdlIGFyYml0cmFyaWx5IHRoZSBkaXJlY3Rpb24sIGNvbmRpdGlvbnMsIGFuZCB2YWx1ZXMgb2YgdGhvc2Ugc2FtZSByZWxhdGlvbnNoaXBzLlxyXG5cclxuV2UgU29jaW9sb2dpc3RzIGRlYWwgd2l0aCByZWFsLXRpbWUsIGxvZ2ljYWwgYW5kIGhpZXJhcmNoaWNhbCBuZXR3b3JrIG1hcHBpbmdzIHRoYXQgYXBwZWFyIGFyYml0cmFyeSwgeWV0IGFyZSBjaGFyYWN0ZXJpemVkXHJcblxyXG5ieSBmaXhlZCBwYXR0ZXJucy48L3A+XHJcblxyXG5cclxuXHJcbjxwPk5vIG90aGVyIGFjYWRlbWljIGZpZWxkIHRoYW4gc29jaW9sb2d5IGhhcyBhZHZhbmNlZCBpbnRvIHRoZSBkZXRhaWxzLCBhbmQgZW5kbGVzcyBuZXR3b3JrIHJhYmJpdC1ob2xlcyB0aGF0IGNoYXJhY3Rlcml6ZVxyXG5cclxuc29jaWV0YWwgYmVoYXZpb3IuIE5vdCB1bnRpbCB0aGlzIHNlY29uZCBtaWxsZW5pYWwgZGVjYWRlIGNvdWxkIHRoZSBtYXJyaWFnZSBvZiBMYXJnZSBOdW1iZXIgU3RhdGlzdGljYWwgVGhlb3J5XHJcblxyXG5iZWNvbWUgY29uc3VtYXRlZCB3aXRoIHRoZSBicmlsbGlhbmNlIG9mIGVhcmx5IDE5MDAmIzM5O3MgU29jaW9sb2dpY2FsIEZyZW5jaCBOZXR3b3JrIFRoZW9yaWVzLCBsaWtlIE1hdXJpY2UgSGFsYnN3YWNoJiMzOTtzXHJcblxyXG53b3JrIG9uIHRoZSBjbGVhcmx5IGRlZmluZWQgbmV0d29yayBwYXR0ZXJucyBvZiBhIHNvY2lldHkmIzM5O3MgQ29sbGVjdGl2ZSBNZW1vcnkuPC9wPlxyXG5cclxuXHJcblxyXG48cD5ObyBvdGhlciBhY2FkZW1pYyBmaWVsZCBoYXMgY29sbGVjdGVkIGFuZCByZWZpbmVkIGtub3dsZWRnZSBvbiBuZXR3b3JrIGFyYml0cmFyaW5lc3MsIHN1Y2ggdGhhdCBFY29ub21pYyYjMzk7cyAmcXVvdDtpcnJhdGlvbmFsXHJcblxyXG5iZWhhdmlvcnMmcXVvdDsgYW5kIE1hdGhlbWF0aWNhbCAmcXVvdDtjb21wbGV4aXR5IG1vZGVscyZxdW90OyBkbyBub3RcclxuXHJcbjxpPnRvdWNoIHRvIHRoZSBib25lPC9pPiB0aGUgbWVhbmluZywgdGhlIGludGVyc2VjdGlvbmFsaXR5IG9mIG5ldHdvcmsgYW5hbHlzaXMsIHdoaWNoIG11c3QgaW5jb3Jwb3JhdGUgc2ltdWx0YW5lb3VzXHJcblxyXG5ub2RlIGNoYW5nZXMgKHBlcnNvbiBnZXRzIGpvYiAvb3IvIGRvZXMgbm90IGdldCBqb2IpLCBuZXR3b3JrIGNoYW5nZXMgKEFsbCBnZXQgam9icyAvb3IvIG9ubHkgMyBvZiAxNSBuZXR3b3JrIGdyb3Vwc1xyXG5cclxuZ2V0IGpvYnMpLCBhbmQgbW9zdCBpbXBvcnRhbnRseSB0aGVcclxuXHJcbjxpPnJlbGF0aW9uc2hpcDwvaT4gY2hhbmdlcyAoYWxsIGpvYnMgYWx3YXlzIHVzZWZ1bCAvb3IvIGhhbGYgb2Ygam9iIGdyb3VwcyBubyBsb25nZXIgdXNlZnVsKSBhY3Jvc3MgdGltZSBhbmQgZml4ZWQuPC9wPlxyXG5cclxuXHJcblxyXG48cD5GaW5lLiBTbywgd2h5IGlzIFNvY2lvbG9neSYjMzk7cyBuZXR3b3JrIHRoZW9yeSBzbyB2YWx1YWJsZSBiZXlvbmQganVzdCB0aGUgbmV0d29yayBpbnNpZ2h0cyBnbGVhbmVkIGZyb20gMTl0aCBhbmRcclxuXHJcbjIwdGggY2VudHVyaWVzJiMzOTsgbmV0d29yayBwcm9ibGVtcz8gRm9sbG93OiBFdXJvcGVhbiBzb2Npb2xvZ3kgY2FtZSBvZiBhZ2UgaW4gdGhlIGFuYWxvZyBzb2NpYWwgZXJhLCB3aGlsZSBOb3J0aFxyXG5cclxuQW1lcmljYW4gU29jaW9sb2d5IG9ubHkgcmVjZW50bHkgY29tZSBvZiBhZ2UgKFF1ZWJlYyBpbiB0aGUgMTk2MCYjMzk7cyBbcG9zdC0xOTY4XSwgVS5TLiBpbiB0aGUgMTk5MCYjMzk7c1twb3N0LTE5OTldLFxyXG5cclxuaW4gdGhlIGRpZ2l0YWwgc29jaWFsIGVyYS4gVGhlcmVmb3JlLCB0aGUgcHJvYmxlbS1zb2x2aW5nIHBhdHRlcm5zIG9mIHBhc3Qgc29jaW9sb2d5IGFyZSBpbmhlcmVudGx5IHNtYWxsLWRhdGEgYW5kXHJcblxyXG5tb3JlIHF1YWxpdGF0aXZlIGFuYWx5c2lzLCBhbmQgdGh1cyBvbmx5IFNvY2lvbG9neSBpbmNvcnBvcmF0ZXMgJnF1b3Q7aHVtYW4tbmVzcyZxdW90OyBpbnRvIHRoZSBiaWxsaW9uIHJvd3MgYW5kXHJcblxyXG5jb2x1bW5zIG9mIHF1YW50aXRhdGl2ZS0tbnVtYmVycy1vbmx5LS1hbmFseXNpcy48L3A+XHJcblxyXG5cclxuXHJcbjxwPkZvciBleGFtcGxlLCBPeGZvcmQtZGV2ZWxvcGVkIFMuSS5FLk4uQS4gU29mdHdhcmUgYWNjb21wbGlzaGVzIHRoaXMgdGFzay4gU0lFTkEtLW5hbWVkIGZvciBTaW11bGF0aW9uIEludmVzdGlnYXRpb25cclxuXHJcbmZvciBFbXBpcmljYWwgTmV0d29yayBBbmFseXNpcy0tc29mdHdhcmUgY2FsY3VsYXRlcyB0aGUgcmVhbC10aW1lIHZhbHVlcywgZGlyZWN0aW9uLCBhbmQgY29uZGl0aW9ucyBvZiBlYWNoIHJlbGF0aW9uc2hpcFxyXG5cclxuKGxpbmspIGluIGEgbmV0d29yaywgc2ltdWx0YW5lb3VzbHkgYXMgZWFjaCBub2RlLCBuZXR3b3JrLCBvciBhbHRlci1saW5rIGNoYW5nZXMgb3IgaXMgY2hhbmdlZDsgd2l0aCB0aGlzLCBpdCBpc1xyXG5cclxucG9zc2libGUgdG8gaXNvbGF0ZSBkaXJlY3Rpb25hbCwgY29uZGl0aW9uYWxcclxuXHJcbjxpPmluZmx1ZW5jZSBjaGFuZ2U8L2k+IGluIHJlYWwtdGltZS4gUmVhbC10aW1lIHNvdW5kcyBpbXBvc3NpYmxlLCBob3dldmVyLCB0aGUgU0lFTkEgZG9jdW1lbnRhdGlvblxyXG5cclxuPHN1cCBpZD1cIjlvbmVcIj4yPC9zdXA+IGRlc2NyaWJlcyBpdHMgcHJvZ3JhbSBhbGdvcml0aG0gdG8gdGhlIHN0YXRpc3RpY2FsIGFuYWx5c2lzIG9mIG5ldHdvcmsgZGF0YSwgd2l0aCB0aGUgZm9jdXMgb24gc29jaWFsIG5ldHdvcmtzLjwvcD5cclxuXHJcblxyXG5cclxuPHA+QW4gZWFzeSBleGFtcGxlIHRvIGdyYXNwIHRoaXMgaXMgdGhlIGNvbmNlcHQgb2Ygd2hldGhlciBhIHBlcnNvblxyXG5cclxuPGk+c2VsZi1zZWxlY3RzIDwvaT4oZS5nLiwgZHVlIHRvIHN1YmNvbnNjaW91cyBsZWFuaW5ncykgaW50byBhIGdyb3VwIGFuZCB0aHVzIG1hdGNoZXMgdG8gZnJ1aXRpb24gdGhlIGdyb3VwJiMzOTtzXHJcblxyXG5iZWhhdmlvciB3aXRoIGxpdHRsZSBncm91cCBpbmZsdWVuY2U/IE9yIGRvZXMgdGhpcyBzYW1lIHBlcnNvbiBqb2luIGEgZ3JvdXAgYW5kIGVtdWxhdGVzIHRoZSBncm91cCYjMzk7cyBiZWhhdmlvcixcclxuXHJcbmJ5IHRoZSBncm91cCYjMzk7cyBpbmZsdWVuY2Ugb3ZlciB0aW1lLiBTb2Npb2xvZ2ljYWwgbmV0d29yayBhbmFseXNpcywgdXNpbmcgU25qZGVyJiMzOTtzIFNJRU5BIHNvZnR3YXJlLCBhY2hpZXZlc1xyXG5cclxudGhlIGltcG9zc2libGUgd2l0aCB0aGUgY2xvc2VkLCBkaXJlY3RlZCBncmFwaCBuZXR3b3JrcyB0aGF0IGNoYXJhY3Rlcml6ZSBibG9ja2NoYWluIHRlY2hub2xvZ3kuIFRoZSBuZXR3b3JrIGdyYXBoXHJcblxyXG5jYW4gYmUgaGVyZSB1bmRlcnN0b29kIGFzIGVudGlyZSAoY29tcGxldGUpIG5ldHdvcmtzIChpLmUsIHRoZSBibG9ja2NoYWluIGluIGl0cyBlbnRpcmV0eSB3aXRob3V0IGhhcmQgZm9ya3MpLCBub3RcclxuXHJcbmFzIHBlcnNvbmFsIChlZ29jZW50ZXJlZCkgbmV0d29ya3M6IFVzaW5nIHRoaXMgU0lFTkEgbW9kZWwgYWxsb3dzIGZvciB0aGUgbmVjZXNzYXJ5IGFzc3VtcHRpb25zIHRoYXQgYSBzZXQgb2Ygbm9kZXNcclxuXHJcbihzb2NpYWwgYWN0b3JzKSBpcyBnaXZlbiwgYW5kIGFsbCB0aWVzIChsaW5rcykgYmV0d2VlbiB0aGVzZSBub2RlcyBhcmUga25vd24gLSBleGNlcHQgcGVyaGFwcyBmb3IgYSBtb2RlcmF0ZSBhbW91bnRcclxuXHJcbm9mIG1pc3NpbmcgZGF0YTwvcD5cclxuXHJcblxyXG5cclxuPHA+SWYsIGFuZCBvbmx5IGlmLCB0aGlzIGxldmVsIG9mIGFuYWx5c2lzIG1heSBiZSBhY2hpZXZlZCwgdGhlIGJsb2NrY2hhaW4gZGV2ZWxvcG1lbnQgbWF5IGZvbGxvdyBhIGxpbmVhciwgZGlyZWN0ZWRcclxuXHJcbnBhdGggb2YgbWF0dXJpdHkgd2l0aCBzb2NpYWwgYW5kIHdvcmxkIG5lZWRzLiBVbnRpbCB0aGF0IHRpbWUsIHRoYXQgU29jaW9sb2d5IE5ldHdvcmsgVGhlb3Jpc3RzIGFyZSBjYWxsZWQgdXBvbixcclxuXHJcbmJsb2NrY2hhaW4gZGV2ZWxvcGVycyB3aWxsIGNvbnRpbnVlIHRvIGJhdCB0aGVpciBhcm1zIGluIHRoZSBkYXJrLCBzdHVtYmxpbmcgb3ZlciBhZ2FpbiB0aGUgc2FtZSBidWdzLiBTYWRseSwgdGhpc1xyXG5cclxuc2VtaS1vcGFxdWUgZnV0dXJlIGltcGxpY2F0ZXMgdGhlIHNhbWUgZmF0ZSBhcyB0aG9zZSB0aGF0IGF0dGVtcHQgdG8gdXNlIGJsb2NrY2hhaW4gZm9yIHRoZWlyIGN1cnJlbmN5LCBjb250cmFjdCxcclxuXHJcbmFuZCBvdGhlciBzb2NpZXRhbCBuZWVkcy0taW4gdGhpcyBjYXNlLCB0aGUgYmxpbmQgd2lsbCBpbmRlZWQgbGVhZCB0aGUgYmxpbmQuPC9wPlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZvb3Rub3Rlc1wiPjEuXHJcblxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5qb3VybmFscy51Y2hpY2Fnby5lZHUvZG9pL2Ficy8xMC4xMDg2LzIyNjU1MFwiIGlkPVwiOW9uZVwiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwOi8vd3d3LmpvdXJuYWxzLnVjaGljYWdvLmVkdS9kb2kvYWJzLzEwLjEwODYvMjI2NTUwPC9hPlxyXG5cclxuPGJyIC8+XHJcblxyXG48L3A+XHJcblxyXG48cD5cclxuXHJcbjIuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuc3RhdHMub3guYWMudWsvfnNuaWpkZXJzL3NpZW5hL1wiIGlkPVwiOW9uZVwiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwczovL3d3dy5zdGF0cy5veC5hYy51ay9+c25pamRlcnMvc2llbmEvPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJmZWIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMi0xMVwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oNT5cclxuXHJcblxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+V2ViIERldiBBZmZhaXJzPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMTEsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyIGRhaWx5dGl0bGVcIj5Ib3cgQ2FuIFdlIEJlc3QgTW9kdWxhcml6ZSBvdXIgQXBwIERlc2lnbnMgaW4gT3JkZXIgdG8gQWNoaWV2ZSB0aGUgTXVjaCBWYXVudGVkICZxdW90O1NlcGFyYXRpb24gb2YgQ29uY2VybnMmcXVvdDs/PC9oNj5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlRoZXJlIHdhcyBvbmNlIGEgdGltZSBmb3IgQXBwIERldmVsb3BlcnMgdGhhdCBvdXIgaGFiaXRzIGZvbGxvd2VkIG91ciBpbm5lci1waGlsb3NvcGhlcnMtLWFzIGFuIEVzdGVlbWVkIE9yZGVyIG9mXHJcblxyXG5Db2RlcnMtLXdlIGhlbGQgb3Vyc2VsdmVzIGluIHRoZSBoaWdoZXN0IHJlZ2FyZCB0byBzZXBhcmF0ZSBmb3JtIGZyb20gZnVuY3Rpb24sIGFuZCBzdHlsZSBmcm9tIHN0cnVjdHVyYWwgZGVzaWduLlxyXG5cclxuSGVuY2UsIGluIHRoZSBlYXJseSAyMDAwJiMzOTtzLCBhIHRyaS1wYXJ0aXRlLCBzZW5zaWJsZSB3b3JsZCBndWlkZWQgZXZlcnkgd2ViIGNvZGVyIHRvIGFiaWRlIGJ5IFRoZSBzY2FmZm9sZGluZ1xyXG5cclxub2YgSFRNTCwgZnVuY3Rpb25hbGl0eSBvZiBKYXZhU2NyaXB0LCBhbmQgc3R5bGluZyBvZiBDU1MuIEEgZGVjYWRlIGxhdGVyLCB3ZSBtdXN0IHRocm93IG91dCB0aGlzIGFudGlxdWF0ZWQgZGl2aXNpb25cclxuXHJcbm9mIGxhYm9yIHdpdGhpbiB3ZWIgY29kaW5nLjwvcD5cclxuXHJcblxyXG5cclxuPHA+TGlicmFyeSBtb2R1bGFyaXphdGlvbiwgKHRoaW5rIEpRdWVyeSwgSlNYLCBCb290c3RyYXAsIGV0Yy4pIHdpdGhpbiBKYXZhc2NyaXB0IEVTMTYgcmV2ZWFscyB0aGF0IG1vZHVsZXMgYW5kIGNvbXBvbmVudHNcclxuXHJcbk11c3QgaG9sZCB0b2dldGhlciBDU1MvSFRNTC9KUywgcGFydCBieSBwYXJ0LiBTbywgaWYgYSBkZWNhZGUgYWdvIHRocmVlIHRlYW1zIGhhbmRsZWQgaHRtbCwganMsIGNzcywgaXQgaXMgbm93IHJlcXVpc2l0ZVxyXG5cclxudG8gZGl2aWRlIHVwIDMgdGVhbXMgdG8gMyBjb21wb25lbnRzIChhIHRlYW0gZm9yIHRoZSBjYXJvdXNlbCB3aWRnZXQsIGEgdGVhbSBmb3IgdGhlIG5hdmlnYXRpb24gd2lkZ2V0cywgYW5kXHJcblxyXG48aT5cclxuXHJcbmVhY2g8L2k+IG9mIHRoZXNlIGNvbXBvbmVudCB0ZWFtc1xyXG5cclxuPHN0cm9uZz5tdXN0PC9zdHJvbmc+IGJlIG1haW50YWluZWQgdG9nZXRoZXIsIG5vdCBzZXBhcmF0ZWx5LCB0aGUgbW9kdWxlJiMzOTtzIHJlcXVpcmVkIGh0bWwsIGpzLCBjc3MuPC9wPlxyXG5cclxuXHJcblxyXG48cD5UaGlzIG1lYW5zIHRoYXQgdGhlIG5ldyBEaXZpc2lvbiBvZiBMYWJvdXIgY2FuIG5vIGxvbmdlciBmb2xsb3cgcGFzdCBwYXR0ZXJucyBmcm9tIDUgeWVhcnMgYWdvLiBPdGhlcndpc2UsIGFueSBhbmRcclxuXHJcbmFsbCBjb2Rpbmcgd2lsbCBuZWNlc3NhcmlseSBiZWdpbiB0byAmIzM5O3JlaW52ZW50IHRoZSB3aGVlbC4mIzM5OyBUaGlzIGlzIGJlY2F1c2UgYW55IG1vZHVsZSwgYW55IGxpYnJhcnkgeW91IGdvXHJcblxyXG50bywgd2lsbFxyXG5cclxuPGk+YWxyZWFkeTwvaT4gaGF2ZSBpdHMgSFRNTCBwcmUtY29uZmlndXJlZCwgSlMgcHJlLWNvbmZpZ3VyZWQsIENTUyBwcmUtY29uZmlndXJlZC4gVGh1cywgYXR0ZW1wdHMgdG8gZXh0cmljYXRlIG5ld1xyXG5cclxuY3NzIGZyb20gb25lIG1vZHVsZSB0byBhbm90aGVyIChvciB3b3JzZSB5ZXQsIHNoYXJpbmcgY3NzIG9mIG1vZHVsZXMpLCB3aWxsIG9ubHkgaW52aXRlIGV2ZW50dWFsIG1pc2VyeSwgYWxtb3N0XHJcblxyXG5pbnN0YW50bHkgc2V0dGluZyBib29ieSB0cmFwcyBmb3IgdGhlIG5leHQgY29kZXJzIHVwb24gYXJyaXZhbC48L3A+XHJcblxyXG5cclxuXHJcbjxwPlNvLCB3aGVyZSBpcyB0aGUgY3JlYXRpdml0eT8gV2hlcmUgaXMgdGhlIG9yaWdpbmFsaXR5IHRoZW4/IEl0IGlzIG5vdCBnb25lLiBJdCBoYXMgZXZvbHZlZCB0byBhIGhpZ2hlciBsZXZlbCBvZiBhYnN0cmFjdGlvbixcclxuXHJcbmxlYXZpbmcgdG8gYXV0b21hdGlvbiB0aGUgYm9yaW5nIHN0dWZmLiBTbywgaWYgVmFuaWxsYSBKUyBpcyBjb25zaWRlcmVkIG1hbHByYWN0aWNlIGluIHRoZSBtb2Rlcm4gd29ybGQsIGFuZCBpZlxyXG5cclxuYWQtaG9jIEpRdWVyeSBpcyBtb2NrZWQgYW5kIHNjb2ZmZWQgYXQgYnkgUmVhY3QgY29kZXJzLCB0aGVuIHdoZXJlIGlzIGNyZWF0aXZpdHk/IElmIHllc3RlcmRheSYjMzk7cyBjcmFmdCB3YXMgdGhlXHJcblxyXG5ob2lzdGluZyBvZiAxNSBqYXZhc2NyaXB0IGZ1bmN0aW9ucyBvbiBlYWNoIHBhZ2UsIHRoZSBOZXcgQXJ0IG9mIG1vZHVsYXIgY29kaW5nIGlzIGFraW4gdG8gYSBnYW1lIG9mIFRldHJpcy4gUGFydFxyXG5cclxuYnkgcGFydCwgbW9kdWxlIGJ5IG1vZHVsZSwgdGhlIG1vZGVybiBjb2RlciBvcGVuLXNvdXJjZSB3aW5kb3ctYnJvd3NlcyBhbmQgd2luZG93LXNob3BzOyBnb2VzIGhvbWUsIGFuZCBjdXRzIGFuZFxyXG5cclxucGFzdGVzLCBhbmQgZm9sZHMgYW5kIGNsaXBzLCB0aGVuIGFzc2VtYmxlcyBhbmQgaGFuZ3MgdG8gZHJ5LiBEbyBQeXRob24gcHJvZ3JhbW1lcnMgcmV3cml0ZSBlYWNoIHBhcnRpY3VsYXIgbW9kdWxlXHJcblxyXG5kZWZpbml0aW9uPyBUaGF0JiMzOTtzIGFic3VyZC4gRXF1YWxseSBhYnN1cmQgaXMgdGhlIGphdmFzY3JpcHQgcHJvZ3JhbW1lciB0aGF0IHJld3JpdGVzIGZyb20gc2NyYXRjaCB0aGVpciBtb2R1bGVzLjwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhlIGVzdGVlbWVkIE9yZGVyIG9mIEphdmFTY3JpcHQgQ29kZXJzIG11c3Qgd2FrZSB1cCwgYW5kIHJlZ2FpbiBpdHMgd29yay1sb2FkIGJhbGFuY2UgaW4gdGhpcyBuZXcgYWdlLS1hbiBhZ2UgdGhhdFxyXG5cclxuZWFjaCB5ZWFyIHNpbmNlIDIwMTQsIHRoZSBKYXZhU2NyaXB0IGxhbmd1YWdlIGlzIHJld3JpdHRlbiwgZWFjaCB5ZWFyIG5vdywgaW4gYm90aCBzeW50YWN0aWMgc3VnYXIgYW5kIGFsc28gZnVuZGFtZW50YWxcclxuXHJcbnN0cnVjdHVyZS0tZXNwZWNpYWxseSB0aGUgaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcgb2YgbW9kdWxlcy4gVGhlcmVmb3JlLCBwaGlsb3NvcGhpY2FsIEhvbm9yIGJlaG9vdmVzIGVhY2ggb2YgdXNcclxuXHJcbnRvIGEgaGlnaGVyIGNvbXBsZXhpdHksIGFuZCBhIG5ldyBjb21taXRtZW50IHRvLCB0aGUgJnF1b3Q7U2VwYXJhdGlvbiBvZiBDb25jZXJucy4mcXVvdDsgV2UgY2FuIGFsbG93IG91cnNlbHZlc1xyXG5cclxuYSBicmVhaywgdGhhbmtmdWwgZm9yIFByb2dyZXNzLCBhIHByb2dyZXNzIGJ5IHdoaWNoIHdlIG11c3RcclxuXHJcbjxpPlN0YW5kIG9uIHRoZSBTaG91bGRlcnMgb2YgR2lhbnRzPC9pPiwgYW5kIENvZGUtQ3JlYXRlITwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMTJcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDEyLCAyMDE4PC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+TWFyayBadWNrZXJiZXJnJiMzOTtzIElubm9jZW5jZTwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5GYWNlYm9vayBTY2FuZGFsc1xyXG5cclxuPHN1cD4xPC9zdXA+IG9mIHJlY2VudCBtb250aHMgaGF2ZSBkZW1vcmFsaXplZCB0aGUgbGVhZGVyc2hpcCBmb3IgYSByb2xlIG9mIG1pc2luZm9ybWF0aW9uIGluIHRoZSBUZWNoIEFnZSwgaG93ZXZlciBJXHJcblxyXG5jaGFyZ2UgTWFyayBadWNrZXJiZXJnJiMzOTtzIGlubm9jZW5jZVxyXG5cclxuPGk+bm90PC9pPiBiZWNhdXNlIGFsbCBvZiB1cywgYXMgYSBzb2NpZXR5LCB3ZXJlIGVxdWFsbHkgd2FybmVkLiBSYXRoZXIsIGFyYml0cmFyeSBtYXRoZW1hdGljYWwgZm9yY2VzIGNyZWF0ZWQgYWJub3JtYWwsXHJcblxyXG5uZXZlci1iZWZvcmUtc2VlbiBuZXR3b3JrIHN0cnVjdHVyYWwgZGVuc2l0eSBhbmQgc3ltbWV0cnkgcGF0dGVybnMuIFRlY2hub2xvZ2ljYWwgc2hpZnRzIHdlcmUgc28gZWZmaWNpZW50IGF0IG11bHRpcGx5aW5nXHJcblxyXG5hbmQgZXhhY2VyYmF0aW5nIG1pc2luZm9ybWF0aW9uIGJlY2F1c2UgYSBjdXJpb3VzIHNvY2lvbG9naWNhbCBuZXR3b3JrIHBoZW5vbWVub24gcmVuZGVyZWQgcGFydHMgb2Ygb3VyIGRhaWx5IHNvY2lhbFxyXG5cclxubGVhcm5pbmcgYW5kIGFjY3VsdHVyYXRpbmcgcHJvY2VzcyB0byBuZXR3b3JrIGZvcmNlcyBvdXQgb2Ygb3VyIG93biBjb250cm9sLjwvcD5cclxuXHJcblxyXG5cclxuPHA+QSBKYW51YXJ5IDIwMTYgQW1lcmljYW4gU29jaW9sb2d5IEFzc29jaWF0aW9uIE5ld3NsZXR0ZXIgRWRpdG9yaWFsXHJcblxyXG48c3VwPiAyPC9zdXA+IGZyb20gU2FsbHkgVC4gSGlsbHNtYW4sIGluIHdoaWNoIHNoZSBleHBsYWluZWQgaG93IHRoZSBzb2NpYWwgbWVjaGFuaXNtcyBvZiBvdXIgb3duIG1pc2luZm9ybWF0aW9uIHdlcmVcclxuXHJcbm5vdCBlbnRpcmVseSB3aXRoaW4gb3VyIG93biBjb250cm9sIHRvIHJlc2lzdC4gSW4gZmFjdCwgdGhlIGFyYml0cmFyeSAob2Z0ZW4gcmFuZG9tKSBzb2NpYWwgc3RydWN0dXJhbCBjaGFuZ2VzIGZyb21cclxuXHJcbmhpZ2hlciBzb2NpYWwtbWVkaWEgaG91cnMsIGNyZWF0ZSBhbiBhcmJpdHJhcnkgc29jaWFsIG5ldHdvcmsgc3RydWN0dXJlIHdob3NlIGxpbmtzIChpbiB0aGVpciBjb250ZW50IGFuZCBpbmZsdWVuY2UpXHJcblxyXG5iZWdpbiB0byBkb21pbmF0ZSBvdmVyIG5vZGVzIChlYWNoIG9mIHVzKS4gSW4gb3RoZXIgd29yZHMsIHRoZSBzd2F5IG9mIHRyZW5kcyBhbmQgb3BpbmlvbmF0ZWQgY3JpdGljYWwgdGhvdWdodCBiZWNvbWVzXHJcblxyXG5kb21pbmF0ZWQgYnkgdGhlIHJlbGF0aW9uc2hpcHMsIGUuZy4sIHRoZSAmcXVvdDtsaWtlcyZxdW90OyBhbmQgJnF1b3Q7c2hhcmVzJnF1b3Q7LCBsZWFkaW5nIHRvIGEgc3RhdGlzdGljYWxseSBuYXR1cmFsXHJcblxyXG5wcm9wZW5zaXR5IHRvd2FyZCBob21vZ2VuZWl0eS0tYS5rLmEuIGdyb3VwLXRoaW5rLiBUaGUgbWVjaGFuaXNtIGlzIGFraW4gdG8gcGVhY2VmdWxseSBzd2ltbWluZyBjbG9zZSBhbmQgcGFyYWxsZWxcclxuXHJcbnRvIHRoZSBjb2FzdGxpbmUsIGFuZCAoZHVlIHRvIHJhbmRvbSBjb2FzdGFsIGZsb29yIHN0cnVjdHVyZSksIGEgcmlwLXRpZGUgc3VkZGVubHkgc2hpcHMgeW91IGZhciBvdXQgdG8gc2VhLS1hIGZhdGFsXHJcblxyXG5hbmQgdHJhZ2ljIGZhdGUgcmVuZGVyaW5nIGV4cGVyaWVuY2VkIHN3aW1tZXJzIG91dCBvZiB0aGVpciBvd24gY29udHJvbC4gU2FtZSBwcmluY2lwbGUgd2l0aCBhbiBhcmJpdHJhcnlcclxuXHJcbjxpPnVuZGVybHlpbmcgYW5kIHVuc2VlbjwvaT4gbmV0d29yayBzdHJ1Y3R1cmUuPC9wPlxyXG5cclxuXHJcblxyXG48cD5PdXIgc29jaWFsIG5ldHdvcmsgc3RydWN0dXJlcyBhbHdheXMgYXJlIHByb25lIHRvIGNvbnRpbnVhbCBzaGlmdCwgYW5kIHNvIHRoZSB1c3VhbCAmcXVvdDtpbnRlcnJ1cHRpb25zJnF1b3Q7IHRoYXRcclxuXHJcbnByZXZpb3VzbHkgc3RvcHBlZCB0aGlzIGlud2FyZCBzaGlmdCBzb29uIGJlZ2FuIHRvIGRpc2FwcGVhci4gSGlsbHNtYW4gZXhwbGFpbnM6PC9wPlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+TGllcywgaGFsZi10cnV0aHMsIGFuZCBtaXNpbmZvcm1hdGlvbiBzcHJlYWQgc28gcmFwaWRseSBhY3Jvc3MgdGhlIHB1YmxpYyB0aHJvdWdoIGRpZ2l0YWwgY29tbXVuaWNhdGlvbiB0aGF0IHRoZVxyXG5cclxudGltZXNwYW4gZm9yIHRob3VnaHRmdWwsIGVmZmVjdGl2ZSBjb3JyZWN0aW9uIG9yIHJlYnV0dGFsIGlzIGluZmluaXRlc2ltYWwuIEJlY2F1c2Ugb2YgY29uZmlybWF0aW9uIEJpYXMsIG1pc2luZm9ybWF0aW9uXHJcblxyXG5hbmQgb3V0cmlnaHQgbGllcyBxdWlja2x5IHN0cmVuZ3RoZW4gcHJlY29uY2VpdmVkIHRydXRocyBvciBwcmUtaGVsZCBiZWxpZWZzIHRoYXQgYXJlIGFscmVhZHkgaGFyZCB0byBjaGFuZ2UuPC9wPlxyXG5cclxuXHJcblxyXG48cD5UaGVyZWZvcmUsIGV2ZW4gdGhvdWdoIHdlIGFsbCBoYXZlIGJlZW4gcG9pbnRlZGx5IHdhcm5lZCxcclxuXHJcbjxpPiBub25lIG9mIHVzPC9pPiB3aXRob3V0IGFkdmFuY2VkIHNvY2lvbG9naWNhbCBhbmFseXNpcyBza2lsbHMgY291bGQgdW5kZXJzdGFuZCB0aGF0IGEgY3VyaW91cyBuZXR3b3JrIHBoZW5vbW9uZW5vbi0tdWx0aW1hdGVseVxyXG5cclxuZHJpdmVuIGJ5IHNvbWUgYXJiaXRyYXJ5IG1hdGhlbWF0aWNhbCBjYWxjdWxhdGlvbiBpbnZvbHZpbmcgc2l6ZSwgZGVuc2l0eSwgc3ltbWV0cnksIGNvbmRpdGlvbmFsIGluZmx1ZW5jZXMsIGFuZFxyXG5cclxudGhlIHN0cmVuZ3RoIG9mIHRpZXMgb3V0d2VpZ2hpbmcgbmV0d29yayBub2Rlcy4gRm9yIHRoZSByZWFzb25zIG9mIHRoZXNlIGZhY3RvcnMsIG91ciBzb2NpYWwgaW5jbGluYXRpb25zIHdlcmVcclxuXHJcbjxpPm91dCBvZiBvdXIgY29udHJvbDwvaT4gLS0gbm8sIGJ1dCByZWFsbHksIHRoaXMgdGltZSB0aGV5IHdlcmUhPC9wPlxyXG5cclxuXHJcblxyXG48cD5BbmQgc28sIHdlIGNhbiBsZWFybiBmcm9tIFNvY2lvbG9neSB3aGF0IHN0ZXBzIHRvIHRha2UgaW4gb3JkZXIgdG8gY291bnRlcmFjdCByYW5kb20sIGJ1dCByaXNreSwgbmV0d29yayBwaGVub21lbmFcclxuXHJcbi0tIGJlY2F1c2Ugbm9ib2R5IGxpa2VzIHRvIGdvIGZvciBhIHN3aW0gYXQgdGhlIGJlYWNoLCBhbmQgdW53aXR0aW5nbHkgZ2V0IHNoaXBwZWQgb3V0IHRvIHNlYSE8L3A+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZm9vdG5vdGVzXCI+MS4gV2lyZWQgTWFnYXppbmVcclxuXHJcbjxpPkluc2lkZSB0aGUgVHdvIFllYXJzIHRoYXQgU2hvb2sgRmFjZWJvb2stLWFuZCB0aGUgV29ybGQ8L2k+IChGZWJydWFyeSwgMjAxOClcclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy53aXJlZC5jb20vc3RvcnkvaW5zaWRlLWZhY2Vib29rLW1hcmstenVja2VyYmVyZy0yLXllYXJzLW9mLWhlbGxcIlxyXG5cclxudGFyZ2V0PVwiX2JsYW5rXCI+IFdpcmVkIE1hZ2F6aW5lLCA8L2E+XHJcblxyXG48YnIgLz5cclxuXHJcbjxiciAvPiAyLkFTQVxyXG5cclxuPGk+Rm9vdG5vdGVzPC9pPi4gKEphbnVhcnksIDIwMTYpXHJcblxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5hc2FuZXQub3JnL2Zvb3Rub3Rlcy9qYW4xNi9pbmRleC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IHd3dy5hc2FuZXQub3JnL2Zvb3Rub3Rlcy9qYW4xNi88L2E+XHJcblxyXG48L3A+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTEzXCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5Tb2Npb2xvZ3kgVG9tb3Jyb3chPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMTMsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyIGRhaWx5dGl0bGVcIj5UaGUgTW9kZXJuIERvY3RvcnMmIzM5OyBVcGRhdGVkIFByZXBhcmF0aW9uIGZvciB0aGUgT2F0aFxyXG5cclxuPHN1cD4xPC9zdXA+IG9mIEhpcHBvY3JhdGVzOlxyXG5cclxuPGJyIC8+IE9uIHRoZSAyMDE1IFNvY2lhbCBTY2llbmNlcyBNb2RpZmljYXRpb24gdG8gdGhlIEFBTUMgTWVkaWNhbCBDb2xsZWdlIEFkbWlzc2lvbnMgVGVzdCAoTUNBVCk8L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+T3RoZXIgdGhhbiBjb2xsZWdlIHByZS1tZWQgc3R1ZGVudHMsIGZldyBrbm93IHRoZSBNQ0FUIGV4YW0tLXRoZSBnYXRla2VlcGVyIG9mIFUuUy4gJmFtcDsgQ2FuYWRpYW4gTWVkaWNhbCBTY2hvb2xzLS11bmRlcndlbnRcclxuXHJcbmEgbWFqb3IgbW9kaWZpY2F0aW9uIGluIDIwMTUuXHJcblxyXG48c3VwPjI8L3N1cD4gTXVjaCBkZWVwZXIgdGhhbiBCaW9sb2dpY2FsIGFuZCBUZWNobm9sb2dpY2FsIHVwZGF0ZXMsIG1ham9yIHNlY3Rpb25zIHdlcmUgYWRkZWQgYW5kL29yIGV4cGFuZGVkIGluY2x1ZGluZ1xyXG5cclxudGhlIFNvY2lhbCwgUHlzY2hvbG9naWNhbCBhbmQgQmlvbG9naWNhbCBmb3VuZGF0aW9ucyBvZlxyXG5cclxuPGk+YmVoYXZpb3I8L2k+LiBOYW1lZCB0aGVcclxuXHJcbjxpPkhlYWx0aCBTeXN0ZW1zIFNjaWVuY2U8L2k+XHJcblxyXG48c3VwPjM8L3N1cD4sIHRoZSBBbWVyaWNhbiBNZWRpY2FsIEFzc29jaWF0aW9uJiMzOTtzIG1vZGVybiwgaG9saXN0aWMgYXBwcm9hY2ggYXJ0aWN1bGF0ZXMgb3V0Y29tZXMtYmFzZWQgbWVhc3VyZXMgZm9yXHJcblxyXG5oZWFsdGh5IGxpdmluZyBhbmQgZGlzZWFzZSBwcmV2ZW50aW9uIGVmZm9ydHMuIFlvdSBjb3VsZCBzYXkgdGhlIEFNQSBpcyBpbmRlZWQsXHJcblxyXG48aT53b2tlPC9pPi48L3A+XHJcblxyXG5cclxuXHJcbjxwPkJ1dCByZWFsbHksIHdoYXQmIzM5O3MgdGhlIGRpZmZlcmVuY2UgYW5kIHdoeSB3b3VsZCB3ZSBjYXJlPyBBbmQsIHdobyBkb2VzbiYjMzk7dCBrbm93IHRoYXQgYW4gYXBwbGUtYS1kYXkga2VlcHNcclxuXHJcbnRoZSBkb2N0b3IgYXdheT8gRHIuIEplZmZyZXkgQm9ya2FuLCBNRCwgUEhEIG9mIEJyb3duIFVuaXZlcnNpdHkmIzM5O3MgV2FycmVuIEFscGVydCBNZWRpY2FsIFNjaG9vbCwgZXhwbGFpbnMgdGhlXHJcblxyXG5ldmlkZW50IHJvbGUgb2YgYWxsIHRob3NlIHVubm90aWNlZCBzb2NpYWwgaW50ZXJhY3Rpb25zIGludm9sdmVkIGluIG9idGFpbmluZyBhbmQgY29uc3VtaW5nIHRoYXQgYXBwbGUuIEZ1cnRoZXIsXHJcblxyXG50aGUgc3BhdGlhbCBhbmQgZWNvbm9taWNcclxuXHJcbjxpPmF2YWlsYWJpbGl0eTwvaT4gb2YgdGhhdCBhcHBsZSBhbHNvIHBsYXlzIGEgcm9sZSBpbiBrZWVwaW5nIHRoZSBkb2N0b3IgYXdheS4gQm9ya2FuIGV4cGxhaW5zOjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPkl0JiMzOTtzIHRpbWUgZm9yIHVzIHRvIHRha2UgYSBsZWFwIGZvcndhcmQgaW4gZWR1Y2F0aW5nIHBoeXNpY2lhbnMgZm9yIHRoZSBoZWFsdGggY2FyZSBkZWxpdmVyeSBtb2RlbHMgb2YgdGhlIGZ1dHVyZSZtZGFzaDt0aG9zZVxyXG5cclxudGhhdCBhaW0gdG8gaW1wcm92ZSBub3QganVzdCB0aGUgaGVhbHRoIG9mIHRoZSBpbmRpdmlkdWFsIHBhdGllbnQgYW5kIHRoZWlyIGZhbWlseSwgYnV0IGFsc28gdGhlIGNvbW11bml0eSBhbmQgdGhlXHJcblxyXG5wb3B1bGF0aW9uLlxyXG5cclxuPHN1cD40PC9zdXA+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPldoYXQsIHRoZW4sIHNwZWNpZmljYWxseSwgYXJlIHRoZSBtZWNoYW5pc21zIHRoYXQgYSBjb21tdW5pdHkgbmV0d29yayYjMzk7cyBhZ2dyZWdhdGVkIGhlYWx0aCBtYXkgYmUgaW5leHRyaWNhYmx5XHJcblxyXG50aWVkIHVwIHdpdGhcclxuXHJcbjxpPm91ciBvd248L2k+IGluZGl2aWR1YWwgaGVhbHRoPyBJbiBzaG9ydCwgdGhleSBhcmUgdGhlIHNoYXJpbmcgb2YgaGVhbHRoLXByb21vdGluZyByZXNvdXJjZXMsIHRpbWVseSBhc3Npc3RhbmNlLFxyXG5cclxuaGVhbHRoLXByb21vdGluZyBpbmZvcm1hdGlvbiBjaGFubmVscyAtLSBhbGwgdGhpcywgYW1vbmcgdGhlIGNvdW50bGVzcyBwZXJrcyBvZiBhIGhlYWx0aHkgc29jaWFsIGNpcmNsZSE8L3A+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiY2l0YXRpb25zXCI+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwOi8vd3d3LmdyZWVrbWVkaWNpbmUubmV0L3dob3Nfd2hvL1RoZV9IaXBwb2NyYXRpY19PYXRoLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgT2F0aCBvZiBIaXBwb2NyYXRlczwvYT5cclxuXHJcbjxiciAvPiAyLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vc3R1ZGVudHMtcmVzaWRlbnRzLmFhbWMub3JnL2FwcGx5aW5nLW1lZGljYWwtc2Nob29sL2FydGljbGUvY2hhbmdpbmctbWNhdC1leGFtL1wiIHRhcmdldD1cIl9ibGFua1wiPlRoZSAyMDE1IEFBTUEgQ2hhbmdlcyB0byB0aGUgTWVkaWNhbCBDb2xsZWdlIEFkbWlzc2lvbnMgVGVzdDwvYT5cclxuXHJcbjxiciAvPiAzLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFtYS1hc3NuLm9yZy9lZHVjYXRpb24vdGVhY2hpbmctbmV3LWNvbnRlbnQtaGVhbHRoLXN5c3RlbXMtc2NpZW5jZVwiIHRhcmdldD1cIl9ibGFua1wiPkFtZXJpY2FuIE1lZGljYWwgQXNzb2NpYXRpb24mIzM5O3NcclxuXHJcbjxpPlRlYWNoaW5nIE5ldyBDb250ZW50IEhlYWx0aCBTeXN0ZW1zIFNjaWVuY2U8L2k+XHJcblxyXG48L2E+XHJcblxyXG48YnIgLz4gNC5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5hbWEtYXNzbi5vcmcvZWR1Y2F0aW9uL3RlYWNoaW5nLW5ldy1jb250ZW50LWhlYWx0aC1zeXN0ZW1zLXNjaWVuY2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pYmlkLjwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMTRcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPlxyXG5cclxuPHM+V2ViIERldiBBZmZhaXJzPC9zPiBTb2Npb2xvZ3kgVG9tb3Jyb3chPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMTQsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48cCBzdHlsZT1cImNvbG9yOmdyZWVuO1wiPlxyXG5cclxuPGk+RHVlIHRvIHRoZSBUcmFnaWMgRXZlbnRzIGluIEZsb3JpZGEsIFRlY2ggdG8gdGhlIFJlc2N1ZSBibG9nIFJlc2NoZWR1bGVkIHRvIEZlYnJ1YXJ5IDE2dGggLi4uXTwvaT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+XHJcblxyXG48cz5UZWNoIHRvIHRoZSBSZXNjdWU6IFNlY29uZGFyeSBoZWFsdGggZWZmZWN0cyBvZiB0aGUgRml0Yml0IHRvd2FyZCBoZWFsdGgtaW5mb3JtYXRpb24gc2hhcmluZyBjaGFubmVscyB3aXRoaW4gYSBjb21tdW5pdHkuPC9zPlxyXG5cclxuPC9oNj5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiIHN0eWxlPVwiY29sb3I6Z3JlZW47XCI+R2l2ZW4gdGhhdCBhIGNvbW11bml0eSBuZXR3b3JrJiMzOTtzIGFnZ3JlZ2F0ZWQgaGVhbHRoIGlzIGluZXh0cmljYWJseSwgYW5kIHN5bW1ldHJpY2FsbHksIHRpZWQgdXAgd2l0aFxyXG5cclxuPGk+b3VyIG93bjwvaT4gaW5kaXZpZHVhbCBoZWFsdGgsIGFwcC1kZXZlbG9wZXJzIG1heSBkZXNpZ24gYWN0aXZpdHktIGFuZCBjb21tdW5pY2F0aW9uLWJhc2VkIGFwcHMgbW9yZSByZXNwb25zaWJseSxcclxuXHJcbmFuZCBpbiB0b3VjaCB3aXRoIG1vZGVybiBoZWFsdGhjYXJlIHJlY29tbWVuZGF0aW9ucy4gQWZ0ZXIgYWxsLCBpZiB0aGUgU2FpbnRseSBNYXJrIFp1Y2tlcmJlcmcmIzM5O3MgY29tbXVuaWNhdGlvbi1cclxuXHJcbmFuZCBhY3Rpdml0eS1iYXNlZCBhcHAgaW5hZHZlcnRhbnRseSBsZWQgdG8gbm92ZWwsIGFuZCBkZWVwbHkgY29uc2VxdWVudGlhbCwgZWZmZWN0cywgdGhlbiAuLi48L3A+XHJcblxyXG48c3BhbiBjbGFzcz1cImFsZXJ0XCI+KiBHaXZlbiB0aGUgVHJhZ2ljIEV2ZW50cyBpbiB0aGUgU2Nob29sIFNob290aW5nIGluIEZsb3JpZGEsIEkgZmVsdCBhIHRvcGljIG9mIG1vcmUgZ3Jhdml0eSB3YXMgaW4gb3JkZXIgLi4uIDooIDwvc3Bhbj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPkZlYiAxNCwgMjAxODwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkEgTmV3IEtlcm5lbCwgYW5kIHRoZSBNYW5pZmVzdGF0aW9uIG9mIGEgVHdvLUh1bmRyZWQgWWVhciBQcm9ibGVtIG5hbWVkXHJcblxyXG48aT5Bbm9taWU8L2k+XHJcblxyXG48L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+R2l2ZW4gdGhlIHRyYWdpYyBldmVudHMgYXQgYSBGbG9yaWRhIHNjaG9vbCBvdmVyIFZhbGVudGluZSYjMzk7cyBEYXksIDIwMTgsIHdobyBjYW4gd3JpdGUgYWJvdXQgRml0Yml0cz8gU28sIHRob3VnaHRzXHJcblxyXG5hbmQgc3ltcGF0aHkgZm9yIHRob3NlIHN0dWRlbnRzIHRvZGF5IHRoYXQgZW5kdXJlZCB0aGlzIGhvcnJvci4gMTkgeWVhcnMgYWZ0ZXIgdGhlIGZpcnN0LW9mLWl0cy1raW5kIHNjaG9vbCBzaG9vdGluZyxcclxuXHJcbndlIGFzIGFuIEFtZXJpY2FuIHNvY2lldHkgaGF2ZSBub3QgYmVjb21lICYjMzk7bnVtYiYjMzk7IHRvIHRoZXNlIGV2ZW50cy4gSXQgaHVydHMgYXMgbXVjaCBhcyBpdCBkaWQgaW4gMTk5OS48L3A+XHJcblxyXG5cclxuXHJcbjxwPkRhcm4gdGhhdCBpbm5vY3VvdXMgU3ByaW5nIGRheSBpbiAxOTk5LCB3aGVuIHdlIGhlYXJkIHRoZSBtb3N0IGFic3VyZCBuZXdzLS0gc3R1ZGVudHMgYXR0YWNrZWQgdGhlaXIgb3duIGNvbGxlYWd1ZXNcclxuXHJcbmF0IENvbG9tYmluZT8gSW4gbXkgYmxvZyBwb3N0IGZyb20gSmFudWFyeSAxMCwgSSB3cm90ZSB0aGF0IEFtZXJpY2FuIFNvY2lvbG9neSwgYWxvbmcgd2l0aCBRdSZlYWN1dGU7YmVjLCBjYW1lIG9mXHJcblxyXG5hZ2UgbXVjaCBsYXRlciB0aGFuIEV1cm9wZWFuIFNvY2lvbG9neS4gVGhlIHBhc3QgNTAgeWVhcnMmIzM5OyBzb2NpYWwgY2hhbmdlcyBhbmQgbmV3IHByb2JsZW1zIGFyZSBnZW5lcmFsbHkgYXRycmlidXRlZFxyXG5cclxuZm9yIHRoZSBpbmNyZWFzaW5nIGRlbWFuZCBmb3Igc29jaW9sb2dpY2FsIGV4cGVydGlzZSBhZnRlciAxOTk5LCBhZnRlciBhIHNpbmd1bGFyLCBzZW5zZWxlc3MgdHJhZ2VkeSBvZiBhIHNjaG9vbFxyXG5cclxuc2hvb3RpbmctLXRoaXMgZXZlbnQsIGxpa2UgYSBzbWFsbCBrZXJuZWwgb2Ygc29jaWV0YWwgZGVzcGVyYXRpb24gZm9yIGEgc29sdXRpb24tLWxlZCB0byBhIGZsdXJyeSBvZiBzZWxmLXByb2Zlc3NlZFxyXG5cclxuc29jaW9sb2dpc3RzICZhZ3JhdmU7IGxhIE1pY2hhZWwgTW9vcmUmIzM5O3MgQ29sb21iaW5lLCBhbmQgb3RoZXIgc29jaWFsLXJlc3BvbnNpYmlsaXR5IHRoZW1lZCBzb2NpYWwgY29uc2Npb3VzbmVzcy5cclxuXHJcblNvIGZhciwgb25seSBtdXR1YWxseSBpbmNvbXBhdGlibGUgc29sdXRpb25zLiBUaGUgcHJvYmxlbSwgaG93ZXZlciwgaXMgbm90IG5ldywgb25seSB0aGUgbWFuaWZlc3RhdGlvbiBvZiBpdC48L3A+XHJcblxyXG5cclxuXHJcbjxwPlN1aWNpZGUgcmF0ZXMgaW4gMTl0aCBjZW50dXJ5IEZyYW5jZSwgZGlzcHJvcG9ydGlvbmF0ZWx5IGhpZ2gsIGFsc28gc2VydmVkIGFzIGEgc3ltcHRvbWF0aWMgbWFuaWZlc3RhdGlvbiBvZiB0aGVcclxuXHJcbnNhbWUgcHJvYmxlbSwgY2FsbGVkXHJcblxyXG48aT5Bbm9taWUuPC9pPlxyXG5cclxuPHN1cD4xPC9zdXA+IFRoZSB0ZXJtLFxyXG5cclxuPGk+QW5vbWllPC9pPiwgY29pbmVkIGJ5IEVtaWxlIER1cmtoZWltIGluIHRoZSBsYXRlIDE4MDAmIzM5O3MsIGNhcHR1cmVkIHRoZSBzZW5zZSBvZiBpbnN0YWJpbGl0eSwgY3VsdHVyYWwgYW5kIG1vcmFsXHJcblxyXG5yZWxhdGl2aXNtIHRoYXQgdW5kZXJtaW5lZCBhIHNoYXJlZCBzZW5zZSBvZiBtZWFuaW5nLiBTdWljaWRlcywgd2Vlay1hZnRlci13ZWVrLCBtb250aC1hZnRlci1tb250aD8gSW4gMTg5NyBGcmFuY2UsXHJcblxyXG5ub29uZSBoYWQgZXZlciBzZWVuIGl0IGJlZm9yZS0tYXQgc3VjaCByYXRlcy0tYW5kIHBlb3BsZSB3YW50ZWQgYW5zd2Vycy4gQWxhcywgYSBrZXJuZWwgb2Ygc29jaWFsIGRlc3BlcmF0aW9uIGxlYWRpbmdcclxuXHJcbnRvIGlucXVpcnkuPC9wPlxyXG5cclxuXHJcblxyXG48cD5QZW9wbGUgd2FudGVkIHRvIGtub3cgd2h5IHNvIG1hbnkgaW4gdGhlIHBvcHVsYXRpb24gcmVzcG9uZGVkIG5lZ2F0aXZlbHkgdG8gdGhlIHJhcGlkIGNoYW5nZXMsIHVyYmFuaXphdGlvbiAoRHJlYWRmdWxcclxuXHJcbmZhY3RvcnkgY29uZGl0aW9ucyAmYWdyYXZlOyBsYVxyXG5cclxuPGk+VGF5bG9yaXNtJiMzOTtzPC9pPiBjYWxjdWxhdGVkIGVmZmljaWVuY3kpIG5ldyB0ZWNobm9sb2dpZXMsIGkuZS4gZWxlY3RyaWNpdHksIHJhaWxyb2Fkcywgc3RlYW0gZW5naW5lczsgdGhlc2UgY3JlYXRlZFxyXG5cclxuYW4gYXJiaXRyYXJpbHkgbmV3IHdvcmxkLCB2ZXJ5IHN1ZGRlbmx5LiBTdWRkZW5seSwgbGlrZSB0cnlpbmcgZm9yIHRoZSBmaXJzdCB0aW1lIGEgcm9sbGVyLWNvYXN0ZXIsIHdoZW4gYWxsIHlvdSYjMzk7dmVcclxuXHJcbmV2ZXIga25vd24gaGFzIGJlZW4gdGhlIGNhcm91c2VsLiBTbywgd2Ugc2VlIHRlY2hub2xvZ3kmIzM5O3Mgcm9sZSBmb3Igd2VsbCBvciBmb3IgaWxsLCBvdXIgam9iIGlzIHRvIHVuZGVyc3RhbmRcclxuXHJcbmhvdyB0byBkaWFsLWluIHRoZSB0ZWNoIHNwZWNzIG5lY2Vzc2FyeSB0byBrZWVwIHNvY2lldHkgc21pbGluZyBvbiB0aGlzIHJvbGxlciBjb2FzdGVyIHRocm91Z2ggYW5vdGhlciwgeWV0IG5vdFxyXG5cclxuYWx0b2dldGhlciBuZXcsIHRlY2hub2xvZ2ljYWwgdGhyaWxsLXJpZGUuPC9wPlxyXG5cclxuXHJcblxyXG48cD4xLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LnJlc2VhcmNoZ2F0ZS5uZXQvcHVibGljYXRpb24vMjI4MTczOTExX1RoZV9Tb2Npb2xvZ3lfb2ZfU3VpY2lkZVwiIHRhcmdldD1cIl9ibGFua1wiPjE4OTcsIFN1aWNpZGUsICZFYWN1dGU7bWlsZSBEdXJraGVpbS48L2E+XHJcblxyXG48L3A+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTE1XCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaFwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMTUsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyIGRhaWx5dGl0bGVcIj5CbG9ja2NoYWlucywgQml0Y29pbnMgYW5kIFRoZSBVbm5lY2Vzc2FyeSBSaXNrIG9mIFNob3BwaW5nIGF0IFRhcmdldCB3aXRoIGEgQ3JlZGl0IENhcmQ8L2g2PlxyXG5cclxuXHJcblxyXG48aDY+XHJcblxyXG48c21hbGwgY2xhc3M9XCJqYXJnb25cIj5UZWNoIGJsb2NrY2hhaW4gamFyZ29uIGFsZXJ0IGFoZWFkLCB3aXRoIGFsbCBlZmZvcnQgbWFkZSBmb3IgY2xhcml0eSEgSSB0cmVhdCBhIGJyb2FkIG92ZXJ2aWV3IG9mIHRoZSBleGlzdGluZyB0cmFqZWN0b3J5XHJcblxyXG5vZiBibG9ja2NoYWluLXJlbGF0ZWQgbWljcm8tZWNvbm9taWMgYWR2YW5jZW1lbnRzLiBJIG1ha2UgYSB0ZWNobmljYWwgJmFtcDsgY29udGV4dHVhbGl6aW5nXHJcblxyXG48YWJiciB0aXRsZT1cInRoaXMgbGluayBqdXN0IGdvZXMgZG93biA1IHBhcmFncmFwaHMgdG8gRmViLiAxN3RoXCI+XHJcblxyXG48YSBocmVmPVwiIzE4LTAyLTE3XCI+IHRocmVlLXBhcnQgYmxvZyBzZXJpZXMgaW4gbXkgRmViLiAxNy0yMCBwb3N0czwvYT4gb24gdGhlIG1pY3JvLWVjb25vbWljIGhvcml6b24gb2YgYmxvY2tjaGFpbiB0ZWNobm9sb2dpZXMuPC9hYmJyPlxyXG5cclxuPC9zbWFsbD5cclxuXHJcbjwvaDY+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5IYXMgYW55b25lIGVsc2UgYmVlbiB1bmRlcndoZWxtZWQgYnkgdGhlIGxhY2sgb2YgQml0Y29pbiYjMzk7cyBkYWlseVxyXG5cclxuPGk+cHJlc2VuY2U8L2k+LCBkZXNwaXRlIGl0cyBldmVycHJlc2VuY2UgYXQgdGhlIGRpbm5lciB0YWJsZXMgYW5kIGNhZiZlYWN1dGU7cyBhY3Jvc3MgQW1lcmljYS4gU3VyZSwgaXQmIzM5O3MgbW9yZVxyXG5cclxub2YgYSAmcXVvdDttZXRyb3BvbGl0YW4mcXVvdDsgcGhlbm9tZW5vbjsgYW5kIHN1cmUsIGl0JiMzOTtzIGJlY29tZSBhbiBhY2NlcHRlZCBnbG9iYWwgcGxhdGZvcm0tLWFsb25nIHdpdGggbXlyaWFkXHJcblxyXG5vdGhlciBjcnlwdG8tY3VycmVuY2llcywgYnV0IGl0JiMzOTtzIGV4Y2hhbmdlLXdvcnRoaW5lc3MgcmVtYWlucyBzaHJvd2RlZCwgYW5kIG1pc3VuZGVyc3Rvb2QgYnkgbWFueS4gQ3J5cHRvY3VycmVuY2llc1xyXG5cclxuYXJlIHVzZWZ1bCBhcyBhIHZlaGljbGUgZm9yIGludmVzdG1lbnQsIGFuZCB5ZXMsIHRoZXJlIGFyZSBCaXRjb2luIG1pbGxpb25haXJlcyBkdWUgdG8gdGhlIGN1cnJlbmN5JiMzOTtzIHJpc2UgdG9cclxuXHJcbmZhbWUgd2l0aCBsYXN0IHllYXImIzM5O3MgaW5jcmVhc2UgaW4gdmFsdWUgKGZyb20gJDEsMDAwIHRvIH4kMjAsMDAwKSBldGMuLCBldGMuIEJ1dCwgc28gZmFyIGl0cyBjb250cmlidXRpb25zLFxyXG5cclxudXNlcywgZmFtZSBhcmUgb25lLXNpZGVkbHlcclxuXHJcbjxpPm1hY3JvLTwvaT5lY29ub21pYy4gQSByZWNlbnQgQ05FVCBhcnRpY2xlXHJcblxyXG48c3VwPjE8L3N1cD4sIGFtb25nIG90aGVycywgZG9jdW1lbnRzIG1pbmlzY3VsZSAoYW5kIG5vdCBpbXByb3ZpbmcpIHBlcmNlbnRhZ2Ugb2ZcclxuXHJcbjxpPmFjdHVhbDwvaT4gdXNlIGF0IHRoZSAmcXVvdDtjYXNoLXJlZ2lzdGVycyZxdW90OyBvZiBzb2NpZXR5LjwvcD5cclxuXHJcblxyXG5cclxuPHA+SXMgdGhlcmUgc29tZXRoaW5nIHdyb25nIHdpdGggc3VjaCBsaXR0bGUgbWljcm8tZWNvbm9taWMgdXNhZ2U/IE5vdCBhdCBhbGwhIEFjY29yZGluZyB0byBnZW5lcmFsIHNvY2lvbG9naWNhbFxyXG5cclxuPGk+RWFybHkgQWRvcHRlcjwvaT4gdGhlb3J5LS1iYXNlZCBvbiBFdmVyZXR0IE0uIFJvZ2VycyYjMzk7XHJcblxyXG48aT5EaWZmdXNpb24gb2YgSW5ub3ZhdGlvbnM8L2k+XHJcblxyXG48c3VwPjI8L3N1cD4tLXRoZSB0aW1lbGluZSBvZiB0aGUgSW5ub3ZhdGlvbiBBZG9wdGlvbiBMaWZlY3ljbGUgaXMgZmFpcmx5IG9yZGluYXJ5LiBUaGF0IGlzLCB0aGUgUm9nZXImIzM5O3MgYmVsbCBjdXJ2ZVxyXG5cclxucmFuZ2VzIGZyb20gdGhlIGJlZ2lubmluZyBpbm5vdmF0b3JzLCB0byBlYXJseSBhZG9wdGVycywgZWFybHkgbWFqb3JpdHksIGFuZCBsYXRlIG1ham9yaXR5LiBIb3dldmVyLCB0aGUgYmxvY2tjaGFpblxyXG5cclxuYXJ0aWNsZXMgYWx3YXlzIG1pc3MgdGhlIHBvaW50LiBDdXJyZW5jaWVzIGFyZSBtb3JlIG9mIGEgZGlzdHJhY3Rpb24gY29tcGFyZWQgdG8gdGhlIGdlbnVpbmUgdXNlZnVsbmVzcyBmb3IgdGhlXHJcblxyXG5ldmVyeS1wZXJzb24sIGluIGV2ZXJ5LWRheSBhZmZhaXJzLCBvbiBhIGdpdmVuIGRheS0taS5lLiwgbWljcm8tZWNvbm9taWMgdXNlLjwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhlIHRydWUgdmFsdWUsIHRoZSBraW5kIHRoYXQgbWFrZXMgb3VyIGxpdmVzIGVhc2llciBvbiBhbnkgZ2l2ZW4gZGF5LCBhbmQgZm9yIHRoZSBldmVyeS1wZXJzb24sIGlzXHJcblxyXG48aT5ub3Q8L2k+IHRoZSBjdXJyZW5jeSwgaXQgaXMgdGhlIGNvbnRyYWN0LCB0aGF0IGFsbG93cyBmb3IgaW5kaXZpZHVhbGl6ZWQsIHRhcmdldGVkIHNoYXJpbmcgb2Ygc3BlY2lmaWMgaW5mb3JtYXRpb24tLXdoZXRoZXJcclxuXHJcbmZpbmFuY2lhbCwgZ292ZXJubWVudGFsLCBvciBhbnkgb3RoZXIgY2VudHJhbGl6ZWQgZGF0YWJhc2UuIEFuIGV4YW1wbGUgaXMgaW4gb3JkZXIgYmVmb3JlIEkgY29udGludWUsIHNpbmNlIHdlIGNhblxyXG5cclxuYWxsIHJlbGF0ZSB0byB0aGUgcmlzayBvZiB1c2luZyBhIGNyZWRpdCBvciBkZWJpdCBjYXJkLCB0aGUgcmlzayBtb3N0IG5vdGFibHkgY29uY2VybmluZyBUYXJnZXQgc3RvcmUgY3JlZGl0IGNhcmRcclxuXHJcbmhhY2tzIGEgY291cGxlIHllYXJzIGFnby48L3A+XHJcblxyXG5cclxuXHJcbjxwPlN1cHBvc2UgYSBwZXJzb24gc2hvcHMgYXQgMyBkaWZmZXJlbnQgcmV0YWlsZXJzLCB1c2luZyBhIGRpZmZlcmVudCBjcmVkaXQgY2FyZCBmb3IgZWFjaC4gRm9yIHRoZXNlIDMgdHJhbnNhY3Rpb25zLFxyXG5cclxudGhpcyBwZXJzb24gaGFkIG9ubHkgbmVlZGVkIHRvIHByb3ZpZGUgdHdvIGRpc2NyZXRlIHBpZWNlcyBvZiBpbmZvcm1hdGlvbiBhYm91dCB0aGVtc2VsdmVzIGZvciBlYWNoIHRyYW5zYWN0aW9uOlxyXG5cclxudGhleSBwcm92ZSB0aGV5IGhhdmUgdGhlICQyNywgJDIwMCwgYW5kICQ1OyBhbmQgdGhleSBwcm92ZSBhIHRoaXJkIHBhcnR5KGkuZS4sQ0Mgb3IgYmFuayl3aWxsIG1ha2UgdGhhdCAkMjcsICQyMDAsXHJcblxyXG5vciAkNSBhdmFpbGFibGUsIGlmIHRoZWlyIGNsaWVudCBhZ3JlZXMuIEluc3RlYWQsIGZvciBlYWNoIHRyYW5zYWN0aW9uLCB0aGV5IG9wZW4gdGhlaXJcclxuXHJcbjxpPmVudGlyZTwvaT4gZmluYW5jaWFsIGluZm9ybWF0aW9uLCBhbmQgY2FuIG9ubHkgaG9wZSB0aGF0IGxhdy1lbmZvcmNlbWVudCB3aWxsIHByZXZlbnQgY3liZXItdGhlZnQ7IGFuZCBpZiB0aGUgc3RvcmUmIzM5O3NcclxuXHJcbmRhdGFiYXNlcyBhcmUgaGFja2VkLCB0aGVuIHRvdWdoLWx1Y2shPC9wPlxyXG5cclxuXHJcblxyXG48cD5DcnlwdG8tY29udHJhY3RzIHByb3ZpZGUgdGhlIHRlY2hub2xvZ3kgZm9yIHRoaXMgaW5kaXZpZHVhbGl6ZWQsIHJpc2stZnJlZSB0cmFuc2FjdGlvbiwgcmF0aGVyIHRoYW4gZm9yIGVhY2ggdHJhbnNhY3Rpb24sXHJcblxyXG5wcm92aWRpbmcgdGhlIGdlbmVyYWxpemVkIGluZm9ybWF0aW9uIGZvciBpbmRpdmlkdWFsIHRyYW5zYWN0aW9uLiBIaWdobHkgaW5lZmZpY2llbnQhIE5vYm9keSB0aGlua3MgdG8gd2FsayBhcm91bmRcclxuXHJcbndpdGggdGhlaXIgbGlmZS1zYXZpbmdzIGluIGNhc2gsIHRoZW4gYXQgdGhlIDctMTEgc3RvcmUsIHRvIG9wZW4gdGhlaXIgd2FkIG9mIGNhc2ggYW5kIHBlZWwgb3V0IGEgYmlsbC4gVGhlIGNyZWRpdFxyXG5cclxuY2FyZCBzeXN0ZW0sIGJsZXNzZWQgYXMgaXQgaXMsIGRpZCBub3QgcHJldmlvdXNseSBoYXZlIHRlY2hub2xvZ3kgdG8gYXZvaWQgdGhpcyB2ZXJ5IHRoaW5nLiBTbywgZmluYW5jaWFsIGluc3RpdHV0aW9uc1xyXG5cclxuaGF2ZSBoYWQgdG8gcmVseSBvbiB0aGUgbWFueSBsYXllcnMgb2Ygc2VjdXJpdHksIHBhc3N3b3JkcywgcGlucywgbW90aGVycyYjMzk7IG1haWRlbiBuYW1lcywgZXRjLiBUaGVuLCBiYXNlZCBvblxyXG5cclxudGhlIG1hdGhlbWF0aWNzIGJlaGluZCBwcmltZSBudW1iZXJzLCB0aGV5IGhvcGUgdG8ga2VlcCB5b3VyIG1vbmV5IHNhZmUgaW4gb25lLCBjZW50cmFsaXplZCBzcG90LS13aXRoIGEgYnJpZ2h0XHJcblxyXG5yZWQgdGFyZ2V0IG9uIGl0LjwvcD5cclxuXHJcblxyXG5cclxuPHA+Tm93LCB0aGUgY3J5cHRvLWNvbnRyYWN0IHByb3ZpZGVzIHRoaXMgZGVjaWRlZGx5ICptaWNyby1lY29ub21pYyogZXhwZXJpZW5jZSBmb3IgdGhlIGV2ZXJ5ZGF5IHBlcnNvbi4gQW5kIHRoYXQsIG15XHJcblxyXG5mcmllbmRzLCBoYXMgbm90aGluZyB0byBkbyB3aXRoIGNyeXB0by1jdXJyZW5jaWVzLiBUaGVyZSBpcyBubyBtaWNyby1lY29ub21pYyB2YWx1ZSBpbiBjcnlwdG8tY3VycmVuY3ksIGluc3RlYWRcclxuXHJcbnRoZSBjcnlwdG8tXHJcblxyXG48aT5jb250cmFjdDwvaT4gaXMgdGhlIHRydWUsIHVuc3VuZyBoZXJvLCBhbmQgYSBoZXJvIHdlIHdpbGwgYWxsIGdldCB0byBrbm93LiBbcGVyc29uYWwgb3BpbmlvbiAtIHRoaXMgaGVybyYjMzk7cyBuYW1lXHJcblxyXG5pcyB0aGUgRXRoZXJldW0gVmlydHVhbCBNYWNoaW5lXS4gSW4gYW55IGNhc2UsIENyeXB0by1jb250cmFjdHMgcHJvdmlkZSB0aGlzIGFiaWxpdHkgdG8gcHJvdmlkZSBwaW5wb2ludGVkLFxyXG5cclxuPGk+c3BlY2lmaWMsIHRhcmdldGVkIGluZm9ybWF0aW9uPC9pPiBhcyBjaXRpemVucywgdG9vLiBXaGVuIHdlIHByb3ZpZGUgb3VyIGRyaXZlcnMgbGljZW5zZSBudW1iZXIsIGZvciB0aGUgc2FrZSBvZlxyXG5cclxucmVudGluZyB0aGF0IGNhciwgd2UgcHJvdmlkZSBldmVyeSBhc3BlY3Qgb2YgaW5mb3JtYXRpb24gb2Ygb3Vyc2VsdmVzIHRvIEhlcnR6LiBUaGV5IGRvbiYjMzk7dCBuZWVkIHRoaXMuIFRoZXkgbmVlZFxyXG5cclxudG8ga25vdyBvbmx5IGFuZCBleGNsdXNpdmVseSBkcml2aW5nLXJlY29yZCByZWxhdGVkIGRldGFpbHMtLW5vdCB0aGUgZW50aXJlIGdvdmVybm1lbnRhbCBkYXRhYmFzZSBvZiBpbmZvcm1hdGlvblxyXG5cclxuYWJvdXQgeW91ITwvcD5cclxuXHJcblxyXG5cclxuPHA+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5jbmV0LmNvbS9uZXdzL2JpdGNvaW4tY3J5cHRvY3VycmVuY3ktYmlnLWluLWludmVzdGluZy1idXQtc3RpbGwtbG91c3ktZm9yLWJ1eWluZy1hLXNhbmR3aWNoL1wiXHJcblxyXG50YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5jbmV0LmNvbS9uZXdzL2JpdGNvaW4tY3J5cHRvY3VycmVuY3ktYmlnLWluLWludmVzdGluZy1idXQtc3RpbGwtbG91c3ktZm9yLWJ1eWluZy1hLXNhbmR3aWNoLzwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+Mi5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL2VyaWMuZWQuZ292Lz9pZD1FRDA2NTk5OVwiIHRhcmdldD1cIl9ibGFua1wiPlJvZ2VycywgRS4gTS4sICZhbXA7IFNob2VtYWtlciwgRi4gRi4gKDE5NzEpLiBDb21tdW5pY2F0aW9uIG9mIElubm92YXRpb25zOyBBIENyb3NzLUN1bHR1cmFsIEFwcHJvYWNoLjwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMTZcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoXCI+T1VSIERBSUxZIFRFQ0g8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPkZlYiAxNiwgMjAxODwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPlRlY2ggb24gdGhlIFJlZ3JldDogVW5pbnRlbmRlZCwgc2Vjb25kYXJ5IGVmZmVjdHMgb2YgY29tbXVuaWNhdGlvbi0gYW5kIGFjdGl2aXR5LWJhc2VkIGFwcC1kZXNpZ25zPC9oNj5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkdpdmVuIHRoYXQgb3VyIGFwcC11c2UgaXMgaW5leHRyaWNhYmx5IHRpZWQgdXAgd2l0aCBvdXIgb3duIGJlaGF2aW9yLCBhY3Rpdml0eS9jb21tdW5pY2F0aW9uLWJhc2VkIGFwcCBkZXZlbG9wZXJzXHJcblxyXG5oYXZlIGluIHRoZSBwYXN0IHllYXIgYWNjZXB0ZWQgKG1vc3RseSBpbiB3b3JkKSBhIHJlbmV3ZWQgcmVzcG9uc2liaWxpdHkuIE1vcmUgbGlrZSByZXNwb3NpYmlsaXR5IGZvciBhIG11bHRpLWZhY2V0ZWRcclxuXHJcbnBvd2VyIG9mIGluZmx1ZW5jZSBncmFudGVkIHRvIGFuIGluZHVzdHJ5LCBzdWRkZW5seSwgZGlzcHJvcG9ydGlvbmF0ZWx5IGdyZWF0LCBhbmRcclxuXHJcbjxpPnNlbWktYXJiaXRyYXJpbHkgcmVsYXRlZDwvaT4gdG8gdGhlIGRlc2lnbmVyJiMzOTtzIGludGVudCAoYW5kIGNvbnRyb2whKS4gQWZ0ZXIgYWxsLCBpZiB0aGUgU2FpbnRseSBNYXJrIFp1Y2tlcmJlcmcmIzM5O3NcclxuXHJcbmFjdGl2aXR5L2NvbW11bmljYXRpb24tYmFzZWQgYXBwIGluYWR2ZXJ0YW50bHkgbGVkIHRvIG5vdmVsLCBhbmQgZGVlcGx5IGNvbnNlcXVlbnRpYWwsIGVmZmVjdHMsIHRoZW4gYW55b25lIGNvdWxkLjwvcD5cclxuXHJcblxyXG5cclxuPHA+QWZ0ZXIgYWxsLCB3aG8gY291bGQgZ3Vlc3NcclxuXHJcbjxpPmhvdzwvaT4gdGhlc2UgYXBwLWRlc2lnbiBlZmZlY3RzIHdvdWxkIGFmZmVjdCB0aGUgdXNlcnMsIHllYXJzIGxhdGVyLiBXaG8gZG8gd2UgdGhpbmsgcHJvZ3JhbW1lcnMgYXJlLCBzb2Npb2xvZ2lzdHM/XHJcblxyXG5Nb3JlIHNwZWNpZmljYWxseSwgd2hvIGNvdWxkIGtub3dcclxuXHJcbjxpPndoaWNoPC9pPiBtdW5kYW5lIGNvZGluZyBwcmFjdGljZXMsIGFyYml0cmFyeSBhcHAtZGVzaWduLS1saWtlIHNoYXJpbmcgcGVybWlzc2lvbnMvZmVhdHVyZXM/IFN1cmUsIGV2ZXJ5b25lIGRlZXBcclxuXHJcbmRvd24ga25ldyB0aGVpciBjb21wYW55IHByYWN0aWNlcyB5aWVsZCB1bmZhdGhvbWFibGUgcG93ZXIgb2YgaW5mbHVlbmNlIG92ZXIgdGhlIGRhaWx5IGhhYml0cyBvZiBjZWxsLXVzZXJzLCBhLmsuYS5cclxuXHJcbmV2ZXJ5b25lLiBUaGUgZWFzeSBwYXJ0IGlzIGtub3dpbmc7IHRoZSBoYXJkIHBhcnQgaXMgbGVhcm5pbmcgaG93IGFuZCB3aHkgY2VydGFpbiBhcHAtZmVhdHVyZXMgbGVhZCB0byBiZWhhdmlvcmFsXHJcblxyXG5yaXNrcy48L3A+XHJcblxyXG5cclxuXHJcbjxwPlRoZXJlIGNvdWxkIGJlIG5vIGJldHRlciBleGFtcGxlIHRoYW4gdGhlIEFsY29ob2xpYyBmYWNlZCB3aXRoIGFuIGludGVydmVudGlvbiBieSBhIGxvdmluZyBmYW1pbHkgbG9uZ2luZyBmb3IgY2hhbmdlLlxyXG5cclxuVGhlIGFsY29ob2xpYyBjb3VsZCBiZSBmb3JnaXZlbiBmb3IgcGFzdCBtaXNkZWVkcywgYnV0IHdpdGhvdXQgYWN0dWFsXHJcblxyXG48aT5BY2tub3dsZWRnZW1lbnQ8L2k+IG9mIGEgY3Jpc2lzIGluIGRpcmVjdGlvbiwgd2hpY2ggbmVjZXNzaXRhdGVzIHByb2Zlc3Npb25hbCBoZWxwIGZyb20gc29jaWFsIHNjaWVudGlzdHMuIFRoZXJlZm9yZSxcclxuXHJcbnRoZSByZWNlbnRcclxuXHJcbjxpPmFja25vd2xlZGdtZW50czwvaT4gc2lnbmlmeSBzb21ldGhpbmcgZGVlcGVyLS10aGV5IHNpZ25pZnkgYSBodW1pbGl0eSB0aGF0IGFwcC1kZXNpZ25lcnMgYXJlIG5vdCBzb2Npb2xvZ2lzdHMsIGdlbmVyYWxseVxyXG5cclxuc3BlYWtpbmcuIFNvLCB0aGF0IG1lYW5zIGhpcmluZyBzb2Npb2xvZ2lzdHMsIHBzeWNob2xvZ2lzdHMsIGFudGhyb3BvbG9naXN0cyBmb3IgZXZlcnkgTlxyXG5cclxuPHNtYWxsPnRoPC9zbWFsbD4gYXBwLWNvZGVyIGFuZCBzb2Z0d2FyZSBlbmdpbmVlci4gSGlzdG9yeSBjYW4mIzM5O3QgYmUgcmV3cml0dGVuLCBidXQgaXQgY2FuIGJlIGludGVycHJldGVkIGFuZCBsZWFybmVkXHJcblxyXG5mcm9tLiBUaGUgYWNrbm93bGVkZ21lbnQgaXMgaXRzZWxmIGEgdmljdG9yeSBpZiBpdCBpbmR1Y2VzIGxlYXJuaW5nIGZyb20gdGhlIHJhdywgc29jaWFsIHNjaWVuY2VzLCB3aG9zZSBleHBlcnRpc2VcclxuXHJcbjxpPmNhbjwvaT4gcHJlZGljdCBob3cgb3Igd2h5IGNlcnRhaW4gJnF1b3Q7bGlmZSZxdW90Oy1mZWF0dXJlcywgcHJhY3RpY2VzLCBhbmQgcG9saWNpZXMgb2Z0ZW4gdW5mb2xkIHdpdGggdW5kdWUgYW5kXHJcblxyXG51bmludGVuZGVkIHNvY2lhbCBjb25zZXF1ZW5jZXMuPC9wPlxyXG5cclxuXHJcblxyXG48cD5XYXRlciB1bmRlciB0aGUgYnJpZGdlLCBidXQgZ29pbmcgZm9yd2FyZCwgaXQgaXMgb25lIHRoaW5nIHRvIGNsYWltIGEgJnF1b3Q7cmVuZXdlZCBzZW5zZSBvZiByZW1vcnNlJnF1b3Q7LCBhbm90aGVyXHJcblxyXG50byBhY2tub3dsZWRnZSwgbGVhcm4gYW5kIGNoYW5nZS4gTGlrZSBsYXN0IE5vdmVtYmVyXHJcblxyXG48c3VwPjE8L3N1cD4gd2hlbiBGYWNlYm9vayBjby1mb3VuZGVyIFNlYW4gUGFya2VyIGNvbmZlc3NlZCBjZXJ0YWluIGRlc2lnbnMgbGlrZSAmcXVvdDtzb2NpYWwtdmFsaWRhdGlvbiBmZWVkYmFjayBsb29wJnF1b3Q7XHJcblxyXG5hbmQgb3RoZXIgYXBwLWRlc2lnbiBpbnRlbnRpb25zLCB3aGlsZSBpZ25vcmluZyBwb3RlbnRpYWwgc2Vjb25kYXJ5IGVmZmVjdHMgb24gc29jaWV0eS4gU28sIHRoZVxyXG5cclxuPGk+QWNrbm93bGVkZ21lbnQ8L2k+IGlzIHRoZSBiaWcgd2luIGhlcmUtLW5vdCBzbyBtdWNoIHRoZSByZW1vcnNlITwvcD5cclxuXHJcblxyXG5cclxuPHA+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL2RpZ2l0YWxhZGRpY3RzYmxvZy5jb20vZmFjZWJvb2stY28tZm91bmRlci1zYXlzLWNvbXBhbnktYnVpbHQtdG8tZXhwbG9pdC15b3UvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9kaWdpdGFsYWRkaWN0c2Jsb2cuY29tL2ZhY2Vib29rLWNvLWZvdW5kZXItc2F5cy1jb21wYW55LWJ1aWx0LXRvLWV4cGxvaXQteW91LzwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMTdcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoXCI+T1VSIERBSUxZIFRFQ0g8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5NdXNpbmcgQmxvY2tjaGFpbjwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDE3LTE4LCAyMDE4XHJcblxyXG48YnIgLz4gV2Vla2VuZFxyXG5cclxuPC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+QmxvY2tjaGFpbnMsIEJpdGNvaW5zIGFuZCBUaGUgVW5uZWNlc3NhcnkgUmlzayBvZiBTaG9wcGluZyBhdCBUYXJnZXQgd2l0aCBhIENyZWRpdCBDYXJkLCBQYXJ0IElJOlxyXG5cclxuPGJyIC8+XHJcblxyXG48YnIgLz4gU2V2ZW4gTnV0cyAmYW1wOyBCb2x0cyBGZWF0dXJlcyBvZiB0aGUgTmV3IEJsb2NrY2hhaW4gTWljcm8tRWNvbm9teVxyXG5cclxuPGJyIC8+XHJcblxyXG48c21hbGwgY2xhc3M9XCJqYXJnb25cIj5UZWNoIGphcmdvbiBhbGVydCBhaGVhZCwgd2l0aCBhbGwgZWZmb3J0IG1hZGUgZm9yIGNsYXJpdHkhIEhlcmUsIEkgcHJvdmlkZSBhIHRlY2huaWNhbCAmYW1wOyBjb250ZXh0dWFsaXppbmcgYWRkaXRpb25cclxuXHJcbnRvIG15XHJcblxyXG48YWJiciB0aXRsZT1cInRoaXMgbGluayBqdXN0IGdvZXMgdXAgNyBwYXJhZ3JhcGhzIHRvIEZlYi4gMTV0aFwiPlxyXG5cclxuPGEgaHJlZj1cIiMxOC0wMi0xNVwiPiBGZWJydWFyeSAxNXRoIGJsb2cgcG9zdDwvYT5cclxuXHJcbjwvYWJicj4gb24gdGhlIG1pY3JvLWVjb25vbWljIGhvcml6b24gb2YgYmxvY2tjaGFpbiB0ZWNobm9sb2dpZXMuIDwvc21hbGw+XHJcblxyXG48L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+NyBFdGhlcmV1bS1iYXNlZCB0ZWNobm9sb2dpY2FsIGZlYXR1cmVzIG9mZmVyIHVzIGEgbmV3IHdvcmxkIC0tIGEgZGVjZW50cmFsaXplZCBuZXcgd29ybGQsIG5vdCBkZXBlbmRlbnQgb24gdGhlIGNlbnRyYWxpemVkXHJcblxyXG5zZXJ2ZXJzIG9mIEluc3RhZ3JhbSwgQ29tY2FzdCwgVC1Nb2JpbGUsIEFtYXpvbiwgZXRjLiBXaXRoIHRoYXQgc3RhdGVtZW50IGVuZHMgZ2VuZXJhbCBjb25zZW5zdXMgYW1vbmcgYmxvY2tjaGFpblxyXG5cclxuZXhwZXJ0cywgcHVuZGl0cywgYW5kIGF1dGhvcnMuIEhvd2V2ZXIsIGlmIHRoZSBjdXJyZW50IGxvZ2lzdGljYWwgb2JzdGFjbGVzIHByb3ZpZGUgY29udHJvdmVyc3kgYW5kIGNvbXBldGluZyBhbGdvcml0aG1zXHJcblxyXG5vdmVyIHN1c3RhaW5hYmlsaXR5LCBzZWN1cml0eSwgYW5kIHNjYWxhYmlsaXR5LCB0aGVuIHRoZXkgcmV2ZWFsIG11Y2ggbW9yZSBhYm91dCB0aGUgZ2VuZXJhbCBwYXRod2F5IG9mIHNvY2lhbCB1c2VzXHJcblxyXG4oYW5kIHBvdGVudGlhbCBlZmZlY3RzKSB0aGFuIHRoZXkgaGlkZS4gSW4gbXkgRmVicnVhcnkgMTV0aFxyXG5cclxuPGEgaHJlZj1cIiMxOC0wMi0xNVwiPmJsb2c8L2E+LCBJIHRvdWNoZWQgb24gYSBmZXcgZmVhdHVyZXMgb2YgbWljcm8tZWNvbm9taWMgdXNlcyBzbyBhcyB0byBkaXN0aW5ndWlzaCB0aGUgbW9yZSBjZXJ0YWluIGFzcGVjdHMgb2YgdGhlXHJcblxyXG5jcnlwdG8tY29udHJhY3QgaG9yaXpvbi48L3A+XHJcblxyXG5cclxuXHJcbjxwPlxyXG5cclxuPHN0cm9uZz5Qcm9sb2d1ZTwvc3Ryb25nPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cD5Tbywgd2hhdCBhcmUgc29tZSBjb3JlIGZlYXR1cmVzIG9mIGJsb2NrLWNoYWluIHRlY2hub2xvZ3kgdGhhdCBhZmZlY3QgdGhlIHF1YWxpdHkgb2Ygb3VyIGxpdmVzLCBhbmQgdGhlXHJcblxyXG48aT5wcm9kdWN0aXZpdHk8L2k+IG9mIG91ciB3b3JrIGFzIGEgc29jaWV0eSBvZiBhY2FkZW1pY3MsIHB1YmxpYy1zZWN0b3IgYW5kIHByaXZhdGUtc2VjdG9yIHByb2Zlc3Npb25hbHM/IEZpcnN0LCBhXHJcblxyXG5saXR0bGUgYmFja2dyb3VuZCBhbmQgY29udGV4dCBiZWZvcmUgSSBvdXRsaW5lIHNldmVuIGJsb2NrY2hhaW4gZnVuY3Rpb25hbGl0aWVzLiBUaGUgRXRoZXJldW0gYmxvY2tjaGFpbiBoZWxwcyBkaXN0aW5ndWlzaFxyXG5cclxuaXRzZWxmLS1hbmQgaXRzIGJsb2NrY2hhaW4tbmF0aXZlIGxhbmd1YWdlIFNvbGlkaXR5LS1mcm9tIGVhcmxpZXIgdGVjaCwgbGlrZSBCaXRjb2luIGFuZCBvdGhlciBQcm9vZiBvZiBXb3JrLWJhc2VkXHJcblxyXG5ibG9ja2NoYWlucy4gRXRoZXJldW0gYmxvY2tjaGFpbiBvZmZlcnMgYSBzeW50YXggYW5kIHByb2dyYW1taW5nIGZlYXR1cmVzLCBlLmcuICZxdW90O2xvb3BpbmcmcXVvdDssICZxdW90O3JlY3Vyc2lvbiZxdW90OyxcclxuXHJcbndpdGggdGhlIGZ1bGwgcG93ZXIgb2YgYVxyXG5cclxuPGk+VHVyaW5nIENvbXBsZXRlPC9pPiBsYW5ndWFnZS0tdGhhdCBpcywgZ2l2ZW4gZW5vdWdoIHJlc291cmNlcywgdGhlIGxhbmd1YWdlIGNhbiBzb2x2ZSBhbnkgcHJvZ3JhbW1hYmxlIHByb2JsZW0uPC9wPlxyXG5cclxuXHJcblxyXG48cD5Nb3JlIGJhY2tncm91bmQgYW5kIGEgY2xhcmlmeWluZyBtZXRhcGhvciBhcmUgaW4gb3JkZXI6IFRoZSBCaXRjb2luIGJsb2NrY2hhaW4gdHJhbnNhY3Rpb24gcmVzZW1ibGVzIHRoZSBhY2NvdW50aW5nXHJcblxyXG5zeXN0ZW0gb2YgYSBmb29zLWJhbGwgdGFibGUgcG9pbnQgcmFjayB3aXRoIGEgYmFzaWMgY2FsY3VsYXRvciBnbHVlZCB0byB0aGUgc2lkZS4gSW4gY29udHJhZGlzdGluY3Rpb24sIEFuIEV0aGVyZXVtXHJcblxyXG5ibG9ja2NoYWluIHRyYW5zYWN0aW9uIHdvdWxkIHJlc2VtYmxlIGEgbmV0d29yayBvZiBjb21wdXRlcnMsXHJcblxyXG48aT53aGljaCBpcyBpdHNlbGYsPC9pPiBhIGNvbXB1dGVyLS1oZW5jZSwgdGhlIG5hbWUgRXRoZXJldW0gVmlydHVhbCBNYWNoaW5lLiBUaGlzIGFsbG93cyBmb3IgUXVpY2tib29rcyB0byBjYWxjdWxhdGVcclxuXHJcbmludG8gYSBQREYgdG8gYmUgc2VudCB2aWEgYW4gZW1haWwgY29udHJhY3Qtc2lnbmluZyBwcm9ncmFtLiBNdWNoIG1vcmUgdXNlZnVsITwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhlcmVmb3JlLCBFdGhlcmV1bSYjMzk7cyBCbG9ja2NoYWluIGlzIG1vcmUgdGhhbiBhIG5ldHdvcmtlZCwgY2hhaW5lZCBsaXN0IG9mIGJsb2NrcywgbGlrZSBCaXRjb2luLiBUaGUgRXRoZXJldW1cclxuXHJcbmJsb2NrY2hhaW4gaXMgYWN0dWFsbHkgYSAmcXVvdDtWaXJ0dWFsIE1hY2hpbmUmcXVvdDssIGxpa2UgYSBhIGJpZyBuZXR3b3JrZWQgJnF1b3Q7aG9tZSBjb21wdXRlciZxdW90Oy4gVGhlIG5hdGl2ZVxyXG5cclxubGFuZ3VhZ2Ugb2YgdGhlIGJsb2NrY2hhaW4sIFNvbGlkaXR5LCBhbGxvd3MgZm9yIGFuXHJcblxyXG48aT5hcHBsaWNhdGlvbiBiaW5hcnkgaW50ZXJmYWNlPC9pPiwgQUJJLiBTbywgZm9yIGV4YW1wbGUsIEkgY2FuIHR5cGUgdXAgYW4gRXRoZXJldW0gY29udHJhY3Qgb24gbXkgaG9tZSBjb21wdXRlcixcclxuXHJcbnRoZW4gZGlyZWN0bHkgYWNjZXNzIGJ5IGNvbW1hbmQgbGluZSB0aGUgYmxvY2tjaGFpbiBpdHNlbGYuIEluIGxheW1hbiYjMzk7cyB0ZXJtcywgdGhlIG1hbm5lciB0aGF0IG1vZGVybi1kYXkgYXBwLFxyXG5cclxuZm9yIGV4YW1wbGUgSW5zdGFncmFtLCBpcyBhIGNlbnRyYWxpemVkIEFQSSAoQXBwbGljYXRpb24gUHJvZ3JhbW1pbmcgSW50ZXJmYWNlKSB0aGF0IGFsbG93cyBvbmUgcHJvZ3JhbW1pbmcgc3lzdGVtXHJcblxyXG50byBpbnRlcmFjdCB3aXRoIGFub3RoZXIsIHN1Y2ggYXMgSW5zdHJhZ3JhbSBvZmZlcnMgYSAmcXVvdDtzaGFyaW5nIEFQSSZxdW90OyB0aGF0IGNvbm5lY3RzIHRvIGhhcmR3YXJlIGNvbnRhY3RzLFxyXG5cclxudGh1cyBmYWNpdGlsYXRpbmcgY29tbXVuaWNhdGluZyB3aXRoIHRoaXJkLXBhcnR5IGFwbGljYXRpb25zLCBsaWtlIHNoYXJpbmcgeW91ciBpbnN0YWdyYW0gcGljdHVyZSB0byB5b3VyIEZhY2Vib29rXHJcblxyXG5hY2NvdW50LCB2aWEgeW91ciBULU1vYmlsZSBwaG9uZSYjMzk7cyBjb250YWN0cyBsaXN0LiBUaGlzIEFQSSByZWxhdGlvbnNoaXAgYnJvYWRseSBkZXNjcmliZXMgdGhlIG1vZGVybiB3b3JsZCB3ZVxyXG5cclxubGl2ZSBpbiwgd2hlcmVpbiBhIENocnlzZXIgZHJpdmluZyBzeXN0ZW0gZXhjaGFuZ2VzIEFQSSBpbmZvcm1hdGlvbiB3aXRoIHlvdXIgVC1Nb2JpbGUgQmx1ZXRvb3RoIG5ldHdvcmsgc3lzdGVtLFxyXG5cclxud2hpY2ggZXhjaGFuZ2VzIEFQSSBpbmZvcm1hdGlvbiB3aXRoIHlvdXIgb3duIGNvbnRhY3QgbGlzdCwgYW5kIHNvIG9uLCBhbmQgb3VyIGxpdmVzIGFyZSBtYWRlIGVhc2llci48L3A+XHJcblxyXG5cclxuXHJcbjxwPlNvLCBhcmUgd2Ugb3V0IG9mIHRoZSB3b29kcz8gSGFzIEV0aGVyZXVtIHNvbHZlZCB0aGUgYmxvY2tjaGFpbiBxdWVzdGlvbj8gWWVzLCBpZiBpdCB3ZXJlIHRoZSAxOTIwIHByZS1yZWxhdGl2aXR5XHJcblxyXG5kYXlzOyBIb3dldmVyLCB3aXRoIHRoZSBhZHZlbnQgb2YgcXVhbnR1bSBjb21wdXRpbmcsIHBvdGVudGlhbCBzZWN1cml0eSB2dWxuZXJhYmlsaXRpZXMgaW1tZWRpYXRlbHkgYXJpc2UuIFRoZSByZWFzb25cclxuXHJcbmJlaW5nIHRoYXQgZGlnaXRhbCBtYXRoIHVzZXMgYmluYXJ5ICZxdW90O29uL29mZiZxdW90OyBjYWxjdWxhdGlvbnMsIHdoaWxlIHF1YW50dW0gbWF0aCBpbXBsaWNhdGVzIGEgdGVydGlhcnksXHJcblxyXG48aT5xdWJpdDwvaT4gJnF1b3Q7c2ltdWx0YW5lb3VzIHN0YXRlcyZxdW90Oy4gVGhlcmVmb3JlLCB3ZSBoYXZlIG5vdyBlbnRlcmVkIHRoZSAzcmQgZ2VuZXJhdGlvbiBvZiBibG9ja2NoYWluIHRlY2hub2xvZ3ksXHJcblxyXG5ib3RoIHByb2dyYW1tYWJsZSwgYnV0IGFsc28gcXVhbnR1bS1wcm9vZiBkdWUgdG8gbWF0aGVtYXRpY2FsIGdyYXBoIGZlYXR1cmVzLiBGb3IgZXhhbXBsZSwgSU9UQSYjMzk7cyBibG9ja2NoYWluXHJcblxyXG5kZXNpZ24gdXRpbGl6ZXMgYVxyXG5cclxuPGk+V2ludGVybml0eiBPbmUtVGltZSBTaWduYXR1cmU8L2k+LCBieSB3aGljaCBvbmUmIzM5O3MgdHJhbnNhY3Rpb24gaXMgZW50ZXJlZCBpbnRvIHdpdGggYSBwcml2YXRlLWtleSwgYW5kIHRoZSBibG9ja2NoYWluXHJcblxyXG5tb3Jlc28gcmVzZW1ibGVzIGEgJnF1b3Q7VGFuZ2xlJnF1b3Q7IG9mIGEgZGlyZWN0ZWQgZ3JhcGgsIHdoaWNoIGFsbG93cyBmb3IgY29tcHV0YXRpb25hbCAmcXVvdDtzdGF0ZXMmcXVvdDsuIElPVEFcclxuXHJcbnJlY2VudGx5IGdhcm5lcmVkIGNyaXRpY2lzbSBpbiBKYW51YXJ5IDIwMTggZHVlIHRvIGFuIHVuZm9ydHVuYXRlIGNyeXB0by1oYWNrLCB0aGF0IGV4cG9zZWQgYW4gYXBwYXJlbnQgdnVsbmVyYWJpbGl0eS5cclxuXHJcbkluIHRydXRoLCB0aGlzIHdhcyBhIGNhc2Ugb2YgdXNlci1lcnJvciBiZWNhdXNlIHVzZXJzIHdlcmVcclxuXHJcbjxpPnJlLXVzaW5nPC9pPiB0aGVpciBvbmUtdGltZSBrZXlzLCB3aGljaCBzaWduaWZpY2FudGx5IGRlY3JlYXNlcyBzZWN1cml0eSB0byB0aGUgcG9pbnQgdGhhdCBhIGhvbWUgY29tcHV0ZXIgY291bGRcclxuXHJcbmNyYWNrIHRoZSBjb2RlISBJIGNob29zZSB0byBub3QgZGlncmVzcyBmdXJ0aGVyLCBhbmQgcXVhbnR1bSBjb21wdXRpbmcgaXMgbm90IHF1aXRlIGFkdmFuY2VkIGVub3VnaCBub3cgdG8gY2F1c2VcclxuXHJcbmRhbWFnZSwgYnV0IGluIHRoZSBmdXR1cmUgY291bGQgcG90ZW50aWFsbHkgc3BsaXQgdGhlIGJsb2NrY2hhaW4gaW4gdHdvLCBvciBvdGhlciBxdWFudHVtIHBvc3NpYmlsaXRpZXMuPC9wPlxyXG5cclxuXHJcblxyXG48cD5JbiBzdW0sIHRoZSB0ZWNobmljYWwgb2JzdGFjbGVzIGNoYW5nZSBlYWNoIG1vbnRoLCBob3dldmVyIG9uZSBtdXN0IG5vdCBsb3NlIHNpZ2h0IG9mIHRoZSBmb3Jlc3QgZm9yIHRoZSB0cmVlcy4gU29jaWFsXHJcblxyXG51c2VhYmxpdHksIHBvdGVudGlhbCBzY29wZSBhbmQgb2YgY291cnNlIHVuaW50ZW5kZWQgY29uc2VxdWVuY2VzIGhhdmUgYWxsIGZpbmFsbHkgYmVndW4gdG8gZW1lcmdlLCBhdCBsZWFzdCBpbiBmb3JtLFxyXG5cclxud2l0aCBsaXR0bGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSAybmQgZ2VuZXJhdGlvbiBibG9ja2NoYWluIG9yIHRoZSAzcmQgZ2VuZXJhdGlvbiBQYXRyaWNpYW4gZGlyZWN0ZWQgZ3JhcGggYmxvY2tjaGFpbi5cclxuXHJcblRoZSB1bmRlcmx5aW5nIHByaW5jaXBsZSBvZiB0aGUgYmxvY2tjaGFpbiYjMzk7cyBtaWNyby1lY29ub21pYyB1dGlsaWl0eSB0aHJvdWdoIGNyeXB0by1cclxuXHJcbjxpPmNvbnRyYWN0czwvaT4gaXMgdGhlIHNhbWUsIGFzIG9wcG9zZWQgdG8gcGxhaW4gY3J5cHRvLWN1cnJlbmN5LiB5b3Uga25vdyB0aGUgdXN1YWwgYmFydGVyaW5nIHNvbHV0aW9ucyBmb3IgU3VwcGx5XHJcblxyXG4mYW1wOyBEZW1hbmQgbGVhZGluZyB0byBFY29ub21pY3MgR2FtZSBUaGVvcnksIGV0Yy4gVGhpcyBpcyB3aGVyZSB3ZSBtdXN0IHRha2Ugb3VyIGxlYXZlIG9mIHRoZSBIYXJkIFNjaWVuY2VzIG9mXHJcblxyXG5NYXRoZW1hdGljcywgYW5kIGVudGVyIHRoZSByZWFsbSBvZiBTb2Npb2xvZ3ksIFBzeWNob2xvZ3ksIEFudGhyb3BvbG9neSBhbmQgRWNvbm9taWNzLjwvcD5cclxuXHJcblxyXG5cclxuPHA+Jm5ic3A7PC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJmZWIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMi0xOVwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2hcIj5PVVIgREFJTFkgVEVDSDwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMTksIDIwMTg5PC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+QmxvY2tjaGFpbnMsIEJpdGNvaW5zIGFuZCBUaGUgVW5uZWNlc3NhcnkgUmlzayBvZiBTaG9wcGluZyBhdCBUYXJnZXQgd2l0aCBhIENyZWRpdCBDYXJkLCBQYXJ0IElJSTpcclxuXHJcbjxiciAvPlxyXG5cclxuPGJyIC8+IFNldmVuIEZlYXR1cmVzIG9mIHRoZSBOZXcgQmxvY2tjaGFpbiBNaWNyby1FY29ub215XHJcblxyXG48YnIgLz5cclxuXHJcbjxzbWFsbCBjbGFzcz1cImphcmdvblwiPlRlY2ggamFyZ29uIGFsZXJ0IGFoZWFkLCB3aXRoIGFsbCBlZmZvcnQgbWFkZSBmb3IgY2xhcml0eSEgVGhlIGZpcnN0IDMgb2YgNyBuZXcgcG9zc2liaWxpdGllcyB0aGFua3MgdG8gdGhlIHByb2dyYW1tYWJsZVxyXG5cclxuYmxvY2tjaGFpbi48L3NtYWxsPlxyXG5cclxuPC9oNj5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlRoZSBndWlkaW5nIGxpZ2h0IHRocm91Z2ggdGhlIGNlbnR1cmllcyBvZiBzY2llbnRpZmljIHBhcmFkaWdtcywgaW4gdGhlIEt1aG5pYW4gc2Vuc2VcclxuXHJcbjxzdXAgaWQ9XCIxOS0xXCI+MTwvc3VwPiwgaGF2ZSBkZXJpdmVkIGZyb20gZGVkdWN0aXZlIGlkZWFzIGZyb20gYWJvdmUgLSB3aGV0aGVyIHByaWVzdGx5IG9yIHJveWFsIGRlY3JlZS4gVGhlbiwgdGhlIHByaW1hY3kgb2YgdGhlXHJcblxyXG48aT5TY2llbnRpZmljIE1ldGhvZDwvaT4gZnJvbSB0aGUgUmVuYWlzc2FuY2UgZm9yd2FyZC0tcHVuY3R1YXRlZCBmaXJzdCBieSBDb3Blcm5pY2FuIEhlbGlvY2VudHJpc20sIHRoZW4gb3RoZXIgUGFyYWRpZ21cclxuXHJcblNoaWZ0cy0taGFzIGRpcmVjdGVkIHJhdGlvbmFsIGFuZCBldGhpY2FsIG5vcm1zIGluIGVhY2ggcmVzcGVjdGl2ZSBwZXJpb2QsIGUuZy4gRW5saWdodGVubWVudCBhdXRob3JzIG9mIDE3dGgsIDE4dGhcclxuXHJcbmNlbnR1cnkuIEZhc3QgZm9yd2FyZCB0byB0aGUgbW9kZXJuIHBlcmlvZCwgd2hlcmVpbiB0aGUgY3VycmVudCBlcmEmIzM5O3MgZW1lcmdpbmcgcGFyYWRpZ20gaG9sZHMgU2hhcmluZyBhcyBhIGNvbGxlY3RpdmUtcHJpb3JpdHlcclxuXHJcbmFuZCByZXNwb25zaWJpbGl0eSwgdGhlbiBhbiBhbWF6aW5nIHBoaWxvc29waGljYWwgbW9tZW50LlxyXG5cclxuPGk+SGlzdG9yaWNhbCBNYXRlcmlhbGlzbTwvaT5cclxuXHJcbjxzdXA+Mjwvc3VwPiBwcmVzY3JpYmVzIHdoYXQgaXMgZGlyZWN0bHkgaGVyZSBhIG5vdmVsIFBhcmFkaWdtIFNoaWZ0IGJ5IHdoaWNoIGF1dGhvcml0eSBpcyBub3QgZGVyaXZlZCBmcm9tIGdvdmVybm1lbnRhbCxcclxuXHJcbmZpbmFuY2lhbCBzb3VyY2VzLCBidXQgcmF0aGVyIHRoZVxyXG5cclxuPGk+c2hhcmVkPC9pPnNvY2lldGFsIGNvbnNlbnN1cyBhYm91dCBjcnlwdG9ncmFwaGljLCBtYXRoZW1hdGljYWwgcHJvb2ZzIGFzIHRydWUgYXV0aG9yaXR5LiBGdXJ0aGVyLCB0aGUgcmV2b2x1dGlvbmFyeVxyXG5cclxuc2hpZnQgYWxzbyBpbm5hdGVseSBwcm92aWRlcyB0b29scyBmb3IgaW1wbGVtZW50aW9uIHRocm91Z2ggZGVjZW50cmFsaXplZCwgcHJvZ3JhbW1hYmxlIGRhdGEtc2hhcmluZy4gQ3J5cHRvZ3JhcGh5XHJcblxyXG5oYXMgaW4gYSBzZW5zZSBiZWNvbWUgYVxyXG5cclxuPGk+ZGUganVyZTwvaT4gbWlkZGxlLXBlcnNvbiBmb3IgaWRlbnRpZmljYXRpb24gYW5kIHZlcmlmaWNhdGlvbiBvZiBwcm9wZXJ0eS48L3A+XHJcblxyXG5cclxuXHJcbjxwPlxyXG5cclxuPHN0cm9uZz5JLiBQcm90ZWN0aW5nIHJpZ2h0cyB0aHJvdWdoIGltbXV0YWJsZSByZWNvcmRzPC9zdHJvbmc+XHJcblxyXG48YnIgLz4gSW5hbGllYWJsZSBSaWdodHMgY2FuIG5vdyBiZSBpZGVudGlmaWVkIGFuZCB2ZXJpZmllZCBieSB0aGUgY3J5cHRvZ3JhcGhpYyBhdXRob3JpdHkgb2YgYSBtYXRoZW1hdGljYWwgcHJvb2YsIHJhdGhlclxyXG5cclxudGhhbiBleGNsdXNpdmVseSB0aHJvdWdoIGdvdmVybm1lbnRhbCBvciBmaW5hbmNpYWwgaW5zdGl0dXRpb25zIGZyb20gYWJvdmUuIFRoZSBtb2Rlcm4gcGVyaW9kIGFsc28gaGFzIGhlbGQgdGhpc1xyXG5cclxuZGVjZW50cmFsaXplZCwgaW5kaXZpZHVhbCBhdXRob3JpdHkgYXMgdGhlXHJcblxyXG48aT5hIHByaW9yaTwvaT4gc3RhcnRpbmcgcG9pbnRzIGZvciBwaGlsb3NvcGhpY2FsIHByb29mcy4gUHJlbWlzZXMgYWJvdXQgdHJ1dGggYmVnaW4gd2l0aCB0aGUgY29uZGl0aW9ucyBvZiBodW1hbmtpbmQsXHJcblxyXG5ub3QgaWRlYWxvZ2llcy4gSW4gZmFjdCwgaXQgd2FzIHRoZVxyXG5cclxuPGk+WW91bmcgSGVnZWxpYW5zPC9pPiBvZiBlYXJseSAxOXRoIGNlbnR1cnkgVmllbm5hICZhbXA7IEJlcmxpbiwgd2hvIHVzaGVyZWQgaW4gdGhlIE1vZGVybiBFcmEgb2YgV2VzdGVybiBQaGlsb3NvcGh5LFxyXG5cclxuYnkgbGF5aW5nIG91dCBUcnV0aCBhcyBpbnZlcnRlZCwgYmVnaW5uaW5nIGZyb20gdGhlIGVtcGlyaWNhbCAmcXVvdDtncm91bmQmcXVvdDsgdXB3YXJkLiBUaGlzICZxdW90O3Vwc2lkZS1kb3duXHJcblxyXG50cmVlJnF1b3Q7IGRlZmluZXMgcGhpbG9zb3BoaWNhbCBtb2Rlcm5pdHkuIEplYW4tUGF1bCBTYXJ0cmUgd3JvdGUgdGhhdCB0aGUgd2hvbGUgb2ZcclxuXHJcbjxpPkV4aXN0ZW50aWFsaXNtPC9pPiBhbmQgMjB0aCBjZW50dXJ5IHBoaWxzb3BoeSBpcyBhIG1lcmUgc3Vic2V0LCBhbmQgbmV2ZXIgZXNjYXBlcyBDb250aW5lbnRhbCBNYXRlcmlhbGlzbSwgYXMgYXJndWVkXHJcblxyXG5pbiBTYXJ0cmUmIzM5O3NcclxuXHJcbjxpPlNlYXJjaCBmb3IgYSBNZXRob2Q8L2k+LlxyXG5cclxuPHN1cD4zPC9zdXA+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPkFsbCBvZiB0aGUgU2NpZW5jZXMsIHByb2RkZWQgYnkgdGhpcyBUcnV0aCBvZiBFbXBpcmljaXNtLCBmb2xsb3dlZCBzdWl0IHRocm91Z2ggYWxsIHRoZSB0ZWNoIGlubm92YXRpb25zIHNpbmNlIEhlZ2VsLlxyXG5cclxuSSYjMzk7bSBzbyBzdXJwcmlzZWQgYnkgdGhpcywgYmVjYXVzZSBmb3IgbWUsIHRoZSByb2xlIG9mIGNyeXB0b2dyYXBoeSBpcyBzaG9ja2luZyBvbiB0d28gbGV2ZWxzLiBGaXJzdCwgY3J5cHRvZ3JhcGh5XHJcblxyXG5yZXNlbWJsZWVzIHBoaWxvc29waHkgcmF0aGVyIHRoYW4gdGhlIEVtcGlyaWNpc20gdGhhdCBJIGhhZCBlbnZpc2lvbmVkIHdvdWxkIGdvdmVybiBzb2NpYWwgcnVsZSAoU29tZSBvbmNlIHRob3VnaHRcclxuXHJcbm51Y2xlYXIgc2NpZW5jZXMgaGVsZCB0aGlzIHJvbGUtLW5vIGxvbmdlciEgTWF0aGVtYXRpY3MgdGFrZXMgdGhlIGNyb3duLiBTZWNvbmRseSwgSSYjMzk7bSBzdGlsbCBkdW1iZm91bmRlZCB0aGF0XHJcblxyXG5hIFBhcmFkaWdtIFNoaWZ0XHJcblxyXG48aT5maXJzdDwvaT4gb2ZmZXJzIHRoZSB0b29scyB0byBmdWxmaWxsIGl0c2VsZj8gU3RhZ2dlcmluZyB0byBjb25zaWRlciB0aGUgYXJiaXRyYXJ5IGNoYW5nZXMgYWhlYWQgZm9yIGEgc29jaWV0eSB0aGF0XHJcblxyXG5pcyBwcm92aWRlZCB0aGUgdG9vbHMgb2Ygc29jaWFsIHN0cnVjdHVyYWwgY2hhbmdlIGZpcnN0LCBidXQgaG93IHF1aXRlIGNvbnZlbmllbnQhPC9wPlxyXG5cclxuXHJcblxyXG48cD5cclxuXHJcbjxzdHJvbmc+SUkuIEJ1cmVhdWNyYXRpYyBBdG9taXphdGlvbiBpbiBhIFRydWUgU2hhcmluZyBFY29ub215PC9zdHJvbmc+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPkl0IGlzIHNhdGlzZnlpbmdseSByZWFzc3VyaW5nIHRvIHNlZSB0aGUgZ29vZC1uYXR1cmVkLCBhbHRydWlzdGljIGVmZm9ydHMgYW1vbmcgdGhlIHRob3VzYW5kcywgdXBvbiB0aG91c2FuZHMgb2ZcclxuXHJcbm9wZW4tc291cmNlIHZvbHVudGVlcnMsIGFuZCBibG9ja2NoYWluIGlubm92YXRvcnMsIGxpa2UgVml0YWxpayBCdXRlcmluIGF1dGhvciBvZiBFdGhlcmV1bSBWaXJ0dWFsIE1hY2hpbmUsIHdob3NlXHJcblxyXG5haW1zIGFuZCBlZmZvcnRzIG1ha2Ugc3RhZ2dlcmluZyBwcm9ncmVzcyBlYWNoIHF1YXJ0ZXIuIFRoZSBwb3RlbnRpYWwgZm9yIHJlbW92aW5nIHRoZSAmcXVvdDttaWRkbGUtcGVyc29uJnF1b3Q7XHJcblxyXG5mcm9tIHRoZSBkYXktdG8tZGF5LCBtaWNyby1lY29ub21pYyAmcXVvdDtjb3N0IG9mIGxpdmluZyZxdW90Oy4gVGhpcyBnb2VzIGZvciBmb3IgdGhlIGV4Y2hhbmdpbmcgb2YgdGl0bGVzLCBsZWdhbFxyXG5cclxuZG9jdW1lbnRzLCBldGMuPC9wPlxyXG5cclxuXHJcblxyXG48cD5TaGFyaW5nIG9mIFJlc291cmNlcyBpcywgaW4gbXkgcGVyc29uYWwgb3BpbmlvbiwgY3JpdGljYWwgdG8gZ2xvYmFsIGZ1dHVyZS0tYm90aCBvdXQgb2YgaW5jcmVhc2luZyBuZWNlc3NpdHkgaW4gYWxsb2NhdGluZ1xyXG5cclxuaW5jcmVhc2luZ2x5IGxpbWl0ZWQgcmVzb3VyY2VzOyBhbiBhcmJpdHJhcnkgcmVhcnJhbmdlbWVudCBvZlxyXG5cclxuPGk+U29jaWFsIFN0cnVjdHVyZTwvaT4gYW5kIGRpc3RyaWJ1dGlvbiBvZiBpdHMgcmVzb3VyY2VzLiBXaGlsZSB0aGUgZXhwb25lbnRpYWwgcG9wdWxhdGlvbiBncm93dGggbG9vbXMgb24gdGhlIG5lYXJcclxuXHJcbmhvcml6b24sIGEgY2xlYXIsIHByZS1leGlzdGluZyBzb2x1dGlvbiBiZWdpbnMgd2l0aCBhIGZvY3VzIG9uXHJcblxyXG48aT5zbWFydDwvaT4sIGVmZmVjdGl2ZSBzaGFyaW5nIG9mIHJlc291cmNlcy4gVGhlIGRyaXZpbmcgcHJpbmNpcGxlIG9mIHN1c3RhaW5hYmlsaXR5IGlzIG1hZGUgY29udmVuaWVudCBieSBtZWFucyBvZlxyXG5cclxuYmxvY2tjaGFpbiB0ZWNobm9sb2d5LCBleHRlbmRpbmcgZm9yIGV4YW1wbGUgdG8gbG9jYWwgZWNvbm9taWVzLCBjb29wZXJhdGl2ZXMsIHJpZGUtc2hhcmluZywgZXRjLjwvcD5cclxuXHJcblxyXG5cclxuPHA+XHJcblxyXG48c3Ryb25nPklJSS4gUmVtb3ZpbmcgRG91YmxlLURpcHBpbmcgZnJvbSBJbnRlcm5hdGlvbmFsIFJlbWl0dGFuY2VzIDwvc3Ryb25nPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cD5cclxuXHJcbjxpPiZxdW90O1BlcmZlY3Rpb24gaXMgYWNoaWV2ZWQsIG5vdCB3aGVuIHRoZXJlIGlzIG5vdGhpbmcgbW9yZSB0byBhZGQsIGJ1dCB3aGVuIHRoZXJlIGlzIG5vdGhpbmcgbGVmdCB0byB0YWtlIGF3YXkuJnF1b3Q7XHJcblxyXG48L2k+XHJcblxyXG48YnIgLz4gLS1BbnRvaW5lIGRlIFNhaW50LUV4dXAmZWFjdXRlO3J5LCAxOTM5PC9wPlxyXG5cclxuXHJcblxyXG48cD5UYXhlcyBhbmQgdGFyaWZmcyBhcmUgZGlmZmljdWx0IGVub3VnaCwgdGhlIGRvdWJsZS1kaXBwaW5nIG9mIHRoZSBjdXJyZW50IGludGVybmF0aW9uYWwgcmVtaXR0YW5jZSBzeXN0ZW0sICZhYWN1dGU7XHJcblxyXG5sYSBXZXN0ZXJuIFVuaW9uLCBkb2VzIG5vdCByZWZsZWN0IHRoZSBnbG9iYWwsIHNoYXJpbmcgRWNvbm9teSBvZiAyMDE4LiBUaGUgZXhpc3RpbmcgcmVtaXR0YW5jZSBzeXN0ZW0gKG5vdCBzcGVha2luZ1xyXG5cclxudG9cclxuXHJcbjxpPmNlbnRyYWxpemVkPC9pPiwgbWlkZGxlLW1hbiBhbHRlcm5hdGl2ZXMgbGlrZSBQYXlQYXksIGV0Yy4pLS1zdXBwb3NpbmcgaWYgSSB3aXJlICQyIExvb25pZSB0byBhIENhbmFkaWFuIGZyaWVuZCYjMzk7c1xyXG5cclxuQ2FuYWRpYW4gQmFuay0tcmVxdWlyZXMgcGF5bWVudHMgZXhlY3V0ZWQgdGhyb3VnaCB0d28gc2VwYXJhdGUgYmFuayB0cmFuc2FjdGlvbnMgaW4gdHdvIG5hdGlvbmFsIHBheW1lbnRzIHN5c3RlbXMsXHJcblxyXG50aHVzIHRoZSBzZW5kaW5nIGNvdW50cnkgYW5kIHJlY2VpdmluZyBjb3VudHJ5IGVhY2ggdGFrZSBhIGN1dC4gTGlrZSBldmVyeXRoaW5nIGVsc2UtLWMmIzM5O2VzdCBsYSB2aWUuIE9yIGlzIGl0P1xyXG5cclxuVGhlIGJlYXV0eSBvZiBFdGhlcmV1bSBpcyB0aGF0IGl0ICZxdW90O3RhbGtzJnF1b3Q7IHdlbGwgd2l0aCBvdGhlcnMgYW5kIGFjcm9zcyBib3JkZXJzLCB3aGlsZSBCaXRjb2luIHJlbWFpbnMgb2ZcclxuXHJcbmxpdHRsZSB1c2UgZm9yIG1pY3JvLXRyYW5zYWN0aW9ucyB0aGF0IGludm9sdmUgc2VtaS1iYXNpYyBjYWxjdWxhdGlvbnMuIFRoZSByZWFzb24gYmVpbmcgdGhhdCBCaXRjb2luIGJsb2NrY2hhaW5cclxuXHJcbmxhbmd1YWdlLCBTY3JpcHQsIGNhbm5vdCBzdXBwb3J0IGxvb3BzICh3aGlsZSBzdGF0ZW1lbnRzLCBldGMuKTwvcD5cclxuXHJcblxyXG5cclxuPHA+Q3VycmVudGx5LCBib3RoIEVPUyBhbmQgRXRoZXJldW0gYmxvY2tjaGFpbnMgYXBwZWFyIHBvaXNlZCBmb3IgdGhlIG1vc3QgZmluYW5jaWFsLWZyaWVuZGx5IGJsb2NrY2hhaW4gdGVjaC48L3A+XHJcblxyXG5cclxuXHJcbjxwPjEuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuZWNvbm9taXN0LmNvbS9uZXdzL2J1c2luZXNzLzIxNzIyODY5LWFudGktZXN0YWJsaXNobWVudC10ZWNobm9sb2d5LWZhY2VzLWlyb25pYy10dXJuLWZvcnR1bmUtZ292ZXJubWVudHMtbWF5LWJlLWJpZy1iYWNrZXJzXCJcclxuXHJcbnRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LmVjb25vbWlzdC5jb20vbmV3cy9idXNpbmVzcy8yMTcyMjg2OS1hbnRpLWVzdGFibGlzaG1lbnQtdGVjaG5vbG9neS1mYWNlcy1pcm9uaWMtdHVybi1mb3J0dW5lLWdvdmVybm1lbnRzLW1heS1iZS1iaWctYmFja2VyczwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+Mi5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL2Jsb2cuZXRoZXJldW0ub3JnLzIwMTYvMDIvMDkvY3V0LWFuZC10cnktYnVpbGRpbmctYS1kcmVhbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL2Jsb2cuZXRoZXJldW0ub3JnLzIwMTYvMDIvMDkvY3V0LWFuZC10cnktYnVpbGRpbmctYS1kcmVhbS88L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjMuXHJcblxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5iYXJkLmVkdS9saWJyYXJ5L2FyZW5kdC9wZGZzL1NhcnRyZS1TZWFyY2gucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblxyXG48aT4gU2VhcmNoIGZvciBhIE1ldGhvZDwvaT4sIEplYW4tUGF1bCBTYXJ0cmUsIDE5NTc8L2E+LlxyXG5cclxuPGJyIC8+XHJcblxyXG48c21hbGw+U2FydHJlIHdvdWxkIGxhdGVyIGJlIGF3YXJkZWQgdGhlIE5vYmVsIFByaXplIGluIDE5NjQsIGJ1dCBkZWNsaW5lZCBpdC48L3NtYWxsPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cD5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3Byb2pla3RpbnRlZ3JhY2lqYS5wcmF2by5oci9fZG93bmxvYWQvcmVwb3NpdG9yeS9LdWhuX1N0cnVjdHVyZV9vZl9TY2llbnRpZmljX1Jldm9sdXRpb25zLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiPjQuIEt1aG4sIFRob21hcywgVGhlIFN0cnVjdHVyZSBvZiBTY2llbnRpZmljIFJldm9sdXRpb25zLCA8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vaGJyLm9yZy8yMDE3LzAxL3RoZS10cnV0aC1hYm91dC1ibG9ja2NoYWluXCIgdGFyZ2V0PVwiX2JsYW5rXCI+NS4gSGFydmFyZCBCdXNpbmVzcyBSZXZpZXcsXHJcblxyXG48aT5UaGUgVHJ1dGggYWJvdXQgQmxvY2tjaGFpbiwgRmViLiAyMDE3LiAoVGhpcyBpcyBhbiBvbGRlciBhcnRpY2xlLCBidXQgdmVyeSBjbGVhciAmYW1wOyBpbnNpZ2h0ZnVsKTwvaT5cclxuXHJcbjwvYT5cclxuXHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMjBcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoXCI+T1VSIERBSUxZIFRFQ0g8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj4mbmJzcDs8L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPkZlYiAyMCwgMjAxOTwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkJsb2NrY2hhaW5zLCBCaXRjb2lucyBhbmQgVGhlIFVubmVjZXNzYXJ5IFJpc2sgb2YgU2hvcHBpbmcgYXQgVGFyZ2V0IHdpdGggYSBDcmVkaXQgQ2FyZCwgUGFydCBJVjpcclxuXHJcbjxiciAvPlxyXG5cclxuPGJyIC8+IFNldmVuIEZlYXR1cmVzIG9mIHRoZSBOZXcgQmxvY2tjaGFpbiBNaWNyby1FY29ub215XHJcblxyXG48YnIgLz5cclxuXHJcbjxzbWFsbCBjbGFzcz1cImphcmdvblwiPlRlY2ggamFyZ29uIGFsZXJ0IGFoZWFkLCB3aXRoIGFsbCBlZmZvcnQgbWFkZSBmb3IgY2xhcml0eSEgVGhlIDR0aCB0aHJvdWdoIDd0aCBvdXRsaW5lZCBGZWF0dXJlcyBvZiB0aGUgTmV3IEJsb2NrY2hhaW5cclxuXHJcbk1pY3JvLUVjb25vbXk8L3NtYWxsPlxyXG5cclxuPC9oNj5cclxuXHJcbiZuYnNwO1xyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+SSBmZWVsIHRoYXQgZGF0YSBpcyBvbmUgb2YgdGhlIG1vcmUgdW5kZXJlc3RpbWF0ZWQgbmV3IGNvbW1vZGl0aWVzIG9mIHRoZSBhZ2UuIE1vc3QgdmlzdWFsaXplIGRhdGEgYXMgcm93cyBhbmQgY29sdW1ucyxcclxuXHJcbmFuZCBhdCBtb3N0IG9ubHkgbm9uLWNvbmRpdGlvbmFsIGR5bmFtaWMgZGF0YS4gRGF0YSBhcmUgbm90IHNvIG11dGUhIERhdGEsIGluIG1vc3Qgb2JqZWN0LW9yaWVudGVkIGxhbmd1YWdlcyBhdFxyXG5cclxubGVhc3QsIHJlcHJlc2VudHNcclxuXHJcbjxpPmZ1bmN0aW9uczwvaT4sIGNvbmRpdGlvbnMsIGFuZCBwcmVkaWN0ZWQgdmFsdWVzLiBBbmQgc28sIG91ciBvd24gYmVoYXZpb3IsIGNvdXBsZWQgd2l0aCBvdXIgbmV0d29ya3MmIzM5OyBiZWhhdmlvcixcclxuXHJcbmNvdXBsZWQgd2l0aCBwcmVkaWN0aXZlIGFuYWx5dGljcy0tdGhpcyByZXByZXNlbnRzIGEgd2VhbHRoIG9mIGluZm9ybWF0aW9uIGJleW9uZCBvdXIgYXR0cmlidXRlZCBvciBpbmhlcml0ZWQgdHJhaXRzLlxyXG5cclxuVGhlIHByb2dyYW1taW5nIGlzXHJcblxyXG48aT5pbjwvaT4gdGhlIGRhdGEsIGhvd2V2ZXIsIGNpdGl6ZW5zIGhhdmUgYmVjb21lIGxlc3MgYW5kIGxlc3MgaW52b2x2ZWQsIGNlZGluZyBhcHAgYnkgY2VudHJhbGl6ZWQgYXBwIG91ciBvd24gaW5mb3JtYXRpb25cclxuXHJcbmFuZCBlbnN1cmluZyBwcm9maXQgdG8gM3JkIHBhcnR5IG1hcmtldGVycy4gVGhlIGNlbnRyYWxpemVkIG5hdHVyZSBvZiB0aGUgaW50ZXJuZXQgYWxsb3dzIGZvciB0aGlzLCB3aGlsZSB0aGUgbmV3XHJcblxyXG5sYW5kc2NhcGUgb2ZcclxuXHJcbjxpPmRlY2VudHJhbGl6ZWQgYXBwbGljYXRpb25zPC9pPiAoREFQUCkgY29tcGxldGVseSB1cGVuZHMgdGhpcyBzdHJ1Y3R1cmUgb2YgdGhlIHN0YXR1cyBxdW8uPC9wPlxyXG5cclxuXHJcblxyXG48cD5cclxuXHJcbjxzdHJvbmc+SVYuIEVuYWJsaW5nIGNpdGl6ZW5zIHRvIG93biAmYW1wOyBtb25ldGl6ZSB0aGVpciBkYXRhICgmYW1wOyBwcm90ZWN0IHByaXZhY3kpPC9zdHJvbmc+XHJcblxyXG48YnIgLz4gRXRoZXJldW0gb2ZmZXJzIGEgZGVjZW50cmFsaXplZCBzb2x1dGlvbiB0byAmcXVvdDtvd25pbmcmcXVvdDsgb25lJiMzOTtzIG93biBkYXRhLCBhcyBkYXRhIGNhbiBiZSBkZWNlbnRyYWxpemVkXHJcblxyXG5hbmQgcmV0dXJuZWQgdG8gdGhlIGluZGl2aWR1YWwmIzM5O3MgY29udHJvbCwgYW5kXHJcblxyXG48aT5wcm9maXQ8L2k+LiBBcyBzdXJlIGFzIHRoZSAxOXRoIGNlbnR1cnkmIzM5O3MgJnF1b3Q7bGFib3ItaG91ciZxdW90OyBiZWNhbWUgY29tbW9kaWZpZWQgdG8gYSBjYWxjdWxhYmxlIGFzc2V0LCBpLmUuXHJcblxyXG5wcm9wZXJ0eSwgd2hpY2hcclxuXHJcbjxpPmFub3RoZXI8L2k+IHBhcnR5IGNvbnRyb2xzIGFuZCBtYWtlcyBwcm9maXQ7IEFuZCBhcyBzdXJlIGFzIHRoZSAyMHRoIGNlbnR1cnkmIzM5O3MgZGF0YSBhbmFseXRpY3MgYmVjYW1lIGNvbW1vZGlmaWVkXHJcblxyXG5pbnRvIGNhbGN1bGFibGUgYXNzZXRzIGZvciBhbm90aGVyIHBhcnR5IHRvIHRha2UgY29udHJvbCBhbmQgbWFrZSBwcm9maXQ7IHRoZW4gb25seSBub3cgaW4gdGhpcyAyMXN0IGNlbnR1cnkgZG9lc1xyXG5cclxudGVjaG5vbG9neSBvZmZlciBhIG5ldywgbW9yZSBlZ2FsaXRhcmlhbiBwYXRoLjwvcD5cclxuXHJcblxyXG5cclxuPHA+XHJcblxyXG48c3Ryb25nPlYuIEVuc3VyaW5nIGNvbXBlbnNhdGlvbiBmb3IgdGhlIENyZWF0b3JzIG9mIFZhbHVlIDwvc3Ryb25nPlxyXG5cclxuPGJyIC8+IFNvLCBob3cgd291bGQgZGVjZW50cmFsaXplZCBpbm5vdmF0aW9ucyBvZiBibG9ja2NoYWluXHJcblxyXG48aT5kaXN0cmlidXRlZCBsZWRnZXI8L2k+IHRlY2hub2xvZ3kgY29tcGVuc2F0ZSB0aG9zZSB3aG9zZSBhY3Rpb25zLCBiZWhhdmlvciwgb3BpbmlvbnMsIGZyaWVuZC1uZXR3b3JrcywgYXJ0d29yayxcclxuXHJcbm11c2ljLCB2aWRlb3MgYW5kIG90aGVyIGNvbnRyaWJ1dGlvbnMgcHJvZml0IHRoZSBjcmVhdG9yPzwvcD5cclxuXHJcblxyXG5cclxuPHA+XHJcblxyXG48c3Ryb25nPlZJLiBUaGUgSGFsY3lvbiBBZ2Ugb2YgVHJhbnNhY3Rpb24tQ2hhaW4gRW50ZXJwcmlzZTwvc3Ryb25nPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+QWNjb3JkaW5nIHRvIEdyZWVrIE15dGhvbG9neSwgdGhlIGRheXMgb2YgZWVyeSwgbm90aWNlYWJsZSBsYWNrIG9mIHN0b3JtcyBoYXZlIG5ldmVyIGJlZW4gaW50ZXJwcmV0ZWQgYXMgYSBwZXJpb2RcclxuXHJcbm9mIGdyYWNlLiBNb3Jlc28sXHJcblxyXG48aT5IYWxjeW9uPC9pPiB0cmFucXVpbGl0eSBvbmx5IG1lYW5zIGEgdGVtcG9yYXJ5IG1vcmF0b3JpdW0gb24gdGhlIHdpbmRzIGFuZCB3YXZlcywgaW1wb3NlZCBieSBBZW9sdXMsIEdvZCBvZiBXaW5kLFxyXG5cclxudG8gcHJvdGVjdCB0aGUgbmVzdGluZyBlZ2dzIG9mIEFsY3lvbmUsIGhpcyBkYXVnaHRlci48L3A+XHJcblxyXG5cclxuXHJcbjxwPklmIGJsb2NrY2hhaW4gdGVjaCBjaGFuZ2VzIGhvdyB3ZSBkbyByZXNlYXJjaCwgYW5hbHlzaXMsIGFuZCBmb3JlY2FzdGluZywgYXMgbXVjaCBhcyBpdCBjaGFuZ2VzIGludGVybmF0aW9uYWwsIGFuZFxyXG5cclxuY3Jvc3MtaW5kdXN0cnkgdHJhbnNhY3Rpb25zLCB0aGVuIGFyZSB3ZSBmYWNlZCB3aXRoIGEgc2ltaWxhciBkaWxlbW1hIGFzIHRoZSAmcXVvdDtub3ZlbHR5JnF1b3Q7LCBhbmQgZG91YmxlLWRlYWxpbmcsXHJcblxyXG5vZiBtdWx0aS1uYXRpb25hbHMgb2YgdGhlIDE5OTBzPyBObywgYmVjYXVzZSBibG9ja2NoYWluIHJlbmRlcnMgb3JnYW5pemF0aW9ucywgZXZlbiB0aG9zZSB3aXRoIGEgc3BvdHR5IHBhc3QsIGludG9cclxuXHJcbnRyYW5zcGFyZW50LCBkZW1vY3JhdGljLCBlZmZpY2llbnQsIHNlY3VyZSBhbmQgZWFzaWx5IHNjcnV0aW5pemVkLjwvcD5cclxuXHJcblxyXG5cclxuPHA+QWZ0ZXIgYWxsLCB3aXRob3V0IHRyYW5zcGFyZW50IHByb29mLCBob3cgZWxzZSB3b3VsZCBJIGtub3cgbXkgYmFuYW5hcyBhcmUgdGhlICZxdW90O3B1cmEgdmlkYSZxdW90OyBDb3N0YSBSaXF1ZSZudGlsZGU7XHJcblxyXG5vbmVzPyBNb3JlIGltcG9ydGFudGx5LCB3aGF0IHdhcyB0aGUgY2FyYm9uIGZvb3RwcmludCBvZiB0aGF0IGJhbmFuYSYjMzk7cyBqb3VybmV5IGZyb20gaXRzIG5hdGl2ZSBzb2lsIHRvIG15IGJyZWFrZmFzdFxyXG5cclxudGFibGU/IE5ldyBibG9ja2NoYWluIGNvbXBhbmllcyBsaWtlXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cucHJvdmVuYW5jZS5vcmcvXCI+UHJvdmVuYW5jZS5vcmc8L2E+LFxyXG5cclxuPGEgaHJlZj1cImh0dHA6Ly93d3cuc2t1Y2hhaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPnNrdWNoYWluPC9hPixcclxuXHJcbjxhIGhyZWY9XCJodHRwOi8vd3d3LmJsb2NrdmVyaWZ5LmlvL1wiPmh0dHA6Ly93d3cuYmxvY2t2ZXJpZnkuaW8vPC9hPiBhcmUgYSBmZXcgbm90aWNlYWJsZSBnYW1lLWNoYW5nZXJzLiBTbywgZm9yIGJhbmFuYXMgbm90IGJhY2tlZCBieSBtYXRoZW1hdGljYWwgcHJvb2ZzLFxyXG5cclxuSSByZWFsbHkgaGF2ZSB0byBhc2sgbXlzZWxmLCBpcyBpdFxyXG5cclxuPGk+cmVhbGx5PC9pPiBhbiBhdXRoZW50aWMgRmFpciBUcmFkZSBiYW5hbmE/PC9wPlxyXG5cclxuXHJcblxyXG48cD5UcmFuc2FjdGlvbnMgYXJlIGhhcmRseSB2YWx1YWJsZSBpbiB0aGUgcHJvZHVjdHMgdGhlbXNlbHZlcywgaWYgcmVtb3ZlZCBmcm9tIHRoZSB2YWx1ZSBvZiB0aGVcclxuXHJcbjxpPnRyYW5zYWN0aW9uIHBlciBzZTwvaT4uIEludGVybmF0aW9uYWwgc3VwcGx5IGNoYWluIHRyYW5zYWN0aW9ucywgYnkgdmlydHVlIG9mIGEgcmVjZW50bHkgcG9zc2libGUgZGVjZW50cmFsaXplZCxcclxuXHJcbnBlcm1hbmVudCByZWNvcmQgYW5kIG1vbml0b3JpbmcsIGhhdmUgYmVndW4gdG8gbWFrZSBpbnJvYWRzIGluIGFncmljdWx0dXJlLCBwZXRyb2xldW0sIHBoYXJtYWNldXRpY2FscywgZm9vZC1zdXBwbHlcclxuXHJcbmFuZCBvdGhlciBtdWx0aS1zdGFnZSBpbmR1c3RyaWVzLjwvcD5cclxuXHJcblxyXG5cclxuPHA+SWYgY29ycG9yYXRlIGFuZCBnb3Zlcm5tZW50YWwgdHJhbnNhY3Rpb25zIGFyZSB0byBiZSBtYWRlIHB1YmxpYy0tbWFueSBiZWFyaW5nIGVudGVycHJpc2Ugb3IgU3RhdGUgc2VjcmV0cywgdGhlblxyXG5cclxud2lsbCBmb3JlY2FzdGluZyBhbHNvIGdvIHRoZSB3YXkgb2YgYmlyZHM/IFBvc3NpYmx5LiBPbmxpbmUgcGxhdGZvcm1zIGxpa2UgQXVndXJcclxuXHJcbjxzdXAgaWQ9XCIyMC04XCI+ODwvc3VwPmFyZSBjcmVhdGluZyBnbG9iYWwsIGRlY2VudHJhbGl6ZWQgcHJlZGljdGlvbiBtYXJrZXRzLCBpbiBkb21haW5zIGxpa2Ugc3BvcnRzIGJldHRpbmcsIGZpbmFuY2lhbCBtYXJrZXRzXHJcblxyXG5zcGVjdWxhdGlvbiBhbmQgc28gZm9ydGguIEFybWVkIHdpdGggdmFzdCwgdHJhbnNwYXJlbnQga25vd2xlZGdlLCB0aGUgZXZlcnlkYXkgcGVyc29uIGNhbiBub3cgYWNjZXNzIHRoZSB3aGltcyBhbmRcclxuXHJcbnBvd2VyIG9mIEFlb2x1cywgYW5kIGZvcmVjYXN0aW5nIHRoZSB3aW5kcyBvZiBGb3J0dW5lLjwvcD5cclxuXHJcblxyXG5cclxuPHA+XHJcblxyXG48c3Ryb25nPlZJSS4gUmVpbnZlbnRpbmcgR292ZXJubWVudCAmYW1wOyBEZW1vY3JhY3k8L3N0cm9uZz5cclxuXHJcbjxiciAvPiAuLi50byBiZSBjb21wbGV0ZWQuLi48L3A+XHJcblxyXG5cclxuXHJcbjxwPjEuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cucHJvdmVuYW5jZS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IGh0dHBzOi8vd3d3LnByb3ZlbmFuY2Uub3JnLyA8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjIuXHJcblxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5za3VjaGFpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IGh0dHA6Ly93d3cuc2t1Y2hhaW4uY29tLyA8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjMuXHJcblxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5ibG9ja3ZlcmlmeS5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4gaHR0cDovL3d3dy5ibG9ja3ZlcmlmeS5pby8gPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJmZWIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMi0yMVwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2hcIj5PVVIgREFJTFkgVEVDSDwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPlNvY2lvbG9neSBUb21vcnJvdyE8L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPkZlYiAyMSwgMjAxODwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkZhY2Vib29rLUZyaWVuZGx5IFRoaXJkLUdlbmVyYXRpb24gRGF0YSBTdHJ1Y3R1cmVzPC9oNj5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlRvZGF5LCBJJiMzOTttIGdvaW5nIHRvIHdyaXRlIGFib3V0IGRhdGEgc3RydWN0dXJlcywgYW5kIGNoYWxsZW5nZXMgdGhhdCBmYWNlIFZpdGFsaWsgQnV0ZXJpbiBhbmQgb3RoZXIgYmxvY2tjaGFpblxyXG5cclxuYXJjaGl0ZWN0cy4gJiMzOTsgTm93LCB3aHkgaW4gdGhlXHJcblxyXG48aT53b3JsZDwvaT4gd291bGQgSSBvciBhbnlvbmUgZWxzZSBjYXJlIGFib3V0IG9vaCwgbWVyZ2Ugc29ydHMsIGJ1YmJsZSBzb3J0cywgY2xhc3NpZmljYXRvcnkgdHJlZXMsIGFuZCB0aGUgYWR2ZW50XHJcblxyXG5vZiBhIHRoaXJkIGZvcm0gb2YgZGF0YSBzdHJ1Y3R1cmU/PC9wPlxyXG5cclxuXHJcblxyXG48cD5Ub2RheSwgd2UgbGl2ZSBpbiBhbiBldmVyIG1vcmUgcmVsYXRpb25hbCB3b3JsZC4gV2l0aCBhbGwgb3VyIHRlY2hub2xvZ3ksIHdlIGp1c3QgY2FuJiMzOTt0IHdhaXQgdG8gaGVhciB0aGUgbGF0ZXN0XHJcblxyXG5nb3NzaXAgYWJvdXQgc2lzdGVyIEJlY2t5JiMzOTtzIEJveWZyaWVuZCYjMzk7cyBCcm90aGVyJiMzOTtzIEZyaWVuZCB0aGF0XHJcblxyXG48aT5hbHNvPC9pPiBnb3QgdG8gbWVldCBTaGFraXJhLiBHb3NzaXAgdG8gb25lIHBlcnNvbiBpcyBhIHZhbHVhYmxlIGFzc2V0IHRvIHRoZSBkYXRhIGFuYWx5c3QuIEJlY2F1c2UsIGhvdyBlbHNlIGNvdWxkXHJcblxyXG5hbiBhbGdvcml0aG0gZHJhdyBzaW11bHRhbmVvdXMgY29uY2x1c2lvbnMgYWJvdXQgdHdvIGZyaWVuZHMgdGhhdCAmcXVvdDtsaWtlZCZxdW90OyB0aGUgc2FtZSBTYW1zdW5nIFZSLCBhbmQgdGhhdFxyXG5cclxudGhleSBhcmUgYm90aCBsb2NhdGVkIG5lYXIgQmVzdCBCdXkuIFRoYW5rcyB0byBjbGFzc2lmaWNhdG9yaWFsIHdpc2RvbSBvZiBBSSAmYW1wOyBwbGFpbiBtYWNoaW5lLWxlYXJuaW5nPzwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhlc2UgcmVsYXRpb25hbCBxdWVyaWVzIGFyZSBzaW1wbHkgdG9vIGRpZmZpY3VsdCBmb3IgcmVsYXRpb25hbCwgcm93ICZhbXA7IGNvbHVtbiBTUUwgZGF0YSBzdHJ1Y3R1cmVzLiBJbiBmYWN0LFxyXG5cclxubWFueSBxdWVyaWVzIGFyZSBpbXBvc3NpYmxlLCBkdWUgdG8gdW5wcmVzY2llbnQgZGF0YWJhc2Ugc2NoZW1hIGFyY2hpdGVjdHVyZXMuIE5leHQsIHdpdGggdGhlIG5lZWQgdG8gJnF1b3Q7b2JqZWN0aWZ5JnF1b3Q7XHJcblxyXG5kYXRhIGludG8gbm9uLXJlbGF0aW9uYWwgb2JqZWN0cywgcmF0aGVyIHRoYW4gYW4gYW50aXF1YXRlZCwgcmlnaWQgcm93LWFuZC1jb2x1bW4gZGVzaWduLiBUaHVzLCB0aGUgc2Vjb25kIG1ham9yXHJcblxyXG50eXBlIG9mIGRhdGEgc3RydWN0dXJlIGlzIG1vcmUgZmxleGlibGUgYW5kIGFkZXB0IGluIGZpbmRpbmcgdGhlc2UgcmVsYXRpb25hbCBxdWVyaWVzIHRoYXQgYXJlIGV2ZXIgbW9yZSBpbiB2b2d1ZS5cclxuXHJcbkhvd2V2ZXIsIHRoZSBjcnlzdGFsLWxpa2UsIHByaXN0aW5lIG5vbi1yZWxhdGlvbmFsLCBOby1TUUwgZGVzaWducyBxdWlja2x5IHR1cm4gdG8gc3BhZ2hldHRpLCBhbmQgYXJlIHBvb3IgZm9yIHNjYWxhYmlsaXR5LlxyXG5cclxuQmV0d2VlbiBhIHJvY2sgYW5kIGEgaGFyZCBwbGFjZSwgYSB0aGlyZCBkYXRhIHN0cnVjdHVyZSBoYXMgZW1lcmdlZCBpbiByZWNlbnQgeWVhcnMuPC9wPlxyXG5cclxuXHJcblxyXG48cD5HcmFwaCBEYXRhIFN0cnVjdHVyZXNcclxuXHJcbjxzdXA+Mjwvc3VwPiBhbGxvdyBkYXRhIHF1ZXJpZXMgdGhhdCBoYWQgb3RoZXJ3aXNlIGJlZW4gaW1wb3NzaWJsZSB0byBjYXB0dXJlIGluIGFuIGVudGl0eSByZWxhdGlvbnNoaXAgZGlhZ3JhbS4gVGhlXHJcblxyXG5pZGVhbCBleGFtcGxlIHRvIGNsYXJpZnkgaXMgdGhlIG1hbm5lciB0aGF0IHRoZSBTd2lzcyBiYW5rcyYjMzk7IGFjY291bnRzIHdlcmUgZGlzY292ZXJlZCB0byBiZSBoaWRpbmcgdmFzdCBhbW91bnRzXHJcblxyXG5vZiBoaWRkZW4gdGF4ZXMsIGV0Yy4gVGhlIGNvdmVyLXVwIHdhcyBzbyB3ZWxsLWNvbnN0cnVjdGVkIHRoYXQgbm90IHVudGlsIG5ldywgZ3JhcGggZGF0YWJhc2UgcXVlcmllcyBkaXNjb3ZlcmVkXHJcblxyXG5wYXR0ZXJucyBvZiBtb25leSBmbG93XHJcblxyXG48c3VwPjE8L3N1cD46PC9wPlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+VGhlIGRhdGEgd2FzIHRoZW4gdHVybmVkIGludG8gYSBncmFwaCBmb3JtYXQgdG8gZGV0ZWN0IHRoZW4gZmluZS10dW5lIHRoZSBjb25uZWN0aW9ucyBiZXR3ZWVuIHRoZSBub2Rlcy4gVGhlIFN3aXNzXHJcblxyXG5MZWFrIGhlbGQgYXJvdW5kIDYwLDAwMCBmaWxlcyB0aGF0IGNvbnRhaW5lZCBpbmZvcm1hdGlvbiBhYm91dCBvdmVyIDEwMCwwMDAgY2xpZW50cyBpbiAyMDMgY291bnRyaWVzLCB3aGljaCBtZWFuc1xyXG5cclxudGhhdCB0aGUgcmVzdWx0aW5nIGdyYXBoIGRhdGFiYXNlIGhhZCBtb3JlIHRoYW4gMjc1LDAwMCBub2RlcyB3aXRoIDQwMCwwMDAgcmVsYXRpb25zaGlwcyBhbW9uZyB0aGVtLjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPkJ5IGJlaW5nIGFibGUgdG8gZWFzaWx5IHZpc3VhbGlzZSB0aGUgbmV0d29ya3MgYXJvdW5kIGNsaWVudHMgYW5kIGFjY291bnRzLCB0aGUgcmVwb3J0ZXJzIGZvdW5kIG1hbnkgbW9yZSBjb25uZWN0aW9uc1xyXG5cclxudGhhbiB0aGV5IGhhZCBiZWZvcmUsIHdoaWNoIGxlYWQgdG8gdGhlIFN3aXNzIExlYWtzIHJldmVsYXRpb25zIHNvb24gYmVpbmcgc2hhcmVkIHdpdGggdGhlIHB1YmxpYyBhbmQgcmVndWxhdG9yc1xyXG5cclxuYWNyb3NzIHRoZSBnbG9iZS48L3A+XHJcblxyXG5cclxuXHJcbjxwPkFuZCB5b3UgdGhvdWdodCB0aGF0IHBsYWdpYXJpc20tZGV0ZWN0aW5nIHNvZnR3YXJlIHdhcyBpbXByZXNzaXZlIGZvciBjb21wbGV4aXR5ISBUaGUgYmVhdXR5IG9mIHRoaXMgbmV3bHkgYXZhaWxhYmxlXHJcblxyXG5zb2Z0d2FyZSAoZXZlbiBNaWNyb3NvZnQganVtcGVkIG9uIGJvYXJkIGluIHJlY2VudCB5ZWFycykgbWVhbnMgdGhhdCBzb2Npb2xvZ2lzdHMsIGVjb25vbWlzdHMgY2FuIGJlZ2luIHRvIG1ha2VcclxuXHJcbmJldHRlciBoZWFkd2F5IGluIHRoZSB3YXkgdGhhdCBvdXIgbWFueSBpbnRlcmFjdGlvbnMgYmVjb21lIG1vcmUgY29tcGxleCB3aXRoIG1vcmUgZGF0YS4gUmVtZW1iZXIsIGluIHRoZSBwYXN0IHRlblxyXG5cclxubWludXRlcywgbW9yZSBkYXRhIGluZm9ybWF0aW9uIHdhcyBqdXN0IHByb2R1Y2VkIHRoYW4gbW9zdCBvZiBodW1hbiBoaXN0b3J5ISBUaHVzLCBuZXcgYW5kIHVwY29taW5nIG5lZWRzIGluIGRvbWFpbnNcclxuXHJcbmxpa2UgY29udGVudCBtYW5hZ2VtZW50ICZhbXA7IGFjY2VzcyBjb250cm9sLCBnZW8tcm91dGluZyAocHVibGljIHRyYW5zcG9ydGF0aW9uKSwgZ2VuZSBzZXF1ZW5jaW5nLCBiaW8taW5mb3JtYXRpY3MsXHJcblxyXG5hbmQgc28gb24uIFNvLCBhcyB0ZWNobm9sb2d5IHRha2VzIHVzIGZvcndhcmQsIGFuZCB3ZSBtYWtlIG91ciBjb25zaWRlcmF0aW9ucywgbGV0JiMzOTtzIHN0aWNrIGJ5IHRoZSBnb2xkZW4gcnVsZXNcclxuXHJcbm9mIHBhcmFsbGVsIHByb2Nlc3NpbmcsIHNjYWxhYmlsaXR5LCBhbmQsIG5vdywgZ3JhcGgtbmV0d29yayBtaW5kZWRuZXNzIGZvciB0aGUgbmV3IGRhdGEgc3RydWN0dXJlcywgYW5kIHNjaGVtYSxcclxuXHJcbm9mIHRoZSBFcmEhPC9wPlxyXG5cclxuXHJcblxyXG48cD4xLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdsb2JhbGJhbmtpbmdhbmRmaW5hbmNlLmNvbS9ob3ctYS1ncmFwaC1kYXRhYmFzZS11bmVhcnRoZWQtbWFqb3ItZmluYW5jaWFsLWltcHJvcHJpZXRpZXMvXCJcclxuXHJcbnRhcmdldD1cIl9ibGFua1wiPiBodHRwczovL3d3dy5nbG9iYWxiYW5raW5nYW5kZmluYW5jZS5jb20vaG93LWEtZ3JhcGgtZGF0YWJhc2UtdW5lYXJ0aGVkLW1ham9yLWZpbmFuY2lhbC1pbXByb3ByaWV0aWVzLyA8L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjIuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly9uZW80ai5jb20vYmxvZy9hbmFseXppbmctcGFuYW1hLXBhcGVycy1uZW80ai9cIj5CeSBiZWluZyBhYmxlIHRvIGVhc2lseSB2aXN1YWxpc2UgdGhlIG5ldHdvcmtzIGFyb3VuZCBjbGllbnRzIGFuZCBhY2NvdW50cywgdGhlIHJlcG9ydGVycyBmb3VuZCBtYW55IG1vcmUgY29ubmVjdGlvbnNcclxuXHJcbnRoYW4gdGhleSBoYWQgYmVmb3JlLCB3aGljaCBsZWFkIHRvIHRoZSBTd2lzcyBMZWFrcyByZXZlbGF0aW9ucyBzb29uIGJlaW5nIHNoYXJlZCB3aXRoIHRoZSBwdWJsaWMgYW5kIHJlZ3VsYXRvcnNcclxuXHJcbmFjcm9zcyB0aGUgZ2xvYmUuIDwvYT5cclxuXHJcbjxiciAvPiBPdGhlciBtYWpvciB2ZW5kb3JzIGluIGdyYXBoIGRhdGEgc3RydWN0dXJlcyBiYXNlZCBvbiBOZW80ajogT3JpZW50REIsIEFyYW5nb0RCLCBUaXRhbiwgbW9uZ29EQiwgQ29tcGxleGlibGUgU3RhcmRvZyxcclxuXHJcbmFuZCBGcmFueiBBbGxlZ3JvR3JhcGguPC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJmZWIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMi0yMVwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2hcIj5PVVIgREFJTFkgVEVDSDwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDIyLCAyMDE4PC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+TGFuZ3VhZ2VzPC9oNj5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPldoaWxlIEkmIzM5O3ZlIGhhZCBibG9ja2NoYWluLXJlbGF0ZWQgdG9waWNzIG9uIHRoZSBtaW5kIGxhdGVseSwgaXQgc2VlbXMgSSBjYW4mIzM5O3QgZXNjYXBlIGl0IGFzIEkgYnJvYWNoIG5ldyBmaWVsZHMtLWJsb2NrY2hhaW5cclxuXHJcbmlzIGV2ZXJ5d2hlcmUhIFdlbGwsIEkgaGFkIGJlZ3VuIG15IGJsb2cgd2l0aCBpbnRlbnRpb25zIGFib3V0IHRoZSBhY2NlbGVyYXRlZCBzcGVlZCBvZiBsYW5ndWFnZSBhbmQgc3ludGF4IGZvcm1hdGlvbixcclxuXHJcbmFuZCB0aGUgY3VyaW91cyBwaGVub21lbm9uIEkmIzM5O2QgY2FsbCwgZm9yIGxhY2sgb2YgYSBiZXR0ZXIgd29yZCBvciBvciBteSBvd24gcmVhZGluZywgJnF1b3Q7ZGVjbGFyYXRpdmUtc3ludGF4LW1lcmdpbmcmcXVvdDsuXHJcblxyXG5UaGlzIGludm9sdmVzIHRoZSBjdXJpb3VzLCBhbmQgbGFyZ2VseSB1bmtub3duLCBncm93dGggb2YgSmF2YVNjcmlwdCBzY3JpcHRpbmcgbGFuZ3VhZ2UgaW50byBhbG1vc3QgZXZlcnkgZG9tYWluXHJcblxyXG5vZiB3ZWIgYXBwcywgZGF0YSBhbmFseXNpcywgYW5kIGV2ZW4gdGhlIGJvdW5kcyBvZlxyXG5cclxuPGk+TG9naWM8L2k+IGl0c2VsZi4gVGhvdWdoIEkgd29uJiMzOTt0IHN1Ym1pdCBteSByZWFkZXJzIHRvIGEgaGlzdG9yeSBvZiBhIGxhbmd1YWdlLCBzdWZmaWNlIGl0IHRvIHNheSB0aGF0LCAmcXVvdDtJZlxyXG5cclxuYSBjZXJ0YWluIGFsZ29yaXRobSwgZGV2aWNlLCBvciBvYmplY3QgaXMgcHJvZ3JhbW1hYmxlLCB0aGVuIGl0IHdpbGwgZXZlbnR1YWxseSBiZSBwcm9ncmFtbWVkIGluIEphdmFTY3JpcHQuJnF1b3Q7PC9wPlxyXG5cclxuXHJcblxyXG48cD5XaXRob3V0IGdldHRpbmcgaW50byB0ZWNobmljYWxzLCBJJiMzOTtsbCBpbnN0ZWFkIHVzZSBhIHBlcmZlY3QgbWV0YXBob3ItLXRoZSBtYW5uZXIgYnkgd2hpY2ggRW5nbGlzaCBtZXJnZWQgd2l0aFxyXG5cclxuRnJlbmNoLCBiZWdpbm5pbmcgd2l0aCB0aGUgY29ucXVlc3RzIG9mIFdpbGxpYW0gb2YgTm9ybWFuZHksIGFyb3VuZCAxMDk2IG9ud2FyZC4gQWxtb3N0IGEgdGhvdXNhbmQgeWVhcnMgbGF0ZXIsXHJcblxyXG53ZSBjYW4gc2VlIGhvdyBFbmdsaXNoIGdyYW1tYXIgaW5oZXJpdGVkIGl0JiMzOTtzIEFuZ2xvLVNheG9uIExpbmd1aXN0aWMgcm9vdHMsIGFsb25nIHdpdGggdGhlIGNvcmUgdm9jYWJ1bGFyeTtcclxuXHJcblRoZW4sIGFzIEVuZ2xpc2ggdm9jYWJ1bGFyeSBtb3ZlcyBwYXN0IHRoZSBmaXJzdCBmZXcgdGhvdXNhbmQgY29yZSB3b3JkcywgZS5nLiAmcXVvdDttaWxrJnF1b3Q7IG9yICZxdW90O2hvdXNlJnF1b3Q7XHJcblxyXG5mcm9tICZxdW90O21lbGNoZSZxdW90OyBvciAmcXVvdDtoYXVzJnF1b3Q7LCB0aGVuIG1vcmUgdGhhbiA3MCUgb2YgRW5nbGlzaCBWb2NhYnVsYXJ5IGlzIGRpcmVjdGx5IGluaGVyaXRlZCBmcm9tXHJcblxyXG5GcmVuY2gsIGUuZy4gJnF1b3Q7bGFjdG9zZSZxdW90OyBvciAmcXVvdDttYW5zaW9uJnF1b3Q7IGZyb20gJnF1b3Q7bGFpdCZxdW90OyBvciAmcXVvdDttYWlzb24mcXVvdDsuPC9wPlxyXG5cclxuXHJcblxyXG48cD5TaW1pbGFybHksIHRoZSBsYW5ndWFnZSBvZiB0aGUgd2ViIGFuZCBvcmlnaW5hbCBicm93c2VycywgSmF2YVNjcmlwdCwgaGFzIHNpbWlsYXJseSBtb3JwaGVkIGludG8gYSBuZXcgbGFuZ3VhZ2UgY2FsbGVkXHJcblxyXG5Tb2xpZGl0eSwgYnV0IGluIG9ubHkgYSBtaWNyby1mcmFjdGlvbiBvZiBFbmdsaXNoJiMzOTtzIHRpbWUuIFRoZSB1c3VhbCBGT01PIGxvZ2ljIHByb3BlbHMgY29kaW5nIGxhbmd1YWdlIHVzZSxcclxuXHJcbmZvciBleGFtcGxlIEZPTU8gaW5kdWNlZCBNaWNyb3NvZnQmIzM5O3MgZmxhZ3NoaXAgVGV4dCBFZGl0b3IsIFZpc3VhbCBDb2RlLCB0byBhZG9wdCBpdCB5ZWFycyBhZ28uXHJcblxyXG48c3VwIGlkPVwiMjItMVwiPjE8L3N1cD4gVGhlIGxhbmd1YWdlIG9mIEV0aGVyZXVtIEJsb2NrY2hhaW4gaXMgU29saWRpdHksIHdoaWNoIGxpa2UgdGhlIGFib3ZlIGV4YW1wbGUsIGhhcyB0d28gcGFyZW50cywgb25lIG5vbi1sZWdpdGltYXRlLlxyXG5cclxuSXQgaXMgaW4gYWxsIHJlc3BlY3RzIHRvdGFsbHkgSmF2YVNjcmlwdCwgeWV0IHdpdGggb2JqZWN0LW9yaWVudGVkIGVsZW1lbnRzIG9mIEMrKy4gRm9yIHRoZSBsYXlwZXJzb24sIGxldCYjMzk7c1xyXG5cclxuanVzdCBzYXkgU29saWRpdHkgcmVzZW1ibGVzIGEgJnF1b3Q7TGlnZXImcXVvdDssIGluIGl0IGlzIGF0IGl0JiMzOTtzIGNvcmUgSmF2YVNjcmlwdCwgeWV0IHdpdGggaW5jcmVhc2luZyBzb3BoaXN0aWNhdGlvblxyXG5cclxuYmFzZWQgb24gQysrIGxvZ2ljLCBpdHMgaGVhZCBhbmQgdG9yc28gaGFzIGJlZ3VuIHRvIHJlc2VtYmxlIHRoZSBwb3dlcmZ1bCBtYWNoaW5lLWNvZGUgb2YgQysrIGV2ZXIgbW9yZS4gQW5kIGl0XHJcblxyXG5pcyBhIGJlYXV0aWZ1bCwgYnV0IGN1cmlvdXMgcGhlbm9tb25lbm9uLjwvcD5cclxuXHJcblxyXG5cclxuPHA+XHJcblxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5pYnRpbWVzLmNvLnVrL21pY3Jvc29mdC1hZGRzLWV0aGVyZXVtLWxhbmd1YWdlLXNvbGlkaXR5LXZpc3VhbC1zdHVkaW8tMTU1MjE3MVwiPmh0dHA6Ly93d3cuaWJ0aW1lcy5jby51ay9taWNyb3NvZnQtYWRkcy1ldGhlcmV1bS1sYW5ndWFnZS1zb2xpZGl0eS12aXN1YWwtc3R1ZGlvLTE1NTIxNzE8L2E+XHJcblxyXG48L3A+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTIzXCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaFwiPk9VUiBEQUlMWSBURUNIPC9oNT5cclxuXHJcblxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+V2ViIERldiBBZmZhaXJzPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMjMsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyIGRhaWx5dGl0bGVcIj4xLjQgTWlsbGlvbiBSZWFzb25zIGZvciBtb3JlIFdvbWVuIGluIFRlY2g8L2g2PlxyXG5cclxuPGEgaHJlZj1cIiMxOC0wMy0wOFwiIHJlbD1cInN0eWxlc2hlZXRcIj5CbG9nIGFkZHJlc3NlZCBhZ2FpbiBNYXJjaCA4LCAyMDE4IDwvYT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPjEuNCBtaWxsaW9uXHJcblxyXG48aT5uZXc8L2k+IGpvYnMgYnkgMjAyMDsgRW5kIG92ZXIgZW5kLCB5ZWFyIGFmdGVyIHllYXIsIHRoZSBjb21wdXRlciBwcm9ncmFtbWluZyBpbmR1c3RyeSBjb250aW51ZXMgdG8gYWRkIGFub3RoZXJcclxuXHJcbjIwJSBtb3JlIGpvYnMgZWFjaCB5ZWFyLCBmb3IgdGhlIG5leHQgZml2ZSB5ZWFycy4gVGhpcyBpcyB0aGUgb25seSBmaWVsZCB0aGF0IGRlbWFuZCBvdXRzdHJpcHMgdGhlIHN1cHBseS0tYW5kIGluY3JlYXNpbmdseVxyXG5cclxuc2hvcnQgc3VwcGx5LiBTbyBtdWNoIHNvLCB0aGUgVVMgRGVwYXJ0bWVudCBvZiBMYWJvciBmb3JlY2FzdHMgVS5TLiBjaXRpemVucyB3aWxsIGJlIGFibGUgdG8gZmlsbCAzOSUgb2YgdGhvc2UgcG9zaXRpb25zO1xyXG5cclxudGhlcmUgYXJlIG5vdCBlbm91Z2ggSW1taWdyYXRpb24gdmlzYXMgKGVzcGVjaWFsbHkgaW4gdGhlIFRydW1waWFuIGVyYSBvZiBpc29sYXRpb25pc20pIHRvIG1ha2UgdXAgdGhlIHJlc3QuPC9wPlxyXG5cclxuXHJcblxyXG48cD4mbmJzcDs8L3A+XHJcblxyXG5cclxuXHJcbjxwPlNvLCBob3cgaXMgaXQgdGhhdCBvbmx5IDE0JSBvZiBmZW1hbGVzIGluIHRoZSBlbnRpcmUgZmllbGQgb2YgY3liZXJzZWN1cml0eT8gU2lsaWNvbiBWYWxsZXkgaXMsIGF0IGl0cyBiZXN0LCBvYnNjZW5lbHlcclxuXHJcbm9uZS1zaWRlZC4gQXQgR29vZ2xlLCBvbmx5IDE3JSBvZiB0aGUgY29tcGFueSYjMzk7cyB0ZWNoIGpvYnMgYXJlIGZpbGxlZCBieSB3b21lbi4gRmFjZWJvb2sgd29tZW4gc3RhZmYgb25seSAxNSVcclxuXHJcbm9mIHRlY2ggam9icywgYW5kIFR3aXR0ZXI/IDEwJSBmZW1hbGUuIFRoZSBmaWd1cmVzIG9uIHdvbWVuIGluIGNvbXB1dGVyIHNjaWVuY2UgYWNyb3NzIHRoZSBuYXRpb24sIGFjcm9zcyB0aGUgZW50aXJlXHJcblxyXG5pbmR1c3RyeSBhcmUgbm90IGltcHJvdmluZywgYnV0XHJcblxyXG48aT5kZWNsaW5pbmc8L2k+P1xyXG5cclxuPHN1cD4xPC9zdXA+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPk9mIGNvdXJzZSwgd2UmIzM5O3ZlIGhlYXJkIHRoZXNlIHN0YXRpc3RpY3MgZnJvbSBhbnkgZ2l2ZW4gaGVhZGxpbmUsIGFuZCBpbiB0aGUgaGFsbHMgYWNyb3NzIHRoZSB1bml2ZXJzaXR5IGxhbmRzY2FwZSxcclxuXHJcbnN0YXJ0aW5nIHdpdGggV29tZW4gaW4gU1RFTSAoU2NpZW5jZSwgVGVjaCwgRW5naW5lZXJpbmcsIE1hdGhlbWF0aWNzKSBwcm9ncmFtcy5cclxuXHJcbjxzdXA+Mzwvc3VwPiBZZXQsIHdoeSwgd2l0aCBzbyBtdWNoIG1vbmV5LCBzbyBtYW55IHByb2dyYW1zLCBzbyBtYW55IG5vbi1nb3Zlcm5tZW50YWwsIG5vbi1wcm9maXQgZWZmb3J0PzwvcD5cclxuXHJcblxyXG5cclxuPHA+SSBhcmd1ZSB0aGF0IHRlY2hcclxuXHJcbjxpPmNsaW1hdGUgPC9pPiBpcyBkaXJlY3RseSB0byBibGFtZS4gV2hvIHRoZW4/IE5vdCBhIHBlcnNvbiwgYnV0IHByaW5jaXBsZXMgYXJlIHRvIGJsYW1lLiBDdWx0dXJlLS1vZnRlbiBkZWZpbmVkIGFzXHJcblxyXG5zaGFyZWQgYmVsaWVmcywgbm9ybXMsIGxhbmd1YWdlIGFuZCBiZWhhdmlvcnMtLWNhbiBoYXJkbHkgYmUgY2hhbmdlZCwgYnV0IGl0IGNhbiBiZSB1bmRlcnN0b29kLlxyXG5cclxuPGJyIC8+IFRoZXJlIGlzIGEgYm9vaywgY2FsbGVkICZxdW90O1Byb2dyYW0gb3IgYmUgUHJvZ3JhbW1lZFxyXG5cclxuPHN1cCBpZD1cIjI0LTRcIj40PC9zdXA+XHJcblxyXG48L3A+XHJcblxyXG4sIGJ5IHdoaWNoIHRoZSBhdXRob3IgZXhwbGFpbnMgc29jaWFsIGNvbnNlcXVlbmNlcyBvZiBhIGRpY2hvdG9taXplZCBzb2NpZXR5LS1iZXR3ZWVuIHRob3NlIHRoYXQgbWFuaXB1bGF0ZSB0aGUgZW52aXJvbm1lbnRcclxuXHJcbmFyb3VuZCB0aGVtLCB3aGV0aGVyIGF1dG9tYXRpbmcgdGFza3MgYXQgd29yaywgb3Igc2ltcGx5IGZpeGluZyBhIHNpbXBsZSBzb2Z0d2FyZSBidWcsIGJ5IGFkZGluZyBhIGNvbW1hLiBUaGlzIGxpdGVyYWN5XHJcblxyXG5vZiB0aGUgQ3VycmVudCBFcmEgaXMgYWtpbiB0byB0aGUgMjYtbGV0dGVyIGFscGhhYmV0IG9mIHdyaXR0ZW4gc2VudGVuY2VzIGFuZCBwYXJhZ3JhcGhzLCBhbmQtLW5vdCB0byBiZSB0YWtlbiBmb3JcclxuXHJcbmdyYW50ZWQtLWlzIHRoZSBleGNsdXNpdmUgZm9ybSBvZiBjb21tdW5pY2F0aW9uLCBvdXRzaWRlIG9mIGEgMTAwLWZvb3QgcGVyaW1ldGVyLCB1cCB1bnRpbCAxNTAgeWVhcnMgYWdvLiBLbm93bGVkZ2VcclxuXHJcbmlzIG5vdCBwb3dlciwgdGhlIGNvbW11bmljYXRpb24gb2Yga25vd2xlZGdlIGlzIHBvd2VyLlxyXG5cclxuXHJcblxyXG48cD4mbmJzcDs8L3A+XHJcblxyXG5cclxuXHJcbjxwPkkgYXJndWUgdGhhdCB0b2RheSwgdGhlIHBvd2VyIGlzIHRvIHByb2dyYW0gb25lIGFwcGxpY2F0aW9uIHByb2dyYW1taW5nIGludGVyZmFjZSAoQVBJKSB0byB0YWxrIHRvIGFub3RoZXIgQVBJLiBJblxyXG5cclxub3RoZXIgd29yZHMsIHRoZSBhYmlsaXR5IHRvIGRpcmVjdGx5IGNvbW11bmljYXRlIHdpdGggc29mdHdhcmUgYXQgdGhlIGNvbW1hbmQtbGluZSBpcyBub3Qgbm93IGEgcmVxdWlzaXRlIHNraWxsLFxyXG5cclxuYnV0IHByb21vdGlvbnMgd291bGQgbm90IGVzY2FwZSB0aGlzIG5lY2Vzc2l0eSEgU28sIG5vdyByZXZlcnRpbmcgYmFjayB0byB0aGUgc3ViamVjdCBvZiB3b21lbiBpbiB0ZWNoLCBBbWVyaWNhblxyXG5cclxubGVhZGVyc2hpcCBpcyBpbiBkZWVwIHBlcmlsIHdpdGhvdXQgbW9yZSBmZW1hbGUgaW5zaWdodC4gSSB3aWxsIGZpbmlzaCBieSBjaXRpbmcgdGhhdCBBcmVzLCB0aGUgdmlvbGVudCwgdW50YW1lZFxyXG5cclxuR3JlZWtcclxuXHJcbjxpPmdvZCBvZiB3YXI8L2k+LCBjYW5ub3QgYWx3YXlzIGRyaXZlIHRoZSBDYXBpdGFsaXN0IGVuZ2luZTsgYmVjYXVzZSBTaGUsIEF0aGVuYSwgdGhlXHJcblxyXG48aT5nb2RkZXNzIG9mIGludGVsbGlnZW5jZTwvaT4gcmVwcmVzZW50cyB0cnVlIHN0cmF0ZWd5ITwvcD5cclxuXHJcblxyXG5cclxuPHA+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5odWZmaW5ndG9ucG9zdC5jb20vMjAxNS8wMy8yNy93b21lbi1pbi10ZWNoX25fNjk1NTk0MC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuaHVmZmluZ3RvbnBvc3QuY29tLzIwMTUvMDMvMjcvd29tZW4taW4tdGVjaF9uXzY5NTU5NDAuaHRtbDwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+Mi5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL2ZhaXJ5Z29kYm9zcy5jb20vYXJ0aWNsZXMvd29tZW4taW4tdGVjaC1mYWN0cy1maWd1cmVzLWFuZC1wZXJjZW50YWdlc1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vZmFpcnlnb2Rib3NzLmNvbS9hcnRpY2xlcy93b21lbi1pbi10ZWNoLWZhY3RzLWZpZ3VyZXMtYW5kLXBlcmNlbnRhZ2VzPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cD4zLlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFhdXcub3JnL3Jlc2VhcmNoL3doeS1zby1mZXcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuYWF1dy5vcmcvcmVzZWFyY2gvd2h5LXNvLWZldy88L2E+XHJcblxyXG48L3A+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTI0XCI+XHJcblxyXG48aHIgLz5cclxuXHJcblxyXG5cclxuPGEgaHJlZj1cIiN0b3AyXCI+PGJ1dHRvbj5Ub3A8L2J1dHRvbj48L2E+XHJcblxyXG4mbmJzcDtcclxuXHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaFwiPk9VUiBEQUlMWSBURUNIPC9oNT5cclxuXHJcblxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+V2ViIERldiBBZmZhaXJzPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMjQtMjUsIDIwMThcclxuXHJcbjxiciAvPiBXZWVrZW5kXHJcblxyXG48L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyIGRhaWx5dGl0bGVcIj5Kb3lzIG9mIEF1dG9tYXRpb248L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+V2hpbGUgY29kaW5nIHVwIGEgYmV0dGVyIHNoZWxsIGZvciB0aGlzIHdlYnNpdGUsIEkgdGhvdWdodCBpdCYjMzk7cyByZW1hcmthYmxlIGhvdyBvdXIgbGl2ZXMgZ2V0IGVhc2llciBhbmQgZWFzaWVyXHJcblxyXG53aXRoIGVhY2ggcGFzc2luZyB5ZWFyIG9mIHRlY2guIFVzaW5nIEphdmFTY3JpcHQtLXRoZSBwcmltb3JkaWFsIHdlYi1jb2RpbmcgbGFuZ3VhZ2UtLUkgbWFydmVsIGF0IHRoZSBjb252ZW5pZW5jZVxyXG5cclxub2YgZGVsZWdhdGluZyBtdW5kYW5kZSBjb2Rpbmcgc3R1ZmYgdG8gdGFza3J1bm5lcnMsIGxpa2VcclxuXHJcbjxpPkd1bHA8L2k+LS1hIHByb2dyYW1tYWJsZSBwYWNrYWdlIG1hbmFnZXIgdGhhdCAmcXVvdDtidW5kbGVzJnF1b3Q7IHVwIHRoZSBsaWJyYXJpZXMgdG8gYmUgdXNlZCBpbiB0aGUgYXBwLiBJdCBpc1xyXG5cclxudHJ1bHkgYSBqb3khPC9wPlxyXG5cclxuXHJcblxyXG48cD5JIHdyaXRlIGZvdXIgc3R5bGluZ1xyXG5cclxuPGk+ZnVuY3Rpb25zPC9pPiwgd2l0aCBhYm91dCAxNlxyXG5cclxuPGk+dmFyaWFibGVzPC9pPiBhbmQgdm9pbCZhZ3JhdmU7ISBJIGZpbmlzaCBpbiAzIGhvdXJzIHdoYXQgd291bGQgaGF2ZSB0YWtlbiBtZSAxNSBob3VycywgdGhlbiBhbm90aGVyIDUgaG91cnMgYSBtb250aFxyXG5cclxuZm9yIHVwa2VlcC4gSW5zdGVhZCwgbm93LCBpdCYjMzk7cyBhcyB0aG91Z2ggSSB3aW5kIHVwIHRoZSBjbG9jaywgYW5kIG5lZWQgb25seSBwZXJpb2RpY2FsbHkgY2hlY2ssIGFuZCBwZXJoYXBzXHJcblxyXG51cGRhdGUgYSB2YXJpYWJsZSBvciB0d28gLi4uIFRlY2hub2xvZ3kuIEkmIzM5O20gZ3VzaGluZyBmb3Igam95LjwvcD5cclxuXHJcblxyXG5cclxuPHA+VGhpcyB3YXMgbWVyZSBKYXZhU2NyaXB0LS13aXRoIGEgdHJ1bHlcclxuXHJcbjxpPlR1cmluZyBDb21wbGV0ZTwvaT4tLXBhbi1hbGdvcml0aG0gc3RhdHVzLS1sYW5ndWFnZXMsIHRoZSBwb3NzaWJpbGl0aWVzIGFyZSAxMDAtZm9sZCB3aXRoIFB5dGhvbiBsYW5ndWFnZSBsaWJyYXJ5XHJcblxyXG5jb2xsZWN0aW9uOyB0aGlzIGxpYnJhcnkgY29sbGVjdGlvbiBpbmNsdWRlcyBOQVNBIG1vZHVsZXMsIG1hdGhlbWF0aWNhbCBwcm9vZnMsIGFuZCBsaW1pdGxlc3MgdXNlcyBmcm9tIHdlYi1zY3JhcGluZ1xyXG5cclxuZm9yIHVuc3RydWN0dXJlZCBkYXRhIHRvIGFuIGV4Y2VsbGVudCBkYXRhIHZpc3VhbGl6YXRpb24gY29sbGVjdGlvbi4gU29tZXRpbWVzIEkgZmVlbCBsaWtlIEkmIzM5O20gaW4gdGhlIExpYnJhcnlcclxuXHJcbm9mIENvbmdyZXNzLCBhbmQgYmV0dGVyIHlldCBiZWNhdXNlLCBQSVAsIHRoZSBQeXRob24gcGFja2FnZSBtYW5hZ2VyIGFjdHMgYW5kIGF1dG9tYXRlcyBsaWtlIGEgY3lib3JnIGxpYnJhcmlhbixcclxuXHJcbmZvciBsYWNrIG9mIGJldHRlciBpbWFnZXJ5LjwvcD5cclxuXHJcblxyXG5cclxuPHA+SSBqdXN0IGhhdmUgc28gbXVjaCBqb3kgd2F0Y2hpbmcgYSBwcm9qZWN0IGNvbWUgdG8gbGlmZSwgYW5kIGl0JiMzOTtzIGV2ZW4gYSBncmVhdGVyIGRlbGlnaHQgaWYgdGhpcyBwcm9qZWN0IGNvbWVzXHJcblxyXG50byBsaWZlIGFuZCBzdGF5cyBhbGl2ZSwgdGhyb3VnaCB0aGUgam95cyBvZiBhdXRvbWF0aW9uITwvcD5cclxuXHJcblxyXG5cclxuPHA+Jm5ic3A7PC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJmZWIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMi0yNlwiPlxyXG5cclxuPGhyIC8+XHJcblxyXG5cclxuXHJcbjxhIGhyZWY9XCIjdG9wMlwiPjxidXR0b24+VG9wPC9idXR0b24+PC9hPlxyXG5cclxuJm5ic3A7XHJcblxyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2hcIj5PVVIgREFJTFkgVEVDSDwvaDU+XHJcblxyXG5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMjYsIDIwMTg8L2g2PlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyIGRhaWx5dGl0bGVcIj5DcnlwdG9jdXJyZW5jeSYjMzk7cyBDdW1iZXJzb21lIENhcmJvbiBGb290cHJpbnQ8L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+SSBtdXN0IGNvbmZlc3MgdGhhdCBvbiB0aGUgdmVyeSBkYXkgdGhhdCBPdXIgRGFpbHkgVGVjaCBCbG9nIGdldHMgYW4gdW5kZXItdGhlLWhlYWQgbWFrZS1vdmVyIGZvciBzZWN1cml0eSYjMzk7c1xyXG5cclxuc2FrZSwgSSB3cm90ZSB0aGUgbmV3IGZvcm1hdHRpbmcgZmlsZSByaWdodCBvdmVyIHRvZGF5JiMzOTtzIHBvc3QuIEFtYXppbmcsIGFuZCB0aGUgdHdvIG9jY3VycmVkIG5lYXJseSBzaW11bHRhbmVvdXNseVxyXG5cclxuYXMgSSB3b3JrZWQgb24gdGhlbSwgdGhlaXIgcGF0aHMgY3Jvc3NlZCBhbmQgcG9vZiwgZ29uZSEgU2FtZSBwbGF0Zm9ybSwgYW5kIEkgcGFpZCB0aGUgcHJpY2UhIFdoZXRoZXIgSSBjaGFuZ2UgbXlcclxuXHJcbndheXMgaXMgeWV0IHRvIGJlIHNlZW4sIGJ1dCBJIHNoYWxsIGNvbnRpbnVlIHdpdGggbXkgb3JpZ2luYWwgdGhlbWUgZm9yIHRoZSBkYXksIG5hbWVseSwgU3VzdGFpbmFiaWxpdHksIGEuay5hLlxyXG5cclxuQ2FyYm9uIEZvb3RwcmludC48L3A+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5Qb3dlciBjb25zdW1wdGlvbiBpcyBvbmUgb2YgdGhlIG1ham9yIGNvc3RzIG9mIGJpdGNvaW4gbWluaW5nLCBhcyBkZWRpY2F0ZWQgbWFjaGluZXMgY3J1bmNoIHRoZSBhbGdvcml0aG1zIHRoYXQgYnVpbGRcclxuXHJcbmEgcmVjb3JkIG9mIGV2ZXJ5IHNpbmdsZSBiaXRjb2luIHRyYW5zYWN0aW9uIGFuZCBhcmUgcmV3YXJkZWQgd2l0aCB0aW55IGZyYWN0aW9ucyBvZiBhIGJpdGNvaW4gZm9yIHRoZWlyIGVmZm9ydHMuXHJcblxyXG48c3VwIGlkPVwiZXhwbGFpblwiPjE8L3N1cD5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+VG9kYXkgSSBoYXZlIGEgbWlsZCBDcml0aXF1ZSBhbmQgUHJhaXNlIGZvciB0aGUgYmxvY2tjaGFpbiBzdXN0YWluYWJpbGl0eSBwcm9ibGVtIGNhdXNlZCBieSBza3ktaGlnaCBlbGVjdHJpY2l0eVxyXG5cclxuYmlsbHMhIENvbXB1dGVyIGFsZ29yaXRobXMgZG8gd2FzdGUgZWxlY3RyaWNpdHksIG5vdCBsaWtlIHlvdXIgV2lkZXNjcmVlbi4gTW9yZSBlbGVjdHJpY2l0eSBpcyBnb2JibGVkIHVwIGJ5IHNtYWxsXHJcblxyXG5hbmQgbGFyZ2UgbWluaW5nIG9wZXJhdGlvbnMgaW4gbmVhcmx5IGV2ZXJ5IGNvdW50cnkgdGhhbiBzbWFsbCBuYXRpb25zIVxyXG5cclxuPHN1cCBpZD1cImVsZWN0cmljaXR5XCI+MTwvc3VwPi4gRXRoZXJldW0sIEJpdGNvaW4gYW5kIGEgaGFuZGZ1bCBvZiBvdGhlciAmcXVvdDtQcm9vZi1vZi1Xb3JrJnF1b3Q7IGRlc2lnbnMgcmVxdWlyZSBlbGVjdHJpY2l0eSBiZWNhdXNlXHJcblxyXG50aGUgaW52ZXN0bWVudCBpbiBlcXVpcG1lbnQgaXRzZWxmIGlzIGludmVzdG1lbnQsIGJ1dCBtb3JlIGltcG9ydGFudGx5LCB0d28td2F5IGluY2VudGl2YXRpb24gZm9yIG1pbmluZyBkcml2ZXNcclxuXHJcbnRoZSBzeXN0ZW0sIGFuZCB0aGUgc2NhcmNpdHkgZGVtYW5kIHRocm91Z2ggZGlmZmljdWx0eSBjb21wdXRhdGlvbnMuPC9wPlxyXG5cclxuXHJcblxyXG48cD5TbywgaXMgdGhlIGVsZWN0cmljaXR5IGNvbnN1bXB0aW9uIHJlYWxseVxyXG5cclxuPGk+Y29ycmVsYXRlZDwvaT4gd2l0aCB0aGUgdmFsdWUsIHNjYXJjaXR5LCBvZiB0aGUgY3VycmVuY3k/IFllcy4gRGlnaWNvbm9taXN0LS1hIGNyeXB0b2N1cnJlbmN5IGFuYWx5c2lzIHNpdGVcclxuXHJcbjxzdXBcclxuXHJcbmlkPVwiZGlnaWNvbm9taXN0XCI+Mzwvc3VwPiBlc3RpbWF0ZXNcclxuXHJcbjxpPmVhY2g8L2k+RXRoZXJldW0gdHJhbnNhY3Rpb24gcmVwcmVzZW50cyBhIDQ1IEtpbG93YXR0LWhvdXIgb2YgZWxlY3RyaWNpdHkmIzM5O3MgbWluaW5nLiAoQSB2aXNhIGNyZWRpdCBjYXJkIHRyYW5zYWN0aW9uXHJcblxyXG5pcyAwLjAwNjUxIGtXaC4gVGhlIGVudGlyZSBFdGhlcmV1bSBnbG9iYWwgYmxvY2tjaGFpbiBjb3VsZCBiZSAmcXVvdDt1c2luZyBhcyBtdWNoIGFzIDQuMiBUZXJhd2F0dC1ob3VycyAodFdoKSxcclxuXHJcbm9yIHNsaWdodGx5IG1vcmUgdGhhbiB0aGUgY291bnRyeSBvZiBDeXBydXNcclxuXHJcbjxzdXAgaWQ9XCJjeXBydXNcIj4xPC9zdXA+LiZxdW90OyBTbywgZWxlY3RyaWNpdHkgY29tcGFyaXNvbnMgYXJlIHRlbGxpbmcsIGJ1dCBob3cgZG9lcyB0aGlzIHJlbGF0ZSB0byBpdHMgZW52aXJvbm1lbnQgaW1wYWN0LCBzdXN0YWluYWJpbGl0eVxyXG5cclxuaXRzZWxmPzwvcD5cclxuXHJcblxyXG5cclxuPHA+Q2FyYm9uIEZvb3RwcmludCwgb3VyIGVuZXJneSBjb25zdW1wdGlvbiBpbmRleCwgY2FuIGJlIGNvbXBhcmVkIHRvIGFub3RoZXIgZWxlbWVudCBvZiBzY2FyY2l0eSwgd2hpY2ggZGljdGF0ZXMgZmx1Y3R1YXRpb25zXHJcblxyXG5pbiB2YWx1ZTogR29sZC4gQWNjb3JkaW5nIHRvXHJcblxyXG48aT5EaWdpY29ub21pc3Q8L2k+LCBhbiBhdmVyYWdlIGhvdXNlaG9sZCYjMzk7cyBDYXJib24gRm9vdHByaW50IGlzIGFib3V0IDEwIHRvbnMgb2YgQ08yIHBlciB5ZWFyLiBUaGUgYXJ0aWNsZSBkb2VzXHJcblxyXG50aGUgbWF0aCBmb3IgdXMgdmVyeSBzdWNjaW5jdGx5OjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPk9uIHRvcCBvZiB0aGlzLCB3ZSBjYW4gZmluZCB0aGF0IHRoZSBwcm9jZXNzIG9mIG1pbmluZyBCaXRjb2luIGlzbiZyc3F1bzt0IGp1c3QgbW9yZSBlbmVyZ3ktaW50ZW5zaXZlLCBidXQgYWxzbyBoYXNcclxuXHJcbmEgYmlnZ2VyIGVudmlyb25tZW50YWwgaW1wYWN0LiBUbyByZWFjaCB0aGF0IGNvbmNsdXNpb24sIHdlIGZpcnN0IG5lZWQgdG8gZXN0aW1hdGUgdGhlIGNhcmJvbiBmb290cHJpbnQgZm9yIGJvdGguXHJcblxyXG5Gb3IgQml0Y29pbiB3ZSBjYW4sIGFnYWluLCBnZXQgdGhpcyBudW1iZXIgZnJvbSB0aGUgQml0Y29pbiBFbmVyZ3kgQ29uc3VtcHRpb24gSW5kZXguIEZvciBnb2xkLCB3ZSBhc3N1bWUgYSBjYXJib25cclxuXHJcbmZvb3RwcmludCBvZiAyMCB0b25zIG9mIENPMmUgcGVyIGV2ZXJ5IGtpbG9ncmFtIG9mIGdvbGQgbWluZWRcclxuXHJcbjxzdXAgaWQ9XCJkaWdpY29ub21pc3QyXCI+Mzwvc3VwPi48L3A+XHJcblxyXG5cclxuXHJcbjxwPlRoZSBhcnRpY2xlIGNvbnRpbnVlcyB0byBjbGFyaWZ5IHRoYXQgMzMsMDAwIGtpbG9ncmFtcyBvZiBDTzIgcGVyIHVuaXQgbWluZXMgKGNvbXBhcmF0aXZlbHksIG9uZSBCaXRjb2luJiMzOTtzIHdvcnRoXHJcblxyXG5vZiBHb2xkIGlzIDQsMDAwIGtpbG9ncmFtcyBvZiBDTzIpLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIHRoZSBlbGVjdHJpY2l0eSBjb3N0cy0taWYgbm90IHN1c3RhaW5hYmxlIGxvbmctdGVybS0tY291bGRcclxuXHJcbnNwZWxsIHRyb3VibGUuIEhlbmNlLCB0aGUgdGhyZWUgUyYjMzk7cywgbWVudGlvbmVkIGxhc3QsIHN1c3RhaW5hYmlsaXR5IGlzIHBlcmhhcHMgYSBsYXJnZXIgaXNzdWUgdGhhbiBibG9ja2NoYWluXHJcblxyXG5TZWN1cml0eSBhbmQgU2NhbGFiaWxpdHkgY2hhbGxlbmdlcy4gQWdhaW4sIHRoaXMgaXMgYSBwcm9ibGVtIHRoYXQgdGhlIHRoaXJkIGxhcmdlc3QgY3J5cHRvY3VycmVuY3kgZG9lcyBub3QgaGF2ZTpcclxuXHJcbjxpPlJpcHBsZTwvaT4sIHdoaWNoIGRvZXMgbm90IGJlYXIgYSBjYXJib24gZm9vdHByaW50XHJcblxyXG48c3VwIGlkPVwicmlwcGxlXCI+NDwvc3VwPi48L3A+XHJcblxyXG5cclxuXHJcbjxwPiZuYnNwOzwvcD5cclxuXHJcblxyXG5cclxuPHA+MC5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5jbmV0LmNvbS9ob3ctdG8vYml0Y29pbi1ldGhlcmV1bS1vci1saXRlY29pbi13aGljaC1jcnlwdG9jdXJyZW5jeS1pcy1iZXN0LWZvci15b3UvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuY25ldC5jb20vaG93LXRvL2JpdGNvaW4tZXRoZXJldW0tb3ItbGl0ZWNvaW4td2hpY2gtY3J5cHRvY3VycmVuY3ktaXMtYmVzdC1mb3IteW91LzwvYT5cclxuXHJcbjxiciAvPiBGb3IgdGhvc2UgbmV3IHRvIGNyeXB0b2N1cnJlbmNpZXMsIHRoaXMgaXMgYSBmYWlybHkgc3VjY2luY3QgYXJ0aWNsZSB0byBjcnlwdG9jdXJyZW5jaWVzLCBhbmQgdGhlaXIgdW5kZXJseWluZ1xyXG5cclxuc3RydWN0dXJlLjwvcD5cclxuXHJcblxyXG5cclxuPHA+MS5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL21vdGhlcmJvYXJkLnZpY2UuY29tL2VuX3VzL2FydGljbGUvZDN6bjlhL2V0aGVyZXVtLW1pbmluZy10cmFuc2FjdGlvbi1lbGVjdHJpY2l0eS1jb25zdW1wdGlvbi1iaXRjb2luXCJcclxuXHJcbnRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vbW90aGVyYm9hcmQudmljZS5jb20vZW5fdXMvYXJ0aWNsZS9kM3puOWEvZXRoZXJldW0tbWluaW5nLXRyYW5zYWN0aW9uLWVsZWN0cmljaXR5LWNvbnN1bXB0aW9uLWJpdGNvaW48L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPjIuXHJcblxyXG48YSBocmVmPVwiaHR0cDovL3d3dy53aXJlZC5jby51ay9hcnRpY2xlL2hvdy1tdWNoLWVuZXJneS1kb2VzLWJpdGNvaW4tbWluaW5nLXJlYWxseS11c2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwOi8vd3d3LndpcmVkLmNvLnVrL2FydGljbGUvaG93LW11Y2gtZW5lcmd5LWRvZXMtYml0Y29pbi1taW5pbmctcmVhbGx5LXVzZTwvYT5cclxuXHJcbjwvcD5cclxuXHJcblxyXG5cclxuPHA+My5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL2RpZ2ljb25vbWlzdC5uZXQvYml0Y29pbi1taW5pbmctbW9yZS1wb2xsdXRpbmctdGhhbi1nb2xkLW1pbmluZ1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vZGlnaWNvbm9taXN0Lm5ldC9iaXRjb2luLW1pbmluZy1tb3JlLXBvbGx1dGluZy10aGFuLWdvbGQtbWluaW5nPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuXHJcblxyXG48cD40LlxyXG5cclxuPGEgaHJlZj1cImh0dHBzOi8vcmlwcGxlLmNvbS94cnAvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9yaXBwbGUuY29tL3hycC88L2E+XHJcblxyXG48L3A+XHJcblxyXG5cclxuXHJcbjxwPiZuYnNwOzwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMjdcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoXCI+T1VSIERBSUxZIFRFQ0g8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPkZlYiAyNywgMjAxODwvaDY+XHJcblxyXG5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkFmdGVyIFllc3RlcmRheSYjMzk7cyBTY2F0aGluZyBQb3N0LCBBIExvb2sgYXQgbXkgb3duIENhcmJvbiBGb290cHJpbnQ8L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+SW4gbXkgcmVmbGVjdGlvbnMgYWJvdXQgZW52aXJvbm1lbnQgc3VzdGFpbmFiaWxpdHkgaXNzdWVzLCBJIGNvbmZlc3MgSSYjMzk7bSBzb3J0IG9mIGEgaHlwb2NyaXRlIC4uLiBUaGUgd2hvbGUgbWF0dGVyXHJcblxyXG50aGF0IGNhdXNlZCBteSBvd24gaW50cm9zcGVjdGlvbiBiZWdpbnMgd2l0aCBteSB1c3VhbCBkYWlseSB2ZXhhdGlvbjogVGFuZ2xlcyBvZiB3aXJlcyFcclxuXHJcbjxiciAvPiAmbmJzcDsgLi4uIEkmIzM5O3ZlIGJlZW4gaGF2aW5nIGVsZWN0cmljaXR5IGlzc3VlcywgaGVyZSBhcyBvZiBsYXRlIC4uLjwvcD5cclxuXHJcblxyXG5cclxuPHA+T24gb25lIHNpZGUsIG15IHRpbnkgWW9nYSBVbHRyYWJvb2sgdXN1YWxseSBsaWtlcyB0byBjaGFyZ2UganVzdCBmaW5lIHdpdGggbXkgcGhvbmUgY2hhcmdlci0taWYgSSYjMzk7bSBzdHVjayB3aXRob3V0XHJcblxyXG5teSBjaGFyZ2VyLiBBbmQgZHVlIHRvIGFuIHVudGltZWx5IGVuZCB0byB0aGUgY2hhcmdlciwgSSBuZWVkZWQgYSByZXBsYWNlbWVudC4gU28sIHNpbmd1bGFyIGVycmFuZCBvZiB0aGUgZGF5IHdhc1xyXG5cclxuYSB0cmlwIHRvIEJlc3QgQnV5IHRvIHBlcnVzZSBmb3IgYSA0NS1XYXR0IFVTQi1DIGNoYXJnZXIgKCB0aGUgbmV3IG92YWwgY2hhcmdpbmcgcG9ydCBvbiBTYW1zdW5nIDgmIzM5O3MsIExHIEc2JiMzOTtzXHJcblxyXG5hbmQgbmV3ZXIgQXBwbGUgcHJvZHVjdHMpLjwvcD5cclxuXHJcblxyXG5cclxuPHA+TWVhbndoaWxlLCBteSBjcmVkaXQtY2FyZCBzaXplZCBSYXNwYmVycnkgUGkgY29tcHV0ZXIgcnVucyBvbiBhbiBvbGQtc2Nob29sIFVTQiBjaGFyZ2VyLS1hIHdob2xlIExpbnV4IFNlcnZlciBUb3dlclxyXG5cclxub24gYSBjZWxsLXBob25lIGNoYXJnZXIuIFRoZW4sIHdlIGhhdmUgbXkgdHJ1c3R5IERlbGwgKGFjdHVhbCkgVG93ZXIgd2l0aCAxNiBHaWdzIG9mIFJBTSwgMi10ZXJhYnl0ZXMsIGV0Yy4gdGhhdFxyXG5cclxuYWxzbyBzZWVtcyB0byBuZWVkIGFuIGV4dHJhIGZhbiB0byBzdGF5IGNvb2wtLXByb2JhYmx5IHRoZSBzdXN0YWluYWJpbGl0eSBvZiAxMDAgUmFzcGJlcnJ5IGNvbXB1dGVycy4gTXkgZW50aXJlXHJcblxyXG5jYXJib24gZm9vdHByaW50IGNoYW5nZXMgbW9yZSB3aXRoIHRoZSBlbGVjdHJpY2FsIHByb2R1Y3RzIHRoYXQgSSB1c2UsIHRoYW4gbXkgdmVoaWNsZSEgV2VsbCwgSSBhbHNvIGNvbmZlc3MgbXlcclxuXHJcbkplZXAgQ2hlcm9rZWUgY2FuJiMzOTt0IGV2ZW4gYm9hc3QgMjAgbWlsZXMgcGVyIGhvdXIgLi4uIG9vcHMsIGNvbnNjaWVuY2UgcGFuZ3MsIG91Y2ggLi4uIFdlbGwsIGh5cG9jcml0aWNhbCwgc2xpZ2h0bHksXHJcblxyXG5idXQgZm91bmQgbm90IGd1aWx0eSBzaW5jZSBJJiMzOTttIGEgYmlrZS1jb21tdXRlciBmb3IgbGlmZSE8L3A+XHJcblxyXG5cclxuXHJcbjxwPiZuYnNwOzwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMjhcIj5cclxuXHJcbjxociAvPlxyXG5cclxuXHJcblxyXG48YSBocmVmPVwiI3RvcDJcIj48YnV0dG9uPlRvcDwvYnV0dG9uPjwvYT5cclxuXHJcbiZuYnNwO1xyXG5cclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoXCI+T1VSIERBSUxZIFRFQ0g8L2g1PlxyXG5cclxuXHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5NdXNpbmcgQmxvY2tjaGFpbjwvaDU+XHJcblxyXG5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuXHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDI4LCAyMDE4PC9oNj5cclxuXHJcblxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+T25lIExhc3QgV29yZCBhYm91dCBCaXRjb2luJiMzOTtzIENhcmJvbiBGb290cHJpbnQ8L2g2PlxyXG5cclxuXHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+RW52aXJvbm1lbnRhbCBTdXN0YWluYWJpbGl0eSwgYWdhaW4sIGFuZCBhIGhpZ2hlci1sZXZlbCB2aWV3IG9mIHRoZSBkaWxlbW1lYS4uLkkgY291bGRuJiMzOTt0IHJlc2lzdDpcclxuXHJcbjxiciAvPiBCaXRjb2luJiMzOTtzIEluaXRpYWwgQ29pbiBPZmZlcmluZyB3YXMgMjAxMSBvciBzbywgdGhlbiBFdGhlcmV1bSwgd2l0aCBFdGhlciBmb3IgY3VycmVuY3kgd2FzIDIwMTU7IFRoZXNlIHR3byxcclxuXHJcbmV2ZXIgc28gcHJlc2NpZW50IGRlc2lnbnMsIGFsc28gaGF2ZSB0aGVpciBBY2hpbGxlcyBIZWFsLiBUaGVzZSB0d28gYXJlXHJcblxyXG48c3Ryb25nPiZxdW90O1Byb29mIG9mIFdvcmsmcXVvdDsgY3VycmVuY3kgYWxnb3JpdGhzbXM8L3N0cm9uZz4uIFRoaXMgbWVhbnMgdGhhdCB0aGUgJnF1b3Q7RGVtYW5kJnF1b3Q7IHNpZGUgb2Ygc3VwcGx5LWFuZC1kZW1hbmQsXHJcblxyXG5kZXJpdmVzIGZyb21cclxuXHJcbjxpPmRpZmZpY3VsdHkgbGV2ZWxzPC9pPiBvZiBjcnlwdG8tYmxvY2tzIHRvIG1pbmUuIFNvLCBtaW5lcnMgYXJlIGluY2VudGl2aXplZCB0byBzcGVuZCAkMTUwMCBvbiBhIHNlbWktbWVkaW9jcmUtZ29vZFxyXG5cclxubWluaW5nIHJpZyAod2hpY2ggaXMgYmFzaWNhbGx5IDIwIE5WSURJQSBHcmFwaGljcyBDYXJkcyB0aWVkIHRvZ2V0aGVyIHRvIHN0YWNrIG9mIHR3by1ieS1mb3VycyB3aXRoIGxvdHMgb2YgZmFuc1xyXG5cclxuLi4uIGVyaGVtLCBzdXN0YWluYWJpbGl0eT8uLi48L3A+XHJcblxyXG5cclxuXHJcbjxwPkFuZCBmb3IgZWFjaCBibG9jayB0aGF0IGlzICZxdW90O3NvbHZlZCZxdW90OywgaGVuY2UgdGhlIGJsb2NrIGJlaW5nIHZhbGlkYXRlZCwgYW5kIHNvbWVib2R5JiMzOTtzIGNyeXB0b2N1cnJlbmN5XHJcblxyXG5wdXJjaGFzZS90cmFuc2FjdGlvbiBpcyByZXNvbHZlZCEgKHRha2VzIGFib3V0IDEyIG1pbnV0ZXMgZm9yIHRoZSB3aG9sZSBnbG9iYWwgYmxvY2tjaGFpbiB0byBjeWNsZSwgYW5kIEV0aGVyZXVtXHJcblxyXG5pcyBsZXNzIHRoYW4gYSBtaW51dGUpLiBTbywgdGhlIHdob2xlIGN5Y2xlIGNvbnRpbnVlcywgY2h1cm5pbmcgdGhyb3VnaCBjb2FsLSBhbmQgY2FyYm9uLXN0YWluZWQgaGFuZHMgb2YgdGhlIGVsZWN0cmljaXR5XHJcblxyXG5mZWQgdG8gdGhlc2UgY3J5cHRvLW1pbmluZyByaWdzXHJcblxyXG48c3VwPjE8L3N1cD4uIEZvciBtYW55IGl0JiMzOTtzIGEgaG9iYnksIGxpa2UgdGhlIEJyaXRpc2ggSG9iYnlpc3RzJiMzOTsgbG92ZSBmb3IgaGFtLSBhbmQgc2hvcnQtd2F2ZSByYWRpbyBzZXR1cHMsIHlldFxyXG5cclxudGhpcyBwcm9maXRhYmxlLCB5ZXQgcGFydGljdWxhciBob2JieSByZXNlbWJsZXMgdGhlIDE4NzAmIzM5O3MgY29hbCBmYWN0b3J5IHNtb2tlIHN0YWNrcyBpbiBTb3V0aCBMb25kb24hPC9wPlxyXG5cclxuXHJcblxyXG48cD5MZXQmIzM5O3MgZmFjZSBpdCwgaWYgRXRoZXJldW0gaXMgYWJsZSB0byBzdWNjZXNzZnVsbHkgaGFyZC1mb3JrIHRvIGEgUHJvb2Ytb2YtU3Rha2Ugc3lzdGVtIHNvb24tLWFuZCBWaXRhbGlrIEJ1dGVyaW5cclxuXHJcbmFuZCBoaXMgY3JldyBhc3N1cmUgdXMgaXQgaXMgY29taW5nXHJcblxyXG48c3VwPjI8L3N1cD4tLXRoZW4gZ3JlYXQtLXByb2JsZW0gc29sdmVkLCBldmVyeXRoaW5nIGV2ZW50dWFsbHkgY29udmVydHMgdG8gRXRoZXJldW0uIElmXHJcblxyXG48aT5ub3Q8L2k+dGhleSBmYWNlIGFuIGV4aXN0ZW50aWFsIHRocmVhdC4gQmVjYXVzZSwgaW4gYSBtb3JlIGVubGlnaHRlbmVkIHRlbiB5ZWFycyBmcm9tIG5vdywgdGhvc2UgbWluaW5nIGRlcG90c1xyXG5cclxuPGk+d291bGQ8L2k+IGxvb2sgbGlrZSB1bmZldHRlcmVkIGZhY3Rvcnkgc21va2Utc3RhY2tzLiBQcm9vZi1vZi1TdGFjaywgd2hvc2UgY3VycmVuY3kgdmFsdWUgaXMgbm90IHNldCB0byBkaWZmaWN1bHRcclxuXHJcbm9mIGFsZ29yaXRobSBwdXp6bGUgKGhlbmNlLFxyXG5cclxuPGk+cHJvb2Ytb2Ytd29yazwvaT4sIGJ1dCByYXRoZXIgdG8gb3duZXJzaGlwIG9mICZxdW90O3ZvdGluZyBwb29scyZxdW90Oywgd2hpY2ggaXMgYVxyXG5cclxuPGk+XHJcblxyXG48c3Ryb25nPkNvbnNlbnN1cy1CYXNlZCBCbG9ja2NoYWluIGFsZ29yaXRobTwvc3Ryb25nPlxyXG5cclxuPC9pPiBbQ29tcGxleCBzdWJqZWN0IGJlc3QgcmVzZXJ2ZWQgZm9yIGEgcmFpbnkgZGF5LCBvciBiZXR0ZXIgeWV0LCBubyBkYXkhIEkgbWF5IHJldmlzaXQgdGhpcyBhbHRlcm5hdGl2ZSBpbiBhIGZ1bm5lclxyXG5cclxud2F5LCBoZXJlJiMzOTtzIGEgZ2xpbXBzZSBmcm9tIFZpdGFsayYjMzk7cyBAVml0YWxpa0J1dGVyaW4gdHdlZXQgeWVzdGVyZGF5OjwvcD5cclxuXHJcblxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlF1ZXN0aW9uIGZvciBtYXRoZW1hdGljaWFuczogaXMgdGhlcmUgYSBhc3N1bWVkLXRvLWJlLW5vcm1hbCBudW1iZXIgKGllLiBkaWdpdHMgYXJlIHJhbmRvbSwgbGlrZSBwaSBvciBlKSB3aGVyZSB5b3VcclxuXHJcbmNhbiBjYWxjdWxhdGUgdGhlIG50aCBkaWdpdCBpbiBsb2cobikgKG9yIGV2ZW4gcG9seWxvZyhuKSkgdGltZT8gSWYgc28sIHRoZW4gSCh4KSA9IGRpZ2l0c1t4IC4uLiB4KzEwMF0gc2VlbXMgbGlrZVxyXG5cclxuaXQgd291bGQgYmUgYSBjb29sIGNyeXB0b2dyYXBoaWMgaGFzaCBhbGdvLjwvcD5cclxuXHJcblxyXG5cclxuPHA+Tm93LCBJIGFtIGJ5IG5vIG1lYW5zIGEgZGV0ZWN0aXZlLCBidXQgYnkgdGhlIHNvdW5kIG9mIHRob3NlIHR3ZWV0cywgdGhlIFByb29mLW9mLVdvcmsgYWxnb3JpdGhtIHNlZW1zIHRvIHN0aWxsIGJlXHJcblxyXG5vZiB1dG1vc3QgaW1wb3J0YW5jZSAuLi48L3A+XHJcblxyXG5cclxuXHJcbjxwPjEuXHJcblxyXG48YSBocmVmPVwiaHR0cHM6Ly9ibG9ja2V4cGxvcmVyLmNvbS9uZXdzL2V0aGVyZXVtLWxhdW5jaGVzLWNhc3Blci10ZXN0bmV0LXBhdmluZy13YXktcHJvb2Ytc3Rha2UvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9ibG9ja2V4cGxvcmVyLmNvbS9uZXdzL2V0aGVyZXVtLWxhdW5jaGVzLWNhc3Blci10ZXN0bmV0LXBhdmluZy13YXktcHJvb2Ytc3Rha2UvPC9hPiBhbmQgYWxzbyxcclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy50cnVzdG5vZGVzLmNvbS8yMDE3LzExLzI4L2V0aGVyZXVtcy1wcm9vZi1zdGFrZS1jYXNwZXItdGVzdG5ldC1uZWFycy1sYXVuY2hcIlxyXG5cclxudGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cudHJ1c3Rub2Rlcy5jb20vMjAxNy8xMS8yOC9ldGhlcmV1bXMtcHJvb2Ytc3Rha2UtY2FzcGVyLXRlc3RuZXQtbmVhcnMtbGF1bmNoPC9hPlxyXG5cclxuPC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXY+XHJcblxyXG48cCBpZD1cInBhZ2VlbmRcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOjE1MHB4O1wiPiZuYnNwOzwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuVG9wIG9mIFBhZ2U8L2J1dHRvbj5cclxuXHJcblxyXG5cclxuPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDE4IEFsbCBSaWdodHMgUmVzZXJ2ZWQuICZuYnNwOyB8ICZuYnNwO1xyXG5cclxuPGEgaHJlZj1cImh0dHA6Ly93d3cudGhvbWFzbWFlc3Rhcy5uZXRcIiB0aXRsZT1cIkNvbnRhY3QgSW5mb3JtYXRpb246IHRob21hc21hZXN0YXMubmV0L1wiPlxyXG5cclxudGhvbWFzbWFlc3Rhcy5uZXQgPC9hPiZuYnNwOyB8ICZuYnNwOyBcclxuXHJcbjxpbWcgc3JjPVwiZGlzdC9pbWcvcGF5cGFsLlBOR1wiIGFsdD1cIlBheVBhbCBFbWJsZW1cIiBoZWlnaHQ9XCJcclxuXHJcbjE1XCIgID48L2ltZz5cclxuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5wYXlwYWwuY29tL3BheXBhbG1lL1Rob21hc01hZXN0YXNcIiBzdHlsZT1cImNvbG9yOndoaXRlO3RleHQtZGVjb3JhdGlvbjpub25lO1wiPlxyXG5cclxuJm5ic3A7XHJcblxyXG5CbG9nIFN1cHBvcnQgIEFwcHJlY2lhdGVkITwvYT4gXHJcblxyXG48L3A+ICAgXHJcbmA7IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ibG9nLXRleHQuanMiLCJcclxuXHJcbmNvbnNvbGUubG9nKCdibG9nLWZlYi1sb2FkZXInKTsgXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvZy1mZWJcIikuaW5uZXJIVE1MID0gYCBcclxuPGhyIC8+XHJcbjxidXR0b24gaWQ9XCJmZWJ0b3BcIj5UT1A8L2J1dHRvbj4gXHJcbjxiciAvPlxyXG48aDQ+UE9TVFMgRkVCUlVBUlkgMjAxODwvaDQ+XHJcbjxiciAvPlxyXG48aDY+Rmlyc3QgQmxvZyBQb3N0ITwvaDY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMTBcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjdG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5NdXNpbmcgQmxvY2tjaGFpbjwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMTAsIDIwMTg8L2g2PlxyXG5cclxuPGg2PkZpcnN0IEJsb2cgUG9zdCE8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+V2h5IGFyZSBTb2Npb2xvZ2lzdHMgbm93IHRoZSBLZXkgUGxheWVycyBpbiBEYXRhIEFuYWx5c2lzIHdpdGhpbiB0aGUgRG9tYWluIG9mIEJsb2NrY2hhaW4gVGVjaG5vbG9naWVzPzwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+Rmlyc3QsIGxldCBtZSBkZXNjcmliZSB0aGF0IGJsb2NrY2hhaW4gdGVjaG5vbG9naWVzLCBpLmUuIEdvdmVybm1lbnQgY29udHJhY3RzLCBCdXNpbmVzcyBjb250cmFjdHMsIEJpdGNvaW4gYW5kIG90aGVyXHJcbmNyeXB0b2N1cnJlbmNpZXMsIGFsbCByZWx5IG9uIG5ldHdvcmsgZ3JhcGggdGhlb3J5LCBib3RoIG9uIHRoZSBsb3ctbGV2ZWwgcHJvZ3JhbW1pbmcgdGVjaG5vbG9neSAocGVlci10by1wZWVyIGdsb2JhbFxyXG5pcCBuZXR3b3JrcykgYWNyb3NzIHRoZSBzcGVjdHJ1bSB0byBoaWdoLWxldmVsIGludGVyZmFjZXMgZm9yIGluc3RpdHV0aW9uYWwsIGNvcnBvcmF0ZSwgaW5kaXZpZHVhbCBuZWVkcyBhbmQgdXNlcy5cclxuVGhlc2UgYmxvY2tjaGFpbiAmcXVvdDtuZXR3b3JrJnF1b3Q7IGFuYWx5c2VzIGRlcGVuZCBvbiBoaWdobHkgdmFyaWFibGUtLWFuZCBzaW11bHRhbmVvdXMtLW5ldHdvcmsgY2hhbmdlcywgbm9kZVxyXG5jaGFuZ2VzLCBhbmQgbGluayBjaGFuZ2VzOyBhbmQsIHRoZSBsYXR0ZXIgdGhyZWUgbWF5IGFyYml0cmFyaWx5IGNoYW5nZSBpbnRlcmRlcGVuZGFudGx5IG9yIG5vdC48L3A+XHJcblxyXG48cD5UaGVyZWZvcmUsIGJsb2NrY2hhaW4gdGVjaG5vbG9naWVzIG11c3QgZmlyc3QgYWNjb21vZGF0ZSBjb21wbGV4IG5vZGUgdmFyaWFibGVzIGZvciBjb250cmFjdHMgKHJlbGF0aW9uc2hpcHMpIHRoYXRcclxuaW5jbHVkZSBhcmJpdHJhcmlseSBoaWVyYXJjaGljYWwgbWFwcGluZ3MgYW5kIGNvbmRpdGlvbmFsIGRhdGEgc3RydWN0dXJlcy4gU2Vjb25kbHksIGJsb2NrY2hhaW4gdGVjaCBtdXN0IGZhY2UgYW5hbHl0aWNhbFxyXG5jaGFsbGVuZ2VzIHRoYXQgYXJpc2UgZnJvbSBpbmZvcm1hbCBwcmFjdGljZXNcclxuPHN1cD4xPC9zdXA+LCBieSB3aGljaCB0aGUgb3JnYW5pemF0aW9uYWwgbm9kZXMgKGVtcGxveWVlcykgY2hvb3NlIHRvIGRldmlhdGUgZnJvbSB0aGUgZW1wbG95ZWUgcm9sZSYjMzk7cyBwcm90b2NvbCBmb3JcclxudGhlIHNha2Ugb2YgZWZmaWNpZW5jeSwgY29udmVuaWVuY2UsIGNvbXBhbnkgY3VsdHVyZSwgYW5kIG11bHRpcGxlIG90aGVyIGxldmVscyBvZiBodW1hbiBmYWN0b3JzLjwvcD5cclxuXHJcbjxwPlNvY2lvbG9naXN0cyBNZXllciAmYW1wOyBSb3dhbiYjMzk7cyAoMTk3NylcclxuPGk+TmV3IEluc3RpdHV0aW9uYWxpc208L2k+IGV4cGxhaW5zIGhvdyBlbXBsb3llZXMgY2hhbmdlIHByYWN0aWNlcyBhbmQgZGVjb3VwbGVcclxuPGk+YWN0dWFsPC9pPiBvcmdhbml6YXRpb25hbCBzdHJ1Y3R1cmUgZnJvbSByZWNvcmRlZCBydWxlcywgYXMgYSBmdW5jdGlvbiBvZiBvcmdhbml6YXRpb25hbCBzaXplLCB0aW1lLCBjb252ZW5pZW5jZSxcclxuZXRjLiBUaGVzZSBjb250aW51YWxseSBuZXcsIHVua25vd24gY29uc3RyYWludHMgb24gZGF0YSBtdXN0IGJlIGludGltYXRlbHkgdW5kZXJzdG9vZCwgbm9uLWFsZ29yaXRobSBodW1hbiB1bmRlcnN0YW5kaW5nXHJcbjxpPmJ5IGF0IGxlYXN0IG9uZSBzaWRlIDwvaT5vZiB0aGUgZXhjaGFuZ2UuIEhvdyBkbyB3ZSByZWNvZ25pemUgdW53cml0dGVuLCBzb2Z0IHJ1bGVzIGFuZCBiZWhhdmlvcnMgb2YgYSBiYW5rLCBhIHBlcnNvbixcclxub3IgYSBjb21wYW55JiMzOTtzIGludGVybmFsIGJvdD88L3A+XHJcblxyXG48cD5UaGUgaGFyZCBzY2llbmNlcyBkb21haW4gb2YgU29mdHdhcmUgRW5naW5lZXJpbmcsIENvbXB1dGVyIFNjaWVuY2UsIGFuZCBNYXRoZW1hdGljcyBoYXZlIGJyaWxsaWFudGx5IGJyb3VnaHQgdGhlXHJcbndvcmxkIHRoZSBibG9ja2NoYWluIHRvb2wsIGZvciB3aGljaCB0aGUgSGFyZCBTY2llbmNlcyBjYW4gb25seSBjb250cmlidXRlIGxpdHRsZSBvbiBob3cgdG8gaW50ZXJmYWNlIHdpdGggc29jaWFsXHJcbm5lZWRzLiBBc2sgeW91cnNlbGYsIGhvdyB3ZWxsIGRvIDEsMDAwIHRvcCBibG9ja2NoYWluLXJlbGF0ZWQgcHJvZ3JhbW1lcnMgdW5kZXJzdGFuZCB0aGUgbXVsdGktZGltZW5zaW9uYWwgbGF5ZXJzXHJcbm9mIGhpZXJhcmNoaWNhbCBzb2NpYWwsIGNvcnBvcmF0ZSwgYW5kIGdvdmVybm1lbnRhbCByZWxhdGlvbnNoaXAgbmV0d29ya3M/IFdlbGwgZW5vdWdoIHRvIGRpZmZlcmVudGlhdGUgcXVhbGl0YXRpdmVcclxubWVhbmluZyBpbiB0aGUgc21hcnQtY29udHJhY3Q/IEZlYXJmdWxseSwgbm8uPC9wPlxyXG5cclxuPHA+SW4gdGhlIHBhc3QsIHRoZSBsYXllcnMgb2YgYWJzdHJhY3Rpb24gZnJvbSByYXcgdGVjaG5vbG9naWNhbCB0b29sIHRvIHNvY2lldGFsIHVzZSB3YXMgcmVmaW5lZCwgaW1wcm92ZWQsIGludGVncmF0ZWRcclxudGhyb3VnaCBtdWx0aXBsZSBsYXllcnMgb2YgJnF1b3Q7bWlkZGxlbWVuJnF1b3Q7LCBzdWNoIGFzIGxhd3llcnMsIGNvcnBvcmF0ZSBsYXd5ZXJzLCBnb3Zlcm5tZW50IGluc3RpdHV0aW9ucywgbm9uLWdvdmVybm1lbnRhbCxcclxubm9uLXByb2ZpdCBhbmQgZm9yLXByb2ZpdCBhY3RvcnMuIEJsb2NrY2hhaW4gdGVjaG5vbG9neSwgYnkgaXRzIHZlcnkgbmF0dXJlLCBlcmFzZXMgdGhlIG1pZGRsZW1lbi4gU3VkZGVubHksIG9uZVxyXG5wcm9ncmFtbWVyLCBmb3IgZXhhbXBsZSwgaXMgd3JpdGluZyB0aGUgc2FtZSBoZWFsdGhjYXJlIGluc3VyYW5jZSBjcnlwdG8tY29udHJhY3QsIHRoYXQgbGFzdCBtb250aCBhbiBlbnRpcmUgdGVhbVxyXG5vZiBob3NwaXRhbCBlbXBsb3llZXMgc3BlbnQgYSBtb250aCB3cml0aW5nOyB0aGVuIG92ZXJzZWVpbmcgYW5kIG1hbmFnaW5nIGRpZmZlcmVudCBmYWNldHMgb2YgdGhpcyBzYW1lIHRoaW5nLjwvcD5cclxuXHJcbjxwPkhvd2V2ZXIsIHRoZSBjcnlwdG8tY29udHJhY3QsIG9uY2UgZGVwbG95ZWQgdG8gdGhlIGJsb2NrY2hhaW4sIGF1dG8tbWFuYWdlcyB0aGUgcmVzdCwgZm9yZXZlciBvciBmb3IgdGhlIGxpZmUgb2ZcclxudGhlIGNvbnRyYWN0LiBUaGVyZWZvcmUsIHJhdGhlciB0aGFuIHJlZG9pbmcgdGhlIHRyaWFscyBhbmQgZXJyb3JzIG9mIDIwMCB5ZWFycyYjMzk7IFNvY2lvbG9neSBOZXR3b3JrIEFuYWx5c3RzJiMzOTtcclxucmVzZWFyY2ggYW5kIGFuYWx5dGljYWwgZGV2ZWxvcG1lbnQuIFRoZXJlZm9yZSwgbWVkaWNhbCBhbmQgb3RoZXIgc29jaWFsIGZpZWxkcyBjYW5ub3QgYW5kIHNob3VsZCBub3QgdHVybiB0byB0aGVcclxuSGFyZCBTY2llbmNlcyBmb3Igc29sdXRpb25zLiBUaGVzZSBNZWQgcmVzZWFyY2hlcnMgYW5kIGRldmVsb3BlcnMgYXJlIGFscmVhZHkgYXQgaG9tZSwgc2FmZSB3aXRoaW4gdGhlIGFjYWRlbWljXHJcbmRvbWFpbiBvZiB0aGUgUmF3IFNjaWVuY2VzIG9mIE1lZGljYWwgU29jaW9sb2d5LCBQdWJsaWMgSGVhbHRoLCBhbmQgc28gb24uIFRoZSBuZXh0IHRlbiB5ZWFycyBvZiBibG9ja2NoYWluIHRlY2hub2xvZ3lcclxuY2FuIGVpdGhlciBiZSBkZWZpbmVkIGJ5IHVud2l0dGluZywgcGllY2VtZWFsIGFkdmFuY2VzLCBhY2NvbXBhbmllZCBieSBmcmVxdWVudCwgbm9uLWltcHJvdmluZyBkaXN0YXN0cm91cyBjcmlzZXMuXHJcbk9yLCB0aGUgbmV4dCB0ZW4geWVhcnMgY2FuIGZvbGxvdyBTb2Npb2xvZ3kmIzM5O3MgU2NpZW50aWZpYyBNZXRob2QgdG93YXJkIGEgbWlsZGx5IHR1cmJ1bGVudCwgYnV0IHN0YWJsZSBhbmQgYmVhdXRpZnVsXHJcbmZ1dHVyZS48L3A+XHJcblxyXG48cD5FeGFtcGxlcyBhc2lkZSwgdGhlIHByaW1hY3kgb2YgdGhlIFNvY2lvbG9neSBhY2FkZW1pYyBmaWVsZCBpbiB0aGUgZWFybHkgMjFzdCBjZW50dXJ5IHF1aWNrbHkgYmVjb21lcyBhcHBhcmVudCBvblxyXG5yZXZpZXcgb2YgdGhlIFNvY2lvbG9naXN0cyYjMzk7IHNwZWNpYWxpemF0aW9uIGluIG5ldHdvcmsgdGhlb3JpZXMgaW1idWVkIHdpdGggc3ltbWV0cmljYWwgYW5kIGFzeW1tZXRyaWNhbCByZWxhdGlvbnNoaXBzLFxyXG53aXRoaW4gc29jaWFsIG5ldHdvcmtzIHRoYXQgY2hhbmdlIGFyYml0cmFyaWx5IHRoZSBkaXJlY3Rpb24sIGNvbmRpdGlvbnMsIGFuZCB2YWx1ZXMgb2YgdGhvc2Ugc2FtZSByZWxhdGlvbnNoaXBzLlxyXG5XZSBTb2Npb2xvZ2lzdHMgZGVhbCB3aXRoIHJlYWwtdGltZSwgbG9naWNhbCBhbmQgaGllcmFyY2hpY2FsIG5ldHdvcmsgbWFwcGluZ3MgdGhhdCBhcHBlYXIgYXJiaXRyYXJ5LCB5ZXQgYXJlIGNoYXJhY3Rlcml6ZWRcclxuYnkgZml4ZWQgcGF0dGVybnMuPC9wPlxyXG5cclxuPHA+Tm8gb3RoZXIgYWNhZGVtaWMgZmllbGQgdGhhbiBzb2Npb2xvZ3kgaGFzIGFkdmFuY2VkIGludG8gdGhlIGRldGFpbHMsIGFuZCBlbmRsZXNzIG5ldHdvcmsgcmFiYml0LWhvbGVzIHRoYXQgY2hhcmFjdGVyaXplXHJcbnNvY2lldGFsIGJlaGF2aW9yLiBOb3QgdW50aWwgdGhpcyBzZWNvbmQgbWlsbGVuaWFsIGRlY2FkZSBjb3VsZCB0aGUgbWFycmlhZ2Ugb2YgTGFyZ2UgTnVtYmVyIFN0YXRpc3RpY2FsIFRoZW9yeVxyXG5iZWNvbWUgY29uc3VtYXRlZCB3aXRoIHRoZSBicmlsbGlhbmNlIG9mIGVhcmx5IDE5MDAmIzM5O3MgU29jaW9sb2dpY2FsIEZyZW5jaCBOZXR3b3JrIFRoZW9yaWVzLCBsaWtlIE1hdXJpY2UgSGFsYnN3YWNoJiMzOTtzXHJcbndvcmsgb24gdGhlIGNsZWFybHkgZGVmaW5lZCBuZXR3b3JrIHBhdHRlcm5zIG9mIGEgc29jaWV0eSYjMzk7cyBDb2xsZWN0aXZlIE1lbW9yeS48L3A+XHJcblxyXG48cD5ObyBvdGhlciBhY2FkZW1pYyBmaWVsZCBoYXMgY29sbGVjdGVkIGFuZCByZWZpbmVkIGtub3dsZWRnZSBvbiBuZXR3b3JrIGFyYml0cmFyaW5lc3MsIHN1Y2ggdGhhdCBFY29ub21pYyYjMzk7cyAmcXVvdDtpcnJhdGlvbmFsXHJcbmJlaGF2aW9ycyZxdW90OyBhbmQgTWF0aGVtYXRpY2FsICZxdW90O2NvbXBsZXhpdHkgbW9kZWxzJnF1b3Q7IGRvIG5vdFxyXG48aT50b3VjaCB0byB0aGUgYm9uZTwvaT4gdGhlIG1lYW5pbmcsIHRoZSBpbnRlcnNlY3Rpb25hbGl0eSBvZiBuZXR3b3JrIGFuYWx5c2lzLCB3aGljaCBtdXN0IGluY29ycG9yYXRlIHNpbXVsdGFuZW91c1xyXG5ub2RlIGNoYW5nZXMgKHBlcnNvbiBnZXRzIGpvYiAvb3IvIGRvZXMgbm90IGdldCBqb2IpLCBuZXR3b3JrIGNoYW5nZXMgKEFsbCBnZXQgam9icyAvb3IvIG9ubHkgMyBvZiAxNSBuZXR3b3JrIGdyb3Vwc1xyXG5nZXQgam9icyksIGFuZCBtb3N0IGltcG9ydGFudGx5IHRoZVxyXG48aT5yZWxhdGlvbnNoaXA8L2k+IGNoYW5nZXMgKGFsbCBqb2JzIGFsd2F5cyB1c2VmdWwgL29yLyBoYWxmIG9mIGpvYiBncm91cHMgbm8gbG9uZ2VyIHVzZWZ1bCkgYWNyb3NzIHRpbWUgYW5kIGZpeGVkLjwvcD5cclxuXHJcbjxwPkZpbmUuIFNvLCB3aHkgaXMgU29jaW9sb2d5JiMzOTtzIG5ldHdvcmsgdGhlb3J5IHNvIHZhbHVhYmxlIGJleW9uZCBqdXN0IHRoZSBuZXR3b3JrIGluc2lnaHRzIGdsZWFuZWQgZnJvbSAxOXRoIGFuZFxyXG4yMHRoIGNlbnR1cmllcyYjMzk7IG5ldHdvcmsgcHJvYmxlbXM/IEZvbGxvdzogRXVyb3BlYW4gc29jaW9sb2d5IGNhbWUgb2YgYWdlIGluIHRoZSBhbmFsb2cgc29jaWFsIGVyYSwgd2hpbGUgTm9ydGhcclxuQW1lcmljYW4gU29jaW9sb2d5IG9ubHkgcmVjZW50bHkgY29tZSBvZiBhZ2UgKFF1ZWJlYyBpbiB0aGUgMTk2MCYjMzk7cyBbcG9zdC0xOTY4XSwgVS5TLiBpbiB0aGUgMTk5MCYjMzk7c1twb3N0LTE5OTldLFxyXG5pbiB0aGUgZGlnaXRhbCBzb2NpYWwgZXJhLiBUaGVyZWZvcmUsIHRoZSBwcm9ibGVtLXNvbHZpbmcgcGF0dGVybnMgb2YgcGFzdCBzb2Npb2xvZ3kgYXJlIGluaGVyZW50bHkgc21hbGwtZGF0YSBhbmRcclxubW9yZSBxdWFsaXRhdGl2ZSBhbmFseXNpcywgYW5kIHRodXMgb25seSBTb2Npb2xvZ3kgaW5jb3Jwb3JhdGVzICZxdW90O2h1bWFuLW5lc3MmcXVvdDsgaW50byB0aGUgYmlsbGlvbiByb3dzIGFuZFxyXG5jb2x1bW5zIG9mIHF1YW50aXRhdGl2ZS0tbnVtYmVycy1vbmx5LS1hbmFseXNpcy48L3A+XHJcblxyXG48cD5Gb3IgZXhhbXBsZSwgT3hmb3JkLWRldmVsb3BlZCBTLkkuRS5OLkEuIFNvZnR3YXJlIGFjY29tcGxpc2hlcyB0aGlzIHRhc2suIFNJRU5BLS1uYW1lZCBmb3IgU2ltdWxhdGlvbiBJbnZlc3RpZ2F0aW9uXHJcbmZvciBFbXBpcmljYWwgTmV0d29yayBBbmFseXNpcy0tc29mdHdhcmUgY2FsY3VsYXRlcyB0aGUgcmVhbC10aW1lIHZhbHVlcywgZGlyZWN0aW9uLCBhbmQgY29uZGl0aW9ucyBvZiBlYWNoIHJlbGF0aW9uc2hpcFxyXG4obGluaykgaW4gYSBuZXR3b3JrLCBzaW11bHRhbmVvdXNseSBhcyBlYWNoIG5vZGUsIG5ldHdvcmssIG9yIGFsdGVyLWxpbmsgY2hhbmdlcyBvciBpcyBjaGFuZ2VkOyB3aXRoIHRoaXMsIGl0IGlzXHJcbnBvc3NpYmxlIHRvIGlzb2xhdGUgZGlyZWN0aW9uYWwsIGNvbmRpdGlvbmFsXHJcbjxpPmluZmx1ZW5jZSBjaGFuZ2U8L2k+IGluIHJlYWwtdGltZS4gUmVhbC10aW1lIHNvdW5kcyBpbXBvc3NpYmxlLCBob3dldmVyLCB0aGUgU0lFTkEgZG9jdW1lbnRhdGlvblxyXG48c3VwIGlkPVwiOW9uZVwiPjI8L3N1cD4gZGVzY3JpYmVzIGl0cyBwcm9ncmFtIGFsZ29yaXRobSB0byB0aGUgc3RhdGlzdGljYWwgYW5hbHlzaXMgb2YgbmV0d29yayBkYXRhLCB3aXRoIHRoZSBmb2N1cyBvbiBzb2NpYWwgbmV0d29ya3MuPC9wPlxyXG5cclxuPHA+QW4gZWFzeSBleGFtcGxlIHRvIGdyYXNwIHRoaXMgaXMgdGhlIGNvbmNlcHQgb2Ygd2hldGhlciBhIHBlcnNvblxyXG48aT5zZWxmLXNlbGVjdHMgPC9pPihlLmcuLCBkdWUgdG8gc3ViY29uc2Npb3VzIGxlYW5pbmdzKSBpbnRvIGEgZ3JvdXAgYW5kIHRodXMgbWF0Y2hlcyB0byBmcnVpdGlvbiB0aGUgZ3JvdXAmIzM5O3NcclxuYmVoYXZpb3Igd2l0aCBsaXR0bGUgZ3JvdXAgaW5mbHVlbmNlPyBPciBkb2VzIHRoaXMgc2FtZSBwZXJzb24gam9pbiBhIGdyb3VwIGFuZCBlbXVsYXRlcyB0aGUgZ3JvdXAmIzM5O3MgYmVoYXZpb3IsXHJcbmJ5IHRoZSBncm91cCYjMzk7cyBpbmZsdWVuY2Ugb3ZlciB0aW1lLiBTb2Npb2xvZ2ljYWwgbmV0d29yayBhbmFseXNpcywgdXNpbmcgU25qZGVyJiMzOTtzIFNJRU5BIHNvZnR3YXJlLCBhY2hpZXZlc1xyXG50aGUgaW1wb3NzaWJsZSB3aXRoIHRoZSBjbG9zZWQsIGRpcmVjdGVkIGdyYXBoIG5ldHdvcmtzIHRoYXQgY2hhcmFjdGVyaXplIGJsb2NrY2hhaW4gdGVjaG5vbG9neS4gVGhlIG5ldHdvcmsgZ3JhcGhcclxuY2FuIGJlIGhlcmUgdW5kZXJzdG9vZCBhcyBlbnRpcmUgKGNvbXBsZXRlKSBuZXR3b3JrcyAoaS5lLCB0aGUgYmxvY2tjaGFpbiBpbiBpdHMgZW50aXJldHkgd2l0aG91dCBoYXJkIGZvcmtzKSwgbm90XHJcbmFzIHBlcnNvbmFsIChlZ29jZW50ZXJlZCkgbmV0d29ya3M6IFVzaW5nIHRoaXMgU0lFTkEgbW9kZWwgYWxsb3dzIGZvciB0aGUgbmVjZXNzYXJ5IGFzc3VtcHRpb25zIHRoYXQgYSBzZXQgb2Ygbm9kZXNcclxuKHNvY2lhbCBhY3RvcnMpIGlzIGdpdmVuLCBhbmQgYWxsIHRpZXMgKGxpbmtzKSBiZXR3ZWVuIHRoZXNlIG5vZGVzIGFyZSBrbm93biAtIGV4Y2VwdCBwZXJoYXBzIGZvciBhIG1vZGVyYXRlIGFtb3VudFxyXG5vZiBtaXNzaW5nIGRhdGE8L3A+XHJcblxyXG48cD5JZiwgYW5kIG9ubHkgaWYsIHRoaXMgbGV2ZWwgb2YgYW5hbHlzaXMgbWF5IGJlIGFjaGlldmVkLCB0aGUgYmxvY2tjaGFpbiBkZXZlbG9wbWVudCBtYXkgZm9sbG93IGEgbGluZWFyLCBkaXJlY3RlZFxyXG5wYXRoIG9mIG1hdHVyaXR5IHdpdGggc29jaWFsIGFuZCB3b3JsZCBuZWVkcy4gVW50aWwgdGhhdCB0aW1lLCB0aGF0IFNvY2lvbG9neSBOZXR3b3JrIFRoZW9yaXN0cyBhcmUgY2FsbGVkIHVwb24sXHJcbmJsb2NrY2hhaW4gZGV2ZWxvcGVycyB3aWxsIGNvbnRpbnVlIHRvIGJhdCB0aGVpciBhcm1zIGluIHRoZSBkYXJrLCBzdHVtYmxpbmcgb3ZlciBhZ2FpbiB0aGUgc2FtZSBidWdzLiBTYWRseSwgdGhpc1xyXG5zZW1pLW9wYXF1ZSBmdXR1cmUgaW1wbGljYXRlcyB0aGUgc2FtZSBmYXRlIGFzIHRob3NlIHRoYXQgYXR0ZW1wdCB0byB1c2UgYmxvY2tjaGFpbiBmb3IgdGhlaXIgY3VycmVuY3ksIGNvbnRyYWN0LFxyXG5hbmQgb3RoZXIgc29jaWV0YWwgbmVlZHMtLWluIHRoaXMgY2FzZSwgdGhlIGJsaW5kIHdpbGwgaW5kZWVkIGxlYWQgdGhlIGJsaW5kLjwvcD5cclxuXHJcbjxwIGNsYXNzPVwiZm9vdG5vdGVzXCI+MS5cclxuPGEgaHJlZj1cImh0dHA6Ly93d3cuam91cm5hbHMudWNoaWNhZ28uZWR1L2RvaS9hYnMvMTAuMTA4Ni8yMjY1NTBcIiBpZD1cIjlvbmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj4gaHR0cDovL3d3dy5qb3VybmFscy51Y2hpY2Fnby5lZHUvZG9pL2Ficy8xMC4xMDg2LzIyNjU1MDwvYT5cclxuPGJyIC8+XHJcbjwvcD5cclxuPHA+XHJcbjIuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5zdGF0cy5veC5hYy51ay9+c25pamRlcnMvc2llbmEvXCIgaWQ9XCI5b25lXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IGh0dHBzOi8vd3d3LnN0YXRzLm94LmFjLnVrL35zbmlqZGVycy9zaWVuYS88L2E+XHJcbjwvcD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMTFcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjdG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDExLCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkhvdyBDYW4gV2UgQmVzdCBNb2R1bGFyaXplIG91ciBBcHAgRGVzaWducyBpbiBPcmRlciB0byBBY2hpZXZlIHRoZSBNdWNoIFZhdW50ZWQgJnF1b3Q7U2VwYXJhdGlvbiBvZiBDb25jZXJucyZxdW90Oz88L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlRoZXJlIHdhcyBvbmNlIGEgdGltZSBmb3IgQXBwIERldmVsb3BlcnMgdGhhdCBvdXIgaGFiaXRzIGZvbGxvd2VkIG91ciBpbm5lci1waGlsb3NvcGhlcnMtLWFzIGFuIEVzdGVlbWVkIE9yZGVyIG9mXHJcbkNvZGVycy0td2UgaGVsZCBvdXJzZWx2ZXMgaW4gdGhlIGhpZ2hlc3QgcmVnYXJkIHRvIHNlcGFyYXRlIGZvcm0gZnJvbSBmdW5jdGlvbiwgYW5kIHN0eWxlIGZyb20gc3RydWN0dXJhbCBkZXNpZ24uXHJcbkhlbmNlLCBpbiB0aGUgZWFybHkgMjAwMCYjMzk7cywgYSB0cmktcGFydGl0ZSwgc2Vuc2libGUgd29ybGQgZ3VpZGVkIGV2ZXJ5IHdlYiBjb2RlciB0byBhYmlkZSBieSBUaGUgc2NhZmZvbGRpbmdcclxub2YgSFRNTCwgZnVuY3Rpb25hbGl0eSBvZiBKYXZhU2NyaXB0LCBhbmQgc3R5bGluZyBvZiBDU1MuIEEgZGVjYWRlIGxhdGVyLCB3ZSBtdXN0IHRocm93IG91dCB0aGlzIGFudGlxdWF0ZWQgZGl2aXNpb25cclxub2YgbGFib3Igd2l0aGluIHdlYiBjb2RpbmcuPC9wPlxyXG5cclxuPHA+TGlicmFyeSBtb2R1bGFyaXphdGlvbiwgKHRoaW5rIEpRdWVyeSwgSlNYLCBCb290c3RyYXAsIGV0Yy4pIHdpdGhpbiBKYXZhc2NyaXB0IEVTMTYgcmV2ZWFscyB0aGF0IG1vZHVsZXMgYW5kIGNvbXBvbmVudHNcclxuTXVzdCBob2xkIHRvZ2V0aGVyIENTUy9IVE1ML0pTLCBwYXJ0IGJ5IHBhcnQuIFNvLCBpZiBhIGRlY2FkZSBhZ28gdGhyZWUgdGVhbXMgaGFuZGxlZCBodG1sLCBqcywgY3NzLCBpdCBpcyBub3cgcmVxdWlzaXRlXHJcbnRvIGRpdmlkZSB1cCAzIHRlYW1zIHRvIDMgY29tcG9uZW50cyAoYSB0ZWFtIGZvciB0aGUgY2Fyb3VzZWwgd2lkZ2V0LCBhIHRlYW0gZm9yIHRoZSBuYXZpZ2F0aW9uIHdpZGdldHMsIGFuZFxyXG48aT5cclxuZWFjaDwvaT4gb2YgdGhlc2UgY29tcG9uZW50IHRlYW1zXHJcbjxzdHJvbmc+bXVzdDwvc3Ryb25nPiBiZSBtYWludGFpbmVkIHRvZ2V0aGVyLCBub3Qgc2VwYXJhdGVseSwgdGhlIG1vZHVsZSYjMzk7cyByZXF1aXJlZCBodG1sLCBqcywgY3NzLjwvcD5cclxuXHJcbjxwPlRoaXMgbWVhbnMgdGhhdCB0aGUgbmV3IERpdmlzaW9uIG9mIExhYm91ciBjYW4gbm8gbG9uZ2VyIGZvbGxvdyBwYXN0IHBhdHRlcm5zIGZyb20gNSB5ZWFycyBhZ28uIE90aGVyd2lzZSwgYW55IGFuZFxyXG5hbGwgY29kaW5nIHdpbGwgbmVjZXNzYXJpbHkgYmVnaW4gdG8gJiMzOTtyZWludmVudCB0aGUgd2hlZWwuJiMzOTsgVGhpcyBpcyBiZWNhdXNlIGFueSBtb2R1bGUsIGFueSBsaWJyYXJ5IHlvdSBnb1xyXG50bywgd2lsbFxyXG48aT5hbHJlYWR5PC9pPiBoYXZlIGl0cyBIVE1MIHByZS1jb25maWd1cmVkLCBKUyBwcmUtY29uZmlndXJlZCwgQ1NTIHByZS1jb25maWd1cmVkLiBUaHVzLCBhdHRlbXB0cyB0byBleHRyaWNhdGUgbmV3XHJcbmNzcyBmcm9tIG9uZSBtb2R1bGUgdG8gYW5vdGhlciAob3Igd29yc2UgeWV0LCBzaGFyaW5nIGNzcyBvZiBtb2R1bGVzKSwgd2lsbCBvbmx5IGludml0ZSBldmVudHVhbCBtaXNlcnksIGFsbW9zdFxyXG5pbnN0YW50bHkgc2V0dGluZyBib29ieSB0cmFwcyBmb3IgdGhlIG5leHQgY29kZXJzIHVwb24gYXJyaXZhbC48L3A+XHJcblxyXG48cD5Tbywgd2hlcmUgaXMgdGhlIGNyZWF0aXZpdHk/IFdoZXJlIGlzIHRoZSBvcmlnaW5hbGl0eSB0aGVuPyBJdCBpcyBub3QgZ29uZS4gSXQgaGFzIGV2b2x2ZWQgdG8gYSBoaWdoZXIgbGV2ZWwgb2YgYWJzdHJhY3Rpb24sXHJcbmxlYXZpbmcgdG8gYXV0b21hdGlvbiB0aGUgYm9yaW5nIHN0dWZmLiBTbywgaWYgVmFuaWxsYSBKUyBpcyBjb25zaWRlcmVkIG1hbHByYWN0aWNlIGluIHRoZSBtb2Rlcm4gd29ybGQsIGFuZCBpZlxyXG5hZC1ob2MgSlF1ZXJ5IGlzIG1vY2tlZCBhbmQgc2NvZmZlZCBhdCBieSBSZWFjdCBjb2RlcnMsIHRoZW4gd2hlcmUgaXMgY3JlYXRpdml0eT8gSWYgeWVzdGVyZGF5JiMzOTtzIGNyYWZ0IHdhcyB0aGVcclxuaG9pc3Rpbmcgb2YgMTUgamF2YXNjcmlwdCBmdW5jdGlvbnMgb24gZWFjaCBwYWdlLCB0aGUgTmV3IEFydCBvZiBtb2R1bGFyIGNvZGluZyBpcyBha2luIHRvIGEgZ2FtZSBvZiBUZXRyaXMuIFBhcnRcclxuYnkgcGFydCwgbW9kdWxlIGJ5IG1vZHVsZSwgdGhlIG1vZGVybiBjb2RlciBvcGVuLXNvdXJjZSB3aW5kb3ctYnJvd3NlcyBhbmQgd2luZG93LXNob3BzOyBnb2VzIGhvbWUsIGFuZCBjdXRzIGFuZFxyXG5wYXN0ZXMsIGFuZCBmb2xkcyBhbmQgY2xpcHMsIHRoZW4gYXNzZW1ibGVzIGFuZCBoYW5ncyB0byBkcnkuIERvIFB5dGhvbiBwcm9ncmFtbWVycyByZXdyaXRlIGVhY2ggcGFydGljdWxhciBtb2R1bGVcclxuZGVmaW5pdGlvbj8gVGhhdCYjMzk7cyBhYnN1cmQuIEVxdWFsbHkgYWJzdXJkIGlzIHRoZSBqYXZhc2NyaXB0IHByb2dyYW1tZXIgdGhhdCByZXdyaXRlcyBmcm9tIHNjcmF0Y2ggdGhlaXIgbW9kdWxlcy48L3A+XHJcblxyXG48cD5UaGUgZXN0ZWVtZWQgT3JkZXIgb2YgSmF2YVNjcmlwdCBDb2RlcnMgbXVzdCB3YWtlIHVwLCBhbmQgcmVnYWluIGl0cyB3b3JrLWxvYWQgYmFsYW5jZSBpbiB0aGlzIG5ldyBhZ2UtLWFuIGFnZSB0aGF0XHJcbmVhY2ggeWVhciBzaW5jZSAyMDE0LCB0aGUgSmF2YVNjcmlwdCBsYW5ndWFnZSBpcyByZXdyaXR0ZW4sIGVhY2ggeWVhciBub3csIGluIGJvdGggc3ludGFjdGljIHN1Z2FyIGFuZCBhbHNvIGZ1bmRhbWVudGFsXHJcbnN0cnVjdHVyZS0tZXNwZWNpYWxseSB0aGUgaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcgb2YgbW9kdWxlcy4gVGhlcmVmb3JlLCBwaGlsb3NvcGhpY2FsIEhvbm9yIGJlaG9vdmVzIGVhY2ggb2YgdXNcclxudG8gYSBoaWdoZXIgY29tcGxleGl0eSwgYW5kIGEgbmV3IGNvbW1pdG1lbnQgdG8sIHRoZSAmcXVvdDtTZXBhcmF0aW9uIG9mIENvbmNlcm5zLiZxdW90OyBXZSBjYW4gYWxsb3cgb3Vyc2VsdmVzXHJcbmEgYnJlYWssIHRoYW5rZnVsIGZvciBQcm9ncmVzcywgYSBwcm9ncmVzcyBieSB3aGljaCB3ZSBtdXN0XHJcbjxpPlN0YW5kIG9uIHRoZSBTaG91bGRlcnMgb2YgR2lhbnRzPC9pPiwgYW5kIENvZGUtQ3JlYXRlITwvcD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMTJcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjdG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDEyLCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPk1hcmsgWnVja2VyYmVyZyYjMzk7cyBJbm5vY2VuY2U8L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkZhY2Vib29rIFNjYW5kYWxzXHJcbjxzdXA+MTwvc3VwPiBvZiByZWNlbnQgbW9udGhzIGhhdmUgZGVtb3JhbGl6ZWQgdGhlIGxlYWRlcnNoaXAgZm9yIGEgcm9sZSBvZiBtaXNpbmZvcm1hdGlvbiBpbiB0aGUgVGVjaCBBZ2UsIGhvd2V2ZXIgSVxyXG5jaGFyZ2UgTWFyayBadWNrZXJiZXJnJiMzOTtzIGlubm9jZW5jZVxyXG48aT5ub3Q8L2k+IGJlY2F1c2UgYWxsIG9mIHVzLCBhcyBhIHNvY2lldHksIHdlcmUgZXF1YWxseSB3YXJuZWQuIFJhdGhlciwgYXJiaXRyYXJ5IG1hdGhlbWF0aWNhbCBmb3JjZXMgY3JlYXRlZCBhYm5vcm1hbCxcclxubmV2ZXItYmVmb3JlLXNlZW4gbmV0d29yayBzdHJ1Y3R1cmFsIGRlbnNpdHkgYW5kIHN5bW1ldHJ5IHBhdHRlcm5zLiBUZWNobm9sb2dpY2FsIHNoaWZ0cyB3ZXJlIHNvIGVmZmljaWVudCBhdCBtdWx0aXBseWluZ1xyXG5hbmQgZXhhY2VyYmF0aW5nIG1pc2luZm9ybWF0aW9uIGJlY2F1c2UgYSBjdXJpb3VzIHNvY2lvbG9naWNhbCBuZXR3b3JrIHBoZW5vbWVub24gcmVuZGVyZWQgcGFydHMgb2Ygb3VyIGRhaWx5IHNvY2lhbFxyXG5sZWFybmluZyBhbmQgYWNjdWx0dXJhdGluZyBwcm9jZXNzIHRvIG5ldHdvcmsgZm9yY2VzIG91dCBvZiBvdXIgb3duIGNvbnRyb2wuPC9wPlxyXG5cclxuPHA+QSBKYW51YXJ5IDIwMTYgQW1lcmljYW4gU29jaW9sb2d5IEFzc29jaWF0aW9uIE5ld3NsZXR0ZXIgRWRpdG9yaWFsXHJcbjxzdXA+IDI8L3N1cD4gZnJvbSBTYWxseSBULiBIaWxsc21hbiwgaW4gd2hpY2ggc2hlIGV4cGxhaW5lZCBob3cgdGhlIHNvY2lhbCBtZWNoYW5pc21zIG9mIG91ciBvd24gbWlzaW5mb3JtYXRpb24gd2VyZVxyXG5ub3QgZW50aXJlbHkgd2l0aGluIG91ciBvd24gY29udHJvbCB0byByZXNpc3QuIEluIGZhY3QsIHRoZSBhcmJpdHJhcnkgKG9mdGVuIHJhbmRvbSkgc29jaWFsIHN0cnVjdHVyYWwgY2hhbmdlcyBmcm9tXHJcbmhpZ2hlciBzb2NpYWwtbWVkaWEgaG91cnMsIGNyZWF0ZSBhbiBhcmJpdHJhcnkgc29jaWFsIG5ldHdvcmsgc3RydWN0dXJlIHdob3NlIGxpbmtzIChpbiB0aGVpciBjb250ZW50IGFuZCBpbmZsdWVuY2UpXHJcbmJlZ2luIHRvIGRvbWluYXRlIG92ZXIgbm9kZXMgKGVhY2ggb2YgdXMpLiBJbiBvdGhlciB3b3JkcywgdGhlIHN3YXkgb2YgdHJlbmRzIGFuZCBvcGluaW9uYXRlZCBjcml0aWNhbCB0aG91Z2h0IGJlY29tZXNcclxuZG9taW5hdGVkIGJ5IHRoZSByZWxhdGlvbnNoaXBzLCBlLmcuLCB0aGUgJnF1b3Q7bGlrZXMmcXVvdDsgYW5kICZxdW90O3NoYXJlcyZxdW90OywgbGVhZGluZyB0byBhIHN0YXRpc3RpY2FsbHkgbmF0dXJhbFxyXG5wcm9wZW5zaXR5IHRvd2FyZCBob21vZ2VuZWl0eS0tYS5rLmEuIGdyb3VwLXRoaW5rLiBUaGUgbWVjaGFuaXNtIGlzIGFraW4gdG8gcGVhY2VmdWxseSBzd2ltbWluZyBjbG9zZSBhbmQgcGFyYWxsZWxcclxudG8gdGhlIGNvYXN0bGluZSwgYW5kIChkdWUgdG8gcmFuZG9tIGNvYXN0YWwgZmxvb3Igc3RydWN0dXJlKSwgYSByaXAtdGlkZSBzdWRkZW5seSBzaGlwcyB5b3UgZmFyIG91dCB0byBzZWEtLWEgZmF0YWxcclxuYW5kIHRyYWdpYyBmYXRlIHJlbmRlcmluZyBleHBlcmllbmNlZCBzd2ltbWVycyBvdXQgb2YgdGhlaXIgb3duIGNvbnRyb2wuIFNhbWUgcHJpbmNpcGxlIHdpdGggYW4gYXJiaXRyYXJ5XHJcbjxpPnVuZGVybHlpbmcgYW5kIHVuc2VlbjwvaT4gbmV0d29yayBzdHJ1Y3R1cmUuPC9wPlxyXG5cclxuPHA+T3VyIHNvY2lhbCBuZXR3b3JrIHN0cnVjdHVyZXMgYWx3YXlzIGFyZSBwcm9uZSB0byBjb250aW51YWwgc2hpZnQsIGFuZCBzbyB0aGUgdXN1YWwgJnF1b3Q7aW50ZXJydXB0aW9ucyZxdW90OyB0aGF0XHJcbnByZXZpb3VzbHkgc3RvcHBlZCB0aGlzIGlud2FyZCBzaGlmdCBzb29uIGJlZ2FuIHRvIGRpc2FwcGVhci4gSGlsbHNtYW4gZXhwbGFpbnM6PC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPkxpZXMsIGhhbGYtdHJ1dGhzLCBhbmQgbWlzaW5mb3JtYXRpb24gc3ByZWFkIHNvIHJhcGlkbHkgYWNyb3NzIHRoZSBwdWJsaWMgdGhyb3VnaCBkaWdpdGFsIGNvbW11bmljYXRpb24gdGhhdCB0aGVcclxudGltZXNwYW4gZm9yIHRob3VnaHRmdWwsIGVmZmVjdGl2ZSBjb3JyZWN0aW9uIG9yIHJlYnV0dGFsIGlzIGluZmluaXRlc2ltYWwuIEJlY2F1c2Ugb2YgY29uZmlybWF0aW9uIEJpYXMsIG1pc2luZm9ybWF0aW9uXHJcbmFuZCBvdXRyaWdodCBsaWVzIHF1aWNrbHkgc3RyZW5ndGhlbiBwcmVjb25jZWl2ZWQgdHJ1dGhzIG9yIHByZS1oZWxkIGJlbGllZnMgdGhhdCBhcmUgYWxyZWFkeSBoYXJkIHRvIGNoYW5nZS48L3A+XHJcblxyXG48cD5UaGVyZWZvcmUsIGV2ZW4gdGhvdWdoIHdlIGFsbCBoYXZlIGJlZW4gcG9pbnRlZGx5IHdhcm5lZCxcclxuPGk+IG5vbmUgb2YgdXM8L2k+IHdpdGhvdXQgYWR2YW5jZWQgc29jaW9sb2dpY2FsIGFuYWx5c2lzIHNraWxscyBjb3VsZCB1bmRlcnN0YW5kIHRoYXQgYSBjdXJpb3VzIG5ldHdvcmsgcGhlbm9tb25lbm9uLS11bHRpbWF0ZWx5XHJcbmRyaXZlbiBieSBzb21lIGFyYml0cmFyeSBtYXRoZW1hdGljYWwgY2FsY3VsYXRpb24gaW52b2x2aW5nIHNpemUsIGRlbnNpdHksIHN5bW1ldHJ5LCBjb25kaXRpb25hbCBpbmZsdWVuY2VzLCBhbmRcclxudGhlIHN0cmVuZ3RoIG9mIHRpZXMgb3V0d2VpZ2hpbmcgbmV0d29yayBub2Rlcy4gRm9yIHRoZSByZWFzb25zIG9mIHRoZXNlIGZhY3RvcnMsIG91ciBzb2NpYWwgaW5jbGluYXRpb25zIHdlcmVcclxuPGk+b3V0IG9mIG91ciBjb250cm9sPC9pPiAtLSBubywgYnV0IHJlYWxseSwgdGhpcyB0aW1lIHRoZXkgd2VyZSE8L3A+XHJcblxyXG48cD5BbmQgc28sIHdlIGNhbiBsZWFybiBmcm9tIFNvY2lvbG9neSB3aGF0IHN0ZXBzIHRvIHRha2UgaW4gb3JkZXIgdG8gY291bnRlcmFjdCByYW5kb20sIGJ1dCByaXNreSwgbmV0d29yayBwaGVub21lbmFcclxuLS0gYmVjYXVzZSBub2JvZHkgbGlrZXMgdG8gZ28gZm9yIGEgc3dpbSBhdCB0aGUgYmVhY2gsIGFuZCB1bndpdHRpbmdseSBnZXQgc2hpcHBlZCBvdXQgdG8gc2VhITwvcD5cclxuXHJcbjxwIGNsYXNzPVwiZm9vdG5vdGVzXCI+MS4gV2lyZWQgTWFnYXppbmVcclxuPGk+SW5zaWRlIHRoZSBUd28gWWVhcnMgdGhhdCBTaG9vayBGYWNlYm9vay0tYW5kIHRoZSBXb3JsZDwvaT4gKEZlYnJ1YXJ5LCAyMDE4KVxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L2luc2lkZS1mYWNlYm9vay1tYXJrLXp1Y2tlcmJlcmctMi15ZWFycy1vZi1oZWxsXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj4gV2lyZWQgTWFnYXppbmUsIDwvYT5cclxuPGJyIC8+XHJcbjxiciAvPiAyLkFTQVxyXG48aT5Gb290bm90ZXM8L2k+LiAoSmFudWFyeSwgMjAxNilcclxuPGEgaHJlZj1cImh0dHA6Ly93d3cuYXNhbmV0Lm9yZy9mb290bm90ZXMvamFuMTYvaW5kZXguaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPiB3d3cuYXNhbmV0Lm9yZy9mb290bm90ZXMvamFuMTYvPC9hPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTEzXCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI3RvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+U29jaW9sb2d5IFRvbW9ycm93ITwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMTMsIDIwMTg8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+VGhlIE1vZGVybiBEb2N0b3JzJiMzOTsgVXBkYXRlZCBQcmVwYXJhdGlvbiBmb3IgdGhlIE9hdGhcclxuPHN1cD4xPC9zdXA+IG9mIEhpcHBvY3JhdGVzOlxyXG48YnIgLz4gT24gdGhlIDIwMTUgU29jaWFsIFNjaWVuY2VzIE1vZGlmaWNhdGlvbiB0byB0aGUgQUFNQyBNZWRpY2FsIENvbGxlZ2UgQWRtaXNzaW9ucyBUZXN0IChNQ0FUKTwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+T3RoZXIgdGhhbiBjb2xsZWdlIHByZS1tZWQgc3R1ZGVudHMsIGZldyBrbm93IHRoZSBNQ0FUIGV4YW0tLXRoZSBnYXRla2VlcGVyIG9mIFUuUy4gJmFtcDsgQ2FuYWRpYW4gTWVkaWNhbCBTY2hvb2xzLS11bmRlcndlbnRcclxuYSBtYWpvciBtb2RpZmljYXRpb24gaW4gMjAxNS5cclxuPHN1cD4yPC9zdXA+IE11Y2ggZGVlcGVyIHRoYW4gQmlvbG9naWNhbCBhbmQgVGVjaG5vbG9naWNhbCB1cGRhdGVzLCBtYWpvciBzZWN0aW9ucyB3ZXJlIGFkZGVkIGFuZC9vciBleHBhbmRlZCBpbmNsdWRpbmdcclxudGhlIFNvY2lhbCwgUHlzY2hvbG9naWNhbCBhbmQgQmlvbG9naWNhbCBmb3VuZGF0aW9ucyBvZlxyXG48aT5iZWhhdmlvcjwvaT4uIE5hbWVkIHRoZVxyXG48aT5IZWFsdGggU3lzdGVtcyBTY2llbmNlPC9pPlxyXG48c3VwPjM8L3N1cD4sIHRoZSBBbWVyaWNhbiBNZWRpY2FsIEFzc29jaWF0aW9uJiMzOTtzIG1vZGVybiwgaG9saXN0aWMgYXBwcm9hY2ggYXJ0aWN1bGF0ZXMgb3V0Y29tZXMtYmFzZWQgbWVhc3VyZXMgZm9yXHJcbmhlYWx0aHkgbGl2aW5nIGFuZCBkaXNlYXNlIHByZXZlbnRpb24gZWZmb3J0cy4gWW91IGNvdWxkIHNheSB0aGUgQU1BIGlzIGluZGVlZCxcclxuPGk+d29rZTwvaT4uPC9wPlxyXG5cclxuPHA+QnV0IHJlYWxseSwgd2hhdCYjMzk7cyB0aGUgZGlmZmVyZW5jZSBhbmQgd2h5IHdvdWxkIHdlIGNhcmU/IEFuZCwgd2hvIGRvZXNuJiMzOTt0IGtub3cgdGhhdCBhbiBhcHBsZS1hLWRheSBrZWVwc1xyXG50aGUgZG9jdG9yIGF3YXk/IERyLiBKZWZmcmV5IEJvcmthbiwgTUQsIFBIRCBvZiBCcm93biBVbml2ZXJzaXR5JiMzOTtzIFdhcnJlbiBBbHBlcnQgTWVkaWNhbCBTY2hvb2wsIGV4cGxhaW5zIHRoZVxyXG5ldmlkZW50IHJvbGUgb2YgYWxsIHRob3NlIHVubm90aWNlZCBzb2NpYWwgaW50ZXJhY3Rpb25zIGludm9sdmVkIGluIG9idGFpbmluZyBhbmQgY29uc3VtaW5nIHRoYXQgYXBwbGUuIEZ1cnRoZXIsXHJcbnRoZSBzcGF0aWFsIGFuZCBlY29ub21pY1xyXG48aT5hdmFpbGFiaWxpdHk8L2k+IG9mIHRoYXQgYXBwbGUgYWxzbyBwbGF5cyBhIHJvbGUgaW4ga2VlcGluZyB0aGUgZG9jdG9yIGF3YXkuIEJvcmthbiBleHBsYWluczo8L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+SXQmIzM5O3MgdGltZSBmb3IgdXMgdG8gdGFrZSBhIGxlYXAgZm9yd2FyZCBpbiBlZHVjYXRpbmcgcGh5c2ljaWFucyBmb3IgdGhlIGhlYWx0aCBjYXJlIGRlbGl2ZXJ5IG1vZGVscyBvZiB0aGUgZnV0dXJlJm1kYXNoO3Rob3NlXHJcbnRoYXQgYWltIHRvIGltcHJvdmUgbm90IGp1c3QgdGhlIGhlYWx0aCBvZiB0aGUgaW5kaXZpZHVhbCBwYXRpZW50IGFuZCB0aGVpciBmYW1pbHksIGJ1dCBhbHNvIHRoZSBjb21tdW5pdHkgYW5kIHRoZVxyXG5wb3B1bGF0aW9uLlxyXG48c3VwPjQ8L3N1cD5cclxuPC9wPlxyXG5cclxuPHA+V2hhdCwgdGhlbiwgc3BlY2lmaWNhbGx5LCBhcmUgdGhlIG1lY2hhbmlzbXMgdGhhdCBhIGNvbW11bml0eSBuZXR3b3JrJiMzOTtzIGFnZ3JlZ2F0ZWQgaGVhbHRoIG1heSBiZSBpbmV4dHJpY2FibHlcclxudGllZCB1cCB3aXRoXHJcbjxpPm91ciBvd248L2k+IGluZGl2aWR1YWwgaGVhbHRoPyBJbiBzaG9ydCwgdGhleSBhcmUgdGhlIHNoYXJpbmcgb2YgaGVhbHRoLXByb21vdGluZyByZXNvdXJjZXMsIHRpbWVseSBhc3Npc3RhbmNlLFxyXG5oZWFsdGgtcHJvbW90aW5nIGluZm9ybWF0aW9uIGNoYW5uZWxzIC0tIGFsbCB0aGlzLCBhbW9uZyB0aGUgY291bnRsZXNzIHBlcmtzIG9mIGEgaGVhbHRoeSBzb2NpYWwgY2lyY2xlITwvcD5cclxuXHJcbjxwIGNsYXNzPVwiY2l0YXRpb25zXCI+MS5cclxuPGEgaHJlZj1cImh0dHA6Ly93d3cuZ3JlZWttZWRpY2luZS5uZXQvd2hvc193aG8vVGhlX0hpcHBvY3JhdGljX09hdGguaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBPYXRoIG9mIEhpcHBvY3JhdGVzPC9hPlxyXG48YnIgLz4gMi5cclxuPGEgaHJlZj1cImh0dHBzOi8vc3R1ZGVudHMtcmVzaWRlbnRzLmFhbWMub3JnL2FwcGx5aW5nLW1lZGljYWwtc2Nob29sL2FydGljbGUvY2hhbmdpbmctbWNhdC1leGFtL1wiIHRhcmdldD1cIl9ibGFua1wiPlRoZSAyMDE1IEFBTUEgQ2hhbmdlcyB0byB0aGUgTWVkaWNhbCBDb2xsZWdlIEFkbWlzc2lvbnMgVGVzdDwvYT5cclxuPGJyIC8+IDMuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5hbWEtYXNzbi5vcmcvZWR1Y2F0aW9uL3RlYWNoaW5nLW5ldy1jb250ZW50LWhlYWx0aC1zeXN0ZW1zLXNjaWVuY2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5BbWVyaWNhbiBNZWRpY2FsIEFzc29jaWF0aW9uJiMzOTtzXHJcbiAgPGk+VGVhY2hpbmcgTmV3IENvbnRlbnQgSGVhbHRoIFN5c3RlbXMgU2NpZW5jZTwvaT5cclxuPC9hPlxyXG48YnIgLz4gNC5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LmFtYS1hc3NuLm9yZy9lZHVjYXRpb24vdGVhY2hpbmctbmV3LWNvbnRlbnQtaGVhbHRoLXN5c3RlbXMtc2NpZW5jZVwiIHRhcmdldD1cIl9ibGFua1wiPmliaWQuPC9hPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTE0XCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI3RvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+XHJcbjxzPldlYiBEZXYgQWZmYWlyczwvcz4gU29jaW9sb2d5IFRvbW9ycm93ITwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMTQsIDIwMTg8L2g2PlxyXG5cclxuPHAgc3R5bGU9XCJjb2xvcjpncmVlbjtcIj5cclxuPGk+RHVlIHRvIHRoZSBUcmFnaWMgRXZlbnRzIGluIEZsb3JpZGEsIFRlY2ggdG8gdGhlIFJlc2N1ZSBibG9nIFJlc2NoZWR1bGVkIHRvIEZlYnJ1YXJ5IDE2dGggLi4uXTwvaT5cclxuPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+XHJcbjxzPlRlY2ggdG8gdGhlIFJlc2N1ZTogU2Vjb25kYXJ5IGhlYWx0aCBlZmZlY3RzIG9mIHRoZSBGaXRiaXQgdG93YXJkIGhlYWx0aC1pbmZvcm1hdGlvbiBzaGFyaW5nIGNoYW5uZWxzIHdpdGhpbiBhIGNvbW11bml0eS48L3M+XHJcbjwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCIgc3R5bGU9XCJjb2xvcjpncmVlbjtcIj5HaXZlbiB0aGF0IGEgY29tbXVuaXR5IG5ldHdvcmsmIzM5O3MgYWdncmVnYXRlZCBoZWFsdGggaXMgaW5leHRyaWNhYmx5LCBhbmQgc3ltbWV0cmljYWxseSwgdGllZCB1cCB3aXRoXHJcbjxpPm91ciBvd248L2k+IGluZGl2aWR1YWwgaGVhbHRoLCBhcHAtZGV2ZWxvcGVycyBtYXkgZGVzaWduIGFjdGl2aXR5LSBhbmQgY29tbXVuaWNhdGlvbi1iYXNlZCBhcHBzIG1vcmUgcmVzcG9uc2libHksXHJcbmFuZCBpbiB0b3VjaCB3aXRoIG1vZGVybiBoZWFsdGhjYXJlIHJlY29tbWVuZGF0aW9ucy4gQWZ0ZXIgYWxsLCBpZiB0aGUgU2FpbnRseSBNYXJrIFp1Y2tlcmJlcmcmIzM5O3MgY29tbXVuaWNhdGlvbi1cclxuYW5kIGFjdGl2aXR5LWJhc2VkIGFwcCBpbmFkdmVydGFudGx5IGxlZCB0byBub3ZlbCwgYW5kIGRlZXBseSBjb25zZXF1ZW50aWFsLCBlZmZlY3RzLCB0aGVuIC4uLjwvcD5cclxuPHNwYW4gY2xhc3M9XCJhbGVydFwiPiogR2l2ZW4gdGhlIFRyYWdpYyBFdmVudHMgaW4gdGhlIFNjaG9vbCBTaG9vdGluZyBpbiBGbG9yaWRhLCBJIGZlbHQgYSB0b3BpYyBvZiBtb3JlIGdyYXZpdHkgd2FzIGluIG9yZGVyIC4uLiA6KCA8L3NwYW4+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDE0LCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkEgTmV3IEtlcm5lbCwgYW5kIHRoZSBNYW5pZmVzdGF0aW9uIG9mIGEgVHdvLUh1bmRyZWQgWWVhciBQcm9ibGVtIG5hbWVkXHJcbjxpPkFub21pZTwvaT5cclxuPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5HaXZlbiB0aGUgdHJhZ2ljIGV2ZW50cyBhdCBhIEZsb3JpZGEgc2Nob29sIG92ZXIgVmFsZW50aW5lJiMzOTtzIERheSwgMjAxOCwgd2hvIGNhbiB3cml0ZSBhYm91dCBGaXRiaXRzPyBTbywgdGhvdWdodHNcclxuYW5kIHN5bXBhdGh5IGZvciB0aG9zZSBzdHVkZW50cyB0b2RheSB0aGF0IGVuZHVyZWQgdGhpcyBob3Jyb3IuIDE5IHllYXJzIGFmdGVyIHRoZSBmaXJzdC1vZi1pdHMta2luZCBzY2hvb2wgc2hvb3RpbmcsXHJcbndlIGFzIGFuIEFtZXJpY2FuIHNvY2lldHkgaGF2ZSBub3QgYmVjb21lICYjMzk7bnVtYiYjMzk7IHRvIHRoZXNlIGV2ZW50cy4gSXQgaHVydHMgYXMgbXVjaCBhcyBpdCBkaWQgaW4gMTk5OS48L3A+XHJcblxyXG48cD5EYXJuIHRoYXQgaW5ub2N1b3VzIFNwcmluZyBkYXkgaW4gMTk5OSwgd2hlbiB3ZSBoZWFyZCB0aGUgbW9zdCBhYnN1cmQgbmV3cy0tIHN0dWRlbnRzIGF0dGFja2VkIHRoZWlyIG93biBjb2xsZWFndWVzXHJcbmF0IENvbG9tYmluZT8gSW4gbXkgYmxvZyBwb3N0IGZyb20gSmFudWFyeSAxMCwgSSB3cm90ZSB0aGF0IEFtZXJpY2FuIFNvY2lvbG9neSwgYWxvbmcgd2l0aCBRdSZlYWN1dGU7YmVjLCBjYW1lIG9mXHJcbmFnZSBtdWNoIGxhdGVyIHRoYW4gRXVyb3BlYW4gU29jaW9sb2d5LiBUaGUgcGFzdCA1MCB5ZWFycyYjMzk7IHNvY2lhbCBjaGFuZ2VzIGFuZCBuZXcgcHJvYmxlbXMgYXJlIGdlbmVyYWxseSBhdHJyaWJ1dGVkXHJcbmZvciB0aGUgaW5jcmVhc2luZyBkZW1hbmQgZm9yIHNvY2lvbG9naWNhbCBleHBlcnRpc2UgYWZ0ZXIgMTk5OSwgYWZ0ZXIgYSBzaW5ndWxhciwgc2Vuc2VsZXNzIHRyYWdlZHkgb2YgYSBzY2hvb2xcclxuc2hvb3RpbmctLXRoaXMgZXZlbnQsIGxpa2UgYSBzbWFsbCBrZXJuZWwgb2Ygc29jaWV0YWwgZGVzcGVyYXRpb24gZm9yIGEgc29sdXRpb24tLWxlZCB0byBhIGZsdXJyeSBvZiBzZWxmLXByb2Zlc3NlZFxyXG5zb2Npb2xvZ2lzdHMgJmFncmF2ZTsgbGEgTWljaGFlbCBNb29yZSYjMzk7cyBDb2xvbWJpbmUsIGFuZCBvdGhlciBzb2NpYWwtcmVzcG9uc2liaWxpdHkgdGhlbWVkIHNvY2lhbCBjb25zY2lvdXNuZXNzLlxyXG5TbyBmYXIsIG9ubHkgbXV0dWFsbHkgaW5jb21wYXRpYmxlIHNvbHV0aW9ucy4gVGhlIHByb2JsZW0sIGhvd2V2ZXIsIGlzIG5vdCBuZXcsIG9ubHkgdGhlIG1hbmlmZXN0YXRpb24gb2YgaXQuPC9wPlxyXG5cclxuPHA+U3VpY2lkZSByYXRlcyBpbiAxOXRoIGNlbnR1cnkgRnJhbmNlLCBkaXNwcm9wb3J0aW9uYXRlbHkgaGlnaCwgYWxzbyBzZXJ2ZWQgYXMgYSBzeW1wdG9tYXRpYyBtYW5pZmVzdGF0aW9uIG9mIHRoZVxyXG5zYW1lIHByb2JsZW0sIGNhbGxlZFxyXG48aT5Bbm9taWUuPC9pPlxyXG48c3VwPjE8L3N1cD4gVGhlIHRlcm0sXHJcbjxpPkFub21pZTwvaT4sIGNvaW5lZCBieSBFbWlsZSBEdXJraGVpbSBpbiB0aGUgbGF0ZSAxODAwJiMzOTtzLCBjYXB0dXJlZCB0aGUgc2Vuc2Ugb2YgaW5zdGFiaWxpdHksIGN1bHR1cmFsIGFuZCBtb3JhbFxyXG5yZWxhdGl2aXNtIHRoYXQgdW5kZXJtaW5lZCBhIHNoYXJlZCBzZW5zZSBvZiBtZWFuaW5nLiBTdWljaWRlcywgd2Vlay1hZnRlci13ZWVrLCBtb250aC1hZnRlci1tb250aD8gSW4gMTg5NyBGcmFuY2UsXHJcbm5vb25lIGhhZCBldmVyIHNlZW4gaXQgYmVmb3JlLS1hdCBzdWNoIHJhdGVzLS1hbmQgcGVvcGxlIHdhbnRlZCBhbnN3ZXJzLiBBbGFzLCBhIGtlcm5lbCBvZiBzb2NpYWwgZGVzcGVyYXRpb24gbGVhZGluZ1xyXG50byBpbnF1aXJ5LjwvcD5cclxuXHJcbjxwPlBlb3BsZSB3YW50ZWQgdG8ga25vdyB3aHkgc28gbWFueSBpbiB0aGUgcG9wdWxhdGlvbiByZXNwb25kZWQgbmVnYXRpdmVseSB0byB0aGUgcmFwaWQgY2hhbmdlcywgdXJiYW5pemF0aW9uIChEcmVhZGZ1bFxyXG5mYWN0b3J5IGNvbmRpdGlvbnMgJmFncmF2ZTsgbGFcclxuPGk+VGF5bG9yaXNtJiMzOTtzPC9pPiBjYWxjdWxhdGVkIGVmZmljaWVuY3kpIG5ldyB0ZWNobm9sb2dpZXMsIGkuZS4gZWxlY3RyaWNpdHksIHJhaWxyb2Fkcywgc3RlYW0gZW5naW5lczsgdGhlc2UgY3JlYXRlZFxyXG5hbiBhcmJpdHJhcmlseSBuZXcgd29ybGQsIHZlcnkgc3VkZGVubHkuIFN1ZGRlbmx5LCBsaWtlIHRyeWluZyBmb3IgdGhlIGZpcnN0IHRpbWUgYSByb2xsZXItY29hc3Rlciwgd2hlbiBhbGwgeW91JiMzOTt2ZVxyXG5ldmVyIGtub3duIGhhcyBiZWVuIHRoZSBjYXJvdXNlbC4gU28sIHdlIHNlZSB0ZWNobm9sb2d5JiMzOTtzIHJvbGUgZm9yIHdlbGwgb3IgZm9yIGlsbCwgb3VyIGpvYiBpcyB0byB1bmRlcnN0YW5kXHJcbmhvdyB0byBkaWFsLWluIHRoZSB0ZWNoIHNwZWNzIG5lY2Vzc2FyeSB0byBrZWVwIHNvY2lldHkgc21pbGluZyBvbiB0aGlzIHJvbGxlciBjb2FzdGVyIHRocm91Z2ggYW5vdGhlciwgeWV0IG5vdFxyXG5hbHRvZ2V0aGVyIG5ldywgdGVjaG5vbG9naWNhbCB0aHJpbGwtcmlkZS48L3A+XHJcblxyXG48cD4xLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cucmVzZWFyY2hnYXRlLm5ldC9wdWJsaWNhdGlvbi8yMjgxNzM5MTFfVGhlX1NvY2lvbG9neV9vZl9TdWljaWRlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+MTg5NywgU3VpY2lkZSwgJkVhY3V0ZTttaWxlIER1cmtoZWltLjwvYT5cclxuPC9wPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJmZWIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMi0xNVwiPlxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiN0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2hcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+TXVzaW5nIEJsb2NrY2hhaW48L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDE1LCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkJsb2NrY2hhaW5zLCBCaXRjb2lucyBhbmQgVGhlIFVubmVjZXNzYXJ5IFJpc2sgb2YgU2hvcHBpbmcgYXQgVGFyZ2V0IHdpdGggYSBDcmVkaXQgQ2FyZDwvaDY+XHJcblxyXG48aDY+XHJcbjxzbWFsbCBjbGFzcz1cImphcmdvblwiPlRlY2ggYmxvY2tjaGFpbiBqYXJnb24gYWxlcnQgYWhlYWQsIHdpdGggYWxsIGVmZm9ydCBtYWRlIGZvciBjbGFyaXR5ISBJIHRyZWF0IGEgYnJvYWQgb3ZlcnZpZXcgb2YgdGhlIGV4aXN0aW5nIHRyYWplY3RvcnlcclxuICBvZiBibG9ja2NoYWluLXJlbGF0ZWQgbWljcm8tZWNvbm9taWMgYWR2YW5jZW1lbnRzLiBJIG1ha2UgYSB0ZWNobmljYWwgJmFtcDsgY29udGV4dHVhbGl6aW5nXHJcbiAgPGFiYnIgdGl0bGU9XCJ0aGlzIGxpbmsganVzdCBnb2VzIGRvd24gNSBwYXJhZ3JhcGhzIHRvIEZlYi4gMTd0aFwiPlxyXG4gICAgPGEgaHJlZj1cIiMxOC0wMi0xN1wiPiB0aHJlZS1wYXJ0IGJsb2cgc2VyaWVzIGluIG15IEZlYi4gMTctMjAgcG9zdHM8L2E+IG9uIHRoZSBtaWNyby1lY29ub21pYyBob3Jpem9uIG9mIGJsb2NrY2hhaW4gdGVjaG5vbG9naWVzLjwvYWJicj5cclxuPC9zbWFsbD5cclxuPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5IYXMgYW55b25lIGVsc2UgYmVlbiB1bmRlcndoZWxtZWQgYnkgdGhlIGxhY2sgb2YgQml0Y29pbiYjMzk7cyBkYWlseVxyXG48aT5wcmVzZW5jZTwvaT4sIGRlc3BpdGUgaXRzIGV2ZXJwcmVzZW5jZSBhdCB0aGUgZGlubmVyIHRhYmxlcyBhbmQgY2FmJmVhY3V0ZTtzIGFjcm9zcyBBbWVyaWNhLiBTdXJlLCBpdCYjMzk7cyBtb3JlXHJcbm9mIGEgJnF1b3Q7bWV0cm9wb2xpdGFuJnF1b3Q7IHBoZW5vbWVub247IGFuZCBzdXJlLCBpdCYjMzk7cyBiZWNvbWUgYW4gYWNjZXB0ZWQgZ2xvYmFsIHBsYXRmb3JtLS1hbG9uZyB3aXRoIG15cmlhZFxyXG5vdGhlciBjcnlwdG8tY3VycmVuY2llcywgYnV0IGl0JiMzOTtzIGV4Y2hhbmdlLXdvcnRoaW5lc3MgcmVtYWlucyBzaHJvd2RlZCwgYW5kIG1pc3VuZGVyc3Rvb2QgYnkgbWFueS4gQ3J5cHRvY3VycmVuY2llc1xyXG5hcmUgdXNlZnVsIGFzIGEgdmVoaWNsZSBmb3IgaW52ZXN0bWVudCwgYW5kIHllcywgdGhlcmUgYXJlIEJpdGNvaW4gbWlsbGlvbmFpcmVzIGR1ZSB0byB0aGUgY3VycmVuY3kmIzM5O3MgcmlzZSB0b1xyXG5mYW1lIHdpdGggbGFzdCB5ZWFyJiMzOTtzIGluY3JlYXNlIGluIHZhbHVlIChmcm9tICQxLDAwMCB0byB+JDIwLDAwMCkgZXRjLiwgZXRjLiBCdXQsIHNvIGZhciBpdHMgY29udHJpYnV0aW9ucyxcclxudXNlcywgZmFtZSBhcmUgb25lLXNpZGVkbHlcclxuPGk+bWFjcm8tPC9pPmVjb25vbWljLiBBIHJlY2VudCBDTkVUIGFydGljbGVcclxuPHN1cD4xPC9zdXA+LCBhbW9uZyBvdGhlcnMsIGRvY3VtZW50cyBtaW5pc2N1bGUgKGFuZCBub3QgaW1wcm92aW5nKSBwZXJjZW50YWdlIG9mXHJcbjxpPmFjdHVhbDwvaT4gdXNlIGF0IHRoZSAmcXVvdDtjYXNoLXJlZ2lzdGVycyZxdW90OyBvZiBzb2NpZXR5LjwvcD5cclxuXHJcbjxwPklzIHRoZXJlIHNvbWV0aGluZyB3cm9uZyB3aXRoIHN1Y2ggbGl0dGxlIG1pY3JvLWVjb25vbWljIHVzYWdlPyBOb3QgYXQgYWxsISBBY2NvcmRpbmcgdG8gZ2VuZXJhbCBzb2Npb2xvZ2ljYWxcclxuPGk+RWFybHkgQWRvcHRlcjwvaT4gdGhlb3J5LS1iYXNlZCBvbiBFdmVyZXR0IE0uIFJvZ2VycyYjMzk7XHJcbjxpPkRpZmZ1c2lvbiBvZiBJbm5vdmF0aW9uczwvaT5cclxuPHN1cD4yPC9zdXA+LS10aGUgdGltZWxpbmUgb2YgdGhlIElubm92YXRpb24gQWRvcHRpb24gTGlmZWN5Y2xlIGlzIGZhaXJseSBvcmRpbmFyeS4gVGhhdCBpcywgdGhlIFJvZ2VyJiMzOTtzIGJlbGwgY3VydmVcclxucmFuZ2VzIGZyb20gdGhlIGJlZ2lubmluZyBpbm5vdmF0b3JzLCB0byBlYXJseSBhZG9wdGVycywgZWFybHkgbWFqb3JpdHksIGFuZCBsYXRlIG1ham9yaXR5LiBIb3dldmVyLCB0aGUgYmxvY2tjaGFpblxyXG5hcnRpY2xlcyBhbHdheXMgbWlzcyB0aGUgcG9pbnQuIEN1cnJlbmNpZXMgYXJlIG1vcmUgb2YgYSBkaXN0cmFjdGlvbiBjb21wYXJlZCB0byB0aGUgZ2VudWluZSB1c2VmdWxuZXNzIGZvciB0aGVcclxuZXZlcnktcGVyc29uLCBpbiBldmVyeS1kYXkgYWZmYWlycywgb24gYSBnaXZlbiBkYXktLWkuZS4sIG1pY3JvLWVjb25vbWljIHVzZS48L3A+XHJcblxyXG48cD5UaGUgdHJ1ZSB2YWx1ZSwgdGhlIGtpbmQgdGhhdCBtYWtlcyBvdXIgbGl2ZXMgZWFzaWVyIG9uIGFueSBnaXZlbiBkYXksIGFuZCBmb3IgdGhlIGV2ZXJ5LXBlcnNvbiwgaXNcclxuPGk+bm90PC9pPiB0aGUgY3VycmVuY3ksIGl0IGlzIHRoZSBjb250cmFjdCwgdGhhdCBhbGxvd3MgZm9yIGluZGl2aWR1YWxpemVkLCB0YXJnZXRlZCBzaGFyaW5nIG9mIHNwZWNpZmljIGluZm9ybWF0aW9uLS13aGV0aGVyXHJcbmZpbmFuY2lhbCwgZ292ZXJubWVudGFsLCBvciBhbnkgb3RoZXIgY2VudHJhbGl6ZWQgZGF0YWJhc2UuIEFuIGV4YW1wbGUgaXMgaW4gb3JkZXIgYmVmb3JlIEkgY29udGludWUsIHNpbmNlIHdlIGNhblxyXG5hbGwgcmVsYXRlIHRvIHRoZSByaXNrIG9mIHVzaW5nIGEgY3JlZGl0IG9yIGRlYml0IGNhcmQsIHRoZSByaXNrIG1vc3Qgbm90YWJseSBjb25jZXJuaW5nIFRhcmdldCBzdG9yZSBjcmVkaXQgY2FyZFxyXG5oYWNrcyBhIGNvdXBsZSB5ZWFycyBhZ28uPC9wPlxyXG5cclxuPHA+U3VwcG9zZSBhIHBlcnNvbiBzaG9wcyBhdCAzIGRpZmZlcmVudCByZXRhaWxlcnMsIHVzaW5nIGEgZGlmZmVyZW50IGNyZWRpdCBjYXJkIGZvciBlYWNoLiBGb3IgdGhlc2UgMyB0cmFuc2FjdGlvbnMsXHJcbnRoaXMgcGVyc29uIGhhZCBvbmx5IG5lZWRlZCB0byBwcm92aWRlIHR3byBkaXNjcmV0ZSBwaWVjZXMgb2YgaW5mb3JtYXRpb24gYWJvdXQgdGhlbXNlbHZlcyBmb3IgZWFjaCB0cmFuc2FjdGlvbjpcclxudGhleSBwcm92ZSB0aGV5IGhhdmUgdGhlICQyNywgJDIwMCwgYW5kICQ1OyBhbmQgdGhleSBwcm92ZSBhIHRoaXJkIHBhcnR5KGkuZS4sQ0Mgb3IgYmFuayl3aWxsIG1ha2UgdGhhdCAkMjcsICQyMDAsXHJcbm9yICQ1IGF2YWlsYWJsZSwgaWYgdGhlaXIgY2xpZW50IGFncmVlcy4gSW5zdGVhZCwgZm9yIGVhY2ggdHJhbnNhY3Rpb24sIHRoZXkgb3BlbiB0aGVpclxyXG48aT5lbnRpcmU8L2k+IGZpbmFuY2lhbCBpbmZvcm1hdGlvbiwgYW5kIGNhbiBvbmx5IGhvcGUgdGhhdCBsYXctZW5mb3JjZW1lbnQgd2lsbCBwcmV2ZW50IGN5YmVyLXRoZWZ0OyBhbmQgaWYgdGhlIHN0b3JlJiMzOTtzXHJcbmRhdGFiYXNlcyBhcmUgaGFja2VkLCB0aGVuIHRvdWdoLWx1Y2shPC9wPlxyXG5cclxuPHA+Q3J5cHRvLWNvbnRyYWN0cyBwcm92aWRlIHRoZSB0ZWNobm9sb2d5IGZvciB0aGlzIGluZGl2aWR1YWxpemVkLCByaXNrLWZyZWUgdHJhbnNhY3Rpb24sIHJhdGhlciB0aGFuIGZvciBlYWNoIHRyYW5zYWN0aW9uLFxyXG5wcm92aWRpbmcgdGhlIGdlbmVyYWxpemVkIGluZm9ybWF0aW9uIGZvciBpbmRpdmlkdWFsIHRyYW5zYWN0aW9uLiBIaWdobHkgaW5lZmZpY2llbnQhIE5vYm9keSB0aGlua3MgdG8gd2FsayBhcm91bmRcclxud2l0aCB0aGVpciBsaWZlLXNhdmluZ3MgaW4gY2FzaCwgdGhlbiBhdCB0aGUgNy0xMSBzdG9yZSwgdG8gb3BlbiB0aGVpciB3YWQgb2YgY2FzaCBhbmQgcGVlbCBvdXQgYSBiaWxsLiBUaGUgY3JlZGl0XHJcbmNhcmQgc3lzdGVtLCBibGVzc2VkIGFzIGl0IGlzLCBkaWQgbm90IHByZXZpb3VzbHkgaGF2ZSB0ZWNobm9sb2d5IHRvIGF2b2lkIHRoaXMgdmVyeSB0aGluZy4gU28sIGZpbmFuY2lhbCBpbnN0aXR1dGlvbnNcclxuaGF2ZSBoYWQgdG8gcmVseSBvbiB0aGUgbWFueSBsYXllcnMgb2Ygc2VjdXJpdHksIHBhc3N3b3JkcywgcGlucywgbW90aGVycyYjMzk7IG1haWRlbiBuYW1lcywgZXRjLiBUaGVuLCBiYXNlZCBvblxyXG50aGUgbWF0aGVtYXRpY3MgYmVoaW5kIHByaW1lIG51bWJlcnMsIHRoZXkgaG9wZSB0byBrZWVwIHlvdXIgbW9uZXkgc2FmZSBpbiBvbmUsIGNlbnRyYWxpemVkIHNwb3QtLXdpdGggYSBicmlnaHRcclxucmVkIHRhcmdldCBvbiBpdC48L3A+XHJcblxyXG48cD5Ob3csIHRoZSBjcnlwdG8tY29udHJhY3QgcHJvdmlkZXMgdGhpcyBkZWNpZGVkbHkgKm1pY3JvLWVjb25vbWljKiBleHBlcmllbmNlIGZvciB0aGUgZXZlcnlkYXkgcGVyc29uLiBBbmQgdGhhdCwgbXlcclxuZnJpZW5kcywgaGFzIG5vdGhpbmcgdG8gZG8gd2l0aCBjcnlwdG8tY3VycmVuY2llcy4gVGhlcmUgaXMgbm8gbWljcm8tZWNvbm9taWMgdmFsdWUgaW4gY3J5cHRvLWN1cnJlbmN5LCBpbnN0ZWFkXHJcbnRoZSBjcnlwdG8tXHJcbjxpPmNvbnRyYWN0PC9pPiBpcyB0aGUgdHJ1ZSwgdW5zdW5nIGhlcm8sIGFuZCBhIGhlcm8gd2Ugd2lsbCBhbGwgZ2V0IHRvIGtub3cuIFtwZXJzb25hbCBvcGluaW9uIC0gdGhpcyBoZXJvJiMzOTtzIG5hbWVcclxuaXMgdGhlIEV0aGVyZXVtIFZpcnR1YWwgTWFjaGluZV0uIEluIGFueSBjYXNlLCBDcnlwdG8tY29udHJhY3RzIHByb3ZpZGUgdGhpcyBhYmlsaXR5IHRvIHByb3ZpZGUgcGlucG9pbnRlZCxcclxuPGk+c3BlY2lmaWMsIHRhcmdldGVkIGluZm9ybWF0aW9uPC9pPiBhcyBjaXRpemVucywgdG9vLiBXaGVuIHdlIHByb3ZpZGUgb3VyIGRyaXZlcnMgbGljZW5zZSBudW1iZXIsIGZvciB0aGUgc2FrZSBvZlxyXG5yZW50aW5nIHRoYXQgY2FyLCB3ZSBwcm92aWRlIGV2ZXJ5IGFzcGVjdCBvZiBpbmZvcm1hdGlvbiBvZiBvdXJzZWx2ZXMgdG8gSGVydHouIFRoZXkgZG9uJiMzOTt0IG5lZWQgdGhpcy4gVGhleSBuZWVkXHJcbnRvIGtub3cgb25seSBhbmQgZXhjbHVzaXZlbHkgZHJpdmluZy1yZWNvcmQgcmVsYXRlZCBkZXRhaWxzLS1ub3QgdGhlIGVudGlyZSBnb3Zlcm5tZW50YWwgZGF0YWJhc2Ugb2YgaW5mb3JtYXRpb25cclxuYWJvdXQgeW91ITwvcD5cclxuXHJcbjxwPjEuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5jbmV0LmNvbS9uZXdzL2JpdGNvaW4tY3J5cHRvY3VycmVuY3ktYmlnLWluLWludmVzdGluZy1idXQtc3RpbGwtbG91c3ktZm9yLWJ1eWluZy1hLXNhbmR3aWNoL1wiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuY25ldC5jb20vbmV3cy9iaXRjb2luLWNyeXB0b2N1cnJlbmN5LWJpZy1pbi1pbnZlc3RpbmctYnV0LXN0aWxsLWxvdXN5LWZvci1idXlpbmctYS1zYW5kd2ljaC88L2E+XHJcbjwvcD5cclxuXHJcbjxwPjIuXHJcbjxhIGhyZWY9XCJodHRwczovL2VyaWMuZWQuZ292Lz9pZD1FRDA2NTk5OVwiIHRhcmdldD1cIl9ibGFua1wiPlJvZ2VycywgRS4gTS4sICZhbXA7IFNob2VtYWtlciwgRi4gRi4gKDE5NzEpLiBDb21tdW5pY2F0aW9uIG9mIElubm92YXRpb25zOyBBIENyb3NzLUN1bHR1cmFsIEFwcHJvYWNoLjwvYT5cclxuPC9wPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJmZWIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMi0xNlwiPlxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiN0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2hcIj5PVVIgREFJTFkgVEVDSDwvaDU+XHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDE2LCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPlRlY2ggb24gdGhlIFJlZ3JldDogVW5pbnRlbmRlZCwgc2Vjb25kYXJ5IGVmZmVjdHMgb2YgY29tbXVuaWNhdGlvbi0gYW5kIGFjdGl2aXR5LWJhc2VkIGFwcC1kZXNpZ25zPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5HaXZlbiB0aGF0IG91ciBhcHAtdXNlIGlzIGluZXh0cmljYWJseSB0aWVkIHVwIHdpdGggb3VyIG93biBiZWhhdmlvciwgYWN0aXZpdHkvY29tbXVuaWNhdGlvbi1iYXNlZCBhcHAgZGV2ZWxvcGVyc1xyXG5oYXZlIGluIHRoZSBwYXN0IHllYXIgYWNjZXB0ZWQgKG1vc3RseSBpbiB3b3JkKSBhIHJlbmV3ZWQgcmVzcG9uc2liaWxpdHkuIE1vcmUgbGlrZSByZXNwb3NpYmlsaXR5IGZvciBhIG11bHRpLWZhY2V0ZWRcclxucG93ZXIgb2YgaW5mbHVlbmNlIGdyYW50ZWQgdG8gYW4gaW5kdXN0cnksIHN1ZGRlbmx5LCBkaXNwcm9wb3J0aW9uYXRlbHkgZ3JlYXQsIGFuZFxyXG48aT5zZW1pLWFyYml0cmFyaWx5IHJlbGF0ZWQ8L2k+IHRvIHRoZSBkZXNpZ25lciYjMzk7cyBpbnRlbnQgKGFuZCBjb250cm9sISkuIEFmdGVyIGFsbCwgaWYgdGhlIFNhaW50bHkgTWFyayBadWNrZXJiZXJnJiMzOTtzXHJcbmFjdGl2aXR5L2NvbW11bmljYXRpb24tYmFzZWQgYXBwIGluYWR2ZXJ0YW50bHkgbGVkIHRvIG5vdmVsLCBhbmQgZGVlcGx5IGNvbnNlcXVlbnRpYWwsIGVmZmVjdHMsIHRoZW4gYW55b25lIGNvdWxkLjwvcD5cclxuXHJcbjxwPkFmdGVyIGFsbCwgd2hvIGNvdWxkIGd1ZXNzXHJcbjxpPmhvdzwvaT4gdGhlc2UgYXBwLWRlc2lnbiBlZmZlY3RzIHdvdWxkIGFmZmVjdCB0aGUgdXNlcnMsIHllYXJzIGxhdGVyLiBXaG8gZG8gd2UgdGhpbmsgcHJvZ3JhbW1lcnMgYXJlLCBzb2Npb2xvZ2lzdHM/XHJcbk1vcmUgc3BlY2lmaWNhbGx5LCB3aG8gY291bGQga25vd1xyXG48aT53aGljaDwvaT4gbXVuZGFuZSBjb2RpbmcgcHJhY3RpY2VzLCBhcmJpdHJhcnkgYXBwLWRlc2lnbi0tbGlrZSBzaGFyaW5nIHBlcm1pc3Npb25zL2ZlYXR1cmVzPyBTdXJlLCBldmVyeW9uZSBkZWVwXHJcbmRvd24ga25ldyB0aGVpciBjb21wYW55IHByYWN0aWNlcyB5aWVsZCB1bmZhdGhvbWFibGUgcG93ZXIgb2YgaW5mbHVlbmNlIG92ZXIgdGhlIGRhaWx5IGhhYml0cyBvZiBjZWxsLXVzZXJzLCBhLmsuYS5cclxuZXZlcnlvbmUuIFRoZSBlYXN5IHBhcnQgaXMga25vd2luZzsgdGhlIGhhcmQgcGFydCBpcyBsZWFybmluZyBob3cgYW5kIHdoeSBjZXJ0YWluIGFwcC1mZWF0dXJlcyBsZWFkIHRvIGJlaGF2aW9yYWxcclxucmlza3MuPC9wPlxyXG5cclxuPHA+VGhlcmUgY291bGQgYmUgbm8gYmV0dGVyIGV4YW1wbGUgdGhhbiB0aGUgQWxjb2hvbGljIGZhY2VkIHdpdGggYW4gaW50ZXJ2ZW50aW9uIGJ5IGEgbG92aW5nIGZhbWlseSBsb25naW5nIGZvciBjaGFuZ2UuXHJcblRoZSBhbGNvaG9saWMgY291bGQgYmUgZm9yZ2l2ZW4gZm9yIHBhc3QgbWlzZGVlZHMsIGJ1dCB3aXRob3V0IGFjdHVhbFxyXG48aT5BY2tub3dsZWRnZW1lbnQ8L2k+IG9mIGEgY3Jpc2lzIGluIGRpcmVjdGlvbiwgd2hpY2ggbmVjZXNzaXRhdGVzIHByb2Zlc3Npb25hbCBoZWxwIGZyb20gc29jaWFsIHNjaWVudGlzdHMuIFRoZXJlZm9yZSxcclxudGhlIHJlY2VudFxyXG48aT5hY2tub3dsZWRnbWVudHM8L2k+IHNpZ25pZnkgc29tZXRoaW5nIGRlZXBlci0tdGhleSBzaWduaWZ5IGEgaHVtaWxpdHkgdGhhdCBhcHAtZGVzaWduZXJzIGFyZSBub3Qgc29jaW9sb2dpc3RzLCBnZW5lcmFsbHlcclxuc3BlYWtpbmcuIFNvLCB0aGF0IG1lYW5zIGhpcmluZyBzb2Npb2xvZ2lzdHMsIHBzeWNob2xvZ2lzdHMsIGFudGhyb3BvbG9naXN0cyBmb3IgZXZlcnkgTlxyXG48c21hbGw+dGg8L3NtYWxsPiBhcHAtY29kZXIgYW5kIHNvZnR3YXJlIGVuZ2luZWVyLiBIaXN0b3J5IGNhbiYjMzk7dCBiZSByZXdyaXR0ZW4sIGJ1dCBpdCBjYW4gYmUgaW50ZXJwcmV0ZWQgYW5kIGxlYXJuZWRcclxuZnJvbS4gVGhlIGFja25vd2xlZGdtZW50IGlzIGl0c2VsZiBhIHZpY3RvcnkgaWYgaXQgaW5kdWNlcyBsZWFybmluZyBmcm9tIHRoZSByYXcsIHNvY2lhbCBzY2llbmNlcywgd2hvc2UgZXhwZXJ0aXNlXHJcbjxpPmNhbjwvaT4gcHJlZGljdCBob3cgb3Igd2h5IGNlcnRhaW4gJnF1b3Q7bGlmZSZxdW90Oy1mZWF0dXJlcywgcHJhY3RpY2VzLCBhbmQgcG9saWNpZXMgb2Z0ZW4gdW5mb2xkIHdpdGggdW5kdWUgYW5kXHJcbnVuaW50ZW5kZWQgc29jaWFsIGNvbnNlcXVlbmNlcy48L3A+XHJcblxyXG48cD5XYXRlciB1bmRlciB0aGUgYnJpZGdlLCBidXQgZ29pbmcgZm9yd2FyZCwgaXQgaXMgb25lIHRoaW5nIHRvIGNsYWltIGEgJnF1b3Q7cmVuZXdlZCBzZW5zZSBvZiByZW1vcnNlJnF1b3Q7LCBhbm90aGVyXHJcbnRvIGFja25vd2xlZGdlLCBsZWFybiBhbmQgY2hhbmdlLiBMaWtlIGxhc3QgTm92ZW1iZXJcclxuPHN1cD4xPC9zdXA+IHdoZW4gRmFjZWJvb2sgY28tZm91bmRlciBTZWFuIFBhcmtlciBjb25mZXNzZWQgY2VydGFpbiBkZXNpZ25zIGxpa2UgJnF1b3Q7c29jaWFsLXZhbGlkYXRpb24gZmVlZGJhY2sgbG9vcCZxdW90O1xyXG5hbmQgb3RoZXIgYXBwLWRlc2lnbiBpbnRlbnRpb25zLCB3aGlsZSBpZ25vcmluZyBwb3RlbnRpYWwgc2Vjb25kYXJ5IGVmZmVjdHMgb24gc29jaWV0eS4gU28sIHRoZVxyXG48aT5BY2tub3dsZWRnbWVudDwvaT4gaXMgdGhlIGJpZyB3aW4gaGVyZS0tbm90IHNvIG11Y2ggdGhlIHJlbW9yc2UhPC9wPlxyXG5cclxuPHA+MS5cclxuPGEgaHJlZj1cImh0dHBzOi8vZGlnaXRhbGFkZGljdHNibG9nLmNvbS9mYWNlYm9vay1jby1mb3VuZGVyLXNheXMtY29tcGFueS1idWlsdC10by1leHBsb2l0LXlvdS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL2RpZ2l0YWxhZGRpY3RzYmxvZy5jb20vZmFjZWJvb2stY28tZm91bmRlci1zYXlzLWNvbXBhbnktYnVpbHQtdG8tZXhwbG9pdC15b3UvPC9hPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTE3XCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI3RvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaFwiPk9VUiBEQUlMWSBURUNIPC9oNT5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPkZlYiAxNy0xOCwgMjAxOFxyXG48YnIgLz4gV2Vla2VuZFxyXG48L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+QmxvY2tjaGFpbnMsIEJpdGNvaW5zIGFuZCBUaGUgVW5uZWNlc3NhcnkgUmlzayBvZiBTaG9wcGluZyBhdCBUYXJnZXQgd2l0aCBhIENyZWRpdCBDYXJkLCBQYXJ0IElJOlxyXG48YnIgLz5cclxuPGJyIC8+IFNldmVuIE51dHMgJmFtcDsgQm9sdHMgRmVhdHVyZXMgb2YgdGhlIE5ldyBCbG9ja2NoYWluIE1pY3JvLUVjb25vbXlcclxuPGJyIC8+XHJcbjxzbWFsbCBjbGFzcz1cImphcmdvblwiPlRlY2ggamFyZ29uIGFsZXJ0IGFoZWFkLCB3aXRoIGFsbCBlZmZvcnQgbWFkZSBmb3IgY2xhcml0eSEgSGVyZSwgSSBwcm92aWRlIGEgdGVjaG5pY2FsICZhbXA7IGNvbnRleHR1YWxpemluZyBhZGRpdGlvblxyXG4gIHRvIG15XHJcbiAgPGFiYnIgdGl0bGU9XCJ0aGlzIGxpbmsganVzdCBnb2VzIHVwIDcgcGFyYWdyYXBocyB0byBGZWIuIDE1dGhcIj5cclxuICAgIDxhIGhyZWY9XCIjMTgtMDItMTVcIj4gRmVicnVhcnkgMTV0aCBibG9nIHBvc3Q8L2E+XHJcbiAgPC9hYmJyPiBvbiB0aGUgbWljcm8tZWNvbm9taWMgaG9yaXpvbiBvZiBibG9ja2NoYWluIHRlY2hub2xvZ2llcy4gPC9zbWFsbD5cclxuPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj43IEV0aGVyZXVtLWJhc2VkIHRlY2hub2xvZ2ljYWwgZmVhdHVyZXMgb2ZmZXIgdXMgYSBuZXcgd29ybGQgLS0gYSBkZWNlbnRyYWxpemVkIG5ldyB3b3JsZCwgbm90IGRlcGVuZGVudCBvbiB0aGUgY2VudHJhbGl6ZWRcclxuc2VydmVycyBvZiBJbnN0YWdyYW0sIENvbWNhc3QsIFQtTW9iaWxlLCBBbWF6b24sIGV0Yy4gV2l0aCB0aGF0IHN0YXRlbWVudCBlbmRzIGdlbmVyYWwgY29uc2Vuc3VzIGFtb25nIGJsb2NrY2hhaW5cclxuZXhwZXJ0cywgcHVuZGl0cywgYW5kIGF1dGhvcnMuIEhvd2V2ZXIsIGlmIHRoZSBjdXJyZW50IGxvZ2lzdGljYWwgb2JzdGFjbGVzIHByb3ZpZGUgY29udHJvdmVyc3kgYW5kIGNvbXBldGluZyBhbGdvcml0aG1zXHJcbm92ZXIgc3VzdGFpbmFiaWxpdHksIHNlY3VyaXR5LCBhbmQgc2NhbGFiaWxpdHksIHRoZW4gdGhleSByZXZlYWwgbXVjaCBtb3JlIGFib3V0IHRoZSBnZW5lcmFsIHBhdGh3YXkgb2Ygc29jaWFsIHVzZXNcclxuKGFuZCBwb3RlbnRpYWwgZWZmZWN0cykgdGhhbiB0aGV5IGhpZGUuIEluIG15IEZlYnJ1YXJ5IDE1dGhcclxuPGEgaHJlZj1cIiMxOC0wMi0xNVwiPmJsb2c8L2E+LCBJIHRvdWNoZWQgb24gYSBmZXcgZmVhdHVyZXMgb2YgbWljcm8tZWNvbm9taWMgdXNlcyBzbyBhcyB0byBkaXN0aW5ndWlzaCB0aGUgbW9yZSBjZXJ0YWluIGFzcGVjdHMgb2YgdGhlXHJcbmNyeXB0by1jb250cmFjdCBob3Jpem9uLjwvcD5cclxuXHJcbjxwPlxyXG48c3Ryb25nPlByb2xvZ3VlPC9zdHJvbmc+XHJcbjwvcD5cclxuXHJcbjxwPlNvLCB3aGF0IGFyZSBzb21lIGNvcmUgZmVhdHVyZXMgb2YgYmxvY2stY2hhaW4gdGVjaG5vbG9neSB0aGF0IGFmZmVjdCB0aGUgcXVhbGl0eSBvZiBvdXIgbGl2ZXMsIGFuZCB0aGVcclxuPGk+cHJvZHVjdGl2aXR5PC9pPiBvZiBvdXIgd29yayBhcyBhIHNvY2lldHkgb2YgYWNhZGVtaWNzLCBwdWJsaWMtc2VjdG9yIGFuZCBwcml2YXRlLXNlY3RvciBwcm9mZXNzaW9uYWxzPyBGaXJzdCwgYVxyXG5saXR0bGUgYmFja2dyb3VuZCBhbmQgY29udGV4dCBiZWZvcmUgSSBvdXRsaW5lIHNldmVuIGJsb2NrY2hhaW4gZnVuY3Rpb25hbGl0aWVzLiBUaGUgRXRoZXJldW0gYmxvY2tjaGFpbiBoZWxwcyBkaXN0aW5ndWlzaFxyXG5pdHNlbGYtLWFuZCBpdHMgYmxvY2tjaGFpbi1uYXRpdmUgbGFuZ3VhZ2UgU29saWRpdHktLWZyb20gZWFybGllciB0ZWNoLCBsaWtlIEJpdGNvaW4gYW5kIG90aGVyIFByb29mIG9mIFdvcmstYmFzZWRcclxuYmxvY2tjaGFpbnMuIEV0aGVyZXVtIGJsb2NrY2hhaW4gb2ZmZXJzIGEgc3ludGF4IGFuZCBwcm9ncmFtbWluZyBmZWF0dXJlcywgZS5nLiAmcXVvdDtsb29waW5nJnF1b3Q7LCAmcXVvdDtyZWN1cnNpb24mcXVvdDssXHJcbndpdGggdGhlIGZ1bGwgcG93ZXIgb2YgYVxyXG48aT5UdXJpbmcgQ29tcGxldGU8L2k+IGxhbmd1YWdlLS10aGF0IGlzLCBnaXZlbiBlbm91Z2ggcmVzb3VyY2VzLCB0aGUgbGFuZ3VhZ2UgY2FuIHNvbHZlIGFueSBwcm9ncmFtbWFibGUgcHJvYmxlbS48L3A+XHJcblxyXG48cD5Nb3JlIGJhY2tncm91bmQgYW5kIGEgY2xhcmlmeWluZyBtZXRhcGhvciBhcmUgaW4gb3JkZXI6IFRoZSBCaXRjb2luIGJsb2NrY2hhaW4gdHJhbnNhY3Rpb24gcmVzZW1ibGVzIHRoZSBhY2NvdW50aW5nXHJcbnN5c3RlbSBvZiBhIGZvb3MtYmFsbCB0YWJsZSBwb2ludCByYWNrIHdpdGggYSBiYXNpYyBjYWxjdWxhdG9yIGdsdWVkIHRvIHRoZSBzaWRlLiBJbiBjb250cmFkaXN0aW5jdGlvbiwgQW4gRXRoZXJldW1cclxuYmxvY2tjaGFpbiB0cmFuc2FjdGlvbiB3b3VsZCByZXNlbWJsZSBhIG5ldHdvcmsgb2YgY29tcHV0ZXJzLFxyXG48aT53aGljaCBpcyBpdHNlbGYsPC9pPiBhIGNvbXB1dGVyLS1oZW5jZSwgdGhlIG5hbWUgRXRoZXJldW0gVmlydHVhbCBNYWNoaW5lLiBUaGlzIGFsbG93cyBmb3IgUXVpY2tib29rcyB0byBjYWxjdWxhdGVcclxuaW50byBhIFBERiB0byBiZSBzZW50IHZpYSBhbiBlbWFpbCBjb250cmFjdC1zaWduaW5nIHByb2dyYW0uIE11Y2ggbW9yZSB1c2VmdWwhPC9wPlxyXG5cclxuPHA+VGhlcmVmb3JlLCBFdGhlcmV1bSYjMzk7cyBCbG9ja2NoYWluIGlzIG1vcmUgdGhhbiBhIG5ldHdvcmtlZCwgY2hhaW5lZCBsaXN0IG9mIGJsb2NrcywgbGlrZSBCaXRjb2luLiBUaGUgRXRoZXJldW1cclxuYmxvY2tjaGFpbiBpcyBhY3R1YWxseSBhICZxdW90O1ZpcnR1YWwgTWFjaGluZSZxdW90OywgbGlrZSBhIGEgYmlnIG5ldHdvcmtlZCAmcXVvdDtob21lIGNvbXB1dGVyJnF1b3Q7LiBUaGUgbmF0aXZlXHJcbmxhbmd1YWdlIG9mIHRoZSBibG9ja2NoYWluLCBTb2xpZGl0eSwgYWxsb3dzIGZvciBhblxyXG48aT5hcHBsaWNhdGlvbiBiaW5hcnkgaW50ZXJmYWNlPC9pPiwgQUJJLiBTbywgZm9yIGV4YW1wbGUsIEkgY2FuIHR5cGUgdXAgYW4gRXRoZXJldW0gY29udHJhY3Qgb24gbXkgaG9tZSBjb21wdXRlcixcclxudGhlbiBkaXJlY3RseSBhY2Nlc3MgYnkgY29tbWFuZCBsaW5lIHRoZSBibG9ja2NoYWluIGl0c2VsZi4gSW4gbGF5bWFuJiMzOTtzIHRlcm1zLCB0aGUgbWFubmVyIHRoYXQgbW9kZXJuLWRheSBhcHAsXHJcbmZvciBleGFtcGxlIEluc3RhZ3JhbSwgaXMgYSBjZW50cmFsaXplZCBBUEkgKEFwcGxpY2F0aW9uIFByb2dyYW1taW5nIEludGVyZmFjZSkgdGhhdCBhbGxvd3Mgb25lIHByb2dyYW1taW5nIHN5c3RlbVxyXG50byBpbnRlcmFjdCB3aXRoIGFub3RoZXIsIHN1Y2ggYXMgSW5zdHJhZ3JhbSBvZmZlcnMgYSAmcXVvdDtzaGFyaW5nIEFQSSZxdW90OyB0aGF0IGNvbm5lY3RzIHRvIGhhcmR3YXJlIGNvbnRhY3RzLFxyXG50aHVzIGZhY2l0aWxhdGluZyBjb21tdW5pY2F0aW5nIHdpdGggdGhpcmQtcGFydHkgYXBsaWNhdGlvbnMsIGxpa2Ugc2hhcmluZyB5b3VyIGluc3RhZ3JhbSBwaWN0dXJlIHRvIHlvdXIgRmFjZWJvb2tcclxuYWNjb3VudCwgdmlhIHlvdXIgVC1Nb2JpbGUgcGhvbmUmIzM5O3MgY29udGFjdHMgbGlzdC4gVGhpcyBBUEkgcmVsYXRpb25zaGlwIGJyb2FkbHkgZGVzY3JpYmVzIHRoZSBtb2Rlcm4gd29ybGQgd2VcclxubGl2ZSBpbiwgd2hlcmVpbiBhIENocnlzZXIgZHJpdmluZyBzeXN0ZW0gZXhjaGFuZ2VzIEFQSSBpbmZvcm1hdGlvbiB3aXRoIHlvdXIgVC1Nb2JpbGUgQmx1ZXRvb3RoIG5ldHdvcmsgc3lzdGVtLFxyXG53aGljaCBleGNoYW5nZXMgQVBJIGluZm9ybWF0aW9uIHdpdGggeW91ciBvd24gY29udGFjdCBsaXN0LCBhbmQgc28gb24sIGFuZCBvdXIgbGl2ZXMgYXJlIG1hZGUgZWFzaWVyLjwvcD5cclxuXHJcbjxwPlNvLCBhcmUgd2Ugb3V0IG9mIHRoZSB3b29kcz8gSGFzIEV0aGVyZXVtIHNvbHZlZCB0aGUgYmxvY2tjaGFpbiBxdWVzdGlvbj8gWWVzLCBpZiBpdCB3ZXJlIHRoZSAxOTIwIHByZS1yZWxhdGl2aXR5XHJcbmRheXM7IEhvd2V2ZXIsIHdpdGggdGhlIGFkdmVudCBvZiBxdWFudHVtIGNvbXB1dGluZywgcG90ZW50aWFsIHNlY3VyaXR5IHZ1bG5lcmFiaWxpdGllcyBpbW1lZGlhdGVseSBhcmlzZS4gVGhlIHJlYXNvblxyXG5iZWluZyB0aGF0IGRpZ2l0YWwgbWF0aCB1c2VzIGJpbmFyeSAmcXVvdDtvbi9vZmYmcXVvdDsgY2FsY3VsYXRpb25zLCB3aGlsZSBxdWFudHVtIG1hdGggaW1wbGljYXRlcyBhIHRlcnRpYXJ5LFxyXG48aT5xdWJpdDwvaT4gJnF1b3Q7c2ltdWx0YW5lb3VzIHN0YXRlcyZxdW90Oy4gVGhlcmVmb3JlLCB3ZSBoYXZlIG5vdyBlbnRlcmVkIHRoZSAzcmQgZ2VuZXJhdGlvbiBvZiBibG9ja2NoYWluIHRlY2hub2xvZ3ksXHJcbmJvdGggcHJvZ3JhbW1hYmxlLCBidXQgYWxzbyBxdWFudHVtLXByb29mIGR1ZSB0byBtYXRoZW1hdGljYWwgZ3JhcGggZmVhdHVyZXMuIEZvciBleGFtcGxlLCBJT1RBJiMzOTtzIGJsb2NrY2hhaW5cclxuZGVzaWduIHV0aWxpemVzIGFcclxuPGk+V2ludGVybml0eiBPbmUtVGltZSBTaWduYXR1cmU8L2k+LCBieSB3aGljaCBvbmUmIzM5O3MgdHJhbnNhY3Rpb24gaXMgZW50ZXJlZCBpbnRvIHdpdGggYSBwcml2YXRlLWtleSwgYW5kIHRoZSBibG9ja2NoYWluXHJcbm1vcmVzbyByZXNlbWJsZXMgYSAmcXVvdDtUYW5nbGUmcXVvdDsgb2YgYSBkaXJlY3RlZCBncmFwaCwgd2hpY2ggYWxsb3dzIGZvciBjb21wdXRhdGlvbmFsICZxdW90O3N0YXRlcyZxdW90Oy4gSU9UQVxyXG5yZWNlbnRseSBnYXJuZXJlZCBjcml0aWNpc20gaW4gSmFudWFyeSAyMDE4IGR1ZSB0byBhbiB1bmZvcnR1bmF0ZSBjcnlwdG8taGFjaywgdGhhdCBleHBvc2VkIGFuIGFwcGFyZW50IHZ1bG5lcmFiaWxpdHkuXHJcbkluIHRydXRoLCB0aGlzIHdhcyBhIGNhc2Ugb2YgdXNlci1lcnJvciBiZWNhdXNlIHVzZXJzIHdlcmVcclxuPGk+cmUtdXNpbmc8L2k+IHRoZWlyIG9uZS10aW1lIGtleXMsIHdoaWNoIHNpZ25pZmljYW50bHkgZGVjcmVhc2VzIHNlY3VyaXR5IHRvIHRoZSBwb2ludCB0aGF0IGEgaG9tZSBjb21wdXRlciBjb3VsZFxyXG5jcmFjayB0aGUgY29kZSEgSSBjaG9vc2UgdG8gbm90IGRpZ3Jlc3MgZnVydGhlciwgYW5kIHF1YW50dW0gY29tcHV0aW5nIGlzIG5vdCBxdWl0ZSBhZHZhbmNlZCBlbm91Z2ggbm93IHRvIGNhdXNlXHJcbmRhbWFnZSwgYnV0IGluIHRoZSBmdXR1cmUgY291bGQgcG90ZW50aWFsbHkgc3BsaXQgdGhlIGJsb2NrY2hhaW4gaW4gdHdvLCBvciBvdGhlciBxdWFudHVtIHBvc3NpYmlsaXRpZXMuPC9wPlxyXG5cclxuPHA+SW4gc3VtLCB0aGUgdGVjaG5pY2FsIG9ic3RhY2xlcyBjaGFuZ2UgZWFjaCBtb250aCwgaG93ZXZlciBvbmUgbXVzdCBub3QgbG9zZSBzaWdodCBvZiB0aGUgZm9yZXN0IGZvciB0aGUgdHJlZXMuIFNvY2lhbFxyXG51c2VhYmxpdHksIHBvdGVudGlhbCBzY29wZSBhbmQgb2YgY291cnNlIHVuaW50ZW5kZWQgY29uc2VxdWVuY2VzIGhhdmUgYWxsIGZpbmFsbHkgYmVndW4gdG8gZW1lcmdlLCBhdCBsZWFzdCBpbiBmb3JtLFxyXG53aXRoIGxpdHRsZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIDJuZCBnZW5lcmF0aW9uIGJsb2NrY2hhaW4gb3IgdGhlIDNyZCBnZW5lcmF0aW9uIFBhdHJpY2lhbiBkaXJlY3RlZCBncmFwaCBibG9ja2NoYWluLlxyXG5UaGUgdW5kZXJseWluZyBwcmluY2lwbGUgb2YgdGhlIGJsb2NrY2hhaW4mIzM5O3MgbWljcm8tZWNvbm9taWMgdXRpbGlpdHkgdGhyb3VnaCBjcnlwdG8tXHJcbjxpPmNvbnRyYWN0czwvaT4gaXMgdGhlIHNhbWUsIGFzIG9wcG9zZWQgdG8gcGxhaW4gY3J5cHRvLWN1cnJlbmN5LiB5b3Uga25vdyB0aGUgdXN1YWwgYmFydGVyaW5nIHNvbHV0aW9ucyBmb3IgU3VwcGx5XHJcbiZhbXA7IERlbWFuZCBsZWFkaW5nIHRvIEVjb25vbWljcyBHYW1lIFRoZW9yeSwgZXRjLiBUaGlzIGlzIHdoZXJlIHdlIG11c3QgdGFrZSBvdXIgbGVhdmUgb2YgdGhlIEhhcmQgU2NpZW5jZXMgb2ZcclxuTWF0aGVtYXRpY3MsIGFuZCBlbnRlciB0aGUgcmVhbG0gb2YgU29jaW9sb2d5LCBQc3ljaG9sb2d5LCBBbnRocm9wb2xvZ3kgYW5kIEVjb25vbWljcy48L3A+XHJcblxyXG48cD4mbmJzcDs8L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTE5XCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI3RvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaFwiPk9VUiBEQUlMWSBURUNIPC9oNT5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPkZlYiAxOSwgMjAxODk8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+QmxvY2tjaGFpbnMsIEJpdGNvaW5zIGFuZCBUaGUgVW5uZWNlc3NhcnkgUmlzayBvZiBTaG9wcGluZyBhdCBUYXJnZXQgd2l0aCBhIENyZWRpdCBDYXJkLCBQYXJ0IElJSTpcclxuPGJyIC8+XHJcbjxiciAvPiBTZXZlbiBGZWF0dXJlcyBvZiB0aGUgTmV3IEJsb2NrY2hhaW4gTWljcm8tRWNvbm9teVxyXG48YnIgLz5cclxuPHNtYWxsIGNsYXNzPVwiamFyZ29uXCI+VGVjaCBqYXJnb24gYWxlcnQgYWhlYWQsIHdpdGggYWxsIGVmZm9ydCBtYWRlIGZvciBjbGFyaXR5ISBUaGUgZmlyc3QgMyBvZiA3IG5ldyBwb3NzaWJpbGl0aWVzIHRoYW5rcyB0byB0aGUgcHJvZ3JhbW1hYmxlXHJcbiAgYmxvY2tjaGFpbi48L3NtYWxsPlxyXG48L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlRoZSBndWlkaW5nIGxpZ2h0IHRocm91Z2ggdGhlIGNlbnR1cmllcyBvZiBzY2llbnRpZmljIHBhcmFkaWdtcywgaW4gdGhlIEt1aG5pYW4gc2Vuc2VcclxuPHN1cCBpZD1cIjE5LTFcIj4xPC9zdXA+LCBoYXZlIGRlcml2ZWQgZnJvbSBkZWR1Y3RpdmUgaWRlYXMgZnJvbSBhYm92ZSAtIHdoZXRoZXIgcHJpZXN0bHkgb3Igcm95YWwgZGVjcmVlLiBUaGVuLCB0aGUgcHJpbWFjeSBvZiB0aGVcclxuPGk+U2NpZW50aWZpYyBNZXRob2Q8L2k+IGZyb20gdGhlIFJlbmFpc3NhbmNlIGZvcndhcmQtLXB1bmN0dWF0ZWQgZmlyc3QgYnkgQ29wZXJuaWNhbiBIZWxpb2NlbnRyaXNtLCB0aGVuIG90aGVyIFBhcmFkaWdtXHJcblNoaWZ0cy0taGFzIGRpcmVjdGVkIHJhdGlvbmFsIGFuZCBldGhpY2FsIG5vcm1zIGluIGVhY2ggcmVzcGVjdGl2ZSBwZXJpb2QsIGUuZy4gRW5saWdodGVubWVudCBhdXRob3JzIG9mIDE3dGgsIDE4dGhcclxuY2VudHVyeS4gRmFzdCBmb3J3YXJkIHRvIHRoZSBtb2Rlcm4gcGVyaW9kLCB3aGVyZWluIHRoZSBjdXJyZW50IGVyYSYjMzk7cyBlbWVyZ2luZyBwYXJhZGlnbSBob2xkcyBTaGFyaW5nIGFzIGEgY29sbGVjdGl2ZS1wcmlvcml0eVxyXG5hbmQgcmVzcG9uc2liaWxpdHksIHRoZW4gYW4gYW1hemluZyBwaGlsb3NvcGhpY2FsIG1vbWVudC5cclxuPGk+SGlzdG9yaWNhbCBNYXRlcmlhbGlzbTwvaT5cclxuPHN1cD4yPC9zdXA+IHByZXNjcmliZXMgd2hhdCBpcyBkaXJlY3RseSBoZXJlIGEgbm92ZWwgUGFyYWRpZ20gU2hpZnQgYnkgd2hpY2ggYXV0aG9yaXR5IGlzIG5vdCBkZXJpdmVkIGZyb20gZ292ZXJubWVudGFsLFxyXG5maW5hbmNpYWwgc291cmNlcywgYnV0IHJhdGhlciB0aGVcclxuPGk+c2hhcmVkPC9pPnNvY2lldGFsIGNvbnNlbnN1cyBhYm91dCBjcnlwdG9ncmFwaGljLCBtYXRoZW1hdGljYWwgcHJvb2ZzIGFzIHRydWUgYXV0aG9yaXR5LiBGdXJ0aGVyLCB0aGUgcmV2b2x1dGlvbmFyeVxyXG5zaGlmdCBhbHNvIGlubmF0ZWx5IHByb3ZpZGVzIHRvb2xzIGZvciBpbXBsZW1lbnRpb24gdGhyb3VnaCBkZWNlbnRyYWxpemVkLCBwcm9ncmFtbWFibGUgZGF0YS1zaGFyaW5nLiBDcnlwdG9ncmFwaHlcclxuaGFzIGluIGEgc2Vuc2UgYmVjb21lIGFcclxuPGk+ZGUganVyZTwvaT4gbWlkZGxlLXBlcnNvbiBmb3IgaWRlbnRpZmljYXRpb24gYW5kIHZlcmlmaWNhdGlvbiBvZiBwcm9wZXJ0eS48L3A+XHJcblxyXG48cD5cclxuPHN0cm9uZz5JLiBQcm90ZWN0aW5nIHJpZ2h0cyB0aHJvdWdoIGltbXV0YWJsZSByZWNvcmRzPC9zdHJvbmc+XHJcbjxiciAvPiBJbmFsaWVhYmxlIFJpZ2h0cyBjYW4gbm93IGJlIGlkZW50aWZpZWQgYW5kIHZlcmlmaWVkIGJ5IHRoZSBjcnlwdG9ncmFwaGljIGF1dGhvcml0eSBvZiBhIG1hdGhlbWF0aWNhbCBwcm9vZiwgcmF0aGVyXHJcbnRoYW4gZXhjbHVzaXZlbHkgdGhyb3VnaCBnb3Zlcm5tZW50YWwgb3IgZmluYW5jaWFsIGluc3RpdHV0aW9ucyBmcm9tIGFib3ZlLiBUaGUgbW9kZXJuIHBlcmlvZCBhbHNvIGhhcyBoZWxkIHRoaXNcclxuZGVjZW50cmFsaXplZCwgaW5kaXZpZHVhbCBhdXRob3JpdHkgYXMgdGhlXHJcbjxpPmEgcHJpb3JpPC9pPiBzdGFydGluZyBwb2ludHMgZm9yIHBoaWxvc29waGljYWwgcHJvb2ZzLiBQcmVtaXNlcyBhYm91dCB0cnV0aCBiZWdpbiB3aXRoIHRoZSBjb25kaXRpb25zIG9mIGh1bWFua2luZCxcclxubm90IGlkZWFsb2dpZXMuIEluIGZhY3QsIGl0IHdhcyB0aGVcclxuPGk+WW91bmcgSGVnZWxpYW5zPC9pPiBvZiBlYXJseSAxOXRoIGNlbnR1cnkgVmllbm5hICZhbXA7IEJlcmxpbiwgd2hvIHVzaGVyZWQgaW4gdGhlIE1vZGVybiBFcmEgb2YgV2VzdGVybiBQaGlsb3NvcGh5LFxyXG5ieSBsYXlpbmcgb3V0IFRydXRoIGFzIGludmVydGVkLCBiZWdpbm5pbmcgZnJvbSB0aGUgZW1waXJpY2FsICZxdW90O2dyb3VuZCZxdW90OyB1cHdhcmQuIFRoaXMgJnF1b3Q7dXBzaWRlLWRvd25cclxudHJlZSZxdW90OyBkZWZpbmVzIHBoaWxvc29waGljYWwgbW9kZXJuaXR5LiBKZWFuLVBhdWwgU2FydHJlIHdyb3RlIHRoYXQgdGhlIHdob2xlIG9mXHJcbjxpPkV4aXN0ZW50aWFsaXNtPC9pPiBhbmQgMjB0aCBjZW50dXJ5IHBoaWxzb3BoeSBpcyBhIG1lcmUgc3Vic2V0LCBhbmQgbmV2ZXIgZXNjYXBlcyBDb250aW5lbnRhbCBNYXRlcmlhbGlzbSwgYXMgYXJndWVkXHJcbmluIFNhcnRyZSYjMzk7c1xyXG48aT5TZWFyY2ggZm9yIGEgTWV0aG9kPC9pPi5cclxuPHN1cD4zPC9zdXA+XHJcbjwvcD5cclxuXHJcbjxwPkFsbCBvZiB0aGUgU2NpZW5jZXMsIHByb2RkZWQgYnkgdGhpcyBUcnV0aCBvZiBFbXBpcmljaXNtLCBmb2xsb3dlZCBzdWl0IHRocm91Z2ggYWxsIHRoZSB0ZWNoIGlubm92YXRpb25zIHNpbmNlIEhlZ2VsLlxyXG5JJiMzOTttIHNvIHN1cnByaXNlZCBieSB0aGlzLCBiZWNhdXNlIGZvciBtZSwgdGhlIHJvbGUgb2YgY3J5cHRvZ3JhcGh5IGlzIHNob2NraW5nIG9uIHR3byBsZXZlbHMuIEZpcnN0LCBjcnlwdG9ncmFwaHlcclxucmVzZW1ibGVlcyBwaGlsb3NvcGh5IHJhdGhlciB0aGFuIHRoZSBFbXBpcmljaXNtIHRoYXQgSSBoYWQgZW52aXNpb25lZCB3b3VsZCBnb3Zlcm4gc29jaWFsIHJ1bGUgKFNvbWUgb25jZSB0aG91Z2h0XHJcbm51Y2xlYXIgc2NpZW5jZXMgaGVsZCB0aGlzIHJvbGUtLW5vIGxvbmdlciEgTWF0aGVtYXRpY3MgdGFrZXMgdGhlIGNyb3duLiBTZWNvbmRseSwgSSYjMzk7bSBzdGlsbCBkdW1iZm91bmRlZCB0aGF0XHJcbmEgUGFyYWRpZ20gU2hpZnRcclxuPGk+Zmlyc3Q8L2k+IG9mZmVycyB0aGUgdG9vbHMgdG8gZnVsZmlsbCBpdHNlbGY/IFN0YWdnZXJpbmcgdG8gY29uc2lkZXIgdGhlIGFyYml0cmFyeSBjaGFuZ2VzIGFoZWFkIGZvciBhIHNvY2lldHkgdGhhdFxyXG5pcyBwcm92aWRlZCB0aGUgdG9vbHMgb2Ygc29jaWFsIHN0cnVjdHVyYWwgY2hhbmdlIGZpcnN0LCBidXQgaG93IHF1aXRlIGNvbnZlbmllbnQhPC9wPlxyXG5cclxuPHA+XHJcbjxzdHJvbmc+SUkuIEJ1cmVhdWNyYXRpYyBBdG9taXphdGlvbiBpbiBhIFRydWUgU2hhcmluZyBFY29ub215PC9zdHJvbmc+XHJcbjwvcD5cclxuXHJcbjxwPkl0IGlzIHNhdGlzZnlpbmdseSByZWFzc3VyaW5nIHRvIHNlZSB0aGUgZ29vZC1uYXR1cmVkLCBhbHRydWlzdGljIGVmZm9ydHMgYW1vbmcgdGhlIHRob3VzYW5kcywgdXBvbiB0aG91c2FuZHMgb2Zcclxub3Blbi1zb3VyY2Ugdm9sdW50ZWVycywgYW5kIGJsb2NrY2hhaW4gaW5ub3ZhdG9ycywgbGlrZSBWaXRhbGlrIEJ1dGVyaW4gYXV0aG9yIG9mIEV0aGVyZXVtIFZpcnR1YWwgTWFjaGluZSwgd2hvc2VcclxuYWltcyBhbmQgZWZmb3J0cyBtYWtlIHN0YWdnZXJpbmcgcHJvZ3Jlc3MgZWFjaCBxdWFydGVyLiBUaGUgcG90ZW50aWFsIGZvciByZW1vdmluZyB0aGUgJnF1b3Q7bWlkZGxlLXBlcnNvbiZxdW90O1xyXG5mcm9tIHRoZSBkYXktdG8tZGF5LCBtaWNyby1lY29ub21pYyAmcXVvdDtjb3N0IG9mIGxpdmluZyZxdW90Oy4gVGhpcyBnb2VzIGZvciBmb3IgdGhlIGV4Y2hhbmdpbmcgb2YgdGl0bGVzLCBsZWdhbFxyXG5kb2N1bWVudHMsIGV0Yy48L3A+XHJcblxyXG48cD5TaGFyaW5nIG9mIFJlc291cmNlcyBpcywgaW4gbXkgcGVyc29uYWwgb3BpbmlvbiwgY3JpdGljYWwgdG8gZ2xvYmFsIGZ1dHVyZS0tYm90aCBvdXQgb2YgaW5jcmVhc2luZyBuZWNlc3NpdHkgaW4gYWxsb2NhdGluZ1xyXG5pbmNyZWFzaW5nbHkgbGltaXRlZCByZXNvdXJjZXM7IGFuIGFyYml0cmFyeSByZWFycmFuZ2VtZW50IG9mXHJcbjxpPlNvY2lhbCBTdHJ1Y3R1cmU8L2k+IGFuZCBkaXN0cmlidXRpb24gb2YgaXRzIHJlc291cmNlcy4gV2hpbGUgdGhlIGV4cG9uZW50aWFsIHBvcHVsYXRpb24gZ3Jvd3RoIGxvb21zIG9uIHRoZSBuZWFyXHJcbmhvcml6b24sIGEgY2xlYXIsIHByZS1leGlzdGluZyBzb2x1dGlvbiBiZWdpbnMgd2l0aCBhIGZvY3VzIG9uXHJcbjxpPnNtYXJ0PC9pPiwgZWZmZWN0aXZlIHNoYXJpbmcgb2YgcmVzb3VyY2VzLiBUaGUgZHJpdmluZyBwcmluY2lwbGUgb2Ygc3VzdGFpbmFiaWxpdHkgaXMgbWFkZSBjb252ZW5pZW50IGJ5IG1lYW5zIG9mXHJcbmJsb2NrY2hhaW4gdGVjaG5vbG9neSwgZXh0ZW5kaW5nIGZvciBleGFtcGxlIHRvIGxvY2FsIGVjb25vbWllcywgY29vcGVyYXRpdmVzLCByaWRlLXNoYXJpbmcsIGV0Yy48L3A+XHJcblxyXG48cD5cclxuPHN0cm9uZz5JSUkuIFJlbW92aW5nIERvdWJsZS1EaXBwaW5nIGZyb20gSW50ZXJuYXRpb25hbCBSZW1pdHRhbmNlcyA8L3N0cm9uZz5cclxuPC9wPlxyXG5cclxuPHA+XHJcbjxpPiZxdW90O1BlcmZlY3Rpb24gaXMgYWNoaWV2ZWQsIG5vdCB3aGVuIHRoZXJlIGlzIG5vdGhpbmcgbW9yZSB0byBhZGQsIGJ1dCB3aGVuIHRoZXJlIGlzIG5vdGhpbmcgbGVmdCB0byB0YWtlIGF3YXkuJnF1b3Q7XHJcbiAgPC9pPlxyXG48YnIgLz4gLS1BbnRvaW5lIGRlIFNhaW50LUV4dXAmZWFjdXRlO3J5LCAxOTM5PC9wPlxyXG5cclxuPHA+VGF4ZXMgYW5kIHRhcmlmZnMgYXJlIGRpZmZpY3VsdCBlbm91Z2gsIHRoZSBkb3VibGUtZGlwcGluZyBvZiB0aGUgY3VycmVudCBpbnRlcm5hdGlvbmFsIHJlbWl0dGFuY2Ugc3lzdGVtLCAmYWFjdXRlO1xyXG5sYSBXZXN0ZXJuIFVuaW9uLCBkb2VzIG5vdCByZWZsZWN0IHRoZSBnbG9iYWwsIHNoYXJpbmcgRWNvbm9teSBvZiAyMDE4LiBUaGUgZXhpc3RpbmcgcmVtaXR0YW5jZSBzeXN0ZW0gKG5vdCBzcGVha2luZ1xyXG50b1xyXG48aT5jZW50cmFsaXplZDwvaT4sIG1pZGRsZS1tYW4gYWx0ZXJuYXRpdmVzIGxpa2UgUGF5UGF5LCBldGMuKS0tc3VwcG9zaW5nIGlmIEkgd2lyZSAkMiBMb29uaWUgdG8gYSBDYW5hZGlhbiBmcmllbmQmIzM5O3NcclxuQ2FuYWRpYW4gQmFuay0tcmVxdWlyZXMgcGF5bWVudHMgZXhlY3V0ZWQgdGhyb3VnaCB0d28gc2VwYXJhdGUgYmFuayB0cmFuc2FjdGlvbnMgaW4gdHdvIG5hdGlvbmFsIHBheW1lbnRzIHN5c3RlbXMsXHJcbnRodXMgdGhlIHNlbmRpbmcgY291bnRyeSBhbmQgcmVjZWl2aW5nIGNvdW50cnkgZWFjaCB0YWtlIGEgY3V0LiBMaWtlIGV2ZXJ5dGhpbmcgZWxzZS0tYyYjMzk7ZXN0IGxhIHZpZS4gT3IgaXMgaXQ/XHJcblRoZSBiZWF1dHkgb2YgRXRoZXJldW0gaXMgdGhhdCBpdCAmcXVvdDt0YWxrcyZxdW90OyB3ZWxsIHdpdGggb3RoZXJzIGFuZCBhY3Jvc3MgYm9yZGVycywgd2hpbGUgQml0Y29pbiByZW1haW5zIG9mXHJcbmxpdHRsZSB1c2UgZm9yIG1pY3JvLXRyYW5zYWN0aW9ucyB0aGF0IGludm9sdmUgc2VtaS1iYXNpYyBjYWxjdWxhdGlvbnMuIFRoZSByZWFzb24gYmVpbmcgdGhhdCBCaXRjb2luIGJsb2NrY2hhaW5cclxubGFuZ3VhZ2UsIFNjcmlwdCwgY2Fubm90IHN1cHBvcnQgbG9vcHMgKHdoaWxlIHN0YXRlbWVudHMsIGV0Yy4pPC9wPlxyXG5cclxuPHA+Q3VycmVudGx5LCBib3RoIEVPUyBhbmQgRXRoZXJldW0gYmxvY2tjaGFpbnMgYXBwZWFyIHBvaXNlZCBmb3IgdGhlIG1vc3QgZmluYW5jaWFsLWZyaWVuZGx5IGJsb2NrY2hhaW4gdGVjaC48L3A+XHJcblxyXG48cD4xLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuZWNvbm9taXN0LmNvbS9uZXdzL2J1c2luZXNzLzIxNzIyODY5LWFudGktZXN0YWJsaXNobWVudC10ZWNobm9sb2d5LWZhY2VzLWlyb25pYy10dXJuLWZvcnR1bmUtZ292ZXJubWVudHMtbWF5LWJlLWJpZy1iYWNrZXJzXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5lY29ub21pc3QuY29tL25ld3MvYnVzaW5lc3MvMjE3MjI4NjktYW50aS1lc3RhYmxpc2htZW50LXRlY2hub2xvZ3ktZmFjZXMtaXJvbmljLXR1cm4tZm9ydHVuZS1nb3Zlcm5tZW50cy1tYXktYmUtYmlnLWJhY2tlcnM8L2E+XHJcbjwvcD5cclxuXHJcbjxwPjIuXHJcbjxhIGhyZWY9XCJodHRwczovL2Jsb2cuZXRoZXJldW0ub3JnLzIwMTYvMDIvMDkvY3V0LWFuZC10cnktYnVpbGRpbmctYS1kcmVhbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL2Jsb2cuZXRoZXJldW0ub3JnLzIwMTYvMDIvMDkvY3V0LWFuZC10cnktYnVpbGRpbmctYS1kcmVhbS88L2E+XHJcbjwvcD5cclxuXHJcbjxwPjMuXHJcbjxhIGhyZWY9XCJodHRwOi8vd3d3LmJhcmQuZWR1L2xpYnJhcnkvYXJlbmR0L3BkZnMvU2FydHJlLVNlYXJjaC5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICA8aT4gU2VhcmNoIGZvciBhIE1ldGhvZDwvaT4sIEplYW4tUGF1bCBTYXJ0cmUsIDE5NTc8L2E+LlxyXG48YnIgLz5cclxuPHNtYWxsPlNhcnRyZSB3b3VsZCBsYXRlciBiZSBhd2FyZGVkIHRoZSBOb2JlbCBQcml6ZSBpbiAxOTY0LCBidXQgZGVjbGluZWQgaXQuPC9zbWFsbD5cclxuPC9wPlxyXG5cclxuPHA+XHJcbjxhIGhyZWY9XCJodHRwczovL3Byb2pla3RpbnRlZ3JhY2lqYS5wcmF2by5oci9fZG93bmxvYWQvcmVwb3NpdG9yeS9LdWhuX1N0cnVjdHVyZV9vZl9TY2llbnRpZmljX1Jldm9sdXRpb25zLnBkZlwiIHRhcmdldD1cIl9ibGFua1wiPjQuIEt1aG4sIFRob21hcywgVGhlIFN0cnVjdHVyZSBvZiBTY2llbnRpZmljIFJldm9sdXRpb25zLCA8L2E+XHJcbjwvcD5cclxuXHJcbjxwPlxyXG48YSBocmVmPVwiaHR0cHM6Ly9oYnIub3JnLzIwMTcvMDEvdGhlLXRydXRoLWFib3V0LWJsb2NrY2hhaW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj41LiBIYXJ2YXJkIEJ1c2luZXNzIFJldmlldyxcclxuICA8aT5UaGUgVHJ1dGggYWJvdXQgQmxvY2tjaGFpbiwgRmViLiAyMDE3LiAoVGhpcyBpcyBhbiBvbGRlciBhcnRpY2xlLCBidXQgdmVyeSBjbGVhciAmYW1wOyBpbnNpZ2h0ZnVsKTwvaT5cclxuPC9hPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTIwXCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI3RvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaFwiPk9VUiBEQUlMWSBURUNIPC9oNT5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPiZuYnNwOzwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMjAsIDIwMTk8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+QmxvY2tjaGFpbnMsIEJpdGNvaW5zIGFuZCBUaGUgVW5uZWNlc3NhcnkgUmlzayBvZiBTaG9wcGluZyBhdCBUYXJnZXQgd2l0aCBhIENyZWRpdCBDYXJkLCBQYXJ0IElWOlxyXG48YnIgLz5cclxuPGJyIC8+IFNldmVuIEZlYXR1cmVzIG9mIHRoZSBOZXcgQmxvY2tjaGFpbiBNaWNyby1FY29ub215XHJcbjxiciAvPlxyXG48c21hbGwgY2xhc3M9XCJqYXJnb25cIj5UZWNoIGphcmdvbiBhbGVydCBhaGVhZCwgd2l0aCBhbGwgZWZmb3J0IG1hZGUgZm9yIGNsYXJpdHkhIFRoZSA0dGggdGhyb3VnaCA3dGggb3V0bGluZWQgRmVhdHVyZXMgb2YgdGhlIE5ldyBCbG9ja2NoYWluXHJcbiAgTWljcm8tRWNvbm9teTwvc21hbGw+XHJcbjwvaDY+XHJcbiZuYnNwO1xyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkkgZmVlbCB0aGF0IGRhdGEgaXMgb25lIG9mIHRoZSBtb3JlIHVuZGVyZXN0aW1hdGVkIG5ldyBjb21tb2RpdGllcyBvZiB0aGUgYWdlLiBNb3N0IHZpc3VhbGl6ZSBkYXRhIGFzIHJvd3MgYW5kIGNvbHVtbnMsXHJcbmFuZCBhdCBtb3N0IG9ubHkgbm9uLWNvbmRpdGlvbmFsIGR5bmFtaWMgZGF0YS4gRGF0YSBhcmUgbm90IHNvIG11dGUhIERhdGEsIGluIG1vc3Qgb2JqZWN0LW9yaWVudGVkIGxhbmd1YWdlcyBhdFxyXG5sZWFzdCwgcmVwcmVzZW50c1xyXG48aT5mdW5jdGlvbnM8L2k+LCBjb25kaXRpb25zLCBhbmQgcHJlZGljdGVkIHZhbHVlcy4gQW5kIHNvLCBvdXIgb3duIGJlaGF2aW9yLCBjb3VwbGVkIHdpdGggb3VyIG5ldHdvcmtzJiMzOTsgYmVoYXZpb3IsXHJcbmNvdXBsZWQgd2l0aCBwcmVkaWN0aXZlIGFuYWx5dGljcy0tdGhpcyByZXByZXNlbnRzIGEgd2VhbHRoIG9mIGluZm9ybWF0aW9uIGJleW9uZCBvdXIgYXR0cmlidXRlZCBvciBpbmhlcml0ZWQgdHJhaXRzLlxyXG5UaGUgcHJvZ3JhbW1pbmcgaXNcclxuPGk+aW48L2k+IHRoZSBkYXRhLCBob3dldmVyLCBjaXRpemVucyBoYXZlIGJlY29tZSBsZXNzIGFuZCBsZXNzIGludm9sdmVkLCBjZWRpbmcgYXBwIGJ5IGNlbnRyYWxpemVkIGFwcCBvdXIgb3duIGluZm9ybWF0aW9uXHJcbmFuZCBlbnN1cmluZyBwcm9maXQgdG8gM3JkIHBhcnR5IG1hcmtldGVycy4gVGhlIGNlbnRyYWxpemVkIG5hdHVyZSBvZiB0aGUgaW50ZXJuZXQgYWxsb3dzIGZvciB0aGlzLCB3aGlsZSB0aGUgbmV3XHJcbmxhbmRzY2FwZSBvZlxyXG48aT5kZWNlbnRyYWxpemVkIGFwcGxpY2F0aW9uczwvaT4gKERBUFApIGNvbXBsZXRlbHkgdXBlbmRzIHRoaXMgc3RydWN0dXJlIG9mIHRoZSBzdGF0dXMgcXVvLjwvcD5cclxuXHJcbjxwPlxyXG48c3Ryb25nPklWLiBFbmFibGluZyBjaXRpemVucyB0byBvd24gJmFtcDsgbW9uZXRpemUgdGhlaXIgZGF0YSAoJmFtcDsgcHJvdGVjdCBwcml2YWN5KTwvc3Ryb25nPlxyXG48YnIgLz4gRXRoZXJldW0gb2ZmZXJzIGEgZGVjZW50cmFsaXplZCBzb2x1dGlvbiB0byAmcXVvdDtvd25pbmcmcXVvdDsgb25lJiMzOTtzIG93biBkYXRhLCBhcyBkYXRhIGNhbiBiZSBkZWNlbnRyYWxpemVkXHJcbmFuZCByZXR1cm5lZCB0byB0aGUgaW5kaXZpZHVhbCYjMzk7cyBjb250cm9sLCBhbmRcclxuPGk+cHJvZml0PC9pPi4gQXMgc3VyZSBhcyB0aGUgMTl0aCBjZW50dXJ5JiMzOTtzICZxdW90O2xhYm9yLWhvdXImcXVvdDsgYmVjYW1lIGNvbW1vZGlmaWVkIHRvIGEgY2FsY3VsYWJsZSBhc3NldCwgaS5lLlxyXG5wcm9wZXJ0eSwgd2hpY2hcclxuPGk+YW5vdGhlcjwvaT4gcGFydHkgY29udHJvbHMgYW5kIG1ha2VzIHByb2ZpdDsgQW5kIGFzIHN1cmUgYXMgdGhlIDIwdGggY2VudHVyeSYjMzk7cyBkYXRhIGFuYWx5dGljcyBiZWNhbWUgY29tbW9kaWZpZWRcclxuaW50byBjYWxjdWxhYmxlIGFzc2V0cyBmb3IgYW5vdGhlciBwYXJ0eSB0byB0YWtlIGNvbnRyb2wgYW5kIG1ha2UgcHJvZml0OyB0aGVuIG9ubHkgbm93IGluIHRoaXMgMjFzdCBjZW50dXJ5IGRvZXNcclxudGVjaG5vbG9neSBvZmZlciBhIG5ldywgbW9yZSBlZ2FsaXRhcmlhbiBwYXRoLjwvcD5cclxuXHJcbjxwPlxyXG48c3Ryb25nPlYuIEVuc3VyaW5nIGNvbXBlbnNhdGlvbiBmb3IgdGhlIENyZWF0b3JzIG9mIFZhbHVlIDwvc3Ryb25nPlxyXG48YnIgLz4gU28sIGhvdyB3b3VsZCBkZWNlbnRyYWxpemVkIGlubm92YXRpb25zIG9mIGJsb2NrY2hhaW5cclxuPGk+ZGlzdHJpYnV0ZWQgbGVkZ2VyPC9pPiB0ZWNobm9sb2d5IGNvbXBlbnNhdGUgdGhvc2Ugd2hvc2UgYWN0aW9ucywgYmVoYXZpb3IsIG9waW5pb25zLCBmcmllbmQtbmV0d29ya3MsIGFydHdvcmssXHJcbm11c2ljLCB2aWRlb3MgYW5kIG90aGVyIGNvbnRyaWJ1dGlvbnMgcHJvZml0IHRoZSBjcmVhdG9yPzwvcD5cclxuXHJcbjxwPlxyXG48c3Ryb25nPlZJLiBUaGUgSGFsY3lvbiBBZ2Ugb2YgVHJhbnNhY3Rpb24tQ2hhaW4gRW50ZXJwcmlzZTwvc3Ryb25nPlxyXG48L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+QWNjb3JkaW5nIHRvIEdyZWVrIE15dGhvbG9neSwgdGhlIGRheXMgb2YgZWVyeSwgbm90aWNlYWJsZSBsYWNrIG9mIHN0b3JtcyBoYXZlIG5ldmVyIGJlZW4gaW50ZXJwcmV0ZWQgYXMgYSBwZXJpb2Rcclxub2YgZ3JhY2UuIE1vcmVzbyxcclxuPGk+SGFsY3lvbjwvaT4gdHJhbnF1aWxpdHkgb25seSBtZWFucyBhIHRlbXBvcmFyeSBtb3JhdG9yaXVtIG9uIHRoZSB3aW5kcyBhbmQgd2F2ZXMsIGltcG9zZWQgYnkgQWVvbHVzLCBHb2Qgb2YgV2luZCxcclxudG8gcHJvdGVjdCB0aGUgbmVzdGluZyBlZ2dzIG9mIEFsY3lvbmUsIGhpcyBkYXVnaHRlci48L3A+XHJcblxyXG48cD5JZiBibG9ja2NoYWluIHRlY2ggY2hhbmdlcyBob3cgd2UgZG8gcmVzZWFyY2gsIGFuYWx5c2lzLCBhbmQgZm9yZWNhc3RpbmcsIGFzIG11Y2ggYXMgaXQgY2hhbmdlcyBpbnRlcm5hdGlvbmFsLCBhbmRcclxuY3Jvc3MtaW5kdXN0cnkgdHJhbnNhY3Rpb25zLCB0aGVuIGFyZSB3ZSBmYWNlZCB3aXRoIGEgc2ltaWxhciBkaWxlbW1hIGFzIHRoZSAmcXVvdDtub3ZlbHR5JnF1b3Q7LCBhbmQgZG91YmxlLWRlYWxpbmcsXHJcbm9mIG11bHRpLW5hdGlvbmFscyBvZiB0aGUgMTk5MHM/IE5vLCBiZWNhdXNlIGJsb2NrY2hhaW4gcmVuZGVycyBvcmdhbml6YXRpb25zLCBldmVuIHRob3NlIHdpdGggYSBzcG90dHkgcGFzdCwgaW50b1xyXG50cmFuc3BhcmVudCwgZGVtb2NyYXRpYywgZWZmaWNpZW50LCBzZWN1cmUgYW5kIGVhc2lseSBzY3J1dGluaXplZC48L3A+XHJcblxyXG48cD5BZnRlciBhbGwsIHdpdGhvdXQgdHJhbnNwYXJlbnQgcHJvb2YsIGhvdyBlbHNlIHdvdWxkIEkga25vdyBteSBiYW5hbmFzIGFyZSB0aGUgJnF1b3Q7cHVyYSB2aWRhJnF1b3Q7IENvc3RhIFJpcXVlJm50aWxkZTtcclxub25lcz8gTW9yZSBpbXBvcnRhbnRseSwgd2hhdCB3YXMgdGhlIGNhcmJvbiBmb290cHJpbnQgb2YgdGhhdCBiYW5hbmEmIzM5O3Mgam91cm5leSBmcm9tIGl0cyBuYXRpdmUgc29pbCB0byBteSBicmVha2Zhc3RcclxudGFibGU/IE5ldyBibG9ja2NoYWluIGNvbXBhbmllcyBsaWtlXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5wcm92ZW5hbmNlLm9yZy9cIj5Qcm92ZW5hbmNlLm9yZzwvYT4sXHJcbjxhIGhyZWY9XCJodHRwOi8vd3d3LnNrdWNoYWluLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5za3VjaGFpbjwvYT4sXHJcbjxhIGhyZWY9XCJodHRwOi8vd3d3LmJsb2NrdmVyaWZ5LmlvL1wiPmh0dHA6Ly93d3cuYmxvY2t2ZXJpZnkuaW8vPC9hPiBhcmUgYSBmZXcgbm90aWNlYWJsZSBnYW1lLWNoYW5nZXJzLiBTbywgZm9yIGJhbmFuYXMgbm90IGJhY2tlZCBieSBtYXRoZW1hdGljYWwgcHJvb2ZzLFxyXG5JIHJlYWxseSBoYXZlIHRvIGFzayBteXNlbGYsIGlzIGl0XHJcbjxpPnJlYWxseTwvaT4gYW4gYXV0aGVudGljIEZhaXIgVHJhZGUgYmFuYW5hPzwvcD5cclxuXHJcbjxwPlRyYW5zYWN0aW9ucyBhcmUgaGFyZGx5IHZhbHVhYmxlIGluIHRoZSBwcm9kdWN0cyB0aGVtc2VsdmVzLCBpZiByZW1vdmVkIGZyb20gdGhlIHZhbHVlIG9mIHRoZVxyXG48aT50cmFuc2FjdGlvbiBwZXIgc2U8L2k+LiBJbnRlcm5hdGlvbmFsIHN1cHBseSBjaGFpbiB0cmFuc2FjdGlvbnMsIGJ5IHZpcnR1ZSBvZiBhIHJlY2VudGx5IHBvc3NpYmxlIGRlY2VudHJhbGl6ZWQsXHJcbnBlcm1hbmVudCByZWNvcmQgYW5kIG1vbml0b3JpbmcsIGhhdmUgYmVndW4gdG8gbWFrZSBpbnJvYWRzIGluIGFncmljdWx0dXJlLCBwZXRyb2xldW0sIHBoYXJtYWNldXRpY2FscywgZm9vZC1zdXBwbHlcclxuYW5kIG90aGVyIG11bHRpLXN0YWdlIGluZHVzdHJpZXMuPC9wPlxyXG5cclxuPHA+SWYgY29ycG9yYXRlIGFuZCBnb3Zlcm5tZW50YWwgdHJhbnNhY3Rpb25zIGFyZSB0byBiZSBtYWRlIHB1YmxpYy0tbWFueSBiZWFyaW5nIGVudGVycHJpc2Ugb3IgU3RhdGUgc2VjcmV0cywgdGhlblxyXG53aWxsIGZvcmVjYXN0aW5nIGFsc28gZ28gdGhlIHdheSBvZiBiaXJkcz8gUG9zc2libHkuIE9ubGluZSBwbGF0Zm9ybXMgbGlrZSBBdWd1clxyXG48c3VwIGlkPVwiMjAtOFwiPjg8L3N1cD5hcmUgY3JlYXRpbmcgZ2xvYmFsLCBkZWNlbnRyYWxpemVkIHByZWRpY3Rpb24gbWFya2V0cywgaW4gZG9tYWlucyBsaWtlIHNwb3J0cyBiZXR0aW5nLCBmaW5hbmNpYWwgbWFya2V0c1xyXG5zcGVjdWxhdGlvbiBhbmQgc28gZm9ydGguIEFybWVkIHdpdGggdmFzdCwgdHJhbnNwYXJlbnQga25vd2xlZGdlLCB0aGUgZXZlcnlkYXkgcGVyc29uIGNhbiBub3cgYWNjZXNzIHRoZSB3aGltcyBhbmRcclxucG93ZXIgb2YgQWVvbHVzLCBhbmQgZm9yZWNhc3RpbmcgdGhlIHdpbmRzIG9mIEZvcnR1bmUuPC9wPlxyXG5cclxuPHA+XHJcbjxzdHJvbmc+VklJLiBSZWludmVudGluZyBHb3Zlcm5tZW50ICZhbXA7IERlbW9jcmFjeTwvc3Ryb25nPlxyXG48YnIgLz4gLi4udG8gYmUgY29tcGxldGVkLi4uPC9wPlxyXG5cclxuPHA+MS5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LnByb3ZlbmFuY2Uub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwczovL3d3dy5wcm92ZW5hbmNlLm9yZy8gPC9hPlxyXG48L3A+XHJcblxyXG48cD4yLlxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5za3VjaGFpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IGh0dHA6Ly93d3cuc2t1Y2hhaW4uY29tLyA8L2E+XHJcbjwvcD5cclxuXHJcbjxwPjMuXHJcbjxhIGhyZWY9XCJodHRwOi8vd3d3LmJsb2NrdmVyaWZ5LmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwOi8vd3d3LmJsb2NrdmVyaWZ5LmlvLyA8L2E+XHJcbjwvcD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMjFcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjdG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoXCI+T1VSIERBSUxZIFRFQ0g8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+RGF0YSBBbmFseXNpcyBNdXNpbmc8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDIxLCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkZhY2Vib29rLUZyaWVuZGx5IFRoaXJkLUdlbmVyYXRpb24gRGF0YSBTdHJ1Y3R1cmVzPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5Ub2RheSwgSSYjMzk7bSBnb2luZyB0byB3cml0ZSBhYm91dCBkYXRhIHN0cnVjdHVyZXMsIGFuZCBjaGFsbGVuZ2VzIHRoYXQgZmFjZSBWaXRhbGlrIEJ1dGVyaW4gYW5kIG90aGVyIGJsb2NrY2hhaW5cclxuYXJjaGl0ZWN0cy4gJiMzOTsgTm93LCB3aHkgaW4gdGhlXHJcbjxpPndvcmxkPC9pPiB3b3VsZCBJIG9yIGFueW9uZSBlbHNlIGNhcmUgYWJvdXQgb29oLCBtZXJnZSBzb3J0cywgYnViYmxlIHNvcnRzLCBjbGFzc2lmaWNhdG9yeSB0cmVlcywgYW5kIHRoZSBhZHZlbnRcclxub2YgYSB0aGlyZCBmb3JtIG9mIGRhdGEgc3RydWN0dXJlPzwvcD5cclxuXHJcbjxwPlRvZGF5LCB3ZSBsaXZlIGluIGFuIGV2ZXIgbW9yZSByZWxhdGlvbmFsIHdvcmxkLiBXaXRoIGFsbCBvdXIgdGVjaG5vbG9neSwgd2UganVzdCBjYW4mIzM5O3Qgd2FpdCB0byBoZWFyIHRoZSBsYXRlc3RcclxuZ29zc2lwIGFib3V0IHNpc3RlciBCZWNreSYjMzk7cyBCb3lmcmllbmQmIzM5O3MgQnJvdGhlciYjMzk7cyBGcmllbmQgdGhhdFxyXG48aT5hbHNvPC9pPiBnb3QgdG8gbWVldCBTaGFraXJhLiBHb3NzaXAgdG8gb25lIHBlcnNvbiBpcyBhIHZhbHVhYmxlIGFzc2V0IHRvIHRoZSBkYXRhIGFuYWx5c3QuIEJlY2F1c2UsIGhvdyBlbHNlIGNvdWxkXHJcbmFuIGFsZ29yaXRobSBkcmF3IHNpbXVsdGFuZW91cyBjb25jbHVzaW9ucyBhYm91dCB0d28gZnJpZW5kcyB0aGF0ICZxdW90O2xpa2VkJnF1b3Q7IHRoZSBzYW1lIFNhbXN1bmcgVlIsIGFuZCB0aGF0XHJcbnRoZXkgYXJlIGJvdGggbG9jYXRlZCBuZWFyIEJlc3QgQnV5LiBUaGFua3MgdG8gY2xhc3NpZmljYXRvcmlhbCB3aXNkb20gb2YgQUkgJmFtcDsgcGxhaW4gbWFjaGluZS1sZWFybmluZz88L3A+XHJcblxyXG48cD5UaGVzZSByZWxhdGlvbmFsIHF1ZXJpZXMgYXJlIHNpbXBseSB0b28gZGlmZmljdWx0IGZvciByZWxhdGlvbmFsLCByb3cgJmFtcDsgY29sdW1uIFNRTCBkYXRhIHN0cnVjdHVyZXMuIEluIGZhY3QsXHJcbm1hbnkgcXVlcmllcyBhcmUgaW1wb3NzaWJsZSwgZHVlIHRvIHVucHJlc2NpZW50IGRhdGFiYXNlIHNjaGVtYSBhcmNoaXRlY3R1cmVzLiBOZXh0LCB3aXRoIHRoZSBuZWVkIHRvICZxdW90O29iamVjdGlmeSZxdW90O1xyXG5kYXRhIGludG8gbm9uLXJlbGF0aW9uYWwgb2JqZWN0cywgcmF0aGVyIHRoYW4gYW4gYW50aXF1YXRlZCwgcmlnaWQgcm93LWFuZC1jb2x1bW4gZGVzaWduLiBUaHVzLCB0aGUgc2Vjb25kIG1ham9yXHJcbnR5cGUgb2YgZGF0YSBzdHJ1Y3R1cmUgaXMgbW9yZSBmbGV4aWJsZSBhbmQgYWRlcHQgaW4gZmluZGluZyB0aGVzZSByZWxhdGlvbmFsIHF1ZXJpZXMgdGhhdCBhcmUgZXZlciBtb3JlIGluIHZvZ3VlLlxyXG5Ib3dldmVyLCB0aGUgY3J5c3RhbC1saWtlLCBwcmlzdGluZSBub24tcmVsYXRpb25hbCwgTm8tU1FMIGRlc2lnbnMgcXVpY2tseSB0dXJuIHRvIHNwYWdoZXR0aSwgYW5kIGFyZSBwb29yIGZvciBzY2FsYWJpbGl0eS5cclxuQmV0d2VlbiBhIHJvY2sgYW5kIGEgaGFyZCBwbGFjZSwgYSB0aGlyZCBkYXRhIHN0cnVjdHVyZSBoYXMgZW1lcmdlZCBpbiByZWNlbnQgeWVhcnMuPC9wPlxyXG5cclxuPHA+R3JhcGggRGF0YSBTdHJ1Y3R1cmVzXHJcbjxzdXA+Mjwvc3VwPiBhbGxvdyBkYXRhIHF1ZXJpZXMgdGhhdCBoYWQgb3RoZXJ3aXNlIGJlZW4gaW1wb3NzaWJsZSB0byBjYXB0dXJlIGluIGFuIGVudGl0eSByZWxhdGlvbnNoaXAgZGlhZ3JhbS4gVGhlXHJcbmlkZWFsIGV4YW1wbGUgdG8gY2xhcmlmeSBpcyB0aGUgbWFubmVyIHRoYXQgdGhlIFN3aXNzIGJhbmtzJiMzOTsgYWNjb3VudHMgd2VyZSBkaXNjb3ZlcmVkIHRvIGJlIGhpZGluZyB2YXN0IGFtb3VudHNcclxub2YgaGlkZGVuIHRheGVzLCBldGMuIFRoZSBjb3Zlci11cCB3YXMgc28gd2VsbC1jb25zdHJ1Y3RlZCB0aGF0IG5vdCB1bnRpbCBuZXcsIGdyYXBoIGRhdGFiYXNlIHF1ZXJpZXMgZGlzY292ZXJlZFxyXG5wYXR0ZXJucyBvZiBtb25leSBmbG93XHJcbjxzdXA+MTwvc3VwPjo8L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+VGhlIGRhdGEgd2FzIHRoZW4gdHVybmVkIGludG8gYSBncmFwaCBmb3JtYXQgdG8gZGV0ZWN0IHRoZW4gZmluZS10dW5lIHRoZSBjb25uZWN0aW9ucyBiZXR3ZWVuIHRoZSBub2Rlcy4gVGhlIFN3aXNzXHJcbkxlYWsgaGVsZCBhcm91bmQgNjAsMDAwIGZpbGVzIHRoYXQgY29udGFpbmVkIGluZm9ybWF0aW9uIGFib3V0IG92ZXIgMTAwLDAwMCBjbGllbnRzIGluIDIwMyBjb3VudHJpZXMsIHdoaWNoIG1lYW5zXHJcbnRoYXQgdGhlIHJlc3VsdGluZyBncmFwaCBkYXRhYmFzZSBoYWQgbW9yZSB0aGFuIDI3NSwwMDAgbm9kZXMgd2l0aCA0MDAsMDAwIHJlbGF0aW9uc2hpcHMgYW1vbmcgdGhlbS48L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+QnkgYmVpbmcgYWJsZSB0byBlYXNpbHkgdmlzdWFsaXNlIHRoZSBuZXR3b3JrcyBhcm91bmQgY2xpZW50cyBhbmQgYWNjb3VudHMsIHRoZSByZXBvcnRlcnMgZm91bmQgbWFueSBtb3JlIGNvbm5lY3Rpb25zXHJcbnRoYW4gdGhleSBoYWQgYmVmb3JlLCB3aGljaCBsZWFkIHRvIHRoZSBTd2lzcyBMZWFrcyByZXZlbGF0aW9ucyBzb29uIGJlaW5nIHNoYXJlZCB3aXRoIHRoZSBwdWJsaWMgYW5kIHJlZ3VsYXRvcnNcclxuYWNyb3NzIHRoZSBnbG9iZS48L3A+XHJcblxyXG48cD5BbmQgeW91IHRob3VnaHQgdGhhdCBwbGFnaWFyaXNtLWRldGVjdGluZyBzb2Z0d2FyZSB3YXMgaW1wcmVzc2l2ZSBmb3IgY29tcGxleGl0eSEgVGhlIGJlYXV0eSBvZiB0aGlzIG5ld2x5IGF2YWlsYWJsZVxyXG5zb2Z0d2FyZSAoZXZlbiBNaWNyb3NvZnQganVtcGVkIG9uIGJvYXJkIGluIHJlY2VudCB5ZWFycykgbWVhbnMgdGhhdCBzb2Npb2xvZ2lzdHMsIGVjb25vbWlzdHMgY2FuIGJlZ2luIHRvIG1ha2VcclxuYmV0dGVyIGhlYWR3YXkgaW4gdGhlIHdheSB0aGF0IG91ciBtYW55IGludGVyYWN0aW9ucyBiZWNvbWUgbW9yZSBjb21wbGV4IHdpdGggbW9yZSBkYXRhLiBSZW1lbWJlciwgaW4gdGhlIHBhc3QgdGVuXHJcbm1pbnV0ZXMsIG1vcmUgZGF0YSBpbmZvcm1hdGlvbiB3YXMganVzdCBwcm9kdWNlZCB0aGFuIG1vc3Qgb2YgaHVtYW4gaGlzdG9yeSEgVGh1cywgbmV3IGFuZCB1cGNvbWluZyBuZWVkcyBpbiBkb21haW5zXHJcbmxpa2UgY29udGVudCBtYW5hZ2VtZW50ICZhbXA7IGFjY2VzcyBjb250cm9sLCBnZW8tcm91dGluZyAocHVibGljIHRyYW5zcG9ydGF0aW9uKSwgZ2VuZSBzZXF1ZW5jaW5nLCBiaW8taW5mb3JtYXRpY3MsXHJcbmFuZCBzbyBvbi4gU28sIGFzIHRlY2hub2xvZ3kgdGFrZXMgdXMgZm9yd2FyZCwgYW5kIHdlIG1ha2Ugb3VyIGNvbnNpZGVyYXRpb25zLCBsZXQmIzM5O3Mgc3RpY2sgYnkgdGhlIGdvbGRlbiBydWxlc1xyXG5vZiBwYXJhbGxlbCBwcm9jZXNzaW5nLCBzY2FsYWJpbGl0eSwgYW5kLCBub3csIGdyYXBoLW5ldHdvcmsgbWluZGVkbmVzcyBmb3IgdGhlIG5ldyBkYXRhIHN0cnVjdHVyZXMsIGFuZCBzY2hlbWEsXHJcbm9mIHRoZSBFcmEhPC9wPlxyXG5cclxuPHA+MS5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdsb2JhbGJhbmtpbmdhbmRmaW5hbmNlLmNvbS9ob3ctYS1ncmFwaC1kYXRhYmFzZS11bmVhcnRoZWQtbWFqb3ItZmluYW5jaWFsLWltcHJvcHJpZXRpZXMvXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj4gaHR0cHM6Ly93d3cuZ2xvYmFsYmFua2luZ2FuZGZpbmFuY2UuY29tL2hvdy1hLWdyYXBoLWRhdGFiYXNlLXVuZWFydGhlZC1tYWpvci1maW5hbmNpYWwtaW1wcm9wcmlldGllcy8gPC9hPlxyXG48L3A+XHJcblxyXG48cD4yLlxyXG48YSBocmVmPVwiaHR0cHM6Ly9uZW80ai5jb20vYmxvZy9hbmFseXppbmctcGFuYW1hLXBhcGVycy1uZW80ai9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5CeSBiZWluZyBhYmxlIHRvIGVhc2lseSB2aXN1YWxpc2UgdGhlIG5ldHdvcmtzIGFyb3VuZCBjbGllbnRzIGFuZCBhY2NvdW50cywgdGhlIHJlcG9ydGVycyBmb3VuZCBtYW55IG1vcmUgY29ubmVjdGlvbnNcclxuICB0aGFuIHRoZXkgaGFkIGJlZm9yZSwgd2hpY2ggbGVhZCB0byB0aGUgU3dpc3MgTGVha3MgcmV2ZWxhdGlvbnMgc29vbiBiZWluZyBzaGFyZWQgd2l0aCB0aGUgcHVibGljIGFuZCByZWd1bGF0b3JzXHJcbiAgYWNyb3NzIHRoZSBnbG9iZS4gPC9hPlxyXG48YnIgLz4gT3RoZXIgbWFqb3IgdmVuZG9ycyBpbiBncmFwaCBkYXRhIHN0cnVjdHVyZXMgYmFzZWQgb24gTmVvNGo6IE9yaWVudERCLCBBcmFuZ29EQiwgVGl0YW4sIG1vbmdvREIsIENvbXBsZXhpYmxlIFN0YXJkb2csXHJcbmFuZCBGcmFueiBBbGxlZ3JvR3JhcGguPC9wPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJmZWIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMi0yMVwiPlxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiN0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2hcIj5PVVIgREFJTFkgVEVDSDwvaDU+XHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5NdXNpbmcgQmxvY2tjaGFpbjwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMjIsIDIwMTg8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+TGFuZ3VhZ2VzPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5XaGlsZSBJJiMzOTt2ZSBoYWQgYmxvY2tjaGFpbi1yZWxhdGVkIHRvcGljcyBvbiB0aGUgbWluZCBsYXRlbHksIGl0IHNlZW1zIEkgY2FuJiMzOTt0IGVzY2FwZSBpdCBhcyBJIGJyb2FjaCBuZXcgZmllbGRzLS1ibG9ja2NoYWluXHJcbmlzIGV2ZXJ5d2hlcmUhIFdlbGwsIEkgaGFkIGJlZ3VuIG15IGJsb2cgd2l0aCBpbnRlbnRpb25zIGFib3V0IHRoZSBhY2NlbGVyYXRlZCBzcGVlZCBvZiBsYW5ndWFnZSBhbmQgc3ludGF4IGZvcm1hdGlvbixcclxuYW5kIHRoZSBjdXJpb3VzIHBoZW5vbWVub24gSSYjMzk7ZCBjYWxsLCBmb3IgbGFjayBvZiBhIGJldHRlciB3b3JkIG9yIG9yIG15IG93biByZWFkaW5nLCAmcXVvdDtkZWNsYXJhdGl2ZS1zeW50YXgtbWVyZ2luZyZxdW90Oy5cclxuVGhpcyBpbnZvbHZlcyB0aGUgY3VyaW91cywgYW5kIGxhcmdlbHkgdW5rbm93biwgZ3Jvd3RoIG9mIEphdmFTY3JpcHQgc2NyaXB0aW5nIGxhbmd1YWdlIGludG8gYWxtb3N0IGV2ZXJ5IGRvbWFpblxyXG5vZiB3ZWIgYXBwcywgZGF0YSBhbmFseXNpcywgYW5kIGV2ZW4gdGhlIGJvdW5kcyBvZlxyXG48aT5Mb2dpYzwvaT4gaXRzZWxmLiBUaG91Z2ggSSB3b24mIzM5O3Qgc3VibWl0IG15IHJlYWRlcnMgdG8gYSBoaXN0b3J5IG9mIGEgbGFuZ3VhZ2UsIHN1ZmZpY2UgaXQgdG8gc2F5IHRoYXQsICZxdW90O0lmXHJcbmEgY2VydGFpbiBhbGdvcml0aG0sIGRldmljZSwgb3Igb2JqZWN0IGlzIHByb2dyYW1tYWJsZSwgdGhlbiBpdCB3aWxsIGV2ZW50dWFsbHkgYmUgcHJvZ3JhbW1lZCBpbiBKYXZhU2NyaXB0LiZxdW90OzwvcD5cclxuXHJcbjxwPldpdGhvdXQgZ2V0dGluZyBpbnRvIHRlY2huaWNhbHMsIEkmIzM5O2xsIGluc3RlYWQgdXNlIGEgcGVyZmVjdCBtZXRhcGhvci0tdGhlIG1hbm5lciBieSB3aGljaCBFbmdsaXNoIG1lcmdlZCB3aXRoXHJcbkZyZW5jaCwgYmVnaW5uaW5nIHdpdGggdGhlIGNvbnF1ZXN0cyBvZiBXaWxsaWFtIG9mIE5vcm1hbmR5LCBhcm91bmQgMTA5NiBvbndhcmQuIEFsbW9zdCBhIHRob3VzYW5kIHllYXJzIGxhdGVyLFxyXG53ZSBjYW4gc2VlIGhvdyBFbmdsaXNoIGdyYW1tYXIgaW5oZXJpdGVkIGl0JiMzOTtzIEFuZ2xvLVNheG9uIExpbmd1aXN0aWMgcm9vdHMsIGFsb25nIHdpdGggdGhlIGNvcmUgdm9jYWJ1bGFyeTtcclxuVGhlbiwgYXMgRW5nbGlzaCB2b2NhYnVsYXJ5IG1vdmVzIHBhc3QgdGhlIGZpcnN0IGZldyB0aG91c2FuZCBjb3JlIHdvcmRzLCBlLmcuICZxdW90O21pbGsmcXVvdDsgb3IgJnF1b3Q7aG91c2UmcXVvdDtcclxuZnJvbSAmcXVvdDttZWxjaGUmcXVvdDsgb3IgJnF1b3Q7aGF1cyZxdW90OywgdGhlbiBtb3JlIHRoYW4gNzAlIG9mIEVuZ2xpc2ggVm9jYWJ1bGFyeSBpcyBkaXJlY3RseSBpbmhlcml0ZWQgZnJvbVxyXG5GcmVuY2gsIGUuZy4gJnF1b3Q7bGFjdG9zZSZxdW90OyBvciAmcXVvdDttYW5zaW9uJnF1b3Q7IGZyb20gJnF1b3Q7bGFpdCZxdW90OyBvciAmcXVvdDttYWlzb24mcXVvdDsuPC9wPlxyXG5cclxuPHA+U2ltaWxhcmx5LCB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIHdlYiBhbmQgb3JpZ2luYWwgYnJvd3NlcnMsIEphdmFTY3JpcHQsIGhhcyBzaW1pbGFybHkgbW9ycGhlZCBpbnRvIGEgbmV3IGxhbmd1YWdlIGNhbGxlZFxyXG5Tb2xpZGl0eSwgYnV0IGluIG9ubHkgYSBtaWNyby1mcmFjdGlvbiBvZiBFbmdsaXNoJiMzOTtzIHRpbWUuIFRoZSB1c3VhbCBGT01PIGxvZ2ljIHByb3BlbHMgY29kaW5nIGxhbmd1YWdlIHVzZSxcclxuZm9yIGV4YW1wbGUgRk9NTyBpbmR1Y2VkIE1pY3Jvc29mdCYjMzk7cyBmbGFnc2hpcCBUZXh0IEVkaXRvciwgVmlzdWFsIENvZGUsIHRvIGFkb3B0IGl0IHllYXJzIGFnby5cclxuPHN1cCBpZD1cIjIyLTFcIj4xPC9zdXA+IFRoZSBsYW5ndWFnZSBvZiBFdGhlcmV1bSBCbG9ja2NoYWluIGlzIFNvbGlkaXR5LCB3aGljaCBsaWtlIHRoZSBhYm92ZSBleGFtcGxlLCBoYXMgdHdvIHBhcmVudHMsIG9uZSBub24tbGVnaXRpbWF0ZS5cclxuSXQgaXMgaW4gYWxsIHJlc3BlY3RzIHRvdGFsbHkgSmF2YVNjcmlwdCwgeWV0IHdpdGggb2JqZWN0LW9yaWVudGVkIGVsZW1lbnRzIG9mIEMrKy4gRm9yIHRoZSBsYXlwZXJzb24sIGxldCYjMzk7c1xyXG5qdXN0IHNheSBTb2xpZGl0eSByZXNlbWJsZXMgYSAmcXVvdDtMaWdlciZxdW90OywgaW4gaXQgaXMgYXQgaXQmIzM5O3MgY29yZSBKYXZhU2NyaXB0LCB5ZXQgd2l0aCBpbmNyZWFzaW5nIHNvcGhpc3RpY2F0aW9uXHJcbmJhc2VkIG9uIEMrKyBsb2dpYywgaXRzIGhlYWQgYW5kIHRvcnNvIGhhcyBiZWd1biB0byByZXNlbWJsZSB0aGUgcG93ZXJmdWwgbWFjaGluZS1jb2RlIG9mIEMrKyBldmVyIG1vcmUuIEFuZCBpdFxyXG5pcyBhIGJlYXV0aWZ1bCwgYnV0IGN1cmlvdXMgcGhlbm9tb25lbm9uLjwvcD5cclxuXHJcbjxwPlxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5pYnRpbWVzLmNvLnVrL21pY3Jvc29mdC1hZGRzLWV0aGVyZXVtLWxhbmd1YWdlLXNvbGlkaXR5LXZpc3VhbC1zdHVkaW8tMTU1MjE3MVwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHA6Ly93d3cuaWJ0aW1lcy5jby51ay9taWNyb3NvZnQtYWRkcy1ldGhlcmV1bS1sYW5ndWFnZS1zb2xpZGl0eS12aXN1YWwtc3R1ZGlvLTE1NTIxNzE8L2E+XHJcbjwvcD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMjNcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjdG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoXCI+T1VSIERBSUxZIFRFQ0g8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+U29jaW9sb2d5IFRvbW9ycm93ITwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMjMsIDIwMTg8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+MS40IE1pbGxpb24gUmVhc29ucyBmb3IgbW9yZSBXb21lbiBpbiBUZWNoPC9oNj5cclxuPGEgaHJlZj1cIiMxOC0wMy0wOFwiIHJlbD1cInN0eWxlc2hlZXRcIj5CbG9nIGFkZHJlc3NlZCBhZ2FpbiBNYXJjaCA4LCAyMDE4IDwvYT5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj4xLjQgbWlsbGlvblxyXG48aT5uZXc8L2k+IGpvYnMgYnkgMjAyMDsgRW5kIG92ZXIgZW5kLCB5ZWFyIGFmdGVyIHllYXIsIHRoZSBjb21wdXRlciBwcm9ncmFtbWluZyBpbmR1c3RyeSBjb250aW51ZXMgdG8gYWRkIGFub3RoZXJcclxuMjAlIG1vcmUgam9icyBlYWNoIHllYXIsIGZvciB0aGUgbmV4dCBmaXZlIHllYXJzLiBUaGlzIGlzIHRoZSBvbmx5IGZpZWxkIHRoYXQgZGVtYW5kIG91dHN0cmlwcyB0aGUgc3VwcGx5LS1hbmQgaW5jcmVhc2luZ2x5XHJcbnNob3J0IHN1cHBseS4gU28gbXVjaCBzbywgdGhlIFVTIERlcGFydG1lbnQgb2YgTGFib3IgZm9yZWNhc3RzIFUuUy4gY2l0aXplbnMgd2lsbCBiZSBhYmxlIHRvIGZpbGwgMzklIG9mIHRob3NlIHBvc2l0aW9ucztcclxudGhlcmUgYXJlIG5vdCBlbm91Z2ggSW1taWdyYXRpb24gdmlzYXMgKGVzcGVjaWFsbHkgaW4gdGhlIFRydW1waWFuIGVyYSBvZiBpc29sYXRpb25pc20pIHRvIG1ha2UgdXAgdGhlIHJlc3QuPC9wPlxyXG5cclxuPHA+Jm5ic3A7PC9wPlxyXG5cclxuPHA+U28sIGhvdyBpcyBpdCB0aGF0IG9ubHkgMTQlIG9mIGZlbWFsZXMgaW4gdGhlIGVudGlyZSBmaWVsZCBvZiBjeWJlcnNlY3VyaXR5PyBTaWxpY29uIFZhbGxleSBpcywgYXQgaXRzIGJlc3QsIG9ic2NlbmVseVxyXG5vbmUtc2lkZWQuIEF0IEdvb2dsZSwgb25seSAxNyUgb2YgdGhlIGNvbXBhbnkmIzM5O3MgdGVjaCBqb2JzIGFyZSBmaWxsZWQgYnkgd29tZW4uIEZhY2Vib29rIHdvbWVuIHN0YWZmIG9ubHkgMTUlXHJcbm9mIHRlY2ggam9icywgYW5kIFR3aXR0ZXI/IDEwJSBmZW1hbGUuIFRoZSBmaWd1cmVzIG9uIHdvbWVuIGluIGNvbXB1dGVyIHNjaWVuY2UgYWNyb3NzIHRoZSBuYXRpb24sIGFjcm9zcyB0aGUgZW50aXJlXHJcbmluZHVzdHJ5IGFyZSBub3QgaW1wcm92aW5nLCBidXRcclxuPGk+ZGVjbGluaW5nPC9pPj9cclxuPHN1cD4xPC9zdXA+XHJcbjwvcD5cclxuXHJcbjxwPk9mIGNvdXJzZSwgd2UmIzM5O3ZlIGhlYXJkIHRoZXNlIHN0YXRpc3RpY3MgZnJvbSBhbnkgZ2l2ZW4gaGVhZGxpbmUsIGFuZCBpbiB0aGUgaGFsbHMgYWNyb3NzIHRoZSB1bml2ZXJzaXR5IGxhbmRzY2FwZSxcclxuc3RhcnRpbmcgd2l0aCBXb21lbiBpbiBTVEVNIChTY2llbmNlLCBUZWNoLCBFbmdpbmVlcmluZywgTWF0aGVtYXRpY3MpIHByb2dyYW1zLlxyXG48c3VwPjM8L3N1cD4gWWV0LCB3aHksIHdpdGggc28gbXVjaCBtb25leSwgc28gbWFueSBwcm9ncmFtcywgc28gbWFueSBub24tZ292ZXJubWVudGFsLCBub24tcHJvZml0IGVmZm9ydD88L3A+XHJcblxyXG48cD5JIGFyZ3VlIHRoYXQgdGVjaFxyXG48aT5jbGltYXRlIDwvaT4gaXMgZGlyZWN0bHkgdG8gYmxhbWUuIFdobyB0aGVuPyBOb3QgYSBwZXJzb24sIGJ1dCBwcmluY2lwbGVzIGFyZSB0byBibGFtZS4gQ3VsdHVyZS0tb2Z0ZW4gZGVmaW5lZCBhc1xyXG5zaGFyZWQgYmVsaWVmcywgbm9ybXMsIGxhbmd1YWdlIGFuZCBiZWhhdmlvcnMtLWNhbiBoYXJkbHkgYmUgY2hhbmdlZCwgYnV0IGl0IGNhbiBiZSB1bmRlcnN0b29kLlxyXG48YnIgLz4gVGhlcmUgaXMgYSBib29rLCBjYWxsZWQgJnF1b3Q7UHJvZ3JhbSBvciBiZSBQcm9ncmFtbWVkXHJcbjxzdXAgaWQ9XCIyNC00XCI+NDwvc3VwPlxyXG48L3A+XHJcbiwgYnkgd2hpY2ggdGhlIGF1dGhvciBleHBsYWlucyBzb2NpYWwgY29uc2VxdWVuY2VzIG9mIGEgZGljaG90b21pemVkIHNvY2lldHktLWJldHdlZW4gdGhvc2UgdGhhdCBtYW5pcHVsYXRlIHRoZSBlbnZpcm9ubWVudFxyXG5hcm91bmQgdGhlbSwgd2hldGhlciBhdXRvbWF0aW5nIHRhc2tzIGF0IHdvcmssIG9yIHNpbXBseSBmaXhpbmcgYSBzaW1wbGUgc29mdHdhcmUgYnVnLCBieSBhZGRpbmcgYSBjb21tYS4gVGhpcyBsaXRlcmFjeVxyXG5vZiB0aGUgQ3VycmVudCBFcmEgaXMgYWtpbiB0byB0aGUgMjYtbGV0dGVyIGFscGhhYmV0IG9mIHdyaXR0ZW4gc2VudGVuY2VzIGFuZCBwYXJhZ3JhcGhzLCBhbmQtLW5vdCB0byBiZSB0YWtlbiBmb3JcclxuZ3JhbnRlZC0taXMgdGhlIGV4Y2x1c2l2ZSBmb3JtIG9mIGNvbW11bmljYXRpb24sIG91dHNpZGUgb2YgYSAxMDAtZm9vdCBwZXJpbWV0ZXIsIHVwIHVudGlsIDE1MCB5ZWFycyBhZ28uIEtub3dsZWRnZVxyXG5pcyBub3QgcG93ZXIsIHRoZSBjb21tdW5pY2F0aW9uIG9mIGtub3dsZWRnZSBpcyBwb3dlci5cclxuXHJcbjxwPiZuYnNwOzwvcD5cclxuXHJcbjxwPkkgYXJndWUgdGhhdCB0b2RheSwgdGhlIHBvd2VyIGlzIHRvIHByb2dyYW0gb25lIGFwcGxpY2F0aW9uIHByb2dyYW1taW5nIGludGVyZmFjZSAoQVBJKSB0byB0YWxrIHRvIGFub3RoZXIgQVBJLiBJblxyXG5vdGhlciB3b3JkcywgdGhlIGFiaWxpdHkgdG8gZGlyZWN0bHkgY29tbXVuaWNhdGUgd2l0aCBzb2Z0d2FyZSBhdCB0aGUgY29tbWFuZC1saW5lIGlzIG5vdCBub3cgYSByZXF1aXNpdGUgc2tpbGwsXHJcbmJ1dCBwcm9tb3Rpb25zIHdvdWxkIG5vdCBlc2NhcGUgdGhpcyBuZWNlc3NpdHkhIFNvLCBub3cgcmV2ZXJ0aW5nIGJhY2sgdG8gdGhlIHN1YmplY3Qgb2Ygd29tZW4gaW4gdGVjaCwgQW1lcmljYW5cclxubGVhZGVyc2hpcCBpcyBpbiBkZWVwIHBlcmlsIHdpdGhvdXQgbW9yZSBmZW1hbGUgaW5zaWdodC4gSSB3aWxsIGZpbmlzaCBieSBjaXRpbmcgdGhhdCBBcmVzLCB0aGUgdmlvbGVudCwgdW50YW1lZFxyXG5HcmVla1xyXG48aT5nb2Qgb2Ygd2FyPC9pPiwgY2Fubm90IGFsd2F5cyBkcml2ZSB0aGUgQ2FwaXRhbGlzdCBlbmdpbmU7IGJlY2F1c2UgU2hlLCBBdGhlbmEsIHRoZVxyXG48aT5nb2RkZXNzIG9mIGludGVsbGlnZW5jZTwvaT4gcmVwcmVzZW50cyB0cnVlIHN0cmF0ZWd5ITwvcD5cclxuXHJcbjxwPjEuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5odWZmaW5ndG9ucG9zdC5jb20vMjAxNS8wMy8yNy93b21lbi1pbi10ZWNoX25fNjk1NTk0MC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuaHVmZmluZ3RvbnBvc3QuY29tLzIwMTUvMDMvMjcvd29tZW4taW4tdGVjaF9uXzY5NTU5NDAuaHRtbDwvYT5cclxuPC9wPlxyXG5cclxuPHA+Mi5cclxuPGEgaHJlZj1cImh0dHBzOi8vZmFpcnlnb2Rib3NzLmNvbS9hcnRpY2xlcy93b21lbi1pbi10ZWNoLWZhY3RzLWZpZ3VyZXMtYW5kLXBlcmNlbnRhZ2VzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9mYWlyeWdvZGJvc3MuY29tL2FydGljbGVzL3dvbWVuLWluLXRlY2gtZmFjdHMtZmlndXJlcy1hbmQtcGVyY2VudGFnZXM8L2E+XHJcbjwvcD5cclxuXHJcbjxwPjMuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5hYXV3Lm9yZy9yZXNlYXJjaC93aHktc28tZmV3L1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LmFhdXcub3JnL3Jlc2VhcmNoL3doeS1zby1mZXcvPC9hPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTI0XCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI3RvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaFwiPk9VUiBEQUlMWSBURUNIPC9oNT5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5GZWIgMjQtMjUsIDIwMThcclxuPGJyIC8+IFdlZWtlbmRcclxuPC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkpveXMgb2YgQXV0b21hdGlvbjwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+V2hpbGUgY29kaW5nIHVwIGEgYmV0dGVyIHNoZWxsIGZvciB0aGlzIHdlYnNpdGUsIEkgdGhvdWdodCBpdCYjMzk7cyByZW1hcmthYmxlIGhvdyBvdXIgbGl2ZXMgZ2V0IGVhc2llciBhbmQgZWFzaWVyXHJcbndpdGggZWFjaCBwYXNzaW5nIHllYXIgb2YgdGVjaC4gVXNpbmcgSmF2YVNjcmlwdC0tdGhlIHByaW1vcmRpYWwgd2ViLWNvZGluZyBsYW5ndWFnZS0tSSBtYXJ2ZWwgYXQgdGhlIGNvbnZlbmllbmNlXHJcbm9mIGRlbGVnYXRpbmcgbXVuZGFuZGUgY29kaW5nIHN0dWZmIHRvIHRhc2tydW5uZXJzLCBsaWtlXHJcbjxpPkd1bHA8L2k+LS1hIHByb2dyYW1tYWJsZSBwYWNrYWdlIG1hbmFnZXIgdGhhdCAmcXVvdDtidW5kbGVzJnF1b3Q7IHVwIHRoZSBsaWJyYXJpZXMgdG8gYmUgdXNlZCBpbiB0aGUgYXBwLiBJdCBpc1xyXG50cnVseSBhIGpveSE8L3A+XHJcblxyXG48cD5JIHdyaXRlIGZvdXIgc3R5bGluZ1xyXG48aT5mdW5jdGlvbnM8L2k+LCB3aXRoIGFib3V0IDE2XHJcbjxpPnZhcmlhYmxlczwvaT4gYW5kIHZvaWwmYWdyYXZlOyEgSSBmaW5pc2ggaW4gMyBob3VycyB3aGF0IHdvdWxkIGhhdmUgdGFrZW4gbWUgMTUgaG91cnMsIHRoZW4gYW5vdGhlciA1IGhvdXJzIGEgbW9udGhcclxuZm9yIHVwa2VlcC4gSW5zdGVhZCwgbm93LCBpdCYjMzk7cyBhcyB0aG91Z2ggSSB3aW5kIHVwIHRoZSBjbG9jaywgYW5kIG5lZWQgb25seSBwZXJpb2RpY2FsbHkgY2hlY2ssIGFuZCBwZXJoYXBzXHJcbnVwZGF0ZSBhIHZhcmlhYmxlIG9yIHR3byAuLi4gVGVjaG5vbG9neS4gSSYjMzk7bSBndXNoaW5nIGZvciBqb3kuPC9wPlxyXG5cclxuPHA+VGhpcyB3YXMgbWVyZSBKYXZhU2NyaXB0LS13aXRoIGEgdHJ1bHlcclxuPGk+VHVyaW5nIENvbXBsZXRlPC9pPi0tcGFuLWFsZ29yaXRobSBzdGF0dXMtLWxhbmd1YWdlcywgdGhlIHBvc3NpYmlsaXRpZXMgYXJlIDEwMC1mb2xkIHdpdGggUHl0aG9uIGxhbmd1YWdlIGxpYnJhcnlcclxuY29sbGVjdGlvbjsgdGhpcyBsaWJyYXJ5IGNvbGxlY3Rpb24gaW5jbHVkZXMgTkFTQSBtb2R1bGVzLCBtYXRoZW1hdGljYWwgcHJvb2ZzLCBhbmQgbGltaXRsZXNzIHVzZXMgZnJvbSB3ZWItc2NyYXBpbmdcclxuZm9yIHVuc3RydWN0dXJlZCBkYXRhIHRvIGFuIGV4Y2VsbGVudCBkYXRhIHZpc3VhbGl6YXRpb24gY29sbGVjdGlvbi4gU29tZXRpbWVzIEkgZmVlbCBsaWtlIEkmIzM5O20gaW4gdGhlIExpYnJhcnlcclxub2YgQ29uZ3Jlc3MsIGFuZCBiZXR0ZXIgeWV0IGJlY2F1c2UsIFBJUCwgdGhlIFB5dGhvbiBwYWNrYWdlIG1hbmFnZXIgYWN0cyBhbmQgYXV0b21hdGVzIGxpa2UgYSBjeWJvcmcgbGlicmFyaWFuLFxyXG5mb3IgbGFjayBvZiBiZXR0ZXIgaW1hZ2VyeS48L3A+XHJcblxyXG48cD5JIGp1c3QgaGF2ZSBzbyBtdWNoIGpveSB3YXRjaGluZyBhIHByb2plY3QgY29tZSB0byBsaWZlLCBhbmQgaXQmIzM5O3MgZXZlbiBhIGdyZWF0ZXIgZGVsaWdodCBpZiB0aGlzIHByb2plY3QgY29tZXNcclxudG8gbGlmZSBhbmQgc3RheXMgYWxpdmUsIHRocm91Z2ggdGhlIGpveXMgb2YgYXV0b21hdGlvbiE8L3A+XHJcblxyXG48cD4mbmJzcDs8L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImZlYiAxOC0wMyAtMTJcIiBpZD1cIjE4LTAyLTI2XCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI3RvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaFwiPk9VUiBEQUlMWSBURUNIPC9oNT5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPkZlYiAyNiwgMjAxODwvaDY+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyIGRhaWx5dGl0bGVcIj5DcnlwdG9jdXJyZW5jeSYjMzk7cyBDdW1iZXJzb21lIENhcmJvbiBGb290cHJpbnQ8L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkkgbXVzdCBjb25mZXNzIHRoYXQgb24gdGhlIHZlcnkgZGF5IHRoYXQgT3VyIERhaWx5IFRlY2ggQmxvZyBnZXRzIGFuIHVuZGVyLXRoZS1oZWFkIG1ha2Utb3ZlciBmb3Igc2VjdXJpdHkmIzM5O3Ncclxuc2FrZSwgSSB3cm90ZSB0aGUgbmV3IGZvcm1hdHRpbmcgZmlsZSByaWdodCBvdmVyIHRvZGF5JiMzOTtzIHBvc3QuIEFtYXppbmcsIGFuZCB0aGUgdHdvIG9jY3VycmVkIG5lYXJseSBzaW11bHRhbmVvdXNseVxyXG5hcyBJIHdvcmtlZCBvbiB0aGVtLCB0aGVpciBwYXRocyBjcm9zc2VkIGFuZCBwb29mLCBnb25lISBTYW1lIHBsYXRmb3JtLCBhbmQgSSBwYWlkIHRoZSBwcmljZSEgV2hldGhlciBJIGNoYW5nZSBteVxyXG53YXlzIGlzIHlldCB0byBiZSBzZWVuLCBidXQgSSBzaGFsbCBjb250aW51ZSB3aXRoIG15IG9yaWdpbmFsIHRoZW1lIGZvciB0aGUgZGF5LCBuYW1lbHksIFN1c3RhaW5hYmlsaXR5LCBhLmsuYS5cclxuQ2FyYm9uIEZvb3RwcmludC48L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+UG93ZXIgY29uc3VtcHRpb24gaXMgb25lIG9mIHRoZSBtYWpvciBjb3N0cyBvZiBiaXRjb2luIG1pbmluZywgYXMgZGVkaWNhdGVkIG1hY2hpbmVzIGNydW5jaCB0aGUgYWxnb3JpdGhtcyB0aGF0IGJ1aWxkXHJcbmEgcmVjb3JkIG9mIGV2ZXJ5IHNpbmdsZSBiaXRjb2luIHRyYW5zYWN0aW9uIGFuZCBhcmUgcmV3YXJkZWQgd2l0aCB0aW55IGZyYWN0aW9ucyBvZiBhIGJpdGNvaW4gZm9yIHRoZWlyIGVmZm9ydHMuXHJcbjxzdXAgaWQ9XCJleHBsYWluXCI+MTwvc3VwPlxyXG48L3A+XHJcblxyXG48cD5Ub2RheSBJIGhhdmUgYSBtaWxkIENyaXRpcXVlIGFuZCBQcmFpc2UgZm9yIHRoZSBibG9ja2NoYWluIHN1c3RhaW5hYmlsaXR5IHByb2JsZW0gY2F1c2VkIGJ5IHNreS1oaWdoIGVsZWN0cmljaXR5XHJcbmJpbGxzISBDb21wdXRlciBhbGdvcml0aG1zIGRvIHdhc3RlIGVsZWN0cmljaXR5LCBub3QgbGlrZSB5b3VyIFdpZGVzY3JlZW4uIE1vcmUgZWxlY3RyaWNpdHkgaXMgZ29iYmxlZCB1cCBieSBzbWFsbFxyXG5hbmQgbGFyZ2UgbWluaW5nIG9wZXJhdGlvbnMgaW4gbmVhcmx5IGV2ZXJ5IGNvdW50cnkgdGhhbiBzbWFsbCBuYXRpb25zIVxyXG48c3VwIGlkPVwiZWxlY3RyaWNpdHlcIj4xPC9zdXA+LiBFdGhlcmV1bSwgQml0Y29pbiBhbmQgYSBoYW5kZnVsIG9mIG90aGVyICZxdW90O1Byb29mLW9mLVdvcmsmcXVvdDsgZGVzaWducyByZXF1aXJlIGVsZWN0cmljaXR5IGJlY2F1c2VcclxudGhlIGludmVzdG1lbnQgaW4gZXF1aXBtZW50IGl0c2VsZiBpcyBpbnZlc3RtZW50LCBidXQgbW9yZSBpbXBvcnRhbnRseSwgdHdvLXdheSBpbmNlbnRpdmF0aW9uIGZvciBtaW5pbmcgZHJpdmVzXHJcbnRoZSBzeXN0ZW0sIGFuZCB0aGUgc2NhcmNpdHkgZGVtYW5kIHRocm91Z2ggZGlmZmljdWx0eSBjb21wdXRhdGlvbnMuPC9wPlxyXG5cclxuPHA+U28sIGlzIHRoZSBlbGVjdHJpY2l0eSBjb25zdW1wdGlvbiByZWFsbHlcclxuPGk+Y29ycmVsYXRlZDwvaT4gd2l0aCB0aGUgdmFsdWUsIHNjYXJjaXR5LCBvZiB0aGUgY3VycmVuY3k/IFllcy4gRGlnaWNvbm9taXN0LS1hIGNyeXB0b2N1cnJlbmN5IGFuYWx5c2lzIHNpdGVcclxuPHN1cFxyXG4gIGlkPVwiZGlnaWNvbm9taXN0XCI+Mzwvc3VwPiBlc3RpbWF0ZXNcclxuICA8aT5lYWNoPC9pPkV0aGVyZXVtIHRyYW5zYWN0aW9uIHJlcHJlc2VudHMgYSA0NSBLaWxvd2F0dC1ob3VyIG9mIGVsZWN0cmljaXR5JiMzOTtzIG1pbmluZy4gKEEgdmlzYSBjcmVkaXQgY2FyZCB0cmFuc2FjdGlvblxyXG4gIGlzIDAuMDA2NTEga1doLiBUaGUgZW50aXJlIEV0aGVyZXVtIGdsb2JhbCBibG9ja2NoYWluIGNvdWxkIGJlICZxdW90O3VzaW5nIGFzIG11Y2ggYXMgNC4yIFRlcmF3YXR0LWhvdXJzICh0V2gpLFxyXG4gIG9yIHNsaWdodGx5IG1vcmUgdGhhbiB0aGUgY291bnRyeSBvZiBDeXBydXNcclxuICA8c3VwIGlkPVwiY3lwcnVzXCI+MTwvc3VwPi4mcXVvdDsgU28sIGVsZWN0cmljaXR5IGNvbXBhcmlzb25zIGFyZSB0ZWxsaW5nLCBidXQgaG93IGRvZXMgdGhpcyByZWxhdGUgdG8gaXRzIGVudmlyb25tZW50IGltcGFjdCwgc3VzdGFpbmFiaWxpdHlcclxuICBpdHNlbGY/PC9wPlxyXG5cclxuPHA+Q2FyYm9uIEZvb3RwcmludCwgb3VyIGVuZXJneSBjb25zdW1wdGlvbiBpbmRleCwgY2FuIGJlIGNvbXBhcmVkIHRvIGFub3RoZXIgZWxlbWVudCBvZiBzY2FyY2l0eSwgd2hpY2ggZGljdGF0ZXMgZmx1Y3R1YXRpb25zXHJcbmluIHZhbHVlOiBHb2xkLiBBY2NvcmRpbmcgdG9cclxuPGk+RGlnaWNvbm9taXN0PC9pPiwgYW4gYXZlcmFnZSBob3VzZWhvbGQmIzM5O3MgQ2FyYm9uIEZvb3RwcmludCBpcyBhYm91dCAxMCB0b25zIG9mIENPMiBwZXIgeWVhci4gVGhlIGFydGljbGUgZG9lc1xyXG50aGUgbWF0aCBmb3IgdXMgdmVyeSBzdWNjaW5jdGx5OjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5PbiB0b3Agb2YgdGhpcywgd2UgY2FuIGZpbmQgdGhhdCB0aGUgcHJvY2VzcyBvZiBtaW5pbmcgQml0Y29pbiBpc24mcnNxdW87dCBqdXN0IG1vcmUgZW5lcmd5LWludGVuc2l2ZSwgYnV0IGFsc28gaGFzXHJcbmEgYmlnZ2VyIGVudmlyb25tZW50YWwgaW1wYWN0LiBUbyByZWFjaCB0aGF0IGNvbmNsdXNpb24sIHdlIGZpcnN0IG5lZWQgdG8gZXN0aW1hdGUgdGhlIGNhcmJvbiBmb290cHJpbnQgZm9yIGJvdGguXHJcbkZvciBCaXRjb2luIHdlIGNhbiwgYWdhaW4sIGdldCB0aGlzIG51bWJlciBmcm9tIHRoZSBCaXRjb2luIEVuZXJneSBDb25zdW1wdGlvbiBJbmRleC4gRm9yIGdvbGQsIHdlIGFzc3VtZSBhIGNhcmJvblxyXG5mb290cHJpbnQgb2YgMjAgdG9ucyBvZiBDTzJlIHBlciBldmVyeSBraWxvZ3JhbSBvZiBnb2xkIG1pbmVkXHJcbjxzdXAgaWQ9XCJkaWdpY29ub21pc3QyXCI+Mzwvc3VwPi48L3A+XHJcblxyXG48cD5UaGUgYXJ0aWNsZSBjb250aW51ZXMgdG8gY2xhcmlmeSB0aGF0IDMzLDAwMCBraWxvZ3JhbXMgb2YgQ08yIHBlciB1bml0IG1pbmVzIChjb21wYXJhdGl2ZWx5LCBvbmUgQml0Y29pbiYjMzk7cyB3b3J0aFxyXG5vZiBHb2xkIGlzIDQsMDAwIGtpbG9ncmFtcyBvZiBDTzIpLiBBdCB0aGUgZW5kIG9mIHRoZSBkYXksIHRoZSBlbGVjdHJpY2l0eSBjb3N0cy0taWYgbm90IHN1c3RhaW5hYmxlIGxvbmctdGVybS0tY291bGRcclxuc3BlbGwgdHJvdWJsZS4gSGVuY2UsIHRoZSB0aHJlZSBTJiMzOTtzLCBtZW50aW9uZWQgbGFzdCwgc3VzdGFpbmFiaWxpdHkgaXMgcGVyaGFwcyBhIGxhcmdlciBpc3N1ZSB0aGFuIGJsb2NrY2hhaW5cclxuU2VjdXJpdHkgYW5kIFNjYWxhYmlsaXR5IGNoYWxsZW5nZXMuIEFnYWluLCB0aGlzIGlzIGEgcHJvYmxlbSB0aGF0IHRoZSB0aGlyZCBsYXJnZXN0IGNyeXB0b2N1cnJlbmN5IGRvZXMgbm90IGhhdmU6XHJcbjxpPlJpcHBsZTwvaT4sIHdoaWNoIGRvZXMgbm90IGJlYXIgYSBjYXJib24gZm9vdHByaW50XHJcbjxzdXAgaWQ9XCJyaXBwbGVcIj40PC9zdXA+LjwvcD5cclxuXHJcbjxwPiZuYnNwOzwvcD5cclxuXHJcbjxwPjAuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5jbmV0LmNvbS9ob3ctdG8vYml0Y29pbi1ldGhlcmV1bS1vci1saXRlY29pbi13aGljaC1jcnlwdG9jdXJyZW5jeS1pcy1iZXN0LWZvci15b3UvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuY25ldC5jb20vaG93LXRvL2JpdGNvaW4tZXRoZXJldW0tb3ItbGl0ZWNvaW4td2hpY2gtY3J5cHRvY3VycmVuY3ktaXMtYmVzdC1mb3IteW91LzwvYT5cclxuPGJyIC8+IEZvciB0aG9zZSBuZXcgdG8gY3J5cHRvY3VycmVuY2llcywgdGhpcyBpcyBhIGZhaXJseSBzdWNjaW5jdCBhcnRpY2xlIHRvIGNyeXB0b2N1cnJlbmNpZXMsIGFuZCB0aGVpciB1bmRlcmx5aW5nXHJcbnN0cnVjdHVyZS48L3A+XHJcblxyXG48cD4xLlxyXG48YSBocmVmPVwiaHR0cHM6Ly9tb3RoZXJib2FyZC52aWNlLmNvbS9lbl91cy9hcnRpY2xlL2Qzem45YS9ldGhlcmV1bS1taW5pbmctdHJhbnNhY3Rpb24tZWxlY3RyaWNpdHktY29uc3VtcHRpb24tYml0Y29pblwiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9tb3RoZXJib2FyZC52aWNlLmNvbS9lbl91cy9hcnRpY2xlL2Qzem45YS9ldGhlcmV1bS1taW5pbmctdHJhbnNhY3Rpb24tZWxlY3RyaWNpdHktY29uc3VtcHRpb24tYml0Y29pbjwvYT5cclxuPC9wPlxyXG5cclxuPHA+Mi5cclxuPGEgaHJlZj1cImh0dHA6Ly93d3cud2lyZWQuY28udWsvYXJ0aWNsZS9ob3ctbXVjaC1lbmVyZ3ktZG9lcy1iaXRjb2luLW1pbmluZy1yZWFsbHktdXNlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cDovL3d3dy53aXJlZC5jby51ay9hcnRpY2xlL2hvdy1tdWNoLWVuZXJneS1kb2VzLWJpdGNvaW4tbWluaW5nLXJlYWxseS11c2U8L2E+XHJcbjwvcD5cclxuXHJcbjxwPjMuXHJcbjxhIGhyZWY9XCJodHRwczovL2RpZ2ljb25vbWlzdC5uZXQvYml0Y29pbi1taW5pbmctbW9yZS1wb2xsdXRpbmctdGhhbi1nb2xkLW1pbmluZ1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vZGlnaWNvbm9taXN0Lm5ldC9iaXRjb2luLW1pbmluZy1tb3JlLXBvbGx1dGluZy10aGFuLWdvbGQtbWluaW5nPC9hPlxyXG48L3A+XHJcblxyXG48cD40LlxyXG48YSBocmVmPVwiaHR0cHM6Ly9yaXBwbGUuY29tL3hycC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3JpcHBsZS5jb20veHJwLzwvYT5cclxuPC9wPlxyXG5cclxuPHA+Jm5ic3A7PC9wPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJmZWIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMi0yN1wiPlxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiN0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2hcIj5PVVIgREFJTFkgVEVDSDwvaDU+XHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDI3LCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPkFmdGVyIFllc3RlcmRheSYjMzk7cyBTY2F0aGluZyBQb3N0LCBBIExvb2sgYXQgbXkgb3duIENhcmJvbiBGb290cHJpbnQ8L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkluIG15IHJlZmxlY3Rpb25zIGFib3V0IGVudmlyb25tZW50IHN1c3RhaW5hYmlsaXR5IGlzc3VlcywgSSBjb25mZXNzIEkmIzM5O20gc29ydCBvZiBhIGh5cG9jcml0ZSAuLi4gVGhlIHdob2xlIG1hdHRlclxyXG50aGF0IGNhdXNlZCBteSBvd24gaW50cm9zcGVjdGlvbiBiZWdpbnMgd2l0aCBteSB1c3VhbCBkYWlseSB2ZXhhdGlvbjogVGFuZ2xlcyBvZiB3aXJlcyFcclxuPGJyIC8+ICZuYnNwOyAuLi4gSSYjMzk7dmUgYmVlbiBoYXZpbmcgZWxlY3RyaWNpdHkgaXNzdWVzLCBoZXJlIGFzIG9mIGxhdGUgLi4uPC9wPlxyXG5cclxuPHA+T24gb25lIHNpZGUsIG15IHRpbnkgWW9nYSBVbHRyYWJvb2sgdXN1YWxseSBsaWtlcyB0byBjaGFyZ2UganVzdCBmaW5lIHdpdGggbXkgcGhvbmUgY2hhcmdlci0taWYgSSYjMzk7bSBzdHVjayB3aXRob3V0XHJcbm15IGNoYXJnZXIuIEFuZCBkdWUgdG8gYW4gdW50aW1lbHkgZW5kIHRvIHRoZSBjaGFyZ2VyLCBJIG5lZWRlZCBhIHJlcGxhY2VtZW50LiBTbywgc2luZ3VsYXIgZXJyYW5kIG9mIHRoZSBkYXkgd2FzXHJcbmEgdHJpcCB0byBCZXN0IEJ1eSB0byBwZXJ1c2UgZm9yIGEgNDUtV2F0dCBVU0ItQyBjaGFyZ2VyICggdGhlIG5ldyBvdmFsIGNoYXJnaW5nIHBvcnQgb24gU2Ftc3VuZyA4JiMzOTtzLCBMRyBHNiYjMzk7c1xyXG5hbmQgbmV3ZXIgQXBwbGUgcHJvZHVjdHMpLjwvcD5cclxuXHJcbjxwPk1lYW53aGlsZSwgbXkgY3JlZGl0LWNhcmQgc2l6ZWQgUmFzcGJlcnJ5IFBpIGNvbXB1dGVyIHJ1bnMgb24gYW4gb2xkLXNjaG9vbCBVU0IgY2hhcmdlci0tYSB3aG9sZSBMaW51eCBTZXJ2ZXIgVG93ZXJcclxub24gYSBjZWxsLXBob25lIGNoYXJnZXIuIFRoZW4sIHdlIGhhdmUgbXkgdHJ1c3R5IERlbGwgKGFjdHVhbCkgVG93ZXIgd2l0aCAxNiBHaWdzIG9mIFJBTSwgMi10ZXJhYnl0ZXMsIGV0Yy4gdGhhdFxyXG5hbHNvIHNlZW1zIHRvIG5lZWQgYW4gZXh0cmEgZmFuIHRvIHN0YXkgY29vbC0tcHJvYmFibHkgdGhlIHN1c3RhaW5hYmlsaXR5IG9mIDEwMCBSYXNwYmVycnkgY29tcHV0ZXJzLiBNeSBlbnRpcmVcclxuY2FyYm9uIGZvb3RwcmludCBjaGFuZ2VzIG1vcmUgd2l0aCB0aGUgZWxlY3RyaWNhbCBwcm9kdWN0cyB0aGF0IEkgdXNlLCB0aGFuIG15IHZlaGljbGUhIFdlbGwsIEkgYWxzbyBjb25mZXNzIG15XHJcbkplZXAgQ2hlcm9rZWUgY2FuJiMzOTt0IGV2ZW4gYm9hc3QgMjAgbWlsZXMgcGVyIGhvdXIgLi4uIG9vcHMsIGNvbnNjaWVuY2UgcGFuZ3MsIG91Y2ggLi4uIFdlbGwsIGh5cG9jcml0aWNhbCwgc2xpZ2h0bHksXHJcbmJ1dCBmb3VuZCBub3QgZ3VpbHR5IHNpbmNlIEkmIzM5O20gYSBiaWtlLWNvbW11dGVyIGZvciBsaWZlITwvcD5cclxuXHJcbjxwPiZuYnNwOzwvcD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmViIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDItMjhcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjdG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoXCI+T1VSIERBSUxZIFRFQ0g8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+TXVzaW5nIEJsb2NrY2hhaW48L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+RmViIDI4LCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXIgZGFpbHl0aXRsZVwiPk9uZSBMYXN0IFdvcmQgYWJvdXQgQml0Y29pbiYjMzk7cyBDYXJib24gRm9vdHByaW50PC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5FbnZpcm9ubWVudGFsIFN1c3RhaW5hYmlsaXR5LCBhZ2FpbiwgYW5kIGEgaGlnaGVyLWxldmVsIHZpZXcgb2YgdGhlIGRpbGVtbWVhLi4uSSBjb3VsZG4mIzM5O3QgcmVzaXN0OlxyXG48YnIgLz4gQml0Y29pbiYjMzk7cyBJbml0aWFsIENvaW4gT2ZmZXJpbmcgd2FzIDIwMTEgb3Igc28sIHRoZW4gRXRoZXJldW0sIHdpdGggRXRoZXIgZm9yIGN1cnJlbmN5IHdhcyAyMDE1OyBUaGVzZSB0d28sXHJcbmV2ZXIgc28gcHJlc2NpZW50IGRlc2lnbnMsIGFsc28gaGF2ZSB0aGVpciBBY2hpbGxlcyBIZWFsLiBUaGVzZSB0d28gYXJlXHJcbjxzdHJvbmc+JnF1b3Q7UHJvb2Ygb2YgV29yayZxdW90OyBjdXJyZW5jeSBhbGdvcml0aHNtczwvc3Ryb25nPi4gVGhpcyBtZWFucyB0aGF0IHRoZSAmcXVvdDtEZW1hbmQmcXVvdDsgc2lkZSBvZiBzdXBwbHktYW5kLWRlbWFuZCxcclxuZGVyaXZlcyBmcm9tXHJcbjxpPmRpZmZpY3VsdHkgbGV2ZWxzPC9pPiBvZiBjcnlwdG8tYmxvY2tzIHRvIG1pbmUuIFNvLCBtaW5lcnMgYXJlIGluY2VudGl2aXplZCB0byBzcGVuZCAkMTUwMCBvbiBhIHNlbWktbWVkaW9jcmUtZ29vZFxyXG5taW5pbmcgcmlnICh3aGljaCBpcyBiYXNpY2FsbHkgMjAgTlZJRElBIEdyYXBoaWNzIENhcmRzIHRpZWQgdG9nZXRoZXIgdG8gc3RhY2sgb2YgdHdvLWJ5LWZvdXJzIHdpdGggbG90cyBvZiBmYW5zXHJcbi4uLiBlcmhlbSwgc3VzdGFpbmFiaWxpdHk/Li4uPC9wPlxyXG5cclxuPHA+QW5kIGZvciBlYWNoIGJsb2NrIHRoYXQgaXMgJnF1b3Q7c29sdmVkJnF1b3Q7LCBoZW5jZSB0aGUgYmxvY2sgYmVpbmcgdmFsaWRhdGVkLCBhbmQgc29tZWJvZHkmIzM5O3MgY3J5cHRvY3VycmVuY3lcclxucHVyY2hhc2UvdHJhbnNhY3Rpb24gaXMgcmVzb2x2ZWQhICh0YWtlcyBhYm91dCAxMiBtaW51dGVzIGZvciB0aGUgd2hvbGUgZ2xvYmFsIGJsb2NrY2hhaW4gdG8gY3ljbGUsIGFuZCBFdGhlcmV1bVxyXG5pcyBsZXNzIHRoYW4gYSBtaW51dGUpLiBTbywgdGhlIHdob2xlIGN5Y2xlIGNvbnRpbnVlcywgY2h1cm5pbmcgdGhyb3VnaCBjb2FsLSBhbmQgY2FyYm9uLXN0YWluZWQgaGFuZHMgb2YgdGhlIGVsZWN0cmljaXR5XHJcbmZlZCB0byB0aGVzZSBjcnlwdG8tbWluaW5nIHJpZ3NcclxuPHN1cD4xPC9zdXA+LiBGb3IgbWFueSBpdCYjMzk7cyBhIGhvYmJ5LCBsaWtlIHRoZSBCcml0aXNoIEhvYmJ5aXN0cyYjMzk7IGxvdmUgZm9yIGhhbS0gYW5kIHNob3J0LXdhdmUgcmFkaW8gc2V0dXBzLCB5ZXRcclxudGhpcyBwcm9maXRhYmxlLCB5ZXQgcGFydGljdWxhciBob2JieSByZXNlbWJsZXMgdGhlIDE4NzAmIzM5O3MgY29hbCBmYWN0b3J5IHNtb2tlIHN0YWNrcyBpbiBTb3V0aCBMb25kb24hPC9wPlxyXG5cclxuPHA+TGV0JiMzOTtzIGZhY2UgaXQsIGlmIEV0aGVyZXVtIGlzIGFibGUgdG8gc3VjY2Vzc2Z1bGx5IGhhcmQtZm9yayB0byBhIFByb29mLW9mLVN0YWtlIHN5c3RlbSBzb29uLS1hbmQgVml0YWxpayBCdXRlcmluXHJcbmFuZCBoaXMgY3JldyBhc3N1cmUgdXMgaXQgaXMgY29taW5nXHJcbjxzdXA+Mjwvc3VwPi0tdGhlbiBncmVhdC0tcHJvYmxlbSBzb2x2ZWQsIGV2ZXJ5dGhpbmcgZXZlbnR1YWxseSBjb252ZXJ0cyB0byBFdGhlcmV1bS4gSWZcclxuPGk+bm90PC9pPnRoZXkgZmFjZSBhbiBleGlzdGVudGlhbCB0aHJlYXQuIEJlY2F1c2UsIGluIGEgbW9yZSBlbmxpZ2h0ZW5lZCB0ZW4geWVhcnMgZnJvbSBub3csIHRob3NlIG1pbmluZyBkZXBvdHNcclxuPGk+d291bGQ8L2k+IGxvb2sgbGlrZSB1bmZldHRlcmVkIGZhY3Rvcnkgc21va2Utc3RhY2tzLiBQcm9vZi1vZi1TdGFjaywgd2hvc2UgY3VycmVuY3kgdmFsdWUgaXMgbm90IHNldCB0byBkaWZmaWN1bHRcclxub2YgYWxnb3JpdGhtIHB1enpsZSAoaGVuY2UsXHJcbjxpPnByb29mLW9mLXdvcms8L2k+LCBidXQgcmF0aGVyIHRvIG93bmVyc2hpcCBvZiAmcXVvdDt2b3RpbmcgcG9vbHMmcXVvdDssIHdoaWNoIGlzIGFcclxuPGk+XHJcbiAgPHN0cm9uZz5Db25zZW5zdXMtQmFzZWQgQmxvY2tjaGFpbiBhbGdvcml0aG08L3N0cm9uZz5cclxuPC9pPiBbQ29tcGxleCBzdWJqZWN0IGJlc3QgcmVzZXJ2ZWQgZm9yIGEgcmFpbnkgZGF5LCBvciBiZXR0ZXIgeWV0LCBubyBkYXkhIEkgbWF5IHJldmlzaXQgdGhpcyBhbHRlcm5hdGl2ZSBpbiBhIGZ1bm5lclxyXG53YXksIGhlcmUmIzM5O3MgYSBnbGltcHNlIGZyb20gVml0YWxrJiMzOTtzIEBWaXRhbGlrQnV0ZXJpbiB0d2VldCB5ZXN0ZXJkYXk6PC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlF1ZXN0aW9uIGZvciBtYXRoZW1hdGljaWFuczogaXMgdGhlcmUgYSBhc3N1bWVkLXRvLWJlLW5vcm1hbCBudW1iZXIgKGllLiBkaWdpdHMgYXJlIHJhbmRvbSwgbGlrZSBwaSBvciBlKSB3aGVyZSB5b3VcclxuY2FuIGNhbGN1bGF0ZSB0aGUgbnRoIGRpZ2l0IGluIGxvZyhuKSAob3IgZXZlbiBwb2x5bG9nKG4pKSB0aW1lPyBJZiBzbywgdGhlbiBIKHgpID0gZGlnaXRzW3ggLi4uIHgrMTAwXSBzZWVtcyBsaWtlXHJcbml0IHdvdWxkIGJlIGEgY29vbCBjcnlwdG9ncmFwaGljIGhhc2ggYWxnby48L3A+XHJcblxyXG48cD5Ob3csIEkgYW0gYnkgbm8gbWVhbnMgYSBkZXRlY3RpdmUsIGJ1dCBieSB0aGUgc291bmQgb2YgdGhvc2UgdHdlZXRzLCB0aGUgUHJvb2Ytb2YtV29yayBhbGdvcml0aG0gc2VlbXMgdG8gc3RpbGwgYmVcclxub2YgdXRtb3N0IGltcG9ydGFuY2UgLi4uPC9wPlxyXG5cclxuPHA+MS5cclxuPGEgaHJlZj1cImh0dHBzOi8vYmxvY2tleHBsb3Jlci5jb20vbmV3cy9ldGhlcmV1bS1sYXVuY2hlcy1jYXNwZXItdGVzdG5ldC1wYXZpbmctd2F5LXByb29mLXN0YWtlL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vYmxvY2tleHBsb3Jlci5jb20vbmV3cy9ldGhlcmV1bS1sYXVuY2hlcy1jYXNwZXItdGVzdG5ldC1wYXZpbmctd2F5LXByb29mLXN0YWtlLzwvYT4gYW5kIGFsc28sXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy50cnVzdG5vZGVzLmNvbS8yMDE3LzExLzI4L2V0aGVyZXVtcy1wcm9vZi1zdGFrZS1jYXNwZXItdGVzdG5ldC1uZWFycy1sYXVuY2hcIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LnRydXN0bm9kZXMuY29tLzIwMTcvMTEvMjgvZXRoZXJldW1zLXByb29mLXN0YWtlLWNhc3Blci10ZXN0bmV0LW5lYXJzLWxhdW5jaDwvYT5cclxuPC9wPlxyXG48L2Rpdj5cclxuXHJcbjxkaXY+XHJcbjxwIGlkPVwicGFnZWVuZFwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206MTUwcHg7XCI+Jm5ic3A7PC9wPlxyXG48L2Rpdj5cclxuPGJ1dHRvbj48YSBocmVmPVwiI3RvcFwiPlRvcCBvZiBQYWdlPC9hPjwvYnV0dG9uPlxyXG5gO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYmxvZy1mZWIuanMiLCJcclxuXHJcbmNvbnNvbGUubG9nKCdibG9nLW1hci1sb2FkZXInKTsgXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvZy1tYXJcIikuaW5uZXJIVE1MID0gYCBcclxuXHJcbjxkaXYgaWQ9XCIxOC0wMy0yNFwiIGNsYXNzPVwiIGhpZGRlbiAgIG1hciAxOC0wMyAtMjRcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjbWFydG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+U29jaW9sb2d5IFRvbW9ycm93ITwvaDU+XHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMjQtMjUsIDIwMTg8YnIgLz5cclxuV2Vla2VuZCA8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+MTk2OCBNZWV0cyAyMDE4XHJcbjwvaDY+XHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5XYXNoaW5ndG9uIEQuQy4gIFxyXG5Ob3QgTm9ybWFsbHkgZG9lcyBXb25kZXJXb21hbiBTaG93IGhlciBGYWNlXHJcbjwvcD5cclxuXHJcbjxwPiAgPC9wPlxyXG48L2Rpdj4gXHJcblxyXG48ZGl2IGlkPVwiMTgtMDMtMjNcIiBjbGFzcz1cIiAgICBtYXIgMTgtMDMgLTIzXCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI21hcnRvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+XHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcbjxwIGNsYXNzPVwiICBhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5NYXJjaCAyMywgMjAxOCA8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+PGk+SXQncyBub3QgYWJvdXQgdGhlIEJsb2NrY2hhaW4sIHRoZSBFZmZpY2llbnQgTmV0d29yayBEYXRhIERpc3RyaWJ1dGlvbiBpcyB0aGUgQW5zd2VyITwvaT5cclxuPC9oNj5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkxhc3Qgd2VlayBhbmQgdGhpcyB3ZWVrLCB0aGUgb3V0LW9mLWNvbnRyb2wgaGFuZGd1biBwcm9ibGVtIGlzIGluIHRoZSBuZXdzLiBUaGlzIGxlYWRzIG9uZSB0byBiZWxpZXZlIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoZSA8aT5kZWZpbml0aW9uPC9pPiBvZiBhIGd1bi4gQXMgYWx3YXlzLiBEZWZpbml0aW9ucyBzdGFydCB3YXJzIGFuZCB3b3JsZCB3YXJzLS1hZnRlciBhbGwgb2YgbGFzdCBjZW50dXJ5LCBkaWQgYW55b25lIGRlY2lkZSB3aG8gY29udHJvbHMgdGhlIENvYWwgb2YgU3VkZXRlbmxhbmQ/PyBZb3UgY2FuIGJldCBldmVyeW9uZSB0aGVyZSBzcGVha3MgdHdvIGxhbmd1YWdlcywgc3RpbGwuIFRoZSA8aT5kZWZpbml0aW9uYWwgPC9pPiBhbnN3ZXIgbWFrZXMgdGhlIGFuc3dlcjogVGhpcyBpcyB3aHkgQmxvY2tjaGFpbiB0ZWNobm9sb2d5LS1zdHJhZGRsZWQgYmV0d2VlbiBteXJpYWQgc3RhcnQtdXBzLCBjb3VudGxlc3MgaW5zdGl0dXRpb25zIGFuZCBhIGh1bmRyZWQgYnJpbGxpYW50IG1pbmRzIGlzIFRoZSBhbnN3ZXIgdG8gb3VyIHNjYWxhYmlsaXR5IHByb2JsZW1zLiAgIFxyXG5cclxuPC9wPjxwPlRoZSBwcm9ibGVtIGlzIHRoYXQgZGF0YSBzdHJ1Y3R1cmVzIGdyb3cgYXQgZGlmZmVyZW50aWFsIHJhdGVzLCBzb21lIGV4cG9uZW50aWFsLCBzb21lIGxpbmVhciwgc29tZSBzbG93ZXIsIHNvbWUgYXMgYSBmdW5jdGlvbiBvZiB0aW1lIG9yIG90aGVyIHZhcmlhYmxlLiAgWWV0LCBvdXIgZGF0YSBhbmFseXNpcyBuZWVkcyBhcmUgY2xlYXI6IFdlIG5lZWQgYSBuZXcgdGVjaG5vbG9neSB0byBoYW5kbGUgcXVpY2tseSwgc2VjdXJlbHkgYW5kIGVmZmljaWVudGx5IHRoZSA8aT5OZXR3b3JrZWQsIFJlbGF0aW9uYWwgRGF0YSBQcm9ibGVtPC9pPiwgd2hpY2ggc2NhbGVzIGV4cG9uZW50aWFsbHkgd2l0aCB0cmFkaXRpb25hbCBkYXRhIHN0cnVjdHVyZXMsIGxpa2Ugb2xkLWZhc2hpb25lZCBFeGNlbC1saWtlIFJvdy0mYW1wOy1Db2x1bW4gZGF0YSBzdHJ1Y3R1cmVzLiBZZXQsIGFzIG9uZSB3b3VsZCBsb2dhcml0aG1pemUgdGhlIGVxdWF0aW9uIHRvIGJlc3QgYWRhcHQgbmV3IGRhdGEsIHNvIG11c3QgdGhlIGNvbXB1dGVyIGRhdGEgc3RydWN0dXJlIGFkanVzdCBhY2NvcmRpbmdseS4gPC9wPlxyXG48cD5Ub28gcmlnaWQsIHRoZSB3b3JsZCB0dXJuZWQgdG8gcmVsYXRpb25hbCwgbm9uLVN0cnVjdHVyZWQgUXVlcnkgTGFuZ3VhZ2UgKFNRTCkgZGF0YSwgcGFydGlhbGx5IGZvciB0aGUgbmVlZCB0byBkaXNsYXRlIDxpPmRhdGEgb2JqZWN0czwvaT4gZnJvbSB0aGVpciB0YWJsZXMuIFRoZSB3b3JsZCBuZWVkZWQgdGhhdCBjZWxsIGFzIGEgZnJlZS1yYWRpY2FsIGluIG9yZGVyIHRvIG1pbWljIHRoZSBkYXRhIHN0cnVjdHVyZSBvZiBzb2NpZXRhbGx5LW5ldHdvcmtlZCBzb2NpZXR5LiAgQWxhcywgYSBzY2llbmNlIGFscmVhZHkgYXQgaGFyZCB3b3JrIHdpdGggQ2FtYnJpZGdlIEFuYWx5dGljYS0tYWdhaW4gd2hhdCdzIHRoYXQgZmllbGQgb2Ygc3R1ZHkgY2FsbGVkIGFnYWluLCBTb2Npb2xvZ3ksIHJpZ2h0PyA8L3A+XHJcbjxwPlxyXG5cclxuPC9wPjwvZGl2PiBcclxuPGRpdiBpZD1cIjE4LTAzLTIyXCIgY2xhc3M9XCIgICBTIG1hciAxOC0wMyAtMjJcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjbWFydG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+V2ViIERldiBBZmZhaXJzIDwvaDU+XHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMjIsIDIwMTggPC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPkEuSS4gUGFydCBJSTogUHJvYmxlbXMgd2l0aCBTY2FsZSwgS2luZGx5IFJlc29sdmVkIGJ5IEEuSS5cclxuPC9oNj5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkkgbWlzdGFrZW5seSBsYWlkIHdhc3RlIHRvIEEuSS4ncyByZXB1dGF0aW9uIGluIG15IGxhc3QgcG9zdC4gSXQgPGk+ZGlkPC9pPiBsZXQgdXMsIG91ciB3aG9sZSBzb2NpZXR5LCBsZXQgdXMgZG93biwgYW5kIG1heWJlIHRoZSBmb3JlbnNpY3Mgd2lsbCBnaXZlIHVzIDxpPmEgZmV3IGV4Y3VzZXM8L2k+IGRvd24gb24gdGhlIHJvYWQuIEhvd2V2ZXIsIFwiaG9taWNpZGUgYnkgQS5JLiAoYWthIFViZXIpXCIgd2lsbCBuZWVkIHRvIGJlIHVwZGF0ZWQgaW4gcmVjb3Jkcy4gQnV0LCBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBpcyBub3QgYXQgZmF1bHQuIFRoZXJlIGFyZSBhIGZldyBzb2Z0d2FyZSBlbmdpbmVlcnMgdGhhdCBkaWQgdGhlIGJlc3QgdGhleSBjb3VsZC0td2l0aCB0aGUgdGltZSB0aGVpciBzdXBlcmlvcnMgZ2F2ZSB0aGVtLiAgVWJlciBsZWFkZXJzaGlwLCBsZXQncyBob3BlLCB3aWxsIGJlIGRldGVycmVkIGZyb20gZnV0dXJlIGNhcmVsZXNzbmVzIHRvIGNvbWUuICAgPC9wPlxyXG5cclxuPHA+VGhhdCBkaWF0cmliZSBzYWlkLCBJIGRvIGFwcHJlY2lhdGUgYW4gVWJlcidzIHByb3hpbWl0eSB3aGVuIEknbSBzdHJhbmRlZCBhdCAyOjAwIGFtIGluIGEgYmFkIHBhcnQgb2YgdG93bi4gV2h5PyBCZWNhdXNlIEkgZG9uJ3QgbmVlZCB0byBwbGFuIGFoZWFkIC0tIFViZXIgaXMgdGhlcmUhIEFuZCwgc2FkbHksIEkgZG9uJ3QgbmVlZCB0byByZWFkIG9yIHN0dWR5IC0tIEdvb2dsZSBpcyB0aGVyZSEgQnV0IHdhaXQsIGRvbid0IGp1ZGdlIG1lLCBJJ20gbm90IGxhenkhIFRoYXQgYmVpbmcgc2FpZCwgSSBoYXZlIG15IG93biBzb3VsLXNlYXJjaGluZyB0byBkbzogVEVDSE5PTE9HWSBBSURTIEFORCBBQkVUUyBNRSBBTkQgTVkgQUNUSU9OUywgYnV0IGl0IGRvZXMgbm90IHJ1biBteSBzaG93PiBPbmx5IEkgdGFrZSByZXNwb25zaWJpbGl0eSBmb3IgbXkgb3duIGFjdGlvbnM6IEkgYWxsb3cgdGVjaG5vbG9neSBpbnRvIG15IGxpZmUgYXMgYSB0b29sLCBhbmQgeWV0IEkgICBob2xkIHRoZSBwb3dlciBjb3JkLiBJIHRha2UgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSB0ZWNoIHRoYXQgZm9sbG93cyBtZS0tYW5kIGJlbGlldmUgbWUsIEkgbmVlZCB0aGF0IHRlY2guIEFuZCBzbyBkbyB5b3UuIE5vdCBvbmx5IHNvLCBidXQgdGhlIHdvcmxkLCBhbmQgdGhlIGVjb2xvZ2ljYWwgZmF0ZSBvZiBvdXIgPGkgc3R5bGU9XCJjb2xvcjpncmVlblwiPmdyZWVuIGVhcnRoPC9pPj4gYWxzbyBkZXBlbmRzIG9uIHRlY2gsIEEuSS4gc3BlY2lmaWNhbGx5LiA8L3A+XHJcbjxwPlxyXG5IdW1hbmtpbmQgaGFzIGFscmVhZHkgZHVnIGFuIGVjb2xvZ2ljYWwgKGRhcmUgSSBzYXkgJ2Fsa2FsaW5lJykgcGl0IGRlZXBlciB0aGFuIGNhbiBiZSBkdWcgb3V0IG9mOiBGbG9vZGluZywgZm9yZXN0IGZpcmVzLCBhbmQgU3BlY2llcyBFeHRpbmN0aW9ucy4gQS5JLiBpcyA8aSBzdHlsZT1cImNvbG9yOmJyb3duXCI+IGlzIDwvaT4+IHRoZSBvbmx5IHZpYWJsZSBob3BlIHNvIHdlLCBpLmUuIFViZXIsIHNob3VsZG4ndCBwcmVtYXR1cmVseSBzcG9pbCBpdHMgZGV2ZWxvcG1lbnQuIFxyXG48L3A+XHJcbjxwIGNsYXNzPVwicXVvdGVcIj5TZXZlcmFsIHF1ZXN0aW9ucyByYWlzZSB0aGVpciB1Z2x5IGhlYWQgd2hlbiBBLkkuIGNhbid0IGhlbHAgRWFydGggb3IgaHVtYW5raW5kLiBMaWtlIGl0IG9yIG5vdCwgQS5JLiB3aWxsIG5lZWQgdG8gMy1EIHByaW50IHRoZSBkeWtlcyBmb3IgdGhlIHN1bmtlbiBjb2FzdGFsIGNpdGllcy0tbGlrZSB0aW55IGlzbGFuZCBEZW4gSGFhZ3VlLCB0aGUgbW9zdCBiZWF1dGlmdWwgY2l0eSBpbiB0aGUgd29ybGQuIE5leHQsIEEuSS4gd2lsbCBtYWtlIGlycmVsZXZhbnQgZm9zc2lsIGZ1ZWxzIGJ5IDIwMzAsIGlmIG5vdCBiZWZvcmU7IGFuZCB0aG9zZSBjYXVnaHQgcG9sbHV0aW5nIHdvdWxkIGJlIGZpbmVkIHRvIGRlYXRoLCBhbnl3YXkuIFdpdGhvdXQgQS5JLiwgbm9uZSBvZiB0aGVzZSB3b3J0aHdoaWxlIGdvYWxzIGFyZSBwb3NzaWJsZS4gVGhpcyBwcmVjYXJpb3VzLCBkaWZmaWN1bHQgYW5kIG1vc3Qgb2YgYWxsIGxhYm9yaW91cyBqb2Igb2YgZGVzaWduaW5nIG91ciBvd24gc29sdXRpb25zIHdpbGwgdGFrZSB0aW1lOiBGb3IgdGhpcyByZWFzb24sIFViZXIgc2hvdWxkIGJlIHNoYW1lZCBldmVuIGZ1cnRoZXIgZm9yIHRoZWlyIHNob3J0LWN1dHMsIGFuZCBldmVudHVhbCBlcnJvcnMgb2YgaW50ZXJuYWwsIG9yZ2FuaXphdGlvbmFsIHByb2JsZW1zLiA8aT5VYmVyJ3MgZXhwZXJpZW1lbnRhbCwgdGF4LWZyZWUgXCJUZXN0aW5nIFNhbmRib3hcIiBjYW5ub3QgYmUgdGhlIGVyc3R3aGlsZSBzYWZlIG5laWdoYm9yaG9vZHMgb2YgU3VyYnVyYmFuIFBob2VuaXgsIHdpdGhvdXQgcHJvcGVyIGNhdXRpb24uPC9pPiA8L3A+XHRcdFxyXG48cD5BcmUgVWJlcidzIGNvcnBvcmF0ZSBkZXNpcmVzLCBtYXJrZXQgc3Ryb25naG9sZCwgYW5kIHNoYXJlaG9sZGVycycgZGVsaWdodCBtb3JlIHdvcnRod2hpbGUgdGhhbiA8aT5hbiBlbnRpcmUgc2Vuc2l0aXZlIGZpZWxkIG9mIG1hY2hpbmUtbGVhcm5pbmcgcmVzZWFyY2g/PC9pPiBOby4gVWJlciBtdXN0IGJlIHdhcm5lZCB0byBub3Qgc3RlYWwgY29ycG9yYXRlIHNlY3JldHMgZnJvbSBXYXltbywgdGhlbiBwcm9jZWVkIHRvIGJlIDg2J2QgZnJvbSBDYWxpZm9ybmlhLCB0aGVuIGJydXNoIGFzaWRlIHdpdGggZXhjdXNlcyB0aGUgPGk+a2lsbGluZyBvZiBhbiBpbm5vY2VudCBBcml6b25hIGJpY3ljbGlzdDwvaT4uPC9wPlxyXG48cD5cclxuV2hvIGNhbiBjb3VudCB0aGUgbnVtYmVyIG9mIHZlcnkgZmVpc3R5IHRheGktbWVuIGFuZCAtd29tZW4gdGhhdCBhcmUgbm90IGZhbnMgb2YgdGhlIGluZmFtb3VzbHkgaGFzdHkgY3VsdHVyZSBvZiBVYmVyLiBUaGUgdGVhbSBvZiBsYXd5ZXJzIG5lZWRlZCB0byBiZSA4NidkIGZyb20gRnJhbmNlPyBVYmVyIGFscmVhZHkga25vd3MsIGJlY2F1c2UgbWF5YmUgdGhleSBrbm93IEIuRC5PISBcclxuPC9wPlxyXG48cD48L3A+XHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjMuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vdGVjaG5vbG9neS8yMDE3L2Fwci8wNy91YmVyLXdheW1vLWxhd3N1aXQtbGlkYXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vdGVjaG5vbG9neS8yMDE3L2Fwci8wNy91YmVyLXdheW1vLWxhd3N1aXQtbGlkYXI8L2E+XHJcbjwvcD5cclxuPC9kaXY+IFxyXG48ZGl2IGlkPVwiMTgtMDMtMjFcIiBjbGFzcz1cIiAgICBtYXIgMTgtMDMgLTIxICBcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjdG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+V2ViIERldiBBZmZhaXJzIDwvaDU+XHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMjEsIDIwMTggPC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPkhleSBVYmVyIERyaXZlciwgUGxlYXNlIFNsb3cgRG93biFcclxuPC9oNj5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkEuSS4gZ2VuZXJhbGx5LCBhbmQgc3BlY2lmaWNhbGx5IFViZXIncyBTZWxmLURyaXZpbmcgVGVjaCwgYm90aCBoYXZlIGZhaWxlZCBzb2NpZXR5IHRoaXMgd2Vlay4gQWx0aG91Z2ggd2UgY291bGQgYWxsIGRlYmF0ZSB0aGUgbWVyaXRzIG9mIFwiTGlkYXJcIiwgaS5lLiBsYXNlci1iYXNlZCB2aXNpb24sIHRoZSBwcmltYXJ5IGNvbmNlcm4sIGluIG15IHZpZXcsIGlzIFViZXIncyBvYnZpb3VzIGNhcmVsZXNzbmVzcyBpbiBydXNoaW5nIHRoZWlyIHNlbGYtZHJpdmluZyB0ZWNoLiAgQWx0aG91Z2ggc2l4IHRob3VzYW5kICg2LDAwMCB0b28gbWFueSkgcGVkZXN0cmlhbnMgYXJlIGtpbGxlZCBpbiB0aGUgVS5TLiBhbm51YWxseSwgSSdkIG9ubHkgaG9wZSBBSSB3b3VsZG4ndCBhZGQgdG8gdGhlIHByb2JsZW0uPHN1cD4yPC9zdXA+IFRoZSBBcml6b25hIHZpY3RpbSB3YXMgd2Fsa2luZyBoZXIgYmljeWNsZSB3aGVuIHN0cnVjaywgYW5kIEkgYXMgYmlrZS1jb21tdXRlciBjYW4ndCBoZWxwIGJ1dCB0YWtlIHRoZSBhZmZhaXIgcGVyc29uYWxseS4gPC9wPlxyXG48cD5UaGlzIGZpcnN0IGh1bWFuIGRlYXRoIGlzIGF0IGxlYXN0IGEgPHN0cm9uZz5iaWcgV2FrZS1VcCBtb21lbnQ8L3N0cm9uZz4gZm9yIHRoZSBpbmR1c3RyeSBpbiBpdHMgaGFzdGUgdG8gcm9sbCBvdXQgQS5JLiB0ZWNoLiAgQWZ0ZXIgYWxsLCBVYmVyJ3MgcXVlc3Rpb25hYmxlIGxlYWRlcnNoaXAgbW9yYWxzPHN1cD4yPC9zdXA+IGFuZCBiZWluZyBraWNrZWQgb3V0IG9mIFNhbiBGcmFuY2lzY28gZm9yIHJ1bm5pbmcgbW9yZSB0aGFuIHNpeCByZWQtbGlnaHRzIHJhaXNlcyBleWVicm93cyB0byBiZWdpbiB3aXRoLjxzdXA+Mzwvc3VwPiBNeSBwcm9ibGVtIHdpdGggVWJlciBpcyB0aGF0IHRoZSBjYXIncyBhbGdvcml0aG0sIHdpdGggcGVyZmVjdCBMaWRhciB2aXNpb24sIGRpZCBub3QgZmxpbmNoIG9yIHNsb3cgZG93biBmb3IgdHdvIHNlY29uZHMgYXMgaXQga2lsbGVkIHRoZSB2aWN0aW0uIEh1bWFucyBmbGluY2ggYW5kIGh1bWFucyBzd2VydmUsIGJlY2F1c2UgcHJvdGVjdGluZyBmZWxsb3cgaHVtYW5zIGlzIGluIG91ciBETkEsIG5vdCBpbiBBLkkuJ3MuIFNvLCB3aGlsZSB3ZSBub3cga25vdyBVYmVyJ3Mgc29mdHdhcmUgaGFzbid0IGNhdWdodCB1cCB3aXRoIGl0cyBBLkkuLUxpZGFyIGhhcmR3YXJlLS1sZXQncyBob3BlIHdlIHNlZSBkZWZlbnNpdmUgZHJpdmluZyBhbmQgc29tZSA8aT5UTEM8L2k+IHByb2dyYW1tZWQgaW50byB0aG9zZSBBLkkuIEFsZ29yaXRobXMhXHJcbjwvcD5cclxuPHAgY2xhc3M9XCJjaXRlXCI+MS5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS90ZWNobm9sb2d5LzIwMTgvbWFyLzIyL3ZpZGVvLXJlbGVhc2VkLW9mLXViZXItc2VsZi1kcml2aW5nLWNyYXNoLXRoYXQta2lsbGVkLXdvbWFuLWluLWFyaXpvbmFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vdGVjaG5vbG9neS8yMDE4L21hci8yMi92aWRlby1yZWxlYXNlZC1vZi11YmVyLXNlbGYtZHJpdmluZy1jcmFzaC10aGF0LWtpbGxlZC13b21hbi1pbi1hcml6b25hPC9hPlxyXG48L3A+XHJcblxyXG48cCBjbGFzcz1cImNpdGVcIj4yLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cudGhlZ3VhcmRpYW4uY29tL3RlY2hub2xvZ3kvMjAxNy9hcHIvMDcvdWJlci13YXltby1sYXdzdWl0LWxpZGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cudGhlZ3VhcmRpYW4uY29tL3RlY2hub2xvZ3kvMjAxNy9hcHIvMDcvdWJlci13YXltby1sYXdzdWl0LWxpZGFyPC9hPlxyXG48L3A+XHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjMuXHJcbjxhIGhyZWY9XCJodHRwOi8vZm9ydHVuZS5jb20vMjAxNy8wMi8yNi91YmVyLXNlbGYtZHJpdmluZy1jYXItcmVkLWxpZ2h0cy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwOi8vZm9ydHVuZS5jb20vMjAxNy8wMi8yNi91YmVyLXNlbGYtZHJpdmluZy1jYXItcmVkLWxpZ2h0cy88L2E+XHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG48ZGl2IGlkPVwiMTgtMDMtMjBcIiBjbGFzcz1cIiAgbWFyIDE4LTAzIC0yMFwiPlxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiNtYXJ0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnMgPC9oNT5cclxuXHJcbjxwIGNsYXNzPVwiICBhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5NYXJjaCAyMCwgMjAxOCA8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+VGhlIEZhY2Vib29rIEZpYXNjbzogV2h5IFp1Y2tlcmJlcmcgU2hvdWxkIG5vdCBoYXZlIERyb3BwZWQgb3V0IG9mIEhhcnZhcmRcclxuPC9oNj5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPlxyXG5Vbml2ZXJzaXRpZXMsIHByaXZhdGUgb3IgcHVibGljIGluc3RpdHV0aW9ucywgc2VydmUgYXMgYSBiZWFjb24gZm9yXHJcbjxzdHJvbmc+dGhlIEZlYXJsZXNzIFByb3RlY3Rpb24gYW5kIEV0aGljYWwgUmVndWxhdGlvbjwvc3Ryb25nPiBvZiBpbmZvcm1hdGlvbiBhbmQgZGF0YS4gVGhpcyBpcyBiZWNhdXNlIGRhdGEgYW5kIGRhdGEgcmVzZWFyY2hcclxuaXMgaW5uYXRlIHRvIHRoZSB1bml2ZXJzaXR5J3MgTWlzc2lvbiBTdGF0ZW1lbnQsIHdoZXJlYXMgYnVzaW5lc3MgYW5kIGdvdmVybm1lbnRhbCBpbnN0aXR1dGlvbnMgYXJlIHJlbGF0aXZlbHkgbmV3XHJcbnRvIHRoZSBnYW1lLCBhbmQgb2Z0ZW4gYXQgb2RkcyB3aXRoIHRoZVxyXG48aT5BY2FkZW15PC9pPiwgYW5kIG9jY2FzaW9uYWxseSBhZ2FpbnN0IGVhY2ggb3RoZXIuIDwvcD5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlRocmVhdHMgdG8gc3R1ZGVudCBkYXRhIHByaXZhY3kgZXhpc3RlZCBsb25nIGJlZm9yZSB0aGUgaW50ZXJuZXQuIFRoZSBGQkkgdW5kZXIgSi4gRWRnYXIgSG9vdmVyIGluZmlsdHJhdGVkIEJlcmtlbGV5XHJcbnN0dWRlbnQgZ3JvdXBzIHRvIGNvdW50ZXIgY29tbXVuaXNtIGluIHRoZSAxOTYwcy4gQXJvdW5kIHRoZSBzYW1lIHRpbWUsIHRoZSBDSUEgbWFuaXB1bGF0ZWQgdGhlIE5hdGlvbmFsIFN0dWRlbnRcclxuQXNzb2NpYXRpb24gZm9yIGludGVsbGlnZW5jZSBnYXRoZXJpbmcgaW4gb3RoZXIgYW50aS1jb21tdW5pc20gZWZmb3J0cy4gQnV0IHRoZSBwcml2YWN5IGlzc3VlIGlzIG1vcmUgYWN1dGUgbm93XHJcbnRoYXQgdGhlIGFtb3VudCBvZiBzdHVkZW50IGRhdGEgaW4gY2xvdWQtYmFzZWQgc3lzdGVtcyBoYXMgZ3Jvd24gZXhwb25lbnRpYWxseSBhbmQgaXMgbW9yZSB3aWRlbHkgZGlzcGVyc2VkLlxyXG48c3VwPjI8L3N1cD5cclxuPC9wPlxyXG48cD4gVGhlIFVuaXZlcnNpdHkncyBleHBlcnRpc2Ugb3ZlciBldGhpY2FsbHkgcmVndWxhdGVkIGRhdGEgY29sbGVjdGlvbiBhbmQgbWFuYWdlbWVudCwgaXMgYmV0dGVyIHRoYW4gZ292ZXJubWVudCwgYnVzaW5lc3MsXHJcbmFuZCBldmVuIG1lZGljYWwgZG9tYWlucyBmb3IgdHdvIHJlYXNvbnMuIEZpcnN0LCB0aGUgaW5zdGl0dXRpb24ncyBsb25nIGhpc3RvcnkgYW5kIGV0aGljYWwgbW90aXZlcyB3aXRoIGRhdGEgYXJlXHJcbnVuaXF1ZS4gVGhlIG5vcm1zIG9mIGRhdGEtaGFuZGxpbmcgaGF2ZSBiZWVuIGNvZGlmaWVkIHRocm91Z2ggdGhlIFVuaXZlcnNpdHkncyBJbnN0aXR1dGlvbmFsIFJldmlldyBCb2FyZCBiYXNlZFxyXG5vbiBpdHNcclxuPHN0cm9uZz5zdGF0ZWQgbWlzc2lvbjwvc3Ryb25nPi4gSW4gb3RoZXIgd29yZHMsIFVuaXZlcnNpdGllcyB0YWtlIGRhdGEgc2VyaW91c2x5XHJcbjxpPmZvciByZWFzb25zIG90aGVyIHRoYW4gY29ycG9yYXRlIHByb2ZpdCBvciBnb3Zlcm5tZW50YWwgY29udHJvbDwvaT4uIEFuIGV4YW1wbGUgb2YgcGVyc29uYWwgZGF0YSBwcmVjYXV0aW9ucyBoYXNcclxucGxheWVkIG91dCB3aXRoIEhhcnZhcmQncyByZWNlbnQgZGF0YSB0aWZmcyBsZWFkaW5nIHRvIHRoZSBTdXByZW1lIENvdXJ0LCBpbGx1c3RyYXRlZCBieSBhIDIwMTYgYXJ0aWNsZTogPC9wPlxyXG48cCBjbGFzcz1cInF1b3RlXCI+TGFzdCB3ZWVrIHVuZGVyZ3JhZHVhdGVzIGF0IEhhcnZhcmQgVW5pdmVyc2l0eSByYWlzZWQgY29uY2VybnMgYWJvdXQgdGhlIGluc3RpdHV0aW9uIGhhbmRpbmcgb3ZlciB0aGVpciBkYXRhIHRvIGFuXHJcbmFudGktYWZmaXJtYXRpdmUgYWN0aW9uIGdyb3VwIGFzIHBhcnQgb2YgYSBsYXdzdWl0LiBTdHVkZW50cyBmb3IgRmFpciBBZG1pc3Npb25zLCB3aGljaCBpcyBzdWluZyB0aGUgdW5pdmVyc2l0eVxyXG5mb3IgYWxsZWdlZGx5IGRpc2NyaW1pbmF0aW5nIGFnYWluc3QgQXNpYW4gQW1lcmljYW4gYXBwbGljYW50cywgd2lsbCBoYXZlIGFjY2VzcyB0byDigJxhY2FkZW1pYywgZXh0cmFjdXJyaWN1bGFyLFxyXG5kZW1vZ3JhcGhpYyBhbmQgb3RoZXIgaW5mb3JtYXRpb27igJ0gZnJvbSBhbGwgdW5kZXJncmFkcyB3aG8gYXBwbGllZCB0byBIYXJ2YXJkIGJldHdlZW4gdGhlIGZhbGwgMjAwOSBhbmQgc3ByaW5nIDIwMTUsXHJcbm9taXR0aW5nIG5hbWVzIGFuZCBTb2NpYWwgU2VjdXJpdHkgbnVtYmVycy5cclxuPHN1cD4yPC9zdXA+XHJcbjwvcD5cclxuPHA+VGhlIHNlY29uZCByZWFzb24gd2h5IFVuaXZlcnNpdGllcyB1bmRlcnN0YW5kIGV0aGljYWwgaW1wbGljYXRpb25zIGZvciBkYXRhIGlzIHRoYXQgZGF0YSBhbmQgbW9yZSBicm9hZGx5IGRhdGEgYW5kXHJcbmh1bWFuIGluZm9ybWF0aW9uXHJcbjxpPnJlc2VhcmNoPC9pPiBpcyB0aGUgaW5zdGl0dXRpb25zJyBzZWNvbmQgaGlnaGVzdCBwcmlvcml0eSwgYWxvbmcgd2l0aCB0ZWFjaGluZyBhbmQgc2VydmljZS4gRm9yIGV4YW1wbGUsIGluIHJlc3BvbnNlXHJcbnRvIHRoZSB1bmV0aGljYWwgUHVibGljIEhlYWx0aCByZXNlYXJjaCBpblxyXG48aT5UdXNrZWdlZSBTeXBoaWxpcyBleHBlcmllbWVudHM8L2k+LCB0aGUgVW5pdmVyc2l0eSBpbnN0dXRpb25cclxuPGk+c3RlcHBlZCBpbjwvaT4gdG8gaGVscCBkZXNpZ24gdGhlIDE5NzhcclxuPHN0cm9uZz5CZWxtb250IFByaW5jaXBsZXM8L3N0cm9uZz4uIEN1cnJlbnRseSwgdGhlIFVuaXZlcnNpdHkgSW5zdGl0dXRpb25hbCBSZXZpZXcgQm9hcmQgaW5jb3Jwb3JhdGVzIHRoaXMgd2l0aCB0aGUgTnVyZW1idXJnXHJcbkNvZGUgKGRldmVsb3BlZCBhZnRlciBXV0lJIE5BWkkgcmVzZWFyY2gpLCBpbiBoYW5kbGluZyBkYXRhIHJlc2VhcmNoLlxyXG48L3A+XHJcbjxwPkluIHJlY2VudCBkYXlzLFxyXG48aT5wcml2YXRlIGNvbXBhbmllczwvaT4gY2xhaW0gZXhwZXJ0aXNlIGZvciByZWd1bGF0aW5nIFwiRmFrZSBOZXdzXCIsIGFuZCB5b3UgZ3Vlc3NlZCBpdCxcclxuPHN0cm9uZz5yZWd1bGF0aW9uIG9mIGRhdGEgcHJpdmFjeSAmYW1wOyBjb25maWRlbnRpYWxpdHkuPC9zdHJvbmc+PHN1cD4zPC9zdXA+IFRoZSBldGhpY2FsIGF1dGhvcml0eSBvdmVyIGRhdGEgcHJpdmFjeSBub3JtcyBhcmUgbm93aGVyZVxyXG5lbHNlIHRoYW4gdGhlIFVuaXZlcnNpdHkgY2FtcHVzLCBjYXNlIGluIHBvaW50IEhhcnZhcmQuLi4gTGV0IHRoZSBnb3Zlcm5tZW50cyBnb3Zlcm4gYW5kIHRoZSBlbnRlcnByaXNlcyBlbnRlcnByaXNlLFxyXG5hbmQgbGVhdmUgdGhlXHJcbjxpPnRob3VnaHRmdWwsIGV0aGljYWwgcmVndWxhdGlvbiBvZiBkYXRhIGNvbGxlY3Rpb24gYW5kIHByZWNhdXRpb24gPC9pPiB0byB0aGUgSXZvcnkgVG93ZXIuIENvcnBvcmF0ZSBhbmQgR292ZXJubWVudFxyXG5zZWxmLXJlZ3VsYXRpb24gaXMgb3BhcXVlIGVub3VnaCE8L3A+XHJcblxyXG5cclxuPHAgY2xhc3M9XCJjaXRlXCI+MS5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS90ZWNobm9sb2d5LzIwMTgvbWFyLzIxL21hcmstenVja2VyYmVyZy1yZXNwb25zZS1mYWNlYm9vay1jYW1icmlkZ2UtYW5hbHl0aWNhXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vdGVjaG5vbG9neS8yMDE4L21hci8yMS9tYXJrLXp1Y2tlcmJlcmctcmVzcG9uc2UtZmFjZWJvb2stY2FtYnJpZGdlLWFuYWx5dGljYTwvYT5cclxuPC9wPlxyXG48cCBjbGFzcz1cImNpdGVcIj4yLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuZWRzdXJnZS5jb20vbmV3cy8yMDE2LTEwLTI2LXB1cnN1aW5nLWFjYWRlbWljLWZyZWVkb20tYW5kLWRhdGEtcHJpdmFjeS1pcy1hLWJhbGFuY2luZy1hY3RcIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LmVkc3VyZ2UuY29tL25ld3MvMjAxNi0xMC0yNi1wdXJzdWluZy1hY2FkZW1pYy1mcmVlZG9tLWFuZC1kYXRhLXByaXZhY3ktaXMtYS1iYWxhbmNpbmctYWN0PC9hPlxyXG48L3A+XHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjMuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5ibG9vbWJlcmcuY29tL25ld3MvYXJ0aWNsZXMvMjAxOC0wMy0yMS9wYXVsLWZvcmQtZmFjZWJvb2staXMtd2h5LXdlLW5lZWQtYS1kaWdpdGFsLXByb3RlY3Rpb24tYWdlbmN5XCJcclxudGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuYmxvb21iZXJnLmNvbS9uZXdzL2FydGljbGVzLzIwMTgtMDMtMjEvcGF1bC1mb3JkLWZhY2Vib29rLWlzLXdoeS13ZS1uZWVkLWEtZGlnaXRhbC1wcm90ZWN0aW9uLWFnZW5jeTwvYT5cclxuPC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGlkPVwiMTgtMDMtMTlcIiBjbGFzcz1cIiAgbWFyIDE4LTAzIC0xOVwiPlxyXG5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjbWFydG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg0IGNsYXNzPVwiICB0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcbjxoNSBjbGFzcz1cIiAgc3ViZGFpbHl0ZWNoXCI+U29jaW9sb2d5IFRvbW9ycm93ITwvaDU+XHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMTksIDIwMTg8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+QSBOZXcgUG9saXRpY3Mgb2YgUG93ZXI6XHJcbjxiciAvPiBUaGUgQ3J5cHRvZ3JhcGhpYyBGaW5hbmNpYWwgRXNjYXBlIEhhdGNoXHJcbjwvaDY+XHJcbjxwPkkgaGFkIG9yaWdpbmFsbHkgaW50ZW5kZWQgZm9yIGEgcG9zdCBvbiB0aGUgdmVyeSBsYW1lbnRhYmxlXHJcbjxpPkJsb2NrYnVzdGVyLWl6YXRpb248L2k+IGFuZCBldmVudHVhbCBkZW1pc2Ugb2YgVG95cy1cIlJcIi1VcywgYnV0IFRlY2ggQWZmYWlycyBoYXBwZW4gdG9vIHF1aWNrbHkhIEluc3RlYWQgLi4uPC9wPlxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+VG9kYXksIFVTIGluc2VydGVkIGl0c2VsZiBpbnRvIGEgbGFyZ2UsIGRlZXAgZGViYXRlIGFib3V0IGNyeXB0by1sZWdpdGltYWN5IGJ5IGltcG9zaW5nIG5ldyBzYW5jdGlvbnMgb24gVmVuZXp1ZWxhLlxyXG5JbiBjYXNlIHlvdSBoYWRuJ3QgaGVhcmQsIGhlcmUncyBhIHF1aWNrIHJlY2FwOjwvcD5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlRoZSBhZG1pbmlzdHJhdGlvbuKAmXMgYW5ub3VuY2VtZW50IGNhbWUgYSBmZXcgaG91cnMgYWZ0ZXIgTXIuIFRydW1wIHNpZ25lZCBhbiBleGVjdXRpdmUgb3JkZXIgYmFycmluZyB0aGUgdXNlIG9mIGFueVxyXG5kaWdpdGFsIGN1cnJlbmN5IGlzc3VlZCBieSB0aGUgTWFkdXJvIGdvdmVybm1lbnQgc2luY2UgSmFuLiA5LiBNci4gTWFkdXJvIGFubm91bmNlZCBsYXN0IG1vbnRoIHRoYXQgaGlzIGNvdW50cnlcclxuaGFkIGJlZ3VuIGEgcHJlc2FsZSBvZiB0aGUgUGV0cm8sIGJhY2tlZCBieSB0aGUgbmF0aW9u4oCZcyB2YXN0IHBldHJvbGV1bSByZXNlcnZlcy5cclxuPGJyIC8+XHJcbjxiciAvPlRoZSBWZW5lenVlbGFuIGdvdmVybm1lbnQgY2FsbGVkIHRoZSBsYXVuY2ggYSByZXNwb25zZSB0byBhIGZpbmFuY2lhbCBjcmlzaXMgdGhhdCBoYXMgcHJvbXB0ZWQgYSBwcm9mb3VuZCBkZXZhbHVhdGlvblxyXG5vZiB0aGUgbmF0aW9uYWwgY3VycmVuY3ksIHRoZSBib2zDrXZhciwgYW5kIHF1YWRydXBsZS1kaWdpdCBpbmZsYXRpb24uXHJcbjxzdXA+MTwvc3VwPlxyXG48L3A+XHJcbjxwPlxyXG5UaGlzIHR1cm4gb2YgZXZlbnRzLCBib3RoIE1hZHVybyBldCBhbC4ncyBmaW5hbmNpYWwgY2xldmVybmVzcyBhbmQgVHJ1bXAncyBhY3Rpb24gdG8gZGUtbGVnaXRpbWF0ZSB0aGUgUGV0cm8gY3J5cHRvLWN1cnJlbmN5LFxyXG5hcmUgZXhhbXBsZXMgb2YgdGhlIHVuZGVmaW5lZCwgbmVhci1saW1pdGxlc3MgcG9saXRpY2FsIHVzZXMgZm9yIEJsb2NrY2hhaW4gVGVjaCwgYm90aCBvZmZlbnNpdmVseSBhbmQgZGVmZW5zaXZlbHkuXHJcbkluIGZhY3QsIHRoZSBlbnN1aW5nIGV2ZW50cyBtYXkgYmUgb2YgZ3JlYXQgaW50ZXJlc3QgYXMgd2Ugd2lsbCB3aXRuZXNzIGEgbWFqb3IgZmlyc3QgYWN0dWFsIHVzZS1jYXNlIG9mIHRoZSBkZWNlbnRyYWxpemluZ1xyXG5haW1zIG9mIGNyeXB0by10ZWNobm9sb2d5IHRvb2wuIEEgdG9vbCB0aGF0IHNvZnRlbnMgdGhlIGZpbmFuY2lhbCBsZXZlcmFnZSB3aWVsZGVkIGJ5IGNlbnRyYWxpemVkIGF1dGhvcml0aWVzLCB3aGV0aGVyXHJcbmdvdmVybm1lbnRhbCBvciBwcml2YXRlLlxyXG48L3A+XHJcbjxwPkkgdXNlZCB0aGUgdGVybSBcImRlLWxlZ2l0aW1hdGVcIiBhYm92ZSBiZWNhdXNlIHRoZXJlIGFyZSB0d28gcHJvY2Vzc2VzIGF0IHdvcms6IEZpcnN0LCBjcnlwdG8tY3VycmVuY2llcyBhcmVcclxuPGk+aW4gdGhlbXNlbHZlczwvaT4gbm90IGxlZ2l0aW1hdGUuIEFcclxuPHN0cm9uZz5jcnlwdG8tY3VycmVuY3kgcGxhdGZvcm0gZ2FpbnMgbGVnaXRpbWFjeSB0aHJvdWdoIGEgc2VyaWVzIG9mIGJvdGggdGVjaG5pY2FsIGFuZCBmaW5hbmNpYWwgdHJ1c3QtYnVpbGRpbmcgc3RhZ2VzPC9zdHJvbmc+LlxyXG5TbyBsZWdpdGltYWN5IGlzIGVhcm5lZCBmaXJzdCBwcml2YXRlbHksIGFuZCBzb21lIGN1cnJlbmN5IHBsYXRmb3JtcyBjb250aW51ZSBwdWJsaWNseSB0byBJbml0aWFsIENvaW4gT2ZmZXJpbmcsXHJcbmFuZCBzbyBvbi0tcHVyZWx5IGZpbmFuY2lhbCBhbmQgdGVjaG5pY2FsIGxlZ2l0aW1hY3kuXHJcbjwvcD5cclxuPHA+QW5kIHRoZW4sIHRoZXJlIGlzIHRoZSBhbm90aGVyIGtpbmQgb2YgbGVnaXRpbWFjeSwgd2hpY2ggaW52b2x2ZXMgcG9saXRpY2FsIGxldmVyYWdlIC4uLiA8L3A+XHJcbjxwIGNsYXNzPVwiY2l0ZVwiPjEuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5ueXRpbWVzLmNvbS8yMDE4LzAzLzE5L3dvcmxkL2FtZXJpY2FzL3RydW1wLXZlbmV6dWVsYS1zYW5jdGlvbnMtcGV0cm8uaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTgvMDMvMTkvd29ybGQvYW1lcmljYXMvdHJ1bXAtdmVuZXp1ZWxhLXNhbmN0aW9ucy1wZXRyby5odG1sPC9hPlxyXG48L3A+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCIxOC0wMy0xN1wiIGNsYXNzPVwiICBtYXIgMTgtMDMgLTE3XCI+XHJcblxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiNtYXJ0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5NdXNpbmcgQmxvY2tjaGFpbjwvaDU+XHJcblxyXG48cCBjbGFzcz1cIiAgYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiICBjaGFwdGVybnVtYmVyXCI+TWFyY2ggMTctMTggMjAxOFxyXG48YnIgLz4gV2Vla2VuZFxyXG48L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiZGFpbHl0aXRsZSBjaGFwdGVybnVtYmVyXCI+IEVuZXJneSBBbHRlcm5hdGl2ZXMgU2lnbmFsIHRoZSBQb3dlciBTaGlmdCB0byBDb21lLCBQYXJ0IElJOiBBIFJpcHBsZSBhbmQgYW4gSW90YSBvZiBTdXN0YWluYWJsZSBDcnlwdG8tQ3VycmVuY3lcclxuPC9oNj5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPklvdGEgYW5kIFJpcHBsZSBjcnlwdG9jdXJyZW5jaWVzIHVzZSBkaWZmZXJlbnQgdGVjaG5vbG9neSB0aGFuIHRyYWRpdGlvbmFsIGJsb2NrY2hhaW4gaW4gb3JkZXIgdG8gYWNoaWV2ZSB0aGVpciBkaXN0cmlidXRlZFxyXG5sZWRnZXJzLiBUcmFkaXRpb25hbGx5LCBvdXRzaWRlIFwibWluZXJzXCIgdmFsaWRhdGUgdGhlIGJsb2NrJ3NcclxuPGk+IHRyYW5zYWN0aW9uIHJlY29yZHM8L2k+IGFzIGl0IHJlcGxpY2F0ZXMgdG8gdGhlIG5leHQgXCJibG9jay5cIiBGb3IgZXhhbXBsZSwgYSB0cmFuc2FjdGlvbiBpcyB2YWxpZGF0ZWQgMiBvciB0aHJlZVxyXG50aW1lcywgYW5kIHNpbmNlIHRocmVlIG1pbmVycycgdmFsaWRhdGlvbnMgYWxsIGFncmVlLCBvbmUgaXMga2VwdCBhbmQgdHdvIGFyZSBkZXN0cm95ZWQsIGluIGEgbnV0c2hlbGw7IG9uZSBleGFtcGxlXHJcbm9mIGNvbXB1dGF0aW9ucyAoXHJcbjxzdHJvbmc+YW5kIGhlbmNlIGNvYWw8L3N0cm9uZz4pIHRoYXQgY29zdCB0b28gbXVjaCB0aW1lIGFuZCBlbmVyZ3kuPC9wPlxyXG48cD5Vbmxpa2UgdGhpcyBhcnJhbmdlbWVudCwgSW90YSwgUmlwcGxlLCBhbmQgSGVkZXJhIHVzZSBhIGRpcmVjdGVkLWFjeWNsaWMtZ3JhcGggKERBRykgZGF0YSBzdHJ1Y3R1cmUgKHNoYXBlZCBsaWtlXHJcbmEgc2lkZXdheXMgZ2VuZWFsb2d5IHRyZWUpIHRoYXQgcmVsaWVzIG9uIFwiY29uc2Vuc3VzXCIgZnJvbSBpdHMgbmVhcmVzdCBuZWlnaGJvciB0cmFuc2FjdGlvbiBub2Rlcy5cclxuPHN1cD4xPC9zdXA+XHJcbjwvcD5cclxuPHA+RW5vdWdoIHdpdGggdGhlIGphcmdvbiEgVGhlIGJvdHRvbSBsaW5lIGlzIHRoYXQgQml0Y29pbidzIHRlY2ggaXMgbm90IGVjby1zdXN0YWluYWJsZSxcclxuPHN1cD4yPC9zdXA+IGFuZCBzbyBhbHRlcm5hdGl2ZXMgYXJlIGFscmVhZHkgY2xvc2luZyBpbiBvbiBCaXRjb2luLiBJb3RhLCB0aGUgOHRoIGxhcmdlc3QgY3J5cHRvY3VycmVuY3kgSW90YSBkZWxpdmVyc1xyXG5vcGVuLXNvdXJjZSB0cmFuc3BhcmVuY3ksIGxpZ2h0bmluZyBzcGVlZCwgYW5kIHlldCBpcyBpdCBjcnlwdG9ncmFwaGljYWxseSBzb3VuZD8gTm90IGFjY29yZGluZyB0byBzb21lIHRlY2ggcHVuZGl0czpcclxuPC9wPlxyXG48cCBjbGFzcz1cInF1b3RlXCI+WW91IG1pZ2h0IHRoaW5rIHRoYXQgSU9UQSwgYSBjcnlwdG9jdXJyZW5jeSB3b3J0aCBvdmVyIGEgYmlsbGlvbiBkb2xsYXJzLCBhbmQgd29ya2luZyB3aXRoIG9yZ2FuaXphdGlvbnMgbGlrZSBNaWNyb3NvZnQsXHJcblVuaXZlcnNpdHkgQ29sbGVnZSBMb25kb24sIElubm9neSwgYW5kIEJvc2NoLCBCTlkgTWVsbG9uLCBDaXNjbywgYW5kIEZveGNvbm4gKHRocm91Z2ggdGhlIFRydXN0ZWQgSU9UIEFsbGlhbmNlKVxyXG53b3VsZCBub3QgaGF2ZSBmYWlybHkgb2J2aW91cyB2dWxuZXJhYmlsaXRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5LCB0aGF04oCZcyBub3QgdGhlIGNhc2UuIFdoZW4gd2UgdG9vayBhIGxvb2sgYXQgdGhlaXJcclxuc3lzdGVtLCB3ZSBmb3VuZCBhIHNlcmlvdXMgdnVsbmVyYWJpbGl0eSBhbmQgdGV4dGJvb2sgaW5zZWN1cmUgY29kZS5cclxuPGJyIC8+XHJcbjxiciAvPiDigJxJbiAyMDE3LCBsZWF2aW5nIHlvdXIgY3J5cHRvIGFsZ29yaXRobSB2dWxuZXJhYmxlIHRvIGRpZmZlcmVudGlhbCBjcnlwdGFuYWx5c2lzIGlzIGEgcm9va2llIG1pc3Rha2UuIEl0IHNheXMgdGhhdFxyXG5ubyBvbmUgb2YgYW55IGNhbGlicmUgYW5hbHl6ZWQgdGhlaXIgc3lzdGVtLCBhbmQgdGhhdCB0aGUgb2RkcyB0aGF0IHRoZWlyIGZpeCBtYWtlcyB0aGUgc3lzdGVtIHNlY3VyZSBpcyBsb3cs4oCdIHN0YXRlc1xyXG5CcnVjZSBTY2huZWllciwgcmVub3duZWQgc2VjdXJpdHkgdGVjaG5vbG9naXN0LCBhYm91dCBJT1RBIHdoZW4gd2Ugc2hhcmVkIG91ciBhdHRhY2suXHJcbjxzdXA+Mzwvc3VwPlxyXG48L3A+XHJcbjxwPkFuZCBzbywgd2l0aCBhIDEuOSBiaWxsaW9uIG1hcmtldCBjYXAsIEkgc29tZXRpbWVzIGhhdmUgdG8gcmVmbGVjdCBvbiB0aGUgaW1tZW5zaXR5IGFuZCBub24tcmVsYXRpb25hbCBmYWN0IGFuZCBmaWd1cmVzXHJcbm9mIG91ciB0ZWNobm9sb2dpY2FsIHdvcmxkISBTZWN1cml0eSBhbmQgb3RoZXIgYnVncyBhcmUgaGFyZCB0byBhdm9pZCB3aGVuIGFuIGluZHVzdHJ5IGlzIG1vdmluZyB0b28gZmFzdCBmb3IgdGhvcm91Z2hseVxyXG50ZXN0ZWQgYmV0YXM7IGFuZCBlYWNoIGl0ZXJhdGlvbiBpbnZvbHZlcyBhIHNlcmllcyBvZiBidWctcGF0Y2hlcywgd2l0aCBzaG9ydC0gYW5kIGxvbmctdGVybSBwcmlvcml0aWVzIHN0cmV0Y2hlZFxyXG53aXRoIG5ldyBkZXNpZ24gJmFtcDsgZnVuY3Rpb24gdHJhZGUtb2Zmcy48L3A+XHJcbjxwPlxyXG5GdWxsIGxpZmUtY3ljbGUgc29mdHdhcmUgZGV2ZWxvcG1lbnQsIGZyb20gbmFwa2luLWlkZWEgdG8gcm9sbGluZyBzcGVjcywgYWx3YXlzIGZvbGxvd3MgdGhlc2UgcGF0dGVybnMgeWV0IG5vdCBhbHdheXMgd2l0aFxyXG5zbyBtdWNoIG1vbmV5IG9uIHRoZSBsaW5lISBIZXJlJ3MgYSBjbG9zZXIgbG9vayBhdCBvbmUgY3JpdGlxdWUgb2YgSW90YTo8L3A+XHJcbjxwIGNsYXNzPVwicXVvdGVcIj5cclxuSU9UQSBkZXZlbG9wZXJzIGhhZCB3cml0dGVuIHRoZWlyIG93biBoYXNoIGZ1bmN0aW9uLCBpdCB3YXMgYSBodWdlIHJlZCBmbGFnIC4uLiBJIHRoaW5rIGl04oCZcyBpbXBvcnRhbnQgdG8gcmVpdGVyYXRlIHRoYXRcclxudGhlIElPVEEgZGV2ZWxvcGVycyBkbyBub3QgYWdyZWUgd2l0aCBvdXIgY2hhcmFjdGVyaXphdGlvbiBvZiB0aGlzIGFzIGFuIGlzc3VlIG9mIGNvbmNlcm4uIE91ciByZXBvcnQgbGF5cyBvdXQgbW9yZVxyXG5kZXRhaWxzIGFib3V0IHdoeSB3ZSBhcmUgY29uY2VybmVkLlxyXG48YnIgLz5cclxuPGJyIC8+IFRoZXJlIGFyZSBvdGhlciByZWQgZmxhZ3PigIrigJTigIp1bmxpa2UgZXZlcnkgb3RoZXIgcHJvZ3JhbSBydW5uaW5nIG9uIHlvdXIgbGFwdG9wIG9yIHBob25lLCBJT1RBIHVzZXMgdGVybmFyeSBpbnN0ZWFkXHJcbm9mIGJpbmFyeS4gU2luY2UgYWxsIGNvbXB1dGVyIGhhcmR3YXJlIHRvZGF5IHVzZXMgYmluYXJ5LCBJT1RBIGNvbnZlcnRzIHRvIHRlcm5hcnkgaW4gc29mdHdhcmUsIHdoaWNoIGlzIGxlc3MgZWZmaWNpZW50XHJcbmFuZCBtb3JlIGNvbXBsZXguIFRoaXMgY29tcGxleGl0eSBwcmV2ZW50cyBJT1RBIGZyb20gYmVuZWZpdGluZyBmcm9tIGV4aXN0aW5nIHNlY3VyaXR5IGFuYWx5c2lzIHRvb2xzIHRoYXQgYXJlIGRlc2lnbmVkXHJcbnRvIHdvcmsgd2l0aCBiaW5hcnksIGFuZCBtYWtlcyB0aGUgY29kZSBoYXJkZXIgdG8gcmVhZCBhbmQgdW5kZXJzdGFuZC5cclxuPGJyIC8+XHJcbjxiciAvPiBUaGUgY3VycmVudCBJT1RBIHRhbmdsZSByZXF1aXJlcyBhIHRydXN0ZWQgcGFydHkgKHRoZSBjb29yZGluYXRvcikgZm9yIHNlY3VyaXR5LCBzdWdnZXN0aW5nIHRoYXQgaW4gaXRzIGN1cnJlbnRcclxuZm9ybSBpdOKAmXMgbm90IHJlYWR5IHRvIHJ1biBhcyBhIHRydWx5IHBlcm1pc3Npb25sZXNzLCBkZWNlbnRyYWxpemVkIHN5c3RlbS5cclxuPHN1cD4zPC9zdXA+XHJcbjwvcD48cD5cclxuT3B0aW1pemluZywgbm90IHNhY3JpZmljaW5nLCBzaG91bGQgYmUgdGhlIG5hbWUgb2YgdGhlIGdhbWUgYXMgVGVjaCBjbG9zZXMgaW4gb24gQmxvY2tjaGFpbiBjaGFsbGVuZ2VzIG9mIHNlY3VyaXR5LCBzY2FsYWJpbGl0eSxcclxuYW5kIHRoYXQgZXZlcnMtc28tY29zdGx5XHJcbjxzdHJvbmc+U3VzdGFpbmFiaWxpdHkhPC9zdHJvbmc+XHJcbjwvcD5cclxuPHA+MS5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDE4LTAyLTE0L25leHQtZ2VuZXJhdGlvbi1jcnlwdG8tbGVkZ2Vycy10YWtlLXRoZS1ibG9jay1vdXQtb2YtYmxvY2tjaGFpblwiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuYmxvb21iZXJnLmNvbS9uZXdzL2FydGljbGVzLzIwMTgtMDItMTQvbmV4dC1nZW5lcmF0aW9uLWNyeXB0by1sZWRnZXJzLXRha2UtdGhlLWJsb2NrLW91dC1vZi1ibG9ja2NoYWluPC9hPlxyXG48L3A+XHJcbjxwPjIuXHJcbjxhIGhyZWY9XCJcclxuaHR0cHM6Ly9kaWdpY29ub21pc3QubmV0L2JpdGNvaW4tZWxlY3RyaWNpdHktY29uc3VtcHRpb24tc3VycGFzc2VzLXNpbmdhcG9yZS1wb3J0dWdhbFxyXG5cIiB0YXJnZXQ9XCJfYmxhbmtcIj4gaHR0cHM6Ly9kaWdpY29ub21pc3QubmV0L2JpdGNvaW4tZWxlY3RyaWNpdHktY29uc3VtcHRpb24tc3VycGFzc2VzLXNpbmdhcG9yZS1wb3J0dWdhbCA8L2E+XHJcbjwvcD5cclxuPHA+My5cclxuPGEgaHJlZj1cIlxyXG5odHRwczovL21lZGl1bS5jb20vQG5laGEvY3J5cHRvZ3JhcGhpYy12dWxuZXJhYmlsaXRpZXMtaW4taW90YS05YTZhOWRkYzQzNjdcclxuXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IGh0dHBzOi8vbWVkaXVtLmNvbS9AbmVoYS9jcnlwdG9ncmFwaGljLXZ1bG5lcmFiaWxpdGllcy1pbi1pb3RhLTlhNmE5ZGRjNDM2NzwvYT5cclxuPC9wPlxyXG5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBpZD1cIjE4LTAzLTE2XCIgY2xhc3M9XCIgIG1hciAxOC0wMyAtMTdcIj5cclxuXHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI21hcnRvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+XHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPk11c2luZyBCbG9ja2NoYWluPC9oNT5cclxuXHJcbjxwIGNsYXNzPVwiICBhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCIgIGNoYXB0ZXJudW1iZXJcIj5NYXJjaCAxNiwgMjAxODwvaDY+XHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj4gRW5lcmd5IEFsdGVybmF0aXZlcyBTaWduYWwgdGhlIFBvd2VyIFNoaWZ0IHRvIENvbWVcclxuPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5TdXN0YWluYWJpbGl0eSBmb3IgdGhlIGVudmlyb25tZW50IG1lYW5zIGFuIGFjY2VsZXJhdGVkIHRyYW5zaXRpb24gdG8gcmVuZXdhYmxlcy4gV2hpbGUgb3RoZXIgbmF0aW9ucyBoYXZlIHVuZGVydGFrZW5cclxuYmlnIHN0ZXBzIHRvd2FyZCB3aW5kIGFuZCBzb2xhciAtIGV2ZW4gQ2hpbmEncyBwb2xsdXRpb24gZGVjbGluZWQgaW4gMjAxNCBmb3IgdGhlIGZpcnN0IHRpbWVcclxuPHN1cD4xPC9zdXA+LiBFVSBpcyBub3cgMzAlIHJlbmV3YWJsZS0tZnJvbSAxMiUgaW4gMjAwMCB0byBleHBlY3RlZCA1MCUgcmVuZXdhYmxlIGVuZXJneSBieSAyMDMwXHJcbjxzdXA+Mjwvc3VwPi4gVXMsIGl0IGFwcGVhcnMsIG5vdCBzbyBtdWNoLi4ub3VjaC48L3A+XHJcbjxwPldoYXQgY2FuIHdlIGRvIHRoZW4sIGluIG91ciBsaXZlcywgdG8gbWFrZSBvdXIgb3duIGNvbnRyaWJ1dGlvbi4gV2VsbCwgYmVzaWRlcyBsZXNzIGZvc3NpbCBmdWVscyBhbmQgcmVkIG1lYXQsIHdlXHJcbmNhbiBjaG9vc2Ugb3VyIGNyeXB0b2N1cnJlbmNpZXMgbW9yZSBjb25zY2llbnRpb3VzbHkuIE9uZSBOWSB0b3duJ3MgcmVjZW50IGFjdGlvbnMgZWNobyBteSBvd24gY29uY2VybnMgYWJvdXQgdGhlXHJcbmVub3Jtb3VzIGNhcmJvbiBmb290cHJpbnQgb2YgXCJQcm9vZi1vZi1Xb3JrXCIgYmxvY2tjaGFpbiBtaW5pbmcuXHJcbjwvcD5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlxyXG5UaGUgY2l0eSBvZiBQbGF0dHNidXJnaCBoYXMgcHV0IGEgbW9yYXRvcml1bSBvbiBjcnlwdG9jdXJyZW5jeSBtaW5pbmcgdG8gcHJlc2VydmUgbmF0dXJhbCByZXNvdXJjZXMsIHRoZSBoZWFsdGggb2YgaXRzIHJlc2lkZW50c1xyXG5hbmQgdGhlIGNpdHnigJlzIOKAnGNoYXJhY3RlciBhbmQgZGlyZWN0aW9uLOKAnSBvZmZpY2lhbHMgc2FpZCBhZnRlciBhIHB1YmxpYyBoZWFyaW5nIFRodXJzZGF5LiBGb3IgMTggbW9udGhzLCB0aGUgMjAsMDAwLXJlc2lkZW50XHJcbmNpdHkgd2lsbCBub3QgY29uc2lkZXIgbmV3IGFwcGxpY2F0aW9ucyBmb3IgY29tbWVyY2lhbCBjcnlwdG9jdXJyZW5jeSBtaW5pbmcuIFZpb2xhdG9ycyB3aWxsIGZhY2UgZmluZXMgb2YgdXAgdG9cclxuJDEsMDAwIGZvciBlYWNoIGRheSB0aGV5IGRlZnkgdGhlIG1vcmF0b3JpdW0uXHJcbjxzdXA+Mzwvc3VwPlxyXG48L3A+XHJcbjxwPlNvLCBtZSB0b28gLSBjb3VudCBtZSBvdXQsIEkgY2FuJ3QgaGVscCBidXQgZG8gdGhlIHNhbWUsIGFuZCBwcm9ub3VuY2UgbXkgb3duIHJlZnJhaW4gZnJvbSBCaXRjb2luICh0aGlzIGlzIG1vcmVcclxuc3Bpcml0dWFsIHNpbmNlIEkgZG9uJ3Qgb3duLCBub3IgbWluZSkuIEluIGNvbnRyYXN0LCBJJ2xsIHB1dCBFdGhlcmV1bSBvbiBob2xkIHNpbmNlIHRoZXkgYXJlIHRyYW5zaXRpb25pbmcgdG8gYVxyXG56ZXJvIGNhcmJvbi1mb290cHJpbnQgYnkgeWVhcidzIGVuZC4gPC9wPlxyXG48cD5BbmQsIGZvciB0aGUgbW9zdCBlbnZpcm9ubWVudGFsbHkgZnJpZW5kbHkgY3J5cHRvY3VycmVuY2llcywgSSB3aG9sbHkgc3VwcG9ydCBSaXBwbGUgKDNyZCBoaWdoZXN0IHZhbHVlZCBjcnlwdG9jdXJyZW5jeSlcclxuYW5kIGFsc28gY2xlYW5cclxuPGk+SW90YTwvaT4gKDh0aCBoaWdoZXN0IHZhbHVlZCApXHJcbjxzdXA+NTwvc3VwPi4gUmlwcGxlLCB1bmZvcnR1bmF0ZWx5LCBpcyBhIHByaXZhdGUgY29tcGFueSB3aXRoIGEgbGVzcy1hY2Nlc3NpYmxlIGludGVybmFsIGRpc3RyaWJ1dGVkIGxlZGdlci4gQW5kIHlldCxcclxuSGVkZXJhIEhhc2hncmFwaCBoZXJhbGRzIHRoZSBtb3N0IG9wdGltaXN0aWMgbmV3cyBvZiBhbGw6IEEgYmxpbmRsaW5nbHkgZmFzdCBIYXNoZ3JhcGggc3RydWN0dXJlLCB1bmJvdW5kIGZyb20gYW55XHJcbmNhcmJvbiBmb290cHJpbnQuXHJcbjwvcD5cclxuPHA+MS5cclxuPGEgaHJlZj1cImh0dHA6Ly93d3cud3JpLm9yZy9ibG9nLzIwMTcvMDEvY2hpbmElRTIlODAlOTlzLWRlY2xpbmUtY29hbC1jb25zdW1wdGlvbi1kcml2ZXMtZ2xvYmFsLXNsb3dkb3duLWVtaXNzaW9uc1wiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cDovL3d3dy53cmkub3JnL2Jsb2cvMjAxNy8wMS9jaGluYSVFMiU4MCU5OXMtZGVjbGluZS1jb2FsLWNvbnN1bXB0aW9uLWRyaXZlcy1nbG9iYWwtc2xvd2Rvd24tZW1pc3Npb25zPC9hPlxyXG48L3A+XHJcbjxwPjIuXHJcbjxhIGhyZWY9XCJodHRwczovL3F6LmNvbS8xMTkzNjAzL3R3by1jb3VudHJpZXMtYXJlLXRoZS1yZWFzb24tdGhlLWV1LWlzLWhpdHRpbmctaXRzLWFtYml0aW91cy1yZW5ld2FibGUtZW5lcmd5LXRhcmdldHMvXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3F6LmNvbS8xMTkzNjAzL3R3by1jb3VudHJpZXMtYXJlLXRoZS1yZWFzb24tdGhlLWV1LWlzLWhpdHRpbmctaXRzLWFtYml0aW91cy1yZW5ld2FibGUtZW5lcmd5LXRhcmdldHMvPC9hPlxyXG48L3A+XHJcbjxwPjMuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vYnVzaW5lc3MvZWNvbm9teS91cHN0YXRlLW5ldy15b3JrLXRvd24tYmFucy1iaXRjb2luLW1pbmluZy8yMDE4LzAzLzE2L2JkNmY2NjllLTI5NDctMTFlOC1iYzcyLTA3N2FhNGRhYjllZl9zdG9yeS5odG1sP3V0bV90ZXJtPS42MjgyZWE4NDI5ZDVcIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9idXNpbmVzcy9lY29ub215L3Vwc3RhdGUtbmV3LXlvcmstdG93bi1iYW5zLWJpdGNvaW4tbWluaW5nPC9hPlxyXG48L3A+XHJcbjxwPjQuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5ibG9vbWJlcmcuY29tL25ld3MvYXJ0aWNsZXMvMjAxOC0wMi0xNC9uZXh0LWdlbmVyYXRpb24tY3J5cHRvLWxlZGdlcnMtdGFrZS10aGUtYmxvY2stb3V0LW9mLWJsb2NrY2hhaW5cIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDE4LTAyLTE0L25leHQtZ2VuZXJhdGlvbi1jcnlwdG8tbGVkZ2Vycy10YWtlLXRoZS1ibG9jay1vdXQtb2YtYmxvY2tjaGFpbjwvYT5cclxuPC9wPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCIxOC0wMy0xNVwiIGNsYXNzPVwiICBtYXIgMTgtMDMgLTE1XCI+XHJcblxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiNtYXJ0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDQgY2xhc3M9XCIgIHRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuPGg1IGNsYXNzPVwiICBzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cIiAgY2hhcHRlcm51bWJlclwiPk1hcmNoIDE1LCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPkkgTG92ZSB0aGlzIFJlY29yZCBCYWJ5IGJ1dCBJIENhbid0IFNlZSBTdHJhaWdodCBBbnltb3JlOlxyXG48YnIgLz5JdCdzIEdvbm5hIGJlIE9rYXksIEZsaXAgdGhhdCBSZWNvcmQgYW5kIEp1c3QgRGFuY2UhXHJcbjwvaDY+XHJcbjxwPi1MYWR5IEdhZ2E8L3A+XHJcbjxiciAvPlxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+XHJcbjxzdHJvbmc+Q3JlYXRvcnMgaW4gdGhlIERpZ2l0YWwgQWdlPC9zdHJvbmc+LCBlc3BlY2lhbGx5IE11c2ljaWFucywgaGF2ZSBmYWNlZCBqdXN0IGEgcGFub3BseSBvZiBidXNpbmVzcyBtb2RlbCBjaGFsbGVuZ2VzLFxyXG5ub3RhYmx5IHNpbmNlIHRoZSAyMDAwcydcclxuPGk+TmFwc3RlciBFcmE8L2k+LiBBbmQgeWV0LCB0aGlzIGlzIHRoZSBhZ2Utb2xkLWNhc2Ugb2YgbmV3IHRlY2hub2xvZ2llcyByZXNoYXBpbmcgbG9uZy1zdGFuZGluZyBmaWVsZHMsIGVzcGVjaWFsbHlcclxuZmluYW5jaWFsIHN0cnVjdHVyZSAtIHRoZSBib3R0b20gbGluZSEgQWxsIGNyZWF0aXZlIGZpZWxkcyBhbHNvIGhhdmUgdGVjaG5vbG9naWNhbCBmZWF0dXJlcyBvbiB0aGUgaG9yaXpvbiB0aGF0XHJcbm1heSwgcG90ZW50aWFsbHkgbW92ZSB0aGUgcGxheWluZyBmaWVsZC4gRmlyc3Qgc29tZSByZWNlbnQgYmFja2dyb3VuZDogPC9wPlxyXG48cCBjbGFzcz1cInF1b3RlXCI+XHJcbldoaWxlIFtUYXlsb3IgU3dpZnRdIGlzIGNlcnRhaW5seSBtYWtpbmcgbW9uZXkgaW4gcmV0YWlsIHNhbGVzIGFuZCBkaWdpdGFsIGRvd25sb2FkcywgYm90aCBvZiB0aG9zZSBtZXRyaWNzIGFyZSBzcGlyYWxpbmdcclxuZG93bndhcmQgYXMgcGVvcGxlIG1pZ3JhdGUgYXdheSBmcm9tIHRoZSBjb25jZXB0IG9mIG93bmluZyBtdXNpYyBhdCBhbGwuIE5pZWxzZW4gcmVjZW50bHkgcmVsZWFzZWQgbnVtYmVycyBpbmRpY2F0aW5nXHJcbnN1YnN0YW50aWFsIGRyb3BzIGluIGJvdGggQ0QgYW5kIGRpZ2l0YWwtdHJhY2sgc2FsZXMsIHdoaWNoIGFyZSBkb3duIGFsbW9zdCAkMTAwIG1pbGxpb25cclxuPGk+eWVhciBvdmVyIHllYXI8L2k+IGZyb20gMjAxNDsgc3RyZWFtaW5nIG11c2ljIGNvbnRpbnVlcyB0byBncm93LCBidXQgdGhlIHJldmVudWUgaXQgZ2VuZXJhdGVzIGlzbuKAmXQgY2xvc2UgdG8gbWFraW5nXHJcbnVwIHRoZSBkaWZmZXJlbmNlLCB5ZXQuXHJcbjxzdXA+MTwvc3VwPlxyXG48L3A+XHJcbjxwPk1vc3QgcmVtZW1iZXIgVGF5bG9yIFN3aWZ0J3MgMjAxNCBpbmR1c3RyeS1zaGFraW5nIGFsYnVtIHdpdGhkcmF3IGluIHByb3Rlc3QgdG8gU3BvdGlmeSdzIHBheW1lbnQgc3RydWN0dXJlLiBUaGVcclxubmV4dCB5ZWFyIFRheWxvciB0b29rIG9uIEFwcGxlIGlUdW5lcy0tdG8gd2hpY2ggQXBwbGUgYmVuZGVkIHRvIFRheWxvcidzIFdheVxyXG48c3VwPjI8L3N1cD4uIFRoZXNlIHdpbnMgYXJlIGFtYXppbmcgYnV0IG5vdCBlbm91Z2gsIGlmIG9ubHkgZm9yIHdpbm5pbmcgYmF0dGxlcyBpbiBhIGxvc2luZyB3YXIuIDwvcD5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlNwb3RpZnkgaXMgdGhlIGZ1dHVyZS4gU3BvdGlmeSBpcyB0aGUgZW5lbXkuIFNwb3RpZnkgZG9lc27igJl0IHBheSBlbm91Z2guIFNwb3RpZnkgaXMgbXVzaWPigJlzIGJlc3QgYmV0IGZvciByZXZlbnVlXHJcbmdyb3d0aC4gU2luY2UgaXQgYXJyaXZlZCBpbiB0aGUgVW5pdGVkIFN0YXRlcyBmcm9tIFN3ZWRlbiBpbiAyMDExLCBTcG90aWZ5IGhhcyBiZWVuIGNhc3QgYXMgYm90aCBoZXJvIGFuZCB2aWxsYWluXHJcbmluIHRoZSBtdXNpYyBpbmR1c3RyeeKAmXMgY29udGludWluZyBkZWJhdGUgb3ZlciBzdHJlYW1pbmcgbXVzaWMuIDwvcD5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlxyXG5JdCBoYXMgYmVlbiBoYWlsZWQgYXMgYSBwb3RlbnRpYWwgc2F2aW9yIHRocm91Z2ggYSB0d28tdGllcmVkIOKAnGZyZWVtaXVt4oCdIG1vZGVsIHRoYXQgd291bGQgZ3JhZHVhbGx5IGx1cmUgbGlzdGVuZXJzIGF3YXkgZnJvbVxyXG5waXJhY3kuIFlldCBTcG90aWZ54oCZcyByb3lhbHR5IHJhdGVzIGhhdmUgYWxzbyB0ZXJyaWZpZWQgbWFueSBhcnRpc3RzIGFscmVhZHkgd29ycmllZCB0aGF0IGVhY2ggbmV3IHN0ZXAgaW4gbXVzaWPigJlzXHJcbmRpZ2l0YWwgZXZvbHV0aW9uIGZ1cnRoZXIgZGV2YWx1ZXMgdGhlaXIgd29yay5cclxuPHN1cD4zPC9zdXA+XHJcbjwvcD5cclxuPHA+U28gdGhlIHRyZW5kIGxvb2tzIGRpcmUsIGFuZCB5ZXQgaXMgaXQgcmVhbGx5PyBXaGVyZSwganVzdCB3aGVyZSBhcmUgdGhlXHJcbjxzdHJvbmc+VGVjaCBQbGF0Zm9ybXMgPC9zdHJvbmc+IGxlYWRpbmcgdXM/IFRlY2ggaXMgbGVhZGluZyB1c1xyXG48aT5ub3doZXJlPC9pPiwgYXQgbGVhc3Qgbm90IHRvIG9uZVxyXG48c3Ryb25nPnNpbmd1bGFyLCBjZW50cmFsaXplZCBwbGFjZTwvc3Ryb25nPjsgcmF0aGVyLCBkZWNlbnRyYWxpemVkIHRlY2gtLWluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gYmxvY2tjaGFpbi0taXMgYnVzeVxyXG5yZXdyaXRpbmcgdGhlIGJvdW5kYXJpZXMgYmV0d2VlbiBjcmVhdG9ycyBhbmQgY29uc3VtZXJzLiBUaGlzIFR1ZXNkYXkncyBGb3JiZXMgYXJ0aWNsZSByZXBvcnRlZCBvbiBuZXcgc3Vic2NyaXB0aW9uLWJhc2VkXHJcbm1vZGVsIGJ5IFBhdHJlb24uIFN0aWxsIGNsYXNzaWNhbCBXZWIgMi4wLCBpdCdzIG5vdmVsdHkgYXBwZWFycyBzbyBzaW1wbGUsIGFsbW9zdCBpbnR1aXRpdmUgaW4gcG90ZW50aWFsbHkgbmV3IHBhdGh3YXk6PC9wPlxyXG48cCBjbGFzcz1cInF1b3RlXCI+XCJPbiBLaWNrc3RhcnRlciBhbmQgSW5kaWVnb2dvLCBjcmVhdG9ycyBlc3NlbnRpYWxseSBoYXZlIHRvIHN0YXJ0IG92ZXIgZXZlcnkgdGltZSxcIiBzYXlzIERhbm55IFJpbWVyLCBhIHBhcnRuZXIgYXRcclxuSW5kZXggVmVudHVyZXMgd2hvIGlzIGEgUGF0cmVvbiBpbnZlc3RvciBhbmQgYm9hcmQgbWVtYmVyLiBcIkl0J3MgdGhlIHNhbWUgcmVhc29uIHNvZnR3YXJlIGNvbXBhbmllcyB3ZW50IGZyb20gbGljZW5zZWRcclxuc29mdHdhcmUgdG8gc3Vic2NyaXB0aW9uczogcHJlZGljdGFibGUgcmV2ZW51ZSBhbmQgYmV0dGVyIHNlcnZpY2UgZm9yIGN1c3RvbWVycy5cIlxyXG48c3VwPjQ8L3N1cD5cclxuPC9wPlxyXG48cD5cclxuQXBwYXJlbnRseSBQYXRyZW9uLCBhbG9uZyB3aXRoIGxhc3QgTm92ZW1iZXInc1xyXG48aT5EcmlwPC9pPiBieSBLaWNrU3RhcnRlciBoYXZlIG1hZGUgaGVhZHdheS4gUGF0cmVvbiBwYWlkIG91dCAkMTUwIG1pbGxpb24gdG8gaXRzIGFydGlzdHMgaW4gMjAxNywgYW5kIGVhY2ggYXJlIGRvdWJsaW5nXHJcbmFubnVhbGx5LiBEZWNlbnRyYWxpemluZyBhZ2Fpbi4gV2VsbCwgd2Ugc2F5IHdlIGNhbid0XHJcbjxpPmdvIGJhY2sgdG8gdGhlIHdheSBpdCB3YXM8L2k+LCBidXQgVGVjaCBhbHdheXMgc2VlbXMgdG8gbGVhZCB1cyBiYWNrIHRvIHRoZSB3YXkgaXQgd2FzIVxyXG48L3A+XHJcbjxwPjEuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5ueXRpbWVzLmNvbS8yMDE2LzAxLzI1L21hZ2F6aW5lL3RvdXJpbmctY2FudC1zYXZlLW11c2ljaWFucy1pbi10aGUtYWdlLW9mLXNwb3RpZnkuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTYvMDEvMjUvbWFnYXppbmUvdG91cmluZy1jYW50LXNhdmUtbXVzaWNpYW5zLWluLXRoZS1hZ2Utb2Ytc3BvdGlmeS5odG1sXHJcbjwvYT5cclxuPC9wPlxyXG48cD4yLlxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5idXNpbmVzc2luc2lkZXIuY29tL3RheWxvci1zd2lmdC1uZXctYWxidW0tcmVwdXRhdGlvbi1ub3Qtb24tc3BvdGlmeS1hcHBsZS1tdXNpYy1zdHJlYW1pbmctMjAxNy0xMVwiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cDovL3d3dy5idXNpbmVzc2luc2lkZXIuY29tL3RheWxvci1zd2lmdC1uZXctYWxidW0tcmVwdXRhdGlvbi1ub3Qtb24tc3BvdGlmeS1hcHBsZS1tdXNpYy1zdHJlYW1pbmctMjAxNy0xMVxyXG48L2E+XHJcbjwvcD5cclxuPHA+My5cclxuPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMTQvMTEvMTIvYnVzaW5lc3MvbWVkaWEvdGF5bG9yLXN3aWZ0cy1zdGFuZC1vbi1yb3lhbHRpZXMtZHJhd3MtYS1yZWJ1dHRhbC1mcm9tLXNwb3RpZnkuaHRtbFwiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAxNC8xMS8xMi9idXNpbmVzcy9tZWRpYS90YXlsb3Itc3dpZnRzLXN0YW5kLW9uLXJveWFsdGllcy1kcmF3cy1hLXJlYnV0dGFsLWZyb20tc3BvdGlmeS5odG1sXHJcbjwvYT5cclxuPC9wPlxyXG5cclxuXHJcbjxwPjQuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5mb3JiZXMuY29tL3NpdGVzL2thdGhsZWVuY2hheWtvd3NraS8yMDE4LzAyLzEzL2RpZ2l0YWwtbWVkaWNpLWhvdy10aGlzLW11c2ljaWFuLXR1cm5lZC1lbnRyZXByZW5ldXItcGxhbnMtdG8tc2F2ZS1jcmVhdG9ycy1mcm9tLWFkdmVydGlzaW5nLyM2MDYzZWE3NzEzMTNcIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2l0ZXMva2F0aGxlZW5jaGF5a293c2tpLzIwMTgvMDIvMTMvZGlnaXRhbC1tZWRpY2ktaG93LXRoaXMtbXVzaWNpYW4tdHVybmVkLWVudHJlcHJlbmV1ci1wbGFucy10by1zYXZlLWNyZWF0b3JzLWZyb20tYWR2ZXJ0aXNpbmdcclxuPC9hPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBpZD1cIjE4LTAzLTE0XCIgY2xhc3M9XCIgIG1hciAxOC0wMyAtMTRcIj5cclxuXHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI21hcnRvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNCBjbGFzcz1cIiAgdGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+XHJcblxyXG48aDUgY2xhc3M9XCIgIHN1YmRhaWx5dGVjaFwiPlNvY2lvbG9neSBUb21vcnJvdyE8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCIgIGF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cIiAgY2hhcHRlcm51bWJlclwiPk1hcmNoIDE0LCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPlxyXG48aT5Ub3VcclxuICA8c3Ryb25nPkRlbW91PC9zdHJvbmc+IHRlc1xyXG4gIDxzdHJvbmc+IEtyYXRlczwvc3Ryb25nPlxyXG48L2k+OlxyXG48YnIgLz5TdHJlbmd0aCBvZiB0aGUgUGVvcGxlPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5Ub2RheSdzIGRlbW9uc3RyYXRpb25zIGFuZCB3YWxrLW91dHMsIGxlZCBieSBBbWVyaWNhJ3MgWW91dGggYW5kIGZvbGxvd2VkIGJ5IG1hbnkgb2YgdGhlIGVkdWNhdGlvbiBzdGFmZiwgaGFzIGFpbWVkXHJcbmRpcmVjdGx5IGF0IEd1bi1Db250cm9sIGxlZ2lzbGF0aW9uLiBZZXQsIHRoZSBtZXNzYWdlIG1vcmUgcG93ZXJmdWxseSBhcnRpY3VsYXRlZCB0aGFuIGV2ZXIgYnkgYWRvbGVzY2VudC10dXJucy1hZHVsdFxyXG5zdHVkZW50cywgdGFrZXMgYWltIGF0IHNvbWV0aGluZyBmdXJ0aGVyIGFmaWVsZC4gPC9wPlxyXG48cD5TdHVkZW50cywgcmVtZW1iZXJpbmcgdGhlIEZlYnJ1YXJ5IDE0dGggbWFzc2FjcmUgdmljdGltcywgdGFrZSBhaW0gYXQgdGhlIGNvcnJ1cHRpb24gc3RlbW1pbmcgZnJvbSB0aGUgMjAxMCBTdXByZW1lXHJcbkNvdXJ0IFwiUGVyc29uLWhvb2RcIiBwcm90ZWN0aW9uIGZvciBDb3Jwb3JhdGlvbnMsIGFsc28ga25vd24gYXMgdGhlXHJcbjxpPkNpdGl6ZW5zIFVuaXRlZDwvaT4gRGVjaXNpb24uIEEgZGF0ZWQsIGJ1dCBwb2lnbmFudCwgYXJ0aWNsZSBmcm9tIE5hdGlvbmFsIFB1YmxpYyBSYWRpbyBleHBsYWluczpcclxuPC9wPlxyXG48cCBjbGFzcz1cInF1b3RlXCI+VGhlIFN1cHJlbWUgQ291cnQgZXh0ZW5kZWQgdGhhdCBwcm90ZWN0aW9uIHRvIGNvcnBvcmF0aW9ucywgYW5kIG92ZXIgdGltZSBhbHNvIGV4dGVuZGVkIHNvbWUg4oCUIGJ1dCBub3QgYWxsIOKAlCBvZiB0aGVcclxucmlnaHRzIGd1YXJhbnRlZWQgdG8gaW5kaXZpZHVhbHMgaW4gdGhlIEJpbGwgb2YgUmlnaHRzLlxyXG48c3VwPjE8L3N1cD5cclxuPC9wPlxyXG48cD5cclxuWWV0LCBpdCBhcHBlYXJzIGRlY2VwdGl2ZWx5IGhhcm1sZXNzIGZvciBDb25ncmVzc2lvbmFsIExhdy1tYWtlcnMgdG8gcHJvdGVjdCBjb3Jwb3JhdGlvbnMsIGluIHRoZSBmb3JtIG9mXHJcbjxzdHJvbmc+R3VuIE1hbnVmYWN0dXJlcnMnIExvYmJ5aXN0cywgPC9zdHJvbmc+XHJcbmFzIGVxdWFsbHkgYXMgaXQgcHJvdGVjdHMgaHVtYW5zLiBUaGUgb3JpZ2luIG9yIHRoaXMgcnVsaW5nIGRhdGVzIHRvIGEgNzAncyBOZW8tTGliZXJhbCwgcmlnaHQtbGVhbmluZyBsZWdpc2xhdGlvbiBhbmQgQ291cnRcclxucnVsaW5ncyB0aGF0IGluY2x1ZGUgYSBwaXZvdGFsIDE5NzhcclxuPGk+Rmlyc3QgTmF0aW9uYWwgQmFuayBvZiBCb3N0b24gdi4gQmVsbG90aTwvaT4gZGVjaXNpb24gYWxsb3dpbmcgZm9yIGNvcnBvcmF0aW9ucycgYmFsbG90LWluaXRpYXRpdmUgY2FtcGFpZ24gY29udHJpYnV0aW9ucyxcclxuY2l0aW5nIHRoZSBGaXJzdCBBbWVuZG1lbnQuXHJcbjxzdXA+Mjwvc3VwPlxyXG48L3A+XHJcbjxwPlxyXG5cclxuVGhlIFJlc3VsdD8gVGhlIGNvcnBvcmF0aW9uLCBpbiBcInBlcnNvblwiIGZvcm0sIHRha2VzIG9uIFBzZXVkby1IdW1hbiBxdWFsaXRpZXM6IGltbW9ydGFsLCBiZXlvbmQtbWVhc3VyZSBjYXBpdGFsLCBhbmQgcHJvZ3JhbW1hdGljYWxseVxyXG5zZXJ2aW5nIHN0b2NrLWhvbGRlcnMnIGludGVyZXN0cyB3aXRoIGN1dC10aHJvYXQgY29tcGV0aXRpb24gYXQgYWxsIGNvc3RzLiBObyBtYXRjaCBhZ2FpbnN0IGEgc3ltcGF0aGV0aWMgaHVtYW4sXHJcbnlldCB0aGUgQ29ycG9yYXRpb24gaXMgZ2l2ZW4gdGhlIHNhbWUgcmlnaHRzIGFuZCBwcml2aWxlZ2VzIGFzIHRoZSBtYW4gaW4gdGhlIHN0cmVldC4gTm93LCBpbiB0aGUgZmFjZSBvZiB0d28gZGVjYWRlcydcclxuZGVhZCBodW1hbnMtLWFzIHlvdW5nIGFzXHJcbjxpPlNhbmR5IEhvb2sgRWxlbWVudGFyeTwvaT4sIHdoaWNoIHdlcmUgbm90IHByb3RlY3RlZCBieSBMZWdpc2xhdGlvbiwgZHVlIHRvIGNvbW1pdG1lbnRzIG1hZGUgdG8gY29ycG9yYXRlIGxvYmJ5aW5nLlxyXG48L3A+XHJcbjxwPkl0IGFwcGVhcnMgaW5jcmVhc2luZ2x5IGRpZmZpY3VsdCBmb3IgTWFyY28gUnViaW8gdG8gYWNjZXB0IG1vbmV5IGZyb20gZ3VuIGxvYmJ5aXN0c1xyXG48aT5pbiBleGNoYW5nZTwvaT4gZm9yIGV4ZWN1dGluZyB0aGVpciBsZWdpc2xhdGlvbiBkZW1hbmRzLiBBcyBJIG1lbnRpb25lZCBpbiBteVxyXG48YSBocmVmPVwiIzE4LTAyLTE0XCI+RmVicnVhcnkgMTR0aCBwb3N0PC9hPiBvbiB0aGUgdG9waWMsIGl0IGlzIGNsZWFyIGEgZ2VuZXJhdGlvbiBpcyBhd2FrZW5pbmc6IEFuZCwgdGhlIEh1bWFucyBoYXZlIGJlZ3VuIHRvIHJldm9sdFxyXG5hZ2FpbnN0IHRoZVxyXG48c3Ryb25nPkhlYXZpbHktQXJtZWQgTG9iYnlpbmcgTWFjaGluZXMhXHJcbjwvc3Ryb25nPlxyXG48L3A+XHJcbjxwPjEuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5ucHIub3JnLzIwMTQvMDcvMjgvMzM1Mjg4Mzg4L3doZW4tZGlkLWNvbXBhbmllcy1iZWNvbWUtcGVvcGxlLWV4Y2F2YXRpbmctdGhlLWxlZ2FsLWV2b2x1dGlvblwiXHJcbiAgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cubnByLm9yZy8yMDE0LzA3LzI4LzMzNTI4ODM4OC93aGVuLWRpZC1jb21wYW5pZXMtYmVjb21lLXBlb3BsZS1leGNhdmF0aW5nLXRoZS1sZWdhbC1ldm9sdXRpb248L2E+XHJcbjwvcD5cclxuPHA+Mi5cclxuPGEgaHJlZj1cImh0dHA6Ly93d3cubmNzbC5vcmcvcmVzZWFyY2gvZWxlY3Rpb25zLWFuZC1jYW1wYWlnbnMvY2FtcGFpZ24tZmluYW5jZS1hbmQtdGhlLXN1cHJlbWUtY291cnQuYXNweCNkbm5fY3RyNzc0NDNfSHRtbE1vZHVsZV9sYmxDb250ZW50XCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwOi8vd3d3Lm5jc2wub3JnL3Jlc2VhcmNoL2VsZWN0aW9ucy1hbmQtY2FtcGFpZ25zL2NhbXBhaWduLWZpbmFuY2UtYW5kLXRoZS1zdXByZW1lLWNvdXJ0LmFzcHg8L2E+XHJcbjwvcD5cclxuaHR0cDovL3d3dy5uY3NsLm9yZy9yZXNlYXJjaC9lbGVjdGlvbnMtYW5kLWNhbXBhaWducy9jYW1wYWlnbi1maW5hbmNlLWFuZC10aGUtc3VwcmVtZS1jb3VydC5hc3B4IGRubl9jdHI3NzQ0M19IdG1sTW9kdWxlX2xibENvbnRlbnRcclxuPC9kaXY+IFxyXG48ZGl2IGlkPVwiMTgtMDMtMTNcIiBjbGFzcz1cIm1hciAxOC0wMyAtMTNcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjbWFydG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj5cclxuPGg0IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDQ+XHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5NdXNpbmcgQmxvY2tjaGFpbjwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5NYXJjaCAxMywgMjAxODwvaDY+XHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5UaGUgU2hhcmluZyBFY29ub215IEhhbmQtaW4tSGFuZCB3aXRoIHRoZSBNYXJrZXQgRWNvbm9teTpcclxuPGJyIC8+IFBhcnQgSUlJIGFuZCBTdXN0YWluYWJpbGl0eSBvZiBTaGFyZWQsIERpc3RyaWJ1dGVkIExlZGdlciBUeXBlczwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+TWFyY2ggMTN0aCwgMjAxOCBtYXJrcyB0aGUgZGF5IHRoYXQgY2VydGFpbiB0eXBlcyBvZiBibG9ja2NoYWluIHRlY2hub2xvZ2llcywgbm90YWJseSBCaXRjb2luIGFuZCBFdGhlcmV1bSwgZmFjZVxyXG5hbiBleGlzdGVudGlhbCBjcmlzaXM6IFRvZGF5LCBhIG5ldyBkaXN0cmlidXRlZCBsZWRnZXIgdGVjaG5vbG9neSBoYXMgYmVlbiBhbm5vdW5jZWQsIHdoaWNoIGRlcGFydHMgZnJvbSB0aGUgdHJhZGl0aW9uYWxcclxuXCJQcm9vZi1vZi1Xb3JrXCIgKGVuZXJneS1pbnRlbnNpdmUgY2FsY3VsYXRpb25zKSBCbG9ja2NoYWluIHRlY2hub2xvZ2llcy4gVGhpcyBpcyBjcml0aWNhbGx5IGltcG9ydGFudCB0byB6ZXJvIGNhcmJvbi1mb290cHJpbnQuXHJcbkZvciBleGFtcGxlLCBCaXRjb2luIGNhbGN1bGF0aW9ucyBkcmFpbiBtb3JlIGVuZXJneSwgNTAgVGVyYVdhdHQvaHJzIHBlciB5ZWFyLS1oaWdoZXIgdGhhbiBTaW5nYXBvcmUncyA0OS44ITwvcD5cclxuPHA+TmV4dCwgdGhlIHByaW1hcnkgc2VjdXJpdHkgZmxhdyBvZiBjb25zZW5zdXMtYmFzZWQgbGVhZGVyc2hpcCBsaWtlIFJpcHBsZSwgSW90YSAoYXMgb3Bwb3NlZCB0b1xyXG48aT5yYW5kb20tc2VsZWN0aW9uIGJsb2NrY2hhaW4gbGVhZGVyc2hpcDwvaT4gYmFzZWQgb24gY2FyYm9uLWludGVuc2l2ZSBjYWxjdWxhdGlvbnMpIGlzIHRoZXkgYXJlIHN1c2NlcHRpYmxlIHRvIEhhY2tpbmc6XHJcbkRlbmlhbC1vZi1TZXJ2aWNlIEF0dGFja3MgYXJlIHBvc3NpYmxlIGJlY2F1c2UgdGhlIG5leHQgbGVhZGVyIEJsb2NrIGNhbiBiZSBhbnRpY2lwYXRlZCBhbmQgZm9sbG93ZWQgYnkgYSBCb3QpLFxyXG5zbyB0aGUgYmxvY2tjaGFpbiBjeWNsZSBpcyBhdHRhY2tlZCBhdCBldmVyeSBjeWNsZS4gPC9wPlxyXG48cD5UaGUgSGVkZXIgSGFzaGdyYXBoIHVudmVpbGVkIHRvZGF5IG92ZXJjb21lcyB0aGlzIHByb2JsZW0gYnkgdXNpbmcgYSAzOS1ub2RlLWxlYWRlciBoYXNoZ3JhcGggZGF0YSBzdHJ1Y3R1cmUuIEludGVyZXN0aW5nbHksXHJcbnRoaXMgaXMgYmFzZWQgb24gdGhlIG9yaWdpbmFsIFZpc2EgQ3JlZGl0IENhcmQgZGVzaWduIGZyb20gdGhlIDE5NTAncyAodGhlbiBjYWxsZWQgQW1lcmljYUJhbmspIGZvciBhdXRoZW50aWNhdGluZ1xyXG5zeXN0ZW0uIDwvcD5cclxuPHA+XHJcbk5leHQsIFRoZSBIZWRlciBIYXNoZ3JhcGggb3ZlcmNvbWVzIHRoZSBwcm9ibGVtIG9mIFwiZmFpcm5lc3NcIiBiZWNhdXNlIGJsb2NrY2hhaW4gdHJhbnNhY3Rpb25zIGFyZVxyXG48aT5cclxuICA8c3Ryb25nPm5vdCBvcmRlcmVkIGluIGVhY2ggY3ljbGU8L3N0cm9uZz4uPC9pPiBCaXRjb2luIHRyYW5zYWN0aW9ucyBhcmUgaGFwaGF6YXJkbHkgbHVtcGVkIHRvZ2V0aGVyIGluIGVhY2ggYmxvY2stY3ljbGUsXHJcbndoaWNoIGlzIH4xMiBtaW51dGVzLiBXaGljaCBtZWFucyB0aGF0IHRpbWUtc2Vuc2l0aXZlIGZpbmFuY2lhbCBkYXRhIHF1ZXJpZXMgd2lsbCBhbHdheXMgbG9zZSEgPC9wPlxyXG48cD5cclxuU3dpcmxkJ3MgdW52ZWlsZWQgdGhlaXIgY29uc2Vuc3VzLWJhc2VkXHJcbjxzdHJvbmc+SGFzaGdyYXBoLCBhIHR5cGUgb2YgZGlzdHJpYnV0ZWQgbGVkZ2VyIHRlY2hub2xvZ3kgKERMVCksPC9zdHJvbmc+IGxhc3QgeWVhci4gVG9kYXksIGl0IGhhcyBub3cgYmVlbiBhbm5vdW5jZWQgdG9cclxuZGVwbG95IGluIGxhdGUgMjAxOCBvbiB0aGUgSGVkZXJhIEhhc2hncmFwaCBwdWJsaWMgbmV0d29yay4gVGhpcyBpcyB0cmVtZW5kb3VzIG5ld3MhIFRyZW1lbmRvdXMsIHNpbmNlIEkgZXhwbGFpbmVkXHJcbmluIG15XHJcbjxhIGhyZWY9XCIjMTgtMDMtMDFcIj5NYXJjaCAxc3QgPC9hPiBibG9nIHBvc3QgdGhhdCBvbGRlciBibG9ja2NoYWluIHRlY2hub2xvZ2llcyBpbmNlbnRpdml6ZSBtaW5lcnMnIGVmZm9ydHMgYnkgZGlyZWN0bHkgdHlpbmcgZWxlY3RyaWNhbC1jb3N0KFxyXG4oaW4gY2FsY3VsYXRpb25zKSB0byB0aGUgQml0Y29pbi9ob3VyIHByb2ZpdCBtYXJnaW4uIEZvciB0aGlzIHJlYXNvbiwgdGhlIGZ1dHVyZSBob3Jpem9uIGp1c3QgY29uc2lkZXJhYmx5IHNob3J0ZW5lZFxyXG5CaXRjb2luJ3MgcnVud2F5IGZvciBlc3RhYmxpc2hpbmcgYW55dGhpbmcgYmV5b25kIFwiZWFybHktYWRvcHRlclwiIHN0YXR1cy4gPC9wPlxyXG48cD5Tbywgd2UnbGwgc2VlIGlmIHRoZSBpbm5vdmF0aW5nIGNyZXcgd2l0aCBWaXRhbGlrIEJ1dGVyaW4ncyBFdGhlcmV1bSBjYW4gc3VjY2Vzc2Z1bGx5IGFsdGVyIHRoZSBjcnlwdG8gYWxnb3JpdGhtXHJcbmludG8gaXQncyBwbGFubmVkIGNhcmJvbi1mcmVlIGNvbnNlbnN1cy1iYXNlZCwgXCJwcm9vZi1vZi1zdGFrZVwiIGZvcm0uIEZvciB0aGUgbW9tZW50LCBCaXRjb2luLCBFdGhlcmV1bSwgYW5kIG90aGVyXHJcbmVsZWN0cmljaXR5LWRyYWluaW5nIFwicHJvb2Ytb2Ytd29ya1wiIGRlc2lnbnMsIGhhdmUgdGhlaXJcclxuPHN0cm9uZz5leGNoYW5nZSB2YWx1ZSB0cmFwcGVkIGluc2lkZSB0aGVpciBvd24gQ2FyYm9uIEZvb3RwcmludDwvc3Ryb25nPi5cclxuPHN1cD40PC9zdXA+IEFuZCBzbywgYmVjYXVzZSBlbnZpcm9ubWVudGFsIHN1c3RhaW5hYmxpdHkgaXMgZm9yZW1vc3Qgb2YgY29uY2VybnMgZm9yIGZ1dHVyZSBpbnZlc3RtZW50LCBzdXJ2aXZhbCBtYXlcclxuZGVwZW5kIG9uIGRpZ2dpbmcgb3V0IG9mIHRoYXQgQ2FyYm9uIEZvb3RwcmludCBtdWNoIG1vcmUgcXVpY2tseSE8L3A+XHJcblxyXG48cD4xLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuZm9yYmVzLmNvbS9zaXRlcy9qZWZma2F1Zmxpbi8yMDE4LzAzLzEzL2hlZGVyYS1oYXNoZ3JhcGgtdGhpbmtzLWl0LWNhbi1vbmUtdXAtYml0Y29pbi1hbmQtZXRoZXJldW0td2l0aC1mYXN0ZXItdHJhbnNhY3Rpb25zLyMxNzVlNWM3OWFiY2JcIj5cclxuICBodHRwczovL3d3dy5mb3JiZXMuY29tL3NpdGVzL2plZmZrYXVmbGluLzIwMTgvMDMvMTMvaGVkZXJhLWhhc2hncmFwaC10aGlua3MtaXQtY2FuLW9uZS11cC1iaXRjb2luLWFuZC1ldGhlcmV1bS13aXRoLWZhc3Rlci10cmFuc2FjdGlvbnMvIzE3NWU1Yzc5YWJjYlxyXG48L2E+XHJcbjwvcD5cclxuXHJcbjxwPjIuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5jb2luZGVzay5jb20vaGVkZXJhLWhhc2hncmFwaC1zd2lybGRzLW5vLWZvcmstZ3VhcmFudGVlLWNyeXB0b2N1cnJlbmN5LXRvdXRzLXJlc2lzdGFuY2UtY29kZS1zcGxpdHMvXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICBodHRwczovL3d3dy5jb2luZGVzay5jb20vaGVkZXJhLWhhc2hncmFwaC1zd2lybGRzLW5vLWZvcmstZ3VhcmFudGVlLWNyeXB0b2N1cnJlbmN5LXRvdXRzLXJlc2lzdGFuY2UtY29kZS1zcGxpdHMvPC9hPlxyXG48L3A+XHJcblxyXG48cD4zLlxyXG48YSBocmVmPVwiaHR0cHM6Ly92ZW50dXJlYmVhdC5jb20vMjAxOC8wMy8xMy9oZWRlcmEtaGFzaGdyYXBoLWFuZC1tei11bnZlaWwtbmV4dC1nZW5lcmF0aW9uLWJsb2NrY2hhaW4tYWx0ZXJuYXRpdmUvXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICBodHRwczovL3ZlbnR1cmViZWF0LmNvbS8yMDE4LzAzLzEzL2hlZGVyYS1oYXNoZ3JhcGgtYW5kLW16LXVudmVpbC1uZXh0LWdlbmVyYXRpb24tYmxvY2tjaGFpbi1hbHRlcm5hdGl2ZS88L2E+XHJcbjwvcD5cclxuXHJcblxyXG48cD40LlxyXG48YSBocmVmPVwiaHR0cHM6Ly9ibG9nLmV0aGVyZXVtLm9yZy8yMDE2LzAyLzA5L2N1dC1hbmQtdHJ5LWJ1aWxkaW5nLWEtZHJlYW0vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9ibG9nLmV0aGVyZXVtLm9yZy8yMDE2LzAyLzA5L2N1dC1hbmQtdHJ5LWJ1aWxkaW5nLWEtZHJlYW0vPC9hPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTJcIiBpZD1cIjE4LTAzLTEyXCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI21hcnRvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNCBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g0PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+U29jaW9sb2d5IFRvbW9ycm93ITwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5NYXJjaCAxMiwgMjAxODwvaDY+XHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5UaGUgU2hhcmluZyBFY29ub215IEhhbmQtaW4tSGFuZCB3aXRoIHRoZSBNYXJrZXQgRWNvbm9teTpcclxuPGJyIC8+IFBhcnQgSUkgYW5kIE5ldyBGb3JtcyBvZiBUcnVzdDwvaDY+XHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5cclxuVGhyb3VnaG91dCB0aGUgY2VudHJhbGl6ZWQtdGVjaCBwZXJpb2Qgb2YgdGhlXHJcbjxpPm1vYmlsZS1wb3dlcmVkIDwvaT4gV2ViIDIuMCwgbW9zdCBTaGFyaW5nIHRyYW5zYWN0aW9ucyB0YWtlIHBsYWNlIG9uIGEgY2VudHJhbGl6ZWQgcGxhdGZvcm0gdGhhdCBzaW1wbHkgZmFjaWxpdGF0ZXNcclxudGhlIHBlZXItdG8tcGVlciB0cmFuc2FjdGlvbnMuIEhvd2V2ZXIsIHRoZSB0cnVzdCBpcyBiYXNlZCBvbiBzb21lIHRoaXJkLXBhcnR5IGF1dGhvcml0eS4gRm9yIGluc3RhbmNlLCBVYmVyIHNlcnZlc1xyXG5hcyB0aGUgY2VudHJhbGFsaXplZCwgdGhpcmQtcGFydHkgYXV0aG9yaXR5IGJldHdlZW4gYm90aCBjb25zdW1lcnMgKHdoZXRoZXIgcmVzb3VyY2Utb2J0YWluaW5nIG9yIHJlc291cmNlLXByb3ZpZGluZylcclxubXVzdCBwbGFjZSB0aGVpciB0cnVzdC4gU2ltaWxhcmx5LCBjZW50cmFsaXplZCBhdXRob3JpdGllcyBsaWtlIFBheXBhbCwgZXRjLiBlbmFibGUgcGVlci10by1wZWVyIGNvbGxhYm9yYXRpb24uXHJcbllldCwgdGhlIG5vdGlvbiBvZiB0cnVzdCByZW1haW5zIHVuc29sdmVkOiBCb3RoIHBhcnRpZXMgbXVzdCBwbGFjZSB0aGVpciBmYWl0aCBpbiB0aGUgdGhpcmQgcGFydHkuIEJ5IGRlZmluaXRpb24sXHJcbnRoaXMgcHJvYmxlbSB0aGF0IHVuZGVybWluZXMgdGhlXHJcbjxpPlNoYXJpbmcgRWNvbm9teTwvaT4gaXMgcmVzb2x2ZWQgYnkgQmxvY2tjaGFpbiB0ZWNobm9sb2dpZXMsIHRocm91Z2ggY3J5cHRvZ3JhcGh5LiBOb3csIERlY2VudHJhbGl6ZWQgQXBwcyAoREFQUFMpXHJcbnByb3ZpZGUgYSB0cnVlciBzaGFyaW5nIHBsYXRmb3JtIGZvciB2YWx1ZSB0cmFuc2FjdGlvbnMuXHJcbjwvcD5cclxuPHA+SW4gc2hvcnQsIG5laXRoZXIgcGVlcixcclxuPHN0cm9uZz5uZWl0aGVyIGNvbnN1bWVyIG5lZWRzIHRvIGJlIHRydXN0ZWQsIGJlY2F1c2UgYm90aCBwYXJ0aWVzIHNoYXJlIGEgbXV0dWFsIHRydXN0IGluIHRoZWlyIHNoYXJlZCBsZWRnZXI8L3N0cm9uZz5cclxuKHRoaW5rIG9mIGEgdGhpY2sgYm9vayB3aXRoIGFuIGluZGV4ZWQgbG9nIG9mIGVhY2ggYW5kIGV2ZXJ5IHRyYW5zYWN0aW9uLCB3aXRoIHVuY2hhbmdlYWJsZSBlbnRyaWVzIGV0Y2hlZCBieSBjcnlwdG9ncmFwaHkuXHJcbkluIHRoaXMgZmFzaGlvbiB0aGUgZm9ybXMgb2YgRXhjaGFuZ2UgVmFsdWUgaW5jbHVkZTpcclxuPGJyIC8+IDEuIFZhbHVlIEZ1bmRzICZhbXA7IEludmVzdG1lbnRzXHJcbjxiciAvPiAyLiBJbW11dGFibGUgSW5zdXJhbmNlICZhbXA7IFJpc2sgTWFuYWdlbWVudFxyXG48YnIgLz4gMy4gQWNjb3VudCBmb3IgJmFtcDsgQXVkaXQgQ29tbW9kaWZpZWQgVmFsdWUgNC4gQXV0aGVudGljYXRlICZhbXA7IEF0dGVzdCB0byBWYWx1ZVxyXG48YnIgLz4gNS4gVHJhbnNmZXIsIFN0b3JlLCBMZW5kIFZhbHVlXHJcbjxiciAvPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTBcIiBpZD1cIjE4LTAzLTEwXCI+XHJcblxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiNtYXJ0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDQgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oND5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPldlYiBEZXY8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggMTAtMTEsIDIwMThcclxuPGJyIC8+IFdlZWtlbmRcclxuPC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPlRoZSBTaGFyaW5nIEVjb25vbXkgSGFuZC1pbi1IYW5kIHdpdGggdGhlIE1hcmtldCBFY29ub215OlxyXG48YnIgLz4gUGFydCBJIGFuZCB0aGUgUmFjZSBmb3IgU3VzdGFpbmFiaWxpdHkgU29sdXRpb25zPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5TaGFyaW5nIGNhbiBiZSBhIHBoaWxvc29waHkgYW5kIGV2ZW4gYW4gaWRlb2xvZ3ksIGJ1dCBpdCBpcyBhbHNvXHJcbjxzdHJvbmc+IGEgY29uY2VwdCBzZXduIGludG8gdGhlIFRlY2hub2xvZ3kgb2YgdGhlIEVyYTwvc3Ryb25nPi4gU2hhcmluZyBlY29ub215IHJlZmVycyB0byBib3RoIGRlbW9jcmF0aXplZCBwZWVyLXRvLXBlZXJcclxubWFya2V0cGxhY2VzLFxyXG48aT5hbmQ8L2k+IGNvbGxhYm9yYXRpdmUsIHJlc291cmNlLWNpcmN1bGF0aW5nIGNvbnN1bXB0aW9uIHN5c3RlbXMgd2hlcmUgdGhlIGNvbnN1bWVyJiMzOTtzIHJvbGUgaXMgcHJvdmlkZXIgb3Igb2J0YWluZXJcclxub2YgcmVzb3VyY2VzLiBCeSBlaXRoZXIgc2Vuc2UsIHRoZVxyXG48aT5VYmVyaXplZDwvaT4gZWNvbm9teSBpcyBtYWRlIHBvc3NpYmxlIGJ5IHRoZSB1bmRlcmx5aW5nIHBsYXRmb3JtIG9mIERlY2VudHJhbGl6ZWQgVGVjaG5vbG9naWVzLiBNb2JpbGUgc29jaWFsIG1lZGlhLFxyXG5pbnRlcm5ldCwgYW5kIGJsb2NrY2hhaW4gdGVjaCBjcmVhdGVzIHRoZSBjb25kaXRpb25zIG5lZWRlZCBmb3IgYSBjb252ZW5pZW50LCBjb21tdW5pdHktYmFzZWQgdHJhbnNhY3Rpb25zLjwvcD5cclxuXHJcbjxwPkJpdGNvaW4gYW5kIEV0aGVyZXVtIGNyeXB0by1jb250cmFjdHMgZ3JhYiB0aGUgaGVhZGxpbmVzLCBob3dldmVyIGl0IGlzIHRoZSB2ZXJ5IG5hdHVyZSBvZiBibG9ja2NoYWluJiMzOTtzXHJcbjxpPmRpc3RyaWJ1dGVkLCBpLmUuIHNoYXJlZCwgPC9pPmxlZGdlciB0aGF0IHJldm9sdXRpb25pemVzIGhvdyBodW1hbnMgaW50ZXJhY3QsIGFuZCBob3cgdGhleSBleGNoYW5nZSBhbmQgc2hhcmUgZ29vZHNcclxuYW5kIHNlcnZpY2VzLiBTbywgaG93IG1pZ2h0IGEgdHJhbnNhY3Rpb25hbCwgemVyby1zdW0gTWFya2V0IEVjb25vbXkgbWVyZ2Ugd2l0aCBhIFNoYXJpbmcgRWNvbm9teT88L3A+XHJcblxyXG48cD5JblxyXG48aT5UaGUgVGhpcmQgSW5kdXN0cmlhbCBSZXZvbHV0aW9uLCA8L2k+U29jaWFsIGFuZCBFY29ub21pYyB0aGVvcmlzdCwgRHIuIEplcmVteSBSaWZraW4sIHByb3ZpZGVzIGluc2lnaHQgaW50byBob3dcclxudGhlXHJcbjxzdHJvbmc+U2hhcmluZyBFY29ub215IGNhbiBncm93IGFsb25nc2lkZSB0aGUgdHJhZGl0aW9uYWwgTWFya2V0IEVjb25vbXk8L3N0cm9uZz4uXHJcbjxzdXA+MTwvc3VwPiBUaGUgdGhlb3J5IGFyZ3VlcyB0aHJlZSAoMykgYnJlYWt0aHJvdWdocyBhcmUgbmVlZGVkIHRvIGNyZWF0ZSB0aGUgY29uZGl0aW9ucyBuZWNlc3NhcnkgZm9yIGEgbmV3ICZxdW90O2dlbmVyYWxcclxucHVycG9zZSB0ZWNobm9sb2dpY2FsIHBsYXRmb3JtLCZxdW90OyBhbmQgdGh1cyBhbiBJbmR1c3RyaWFsIFJldm9sdXRpb24uIFRoZXkgYXJlIG1hbmFnZW1lbnQvY29tbW11bmljYXRpb24gb2YgcG93ZXIsXHJcbnNvdXJjZXMgb2YgbmV3IHBvd2VyL2VuZXJneSwgYW5kIHRoZSB0cmFuc3BvcnRhdGlvbiBvZiB0aGlzIHBvd2VyLjwvcD5cclxuXHJcbjxwPlRoZSBmaXJzdCBjb25kaXRpb246IE5ldyBmb3JtcyBvZiBjb21tdW5pY2F0aW9uIHRvXHJcbjxpPm1hbmFnZTwvaT4gcG93ZXIsIGZvciBleGFtcGxlIHN0ZWFtLXBvd2VyZWQgcHJpbnRpbmcgcHJlc3MsIHRyYW5zLW9jZWFuaWMgdGVsZWdyYXBoLCB0aGVuIGxhdGVyIHRlbGVwaG9uZS4gVGhlIHNlY29uZFxyXG5jb25kaXRpb246IE5ldyBlbmVyZ3kgc291cmNlcywgZm9yIGV4YW1wbGUgc3RlYW0tZW5naW5lIHVzaW5nIGNvYWwgYW5kIG90aGVyIGZvc3NpbCBmdWVscy4gVGhlIHRoaXJkIGNvbmRpdGlvbjpcclxuTmV3IG1ldGhvZHMgdG8gdHJhbnNwb3J0IGVuZXJneSwgaS5lLiB0aGUgc3RlYW0gZW5naW5lIG9uIHJhaWxzLCB0aGVuIGxhdGVyIGZvc3NpbCBmdWVsIHZlaGljbGVzLjwvcD5cclxuXHJcbjxwPlNvIHdoYXQmIzM5O3MgbmV3IGFib3V0IHRvZGF5PyA1RyBDZWxsdWxhciB0ZWNobm9sb2d5IGNvdXBsZWQgd2l0aCBkZWNlbnRyYWxpemVkLCBibG9ja2NoYWluIGludGVybmV0OyBTZWNvbmQsIGltcHJvdmluZ1xyXG5zb2xhciAmYW1wOyB3aW5kIHBvd2VyIGNvdXBsZWQgd2l0aCBkZWNlbnRyYWxpemVkLCBiaS1kaXJlY3Rpb25hbCBlbmVyZ3kgZ3JpZDsgYW5kIHRoaXJkLCB0cmFuc3BvcmF0aW9uIGJ5IGF1dG9tYXRhdGVkLFxyXG5kcml2ZXJsZXNzIHNoaXBwaW5nIGZvciBleGFtcGxlLiBTbywgd2h5IGlzIHRoaXMgaW1wb3J0YW50LCBldmVuIHZpdGFsIHRvIGFkYXB0IGEgbmV3IHBhcmFkaWdtIHRoYXQgZml0cyB0aGUgbmV3XHJcbnRlY2hub2xvZ3k/IGV4cG9uZW50aWFsIHBvcHVsc3Rpb24gZ3Jvd3RoIGFuZCBleHBvbmVudGlhbCBjbGltYXRlIGNoYW5nZXMgYXJlIHRvcCBvZiB0aGUgbGlzdC48L3A+XHJcblxyXG48cD5Ccml0YWluJiMzOTtzIGlubm92YXRpb25zIHdpdGggc3RlYW0gJmFtcDsgY29hbCBjaGFyYWN0ZXJpemVkIHRoZSBmaXJzdCBJbmR1c3RyaWFsIFJldm9sdXRpb24sIGFuZCBBbWVyaWNhJiMzOTtzXHJcbmlubm92YXRpb25zIGluIHRlbGVwaG9uZXMsIG9pbC1mdWVsZWQgdmVoaWNsZXMsIGFuZCBjZW50cmFsaXplZCB0cmFuc3BvcnRhdGlvbiBncmlkLCBob3dldmVyIHRoZSBpbm5vdmF0aW9ucyBpblxyXG50aGUgcHJlc2VudCBlcmEgYXJlIG11Y2ggcXVpY2tlciB0aGFuIHByZXZpb3VzIGVyYXMuLi4gd2hpY2ggbWVhbnMgd2UgYXMgYSBzb2NpZXR5IGNhbiBlbWJyYWNlIG1vcmUgcHJvYWN0aXZlbHlcclxudGhlIE5ldyBQYXJhZGlnbSBuZWVkZWQgdG8gYWRhcHQuPC9wPlxyXG5cclxuPHA+U28sIGhvdyBjYW4gd2UgY2hhbmdlIHRoZSB3YXkgd2VcclxuPGk+dGhpbms8L2k+IGFuZCBob3cgd2VcclxuPGk+cmVhY3Q8L2k+IGRlcGVuZHMgb24gb3VyIHdvcmxkdmlldywgYW5kIGhvdyBkZWVwbHkgZW50cmVuY2hlZC4gVGhvbWFzIEt1aG4mIzM5O3MgMjAwNCBwdWJsaWNhdGlvbiBvblxyXG48c3Ryb25nPlxyXG4gIDxpPlRoZSBTdHJ1Y3R1cmUgb2YgU2NpZW50aWZpYyBSZXZvbHV0aW9uPC9pPlxyXG48L3N0cm9uZz5cclxuPHN1cD4zPC9zdXA+IGV4cGxhaW5zIGhvdyBzb2NpZXR5IHdpbGwgZHJhZyBpdHMgZmVldCBpbiB0aGUgZmFjZSBvZiBjaGFuZ2UsIGFuZCBvbmx5IGFmdGVyIGRlY2FkZXMgb2YgY29udHJvdmVyc3kgd2lsbFxyXG5hIE5ldyBQYXJhZGlnbSBTaGlmdCBlbWVyZ2UuIEluIHRoaXMgb2NjYXNpb24gaG93ZXZlciwgd2UgYXMgYSBzb2NpZXR5IG1heSBub3QgaGF2ZSB0aGUgbHV4dXJ5IG9mIGRlY2FkZXMgdG8gYWRhcHRcclxudG8gTmV3IFRlY2hub2xvZ2llcywgYXMgdGhlIGNhcmJvbiBoYW5nb3ZlciBmcm9tIHRoZSBwcmV2aW91cyBJbmR1c3RyaWFsIEVyYSBpbXBlcmlscyB0aGUgc2FmZSBhcnJpdmFsIG9mIHRoZSBuZXh0ITwvcD5cclxuXHJcbjxwPiZuYnNwOzwvcD5cclxuXHJcbjxwPjEuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5mb2V0Lm9yZy9ib29rcy90aGUtdGhpcmQtaW5kdXN0cmlhbC1yZXZvbHV0aW9uL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3LmZvZXQub3JnL2Jvb2tzL3RoZS10aGlyZC1pbmR1c3RyaWFsLXJldm9sdXRpb24vPC9hPlxyXG48L3A+XHJcblxyXG48cD4yLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuZWNvbm9taXN0LmNvbS9ub2RlLzIxNTUzMDE3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly93d3cuZWNvbm9taXN0LmNvbS9ub2RlLzIxNTUzMDE3PC9hPlxyXG48L3A+XHJcblxyXG48cD4zLlxyXG48YSBocmVmPVwiaHR0cHM6Ly9wcm9qZWt0aW50ZWdyYWNpamEucHJhdm8uaHIvX2Rvd25sb2FkL3JlcG9zaXRvcnkvS3Vobl9TdHJ1Y3R1cmVfb2ZfU2NpZW50aWZpY19SZXZvbHV0aW9ucy5wZGZcIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiPjMuIEt1aG4sIFRob21hcywgVGhlIFN0cnVjdHVyZSBvZiBTY2llbnRpZmljIFJldm9sdXRpb25zLCA8L2E+XHJcbjwvcD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwibWFyIDE4LTAzIC0wOVwiIGlkPVwiMTgtMDMtMDlcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjbWFydG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggOXRoLCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPiYjMzk7QWxleGEsIGNhbiB5b3UgbGF1Z2g/JiMzOTs8L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPkFsZXhhIGhhcyBtYWRlIGhlYWRsaW5lcyBhYm91dCByZXBvcnRzIG9mIHVuZXhwbGFpbmVkIGxhdWdodGVyIHJlc3BvbnNlc1xyXG48c3VwIGlkPVwiMDMwOS0xXCI+MTwvc3VwPi4gSW5mb3JtYXRpb24gbGlrZSB0aGlzIG5lZWRzIGFcclxuPGk+XHJcbiAgPHN0cm9uZz5mYWN0LWNoZWNrPC9zdHJvbmc+XHJcbjwvaT4gJmFncmF2ZTsgbGEgU25vcGVzLmNvbS5cclxuPHN1cCBpZD1cIjAzMDktMlwiPjI8L3N1cD4gQW5kLCB3aGV0aGVyIG9yIG5vdCBBbGV4YSBtaXNoZWFyZCwgJnF1b3Q7QWxleGEsIGxhdWdoJnF1b3Q7LCBvciBub3QsIGlzIGxlc3MgaW1wb3J0YW50IHRoYW4gdGhlXHJcbjxpPnNvY2lhbGx5LWludHJ1c2l2ZSBjb25zZXF1ZW5jZXM8L2k+IG9mIHNpbXBsZSBhcHAtZGV2ZWxvcG1lbnQgZXJyb3JzLiBUaGUgZmlyc3QgaXNzdWUgaXMgc2ltcGx5IHRoYXQgcHJvZ3JhbW1lclxyXG48c3Ryb25nPmxvZ2ljIDwvc3Ryb25nPiBhbmQgdXNlci1pbnRlcmZhY2UgaW50dWl0aW9uIHNob3VsZCBiZSBhcyBjbGVhciAoYW5kIGdlbmVyYWxpemVkKSBhcyBwb3NzaWJsZS4gVGhpcyBpcyBlYXNpZXIgc2FpZFxyXG50aGFuIGRvbmUsIGZvciBleGFtcGxlIHRoZSByZWNlbnQgY2FzZSBvZiBIYXdhaWkmIzM5O3MgbWlzdGFrZW5cclxuPGk+aW5jb21pbmctYmFsbGlzdGljLW1pc3NpbGUgd2FybmluZyBzeXN0ZW08L2k+LlxyXG48c3VwIGlkPVwiMDMwOS0zXCI+Mzwvc3VwPiBBcyBpdCB0dXJuZWQgb3V0LCB0aGUgZHJvcGRvd24tbWVudSBkZXNpZ24gcGxhY2VkIHRoZSAmcXVvdDtTZW5kIFRlc3QgV2FybmluZyZxdW90OyBuZXh0IHRvICZxdW90O1NlbmQgV2FybmluZyZxdW90O1xyXG5pbiBhbiB1bmludHVpdGl2ZSwgZmFpbC1wb3NzaWJsZSBtYW5uZXIuIE9vcHMuPC9wPlxyXG5cclxuPHA+V2hpbGUgbW9zdCBmb2N1cyBvbiBBbGV4YSBldCBhbC4mIzM5O3MgYWN0aW9ucyBhbmQgYWJpbGl0ZXMsIGluIHRoZSBuYW1lIG9mIGNhdXRpb24sIGJ1dCByYXRoZXIgdGhlIGxhcmdlciBpc3N1ZVxyXG5mYWxscyBvbiBob3cgbXVjaCB3ZSBhbGxvdyBvdXJzZWx2ZXMgdG8gbWVudGFsbHkgZGVwZW5kIG9uIHRlY2ggZm9yIHRoaW5ncy48L3A+XHJcblxyXG48cD4xLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuYnV6emZlZWQuY29tL3ZlbmVzc2F3b25nL2FtYXpvbi1hbGV4YS1kZXZpY2VzLWFyZS1sYXVnaGluZy1jcmVlcHk/dXRtX3Rlcm09LnVtNlAxOGE4YSMuY2dnZ1AyajJqXCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5idXp6ZmVlZC5jb20vdmVuZXNzYXdvbmcvYW1hem9uLWFsZXhhLWRldmljZXMtYXJlLWxhdWdoaW5nLWNyZWVweT91dG1fdGVybT0udW02UDE4YThhIy5jZ2dnUDJqMmo8L2E+XHJcbjwvcD5cclxuXHJcbjxwPjIuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy5zbm9wZXMuY29tL2ZhY3QtY2hlY2svaXMtYW1hem9ucy1hbGV4YS1lbWl0dGluZy11bnByb21wdGVkLWNyZWVweS1sYXVnaGluZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5zbm9wZXMuY29tL2ZhY3QtY2hlY2svaXMtYW1hem9ucy1hbGV4YS1lbWl0dGluZy11bnByb21wdGVkLWNyZWVweS1sYXVnaGluZy88L2E+XHJcbjwvcD5cclxuXHJcbjxwPjMuXHJcbjxhIGhyZWY9XCJodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vbmV3cy9tb3JuaW5nLW1peC93cC8yMDE4LzAxLzE2L3RoYXQtd2FzLW5vLXdyb25nLWJ1dHRvbi1pbi1oYXdhaWktdGFrZS1hLWxvb2svP3V0bV90ZXJtPS5hMmFhNjUzMjkwMDJcIlxyXG4gIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9uZXdzL21vcm5pbmctbWl4L3dwLzIwMTgvMDEvMTYvdGhhdC13YXMtbm8td3JvbmctYnV0dG9uLWluLWhhd2FpaS10YWtlLWEtbG9vay8/dXRtX3Rlcm09LmEyYWE2NTMyOTAwMjwvYT5cclxuPC9wPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYXIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMy0wOFwiPlxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiNtYXJ0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oNT5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPlNvY2lvbG9neSBUb21vcnJvdyE8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggOCwgMjAxODwvaDY+XHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj4xLjQgTWlsbGlvbiBSZWFzb25zIGZvciBNb3JlIFdvbWVuIGluIFRlY2gsIFBhcnQgSUlcclxuPGJyIC8+XHJcbjxiciAvPiAqIENvbnRpbnVhdGlvbiBvZiBXb21lbiBpbiBUZWNoIFRoZW1lIGZyb21cclxuPGEgaHJlZj1cIiMxOC0wMi0yM1wiPkZlYi4gMjNyZCBCbG9nPC9hPlxyXG48L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgaW4gaHVtYW4gaGlzdG9yeSB0aGF0IHdlIGhhdmUgdGhlIGFiaWxpdHkgdG8gc2VlIGVub3VnaCBhYm91dCBvdXJzZWx2ZXMgdGhhdCB3ZSBjYW4gaG9wZSB0b1xyXG5hY3R1YWxseSBidWlsZCBzb2NpYWwgc3lzdGVtcyB0aGF0IHdvcmsgcXVhbGl0YXRpdmVseSBiZXR0ZXIgdGhhbiB0aGUgc3lzdGVtcyB3ZSYjMzk7dmUgYWx3YXlzIGhhZC48L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+LS1BdXRob3IgdW5rbm93bjwvcD5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5NeSBGZWJydWFyeSAyM3JkIFBvc3Qgb24gd29tZW4gaW4gdGVjaCBmb2N1c2VkIG9uIHRoZVxyXG48aT53b3JrZm9yY2UgZGVtYW5kPC9pPiBmb3IgbW9yZSB3b21lbiBpbiB0ZWNoIHBvc2l0aW9ucywgaG93ZXZlciB0b2RheSBJJiMzOTttIHdyaXRpbmcgb24gdGhlXHJcbjxzdHJvbmc+XHJcbiAgPGk+c29jaWFsIG5lZWQ8L2k+IGZvciBtb3JlIGZlbWFsZSBpbnNpZ2h0IHdpdGhpbiB0aGUgdGVjaCB3b3JrZm9yY2U8L3N0cm9uZz4gLCBnaXZlbiB0aGF0IHByb2dyYW1taW5nIHdpbGwgaW5jcmVhc2luZ2x5XHJcbnNoYXBlIG91ciBmdXR1cmUgaW5zdGl0dXRpb25zLiBUaGlzIG1lYW5zIHRoYXQgZXZlcnkgaW5zdGl0dXRpb24sIHdoZXRoZXIgcHJpdmF0ZSBob3NwaXRhbHMsIG5vbi1wcm9maXQgY2hhcml0eVxyXG5mb3VuZGF0aW9ucywgb3IgZ292ZXJubWVudCBidXJlYXVzLCB3aWxsIGVmZmVjdGl2ZWx5IHJlc3RydWN0dXJlIChvcHRpbWl6ZSkgdGhlaXIgb3duIG9yZ2FuaXphdGlvbmFsIHN0cnVjdHVyZSBpblxyXG5hbiBpbmNyZWFzaW5nbHlcclxuPGk+ZGF0YS1kcml2ZW48L2k+IHBhcmFkaWdtLiBGcm9tIGEgU29jaW9sb2d5IG9mIE9yZ2FuaXphdGlvbnMgcGVyc3BlY3RpdmUsIHRoZSBjaGFuZ2VzIHRvIGNvbWUgYXJlIGJyZWF0aC10YWtpbmcgdG9cclxuY29uc2lkZXIuPC9wPlxyXG5cclxuPHA+U28gd2h5IHdvbWVuPyBXaGVyZSBjb3VsZCBJIHN0YXJ0PyBCZXR0ZXIgc3RhdGVkLCB3aHkgaXMgYSBxdWludGVzc2VudGlhbGx5IGltcG9ydGFudCBqb2Igc2VjdG9yLCBhIHNlY3RvciBpbiBkZXNwZXJhdGVcclxubmVlZCBmb3IgaW5zaWdodCwgY29tcHJpc2VkIHByaW1hcmlseSBvZiBtZW4/XHJcbjxzdXAgaWQ9XCJvbmVcIj4xPC9zdXA+IFRoZSBmYWN0cyBhcmUgZXZpZGVudDogfjE1LTIwJSBvZiB3b21lbiBjb21wcmlzaW5nIHRlY2ggcG9zaXRpb25zLlxyXG48c3VwIGlkPVwidHdvXCI+Mjwvc3VwPiBOdW1iZXJzIGFzaWRlLCBJIGFyZ3VlIHRoZXJlIGlzIGEgcXVpbnRlc3NlbnRpYWwgc29jaWV0YWwgbmVlZCBmb3IgbW9yZSB3b21lbiBpbiB0ZWNoOiBUaGlzIGlzIGJlY2F1c2UgY29tcHV0aW5nXHJcbmFuZCB1bmRlcnN0YW5kaW5nIGRhdGEgaGFzIGNoYW5nZWQgc2luY2UgdGhlIGRhdGEgY29sbGVjdGlvbiBmcm9tIFdlYiAyLjAgKG1vYmlsZSksIGJlY29taW5nIG1vcmUgbmV0d29ya2VkIGFuZFxyXG5yZWxhdGlvbmFsLjwvcD5cclxuXHJcbjxwPlRoZSBjaGFsbGVuZ2UgZm9yIHNvY2lldHkgaW4gdGhpcyBhZ2UgaXMgaGlzdG9yaWMsIGFuZCB3b21lbiBtdXN0IGFic29sdXRlbHkgYmUgaW5jbHVkZWQgaW4gdGhlIHByb2Nlc3Mgb2YgdGhlIGFnZTpcclxuUGxlYXNlIGNvbnNpZGVyLCB0aGF0IGluIHRoZSAxNjUwJiMzOTtzLCB0aGUgaW52ZW50aW9uIG9mIHRoZSBtaWNyb3Njb3BlIG9wZW5lZCBhIG5ldyB3b3JsZCBvZiBkYXRhIGFuZFxyXG48aT5pbmZvcm1hdGlvbjwvaT4gYWJvdXQgdGhlIGJhY3RlcmlvbG9naWNhbCwgbWljcm9zY29waWMgc3Vycm91bmRpbmdzLS1oaXRoZXJ0byBibGluZCB0byBhbGwuIExpa2V3aXNlLCB0aGUgdGVsZXNjb3BlXHJcbmhhcyBhbGxvd2VkIHVzIGFzIGEgc29jaWV0eSB0byBleHBsb3JlIHRoZSBvdXRlciB1bml2ZXJzZSBhbmQgZWFydGgmIzM5O3MgcG9zaXRpb24gd2l0aGluIGl0LjwvcD5cclxuXHJcbjxwPk5vdywgdGhlIGludmVudGlvbnMgb2YgbWFjaGluZS1sZWFybmluZywgY29tcHV0aW5nIGNvdXBsZWQgd2l0aCBCaWcgRGF0YSBhbmFseXRpY3MsIGFsbG93cyB1cyB0byBleHBsb3JlIChhbmQgbWFuYWdlKVxyXG5hIHVuaXZlcnNlIG9mIGtub3dsZWRnZS0tYWJvdXRcclxuPGk+b3Vyc2VsdmVzPC9pPiwgaHVtYW4gc29jaWV0eS0td2l0aCB1bmZhdGhvbWFibHkgY29tcGxleCwgdW5zdHJ1Y3R1cmVkIHJlbGF0aW9uYWwgZGF0YSBzdHJ1Y3R1cmVzLiBBY2Nlc3NpbmcgdGhlXHJcbmRhdGEgdG8gY29tcHV0ZXItcmVhZGFibGUgZm9ybSBpcyBvbmUgdGhpbmcsIGJ1dCBtZWFuaW5nIGluIGRhdGEgaXMgaW5hY2Nlc3NpYmxlIHVudGlsIHRoZVxyXG48aT5vdXRwdXQ8L2k+IGNhbiBiZVxyXG48aT5yZS08L2k+cHJvZ3JhbW1lZCBpbnRvIG1lYW5pbmdmdWwsIGh1bWFuLXJlYWRhYmxlIGRhdGEsIGkuZS4gaW5mb3JtYXRpb24uIFRoaXMgbGF0dGVyIHN0YWdlIG9mIGRldmVsb3BtZW50IGlzIHRoZVxyXG5rZXkgY2hhbGxlbmdlLS1mb3Igd2hpY2ggc3VjY2VzcyBkZXBlbmRzIG9uIHJlcHJlc2VudGF0aXZlIGZlbWFsZSBwYXJ0aWNpcGF0aW9uIGluIFRlY2guPC9wPlxyXG5cclxuPHA+QWRkaW5nIHRvIHRoZSBjaGFsbGVuZ2Ugb2YgZmluZGluZyBtZWFuaW5nZnVsIHRyZW5kcyBpcyB0aGUgYmFja2Ryb3Agb2Ygbm9pc2UgZnJvbSBzcHVyaW91cyB2YXJpYWJsZXMuIFRoaXMgaXMgYWtpblxyXG50byBmaW5kaW5nIGEgbmVlZGxlIGluIGFuIGluY3JlYXNpbmdseSBjb21wbGV4IGFuZCBncm93aW5nIGhheXN0YWNrLjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5XaGF0JiMzOTtzIGRpZmZlcmVudCBub3cgYW5kIGhhcyBjaGFuZ2VkIGlzIGl0JiMzOTtzIG5vIGxvbmdlciBhYm91dCB0YWtpbmcgdGhpcyBkYXRhLCBwdXR0aW5nIGl0IGludG8gYSBjb21wdXRlclxyXG5ydW5uaW5nIGEgY2FsY3VsYXRpb24gYW5kIGdldHRpbmcgYSBiYWxhbmNlIHNoZWV0IGFuc3dlciAuLi48L3A+XHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+V2hhdCYjMzk7cyBpbXBvcnRhbnQgbm93IGlzIHdoYXQgaXMgdGhlIGNvbnRleHQgb2YgdGhlIGRhdGEsIHdoYXQgaXMgaXQgY29ubmVjdGVkIHRvLCB3aGF0IGVmZmVjdCBpcyBpdCBoYXZpbmcgb25cclxuZGF0YSBhcm91bmQgaXQuLi4gSXQmIzM5O3MgYmFzaWNhbGx5IGEgbmV0d29yayBvZiB0aGUgZGF0YSwgaXQmIzM5O3Mgbm8gbG9uZ2VyIHNvcnQgb2YgdGFidWxhciBjb2x1bW5zLCBvZiByb3dzXHJcbm9mIGRhdGEsIGl0JiMzOTtzXHJcbjxpPmludGVyY29ubmVjdGVkIHBhdHRlcm5zPC9pPi5cclxuPGJyIC8+IC0tVGltIENvb2s8L3A+XHJcblxyXG48cD5UaGlzIHF1b3RlIG1lYW5zIHRoYXQgYXMgd2UgbW92ZSBhd2F5IGZyb20gcnVsZS1iYXNlZCwgbWVjaGFuaXN0aWMgZGF0YSBhbmFseXRpY3MgdG93YXJkIG1vcmUgY29tcGxleCwgcmVsYXRpb25hbFxyXG5hbmQgbmV0d29ya2VkIGRhdGEsIHdlIG5lZWQgYW4gZXF1YWxseSBjb21wbGV4IHBhcmFkaWdtIHRvIGtlZXAgdXAuIEV4Y2x1ZGluZyB0aGUgZmVtYWxlIG1pbmQgZnJvbSB0aGlzIGNoYWxsZW5nZVxyXG5pcyBub3Qgc2ltcGx5IGEgY2x1bXN5LCBteW9waWMgbWlzdGFrZS4gV29yc2UgeWV0LCBzbyBsb25nIGFzIHRoZSBUZWNoIEluZHVzdHJ5IHJlbWFpbnMgZ2VuZGVyIGxvcC1zaWRlZCwgVGVjaCB3aWxsXHJcbmluY3JlYXNpbmdseSByZXNlbWJsZSBhbm90aGVyIG15b3BpYyBiZWFzdCwgYSBjYXZlLWR3ZWxsZXIgbmFtZWQgQ3ljbG9wcy48L3A+XHJcblxyXG48cD4xLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuaHVmZmluZ3RvbnBvc3QuY29tLzIwMTUvMDMvMjcvd29tZW4taW4tdGVjaF9uXzY5NTU5NDAuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vd3d3Lmh1ZmZpbmd0b25wb3N0LmNvbS8yMDE1LzAzLzI3L3dvbWVuLWluLXRlY2hfbl82OTU1OTQwLmh0bWw8L2E+XHJcbjwvcD5cclxuXHJcbjxwPjIuXHJcbjxhIGhyZWY9XCJodHRwczovL2ZhaXJ5Z29kYm9zcy5jb20vYXJ0aWNsZXMvd29tZW4taW4tdGVjaC1mYWN0cy1maWd1cmVzLWFuZC1wZXJjZW50YWdlc1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vZmFpcnlnb2Rib3NzLmNvbS9hcnRpY2xlcy93b21lbi1pbi10ZWNoLWZhY3RzLWZpZ3VyZXMtYW5kLXBlcmNlbnRhZ2VzPC9hPlxyXG48L3A+XHJcblxyXG48cD4zLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuYWF1dy5vcmcvcmVzZWFyY2gvd2h5LXNvLWZldy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5hYXV3Lm9yZy9yZXNlYXJjaC93aHktc28tZmV3LzwvYT5cclxuPC9wPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYXIgMTgtMDMgLTEyXCIgaWQ9XCIxOC0wMy0wN1wiPlxyXG48aHIgLz5cclxuPGJ1dHRvbj5cclxuPGEgaHJlZj1cIiNtYXJ0b3BcIj5Ub3A8L2E+XHJcbjwvYnV0dG9uPiZuYnNwO1xyXG48aDUgY2xhc3M9XCJ0aXRsZSBkYWlseXRlY2ggbG9uZ3RpdGxlXCI+T1VSIERBSUxZIFRFQ0g6PC9oNT5cclxuXHJcbjxoNSBjbGFzcz1cInN1YmRhaWx5dGVjaFwiPldlYiBEZXYgQWZmYWlyczwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5NYXJjaCA3LCAyMDE4PC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPkFib3V0IHRoZSBBcHJpbCAyMyBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgRkNDIE5ldCBOZXV0cmFsaXR5IExhd3M6XHJcbjxiciAvPiBUaGUgQ29taW5nIEJhdHRsZSBvZiBTdGF0ZXMmIzM5OyB2ZXJzdXMgRmVkZXJhbCBSaWdodHMgUGFydCBJSTwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+V2FzaGluZ3RvbiYjMzk7cyBhc3NlcnRpb24gb2YgU3RhdGVzJiMzOTsgUmlnaHRzIHllc3RlcmRheSBtYXkgYXVndXIgdGhlIGZpcnN0IG9mIG1hbnkgbGF3c3VpdHMgb3ZlciBjb250cm9sIG92ZXJcclxuYmFuZHdpZHRoLjwvcD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwibWFyIDE4LTAzIC0xMlwiIGlkPVwiMTgtMDMtMDZcIj5cclxuPGhyIC8+XHJcbjxidXR0b24+XHJcbjxhIGhyZWY9XCIjbWFydG9wXCI+VG9wPC9hPlxyXG48L2J1dHRvbj4mbmJzcDtcclxuPGg1IGNsYXNzPVwidGl0bGUgZGFpbHl0ZWNoIGxvbmd0aXRsZVwiPk9VUiBEQUlMWSBURUNIOjwvaDU+XHJcblxyXG48aDUgY2xhc3M9XCJzdWJkYWlseXRlY2hcIj5XZWIgRGV2IEFmZmFpcnM8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggNiwgMjAxODwvaDY+XHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5BcHJpbCAyMyBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgRkNDIE5ldCBOZXV0cmFsaXR5IExhd3M6XHJcbjxiciAvPiBUaGUgQ29taW5nIEJhdHRsZSBvZiBTdGF0ZXMmIzM5OyB2ZXJzdXMgRmVkZXJhbCBSaWdodHM8L2g2PlxyXG5cclxuPHAgY2xhc3M9XCJmaXJzdHBhcmFncmFwaFwiPk5ldCBOZXV0cmFsaXR5IFJ1bGVzLCBwb3RlbnRpYWxseSBvbmUgb2YgdGhlIG1vcmUgaW1wb3J0YW50IHNldCBvZiBJbmRpdmlkdWFsIFJpZ2h0cyBmb3IgdXMgYXMgY2l0aXplbnMgaW4gdGhlIHRlY2hcclxuYWdlLCB3aWxsIHNvb24gdW5kZXJnbyB0aGUgcnVsZSBjaGFuZ2VzIHZvdGVkIGJ5IHRoZSBGZWRlcmFsIENvbW11bmljYXRpb25zIENvbW1pc3Npb24gKEZDQykgdGhpcyBwYXN0IERlY2VtYmVyLlxyXG5JbiBhIG51dHNoZWxsLCB0aGUgSW50ZXJuZXQgU2VydmljZSBQcm92aWRlcnMgKElTUCYjMzk7cyksIGUuZy4gQ29tY2FzdCwgQ294LCBWZXJpem9uIGFyZSBncmFudGVkIHRoZSBwb3dlci0tYXNcclxuYSBUaXRsZSBJICZxdW90O2luZm9ybWF0aW9uIHNlcnZpY2UmcXVvdDstLXRvIHNsb3cgZG93biB0cmFmZmljLCBtYWtlIGZhc3QtICZhbXA7IHNsb3ctbGFuZXMuIE9mIGNvdXJzZSB0aGlzIGlzXHJcbmJhZCBuZXdzIGZvciBpbnRlcm5ldC11c2VycyBiZWNhdXNlIGV2ZW4gcHJlbWl1bSB1c2VycyBtYXkgZXhwZXJpZW5jZSAmcXVvdDt0aHJvdHRsaW5nJnF1b3Q7IGlmIHVzaW5nIHRoZSBJU1AmIzM5O3NcclxucHJlZmVycmVkIGFwcHMuIFRoZSBvbmx5IHN0aXB1bGF0aW9uIGhvbGRzIHRoYXQgdGhlIElTUCYjMzk7cyBydWxlcyBhcmUgbWFkZSBwdWJsaWMuIEhvd2V2ZXIsIDIxIHN0YXRlcyBhcmUgYnJpbmdpbmdcclxubGF3c3VpdHMgdG8gZmlnaHQgdGhlc2UgY2hhbmdlcywgYW5kIHRoZSBmaXJzdCBhc3NlcnRpb24gb2YgU3RhdGUgTGF3IGJ5IFdhc2hpbmd0b24gU3RhdGUgdG9kYXk6PC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlRoZSBGQ0MgaXMgYWxyZWFkeSBlbWJyb2lsZWQgaW4gYSB2YXJpZXR5IG9mIGxhd3N1aXRzIHJlbGF0ZWQgdG8gaXRzIHJvbGxiYWNrIG9mIG5ldCBuZXV0cmFsaXR5IHJ1bGVzLCBpbmNsdWRpbmdcclxuYW4gZWZmb3J0IGZyb20gMjEgc3RhdGUgYXR0b3JuZXlzIGdlbmVyYWwgdG8gZ2V0IGEgY291cnQgdG8gYmxvY2sgdGhlIEZDQyYjMzk7cyBtb3ZlLjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj4mcXVvdDtUaGlzIGlzIHN5bWJvbGljIHBvbGl0aWNzLCBiZWNhdXNlIHRoZSBzdGF0ZXMga25vdyBpdCBpcyBpbGxlZ2FsIHRvIGRvLCZxdW90OyBSb3NseW4gTGF5dG9uLCBhIHZpc2l0aW5nIHNjaG9sYXJcclxuYXQgdGhlIEFtZXJpY2FuIEVudGVycHJpc2UgSW5zdGl0dXRlLCB0b2xkIE5CQyBOZXdzLiAmcXVvdDtCdXQgdGhleSBjYW4gcHV0IHJ1bGVzIG9uIHRoZSBib29rIGFuZCBtYWtlIGl0IGxvb2sgbGlrZVxyXG50aGV5JiMzOTtyZSBkb2luZyBzb21ldGhpbmcuJnF1b3Q7IFRoZSBGQ0MgaXMgYWxyZWFkeSBlbWJyb2lsZWQgaW4gYSB2YXJpZXR5IG9mIGxhd3N1aXRzIHJlbGF0ZWQgdG8gaXRzIHJvbGxiYWNrXHJcbm9mIG5ldCBuZXV0cmFsaXR5IHJ1bGVzLCBpbmNsdWRpbmcgYW4gZWZmb3J0IGZyb20gMjEgc3RhdGUgYXR0b3JuZXlzIGdlbmVyYWwgdG8gZ2V0IGEgY291cnQgdG8gYmxvY2sgdGhlIEZDQyYjMzk7c1xyXG5tb3ZlLlxyXG48c3VwPjE8L3N1cD5cclxuPC9wPlxyXG5cclxuPHA+UyBUaGUgYmlnIHF1ZXN0aW9uIGFyaXNlcyBvdmVyXHJcbjxpPndobzwvaT4gaGFzIGp1cmlzZGljdGlvbiBiZXR3ZWVuIHRoZSBTdGF0ZXMmIzM5OyBhbmQgRmVkZXJhbCBhdXRob3JpdHk7IHlldCBvbmUgdGhpbmcgaXMgY2VydGFpbiwgdGhlIGNvbWluZyBiYXR0bGVcclxuZm9yIHByb3RlY3RpbmcgY2l0aXplbnMmIzM5OyByaWdodHMgd2lsbCB0YWtlIHBsYWNlIG92ZXIganVyaXNkaWN0aW9uIG9mIEludGVybmV0IEJhbmR3aWR0aCB0dXJmLjwvcD5cclxuXHJcbjxwPlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cubmJjbmV3cy5jb20vdGVjaC90ZWNoLW5ld3Mvd2FzaGluZ3Rvbi1zdGF0ZS1wYXNzZXMtbmV0LW5ldXRyYWxpdHktbGF3LXN0YXRlcy1wdXNoLWJhY2stYWdhaW5zdC1uODU0MDg2XCJcclxuICB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3d3dy5uYmNuZXdzLmNvbS90ZWNoL3RlY2gtbmV3cy93YXNoaW5ndG9uLXN0YXRlLXBhc3Nlcy1uZXQtbmV1dHJhbGl0eS1sYXctc3RhdGVzLXB1c2gtYmFjay1hZ2FpbnN0LW44NTQwODY8L2E+XHJcbjwvcD5cclxuXHJcbjxwPiZuYnNwOzwvcD5cclxuPC9kaXY+XHJcblxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTJcIiBpZD1cIjE4LTAzLTA1XCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI21hcnRvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+SGVhbHRoeSBUb2RheSE8L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggNSwgMjAxODwvaDY+XHJcblxyXG48aDYgY2xhc3M9XCJkYWlseXRpdGxlIGNoYXB0ZXJudW1iZXJcIj5BIFJldHVybiB0byB0aGUgUXVlc3Rpb24gb2YgR3VucywgR2VybXMsIGFuZCBTdGVlbDogUGFydCBJSSBhbmQgdGhlIEdlcm1zPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5HZXJtcyBwcmVzZW50IGEgdGltZWx5IHRvcGljIGZvciB0b2RheSwgZ2l2ZW4gdGhlIGVzcGVjaWFsbHkgdmlydWxlbnRcclxuPHN0cm9uZz5GbHUgVmlydXMgc3RyYWluPC9zdHJvbmc+LiBNYW55LCBsaWtlIG1lLCBoYXZlIHdvbmRlcmVkIHdoeSBvdXIgMTk0MCYjMzk7cy1lcmFcclxuPHN1cD4xPC9zdXA+IHRlY2hub2xvZ3kgaW4gRmx1IFZhY2NpbmUgZmFicmljYXRpb24gd291bGRuJiMzOTt0IGludml0ZSBtb3JlIGlubm92YXRpdmUgc29sdXRpb25zLiBXaXRob3V0IGZlaWduaW5nIGFueVxyXG5tZWRpY2FsIGV4cGVydGlzZSwgSSBoYXZlIHRvIHN0aWxsIGFzayBhYm91dCB0aGUgcHJvZ3Jlc3MgbWFkZSB3aXRoIHRoZSBldmVyLW11dGF0aW5nLS1pLmUuLCBkcmlmdGluZy0tRmx1IHZpcnVzJiMzOTtcclxuc3VyZmFjZSBwcm90ZWluICZxdW90O2hlYWQsJnF1b3Q7IGNhbGxlZCBoZW1hZ2x1dGluaW4uIFRoaXMgc3RyYXRlZ3kgJnF1b3Q7Z3Vlc3NlcyByaWdodCZxdW90OyB2ZXJ5IGVmZmVjdGl2ZWx5LFxyXG5hbmQgcHJvdmlkZXMgYW4gZWZmZWN0aXZlIHNvbHV0aW9uIGZvciBtb3N0LCBpbiBtb3N0IHllYXJzLiBZZXQgdGhpcyB3aW50ZXIgaGFzIHJldmVhbGVkIHRoYXQgZWZmZWN0aXZlbmVzcyBzdGF0aXN0aWNzXHJcbmFyZVxyXG48aT5ub3QgYWx3YXlzPC9pPiBpbiBvdXIgZmF2b3IuPC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPkZvciBtYW55IGRlY2FkZXMsIHJlc2VhcmNoZXJzIGJlbGlldmVkIHRoZSBmbHUgdmFjY2luZSBvZmZlcmVkIHNvbGlkIHByb3RlY3Rpb24gaWYgaXQgd2FzIGEgZ29vZCBtYXRjaCB0byB0aGUgY2lyY3VsYXRpbmdcclxuc3RyYWluczsgc3R1ZGllcyBmcm9tIHRoZSAxOTQwcyB0aHJvdWdoIHRoZSAxOTYwcyByb3V0aW5lbHkgc2hvd2VkIGFuIGVmZmljYWN5IG9mIDcwJSB0byA5MCUuIEJ1dCB0aG9zZSBzdHVkaWVzXHJcbnJlbGllZCBvbiBhIG1pc2xlYWRpbmcgbWV0aG9kb2xvZ3kuPC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPkRhbnV0YSBTa293cm9uc2tpLCBhbiBlcGlkZW1pb2xvZ2lzdCBhdCB0aGUgQkMgQ2VudHJlIGZvciBEaXNlYXNlIENvbnRyb2wgaW4gVmFuY291dmVyLCBDYW5hZGEsIGluc3RlYWQgYmxhbWVzIG11dGF0aW9uc1xyXG5pbiB0aGUgdmFjY2luZSBzdHJhaW4gaXRzZWxmLiBUaGUgbW9zdCBjb21tb24gaW5mbHVlbnphIHZhY2NpbmUgY29udGFpbnMgYW4gJnF1b3Q7aW5hY3RpdmF0ZWQmcXVvdDsgdmlydXMsIHdoaWNoXHJcbm1hbnVmYWN0dXJlcnMgZ3JvdyBpbiBjaGlja2VuIGVnZ3MuIEFzIFNrb3dyb25za2kmIzM5O3MgdGVhbSBmaXJzdCByZXBvcnRlZCBpbiAyMDE0LCB0aGUgdmlydXMgY2FuIG11dGF0ZSB3aGlsZVxyXG5pdCBpcyBncm93aW5nIGluIHRoZSBlZ2dzLCByZXN1bHRpbmcgaW4gYSB2YWNjaW5lIHVuYWJsZSB0byBibG9jayBjaXJjdWxhdGluZyBzdHJhaW5zLlxyXG48c3VwPjE8L3N1cD5cclxuPC9wPlxyXG5cclxuPHA+RWFybGllciwgSSBjYXN1YWxseSBtZW50aW9uZWQgJnF1b3Q7Z3Vlc3NpbmcmcXVvdDssIHlldCB3aXRoIGdyZWF0IHJlc3BlY3QsIHRoZSBzY2llbmNlIGJlaGluZCBlc3RpbWF0aW5nIHRoZSBmbHVcclxudmlydXMgYmV0d2VlbiB0aGUgdGltZSBvZiBSICZhbXA7IEQsIGZhYnJpY2F0aW9uLCBhbmQgdGhlIGZsdVxyXG48aT5zZWFzb248L2k+LiAoVGhpcyBhbnRpZ2VuaWMgZHJpZnQsIG5vdCB0byBiZSBjb25mdXNlZCB3aXRoXHJcbjxpPkFudGlnZW5pYyBTaGlmdDwvaT4gaW4gd2hpY2ggdGhlIEZsdSBWaXJ1cyBtYWtlcyBhbiBhYnJ1cHQgY2hhbmdlLikgSSYjMzk7bGwgbGV0IHRoZSBDREMgYWJicmV2aWF0ZSB0aGlzOjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5PbmUgd2F5IHRoZXkgY2hhbmdlIGlzIGNhbGxlZCAmbGRxdW87YW50aWdlbmljIGRyaWZ0LiZyZHF1bzsgVGhlc2UgYXJlIHNtYWxsIGNoYW5nZXMgaW4gdGhlIGdlbmVzIG9mIGluZmx1ZW56YSB2aXJ1c2VzXHJcbnRoYXQgaGFwcGVuIGNvbnRpbnVhbGx5IG92ZXIgdGltZSBhcyB0aGUgdmlydXMgcmVwbGljYXRlcy4gVGhlc2Ugc21hbGwgZ2VuZXRpYyBjaGFuZ2VzIHVzdWFsbHkgcHJvZHVjZSB2aXJ1c2VzIHRoYXRcclxuYXJlIHByZXR0eSBjbG9zZWx5IHJlbGF0ZWQgdG8gb25lIGFub3RoZXIsIHdoaWNoIGNhbiBiZSBpbGx1c3RyYXRlZCBieSB0aGVpciBsb2NhdGlvbiBjbG9zZSB0b2dldGhlciBvbiBhIHBoeWxvZ2VuZXRpY1xyXG50cmVlLiBWaXJ1c2VzIHRoYXQgYXJlIGNsb3NlbHkgcmVsYXRlZCB0byBlYWNoIG90aGVyIHVzdWFsbHkgc2hhcmUgdGhlIHNhbWUgYW50aWdlbmljIHByb3BlcnRpZXMgYW5kIGFuIGltbXVuZSBzeXN0ZW1cclxuZXhwb3NlZCB0byBhbiBzaW1pbGFyIHZpcnVzIHdpbGwgdXN1YWxseSByZWNvZ25pemUgaXQgYW5kIHJlc3BvbmRcclxuPHN1cD4yPC9zdXA+LjwvcD5cclxuXHJcbjxwPlNvLCB1bHRpbWF0ZWx5LCB0aGUgc3RyYXRlZ3kgaXMgdG8gZXN0aW1hdGUgdGhlIGZvcm0sIGxvY2F0aW9uLCBvZiB0aGF0IHZpcnVzLS13aGF0IGl0IHdpbGwgbG9vayBsaWtlLS1hdCBhIHBhcnRpY3VsYXJcclxucGVyaW9kIGVhY2ggeWVhci4gVGhpcyBpbXBsaWNhdGVzIGEgc3RyYXRlZ3kgdG8gZXN0aW1hdGUgdGhlIHRyYWplY3RvcnksIHN0YWdlIGJ5IHN0YWdlLCBvZiB0aGlzIHZpcnVzLCBpLmUuIGEgbG9uZ2l0dWRpbmFsXHJcbnRpbWUtc2VyaWVzIG1vcnBob2xvZ3ksIGVhY2ggeWVhci4gVGhlIGFydGljbGUgbWFrZXMgdGhpcyBwb2ludCBtb3JlIHByZWNpc2U6PC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPkJ1dCB0aGVzZSBzbWFsbCBnZW5ldGljIGNoYW5nZXMgY2FuIGFjY3VtdWxhdGUgb3ZlciB0aW1lIGFuZCByZXN1bHQgaW4gdmlydXNlcyB0aGF0IGFyZSBhbnRpZ2VuaWNhbGx5IGRpZmZlcmVudCAoZnVydGhlclxyXG5hd2F5IG9uIHRoZSBwaHlsb2dlbmV0aWMgdHJlZSkuIFdoZW4gdGhpcyBoYXBwZW5zLCB0aGUgYm9keSZyc3F1bztzIGltbXVuZSBzeXN0ZW0gbWF5IG5vdCByZWNvZ25pemUgdGhvc2UgdmlydXNlcy5cclxuPHN1cD4yPC9zdXA+XHJcbjwvcD5cclxuXHJcbjxwPlBldHJpIGRpc2hlcyBhc2lkZSwgbGV0JiMzOTtzIGZvY3VzIG9uIHRoZSBjaGFuZ2luZyBuYXR1cmUgb2YgdGhlIEZsdSBWaXJ1cywgd2hpY2ggbWFrZXMgaXRzZWxmIGFcclxuPGk+cmVzZWFyY2ggPC9pPmNoYWxsZW5nZSBpbiBpdHNlbGYgYmVjYXVzZSBvZiBhbiBldmVyLW11dGF0aW5nIG9iamVjdCBvZiBzdHVkeS4gWWV0LCB0aGlzIGV2ZXItY2hhbmdpbmcgbmF0dXJlIGFsc29cclxucHJvdmlkZXMgdGhlIHZlcnkgdG9vbCBTdGF0aXN0aWNpYW5zIG5lZWQgbW9zdCBmb3IgZXN0aW1hdGluZzogQmlnIERhdGEuIFRoZSBMYXcgb2YgTGFyZ2UgTnVtYmVycyBtZWFucyB0aGF0IHBsYWluXHJcbm1hdGggY2FuIGFjY3VyYXRlbHkgcGxvdCwgYW5kIGluIG1vc3QgY2FzZXMgcHJlZGljdCB3aXRoIGEgbW9kZXJhdGUgc3RhdGlzdGljYWwgc2lnbmlmaWNhbmNlLCBmdXR1cmUgZXZlbnRzLCBzb3J0XHJcbm9mLjwvcD5cclxuXHJcbjxwPlNvcnQgb2YgSSBzYXkgYmVjYXVzZSB0b28gb2Z0ZW4gd2UgcHJlZGljdCB0aGF0IHR3byBzZXBhcmF0ZSBldmVudHMgYXJlIG1vcmUgbGlrZWx5IHRvIG9jY3VyLCBjb25kaXRpb25hbCBvbiBlYWNoXHJcbm90aGVyLCB0aGVuIGNvbmRpdGlvbmFsIHVwb24gb3RoZXIgZmFjdG9ycy4gVGhpcyBiZWluZ1xyXG48aT5jb3JyZWxhdGlvbjwvaT4sIGJ1dCB0aGUgU3RhdGlzdGljaWFuJiMzOTtzIEhvbHkgR3JhaWwgaXMgdGhlIG90aGVyIGtpbmQ6IENhdXNhbGl0eS4gQ2F1c2FsaXR5IGhpbmdlcyBvbiBvbmx5IHRocmUzZVxyXG50aGluZ3M6IDEpIEFzc29jaWF0aW9uLCAyKSBUaW1lIFByZWNlZGVuY2UsIGFuZCAzKSBSdWxpbmcgb3V0IGFueVxyXG48aT4gZWZmZWN0PC9pPiBvZiBzcHVyaW91cyB2YXJpYWJsZXMuIChIYW5nIHdpdGggbWUsIEkmIzM5O20gc3RpbGwgZ2V0dGluZyBiYWNrIHRvIHRoZSBzdWJqZWN0IG9mIG91ciBhbm51YWwgcHJlZGljdGlvbnNcclxuYWJvdXQgYSBmZXcgbW9udGhzJiMzOTsgd29ydGggb2YgYW50aWdlbmljIGRyaWZ0Lik8L3A+XHJcblxyXG48cD5UaGVyZWZvcmUsIEJpZyBkYXRhLCBhbmQgbmV3IGFkdmFuY2VzIGluIHRoZSBzdGF0aXN0aWNhbCBzY2llbmNlcywgYW5kIHRoZSB0ZWNobm9sb2d5IHRoYXQgaW5jcmVhc2luZ2x5IGRlZmluZXMgb3VyXHJcbnNjaWVuY2VzLCBtYXkgc29vbiByZWZpbmUgYW5kIHN1cGVyY2hhcmdlIHJlc2VhcmNoIGludG8gdGhlIGZpcnN0IGFuZCB0aGlyZCBvZiB0aGUgdGhyZWUgcG9pbnRzIG9mIGNhdXNhbGl0eS4gVGhlXHJcbmZpcnN0IG9mIHRoZXNlLCB0aGUgYXNzb2NpYXRpb25zLCBhbG9uZyB0aGUgcGh5bG9nZW5ldGljIHRyZWUsIGFyZSBtZXJlbHkgYSBuZXR3b3JrIGF0IGl0cyBiYXNlLCB0aGUgc2NpZW5jZSBvZlxyXG53aGljaCBnYWlucyBjb21wdXRhdGlvbmFsIHN0cmVuZ3RoIGVhY2ggeWVhci4gUmFyZSBhcyBpdCBpcyBpbiBBY2FkZW1pYSwgaW4gdGhpcyBjYXNlIE1pZ2h0IG1ha2VzIFJpZ2h0ITwvcD5cclxuXHJcbjxwPlxyXG5UaGUgdGhpcmQgdGVuZXQgb2YgY2F1c2FsaXR5LCBhZnRlciBhc3NvY2lhdGlvbiBhbmQgdGltZSBkaXJlY3Rpb24sIGlzIHJ1bGluZyBvdXQgdGhlIGVmZmVjdCBvZiBvdGhlciBmYWN0b3JzIHdoZW4gc2VwYXJhdGluZ1xyXG48aT5jYXVzZTwvaT4gYW5kIGNvbnNlcXVlbmNlLiBBZHZhbmNlcyBpbiBtYW5hZ2luZyBiaWcgZGF0YSwgYW5kIHN0YXRpc3RpY2FsIGFuYWx5c2lzIG9mIGl0LCBtZWFucyBnYWluaW5nIGEgYmV0dGVyXHJcbmhhbmRsZSBvbiB0aGUgbXVsdGlwbGUgZWZmZWN0cyBvZlxyXG48c3VwPnNwdXJpb3VzIDwvc3VwPmZhY3RvcnMsIGhlbmNlIGFuYWx5c2lzIG9wdGltaXplZCBieSBuZXcsIG5ldHdvcmstZ3JhcGggZGF0YSBzdHJ1Y3R1cmUgdGVjaG5vbG9neS4gVGhlIExhdyBvZiBMYXJnZVxyXG5OdW1iZXJzXHJcbjxzdXA+Mzwvc3VwPiwgaS5lLiB0aGUgc2hlZXIgbnVtYmVyIG9mIG11dGF0aW9ucyBhbmQgb3RoZXIgZmFjdG9ycywgY291cGxlZCB3aXRoIG5ld1xyXG48c3Ryb25nPnRlY2hub2xvZ3k8L3N0cm9uZz4sIHdpbGwgYmV0dGVyIGluZm9ybSB0aGUgbW9ycGhvbG9neSBvZiB0aGVcclxuPGk+cGF0aDwvaT4gb2YgdGhlIHZpcnVzLCBhbG9uZyB0aGUgcGh5bG9nZW5ldGljIHRyZWUgaXRzZWxmLiBXaG8ga25vd3Mgd2hlcmUgYSBjdXJlIG1heSBjb21lIGZyb20sIHBlcmhhcHMgYSBiaW8tc3RhdGlzdGljaWFuXHJcbm91dCB0aGVyZSwgY2h1cm5pbmcgdGhlIG51bWJlcnMsIG1heSBiZSB0aGUgb25lIHRvIHN0dW1ibGUgdXBvbiBhIGJldHRlciBGbHUgVmFjY2luZSFcclxuXHJcbjwvcD5cclxuPHA+MS5cclxuPGEgaHJlZj1cImh0dHA6Ly93d3cuc2NpZW5jZW1hZy5vcmcvbmV3cy8yMDE3LzA5L3doeS1mbHUtdmFjY2luZXMtc28tb2Z0ZW4tZmFpbFwiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwOi8vd3d3LnNjaWVuY2VtYWcub3JnL25ld3MvMjAxNy8wOS93aHktZmx1LXZhY2NpbmVzLXNvLW9mdGVuLWZhaWwgPC9hPlxyXG48L3A+XHJcblxyXG48cD4yLlxyXG48YSBocmVmPVwiaHR0cHM6Ly9xei5jb20vMTE0MzQyMC90aGUtMjAxNy0yMDE4LWZsdS12YWNjaW5lLWlzLWxlc3MtZWZmZWN0aXZlLXRoYW4tdXN1YWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj4gaHR0cHM6Ly9xei5jb20vMTE0MzQyMC90aGUtMjAxNy0yMDE4LWZsdS12YWNjaW5lLWlzLWxlc3MtZWZmZWN0aXZlLXRoYW4tdXN1YWwgPC9hPlxyXG48L3A+XHJcblxyXG48cD4zLlxyXG48YSBocmVmPVwiaHR0cHM6Ly93d3cuY2RjLmdvdi9mbHUvYWJvdXQvdmlydXNlcy9jaGFuZ2UuaHRtXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IGh0dHBzOi8vd3d3LmNkYy5nb3YvZmx1L2Fib3V0L3ZpcnVzZXMvY2hhbmdlLmh0bSA8L2E+XHJcbjwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj4mbmJzcDs8L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTJcIiBpZD1cIjE4LTAzLTAzXCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI21hcnRvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+U29jaW9sb2d5IFRvbW9ycm93ITwvaDU+XHJcblxyXG48cCBjbGFzcz1cImF1dGhvclwiPmJ5IFRob21hcyBNYWVzdGFzLCBNQTwvcD5cclxuXHJcbjxoNiBjbGFzcz1cImNoYXB0ZXJudW1iZXJcIj5NYXJjaCAzLTQsIDIwMThcclxuPGJyIC8+IFdlZWtlbmRcclxuPC9oNj5cclxuXHJcbjxoNiBjbGFzcz1cImRhaWx5dGl0bGUgY2hhcHRlcm51bWJlclwiPkEgUmV0dXJuIHRvIHRoZSBRdWVzdGlvbiBvZiBHdW5zLCBHZXJtcywgYW5kIFN0ZWVsPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5CYWNrIGluIDE5OTcsIGEgUHVsaXR6ZXItUHJpemUgd2lubmluZyB0aGVvcnktLWJhc2VkIG9uIERyLiBKYXJlZCBEaWFtb25kJiMzOTtzXHJcbjxpPkd1bnMsIEdlcm1zLCBhbmQgU3RlZWw6IFRoZSBGYXRlIG9mIEh1bWFuIFNvY2lldGllczwvaT4gLS1wcm92aWRlZCB0aGUgcmVjaXBlIGJvb2sgZm9yIHRoZSBzdWNjZXNzIG9mIHNvY2lldGllcy5cclxuTm90IHdpdGhvdXQgY29udHJvdmVyc3ksIHRoZSB0aGVvcnkgcG9zaXRzIHRoYXQgZ2VvZ3JhcGhpYyBhbmQgZW52aXJvbm1lbnRhbCBwcmVjb25kaXRpb25zLCBvbmNlIG1ldCwgcHJvdmlkZSB0ZWNoXHJcbiZhbXA7IHJlc291cmNlcyB0cmFkaW5nIG9wcG9ydHVuaXRpZXMsIHdpdGhpbiBhIG5ldHdvcmsgb2Ygb3RoZXIgbmF0aW9uLXN0YXRlcyBhbHNvIHZ5aW5nIGZvciB0ZWNobm9naWNhbCBpbm5vdmF0aW9uLjwvcD5cclxuXHJcbjxwPkEgbmF0aW9uJiMzOTtzIFRlY2hub2xvZ3ksIGluIHR1cm4sIG9wZW5zIHRoZSBtZWFucyBuZWNlc3NhcnkgdG8gZXhwYW5zaXZlLCBzdGFibGUsIGluZGVwZW5kZW50IHNvdmVyZWlnbnR5IHRoYXRcclxubGFzdHMgYW5kIHRocml2ZXMuIEVxdWFsbHkgc28sIHRoZSBuYXRpb24mIzM5O3MgZnJpZW5kcywgZXNwZWNpYWxseSB0aG9zZSBtYWtpbmcgdGhlIGJlc3QtZnJpZW5kcyBsaXN0LCBzaGFyZSBhbmRcclxucmVjZWl2ZSBhIHNlY29uZGFyeSwgJnF1b3Q7cmVzaWR1YWwmcXVvdDsgdGVjaG5vbG9naWNhbCBidW1wIG92ZXIgdGhlIHRpbWUtY291cnNlIG9mIHRoZSBuZXR3b3JrJiMzOTtzIGZ1dHVyZSB0cmFkaW5nLFxyXG5pLmUuIG5ldHdvcmsgdHJhbnNhY3Rpb25zLiBTbywgaWYgb3VyIGJlc3QgZnJpZW5kcyBDYW5hZGEgYW5kIE1leGljbyBhcmUgbGVzcyBrZWVuLCB0aGVuIHRoZXJlIGlzIG5ldHdvcmsgcmV2ZXJiZXJhdGlvbiE8L3A+XHJcblxyXG48cD5HaXZlbiB0aGUgYWR2ZW50IG9mIGEgcmVhbCwgbGFzdGluZyBUcmFkZS1XYXIsIEkgd291bGQgdGhpbmsgdGhhdCBhIG5ldHdvcmsgdGhlb3Jpc3Qgd291bGRuJiMzOTt0IGJlIGJldHRpbmcgb24gb25lXHJcbnBhcnRpY3VsYXIgbm9kZSB3aXRoaW4gdGhpcyBuZXR3b3JrLiBJIHNheSB0aGlzIGJlY2F1c2UgYSBkaXNwcm9wb3J0aW9uYXRlbHkgYXN5bW1ldHJpY2FsIGZsb3cgb2YgdGVjaG5vbG9neSBhbmRcclxucmVzb3VyY2VzLCB3aGlsZSBzaW11bHRhbmVvdXNseSByYWlzaW5nIHByaWNlcyBvbiBtb3N0IHN0YXBsZSBnb29kcywgbWF5IHNwZWxsIHRyb3VibGUgZm9yIHRoZSBFdmVyeS1EYXkgcGVyc29uLlxyXG5TbyBmYXIsIE5hdGlvbi1TdGF0ZTogMCwgUGVvcGxlOiAwIC4uLiBTbywgd2hvIHdpbnMgd2l0aCBhIFRyYWRlIFdhcj8gQWxhcywgbGV0JiMzOTtzIGhvcGUgbm90IHRoZSByZXN1cnJlY3Rpb25cclxub2YgdGhlIE5lby1NdWx0aS1OYXRpb25hbCBDb3Jwb3JhdGlvbnMsIGJvcm4gZnJvbSBOQUZUQSBkZWFscywgY29pbmNpZGVudGFsbHksIGZyb20gdGhlIGxhdGUgMTk5MCYjMzk7cy4gQmFoIGh1bWJ1ZyE8L3A+XHJcblxyXG48cD4mbmJzcDs8L3A+XHJcblxyXG48cD4xLlxyXG48YSBocmVmPVwiaHR0cDovL3d3dy5qYXJlZGRpYW1vbmQub3JnL0phcmVkX0RpYW1vbmQvR3VucyxfR2VybXMsX2FuZF9TdGVlbC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R3VucywgR2VybXMsIGFuZCBTdGVlbC4gJnF1b3Q7U3RlZWw6IFRoZSBGYXRlcyBvZiBIdW1hbiBTb2NpZXRpZXMuJnF1b3Q7IERpYW1vbmQgSiAoMTk5NykuPC9hPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTJcIiBpZD1cIjE4LTAzLTAyXCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI21hcnRvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+V2ViIERldiBBZmZhaXJzPC9oNT5cclxuXHJcbjxwIGNsYXNzPVwiYXV0aG9yXCI+YnkgVGhvbWFzIE1hZXN0YXMsIE1BPC9wPlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlclwiPk1hcmNoIDIsIDIwMTg8L2g2PlxyXG5cclxuPGg2IGNsYXNzPVwiY2hhcHRlcm51bWJlciBkYWlseXRpdGxlXCI+V2lkZW5pbmcgQ2lyY2xlcyBvZiBNb2JpbGUtQXBwIFNlY3VyaXR5IFJpc2tzPC9oNj5cclxuXHJcbjxwIGNsYXNzPVwiZmlyc3RwYXJhZ3JhcGhcIj5TZWN1cml0eSwgc2VjdXJpdHksIGFub3RoZXIgZGF5IGFub3RoZXIgcGxhdGZvcm0gcmlzaywgb3Igcmlza3MgZnJvbSB5b3VyIGRldmljZSwgb3Igcmlza3MgZnJvbSB0cmFuc2FjdGlvbnMsIFRvZGF5JiMzOTtzXHJcbmhlYWRsaW5lIGJ1cmllZCBiZW5lYXRoIGEgdGVjaHkgamFyZ29uIHByb3ZpZGVzIGEgZ2xpbXBzZSBvZiB0aGUgcmlzaW5nIHRocmVhdCBvZiB3ZWItYXBwbGljYXRpb24tYmFzZWQgaGFja2VyeTpcclxuQ3J5cHRvamFja2luZy5cclxuPGk+Q29pbmRlc2s8L2k+IHJlcG9ydHMsICZxdW90OyBPcGVyYSBicm93c2VyIGludHJvZHVjZXMgY3J5cHRvY3VycmVuY3kgbWluZXIgcHJvdGVjdGlvbiBmb3Igc21hcnRwaG9uZXMgLi4uICZxdW90OzwvcD5cclxuXHJcbjxwIGNsYXNzPVwicXVvdGVcIj5DcnlwdG9jdXJyZW5jeSBtaW5lcnMgY2FuIG92ZXJsb2FkIHNtYXJ0cGhvbmVzJiMzOTsgQ1BVcywgZm9yY2luZyAxMDAgcGVyY2VudCB1c2FnZSBhbmQgcG90ZW50aWFsbHkgY2F1c2luZyBhIHBob25lXHJcbnRvIG92ZXJoZWF0LiBBbmQgdGhlIGRhbWFnZSBjYW4gc29tZXRpbWVzIGJlIHBlcm1hbmVudC4gQWNjb3JkaW5nIHRvIGEgWkROZXQgYXJ0aWNsZSwgb25lIHRyb2phbiBnZW5lcmF0ZWQgc28gbXVjaFxyXG5oZWF0IGluIGEgcGhvbmUsIGl0cyBiYXR0ZXJ5IGJlY2FtZSBzd29sbGVuLCBwZXJtYW5lbnRseSBkYW1hZ2luZyB0aGUgcGhvbmUuIFdoaWxlIGV4Y2Vzc2l2ZSBhZHMgd2VyZSBvbmUgcmVhc29uXHJcbmZvciB0aGUgaGVhdCBnZW5lcmF0aW9uLCB0aGUgbWFpbiBjYXVzZSB3YXMgdGhhdCB0aGUgcGhvbmUmIzM5O3MgQ1BVIHdhcyBoaWphY2tlZCB0byBtaW5lIGZvciBNb25lcm8uXHJcbjxzdXA+MTwvc3VwPlxyXG48L3A+XHJcblxyXG48cD5UaGUgbGFyZ2VyIGlzc3VlIGhlcmUgaXMgdGhhdCB0aGUgbGluZXMgYmV0d2VlbiB0cnVzdGVkIG1vYmlsZS1hcHAgYXV0aG9yaXRpZXMsIGkuZS4sIGNlcnRpZmllZCBieSBQbGF5IFN0b3JlIG9yXHJcbkFwcGxlJiMzOTtzIGlzIGluY3JlYXNpbmdseSBpcnJlbGV2ZW50LiBUaGlzIGlzIGJlY2F1c2UgYW4gaW5jcmVhc2luZyBudW1iZXIgb2YgYXBwLXVzZXJzIGFyZSBkaXRjaGluZyBkZXZpY2UtZG93bmxvYWRlZFxyXG5hcHBzLCBwcmVmZXJyaW5nIGZvciBicm93c2VyIGFwcGxpY2F0aW9ucy0taGVuY2UsIGEgbXVjaCBtb3JlIGFwcGV0aXppbmcgbWFya2V0IGZvciB0aGUgbmV3ZXN0IGdlbmVyYXRpb24gb2YgYmxhY2toYXRcclxuaGFja2Vycywgb25saW5lIHRoaWV2ZXMsIHBlZXBpbmctdG9tcywgYW5kIG90aGVyIGlsbC13aXNoZXJzLiBUaGVyZSBhcmUgYSBmZXcgZHJpdmluZyBmYWN0b3JzIGZvciB0aGlzIGlzc3VlLS1vbmVcclxub2Ygd2hpY2ggaXMgdGhlIG9uc2V0IG9mIERlY2VudHJhbGl6ZWQgQXBwbGljYXRpb25zIChEQVBQcyksIHdoaWNoIHVzZSB0aGVcclxuPGk+YnJvd3NlcjwvaT4gdG8gaW50ZXJmYWNlIGJldHdlZW4gdGhlIEV2ZXJ5LURheSBibG9ja2NoYWluIGNsaWVudC9tZXJjaGFudC9wcm9ncmFtbWVyIGFuZCB0aGUgYWN0dWFsIGJ5dGUtY29kZSBvZlxyXG50aGUgYmxvY2tjaGFpbiAodmlhIFdFQikuPC9wPlxyXG5cclxuPHA+TW9yZSBpbXBvcnRhbnRseSwgdGhlIGxhcmdlciBpc3N1ZSBpcyB0aGF0IHdlIGxpdmUgaW4gYW4gYWdlIGluIHdoaWNoIHRoZSBleGNsdXNpdmUsIG5hdGl2ZSBicm93c2VyIGxhbmd1YWdlIHNpbmNlXHJcbjE5OTUsIGkuZS4gSmF2YVNjcmlwdC4gU2VjdXJpdHkgaXNzdWVzIHdpdGggYnJvd3Nlci1iYXNlZCBhcHBzIHdlcmUgdmVyeSBsb3csIGJlY2F1c2UgSmF2YVNjcmlwdCBuZXZlciBsZWZ0IHRoZVxyXG5icm93c2VyLCBldmVyLiBVbnRpbCAyMDA5LCBEYXRhLCBTZXJ2ZXJzIHdlcmUgdGhlIGRvbWFpbiBvZiBQSFAsIEpBVkEsIFB5dGhvbiwgZXRjLiBvciBzb21lIG90aGVyIGxhbmd1YWdlIGZvciB0aGVcclxuaGlnaGx5IHNlbnNpdGl2ZSwgZGlydHkgd29yayBvZiBkaXBwaW5nIGludG8gYWxsIHRoYXQgZGF0YSBzaXR0aW5nIG9udG9wIG9mIGNlbnRyYWxpemVkIHNlcnZlcnMgYXJvdW5kIHRoZSB3b3JsZC5cclxuUEhQIHdhc24mIzM5O3QgZWFzeSwgc28gcG93ZXIgYW5kIHJlc3BvbnNpYmlsaXR5IHVzdWFsbHkgZm9sbG93ZWQgd2l0aCBhbGwgdGhlIGV4dHJhIGVmZm9ydCBhbmQgZXhwZXJ0aXNlLjwvcD5cclxuXHJcbjxwPjIwMTUgYXVndXJlZCBpbiB0aGUgTm9kZS5qcyBzZXJ2ZXItYWNjZXNzaW5nIChjYW4gY3JlYXRlLCByZWFkLCB1cGRhdGUsIGFuZCBkZWxldGUgZGF0ZSkgbmV3LWJvcm4gY2FwYWJpbGl0aWVzIG9mXHJcbkphdmFTY3JpcHQ8L3A+XHJcblxyXG5cclxuPHA+MS5cclxuPGEgaHJlZj1cIlxyXG5odHRwczovL3d3dy5jb2luZGVzay5jb20vb3BlcmEtYnJvd3Nlci1pbnRyb2R1Y2VzLWNyeXB0b2N1cnJlbmN5LW1pbmVyLXByb3RlY3Rpb24tZm9yLXNtYXJ0cGhvbmVzL1xyXG5cIiB0YXJnZXQ9XCJfYmxhbmtcIj4gaHR0cHM6Ly93d3cuY29pbmRlc2suY29tL29wZXJhLWJyb3dzZXItaW50cm9kdWNlcy1jcnlwdG9jdXJyZW5jeS1taW5lci1wcm90ZWN0aW9uLWZvci1zbWFydHBob25lcy8gPC9hPlxyXG48L3A+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cIm1hciAxOC0wMyAtMTJcIiBpZD1cIjE4LTAzLTAxXCI+XHJcbjxociAvPlxyXG48YnV0dG9uPlxyXG48YSBocmVmPVwiI21hcnRvcFwiPlRvcDwvYT5cclxuPC9idXR0b24+Jm5ic3A7XHJcbjxoNSBjbGFzcz1cInRpdGxlIGRhaWx5dGVjaCBsb25ndGl0bGVcIj5PVVIgREFJTFkgVEVDSDo8L2g1PlxyXG5cclxuPGg1IGNsYXNzPVwic3ViZGFpbHl0ZWNoXCI+TXVzaW5nIEJsb2NrY2hhaW48L2g1PlxyXG5cclxuPHAgY2xhc3M9XCJhdXRob3JcIj5ieSBUaG9tYXMgTWFlc3RhcywgTUE8L3A+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyXCI+TWFyY2ggMSwgMjAxODwvaDY+XHJcblxyXG48aDYgY2xhc3M9XCJjaGFwdGVybnVtYmVyIGRhaWx5dGl0bGVcIj5CbG9ja2NoYWluIFN1c3RhaW5hYmlsaXR5IElzc3VlcyBhbmQgVGhlIERvdWJsZS1FZGdlZCBTd29yZDwvaDY+XHJcblxyXG48cCBjbGFzcz1cImZpcnN0cGFyYWdyYXBoXCI+SSBjb3VsZG4mIzM5O3QgaGVscCBidXQgcmV2aXNpdCB0aGVcclxuPHN0cm9uZz5FbnZpcm9ubWVudGFsIFN1c3RhaW5hYmlsaXR5PC9zdHJvbmc+IHByb2JsZW0gSSBhZGRyZXNzZWQgaW4gbXkgRmVicnVhcnkgMjh0aCBwb3N0LiBUaGlzIHByb2JsZW0sIGV4cGVyaWVuY2VkIGJ5XHJcbnRoZSB0b3AgdHdvIGNyeXB0by1jdXJyZW5jaWVzIEJpdGNvaW4gYW5kIEV0aGVyZXVtLCBpcyB0aGF0IHRoZVxyXG48aT5tb25ldGFyeTwvaT4gdmFsdWUgb2YgdGhlIGN1cnJlbmN5IGlzIG1hdGNoZWQgdG8gdGhlXHJcbjxpPmNvbXB1dGluZyBkaWZmaWN1bHR5PC9pPi0tbWVhc3VyZWQgZWl0aGVyIGJ5IGhvdyBtdWNoIHRoZSBjb21wdXRlciBpcyBzd2VhdGluZywgb3IgYnkgZWxlY3RyaWNpdHkgS2lsb1dhdHQgSG91cnNcclxucGVyIHllYXIuXHJcbjxzdXA+MTwvc3VwPiBEaWdpY29ub21pc3Qgc3VjY2luY3RseSB3cml0ZXM6PC9wPlxyXG5cclxuPHAgY2xhc3M9XCJxdW90ZVwiPlRoZSBjb250aW51b3VzIGJsb2NrIG1pbmluZyBjeWNsZSBpbmNlbnRpdml6ZXMgcGVvcGxlIGFsbCBvdmVyIHRoZSB3b3JsZCB0byBtaW5lIEJpdGNvaW4uIEFzIG1pbmluZyBjYW4gcHJvdmlkZSBhXHJcbnNvbGlkIHN0cmVhbSBvZiByZXZlbnVlLCBwZW9wbGUgYXJlIHZlcnkgd2lsbGluZyB0byBydW4gcG93ZXItaHVuZ3J5IG1hY2hpbmVzIHRvIGdldCBhIHBpZWNlIG9mIGl0LiBPdmVyIHRoZSB5ZWFyc1xyXG50aGlzIGhhcyBjYXVzZWQgdGhlIHRvdGFsIGVuZXJneSBjb25zdW1wdGlvbiBvZiB0aGUgQml0Y29pbiBuZXR3b3JrIHRvIGdyb3cgdG8gZXBpYyBwcm9wb3J0aW9ucywgYXMgdGhlIHByaWNlIG9mXHJcbnRoZSBjdXJyZW5jeSByZWFjaGVkIG5ldyBoaWdocy5cclxuPHN1cD4yPC9zdXA+XHJcbjwvcD5cclxuXHJcbjxwPkFuZCwgc28gdGhlIGlzc3VlIEkmIzM5O20gYWRkcmVzc2luZyBpcyBhIHNpZGUtZWZmZWN0IG9mIHRoZSBkZWVwZW5pbmcgaW5jZW50aXZpemF0aW9uIGZvciBtaW5lcnMgdG8gaW52ZXN0IG1vcmVcclxuZXF1aXBtZW50LCBhbmQgaW4gdHVybiwgbW9yZSBlbGVjdHJpY2l0eS4gVGhlIGFydGljbGUgZ29lcyBvbiB0byByZXBvcnQgQml0Y29pbiYjMzk7cyBzdXJwYXNzaW5nIDUwIFRlcmFXYXR0LUhvdXJzLXBlci15ZWFyXHJcbnVzYWdlIGhhcyBzdXJwYXNzZWQgdGhhdCBvZiBQb3J0dWdhbCBhbmQgU2luZ2Fwb3JlLCB3aGljaCBhcmUgNDkuNSBUV2ggcGVyIHllYXIsIGFuZCA0OS44IFRXaCBwZXIgeWVhciwgcmVzcGVjdGl2ZWx5LlxyXG5JbiBvdGhlciB3b3JkcywgdGhlIHVzYWdlIGJ5IHRoZSBCaXRjb2luIG1pbmVyJiMzOTtzIGNvc3QgKGluIGVsZWN0cmljaXR5KSBjb21wYXJlZCB3aXRoIHRoZSBtaW5lciYjMzk7cyBnYWluIChpblxyXG5CaXRjb2lucyBhY2NydWVkIGJ5IGluY2VudGl2aXplZCBtaW5pbmcpIGRyaXZlcyB1cCBhbmQgaW5jZW50aXZlcyBhIGRlZXBlciBDYXJib24gRm9vdHByaW50LjwvcD5cclxuXHJcblxyXG48cCBjbGFzcz1cInF1b3RlXCI+RnVlbGVkIGJ5IGEgbWV0ZW9yaWMgcmlzZSBpbiB0aGUgQml0Y29pbiBwcmljZSBvdmVyIHRoZSBwYXN0IGZldyBtb250aHMsIHRoZSBwb3dlciB1c2FnZSBvZiB0aGUgQml0Y29pbiBuZXR3b3JrIGhhc1xyXG5iZWVuIGluY3JlYXNpbmcgYXQgYSBmZXZlcmlzaCBwYWNlLiBKdXN0IGEgbGl0dGxlIG92ZXIgdGhyZWUgbW9udGhzIGFnbywgYXQgdGhlIHN0YXJ0IG9mIE5vdmVtYmVyIDIwMTcsIHRoZSBCaXRjb2luXHJcbkVuZXJneSBDb25zdW1wdGlvbiBJbmRleCB3YXMgZXN0aW1hdGluZyB0aGUgdG90YWwgZWxlY3RyaWNpdHkgY29uc3VtcHRpb24gb2YgdGhlIEJpdGNvaW4gbmV0d29yayB0byBiZSBoYWxmIG9mIHRoZVxyXG5jdXJyZW50IGFtb3VudC4gT24gdGhlIGZpcnN0IGRheSBvZiBOb3ZlbWJlciwgdGhlIGVzdGltYXRlZCBjb25zdW1wdGlvbiB3YXMgZXF1YWwgdG8gMjQuMyBUV2ggcGVyIHllYXIuXHJcbjxzdXA+MTwvc3VwPlxyXG48L3A+XHJcblxyXG48cD5cclxuQ2FyYm9uIEZvb3RwcmludCwgbWVhc3VyZWQgaW4gdGhpcyB3YXksIGVxdWF0ZXMgYXMgYSBkb3VibGUtZWRnZWQgc3dvcmQ6IFRoZSBtaW5lciYjMzk7cyBlbGVjdHJpY2l0eSBjb3N0cyBhY2NvdW50IGZvciBhcHByb3hpbWF0ZWx5XHJcbjY1JSBvZiB0aGUgcHJvZml0IChCaXRjb2luIHVuaXRzJiMzOTsgdmFsdWUsIG1lYXN1cmVkIHdoZW4gbWluZWQpLiBTbyB0aGVcclxuPGk+ZWNvbm9taWMgPC9pPnVzYWdlIG1lYW5zIHRoZSBjaGVhcGVzdCBhdmFpbGFibGUgZnVlbCBpcyBwYXJ0IG9mIHRoZSBidXNpbmVzcyBtb2RlbC0tYW5kIGl0IHdvdWxkIGxlYWQgdG8gdGhlIGNvc3Rcclxub2YgdGhlIGNoZWFwZXN0IHNvdXJjZSBvZiBlbmVyZ3k6IERpcnR5IENvYWwuIEF0IHRoZSBlbmQgb2YgdGhlIGRheSwgaWYgdGhlXHJcbjxpPmN1cnJlbmN5JiMzOTtzIDwvaT5yaXNpbmcgdmFsdWUgbWVhbnMgdGhhdCBtb3JlIGNvbXB1dGF0aW9uYWxseS1pbnRlbnNpdmUgbWluaW5nIGlzIG1vcmUgYW5kIG1vcmUgcHJvZml0YWJsZSwgdGhlblxyXG5wZXJoYXBzIHRoZSBvdGhlciBlZGdlIGxvb2tzIHByZWZlcnJlZCFcclxuPC9wPlxyXG5cclxuPHA+MS5cclxuPGEgaHJlZj1cIlxyXG5odHRwczovL2RpZ2ljb25vbWlzdC5uZXQvYml0Y29pbi1lbGVjdHJpY2l0eS1jb25zdW1wdGlvbi1zdXJwYXNzZXMtc2luZ2Fwb3JlLXBvcnR1Z2FsXHJcblwiIHRhcmdldD1cIl9ibGFua1wiPiBodHRwczovL2RpZ2ljb25vbWlzdC5uZXQvYml0Y29pbi1lbGVjdHJpY2l0eS1jb25zdW1wdGlvbi1zdXJwYXNzZXMtc2luZ2Fwb3JlLXBvcnR1Z2FsIDwvYT5cclxuPC9wPlxyXG5cclxuPHA+Mi5cclxuPGEgaHJlZj1cIlxyXG5odHRwczovL2RpZ2ljb25vbWlzdC5uZXQvYml0Y29pbi1lbmVyZ3ktY29uc3VtcHRpb25cclxuXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IGh0dHBzOi8vZGlnaWNvbm9taXN0Lm5ldC9iaXRjb2luLWVuZXJneS1jb25zdW1wdGlvbiA8L2E+XHJcbjwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGhyIC8+PGEgaHJlZj1cIiNtYXJ0b3BcIj5cclxuPGJ1dHRvbiBpZD1cImVuZFwiPlRPUDwvYnV0dG9uPlxyXG48L2E+XHJcbmA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ibG9nLW1hci5qcyIsIi8qIFxyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnOyAgXHJcbmltcG9ydCBwb3BwZXIgZnJvbSAnLi9wb3BwZXInO1xyXG5pbXBvcnQgZmVicnVhcnkgZnJvbSBcIi4uL2RhdGEvZmVicnVhcnlcIjsgXHJcbiovXHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG5cdHR5cGU6XCJsaW5lXCIsXHJcblx0Ly9kYXRhOmZvcm1hdGVkRGF0YSxcclxuXHRkYXRhOmEyYyhyYXdEYXRhKSxcclxuXHRvcHRpb25zOntcclxucmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICB0ZXh0OlwiQXZlcmFnZSBQb2xsbHV0aW9uIGluIFRocmVlIENpdGllc1wiLFxyXG5cdFx0dGl0bGU6e1xyXG5cdGRpc3BsYXk6dHJ1ZSxcclxuICAgICAgICAgICAgdGV4dDpcIkF2ZXJhZ2UgVGVtcGVyYXR1cmU6IEF1c3RpbiwgU2FuIEZyYW5jaXNjbywgTmV3IFlvcmtcIlxyXG4gICAgICAgIH0sXHJcblx0XHRob3Zlcjp7XHJcblx0bW9kZTonbGFiZWwnXHJcblx0XHR9LFxyXG5cdFx0dG9vbHRpcHM6e1xyXG5cdG1vZGU6J2xhYmVsJyAvL3NpbmdsZVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblxyXG52YXIgYmxvZ3MgPSBbXHJcbiAge3Bvc3RzOiAnRmVicnVhcnknfSxcclxuICB7cG9zdHM6ICdNYXJjaCd9XHJcblxyXG5dO1xyXG4kLmVhY2goYmxvZ3MsIGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICQoJy5ibG9ncycpLmFwcGVuZCgnPGgyPicrdmFsdWUucG9zdHMrJzwvaDI+Jyk7XHJcbn0pO1xyXG5jb25zb2xlLmxvZyhibG9ncy5wb3N0cyk7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ2RvbS1sb2FkZXInKTsgXHJcbnZhciBtZXRhQmxvZyA9IHtcclxuICAgIFwiZGFpbHl0aXRsZVwiOlwiVGhlIFNoYXJpbmcgRWNvbm9teSBIYW5kLWluLUhhbmQgd2l0aCB0aGUgTWFya2V0IEVjb25vbXksIFBhcnQgSUk6IEludGVybmV0IG9mIFRoaW5nc1wiLFxyXG4gICAgXCJjaGFwdGVybnVtYmVyXCI6XCJNYXJjaCAxMiwgMjAxOFwiLFxyXG4gICAgXCJ3ZWVrZW5kXCI6ZmFsc2UsXHJcbiAgICBcImRpdnNcIjogWycxOC0wMy0xMCcsXHJcbiAgICAnMTgtMDMtMTAnLFxyXG4gICAgJzE4LTAzLTExJyxcclxuICAgICcxOC0wMy0xMicsXHJcbiAgICAnMTgtMDMtMTMnLFxyXG4gICAgJzE4LTAzLTE0JyxcclxuICAgICcxOC0wMy0xNScsXHJcbiAgICAnMTgtMDMtMTYnLFxyXG4gICAgJzE4LTAzLTE3JyxcclxuICAgICcxOC0wMy0xOCcsXHJcbiAgICAnMTgtMDMtMTknLCBcclxuICAgICcxOC0wMy0yMCcsXHJcbiAgICAnMTgtMDMtMjEnLFxyXG4gICAgJzE4LTAzLTIyJywgXHJcbiAgICAnMTgtMDMtMjMnLFxyXG4gICAgJzE4LTAzLTI0JyxcclxuICAgICcxOC0wMy0yNScsXHJcbiAgICAnMTgtMDMtMjYnLFxyXG4gICAgJzE4LTAzLTI3JyxcclxuICAgICcxOC0wMy0yOCcsXHJcbiAgICAnMTgtMDMtMjknLFxyXG4gICAgJzE4LTAzLTMwJyAgIFxyXG4gICAgXVxyXG59O1xyXG4gIFxyXG5cclxuLy8gUmVhY3REb20ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdCcpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9kb20tbG9hZGVyLmpzIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMCk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbnZhciBUYWIgPSBmdW5jdGlvbiAoJCkge1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIHZhciBOQU1FID0gJ3RhYic7XG4gIHZhciBWRVJTSU9OID0gJzQuMC4wJztcbiAgdmFyIERBVEFfS0VZID0gJ2JzLnRhYic7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcbiAgdmFyIEV2ZW50ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZLFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZLFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBEUk9QRE9XTl9NRU5VOiAnZHJvcGRvd24tbWVudScsXG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBESVNBQkxFRDogJ2Rpc2FibGVkJyxcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gIH07XG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBEUk9QRE9XTjogJy5kcm9wZG93bicsXG4gICAgTkFWX0xJU1RfR1JPVVA6ICcubmF2LCAubGlzdC1ncm91cCcsXG4gICAgQUNUSVZFOiAnLmFjdGl2ZScsXG4gICAgQUNUSVZFX1VMOiAnPiBsaSA+IC5hY3RpdmUnLFxuICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJyxcbiAgICBEUk9QRE9XTl9UT0dHTEU6ICcuZHJvcGRvd24tdG9nZ2xlJyxcbiAgICBEUk9QRE9XTl9BQ1RJVkVfQ0hJTEQ6ICc+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIFRhYiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhYihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IFRhYi5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0O1xuICAgICAgdmFyIHByZXZpb3VzO1xuICAgICAgdmFyIGxpc3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yLk5BVl9MSVNUX0dST1VQKVswXTtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICAgIHZhciBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyA/IFNlbGVjdG9yLkFDVElWRV9VTCA6IFNlbGVjdG9yLkFDVElWRTtcbiAgICAgICAgcHJldmlvdXMgPSAkLm1ha2VBcnJheSgkKGxpc3RFbGVtZW50KS5maW5kKGl0ZW1TZWxlY3RvcikpO1xuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pO1xuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVywge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGVFdmVudCk7XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fZWxlbWVudCwgbGlzdEVsZW1lbnQpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgdmFyIGhpZGRlbkV2ZW50ID0gJC5FdmVudChFdmVudC5ISURERU4sIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBfdGhpcy5fZWxlbWVudFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgICAgfSk7XG4gICAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZGVuRXZlbnQpO1xuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfTsgLy8gUHJpdmF0ZVxuXG5cbiAgICBfcHJvdG8uX2FjdGl2YXRlID0gZnVuY3Rpb24gX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgYWN0aXZlRWxlbWVudHM7XG5cbiAgICAgIGlmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudHMgPSAkKGNvbnRhaW5lcikuZmluZChTZWxlY3Rvci5BQ1RJVkVfVUwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudHMgPSAkKGNvbnRhaW5lcikuY2hpbGRyZW4oU2VsZWN0b3IuQUNUSVZFKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdO1xuICAgICAgdmFyIGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiYgYWN0aXZlICYmICQoYWN0aXZlKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLl90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjayk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAkKGFjdGl2ZSkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fdHJhbnNpdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVyArIFwiIFwiICsgQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgIHZhciBkcm9wZG93bkNoaWxkID0gJChhY3RpdmUucGFyZW50Tm9kZSkuZmluZChTZWxlY3Rvci5EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQpWzBdO1xuXG4gICAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgICAgJChkcm9wZG93bkNoaWxkKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuXG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgVXRpbC5yZWZsb3coZWxlbWVudCk7XG4gICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKTtcblxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiAkKGVsZW1lbnQucGFyZW50Tm9kZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX01FTlUpKSB7XG4gICAgICAgIHZhciBkcm9wZG93bkVsZW1lbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuRFJPUERPV04pWzBdO1xuXG4gICAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgICAkKGRyb3Bkb3duRWxlbWVudCkuZmluZChTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTsgLy8gU3RhdGljXG5cblxuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZGF0YSA9ICR0aGlzLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVGFiKHRoaXMpO1xuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUYWIsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUYWI7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdzaG93Jyk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFRhYi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVGFiO1xuXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBUYWIuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gVGFiO1xufSgkKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhYi5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy90YWIuanMiXSwic291cmNlUm9vdCI6IiJ9