// Site-wide behaviour: mobile menu, accordions, FAQ, tabs, enquiry pre-fill and forms.
// Everything works without this script except opening/closing and sending forms.
import { site } from '../data/site';

const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel) as NodeListOf<T>);

// ---------- Mobile menu ----------
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.getElementById('mobile-menu');
const setMenu = (open: boolean) => {
  if (!menuBtn || !menu) return;
  menuBtn.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
};
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
$$('[data-menu-close]').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// ---------- Services accordion (one open at a time) ----------
$$('[data-accordion]').forEach((acc) => {
  const buttons = $$<HTMLButtonElement>('[data-acc-toggle]', acc);
  const setOpen = (btn: HTMLButtonElement, open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.closest('.acc-item')?.classList.toggle('is-open', open);
    const panel = document.getElementById(btn.getAttribute('aria-controls') || '');
    if (panel) panel.hidden = !open;
  };
  buttons.forEach((btn) =>
    btn.addEventListener('click', () => {
      const wasOpen = btn.getAttribute('aria-expanded') === 'true';
      buttons.forEach((b) => setOpen(b, false));
      if (!wasOpen) {
        setOpen(btn, true);
        if (btn.getBoundingClientRect().top < 80) btn.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }),
  );
});

// ---------- FAQ ----------
$$<HTMLButtonElement>('[data-faq-toggle]').forEach((btn) =>
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    const panel = document.getElementById(btn.getAttribute('aria-controls') || '');
    if (panel) panel.hidden = !open;
  }),
);

// ---------- Tabs ("What a website does for your kind of business") ----------
$$('[data-tabs]').forEach((wrap) => {
  const tabs = $$<HTMLButtonElement>('[role="tab"]', wrap);
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls') || '');
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (step) select(tabs[(i + step + tabs.length) % tabs.length], true);
    });
  });
});

// ---------- Enquiry pre-fill ----------
// Links with data-enquiry="…" fill the contact message. Across pages the text travels as ?enquiry=…
const messageBox = () => document.getElementById('c-msg') as HTMLTextAreaElement | null;
$$<HTMLAnchorElement>('[data-enquiry]').forEach((link) =>
  link.addEventListener('click', (e) => {
    const text = link.dataset.enquiry || '';
    const box = messageBox();
    if (box) {
      box.value = text;
      return; // the #contact link scrolls on the same page
    }
    e.preventDefault();
    window.location.href = `/?enquiry=${encodeURIComponent(text)}#contact`;
  }),
);
const fromUrl = new URLSearchParams(window.location.search).get('enquiry');
if (fromUrl && messageBox()) messageBox()!.value = fromUrl;

// ---------- Forms (Web3Forms) ----------
$$<HTMLFormElement>('form[data-web3form]').forEach((form) => {
  const wrap = form.closest('[data-form-wrap]');
  const thanks = wrap?.querySelector<HTMLElement>('[data-form-thanks]');
  const error = form.querySelector<HTMLElement>('[data-form-error]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const showError = (msg: string) => {
    if (!error) return;
    error.innerHTML = msg;
    error.hidden = false;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (error) error.hidden = true;
    if (!site.web3formsKey) {
      showError(`The form isn’t connected yet. Please email <a href="mailto:${site.email}">${site.email}</a> or call ${site.phoneDisplay}.`);
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.botcheck) return; // spam bot filled the hidden field
    if (button) button.disabled = true;
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: form.dataset.subject || 'Website enquiry',
          from_name: site.name + ' website',
          page: window.location.pathname,
          ...data,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || 'Send failed');
      form.reset();
      form.hidden = true;
      if (thanks) thanks.hidden = false;
    } catch (err) {
      console.error('Form send failed:', err);
      const reason = err instanceof Error ? err.message.replace(/[<>&]/g, '') : '';
      showError(`Sorry, something went wrong${reason ? ` (${reason})` : ''}. Please try again, or email <a href="mailto:${site.email}">${site.email}</a>.`);
    } finally {
      if (button) button.disabled = false;
    }
  });

  wrap?.querySelector('[data-form-reset]')?.addEventListener('click', () => {
    if (thanks) thanks.hidden = true;
    form.hidden = false;
  });
});
