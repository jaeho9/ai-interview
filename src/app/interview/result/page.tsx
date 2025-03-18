"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export default function InterviewResultPage() {
  const score = 75; // 예제 점수
  const feedback =
    "논리적인 답변이었지만, 예제 코드가 부족했습니다. 좀 더 구체적인 예시를 포함하면 좋을 것 같습니다.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        면접 결과
      </motion.h1>

      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle>면접 점수</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">{score}점</span>
            <Progress value={score} className="w-3/4" />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md p-6 shadow-lg mt-4">
        <CardHeader>
          <CardTitle>피드백</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{feedback}</p>
        </CardContent>
      </Card>

      <div className="flex gap-4 mt-6">
        <Button
          className="px-6 py-3 text-lg font-semibold shadow-lg"
          onClick={() => alert("다시 도전!")}
        >
          다시 도전
        </Button>
        <Button
          className="px-6 py-3 text-lg font-semibold shadow-lg"
          variant="outline"
          onClick={() => alert("새로운 질문 시작!")}
        >
          새로운 질문
        </Button>
      </div>
    </div>
  );
}
