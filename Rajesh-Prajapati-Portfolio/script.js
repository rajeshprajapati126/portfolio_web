<<<<<<< HEAD
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Coder", "Software Developer", "Data Engineer", "Motivator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
=======
'use strict';

// All interactions are browser-local. No trackers, APIs, or backend required.
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const safeStorage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* Storage is optional. */ } }
};

const themeToggle = $('.theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const next = theme === 'dark' ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  themeToggle.title = 'Switch to ' + next + ' theme';
  $('meta[name="theme-color"]').content = theme === 'dark' ? '#14241e' : '#f7f8f2';
}
setTheme(safeStorage.get('rp-portfolio-theme') === 'dark' ? 'dark' : 'light');
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  safeStorage.set('rp-portfolio-theme', theme);
});

const menuToggle = $('.menu-toggle');
const mobileNav = $('#mobile-nav');
function closeMenu(restoreFocus = false) {
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = isOpen;
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
});
$$('a', mobileNav).forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 721px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

// Reusable accessible tabs: one tab stop per group, arrow keys, Home, and End.
function connectTabs(container, onSelect) {
  const tabs = $$('[role="tab"]', container);
  function select(tab, focus) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    onSelect(tab);
    if (focus) tab.focus();
  }
  tabs.forEach(tab => {
    tab.addEventListener('click', () => select(tab, false));
    tab.addEventListener('keydown', event => {
      const vertical = container.getAttribute('aria-orientation') === 'vertical';
      const nextKey = vertical ? 'ArrowDown' : 'ArrowRight';
      const previousKey = vertical ? 'ArrowUp' : 'ArrowLeft';
      let index = tabs.indexOf(tab);
      if (event.key === nextKey) index = (index + 1) % tabs.length;
      else if (event.key === previousKey) index = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') index = 0;
      else if (event.key === 'End') index = tabs.length - 1;
      else return;
      event.preventDefault();
      select(tabs[index], true);
    });
  });
}
const stageDescriptions = {
  ingest: 'SFTP + Azure Data Factory. Bring source data into a reliable lakehouse.',
  transform: 'PySpark + Delta Lake. Clean, validated, ready for what’s next.',
  serve: 'Feature datasets + ClickHouse. Data that powers forecasting and analytics.'
};
connectTabs($('.pipeline-tabs'), tab => {
  const stage = tab.dataset.stage;
  $('.hero-art').dataset.stage = stage;
  $('#stage-detail').textContent = stageDescriptions[stage];
  $('#stage-detail').setAttribute('aria-labelledby', tab.id);
});
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle = $('.motion-toggle');
let motionPaused = reducedMotion.matches;
function updateMotion() {
  $('.hero-art').classList.toggle('motion-paused', motionPaused);
  motionToggle.setAttribute('aria-pressed', String(motionPaused));
  motionToggle.setAttribute('aria-label', motionPaused ? 'Play pipeline animation' : 'Pause pipeline animation');
  motionToggle.title = motionPaused ? 'Play animation' : 'Pause animation';
  motionToggle.disabled = reducedMotion.matches;
  if (reducedMotion.matches) {
    motionToggle.setAttribute('aria-label', 'Animations disabled by your device preference');
    motionToggle.title = 'Animations disabled by your device preference';
  }
}
updateMotion();
motionToggle.addEventListener('click', () => { motionPaused = !motionPaused; updateMotion(); });
reducedMotion.addEventListener('change', event => { motionPaused = event.matches; updateMotion(); });

