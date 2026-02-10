

import React, { useEffect } from "react";
import { fetchSheet } from "./api/sheetApi";
import { useSheetStore } from "./store/useSheetStore";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Topic from "./components/Topic";

export default function App() {
  const { topics, setFromAPI, reorderTopics } =
    useSheetStore();

  useEffect(() => {
    fetchSheet()
      .then((data) => {
        console.log("Loaded sheet:", data);

        // IMPORTANT: match your actual data shape
        setFromAPI(data.questions ?? data.data?.questions ?? data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [setFromAPI]);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-gray-100">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-[#0b0f14]/90 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-12 py-6">
          <h1 className="text-3xl font-bold">
            Striver SDE Sheet
          </h1>
        </div>
      </header>

      {/* ===== CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-12 py-12">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={(event) => {
            const { active, over } = event;
            if (over && active.id !== over.id) {
              reorderTopics(active.id, over.id);
            }
          }}
        >
          <SortableContext
            items={topics.map((t) => t.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-8">
              {topics.map((topic) => (
                <Topic key={topic.id} topic={topic} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </main>
    </div>
  );
}