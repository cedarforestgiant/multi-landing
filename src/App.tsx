import React from "react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0B0C10] text-white">
      <h1 className="text-4xl font-bold mb-6">
        Ship faster <span className="text-[#3B82F6]">with precision</span>.
      </h1>
      <div className="flex gap-3">
        <Button>Install Multi</Button>
        <Button variant="outline">Read the Docs</Button>
      </div>
    </main>
  );
}
