// "use client";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { motion } from "framer-motion";

// // 면접 질문을 AI에게 요청하는 함수 (예시)
// async function fetchQuestion(topic: string, difficulty: string) {
//   const response = await fetch("/api/generate-question", {
//     method: "POST",
//     body: JSON.stringify({ topic, difficulty }),
//   });
//   const data = await response.json();
//   return data.question;
// }

// // AI가 답변을 평가하는 함수 (예시)
// async function fetchFeedback(answer: string) {
//   const response = await fetch("/api/evaluate-answer", {
//     method: "POST",
//     body: JSON.stringify({ answer }),
//   });
//   const data = await response.json();
//   return data.feedback;
// }

// export default function InterviewPage() {
//   const searchParams = useSearchParams();
//   const topic = searchParams.get("topic") || "프론트엔드";
//   const difficulty = searchParams.get("difficulty") || "초급";

//   const [question, setQuestion] = useState<string>("");
//   const [answer, setAnswer] = useState<string>("");
//   const [feedback, setFeedback] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   // 면접 시작 시 질문 가져오기
//   useEffect(() => {
//     async function getQuestion() {
//       setLoading(true);
//       const newQuestion = await fetchQuestion(topic, difficulty);
//       setQuestion(newQuestion);
//       setLoading(false);
//     }
//     getQuestion();
//   }, [topic, difficulty]);

//   // 답변 제출 핸들러
//   const handleSubmit = async () => {
//     if (answer.trim() === "") {
//       setFeedback("답변을 입력해주세요.");
//       return;
//     }

//     setLoading(true);
//     const response = await fetchFeedback(answer);
//     setFeedback(response);
//     setAnswer("");
//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-background text-foreground">
//       <motion.h1
//         className="text-3xl font-bold mb-4"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {topic} ({difficulty}) 면접 연습
//       </motion.h1>

//       <motion.p
//         className="text-lg text-muted-foreground mb-8 text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//       >
//         AI가 질문을 생성하고, 당신의 답변을 평가합니다.
//       </motion.p>

//       <motion.div
//         className="w-full max-w-lg bg-card p-6 rounded-lg shadow-md"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {loading ? (
//           <p className="text-lg font-semibold mb-4 animate-pulse">
//             질문을 불러오는 중...
//           </p>
//         ) : (
//           <p className="text-lg font-semibold mb-4">{question}</p>
//         )}

//         <Input
//           className="w-full mb-4"
//           placeholder="답변을 입력하세요..."
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           disabled={loading}
//         />

//         <Button
//           className="w-full"
//           onClick={handleSubmit}
//           disabled={!answer.trim() || loading}
//         >
//           답변 제출
//         </Button>

//         {feedback && (
//           <motion.p
//             className="mt-4 text-sm text-primary"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {feedback}
//           </motion.p>
//         )}
//       </motion.div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// 더미 질문 및 피드백 데이터
const DUMMY_QUESTION = "프론트엔드에서 CSR과 SSR의 차이점은 무엇인가요?";
const DUMMY_FEEDBACK =
  "좋은 답변이었습니다! 하지만 SSR의 성능 장점에 대해 좀 더 자세히 설명하면 좋을 것 같아요.";

export default function InterviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "프론트엔드";
  const difficulty = searchParams.get("difficulty") || "초급";

  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setQuestion(DUMMY_QUESTION);
      setLoading(false);
    }, 1000);
  }, [topic, difficulty]);

  const handleSubmit = () => {
    if (answer.trim() === "") {
      setFeedback("답변을 입력해주세요.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setFeedback(DUMMY_FEEDBACK);
      setLoading(false);
    }, 1000);
  };

  const handleViewResult = () => {
    router.push(`/interview/result?feedback=${encodeURIComponent(feedback)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-background text-foreground">
      <motion.h1 className="text-3xl font-bold mb-4">
        {topic} ({difficulty}) 면접 연습
      </motion.h1>
      <motion.p className="text-lg text-muted-foreground mb-8 text-center">
        AI가 질문을 생성하고, 당신의 답변을 평가합니다.
      </motion.p>

      <motion.div className="w-full max-w-lg bg-card p-6 rounded-lg shadow-md">
        {loading ? (
          <p className="text-lg font-semibold mb-4 animate-pulse">
            질문을 불러오는 중...
          </p>
        ) : (
          <p className="text-lg font-semibold mb-4">{question}</p>
        )}

        <Input
          className="w-full mb-4"
          placeholder="답변을 입력하세요..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={loading}
        />

        <Button
          className="w-full mb-2"
          onClick={handleSubmit}
          disabled={!answer.trim() || loading}
        >
          답변 제출
        </Button>

        {feedback && (
          <motion.p className="mt-4 text-sm text-primary">{feedback}</motion.p>
        )}

        {feedback && (
          <Button className="w-full mt-4" onClick={handleViewResult}>
            결과 확인하기
          </Button>
        )}
      </motion.div>
    </div>
  );
}
