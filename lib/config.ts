import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "맞벌이 부부는 어떻게 연말정산을 해야 유리한가요?",
    prompt: "맞벌이 부부는 어떻게 연말정산을 해야 유리한가요?",
    icon: "circle-question",
  },
  {
    label: "적립금 지급 프로모션 문자를 보내려고 하는데 주의사항 알려주세요.",
    prompt: "적립금 지급 프로모션 문자를 보내려고 하는데 주의사항 알려주세요.",
    icon: "circle-question",
  },
  {
    label: "협력사의 돌발 계약 해지 시 조치 방법 알려주세요.",
    prompt: "협력사가 갑자기 물량이 없다고 해서 계약을 해지하려고 하는데 어떻게 하면 되나요?.",
    icon: "circle-question",
  },  
  {
    label: "방송에서 비속어 및 욕설을 사용하여 방심위 제재를 받은 케이스.",
    prompt: "방송에서 출연자가 비속어 및 욕설을 사용하여 방심위 제재를 받은 케이스 알려줘.",
    icon: "circle-question",
  },
  {
    label: "매출액 단서조항 알려주세요.",
    prompt: "매출액 단서조항 알려주세요.",
    icon: "circle-question",
  },
  {
    label: "주름개선 기능성 화장품인데, 필러효과와 같은 광고표현이 가능한가요?",
    prompt: "신세계라이브쇼핑 진행시 주름개선 기능성 화장품인데, 필러효과와 같은 광고표현이 가능한가요?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "[연말정산/CSR/심의/품질관리] 문의가 가능합니다.";

export const GREETING = "[연말정산/CSR/심의/품질관리] 문의가 가능합니다.";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
