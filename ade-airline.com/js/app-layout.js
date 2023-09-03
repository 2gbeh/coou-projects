"use strict";

// Shared Components
const Head = `<!-- Head -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 

  <meta name="description" content="${Context.summary}" />
  <meta name="keywords" content="${Context.keywords}" />
  <meta name="robots" content="index,follow" />
  <meta name="owner" content="${Context.owner}" />
  <meta name="designer" content="Tugbeh Emmanuel" />
  <meta name="copyright" content="2017" />
  <meta name="theme-color" content="${Context.theme.bg}" />  

  <link href="./css/layout.css" type="text/css" rel="stylesheet" />
  <link href="./css/template.css" type="text/css" rel="stylesheet" />
  <link href="./css/main.css" type="text/css" rel="stylesheet" />
  <link href="./css/theme.css" type="text/css" rel="stylesheet" />
  <link href="./css/viewport.css" type="text/css" rel="stylesheet" />
  <link href="./fi/uicons-regular-straight.css" type="text/css" rel="stylesheet" />  

  <link href="./img/favicon.png" rel="icon" type="image/png" />  
  <title>${Context.title}</title>  
<!-- /Head -->`;

const Meta = `<!-- Meta -->
  <!-- Open Graph -->
  <meta property="og:site_name" content="${Context.name}" />
  <meta property="og:title" content="${Context.title}" />
  <meta property="og:description" content="${Context.summary}" />
  <meta property="og:url" content="${Context.url}" />
  <meta property="og:image" content="${Context.url}img/social-preview.png" />
  <meta property="og:image:alt" content="Social Preview" />
  <meta property="og:image:width" content="640" />
  <meta property="og:image:height" content="320" />
  <meta property="og:type" content="website" />
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${Context.title}" />
  <meta name="twitter:description" content="${Context.summary}" />
  <meta name="twitter:url" content="${Context.url}" />
  <meta name="twitter:image" content="${Context.url}img/social-preview.png" />
  <meta name="twitter:image:src" content="${Context.url}img/social-preview.png" />
  <meta name="twitter:image:alt" content="Social Preview" />
  <meta name="twitter:image:width" content="640" />
  <meta name="twitter:image:height" content="320" />  
  <!-- Manifest -->
  <link href="${Context.url}index.html" rel="canonical" />
  <link href="./manifest.json" rel="manifest" crossorigin="use-credentials" />  
<!-- /Meta -->`;

const Header = `<!-- Header -->
  <div class="container">
    <table border="0">
      <tr>
        <th>
          <a href="index.html" title="Home">
            <div class="typeface">${Context.name}</div>
          </a>
        </th>
        <td>       
          <ul class="desktop">
            <li>
              <a href="index.html">
                <i class="fi fi-rs-home"></i>
                <u>Home</u>
              </a>
            </li>
            <li>
              <a href="auth.html">
                <i class="fi fi-rs-shield-check"></i>
                <u>Authenticate</u>
              </a>
            </li>
            <li>
              <a href="#dash.html">
                <i class="fi fi-rs-navigation"></i>
                <u>Travel Guide</u>
              </a>
            </li>              
            <li>
              <a href="javascript:void(0)">
                <i class="fi fi-rs-plane"></i>
                <u>Book Flight</u>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="fi fi-rs-marker"></i>
                <u>Routes</u>
              </a>
            </li>              
            <li>
              <a href="javascript:void(0)">
                <i class="fi fi-rs-info"></i>
                <u>Contact Us</u>
              </a>
            </li>
          </ul>
          <ul class="mobile">
            <li>
              <a onclick="toggleDrawer(this)" class="navicon">
                &equiv;
              </a>
            </li>
          </ul>           
        </td>
      </tr>
    </table>
  </div>
<!-- /Header -->`;

const Nav = `<!-- Nav -->
  <ul>
    <li>
      <a href="index.html">
        <i class="fi fi-rs-home"></i>
        <u>Home</u>
      </a>
    </li>
    <li>
      <a href="auth.html">
        <i class="fi fi-rs-shield-check"></i>
        <u>Authenticate</u>
      </a>
    </li>
    <li>
      <a href="#dash.html">
        <i class="fi fi-rs-navigation"></i>
        <u>Travel Guide</u>
      </a>
    </li>      
    <li>
      <a href="javascript:void(0)">
        <i class="fi fi-rs-plane"></i>
        <u>Book Flight</u>
      </a>
    </li>
    <li>
      <a href="javascript:void(0)">
        <i class="fi fi-rs-marker"></i>
        <u>Routes</u>
      </a>
    </li>
    <li>
      <a href="javascript:void(0)">
        <i class="fi fi-rs-info"></i>
        <u>Contact Us</u>
      </a>
    </li>     
  </ul>
<!-- /Nav -->`;

const Aside = `<!-- Aside -->
  &nbsp;
<!-- /Aside -->`;

const Footer = `<!-- Footer -->
  <div class="container wrapper">
    <address>
      Copyright &copy; 2017
      <a href="https://www.facebook.com/hwplabs" target="_blank" rel="author" title="Visit Webmaster">HWP Labs.</a> 
      <cite>CRBN 658815</cite>
    </address> 
  </div>
<!-- /Footer -->`;

// ====================================================================================================================
(function() {
  if (render('head', Head)) {
    if (node('body').dataset.title) {
      Doc.title = `${Context.name} - ${node('body').dataset.title}`;
    } else {        
      after('head', Meta);
      //log(file());
    }
  }
  render('header', Header);
  render('nav', Nav);
  render('aside', Aside);
  render('footer', Footer);
})();
