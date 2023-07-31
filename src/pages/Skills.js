import React from 'react'
import '../styles/skills.css'
import Skill from "../components/Skill";

import html from "../images/html.png"
import css from "../images/css.png"
import react from "../images/react.png"

import js from "../images/js.png"
import py from "../images/python.png"
import git from "../images/git.png"

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
          <div className='skContainer' >
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
        </div>
        <div className="frontend">
          <h3>Frontend</h3>
          <div className='skContainer'>
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
        </div>
        <div className="dataScience">
          <h3>Data Science</h3>
          <div className='skContainer'>
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
              text= 'Visual Studio with SSAS'
            />
            <Skill
              src= {rdfsp}
              text= 'RDF & SPARQL '
            />
            <Skill
              src= {spoon}
              text= 'Spoon Pentaho Data Integration'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills