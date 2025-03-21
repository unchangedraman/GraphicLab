"use client";

import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

const NoBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id : any) => {
        toast.success("Board created");
        // router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board"));
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} size="lg" onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default NoBoards;
