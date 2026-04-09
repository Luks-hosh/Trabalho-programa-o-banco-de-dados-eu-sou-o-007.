import { useState } from 'react'
import './App.css'
import logoSql from './assets/sqllogo.svg'
import { BadgePlus } from 'lucide-react';

export default function App() {

  return (
    <>
      <main>
        <section>
          <img src={logoSql} alt="" id='logo' />
         
        </section>
         
        <footer>
            <div id="texto1"><article> 
              <h1>Oque ele é? </h1> 
              <p>O Microsoft SQL Server é um sistema de gerenciamento de banco de dados relacional (RDBMS). Aplicativos e ferramentas se conectam a uma instância ou banco de dados do SQL Server e se comunicam usando Transact-SQL (T-SQL).</p>
              <h1>PAra que serve?</h1>
              <p>O Microsoft SQL Server é um sistema de gerenciamento de banco de dados relacional (SGBDR) desenvolvido pela Microsoft. Em palavras simples, é um programa de computador que ajuda a guardar, organizar e recuperar informações de forma eficiente.</p>
              <h1>PAra que serve?</h1>
              <p>O Microsoft SQL Server é um sistema de gerenciamento de banco de dados relacional (SGBDR) desenvolvido pela Microsoft. Em palavras simples, é um programa de computador que ajuda a guardar, organizar e recuperar informações de forma eficiente.</p>
              <h1>ONDE é USADO?</h1>
              <p>A SQL é amplamente usada em uma variedade de setores e aplicações, devido à sua capacidade de gerenciar e manipular dados estruturados de forma eficiente. Alguns dos principais lugares onde a SQL é comumente utilizada incluem: Desenvolvimento de Aplicativos Web, Aplicações de Business Intelligence (BI) e Sistemas de Gestão de Recursos Humanos (RH) </p>
              <h1>Diferença em relação a outros bancos de dados.</h1>
              <p>O Microsoft SQL Server tem o maior contraste na sintaxe SQL, além de uma ampla variedade de funções não disponíveis em outras plataformas como a  Integração com o ecossistema Microsoft, diferentemente de outros bancos de dados como  PostgreSQL, o MySQL e o SQLite</p>
              <h1>Exenplos:</h1>
              <p> CGI, uma empresa  que oferece  serviços como consultoria de negócios digitais e engenharia de software.</p>
              <p>Relativity, uma empresa que se especializa em e-discovery</p>
              <p> Leidos, uma empresa que se especializa em cibersegurança </p>
            
            
            
            
            </article></div>
            
            <div className="rs">
                <a href="https://azure.microsoft.com/pt-br/products/azure-sql/?ef_id=_k_fef508171d2219c8474461cf1f2bec15_k_&OCID=AIDcmmzmnb0182_SEM__k_fef508171d2219c8474461cf1f2bec15_k_&msclkid=fef508171d2219c8474461cf1f2bec15" target="_blank" rel="noopener noreferrer">
                  <BadgePlus className="icone" />
                </a>
            </div>
          
            
            
          
        </footer>
      </main>
    </>
  )
}
