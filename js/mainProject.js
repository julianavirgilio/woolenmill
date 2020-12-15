
// AUTHOR @ AMY PERCIVAL

//CONTACT FORM VALIDATION
function validateForm() 
	{
//name not blank
	var name=document.forms["contactForm"]["contactName"].value;
	if (name ==null || name=="") //if name is null or blank
 	{
  	alert("Please enter your name");		
  	return false;
 	}	

 //name cannot be a number
 	var name=document.forms["contactForm"]["contactName"].value;
	if (!isNaN(name) && name!=null) //if name conatins a number and is not null or blank
 	{
  	alert("Your name can not be a number");		
  	return false;
 	}

//email not blank
	var email=document.forms["contactForm"]["contactEmail"].value;
	if (email == null || email=="") //if email is null or blank
	{
 	alert("Please enter an email");
  	return false;
  	}

// message not blank
  	var msg=document.forms["contactForm"]["contactMsg"].value;
	if (msg == null || msg=="") //if message is null or blank
	{
 	alert("Please enter a message before you submit!");
  	return false;
  	}

// if all form fields meet stipulations then alert sucess message
  	var all=document.forms["contactForm"]["contactMsg" && "contactEmail" && "contactName"].value;
	if (all != null || all!="") //if message is not null or blank
	{
 	alert("Thanks for getting in touch");
  	return true;
  	}
  }

//LOGIN FORM VALIDATION
function validateFormLogin() 
	{

//email not blank 	
	var email1=document.forms["loginForm"]["contactEmail1"].value;
	if (email1 ==null || email1=="") //if name is null or blank
 	{
  	alert("Please enter your email address");		
  	return false;
 	}	

//password not blank and 8 characters
	var password=document.forms["loginForm"]["password"].value;
	if (password.length <8 || password=="") //if password less than 8 characters or blank
	{
 	alert("Password must be eight characters in length");
  	return false; 
  	}

//if email and password meet stipulations then alert successful login
  	var all=document.forms["loginForm"]["contactEmail1" && "password"].value;
	if (all != null || all!="") //if all input is not null or blank
	{
 	alert("Successful login");
  	return true;
  	}
  }

//NEW CUSTOMER LOGIN FORM VALIDATION
  function validateFormLogin2() 
	{
//name not blank
	var name2=document.forms["newLoginForm"]["contactName2"].value;
	if (name2 ==null || name2=="") //if name is null or blank
 	{
  	alert("Please enter your name");		
  	return false;
 	}
//name cannot be a number
 	var name2=document.forms["newLoginForm"]["contactName2"].value;
	if (!isNaN(name2) && name2!=null) //if name conatins a number and is not null or blank
 	{
  	alert("Your name can not be a number");		
  	return false;
 	}
//email not blank
	var email2=document.forms["newLoginForm"]["contactEmail2"].value;
	if (email2 ==null || email2=="") //if name is null or blank
 	{
  	alert("Please enter your email address");		
  	return false;
 	}	

// created password is correct length
	var password1=document.forms["newLoginForm"]["password1"].value;
	if (password1.length <8 || password1=="") //if password less than 8 characters or blank
	{
 	alert("Password must be eight characters in length");
  	return false; 
  	}

 //verify password is correct length and matches created password
  	var password2=document.forms["newLoginForm"]["password2"].value;
	if (password2.length <8 || password2=="" || password2!=password1) //check if password characters match
	{
 	alert("Passwords do not match");
  	return false; 
  	}

 // if password characters match and everything else validated, alert successful account creation
  	var password2=document.forms["newLoginForm"]["password2"].value;
	if (password2==password1) //check if password characters match
	{
 	alert("Your account has been created");
  	return true; 
  	}
  }

  const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();