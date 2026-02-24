const supportLocalCodes = [115, 117, 112, 112, 111, 114, 116] as const;
const supportDomainCodes = [114, 101, 112, 105, 103, 111, 46, 115, 101] as const;

function decode(codes: readonly number[]) {
  return String.fromCharCode(...codes);
}

export function getSupportEmail() {
  return [decode(supportLocalCodes), decode(supportDomainCodes)].join("@");
}

export function getMailtoPrefix() {
  return ["mail", "to"].join(":");
}
