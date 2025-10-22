export type ErrorScope = "application" | "platform";

export type ErrorCategory =
  | "Function"
  | "Deployment"
  | "DNS"
  | "Cache"
  | "Runtime"
  | "Image"
  | "Request"
  | "Routing"
  | "Sandbox"
  | "Internal";

export interface ErrorVariant {
  scope: ErrorScope;
  category: ErrorCategory;
  httpStatus: number;
  // Optional short guidance that can be shown in UIs
  note?: string;
}

export type ErrorCatalog = Record<string, ErrorVariant[]>;

// Catalog of known error codes. Keys are error codes (UPPERCASE SNAKE_CASE)
export const ERROR_CATALOG: ErrorCatalog = {
  // Application errors
  BODY_NOT_A_STRING_FROM_FUNCTION: [
    { scope: "application", category: "Function", httpStatus: 502 },
  ],
  DEPLOYMENT_BLOCKED: [
    { scope: "application", category: "Deployment", httpStatus: 403 },
  ],
  DEPLOYMENT_DELETED: [
    { scope: "application", category: "Deployment", httpStatus: 410 },
  ],
  DEPLOYMENT_DISABLED: [
    { scope: "application", category: "Deployment", httpStatus: 402 },
  ],
  DEPLOYMENT_NOT_FOUND: [
    { scope: "application", category: "Deployment", httpStatus: 404 },
  ],
  DEPLOYMENT_NOT_READY_REDIRECTING: [
    { scope: "application", category: "Deployment", httpStatus: 303 },
  ],
  DEPLOYMENT_PAUSED: [
    { scope: "application", category: "Deployment", httpStatus: 503 },
  ],
  DNS_HOSTNAME_EMPTY: [
    { scope: "application", category: "DNS", httpStatus: 502 },
  ],
  DNS_HOSTNAME_NOT_FOUND: [
    { scope: "application", category: "DNS", httpStatus: 502 },
  ],
  DNS_HOSTNAME_RESOLVE_FAILED: [
    { scope: "application", category: "DNS", httpStatus: 502 },
  ],
  DNS_HOSTNAME_RESOLVED_PRIVATE: [
    { scope: "application", category: "DNS", httpStatus: 404 },
  ],
  DNS_HOSTNAME_SERVER_ERROR: [
    { scope: "application", category: "DNS", httpStatus: 502 },
  ],
  EDGE_FUNCTION_INVOCATION_FAILED: [
    { scope: "application", category: "Function", httpStatus: 500 },
  ],
  EDGE_FUNCTION_INVOCATION_TIMEOUT: [
    { scope: "application", category: "Function", httpStatus: 504 },
  ],
  FALLBACK_BODY_TOO_LARGE: [
    { scope: "application", category: "Cache", httpStatus: 502 },
  ],
  FUNCTION_INVOCATION_FAILED: [
    { scope: "application", category: "Function", httpStatus: 500 },
  ],
  FUNCTION_INVOCATION_TIMEOUT: [
    { scope: "application", category: "Function", httpStatus: 504 },
  ],
  FUNCTION_PAYLOAD_TOO_LARGE: [
    { scope: "application", category: "Function", httpStatus: 413 },
  ],
  FUNCTION_RESPONSE_PAYLOAD_TOO_LARGE: [
    { scope: "application", category: "Function", httpStatus: 500 },
  ],
  FUNCTION_THROTTLED: [
    { scope: "application", category: "Function", httpStatus: 503 },
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INFINITE_LOOP_DETECTED: [
    { scope: "application", category: "Runtime", httpStatus: 508 },
  ],
  INVALID_IMAGE_OPTIMIZE_REQUEST: [
    { scope: "application", category: "Image", httpStatus: 400 },
  ],
  INVALID_REQUEST_METHOD: [
    { scope: "application", category: "Request", httpStatus: 405 },
  ],
  MALFORMED_REQUEST_HEADER: [
    { scope: "application", category: "Request", httpStatus: 400 },
  ],
  MICROFRONTENDS_MIDDLEWARE_ERROR: [
    { scope: "application", category: "Function", httpStatus: 500 },
  ],
  MICROFRONTENDS_MISSING_FALLBACK_ERROR: [
    { scope: "application", category: "Function", httpStatus: 400 },
  ],
  MIDDLEWARE_INVOCATION_FAILED: [
    { scope: "application", category: "Function", httpStatus: 500 },
  ],
  MIDDLEWARE_INVOCATION_TIMEOUT: [
    { scope: "application", category: "Function", httpStatus: 504 },
  ],
  MIDDLEWARE_RUNTIME_DEPRECATED: [
    { scope: "application", category: "Runtime", httpStatus: 503 },
  ],
  NO_RESPONSE_FROM_FUNCTION: [
    { scope: "application", category: "Function", httpStatus: 502 },
  ],
  NOT_FOUND: [
    { scope: "application", category: "Deployment", httpStatus: 404 },
  ],
  OPTIMIZED_EXTERNAL_IMAGE_REQUEST_FAILED: [
    { scope: "application", category: "Image", httpStatus: 502 },
  ],
  OPTIMIZED_EXTERNAL_IMAGE_REQUEST_INVALID: [
    { scope: "application", category: "Image", httpStatus: 502 },
  ],
  OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED: [
    { scope: "application", category: "Image", httpStatus: 502 },
  ],
  OPTIMIZED_EXTERNAL_IMAGE_TOO_MANY_REDIRECTS: [
    { scope: "application", category: "Image", httpStatus: 502 },
  ],
  RANGE_END_NOT_VALID: [
    { scope: "application", category: "Request", httpStatus: 416 },
  ],
  RANGE_GROUP_NOT_VALID: [
    { scope: "application", category: "Request", httpStatus: 416 },
  ],
  RANGE_MISSING_UNIT: [
    { scope: "application", category: "Request", httpStatus: 416 },
  ],
  RANGE_START_NOT_VALID: [
    { scope: "application", category: "Request", httpStatus: 416 },
  ],
  RANGE_UNIT_NOT_SUPPORTED: [
    { scope: "application", category: "Request", httpStatus: 416 },
  ],
  REQUEST_HEADER_TOO_LARGE: [
    { scope: "application", category: "Request", httpStatus: 431 },
  ],
  RESOURCE_NOT_FOUND: [
    { scope: "application", category: "Request", httpStatus: 404 },
  ],
  ROUTER_CANNOT_MATCH: [
    { scope: "application", category: "Routing", httpStatus: 502 },
  ],
  ROUTER_EXTERNAL_TARGET_CONNECTION_ERROR: [
    { scope: "application", category: "Routing", httpStatus: 502 },
  ],
  ROUTER_EXTERNAL_TARGET_ERROR: [
    { scope: "application", category: "Routing", httpStatus: 502 },
  ],
  ROUTER_EXTERNAL_TARGET_HANDSHAKE_ERROR: [
    { scope: "application", category: "Routing", httpStatus: 502 },
  ],
  ROUTER_TOO_MANY_HAS_SELECTIONS: [
    { scope: "application", category: "Routing", httpStatus: 502 },
  ],
  SANDBOX_NOT_FOUND: [
    { scope: "application", category: "Sandbox", httpStatus: 404 },
  ],
  SANDBOX_NOT_LISTENING: [
    { scope: "application", category: "Sandbox", httpStatus: 502 },
  ],
  SANDBOX_STOPPED: [
    { scope: "application", category: "Sandbox", httpStatus: 410 },
  ],
  TOO_MANY_FILESYSTEM_CHECKS: [
    { scope: "application", category: "Routing", httpStatus: 502 },
  ],
  TOO_MANY_FORKS: [
    { scope: "application", category: "Routing", httpStatus: 502 },
  ],
  TOO_MANY_RANGES: [
    { scope: "application", category: "Request", httpStatus: 416 },
  ],
  URL_TOO_LONG: [
    { scope: "application", category: "Request", httpStatus: 414 },
  ],

  // Platform errors (Internal)
  INTERNAL_CACHE_ERROR: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_CACHE_KEY_TOO_LONG: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_CACHE_LOCK_FULL: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_CACHE_LOCK_TIMEOUT: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_DEPLOYMENT_FETCH_FAILED: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_EDGE_FUNCTION_INVOCATION_FAILED: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_EDGE_FUNCTION_INVOCATION_TIMEOUT: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_FUNCTION_INVOCATION_FAILED: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_FUNCTION_INVOCATION_TIMEOUT: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_FUNCTION_NOT_FOUND: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_FUNCTION_NOT_READY: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_FUNCTION_SERVICE_UNAVAILABLE: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_MICROFRONTENDS_BUILD_ERROR: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_MICROFRONTENDS_INVALID_CONFIGURATION_ERROR: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_MICROFRONTENDS_UNEXPECTED_ERROR: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_MISSING_RESPONSE_FROM_CACHE: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_OPTIMIZED_IMAGE_REQUEST_FAILED: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_ROUTER_CANNOT_PARSE_PATH: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_STATIC_REQUEST_FAILED: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_UNARCHIVE_FAILED: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
  INTERNAL_UNEXPECTED_ERROR: [
    { scope: "platform", category: "Internal", httpStatus: 500 },
  ],
};

export function getVariantsByCode(code: unknown): ErrorVariant[] | undefined {
  if (typeof code !== "string" || code.length === 0) return undefined;
  const key = code.toUpperCase();
  return ERROR_CATALOG[key];
}

export function getAllCodes(): string[] {
  return Object.keys(ERROR_CATALOG).sort();
}

export interface GroupedItem {
  scope: ErrorScope;
  category: ErrorCategory;
  items: { code: string; httpStatus: number }[];
}

export function getGroupedByScopeAndCategory(): GroupedItem[] {
  const groups = new Map<string, GroupedItem>();

  for (const [code, variants] of Object.entries(ERROR_CATALOG)) {
    for (const v of variants) {
      const key = `${v.scope}__${v.category}`;
      if (!groups.has(key)) {
        groups.set(key, { scope: v.scope, category: v.category, items: [] });
      }
      groups.get(key)!.items.push({ code, httpStatus: v.httpStatus });
    }
  }

  // Sort items inside each group and then sort groups deterministically
  const sorted = Array.from(groups.values())
    .map((g) => ({
      ...g,
      items: g.items.sort((a, b) => a.code.localeCompare(b.code)),
    }))
    .sort((a, b) => {
      if (a.scope !== b.scope) return a.scope.localeCompare(b.scope);
      return a.category.localeCompare(b.category);
    });

  return sorted;
}
