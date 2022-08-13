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
const project = $("#project");
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
const weburl = $(".weburl");
const webrepo = $(".webrepo");
const weburllink = $(".weburllink");
const webrepolink = $(".webrepolink");
const webauthor = $(".webauthor");
const essential = $(".essential");
const framework = $(".framework");
const server = $(".server");
const database = $(".database");
const host = $(".host");
const webcopyright = $(".webcopyright");

// Github
const github = $("#github");
const githubdesktop = $("#githubdesktop");

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
    
    project.attr("href", data.href.Project)
    
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
    
    weburl.html(data.Url);
    weburllink.attr("href", data.Url);
    
    webrepo.html(data.Repository);
    webrepolink.attr("href", data.Repository);
    
    webauthor.html(data.Author);
    
    essential.html(data.Component.Essential);
    framework.html(data.Component.Framework);
    server.html(data.Component.Server);
    database.html(data.Component.Database);
    host.html(data.Component.Hosting);
    
    webcopyright.html(data.Copyright);
    
  });
  
  // GitHub Data
  $.getJSON("../../data/github.json", (data) => {
    
    for (let x in data) {
      
      github.append(
      `
      <a href="${data[x]}" class="item">
            <button class="ui icon grey button fluid">
                <i class="github icon"></i>
                   ${x}
            </button>
       </a>
       `
            );
            
      githubdesktop.append(`
      
            <a href="${data[x]}" class="item">
              <i class="github icon"></i>
              ${x}
            </a>
      
      `);
      
    }
    
  });
  
});
