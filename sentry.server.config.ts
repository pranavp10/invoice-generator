import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://33d812bc832e4b36ab3a841f1f6d3cd1@glitchtip.prolab.sh/2",
  tracesSampleRate: 1,
  debug: false,
});