const expertise = {
  engineering: {
    title: 'Pipelines with purpose.',
    description: 'Reusable, metadata-driven ETL/ELT pipelines that connect source data to analytics and AI. From incremental ingestion to feature preparation, every step has a job to do.',
    skills: ['Python', 'SQL', 'PySpark', 'Apache Spark', 'Structured Streaming', 'Apache Kafka', 'CDC', 'SCD Type 1 / 2', 'YAML'],
    principle: 'Configure once. Reuse across datasets.',
    icon: '{ }'
  },
  lakehouse: {
    title: 'A foundation that scales.',
    description: 'Azure lakehouses organized into Bronze, Silver, and Gold layers. Incremental ingestion, dimensional models, and governed data access create a clear path from raw sources to business analytics.',
    skills: ['Azure Databricks', 'Azure Data Factory', 'ADLS Gen2', 'Delta Lake', 'Auto Loader', 'Unity Catalog', 'Delta Live Tables', 'Databricks Workflows', 'Star & Snowflake Schemas'],
    principle: 'Make every layer serve a clear purpose.',
    icon: '▱'
  },
  reliability: {
    title: 'Reliable by design. Faster by tuning.',
    description: 'Schema validation, business rule checks, and reconciliation keep pipelines trustworthy. Partition tuning, caching, broadcast joins, and workflow automation help data arrive faster with less manual effort.',
    skills: ['Apache Airflow', 'Docker', 'Data Quality', 'Reconciliation', 'Partitioning', 'Broadcast Joins', 'Caching', 'Z-Ordering', 'Git & CI/CD', 'ClickHouse'],
    principle: 'Validate the data. Measure the bottleneck. Improve the system.',
    icon: '✓'
  }
};
function renderTags(container, entries, tag = 'span') {
  container.replaceChildren(...entries.map(entry => {
    const element = document.createElement(tag);
    element.textContent = entry;
    return element;
  }));
}
connectTabs($('.expertise-tabs'), tab => {
  const item = expertise[tab.dataset.expertise];
  $('#expertise-panel-title').textContent = item.title;
  $('#expertise-panel-description').textContent = item.description;
  $('#expertise-principle').textContent = item.principle;
  $('.panel-icon').textContent = item.icon;
  renderTags($('#expertise-skills'), item.skills);
  $('#expertise-panel').setAttribute('aria-labelledby', tab.id);
});

