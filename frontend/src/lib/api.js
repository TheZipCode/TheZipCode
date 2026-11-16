const LIVE_BACKEND_URL = "https://nextgen-web-solution.onrender.com";
const LEGACY_BACKEND_URL = "https://nextgen-web-solution-2.onrender.com";

const configuredBackendUrl = (process.env.REACT_APP_BACKEND_URL || LIVE_BACKEND_URL).trim();
const normalizedBackendUrl = configuredBackendUrl.replace(/\/+$/, "");

const backendUrl = normalizedBackendUrl === LEGACY_BACKEND_URL
  ? LIVE_BACKEND_URL
  : normalizedBackendUrl;

export const API_BASE = `${backendUrl}/api`;
