import { send } from "emailjs-com";

export default function emailJS(mail: any) {
  return send(
    "service_9czz5bj",
    "template_a8cjx5i",
    mail,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string,
  );
}