const projects = {
  forecast: {
    category: 'ASPER (A FRACTAL COMPANY) / AI & DATA PLATFORMS',
    title: 'Better data. Smarter forecasts.',
    summary: 'Production ETL and feature-preparation pipelines for a consumer packaged goods AI demand-forecasting platform, built around reusable configurations and automated validation.',
    flow: ['SFTP', 'ADLS Gen2', 'PySpark + quality checks', 'AI feature datasets'],
    work: [
      'Designed and maintained ingestion pipelines moving more than 5 million records per month from SFTP into ADLS Gen2.',
      'Built a metadata-driven Python and PySpark framework using YAML to configure ingestion, cleansing, and transformations across datasets.',
      'Orchestrated containerized workflows using Airflow DAGs and Docker with runtime parameters.',
      'Automated schema validation, business rules, and reconciliation, generating reports for stakeholder review.',
      'Built a UI approval workflow that captures feedback and automatically triggers Airflow DAGs after approval.',
      'Tuned Spark partitioning, caching, and broadcast joins; built ClickHouse materialized views and post-model transformations.'
    ],
    impact: [['5M+', 'records processed per month'], ['Up to 40%', 'reduction in Spark execution time']],
    tags: ['Python', 'PySpark', 'Apache Spark', 'YAML', 'Airflow', 'Docker', 'ADLS Gen2', 'ClickHouse']
  },
  lakehouse: {
    category: 'CELEBAL TECHNOLOGIES / AZURE LAKEHOUSE',
    title: 'A foundation for better decisions.',
    summary: 'Azure lakehouse pipelines integrating enterprise data into Bronze, Silver, and Gold layers, with incremental processing and dimensional models serving Power BI analytics.',
    flow: ['Oracle / SQL Server / APIs', 'ADF + ADLS Gen2', 'Databricks + Delta Lake', 'Power BI'],
    work: [
      'Developed pipelines integrating more than 1,000 tables from over 5 source systems, including Oracle, SQL Server, and REST APIs.',
      'Built batch and incremental ingestion with Azure Data Factory, Databricks Auto Loader, and watermark-based processing.',
      'Applied CDC and SCD Type 1 and Type 2 patterns to handle changing business data.',
      'Implemented Medallion architecture with Bronze, Silver, and Gold layers.',
      'Designed star and snowflake schemas to support Power BI analytics.',
      'Optimized Spark pipelines and automated workflows as part of the broader Azure data engineering work.'
    ],
    impact: [['1,000+', 'tables integrated'], ['5+', 'source systems connected']],
    tags: ['Azure Data Factory', 'ADLS Gen2', 'Azure Databricks', 'Delta Lake', 'Auto Loader', 'CDC', 'SCD 1 / 2', 'Power BI']
  },
  migration: {
    category: 'CELEBAL TECHNOLOGIES / DATA MODERNIZATION',
    title: 'Modern compute. Fresh possibilities.',
    summary: 'Migrated legacy SAS data warehouse jobs to Databricks and Spark SQL, helping accelerate analytics delivery through a modern distributed processing platform.',
    flow: ['Legacy SAS jobs', 'Spark SQL migration', 'Databricks', 'Analytics'],
    work: [
      'Migrated legacy SAS data warehouse jobs to Azure Databricks and Spark SQL.',
      'Translated warehouse processing into Spark-based transformations supporting analytics delivery.',
      'Applied Spark performance tuning and workflow automation across the wider data platform work.'
    ],
    impact: [['2×', 'faster analytics delivery']],
    tags: ['Legacy SAS', 'Azure Databricks', 'Spark SQL', 'Apache Spark', 'Data Migration']
  }
};
const projectDialog = $('#project-dialog');
let projectTrigger;
$$('[data-project]').forEach(button => button.addEventListener('click', () => {
  const item = projects[button.dataset.project];
  projectTrigger = button;
  $('#dialog-category').textContent = item.category;
  $('#dialog-title').textContent = item.title;
  $('#dialog-summary').textContent = item.summary;
  renderTags($('#dialog-work'), item.work, 'li');
  renderTags($('#dialog-tags'), item.tags);
  const flowNodes = [];
  item.flow.forEach((label, index) => {
    if (index) {
      const arrow = document.createElement('i');
      arrow.textContent = '→';
      arrow.setAttribute('aria-hidden', 'true');
      flowNodes.push(arrow);
    }
    const node = document.createElement('span');
    node.textContent = label;
    flowNodes.push(node);
  });
  $('#dialog-flow').replaceChildren(...flowNodes);
  $('#dialog-impact').replaceChildren(...item.impact.map(([stat, label]) => {
    const row = document.createElement('div');
    const value = document.createElement('strong');
    value.textContent = stat;
    const description = document.createElement('small');
    description.textContent = label;
    row.append(value, description);
    return row;
  }));
  projectDialog.showModal();
  projectDialog.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}));
$('.dialog-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => {
  if (event.target === projectDialog) projectDialog.close();
});
projectDialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  if (projectTrigger) projectTrigger.focus({ preventScroll: true });
});

let toastTimeout;
function toast(message) {
  const target = $('.toast');
  clearTimeout(toastTimeout);
  target.textContent = message;
  target.hidden = false;
  toastTimeout = setTimeout(() => { target.hidden = true; }, 4500);
}
const email = 'rajeshprajapati12601@gmail.com';
$('[data-copy-email]').addEventListener('click', async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
    } else {
      const input = document.createElement('textarea');
      input.value = email;
      input.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.append(input);
      input.focus();
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      $('[data-copy-email]').focus({ preventScroll: true });
      if (!copied) throw new Error('Clipboard unavailable');
    }
    toast('Email copied — let’s build something great.');
  } catch {
    toast('Email: ' + email);
  }
});
$('#year').textContent = String(new Date().getFullYear());

// Progressive enhancement: content stays visible when JavaScript is unavailable.
if ('IntersectionObserver' in window) {
  if (!reducedMotion.matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-pending');
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    $$('.reveal').forEach(element => {
      element.classList.add('is-pending');
      revealObserver.observe(element);
    });
  }
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      $$('.desktop-nav a').forEach(link => {
        const active = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  $$('main section[id]').forEach(section => sectionObserver.observe(section));
}
>>>>>>> be71826 (initial commit)
