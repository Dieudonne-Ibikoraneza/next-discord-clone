import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col">
      <p className="text-3xl font-bold text-indigo-500">Hello discord clone</p>
      <Button>Click me</Button>
    </div>
  );
}
