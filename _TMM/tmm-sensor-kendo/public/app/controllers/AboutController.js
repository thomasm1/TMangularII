(function () {

	angular.module('app')
			.controller('AboutController', [    '$state', '$log', AboutController]);

	function AboutController(  $state, $log) {

			var vm = this;
  
	console.log(' AboutController loaded...');
 
 
/*
	console.log('header');
	var headerauth = "--Ryan Dahl, Creator of JavaScript's Node.JS";
	var headerquote = `  
	 <strong>You Can Never Understand Everything.<br /><br />But You can Push Yourself to Understand the System.</strong>	 
	`;
	document.getElementById("featured").innerHTML = `
	<p class="left" id="headerquote">
	${headerquote}</p>  <p> -- ${headerauth} </p>
	`;
	*/ 
 
	var secretButton = document.querySelector('#secret-button'); // ME
	var secretParagraph = document.querySelector('#secret-paragraph');

 ('#secret-paragraphAUG');///////////////////////////////// 
	var showSecret = false; 
	 
	/////////////////////////////// 
	secretButton.addEventListener('click', toggleSecretState); 
	
	
 
	/////////////////////////////// 
	function toggleSecretState() {
	  showSecret = !showSecret;
	  updateSecretParagraph();
	  updateSecretButton();
	} 
	
 
	/////////////////////////////// 
	function updateSecretButton() {
	  if (showSecret) {
		secretButton.innerHTML = ' '; // GOES BACK TO DEFAULT
		secretButton.style.fontFamily = 'Monoton';
	  } else {
		secretButton.innerHTML = ', M.A.'; // TOGGLE OPEN
		secretButton.style.fontFamily = 'Monoton';
	  }
	}
	 
	
	
	
 
	/////////////////////////////// 
	function updateSecretParagraph() {
	  if (showSecret) { 
			secretParagraph.style.display = 'block';  
			secretParagraph.style.textAlign = 'justify';
			secretParagraph.style.padding = '5px';
			secretParagraph.style.color = 'white'; 
			
	
		secretParagraph.innerHTML = `
		<div   ><h5><strong>Hello, I'm Thomas, Thank you for  visiting my tech blog.</strong></h5>
		<p class="firstparagraph">   Technology shapes much of my life, and in many respects it frames my future plans! <br />
		Technology is integral to my professional, academic, and enterprising endeavors, 
		and I hope to share helpful knowledge from what I've learned along the journey. Besides, 
		I love to chime in about so many topics of the Day... hope you enjoy!

		 </p><p  class="firstparagraph"
		My consulting services focus on latest technology with a Master's level data analysis methodology.   My data analysis experience has focused on education evaluation in K-12 and higher education. Now, I handle nearly all domains of data analysis. I focus on web-app design and development, specializing in data visualization with JavaScript and Python programming language.<br /> 
					 
	 </p>
	 <ul >
		<li  > Thomas Provides Contractual Services and Consulting for Big &amp; Small Data and Web solutions since 2016 </span>

			<a href="http://www.thomasmaestas.net/"> <span> T M M </span></a>
			
					<li>Masters Sociology and Bachelors French History <a href="http://www.unm.edu" target="_blank"> <span>University of New Mexico, Albuquerque</span></a>


</li><br />
					<li> Social Media
				<span><a href="https://www.quora.com" target="_blank">Quora,</a><a href="https://www.historum.com" target="_blank"> Historium, </a><a href="https://www.instagram.com" target="_blank">Instagram, </a><a href="https://www.facebook.com" target="_blank">Facebook, </a><a href="https://www.meetup.com" target="_blank">Meet-Up, </a> Hiking Group, and Alliance Francaise</span>
</li><br />
				<li  class="firstparagraph"> Began Phd program in Social Statistics at <a href="https://www.umontreal.ca/en/" target="_blank">l'Universit&eacute; de Montr&eacute;al</a> in the Fall of 2016
					</li>  
				<li>Lived in
<a href="https://www.parisinfo.com/" target="_blank">Paris, France</a> and
<a href="http://www.ny.gov/" target="_blank">New York</a> and <a href="https://www.visittheusa.com/state/texas" target="_blank">Texas.
</a>   </li>  
</ul>
</div>

<!---->

	<h4 class="center">My Beliefs </h4>
	
	<p class="dailytitle" >by Thomas Maestas, MA</p> 
	 
	 <p class="firstparagraph">Dialectical Materialism<br />I construct my philosophical guidance from a post-Hegelian, Historical-Materialist Philosophy that sees improvement by each iteration of problem-solving. My personal philosophy holds that right actions and true knowledge begin with a final, teleological goal in sight, i.e., the <i>improvement of the Human condition</i>. <br />Post-Hegelian Logic determines a set, then compares the practical <i>thesis</i> of present empirical, perceived conditions against the ideal <i>antithesis</i> toward higher ethical, rational solutions, in order to achieve an improved synthesis, to again be repeated as a new thesis.</p>
	<p class="firstparagraph">Sharing<br />    
	Given that assumptions about population growth and climate change are true (I believe both are true), then global population well-being is threatened earlier than expected. Therefore, my antithesis holds that  smart, effective <i>Sharing of Burden</i>, Sharing of Power, and <i>Sharing of Resources</i> is critical to meeting the imminent challenges of the two said assumptions.  
	</p>
	<p class="firstparagraph">Diversity and Equality<br />
	Workplace culture too often abides by the ethos of "work harder, not smarter." Non-diverse workplaces lack the full set of problem-solving tools that are necessary in a complex, diverse world. 
	</p>
	<p>A better workforce integration along gender, racial, and socio-economic lines is a more heterogeneous workforce: more agile, creative, and efficiently team-oriented workforce--in short, a smarter workforce.
	</p> 
	`;
	
	  } else {
	
			secretParagraph.style.display = 'none';
	
	  }
	
	};
	 
}  
}());