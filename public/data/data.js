// This is the Script for the Data //


// Information 
const fullname = $(".fullname");
const name = $(".name");
const nickname = $(".nickname");
const birthday = $(".birthday");
const age = $(".age");
const profession = $(".profession");
const group = $(".group");
const description = $(".description");
const grade = $(".grade");
const school = $(".school");
const address = $(".address");
const skills = $(".skills");
const otherskills = $(".otherskills");

// URL
const facebook = $(".facebook");
const image = $(".image img");
const grouplink = $(".grouplink");
const message = $(".message");
const email = $(".email a");

// Website
const webname = $(".webname");
const webdescription = $(".webdescription");
const release = $(".release");
const edited = $(".edited");

$(document).ready(() => {
  
  // Information Data
  
    $.getJSON("../../data/info.json", (data) => {
    
    fullname.html(data.Name.FullName);
    name.html(data.Name.FirstName);
    nickname.html(data.Name.NickName);
    birthday.html(data.Birth.Birthday);
    age.html(data.Birth.Age);
    profession.html(data.Career.Profession);
    group.html(data.Organization.FacebookGroup.Name);
    description.html(data.Organization.FacebookGroup.Description);
    grade.html(data.Academic.Grade);
    school.html(data.Academic.School);
    address.html(data.Address);
    skills.html(data.Career.Skills);
    otherskills.html(data.Career.OtherSkills);

  })
  
  // URL Data
  $.getJSON("../../data/url.json", (data) => {
    
    facebook.attr("href", data.href.Facebook);
    grouplink.attr("href", data.href.Group);
    email.attr("href","mailto:" + data.href.Email);
    
    image.attr("src", data.src.Image);
    
    message.attr("action", data.action.Message);
    
  });
  
  // Website Data
  $.getJSON("../../data/website.json", (data) => {
    
    webname.html(data.Name);
    webdescription.html(data.Description);
    release.html(data.Date.Release);
    edited.html(data.Date.Edited);
    
  });
  
});
