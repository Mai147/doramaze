enum WelcomeText {
  WELCOME = "Chào mừng bạn đến với Doramaze",
  STORY = "Trong 1 chuyến phiêu lưu như thường lệ, Nobita đã lạc mất Doraemon",
  MISSION = "Nhiệm vụ của bạn là giúp cho Nobita tìm đường đến với Doraemon",
}

enum TutorialText {
  TUTORIAL1 = "Hãy sử dụng các phím LÊN, XUỐNG, QUA, VỀ để điều khiển Nobita",
  TUTORIAL2 = "Nobita không thể vượt qua các ô có chướng ngại vật",
  TUTORIAL3 = "Nếu gặp các câu hỏi, Nobita cần phải trả lời đúng để vượt qua. Nếu trả lời sai, lối đi sẽ bị bịt kín",
  TUTORIAL4 = "Hãy giúp Nobita tiến đến vị trí của Doraemon để giành chiến thắng. Bạn sẽ thất bại nếu không còn con đường nào có thể đến được Doraemon.",
}

export enum WelcomeStep {
  WELCOME,
  TUTORIAL1,
  TUTORIAL2,
  TUTORIAL3,
  TUTORIAL4,
}

export const getWelcomeTextConfig = (words: string[]) => {
  return {
    typeSpeed: 60,
    deleteSpeed: 0,
    words,
  };
};

export const WELCOME_TEXTS = [
  WelcomeText.WELCOME,
  WelcomeText.STORY,
  WelcomeText.MISSION,
];

export const TUTORIAL_TEXTS = [
  TutorialText.TUTORIAL1,
  TutorialText.TUTORIAL2,
  TutorialText.TUTORIAL3,
  TutorialText.TUTORIAL4,
];
