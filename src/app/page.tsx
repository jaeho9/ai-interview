"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const topics = ["프론트엔드", "백엔드", "데브옵스", "데이터 엔지니어"];
const difficulties = ["초급", "중급", "고급"];

export default function HomePage() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6">
      {/* 타이틀 */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI 면접 연습
      </motion.h1>

      {/* 설명 */}
      <motion.p
        className="text-lg text-muted-foreground mb-8 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        원하는 면접 주제와 난이도를 선택하고 AI 면접을 시작해보세요!
      </motion.p>

      {/* 선택 섹션 */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 w-full max-w-md">
        <Select onValueChange={setTopic}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="면접 주제 선택" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setDifficulty}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="난이도 선택" />
          </SelectTrigger>
          <SelectContent>
            {difficulties.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 면접 시작 버튼 */}
      <Button
        className="px-6 py-3 text-lg font-semibold shadow-lg transition-transform hover:scale-105"
        disabled={!topic || !difficulty}
        onClick={() =>
          alert(`면접 시작! 주제: ${topic}, 난이도: ${difficulty}`)
        }
      >
        면접 연습 시작
      </Button>
    </div>
  );
}
