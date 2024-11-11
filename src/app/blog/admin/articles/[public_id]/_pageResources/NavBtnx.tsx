import Button from "@/shared/components/Clickables/Button";

export default function NavBtns() {
  return (
    <div className="flex w-full max-w-[320px] gap-4">
      <Button stylization={{ theme: "secondary", size: "sm" }} className="flex-1">
        Save
      </Button>
      <Button stylization={{ theme: "primary", size: "sm" }} className="flex-1">
        Publish
      </Button>
    </div>
  );
}
