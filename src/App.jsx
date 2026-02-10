// // src/App.jsx
// import React,{ useEffect } from "react";
// import { fetchSheet } from "./api";
// import { useSheetStore } from "./store/useSheetStore";
// 
// export default function App() {
//   const { topics, solvedMap, toggleSolved, setFromAPI } =
//     useSheetStore();
// 
//   useEffect(() => {
//     fetchSheet().then((data) => {
//       setFromAPI(data.data.questions);
//     });
//   }, [setFromAPI]);
// 
//   const allQuestions = topics.flatMap((t) =>
//     t.subTopics.flatMap((st) => st.questions)
//   );
//   const solved = Object.values(solvedMap).filter(Boolean).length;
//   const progress = allQuestions.length
//     ? Math.round((solved / allQuestions.length) * 100)
//     : 0;
// 
//   return (
//     <div className="min-h-screen bg-[#0b0f14] text-gray-100">
//       {/* HEADER */}
//       <header className="sticky top-0 z-50 bg-[#0b0f14]/90 backdrop-blur border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-10 py-5">
//           <h1 className="text-3xl font-bold">Striver SDE Sheet</h1>
// 
//           <div className="mt-4">
//             <div className="flex justify-between text-sm text-gray-400 mb-1">
//               <span>Solved {solved}/{allQuestions.length}</span>
//               <span>{progress}%</span>
//             </div>
//             <div className="h-2 bg-gray-700 rounded">
//               <div
//                 className="h-full bg-indigo-500 rounded transition-all"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           </div>
//         </div>
//       </header>
// 
//       {/* CONTENT */}
//       <main className="max-w-7xl mx-auto px-10 py-12 space-y-14">
//         {topics.map((topic) => (
//           <section
//             key={topic.id}
//             className="bg-[#111827] border border-gray-700 rounded-xl p-8"
//           >
//             <h2 className="text-2xl font-semibold mb-8">
//               {topic.title}
//             </h2>
// 
//             {topic.subTopics.map((sub) => (
//               <div key={sub.id} className="mb-10">
//                 <h3 className="uppercase text-sm text-gray-400 mb-4">
//                   {sub.title}
//                 </h3>
// 
//                 <div className="space-y-4">
//                   {sub.questions.map((q) => (
//                     <div
//                       key={q.id}
//                       className="group flex justify-between items-center
//                                  bg-[#020617]
//                                  border border-gray-600
//                                  rounded-xl px-6 py-4
//                                  hover:border-indigo-500 transition"
//                     >
//                       <label className="flex items-center gap-4 cursor-pointer">
//                         <span className="text-gray-400 cursor-grab">☰</span>
// 
//                         <input
//                           type="checkbox"
//                           className="accent-indigo-500"
//                           checked={!!solvedMap[q.id]}
//                           onChange={() => toggleSolved(q.id)}
//                         />
// 
//                         <span
//                           className={
//                             solvedMap[q.id]
//                               ? "line-through text-gray-500"
//                               : "text-gray-100"
//                           }
//                         >
//                           {q.title}
//                         </span>
//                       </label>
// 
//                       <span
//                         className={`text-xs px-3 py-1 rounded
//                           ${
//                             q.difficulty === "Easy"
//                               ? "bg-green-700 text-green-100"
//                               : q.difficulty === "Medium"
//                               ? "bg-yellow-600 text-yellow-100"
//                               : "bg-red-700 text-red-100"
//                           }`}
//                       >
//                         {q.difficulty}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// src/App.jsx
// import React,{ useEffect } from "react";
// import { fetchSheet } from "./api";
// import { useSheetStore } from "./store/useSheetStore";
// 
// import {
//   DndContext,
//   closestCenter,
// } from "@dnd-kit/core";
// import {
//   SortableContext,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// 
// /* ---------- DRAGGABLE TOPIC ---------- */
// function TopicCard({ topic }) {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id: topic.id });
// 
//   const { toggleTopic, solvedMap, toggleSolved } = useSheetStore();
// 
//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };
// 
//   return (
//     <section
//       ref={setNodeRef}
//       style={style}
//       className="bg-[#111827] border border-gray-700 rounded-xl"
//     >
//       {/* ===== TOPIC HEADER ===== */}
//       <div
//         className="flex items-center justify-between px-8 py-5 cursor-pointer"
//         onClick={() => toggleTopic(topic.id)}
//       >
//         <div className="flex items-center gap-4">
//           <span
//             {...attributes}
//             {...listeners}
//             className="cursor-grab text-gray-400 text-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             ☰
//           </span>
// 
//           <h2 className="text-xl font-semibold">{topic.title}</h2>
//         </div>
// 
//         <span className="text-gray-400">
//           {topic.open ? "▾" : "▸"}
//         </span>
//       </div>
// 
//       {/* ===== CONTENT ===== */}
//       {topic.open && (
//         <div className="px-10 pb-8 space-y-8">
//           {topic.subTopics.map((sub) => (
//             <div key={sub.id}>
//               <h3 className="text-sm uppercase text-gray-400 mb-4">
//                 {sub.title}
//               </h3>
// 
//               <div className="space-y-4">
//                 {sub.questions.map((q) => (
//                   <div
//                     key={q.id}
//                     className="flex justify-between items-center
//                                bg-[#020617]
//                                border border-gray-600
//                                rounded-xl
//                                px-6 py-4"
//                   >
//                     <label className="flex items-center gap-4">
//                       <input
//                         type="checkbox"
//                         className="accent-indigo-500"
//                         checked={!!solvedMap[q.id]}
//                         onChange={() => toggleSolved(q.id)}
//                       />
//                       <span
//                         className={
//                           solvedMap[q.id]
//                             ? "line-through text-gray-500"
//                             : "text-gray-100"
//                         }
//                       >
//                         {q.title}
//                       </span>
//                     </label>
// 
//                     <span
//                       className={`text-xs px-3 py-1 rounded
//                         ${
//                           q.difficulty === "Easy"
//                             ? "bg-green-700 text-green-100"
//                             : q.difficulty === "Medium"
//                             ? "bg-yellow-600 text-yellow-100"
//                             : "bg-red-700 text-red-100"
//                         }`}
//                     >
//                       {q.difficulty}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
// 
// /* ---------- APP ---------- */
// export default function App() {
//   const { topics, setFromAPI, reorderTopics } = useSheetStore();
// 
//   useEffect(() => {
//     fetchSheet().then((data) =>
//       setFromAPI(data.data.questions)
//     );
//   }, [setFromAPI]);
// 
//   return (
//     <div className="min-h-screen bg-[#0b0f14] text-gray-100">
//       {/* HEADER */}
//       <header className="sticky top-0 z-50 bg-[#0b0f14]/90 border-b border-gray-700">
//         <div className="max-w-7xl mx-auto px-12 py-6">
//           <h1 className="text-3xl font-bold">
//             Striver SDE Sheet
//           </h1>
//         </div>
//       </header>
// 
//       {/* CONTENT */}
//       <main className="max-w-7xl mx-auto px-12 py-12">
//         <DndContext
//           collisionDetection={closestCenter}
//           onDragEnd={(e) => {
//             if (e.over) {
//               reorderTopics(e.active.id, e.over.id);
//             }
//           }}
//         >
//           <SortableContext
//             items={topics.map((t) => t.id)}
//             strategy={verticalListSortingStrategy}
//           >
//             <div className="space-y-8">
//               {topics.map((topic) => (
//                 <TopicCard key={topic.id} topic={topic} />
//               ))}
//             </div>
//           </SortableContext>
//         </DndContext>
//       </main>
//     </div>
//   );
// }

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