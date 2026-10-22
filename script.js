'use strict';

// WhatsApp number is in international format: Pakistan country code +92, without leading 0.
const WHATSAPP_NUMBER = '923139535424';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const nav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');
const eventSelect = document.querySelector('#event-type');
const packageSelect = document.querySelector('#package');
const form = document.querySelector('#booking-form');
const status = document.querySelector('#form-status');

// Mobile navigation
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.textContent = '☰';
}));

// Choosing an event or package scrolls to the inquiry form and preselects the choice.
document.querySelectorAll('[data-event]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-event]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    eventSelect.value = button.dataset.event;
    document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' });
  });
});
document.querySelectorAll('.choose-package').forEach(button => {
  button.addEventListener('click', () => {
    packageSelect.value = button.dataset.package;
    document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' });
  });
});

// Build a WhatsApp message locally. The website does not save form entries.
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const eventType = String(data.get('event') || '').trim();
  const packageChoice = String(data.get('package') || 'Not sure yet').trim();
  const date = String(data.get('date') || '').trim();
  const guests = String(data.get('guests') || '').trim();
  const details = String(data.get('details') || '').trim();
  const message = [
    'Salam, I would like to enquire about booking Elite Aura Farmhouse.',
    '',
    `Name: ${name}`,
    `Event: ${eventType}`,
    `Package: ${packageChoice}`,
    `Preferred date: ${date || 'Not decided yet'}`,
    `Expected guests: ${guests || 'Not decided yet'}`,
    details ? `Additional details: ${details}` : '',
    '',
    'Please let me know about availability, current pricing and booking terms.',
    'Thank you.'
  ].filter(Boolean).join('\n');
  const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
  status.textContent = 'Opening WhatsApp. Please review the message and press Send there to submit your enquiry.';
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  if (!opened) window.location.href = url;
});

// Gallery lightbox
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
document.querySelectorAll('[data-lightbox]').forEach(button => button.addEventListener('click', () => {
  lightboxImage.src = button.dataset.lightbox;
  lightbox.showModal();
}));
document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();
