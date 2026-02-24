import { getMailtoPrefix, getSupportEmail } from "@/utils/email";

type ObfuscatedEmailProps = {
  label?: string;
};

export default function ObfuscatedEmail({ label }: ObfuscatedEmailProps) {
  const email = getSupportEmail();
  return <a href={`${getMailtoPrefix()}${email}`}>{label ?? email}</a>;
}
