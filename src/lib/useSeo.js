import { useEffect } from "react";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, json) {
  let el = document.head.querySelector(`script[data-seo="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
}

function removeJsonLd(id) {
  const el = document.head.querySelector(`script[data-seo="${id}"]`);
  if (el) el.remove();
}

export function useSeo({
  title,
  description,
  canonical,
  og,
  jsonLd,
  jsonLdId = "page",
}) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      upsertMeta('meta[name="description"]', {
        name: "description",
        content: description,
      });
    }

    if (canonical) upsertLink("canonical", canonical);

    if (og?.title)
      upsertMeta('meta[property="og:title"]', {
        property: "og:title",
        content: og.title,
      });

    if (og?.description)
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content: og.description,
      });

    if (og?.url)
      upsertMeta('meta[property="og:url"]', {
        property: "og:url",
        content: og.url,
      });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: og?.type || "website",
    });

    if (og?.image)
      upsertMeta('meta[property="og:image"]', {
        property: "og:image",
        content: og.image,
      });

    // twitter
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    // schema
    if (jsonLd) upsertJsonLd(jsonLdId, jsonLd);

    // Cleanup when leaving the page
    return () => {
      removeJsonLd(jsonLdId);
    };
  }, [
    title,
    description,
    canonical,
    og?.title,
    og?.description,
    og?.url,
    og?.type,
    og?.image,
    jsonLd,
    jsonLdId,
  ]);
}