import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import mainAvatar from '../img/jorge-avatar.png'

// const TemplateWrapper = ({ children }) => (
//   <div>
//     <Helmet title="Home | Jorge Michael Interno" />
//     <Navbar />
//     <div>{children}</div>
//   </div>
// )

const TemplateWrapper = ({ children }) => ([
  <Helmet key="helmet" title="Home | JMI" />,
  <nav key="nav" class="navbar is-transparent is-expanded">
    <div class="container">
      <div class="navba-brand">
        <a class="navbar-item" href="/">
          <span class="title has-text-primary">JM <span class="title has-text-invert">I</span> </span>
        </a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <a target="_blank" class="navbar-item" href="https://www.linkedin.com/in/jorge-michael-interno/">
            <span class="icon is-large">  
              <i class="fab fa-2x fa-linkedin has-text-invert"></i>
            </span>
          </a>
          <a target="_blank" class="navbar-item" href="https://github.com/horuhe024">
          <span class="icon is-large">  
              <i class="fab fa-2x fa-github has-text-invert"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>,
  <section key="info" class="hero is-white is-medium is-long">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-4-desktop is-full-mobile">
            <div class="columns is-mobile is-centered">
              <div class="column is-narrow">
                <figure class="image is-128x128">
                  <img class="is-rounded" src={mainAvatar} />
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-8-desktop is-full-mobile has-text-centered">
            <h1 class="title is-size-1-desktop is-size-2-tablet is-size-3-mobile">JORGE MICHAEL INTERNO</h1>
            <h2 class="subtitle has-text-invert">Software Engineer</h2>
          </div>
        </div>
      </div>
    </div>
  </section>,
//   <section key="test1" class="section hero is-primary is-bold is-medium is-long">
//     <div class="hero-body">
//       <div class="container">
//         <h1 class="title">
//           Large title
//         </h1>
//         <h2 class="subtitle">
//           Large subtitle
//         </h2>
//       </div>
//     </div>
//   </section>,
//   <section key="test2" class="section skills has-text-centered">
//   <div class="container is-narrow">
//     <div class="box">
//       <div class="content">
//         <div class="columns is-centered">
//           <div class="column">
//             <h1>Test</h1>
//           </div>
//           <div class="column">
//             <h1>Test</h1>
//           </div>
//           <div class="column">
//             <h1>Test</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
])

export default TemplateWrapper
