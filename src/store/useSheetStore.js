
import { create } from "zustand";

export const useSheetStore = create((set) => ({
  topics: [],
  solvedMap: {},

  /* ---------- INIT ---------- */
  setFromAPI(questions) {
    const map = {};

    questions.forEach((q) => {
      if (!map[q.topic]) map[q.topic] = {};
      if (!map[q.topic][q.subTopic]) map[q.topic][q.subTopic] = [];
      map[q.topic][q.subTopic].push(q);
    });

    const topics = Object.entries(map).map(([topic, subs], ti) => ({
      id: `t-${ti}`,
      title: topic,
      order: ti,
      open: false, // 👈 accordion state
      subTopics: Object.entries(subs).map(([sub, qs], si) => ({
        id: `st-${ti}-${si}`,
        title: sub,
        order: si,
        questions: qs.map((q, qi) => ({
          id: q._id,
          title: q.questionId.name,
          difficulty: q.questionId.difficulty,
          order: qi,
        })),
      })),
    }));

    set({ topics });
  },

  /* ---------- UI ---------- */
  toggleTopic(id) {
    set((s) => ({
      topics: s.topics.map((t) =>
        t.id === id ? { ...t, open: !t.open } : t
      ),
    }));
  },

  /* ---------- SOLVED ---------- */
  toggleSolved(id) {
    set((s) => ({
      solvedMap: { ...s.solvedMap, [id]: !s.solvedMap[id] },
    }));
  },

  /* ---------- REORDER TOPICS ---------- */
  reorderTopics(activeId, overId) {
    set((s) => {
      const oldIndex = s.topics.findIndex((t) => t.id === activeId);
      const newIndex = s.topics.findIndex((t) => t.id === overId);

      const updated = [...s.topics];
      const [moved] = updated.splice(oldIndex, 1);
      updated.splice(newIndex, 0, moved);

      return { topics: updated };
    });
  },
}));