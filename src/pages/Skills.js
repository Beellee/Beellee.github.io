import React from 'react'
import '../styles/skills.css'
import Skill from "../components/Skill";

import html from "../images/html.png"
import css from "../images/css.png"
import react from "../images/react.png"

import js from "../images/js.png"
import py from "../images/python.png"
import git from "../images/uniPage.png"

import r from "../images/r.png"
import sql from "../images/sql.png"
import vs from "../images/vs.png"
import rdfsp from "../images/rdf-sparql.png"
import spoon from "../images/spoon.webp"

function Skills() {
  return (
    <div id="pageContainer" >
       
      <div className='grid'>
        <h1 className='shortTitle'>Skills</h1>
        <div className="basic">
          <Skill
            src= {js}
            text= 'Java Script'
          />
          <Skill
            src= {py}
            text= 'Python'
          />
          <Skill
            src= {git}
            text= 'Git'
          />
        </div>
        <div className="frontend">
          <Skill
            src= {html}
            text= 'HTML'
          />
          <Skill
            src= {css}
            text= 'CSS'
          />
          <Skill
            src= {react}
            text= 'React'
          />
        </div>
        <div className="dataScience">
          <Skill
            src= {r}
            text= 'R Software'
          />
          <Skill
            src= {sql}
            text= 'SQL'
          />
          <Skill
            src= {vs}
            text= 'Visual Studio con SSAS'
          />
          <Skill
            src= {rdfsp}
            text= 'RDF & Spaqrl '
          />
          <Skill
            src= {spoon}
            text= 'Spoon Pentaho Data integration'
          />
        </div>
      </div>
    </div>
  )
}

export default Skills