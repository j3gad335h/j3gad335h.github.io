import { createLazyFileRoute } from "@tanstack/react-router";
import ProfileCard from "@/components/netflix/ProfileCard";
import { Button } from "@mui/material";
export const Route = createLazyFileRoute("/projects/netflix/")({
  component: indexComponent,
});

function indexComponent() {
  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <div className="flex flex-col">
          <h2 className="text-center text-[3.5vw] my-[0.67em]">Who&apos;s watching?</h2>
          {/* PROFILE LIST SECTION */}
          <ProfileCard />
          <div className="flex justify-center mt-10">
            <Button
              variant="outlined"
              className="text-gray-500 border-gray-500 hover:text-white hover:border-white normal-case"
            >
              Manage Profiles
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
