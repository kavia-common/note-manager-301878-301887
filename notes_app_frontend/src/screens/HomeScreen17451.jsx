import React, { useEffect } from 'react';
import '../assets-home-screen-174-51.css'; // keeps file present for CRA; actual CSS is injected at runtime

// Helper to inject the CSS once
function injectHomeScreen17451CssOnce() {
  if (document.querySelector('link[data-home17451-css="true"]')) return;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = '/assets/home-screen-174-51.css';
  l.dataset.home17451Css = 'true';
  document.head.appendChild(l);
}

// Helper to inject the /assets JS once per page lifetime
function injectHomeScreen17451ScriptOnce() {
  if (document.querySelector('script[data-home17451="true"]')) return;
  const s = document.createElement('script');
  s.src = '/assets/home-screen-174-51.js';
  s.async = true;
  s.defer = true;
  s.dataset.home17451 = 'true';
  document.body.appendChild(s);
}

// PUBLIC_INTERFACE
function HomeScreen17451() {
  /**
   * This component renders the Home Screen derived from assets/home-screen-174-51.html.
   * - Uses exact image paths under /assets/figmaimages/ as required.
   * - Styles are applied by importing the generated CSS.
   * - On mount, it injects the JS from /assets to initialize interactions without importing outside src.
   */
  useEffect(() => {
    injectHomeScreen17451CssOnce();
    injectHomeScreen17451ScriptOnce();
  }, []);

  return (
    <main className="screen screen-174-51" role="main" aria-label="Home Screen">
      <header className="topbar" role="banner">
        <h1 className="hero-title">Notes</h1>
        <div className="topbar-actions" role="group" aria-label="Top bar actions">
          <button className="icon-btn" type="button" aria-label="Search">
            <span className="icon" aria-hidden="true">
              <img src="/assets/figmaimages/figma_image_174_70.svg" alt="" className="icon-base" width="24" height="24" loading="lazy" />
              <img src="/assets/figmaimages/figma_image_174_70_8_12.svg" alt="" className="icon-glyph" width="24" height="24" loading="lazy" />
            </span>
          </button>
          <button className="icon-btn" type="button" aria-label="Info">
            <span className="icon" aria-hidden="true">
              <img src="/assets/figmaimages/figma_image_174_68.svg" alt="" className="icon-base" width="24" height="24" loading="lazy" />
              <img src="/assets/figmaimages/figma_image_174_68_8_9.svg" alt="" className="icon-glyph" width="24" height="24" loading="lazy" />
            </span>
          </button>
        </div>
      </header>

      <section className="bin-banner" aria-label="Trash action banner">
        <div className="bin-banner-bg" aria-hidden="true"></div>
        <div className="bin-icon-wrap" role="img" aria-label="Delete">
          <img src="/assets/figmaimages/figma_image_174_89.svg" alt="" className="icon-base" width="48" height="49" loading="lazy" />
          <img src="/assets/figmaimages/figma_image_174_91.svg" alt="" className="icon-glyph" width="28" height="37" loading="lazy" />
        </div>
      </section>

      <section className="notes-list" aria-label="Notes list">
        <article className="note-card card-red">
          <h2 className="note-text">Book Review : The Design of Everyday Things by Don Norman</h2>
        </article>

        <article className="note-card card-green">
          <h2 className="note-text">Animes produced by Ufotable</h2>
        </article>

        <article className="note-card card-yellow">
          <h2 className="note-text">Mangas planned to read</h2>
        </article>

        <article className="note-card card-teal">
          <h2 className="note-text">Awesome tweets collection</h2>
        </article>

        <article className="note-card card-purple">
          <h2 className="note-text">List of free &amp; open source apps</h2>
        </article>
      </section>

      <button className="fab" type="button" aria-label="Add new note">
        <span className="fab-circle" aria-hidden="true"></span>
        <span className="fab-icon" aria-hidden="true">
          <img src="/assets/figmaimages/figma_image_174_72.svg" alt="" className="icon-base" width="48" height="48" loading="lazy" />
          <img src="/assets/figmaimages/figma_image_174_72_115_19.svg" alt="" className="icon-glyph" width="28" height="28" loading="lazy" />
        </span>
      </button>
    </main>
  );
}

export default HomeScreen17451;
