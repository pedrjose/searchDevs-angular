# 📦 Guia de Configuração e Execução — Projeto Search Devs 

## ✅ Pré-requisitos

Antes de iniciar, garanta que você tenha instalado:

1. **Node.js** (versão recomendada: LTS 20.19.4)
   - Baixe e instale: [https://nodejs.org/](https://nodejs.org/)
   - Verifique a instalação:
     ```bash
     node -v
     npm -v
     ```

2. **Angular CLI** (Interface de Linha de Comando do Angular)  
   - Instale globalmente:
     ```bash
     npm install -g @angular/cli
     ```
   - Verifique:
     ```bash
     ng version
     ```

3. **Git** (opcional, mas recomendado para clonar o repositório)  
   - Baixe e instale: [https://git-scm.com/](https://git-scm.com/)
   - Verifique:
     ```bash
     git --version
     ```

---

## 🚀 Como rodar o projeto

1. **Clonar o repositório**
   
   ```bash
   git clone https://github.com/pedrjose/searchDevs-angular
   
2. **Instalar dependências**
Com o projeto já aberto, instale as depedências necessárias via npm:

   ```bash
   npm i

3. **Rodar o projeto**
Utilize o comando abaixo para rodar o projeto. Ele abrirá a porta disponível no seu localhost e rodará o projeto lá

   ```bash
   npm run start

4. **Build**
Utilize o comando abaixo para gerar a pasta dist, feito isso, basta fazer o upload dela na sua plataforma de deploy favorita

   ```bash
   ng build

## 🔨 Ferramentas
Foram utilizadas CSS puro por ser simples e universal, não exige aprendizado extra nem dependências externas, o que reduz a complexidade e o tamanho do bundle final, melhorando a performance de carregamento; oferece controle total sobre os estilos, facilitando a depuração e garantindo compatibilidade com todos os navegadores modernos; integra-se perfeitamente à encapsulação nativa de componentes do Angular (ViewEncapsulation), evitando vazamento de estilos entre componentes; não depende de terceiros, o que facilita a manutenção a longo prazo; e, por ser processado diretamente pelo navegador, pode proporcionar melhor desempenho de renderização em comparação com frameworks que geram classes adicionais ou estilos inline.

Além disso, foram utilizadas as ferramentas padrões do Angular, como o TypeScript e HTML.
