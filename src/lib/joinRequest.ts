export const JOIN_FIELDS = ["name", "gym", "city", "phone"] as const;
export type JoinField = (typeof JOIN_FIELDS)[number];
export type JoinValues = Readonly<Record<JoinField | "size", string>>;

export type JoinRequest = Readonly<{
  name: string;
  gym: string;
  city: string;
  size: string;
  phone: string;
}>;

export type JoinValidation =
  | Readonly<{ ok: true; request: JoinRequest }>
  | Readonly<{ ok: false; field: JoinField; message: string }>;

export const MAX_TEXT_LENGTH = 80;
const INDIAN_MOBILE = /^[6-9]\d{9}$/;

const missingFieldMessages: Readonly<Record<Exclude<JoinField, "phone">, string>> = {
  name: "Add your name so we know who to ask for.",
  gym: "Add your gym’s name.",
  city: "Add the city your gym is in.",
};

export function readJoinValues(formData: FormData): JoinValues {
  const read = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };
  return { name: read("name"), gym: read("gym"), city: read("city"), size: read("size"), phone: read("phone") };
}

export function validateJoinRequest(values: JoinValues): JoinValidation {
  for (const field of ["name", "gym", "city"] as const) {
    if (!values[field]) return { ok: false, field, message: missingFieldMessages[field] };
    if (values[field].length > MAX_TEXT_LENGTH) {
      return { ok: false, field, message: `Keep this under ${MAX_TEXT_LENGTH} characters.` };
    }
  }

  const phone = values.phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  if (!INDIAN_MOBILE.test(phone)) {
    return { ok: false, field: "phone", message: "Enter the 10-digit mobile number you use for WhatsApp." };
  }

  return { ok: true, request: { name: values.name, gym: values.gym, city: values.city, size: values.size, phone } };
}

export type JoinFormState =
  | Readonly<{ status: "idle"; attempt: number; values: JoinValues }>
  | Readonly<{ status: "invalid"; attempt: number; values: JoinValues; field: JoinField; message: string }>
  | Readonly<{ status: "failed"; attempt: number; values: JoinValues; message: string }>
  | Readonly<{ status: "joined"; attempt: number; request: JoinRequest }>;

export const EMPTY_JOIN_VALUES: JoinValues = { name: "", gym: "", city: "", size: "", phone: "" };
