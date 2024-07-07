import EmailTemplate from "@/shared/components/EmailTemplate/EmailTemplate";
import { twColors } from "../../../../../../../tailwind.config";

export default function Email(props: { email: string; message: string }) {
  return (
    <EmailTemplate>
      <p style={{fontSize: '24px', color: twColors.neutral[300]}}>De: {props.email}</p>
      <p style={{color: twColors.neutral[400]}}>{props.message}</p>
    </EmailTemplate>
  );
}
