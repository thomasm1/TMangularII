var secretButton = document.querySelector('#secret-button');

var secretParagraph = document.querySelector('#secret-paragraph');


var secretButtonMP = document.querySelector('#secret-buttonMP');

var secretParagraphMP = document.querySelector('#secret-paragraphMP');


/////////////////////////////////

var showSecret = false;

var showSecretMP = false;

///////////////////////////////

secretButton.addEventListener('click', toggleSecretState);

updateSecretParagraph();

secretButtonMP.addEventListener('click', toggleSecretStateMP);

updateSecretParagraphMP();


///////////////////////////////


function toggleSecretState() {

    showSecret = !showSecret;

    updateSecretParagraph();

    updateSecretButton()

}

function toggleSecretStateMP() {

    showSecretMP = !showSecretMP;

    updateSecretParagraphMP();

    updateSecretButtonMP()

}


///////////////////////////////


function updateSecretButton() {

    if (showSecret) {

        secretButton.textContent = 'Thomas M. Maestas';

    } else {

        secretButton.textContent = 'About Thomas';

    }

}

function updateSecretButtonMP() {

    if (showSecretMP) {

        secretButtonMP.textContent = 'TMM Thesis';

    } else {

        secretButtonMP.textContent = 'Doctoral Thesis';

    }

}

///////////////////////////////



function updateSecretParagraph() {

    if (showSecret) {

        secretParagraph.style.display = 'block';

        secretParagraph.style.fontFamily = 'Roboto'; 

        secretParagraph.style.backgroundColor = 'steelblue';

        secretParagraph.style.color = 'aliceblue';

        secretParagraph.style.textAlign = 'left';

        secretParagraph.innerHTML = `<div class="mb-4">  Hello, I'm Thomas, Thank you for your visit.<br /><br />My consulting services focus on latest technology with a Master's level data analysis methodology.   My data analysis experience has focused on education evaluation in K-12 and higher education. Now, I handle nearly all domains of data analysis. I focus on web-app design and development, specializing in data visualization with JavaScript and Python programming language.<br /><br /> 
                   
   
   <ul class="list-unstyled list-spaced left">
                                     <li> Thomas Provides Contractual Services and Consulting for Big &amp; Small Data and Web solutions since 2016 </span>

                                            <a href="http://www.thomasmaestas.net/profile/index.html"> <span> T M M</span></a>
                                         
                                                 <li>Masters Sociology and Bachelors French History <a href="http://www.unm.edu" target="_blank"> <span>University of New Mexico, Albuquerque</span></a>
                                  
                                
                                  
                                               <li> Social Media
                                                <span><a href="https://www.quora.com" target="_blank">Quora,</a><a href="https://www.historum.com" target="_blank"> Historium, </a><a href="https://www.instagram.com" target="_blank">Instagram, </a><a href="https://www.facebook.com" target="_blank">Facebook, </a><a href="https://www.meetup.com" target="_blank">Meet-Up, </a> Hiking Group, and Alliance Francaise</span>
                             
                                              
                                              <li>Lived in
<a href="https://www.parisinfo.com/" target="_blank">Paris, France</a> and
<a href="http://www.ny.gov/" target="_blank">New York</a> and <a href="https://www.visittheusa.com/state/texas" target="_blank">Texas.
</a>

                                                    </li>

                            </ul>
</div>

`;

    } else {

        secretParagraph.style.display = 'none';

    }

}

////////

function updateSecretParagraphMP() {

    if (showSecretMP) {

        secretParagraphMP.style.display = 'block';

        secretParagraphMP.style.fontFamily = 'Roboto';  
        secretParagraphMP.style.backgroundColor = 'steelblue'; 
        secretParagraphMP.style.color = 'white'; 
 secretParagraphMP.style.overflowY = 'scroll';
        secretParagraphMP.innerHTML = ` 
<h5 class="dailytech">   
</h5> 

<p class="dailytitle" > </p> 
 
<div class="hidden">
</div> 
`;

    } else {

        secretParagraphMP.style.display = 'none';

    }

}


/* 
Most of the sociologists at Hull House were women who enjoyed applying sociological knowledge to solve social problems such as unfair labor policies, exploitation of children and workers, poverty, juvenile delinquency, and discrimination against women, minorities, and the elderly. These sociologists also used a research technique known as mapping, in which they collected demographic data such as age, gender, and socioeconomic status, geographically distributed this information, and then analyzed the distribution. After identifying problems and devising a social‐action policy based on available data, they would organize community members and lobby political leaders to solve the problem. Addams, who won the Nobel Peace Prize in 1931, played a major part in establishing government safety and health standards and regulations, as well as founding important government programs, including Social Security, Workers' Compensation, and the Children's Bureau.
*/