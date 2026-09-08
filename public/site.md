# The Accord Project marketing website

The Accord Project is the parent company and the site's primary brand. TAP Business is its only advertised product. Keep The Accord Project in the header, footer, and site metadata, and clearly introduce TAP Business as its product.

## Purpose

Collect email subscribers for launch news. TAP Business is coming soon; no live account creation, checkout, demo booking, or module activation is offered on this site. Every conversion link leads to the subscription section.

## Content

1. Hero: product introduction, email subscription form, and a cloud of module and feature badges.
2. Solutions: online presence, management, leads, booking, payments, selling, publishing, and staff.
3. Free website: account, business portal, static website, visual features, custom-domain connection, responsive layouts, and Payments & Invoicing (one-time payments, invoices, recurring bills, payment history, fundraising, and donations). Payments & Invoicing is a website feature, not an optional module. Standard payment-processing fees apply.
4. Six optional modules and planned monthly prices: Contact $0.99, Blog $0.99, Careers $1.99, Booking $1.99, Events $1.99, Store $3.99. Adding all six costs a discounted $10.99/month. Emphasize the all-module price without advertising the savings amount. Contact + Blog totals $1.98/month; Contact + Booking $2.98/month; Contact + Booking + Blog $3.97/month; Store $3.99/month. Every combination includes the free Payments & Invoicing website feature. Any TAP Business transaction fee is separate and the policy must be finalized before launch.
5. Compact FAQ covering free versus paid tools, existing domains, setup experience, and launch availability.
6. Launch subscription section, email-use explanation, and company footer. Use “Get launch updates” for signup buttons. Include a subscription link after the free website features.

## Design and behavior

One responsive page with anchor navigation, warm neutral colors, accessible text contrast, visible keyboard focus, reduced-motion support, and an expandable mobile menu. Product illustrations are labeled as illustrations. No invented testimonials, customer counts, or priority-access promises.

Both email forms share loading and success state and POST JSON `{ "email": "..." }` to `VITE_SUBSCRIBE_URL`. Only a successful HTTP response shows confirmation. Failed requests and timeouts allow retry; missing configuration displays an unavailable message. Duplicate concurrent submissions are prevented. Email subscription is the sole conversion action. Signup measurement hooks emit phase and form location without the email address; an analytics integration is needed to store metrics. Deployment is not blocked by missing subscription configuration; the endpoint is required only for live email collection.
