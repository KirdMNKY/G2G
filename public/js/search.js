// Create dropdowns for location and country
var locations = ["United States of America", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia", "Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "People's Republic of China", "Republic of China", "Colombia", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Danzig", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gaza Strip", "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy Roman Empire", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Republic of Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jonathanland", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mount Athos", "Mozambique", "Namibia", "Nauru", "Nepal", "Newfoundland", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Ottoman Empire", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Prussia", "Qatar", "Romania", "Rome", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the, Grenadines", "Samoa", "San Marino"," Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

//div
var locationDiv = $("<div class='dropdown' id='locationsDrop'><hr><label>Server Regions</label><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenu2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>All</button><div class='dropdown-menu' aria-labelledby='dropdownMenu2'>");

for(var g = 0; g < locations.length; g++){

  //checkboxes
  var locationDrop = $("<button class='dropdown-item' type='button'>");
  locationDrop.text(locations[g]);

  locationDiv.append(locationDrop);

  $("#location").append(locationDiv);
}

// Slider
var slider = $("#myRange");
var output = $("#demo");
output.HTML(slider.value); // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.HTML(this.value);
};