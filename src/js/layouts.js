let templates = [
    ['layouts/header.html', 'header-container'],
    ['layouts/nav.html', 'header-main-menu'],
    ['layouts/contacts.html', 'contacts-section'],
    ['layouts/sponsors.html', 'sponsors-section'],
    ['layouts/partners.html', 'partners-section'],
    ['layouts/footer.html', 'main-footer'],
    ['layouts/registration.html', 'regcompform'],
    ['layouts/verifmodal.html', 'open-modal'],
    ['layouts/contacts-bottom.html', 'contact-bottom-section'],
    ['layouts/header-news.html', 'news-title-text-box'],
    ['layouts/header-activity.html', 'activity-title-text-box'],
    ['layouts/header-company.html', 'company-title-text-box'],
    ['layouts/header-invest.html', 'invest-title-text-box'],
    ['layouts/header-business.html', 'business-title-text-box'],
    ['layouts/header-article.html', 'article-title-text-box'],
    ['layouts/login.html', 'login-wrapper']
];

const templatesLength = templates.length;
let templatesCnt = 0;
for(let t of templates){
    templatesCnt++;
    loadTemplates(t[0], t[1], templatesCnt == templatesLength, templatesCnt, templatesLength);
}
   

function loadTemplates(url, id, isLast, templatesCnt, templatesLength){
  window.lm.start("layouts: " + url);
  console.log(url,templatesCnt, templatesLength);
  $.get(url, function(headerEl) {
      console.log("loaded url" + url);
      let headerContainer = document.getElementById(id);
      if(headerContainer){
          headerContainer.innerHTML = headerEl; 
      }
      if(isLast){
        console.log("temp ready");
          templatesReady();

      }
      window.lm.finish("layouts: " + url);
  });
}

function templatesReady(){
    
    // bindNav();
    // bindRegistrationSumbit();
    // hamburgerLoad();
    // loginFormLoad(); 
}